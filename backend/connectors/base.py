from abc import ABC, abstractmethod
from typing import List, Dict, Any, Optional
from backend.models.source import NormalizedSource

# Standard Source Category Constants
CATEGORY_PUBLIC_DISCUSSION = "PUBLIC DISCUSSION"
CATEGORY_OFFICIAL_PLACE = "OFFICIAL PLACE / BUSINESS"
CATEGORY_OPEN_DATA = "OPEN DATA"
CATEGORY_PLACE_METADATA = "PLACE METADATA / OPEN DATA"
CATEGORY_INSTITUTIONAL_SOURCE = "INSTITUTIONAL SOURCE"
CATEGORY_SEARCH_RESULT = "SEARCH RESULT / PUBLIC WEB PAGE"
CATEGORY_DEMO_ARCHIVE = "DEMO BENCHMARK ARCHIVE"


class BaseSourceConnector(ABC):
    """
    Common abstract interface for all source connectors:
    - search(query, entity_type, location, limit): Discovers candidate sources
    - fetch(source_id_or_url): Retrieves raw representation
    - normalize(raw_payload): Transforms raw response into traceable NormalizedSource
    - health(): Returns operational readiness, latency, and authentication status
    - get_rate_limit_info(): Returns remaining rate limit quota
    - is_available(): Boolean readiness flag
    """

    @property
    @abstractmethod
    def name(self) -> str:
        pass

    @property
    @abstractmethod
    def source_type(self) -> str:
        pass

    @property
    def standard_category(self) -> str:
        return CATEGORY_SEARCH_RESULT

    @abstractmethod
    async def search(
        self,
        query: str,
        entity_type: Optional[str] = None,
        location: Optional[str] = None,
        limit: int = 10
    ) -> List[NormalizedSource]:
        pass

    @abstractmethod
    async def fetch(self, source_id_or_url: str) -> Optional[NormalizedSource]:
        pass

    @abstractmethod
    def normalize(self, raw_payload: Dict[str, Any]) -> NormalizedSource:
        pass

    @abstractmethod
    async def health(self) -> Dict[str, Any]:
        pass

    def is_available(self) -> bool:
        """Returns True if the connector is ready to execute queries."""
        return True

    def get_rate_limit_info(self) -> Dict[str, Any]:
        """Returns rate-limit metadata."""
        return {"status": "unlimited"}
