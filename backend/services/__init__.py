from backend.services.query_engine import QueryEngine
from backend.services.entity_resolution import EntityResolutionService
from backend.services.deduplication import DeduplicationService
from backend.services.aspect_analysis import AspectAnalysisService
from backend.services.contradiction import ContradictionDetectionService
from backend.services.evidence_engine import EvidenceEngine

__all__ = [
    "QueryEngine",
    "EntityResolutionService",
    "DeduplicationService",
    "AspectAnalysisService",
    "ContradictionDetectionService",
    "EvidenceEngine",
]
