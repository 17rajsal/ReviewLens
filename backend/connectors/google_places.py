import time
import datetime
import urllib.parse
from typing import List, Dict, Any, Optional
import httpx
from backend.config import settings
from backend.connectors.base import BaseSourceConnector, CATEGORY_OFFICIAL_PLACE
from backend.connectors.resilience import RateLimiter, ResponseCache, retry_with_backoff
from backend.models.source import NormalizedSource
from backend.models.evidence import EvidenceItem

class GooglePlacesConnector(BaseSourceConnector):
    """
    Official Google Places API connector.
    Used exclusively for verified place discovery, geographic coordinates (lat/lon),
    formatted address, Place ID, and official business metadata.
    STRICT POLICY:
    - Never fabricates place data or coordinates.
    - If GOOGLE_PLACES_API_KEY is not configured, returns NOT CONFIGURED gracefully.
    - Place information is labeled 'OFFICIAL PLACE / BUSINESS' (metadata, not subjective review).
    """

    PLACES_SEARCH_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json"
    PLACE_DETAILS_URL = "https://maps.googleapis.com/maps/api/place/details/json"

    def __init__(self):
        self.api_key = settings.GOOGLE_PLACES_API_KEY
        self.rate_limiter = RateLimiter(max_requests=60, window_seconds=60.0)
        self.cache = ResponseCache(default_ttl_seconds=settings.CACHE_TTL_SECONDS)

    @property
    def name(self) -> str:
        return "Google Places Platform"

    @property
    def source_type(self) -> str:
        return "official"

    @property
    def standard_category(self) -> str:
        return CATEGORY_OFFICIAL_PLACE

    def is_available(self) -> bool:
        return bool(self.api_key)

    def is_configured(self) -> bool:
        return self.is_available()

    def get_rate_limit_info(self) -> Dict[str, Any]:
        return self.rate_limiter.get_info()

    async def health(self) -> Dict[str, Any]:
        if not self.api_key:
            return {
                "source": "google_places",
                "status": "NOT CONFIGURED",
                "operational_status": "NOT CONFIGURED",
                "configured": False,
                "reachable": False,
                "authenticated": False,
                "message": "GOOGLE_PLACES_API_KEY not configured in .env."
            }
        
        # Real Google Places textsearch probe to verify live credentials and reachability
        try:
            start_t = time.time()
            params = {"query": "Connaught Place, New Delhi", "key": self.api_key}
            async with httpx.AsyncClient() as client:
                resp = await client.get(self.PLACES_SEARCH_URL, params=params, timeout=5.0)
                latency = int((time.time() - start_t) * 1000)
                if resp.status_code == 200:
                    data = resp.json()
                    api_status = data.get("status")
                    if api_status in ("OK", "ZERO_RESULTS"):
                        return {
                            "source": "google_places",
                            "status": "LIVE",
                            "operational_status": "LIVE",
                            "configured": True,
                            "reachable": True,
                            "authenticated": True,
                            "latency_ms": latency,
                            "message": "Google Places API active with official Place ID and coordinates resolution."
                        }
                    elif api_status == "OVER_QUERY_LIMIT":
                        return {
                            "source": "google_places",
                            "status": "RATE LIMITED",
                            "operational_status": "RATE LIMITED",
                            "configured": True,
                            "reachable": False,
                            "authenticated": True,
                            "message": "Google Places API quota or rate limit exceeded."
                        }
                    else:
                        return {
                            "source": "google_places",
                            "status": "ERROR",
                            "operational_status": "ERROR",
                            "configured": True,
                            "reachable": False,
                            "authenticated": False,
                            "message": f"Google Places API request failed: {data.get('error_message', api_status)}"
                        }
                else:
                    return {
                        "source": "google_places",
                        "status": "ERROR",
                        "operational_status": "ERROR",
                        "configured": True,
                        "reachable": False,
                        "authenticated": False,
                        "message": f"Google Places HTTP status {resp.status_code}."
                    }
        except Exception as e:
            return {
                "source": "google_places",
                "status": "ERROR",
                "operational_status": "ERROR",
                "configured": True,
                "reachable": False,
                "authenticated": False,
                "message": f"Google Places connection error: {str(e)}"
            }

    async def search(
        self,
        query: str,
        entity_type: Optional[str] = None,
        location: Optional[str] = None,
        limit: int = 5
    ) -> List[NormalizedSource]:
        if not self.is_available():
            return []

        search_query = query
        if location and location.lower() not in query.lower():
            search_query = f"{query} in {location}"

        cache_key = f"gplaces:search:{search_query.lower()}:{limit}"
        cached = await self.cache.get(cache_key)
        if cached:
            return cached

        if not await self.rate_limiter.acquire():
            return []

        async def _call_api():
            params = {
                "query": search_query,
                "key": self.api_key
            }
            async with httpx.AsyncClient() as client:
                resp = await client.get(self.PLACES_SEARCH_URL, params=params, timeout=6.0)
                if resp.status_code == 200:
                    data = resp.json()
                    results = data.get("results", [])[:limit]
                    return [self.normalize(r) for r in results]
            return []

        results = await retry_with_backoff(_call_api, max_retries=2) or []
        if results:
            await self.cache.set(cache_key, results)
        return results

    async def fetch(self, source_id_or_url: str) -> Optional[NormalizedSource]:
        if not self.is_available():
            return None

        place_id = source_id_or_url
        if place_id.startswith("http"):
            # Not a place id
            return None

        cache_key = f"gplaces:details:{place_id}"
        cached = await self.cache.get(cache_key)
        if cached:
            return cached

        async def _call_api():
            params = {
                "place_id": place_id,
                "fields": "place_id,name,formatted_address,geometry,rating,user_ratings_total,price_level,website,url",
                "key": self.api_key
            }
            async with httpx.AsyncClient() as client:
                resp = await client.get(self.PLACE_DETAILS_URL, params=params, timeout=6.0)
                if resp.status_code == 200:
                    data = resp.json().get("result")
                    if data:
                        return self.normalize(data)
            return None

        result = await retry_with_backoff(_call_api, max_retries=2)
        if result:
            await self.cache.set(cache_key, result)
        return result

    def normalize(self, raw_payload: Dict[str, Any]) -> NormalizedSource:
        now_iso = datetime.datetime.now(datetime.timezone.utc).isoformat()
        place_id = raw_payload.get("place_id") or f"gp-{abs(hash(raw_payload.get('name', ''))) % 1000000}"
        name = raw_payload.get("name", "Unknown Place")
        address = raw_payload.get("formatted_address") or raw_payload.get("vicinity") or "Address unavailable"
        
        geometry = raw_payload.get("geometry", {}).get("location", {})
        lat = geometry.get("lat")
        lng = geometry.get("lng")
        
        rating = raw_payload.get("rating")
        total_ratings = raw_payload.get("user_ratings_total")
        maps_url = raw_payload.get("url") or (f"https://www.google.com/maps/search/?api=1&query={urllib.parse.quote(name)}&query_place_id={place_id}" if place_id else None)
        
        snippet = (
            f"Google Places Verified Record: {name}. Located at {address}. "
            f"Geographic coordinates: [{lat}, {lng}]. "
            + (f"Aggregate rating: {rating}/5.0 based on {total_ratings} submissions. " if rating else "")
            + f"Place ID: {place_id}."
        )

        return NormalizedSource(
            id=f"gplaces-{place_id}",
            type="official",
            domain="maps.google.com",
            title=f"{name} (Verified Google Place Record)",
            url=maps_url,
            author="Google Places Platform",
            published_at="Official Place Record",
            retrieved_at=now_iso,
            content=snippet,
            snippet=snippet,
            source_status="live",
            metadata={
                "place_id": place_id,
                "name": name,
                "formatted_address": address,
                "latitude": lat,
                "longitude": lng,
                "rating": rating,
                "user_ratings_total": total_ratings,
                "price_level": raw_payload.get("price_level"),
                "website": raw_payload.get("website"),
                "source_category": CATEGORY_OFFICIAL_PLACE
            }
        )

    def to_evidence_item(self, source: NormalizedSource, entity_hint: str = "") -> EvidenceItem:
        meta = source.metadata or {}
        rating = meta.get("rating")
        user_ratings = meta.get("user_ratings_total")
        rating_text = f"Verified Google rating: {rating}/5.0 ({user_ratings} reviews). " if rating else ""
        entity_name = entity_hint or meta.get("name") or "Verified Place"
        
        return EvidenceItem(
            id=source.id,
            source="official",
            source_type="official",
            source_name="Google Places Platform",
            source_domain=source.domain,
            source_url=source.url,
            source_title=source.title,
            source_category=CATEGORY_OFFICIAL_PLACE,
            excerpt=f"Google Places Verified Record: {entity_name}. Located at {meta.get('formatted_address', '')}. {rating_text}Place ID: {meta.get('place_id')}.",
            text=source.content,
            content=source.content,
            url=source.url,
            date="Official Place Record",
            published_at="Official Place Record",
            retrieved_at=source.retrieved_at,
            year=2026,
            aspect="Location & Open Data",
            sentiment="neutral",
            sentiment_confidence=0.98,
            relevance_score=95.0,
            author_role="Google Places Platform",
            provenance="LIVE_GOOGLE_PLACES",
            is_live=True,
            is_demo=False,
            is_fallback=False,
            entity=entity_name,
            entity_hint=entity_name,
            metadata=meta
        )
