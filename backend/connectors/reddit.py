import time
import datetime
from urllib.parse import urlparse
from typing import List, Dict, Any, Optional
import httpx
from backend.config import settings
from backend.connectors.base import BaseSourceConnector, CATEGORY_PUBLIC_DISCUSSION
from backend.connectors.resilience import RateLimiter, ResponseCache, retry_with_backoff
from backend.models.source import NormalizedSource
from backend.models.evidence import EvidenceItem

class RedditConnector(BaseSourceConnector):
    """
    Dedicated Reddit source connector adhering strictly to official Reddit API terms.
    Does NOT scrape Reddit pages or bypass rate limits.
    If credentials are not configured, it transparently reports 'NOT CONFIGURED'.
    Never silently produces fake Reddit data.
    """

    def __init__(self):
        self.client_id = settings.REDDIT_CLIENT_ID
        self.client_secret = settings.REDDIT_CLIENT_SECRET
        self.user_agent = settings.REDDIT_USER_AGENT
        self._access_token: Optional[str] = None
        self.rate_limiter = RateLimiter(max_requests=30, window_seconds=60.0)
        self.cache = ResponseCache(default_ttl_seconds=settings.CACHE_TTL_SECONDS)

    @property
    def name(self) -> str:
        return "Reddit Public Discussions"

    @property
    def source_type(self) -> str:
        return "reddit"

    @property
    def standard_category(self) -> str:
        return CATEGORY_PUBLIC_DISCUSSION

    def is_available(self) -> bool:
        return bool(self.client_id and self.client_secret)

    def is_configured(self) -> bool:
        return self.is_available()

    def get_rate_limit_info(self) -> Dict[str, Any]:
        return self.rate_limiter.get_info()

    async def health(self) -> Dict[str, Any]:
        if not self.is_available():
            return {
                "source": "reddit",
                "status": "NOT CONFIGURED",
                "operational_status": "NOT CONFIGURED",
                "configured": False,
                "reachable": False,
                "authenticated": False,
                "message": "Reddit OAuth credentials (REDDIT_CLIENT_ID / REDDIT_CLIENT_SECRET) not supplied in .env."
            }
        
        # Real OAuth token probe to verify live reachability
        try:
            start_t = time.time()
            authenticated = await self._authenticate()
            latency = int((time.time() - start_t) * 1000)
            if authenticated and self._access_token:
                return {
                    "source": "reddit",
                    "status": "LIVE",
                    "operational_status": "LIVE",
                    "configured": True,
                    "reachable": True,
                    "authenticated": True,
                    "latency_ms": latency,
                    "message": "Reddit official OAuth API active and reachable."
                }
            else:
                return {
                    "source": "reddit",
                    "status": "ERROR",
                    "operational_status": "ERROR",
                    "configured": True,
                    "reachable": False,
                    "authenticated": False,
                    "message": "Reddit OAuth authentication failed (invalid credentials or network failure)."
                }
        except Exception as e:
            return {
                "source": "reddit",
                "status": "ERROR",
                "operational_status": "ERROR",
                "configured": True,
                "reachable": False,
                "authenticated": False,
                "message": f"Reddit API unreachable: {str(e)}"
            }

    async def _authenticate(self) -> bool:
        if not self.is_available():
            return False
        try:
            async with httpx.AsyncClient() as client:
                auth = (self.client_id, self.client_secret)
                data = {"grant_type": "client_credentials"}
                headers = {"User-Agent": self.user_agent}
                resp = await client.post("https://www.reddit.com/api/v1/access_token", auth=auth, data=data, headers=headers, timeout=5.0)
                if resp.status_code == 200:
                    self._access_token = resp.json().get("access_token")
                    return True
        except Exception:
            self._access_token = None
        return False

    async def search(
        self,
        query: str,
        entity_type: Optional[str] = None,
        location: Optional[str] = None,
        limit: int = 10
    ) -> List[NormalizedSource]:
        if not self.is_available():
            return []

        cache_key = f"reddit:search:{query.lower()}:{limit}"
        cached = await self.cache.get(cache_key)
        if cached:
            return cached

        if not await self.rate_limiter.acquire():
            return []

        if not self._access_token:
            authenticated = await self._authenticate()
            if not authenticated:
                return []

        async def _call_api():
            headers = {
                "Authorization": f"bearer {self._access_token}",
                "User-Agent": self.user_agent
            }
            params = {
                "q": query,
                "limit": limit,
                "sort": "relevance",
                "type": "link"
            }
            async with httpx.AsyncClient() as client:
                resp = await client.get("https://oauth.reddit.com/search", headers=headers, params=params, timeout=6.0)
                if resp.status_code == 200:
                    children = resp.json().get("data", {}).get("children", [])
                    results = []
                    for child in children:
                        data = child.get("data", {})
                        if data.get("title") or data.get("selftext"):
                            results.append(self.normalize(data))
                    return results
            return []

        results = await retry_with_backoff(_call_api, max_retries=2) or []
        if results:
            await self.cache.set(cache_key, results)
        return results

    async def fetch(self, source_id_or_url: str) -> Optional[NormalizedSource]:
        return None

    def normalize(self, raw_payload: Dict[str, Any]) -> NormalizedSource:
        title = raw_payload.get("title", "")
        selftext = raw_payload.get("selftext", "")
        content = selftext if len(selftext) > 20 else title
        snippet = (content[:280] + "...") if len(content) > 280 else content
        permalink = raw_payload.get("permalink", "")
        full_url = f"https://reddit.com{permalink}" if permalink else None
        
        created_utc = raw_payload.get("created_utc")
        published_at = datetime.datetime.fromtimestamp(created_utc, tz=datetime.timezone.utc).strftime("%Y-%m-%d") if created_utc else "Date unavailable"
        now_iso = datetime.datetime.now(datetime.timezone.utc).isoformat()

        return NormalizedSource(
            id=f"reddit-{raw_payload.get('id', abs(hash(title)) % 100000)}",
            type="reddit",
            domain="reddit.com",
            title=title,
            url=full_url,
            author=f"u/{raw_payload.get('author')}" if raw_payload.get("author") else "Not available",
            published_at=published_at,
            retrieved_at=now_iso,
            content=content,
            snippet=snippet,
            source_status="live",
            metadata={
                **raw_payload,
                "source_category": CATEGORY_PUBLIC_DISCUSSION,
                "subreddit": raw_payload.get("subreddit"),
                "score": raw_payload.get("score"),
                "num_comments": raw_payload.get("num_comments")
            }
        )

    def to_evidence_item(self, source: NormalizedSource, entity_hint: str = "") -> EvidenceItem:
        year = 2026
        if source.published_at and len(source.published_at) >= 4 and source.published_at[:4].isdigit():
            year = int(source.published_at[:4])
        
        sub = source.metadata.get("subreddit", "discussion")
        return EvidenceItem(
            id=source.id,
            source="reddit",
            source_type="reddit",
            source_name=f"Reddit • r/{sub}",
            source_domain=source.domain,
            source_url=source.url,
            source_title=source.title,
            source_category=CATEGORY_PUBLIC_DISCUSSION,
            excerpt=source.snippet or source.content[:280],
            text=source.content,
            content=source.content,
            url=source.url,
            date=source.published_at or "Public Discussion",
            published_at=source.published_at,
            retrieved_at=source.retrieved_at,
            year=year,
            aspect="General",
            sentiment="neutral",
            sentiment_confidence=0.85,
            relevance_score=88.0,
            author_role=source.author,
            upvotes_or_reactions=source.metadata.get("score"),
            provenance="LIVE_REDDIT",
            is_live=True,
            is_demo=False,
            is_fallback=False,
            entity=entity_hint,
            entity_hint=entity_hint,
            metadata=source.metadata
        )

# Backward-compatible alias
RedditSourceConnector = RedditConnector
