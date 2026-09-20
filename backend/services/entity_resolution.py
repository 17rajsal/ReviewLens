import re
from typing import List, Dict, Tuple, Optional
from backend.models.evidence import EvidenceItem
from backend.utils.text import normalize_text, calculate_jaccard_similarity

GENERIC_CANONICAL_MAP = {
    "entity-institution-a": {
        "canonical_name": "Institution A (Technical Campus)",
        "aliases": ["institution a", "tech campus a", "campus a", "college a"]
    },
    "entity-institution-b": {
        "canonical_name": "Institution B (Engineering Institute)",
        "aliases": ["institution b", "eng institute b", "campus b", "college b"]
    },
    "entity-institution-c": {
        "canonical_name": "Institution C (State University Campus)",
        "aliases": ["institution c", "university campus c", "campus c", "state university c"]
    },
    "entity-institution-d": {
        "canonical_name": "Institution D (Institute of Technology)",
        "aliases": ["institution d", "tech institute d", "campus d", "college d"]
    },
    "entity-restaurant-a": {
        "canonical_name": "Restaurant A (Traditional Kitchen)",
        "aliases": ["restaurant a", "kitchen a", "cafe a"]
    }
}

class EntityResolutionService:
    """
    Disambiguates informal mentions, abbreviations, and aliases into canonical entities.
    Applies strict confidence thresholding (0.75) to prevent erroneous merges
    solely based on surface similarity.
    """

    def __init__(self, registry: Optional[Dict[str, Dict]] = None, similarity_threshold: float = 0.75):
        self.registry = registry or GENERIC_CANONICAL_MAP
        self.similarity_threshold = similarity_threshold

    def resolve_text_to_entity(self, text: str) -> Tuple[Optional[str], float]:
        normalized_target = normalize_text(text)
        if not normalized_target:
            return None, 0.0

        # Phase 1: Exact alias or token boundary match (Confidence: 1.0)
        for entity_id, meta in self.registry.items():
            for alias in meta["aliases"]:
                normalized_alias = normalize_text(alias)
                pattern = rf'\b{re.escape(normalized_alias)}\b'
                if re.search(pattern, normalized_target):
                    return entity_id, 1.0

        # Phase 2: Fuzzy similarity match across token n-grams
        best_id: Optional[str] = None
        best_score: float = 0.0

        for entity_id, meta in self.registry.items():
            for alias in meta["aliases"]:
                sim = calculate_jaccard_similarity(normalized_target, alias)
                if sim > best_score:
                    best_score = sim
                    best_id = entity_id

        if best_score >= self.similarity_threshold:
            return best_id, round(best_score, 2)

        return None, 0.0

    def resolve_text_to_entity_id(self, text: str) -> Optional[str]:
        entity_id, _ = self.resolve_text_to_entity(text)
        return entity_id

    def group_evidence_by_entity(self, evidence_items: List[EvidenceItem]) -> Dict[str, List[EvidenceItem]]:
        grouped: Dict[str, List[EvidenceItem]] = {}

        for item in evidence_items:
            combined_text = f"{item.source_title} {item.excerpt} {item.entity_hint or ''}"
            matched_id, _ = self.resolve_text_to_entity(combined_text)

            if not matched_id:
                for ent_id in self.registry.keys():
                    short_key = ent_id.replace("entity-", "")
                    if short_key in item.id.lower():
                        matched_id = ent_id
                        break

            target_key = matched_id or "unresolved"
            if target_key not in grouped:
                grouped[target_key] = []
            grouped[target_key].append(item)

        return grouped
