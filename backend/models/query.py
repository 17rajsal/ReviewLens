from typing import List, Optional, Literal, Dict, Any, Union
from backend.models.evidence import BaseCamelModel, EvidenceItem
from backend.models.entity import EntityReport
from backend.models.analysis import AspectAnalysis, ConflictReport, ConfidenceBreakdown, SourceDistribution, GraphData

class ParsedConstraints(BaseCamelModel):
    domain: Optional[str] = None
    entity_type: Optional[str] = None
    location: Optional[str] = None
    degree: Optional[str] = None
    branch: Optional[str] = None
    budget: Optional[float] = None
    budget_max: Optional[str] = None
    priority: Optional[str] = None
    priorities: List[str] = []
    cuisine: Optional[str] = None
    property_type: Optional[str] = None

class QueryRequest(BaseCamelModel):
    query: str

class ResearchQueryResponse(BaseCamelModel):
    id: str
    query: str
    category: Literal["college", "restaurant", "hotel", "pg", "general"]
    constraints: ParsedConstraints
    sources_scanned_count: int
    entities_discovered: int
    conflicts_identified: int
    deduplicated_clusters: int
    results: List[EntityReport] = []
    
    # Unified Conceptual Contract Collections
    entities: List[EntityReport] = []
    evidence: List[EvidenceItem] = []
    aspects: List[AspectAnalysis] = []
    conflicts: List[ConflictReport] = []
    sources: List[SourceDistribution] = []
    corroboration: Optional[ConfidenceBreakdown] = None
    graph: Optional[GraphData] = None
    source_status: Dict[str, str] = {}
    demo_mode: bool = False
    research_mode: Literal["LIVE_RESEARCH", "PARTIAL_LIVE_RESEARCH", "DEMO_DATA", "FALLBACK_DATA"] = "DEMO_DATA"
    live_sources_count: int = 0
    demo_sources_count: int = 0
    provenance_summary: Dict[str, int] = {}
