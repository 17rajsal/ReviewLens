from typing import List, Optional
from backend.models.evidence import BaseCamelModel, EvidenceItem
from backend.models.analysis import AspectAnalysis, RecencyTrend, SourceDistribution, ConflictReport, ConfidenceBreakdown

class EntityReport(BaseCamelModel):
    id: str
    canonical_name: str
    aliases: List[str] = []
    category: str
    location: str
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    place_id: Optional[str] = None
    formatted_address: Optional[str] = None
    google_maps_url: Optional[str] = None
    website: Optional[str] = None
    rating: Optional[float] = None
    user_ratings_total: Optional[int] = None
    price_level: Optional[str] = None
    photos: List[str] = []
    affiliation: Optional[str] = None
    fees_summary: Optional[str] = None
    annual_fee_numeric: Optional[float] = None
    highlight_tag: str
    evidence_confidence_score: float  # 0 - 100
    confidence_breakdown: ConfidenceBreakdown
    summary_verdict: str
    aspects: List[AspectAnalysis] = []
    recency_trends: List[RecencyTrend] = []
    source_composition: List[SourceDistribution] = []
    conflict: ConflictReport
    evidence_list: List[EvidenceItem] = []
    institution_type: Optional[str] = None  # "engineering" | "medical" | "management" | "college" | "university" | "restaurant"
    programs: List[str] = []
    domains: List[str] = []
    degree_levels: List[str] = []
    city: Optional[str] = "Delhi"
    district: Optional[str] = None
    locality: Optional[str] = None
