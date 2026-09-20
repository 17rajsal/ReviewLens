import time
import os
import re
import datetime
from urllib.parse import urlparse
from typing import List, Dict, Any, Optional
import httpx
from backend.config import settings
from backend.connectors.base import BaseSourceConnector, CATEGORY_SEARCH_RESULT
from backend.connectors.resilience import RateLimiter, ResponseCache, retry_with_backoff
from backend.models.source import NormalizedSource
from backend.models.evidence import EvidenceItem

class WebSearchConnector(BaseSourceConnector):
    """
    Permitted public web search connector.
    Supports live search providers (SearXNG / Custom API / Public Search Endpoints)
    when configured via environment variables, with transparent availability reporting.
    DOES NOT perform unpermitted indiscriminate web scraping.
    """

    def __init__(self):
        self.api_key = settings.WEB_SEARCH_API_KEY
        self.search_endpoint = settings.WEB_SEARCH_ENDPOINT
        self.rate_limiter = RateLimiter(max_requests=20, window_seconds=60.0)
        self.cache = ResponseCache(default_ttl_seconds=settings.CACHE_TTL_SECONDS)

    @property
    def name(self) -> str:
        return "Public Web Search"

    @property
    def source_type(self) -> str:
        return "web"

    @property
    def standard_category(self) -> str:
        return CATEGORY_SEARCH_RESULT

    def is_available(self) -> bool:
        return bool(self.api_key or self.search_endpoint)

    def is_configured(self) -> bool:
        return self.is_available()

    def get_rate_limit_info(self) -> Dict[str, Any]:
        return self.rate_limiter.get_info()

    async def health(self) -> Dict[str, Any]:
        if not self.is_available():
            return {
                "source": "web_search",
                "status": "NOT CONFIGURED",
                "operational_status": "NOT CONFIGURED",
                "configured": False,
                "reachable": False,
                "authenticated": False,
                "message": "WEB_SEARCH_ENDPOINT or WEB_SEARCH_API_KEY not configured in .env."
            }
        
        # Real search endpoint probe
        try:
            start_t = time.time()
            headers = {"Authorization": f"Bearer {self.api_key}"} if self.api_key else {}
            params = {"q": "ping", "format": "json"}
            async with httpx.AsyncClient() as client:
                resp = await client.get(self.search_endpoint, params=params, headers=headers, timeout=5.0)
                latency = int((time.time() - start_t) * 1000)
                if resp.status_code == 200:
                    return {
                        "source": "web_search",
                        "status": "LIVE",
                        "operational_status": "LIVE",
                        "configured": True,
                        "reachable": True,
                        "authenticated": True,
                        "latency_ms": latency,
                        "message": "Public web search provider active and reachable."
                    }
                else:
                    return {
                        "source": "web_search",
                        "status": "ERROR",
                        "operational_status": "ERROR",
                        "configured": True,
                        "reachable": False,
                        "authenticated": False,
                        "message": f"Web search provider responded with status {resp.status_code}."
                    }
        except Exception as e:
            return {
                "source": "web_search",
                "status": "ERROR",
                "operational_status": "ERROR",
                "configured": True,
                "reachable": False,
                "authenticated": False,
                "message": f"Web search provider connection error: {str(e)}"
            }

    async def search(
        self,
        query: str,
        entity_type: Optional[str] = None,
        location: Optional[str] = None,
        limit: int = 10
    ) -> List[NormalizedSource]:
        if not self.is_available():
            return []

        cache_key = f"websearch:search:{query.lower()}:{limit}"
        cached = await self.cache.get(cache_key)
        if cached:
            return cached

        if not await self.rate_limiter.acquire():
            return []

        async def _call_api():
            headers = {"Authorization": f"Bearer {self.api_key}"} if self.api_key else {}
            params = {"q": query, "format": "json"}
            async with httpx.AsyncClient() as client:
                resp = await client.get(self.search_endpoint, params=params, headers=headers, timeout=5.0)
                if resp.status_code == 200:
                    data = resp.json()
                    items = data.get("results", [])[:limit]
                    return [self.normalize(item) for item in items]
            return []

        results = await retry_with_backoff(_call_api, max_retries=2) or []
        if results:
            await self.cache.set(cache_key, results)
        return results

    async def fetch(self, source_id_or_url: str) -> Optional[NormalizedSource]:
        url = source_id_or_url
        if not url.startswith("http"):
            return None
        try:
            async with httpx.AsyncClient() as client:
                resp = await client.get(url, headers={"User-Agent": "ReviewLens/1.0 (evidence-analysis)"}, timeout=4.0)
                if resp.status_code == 200:
                    return self.normalize({
                        "url": url,
                        "title": url,
                        "content": resp.text[:1000],
                        "snippet": resp.text[:240]
                    })
        except Exception:
            pass
        return None

    def normalize(self, raw_payload: Dict[str, Any]) -> NormalizedSource:
        url = raw_payload.get("url", "")
        domain = urlparse(url).netloc or "web"
        title = raw_payload.get("title", "Public Web Document")
        snippet = raw_payload.get("snippet") or raw_payload.get("content", "")[:280]
        now_iso = datetime.datetime.now(datetime.timezone.utc).isoformat()

        return NormalizedSource(
            id=f"web-{abs(hash(url or title)) % 1000000}",
            type="web",
            domain=domain,
            title=title,
            url=url or None,
            author=raw_payload.get("author") or "Not available",
            published_at=raw_payload.get("published_at") or "Date unavailable",
            retrieved_at=now_iso,
            content=raw_payload.get("content", snippet),
            snippet=snippet,
            source_status="live" if self.is_available() else "demo",
            metadata={
                **raw_payload,
                "source_category": CATEGORY_SEARCH_RESULT
            }
        )

    def to_evidence_item(self, source: NormalizedSource, entity_hint: str = "") -> EvidenceItem:
        return EvidenceItem(
            id=source.id,
            source="web",
            source_type="web",
            source_name=f"Web Search • {source.domain}",
            source_domain=source.domain,
            source_url=source.url,
            source_title=source.title,
            source_category=CATEGORY_SEARCH_RESULT,
            excerpt=source.snippet or source.content[:280],
            text=source.content,
            content=source.content,
            url=source.url,
            date=source.published_at or "Public Web Record",
            published_at=source.published_at,
            retrieved_at=source.retrieved_at,
            year=2026,
            aspect="General",
            sentiment="neutral",
            sentiment_confidence=0.85,
            relevance_score=85.0,
            author_role=source.author,
            provenance="LIVE_WEB_SEARCH",
            is_live=True,
            is_demo=False,
            is_fallback=False,
            entity=entity_hint,
            entity_hint=entity_hint,
            metadata=source.metadata
        )
