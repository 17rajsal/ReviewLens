from typing import List, Optional, Literal
from pydantic import BaseModel, ConfigDict
from pydantic.alias_generators import to_camel
from backend.models.evidence import BaseCamelModel, EvidenceItem, SentimentType, SourceType

class AspectAnalysis(BaseCamelModel):
    id: str
    name: str
    label: str
    sentiment: SentimentType
    positive_ratio: float  # 0 - 100
    evidence_count: int
    summary: str
    key_phrases: List[str] = []

class RecencyTrend(BaseCamelModel):
    year: int
    label: str
    sentiment: SentimentType
    summary: str
    mention_count: int

class SourceDistribution(BaseCamelModel):
    type: SourceType
    name: str
    count: int
    percentage: float
    icon_name: str

class ConflictReport(BaseCamelModel):
    has_conflict: bool
    topic: str
    positive_signal_count: int
    negative_signal_count: int
    summary: str
    impartial_synthesis: str
    supporting_evidence: List[EvidenceItem] = []
    opposing_evidence: List[EvidenceItem] = []

class ConfidenceBreakdown(BaseCamelModel):
    independent_discussions: int
    source_types_count: int
    recency_factor_score: float  # 0 - 100
    corroboration_density: float  # 0 - 100
    conflict_detected: bool
    conflict_penalty_applied: float

class GraphNode(BaseCamelModel):
    id: str
    label: str
    type: Literal["entity", "aspect", "source", "claim"]
    sentiment: Optional[SentimentType] = None
    value: Optional[float] = None
    details: Optional[str] = None
    x: Optional[float] = None
    y: Optional[float] = None
    vx: Optional[float] = None
    vy: Optional[float] = None

class GraphEdge(BaseCamelModel):
    source: str
    target: str
    label: Optional[str] = None
    sentiment: Optional[SentimentType] = None
    strength: Optional[float] = None

class GraphData(BaseCamelModel):
    nodes: List[GraphNode] = []
    edges: List[GraphEdge] = []
