import re
from typing import List, Dict, Tuple, Optional
from backend.models.evidence import EvidenceItem
from backend.utils.text import normalize_text, calculate_jaccard_similarity

GENERIC_CANONICAL_MAP = {
    # Real Verified Delhi Colleges
    "entity-srcc": {
        "canonical_name": "Shri Ram College of Commerce (SRCC)",
        "aliases": ["srcc", "shri ram college of commerce", "shri ram college", "shriram college", "srcc delhi", "srcc north campus"]
    },
    "entity-miranda-house": {
        "canonical_name": "Miranda House",
        "aliases": ["miranda house", "miranda", "mh", "mh du", "miranda house delhi", "miranda college"]
    },
    "entity-hindu-college": {
        "canonical_name": "Hindu College",
        "aliases": ["hindu college", "hindu", "hindu du", "hindu college delhi", "hindu north campus"]
    },
    "entity-st-stephens": {
        "canonical_name": "St. Stephen's College",
        "aliases": ["st stephen's college", "st stephens", "stephens", "st stephen's", "stephens du", "stephens college delhi"]
    },
    "entity-hansraj-college": {
        "canonical_name": "Hansraj College",
        "aliases": ["hansraj college", "hansraj", "hans raj", "hansraj du", "hansraj north campus"]
    },
    "entity-ramjas-college": {
        "canonical_name": "Ramjas College",
        "aliases": ["ramjas college", "ramjas", "ramjas du", "ramjas north campus", "ramjas college delhi"]
    },
    "entity-gargi-college": {
        "canonical_name": "Gargi College",
        "aliases": ["gargi college", "gargi", "gargi du", "gargi south campus", "gargi college delhi"]
    },
    "entity-sscbs": {
        "canonical_name": "Shaheed Sukhdev College of Business Studies (SSCBS)",
        "aliases": ["sscbs", "shaheed sukhdev college of business studies", "shaheed sukhdev", "sukhdev", "cbs", "cbs du"]
    },
    "entity-andc": {
        "canonical_name": "Acharya Narendra Dev College (ANDC)",
        "aliases": ["andc", "acharya narendra dev college", "acharya narendra dev", "andc du", "andc kalkaji"]
    },
    "entity-dcac": {
        "canonical_name": "Delhi College of Arts and Commerce (DCAC)",
        "aliases": ["dcac", "delhi college of arts and commerce", "dcac du", "dcac south campus"]
    },
    "entity-sggscc": {
        "canonical_name": "Sri Guru Gobind Singh College of Commerce (SGGSCC)",
        "aliases": ["sggscc", "sri guru gobind singh college of commerce", "guru gobind singh college of commerce", "ggs", "sggs", "sggscc pitampura"]
    },
    "entity-dduc": {
        "canonical_name": "Deen Dayal Upadhyaya College (DDUC)",
        "aliases": ["dduc", "deen dayal upadhyaya college", "deen dayal upadhyay", "ddu college", "dduc dwarka"]
    },
    "entity-sbsc": {
        "canonical_name": "Shaheed Bhagat Singh College (SBSC)",
        "aliases": ["sbsc", "shaheed bhagat singh college", "bhagat singh college", "sbsc du", "sbsc south campus"]
    },
    "entity-keshav-mahavidyalaya": {
        "canonical_name": "Keshav Mahavidyalaya",
        "aliases": ["keshav mahavidyalaya", "kmv du", "keshav college", "keshav", "keshav mahavidyalaya pitampura"]
    },
    "entity-maharaja-agrasen": {
        "canonical_name": "Maharaja Agrasen College",
        "aliases": ["maharaja agrasen college", "mac du", "mac delhi", "agrasen college du"]
    },

    # Real Verified Delhi Restaurants
    "entity-indian-accent": {
        "canonical_name": "Indian Accent",
        "aliases": ["indian accent", "indian accent delhi", "the lodhi restaurant", "manish mehrotra restaurant"]
    },
    "entity-bukhara": {
        "canonical_name": "Bukhara",
        "aliases": ["bukhara", "bukhara itc maurya", "bukhara delhi", "dal bukhara", "bukhara chanakyapuri"]
    },
    "entity-tamra": {
        "canonical_name": "Tamra",
        "aliases": ["tamra", "tamra shangri la", "tamra delhi", "shangri la tamra"]
    },
    "entity-delhi-o-delhi": {
        "canonical_name": "Delhi 'O' Delhi",
        "aliases": ["delhi o delhi", "delhi 'o' delhi", "ihc dining", "india habitat centre dining"]
    },
    "entity-dakshin": {
        "canonical_name": "Dakshin",
        "aliases": ["dakshin", "dakshin sheraton", "dakshin delhi", "sheraton saket dakshin"]
    },
    "entity-olive-mehrauli": {
        "canonical_name": "Olive Bar & Kitchen",
        "aliases": ["olive bar and kitchen", "olive mehrauli", "olive qutub", "olive bar & kitchen"]
    },
    "entity-spice-art": {
        "canonical_name": "Spice Art",
        "aliases": ["spice art", "spice art crowne plaza", "spice art rohini"]
    },
    "entity-daryaganj-cp": {
        "canonical_name": "Daryaganj Restaurant",
        "aliases": ["daryaganj", "daryaganj restaurant", "daryaganj cp", "daryaganj connaught place"]
    },
    "entity-karims": {
        "canonical_name": "Karim's (Jama Masjid)",
        "aliases": ["karim's", "karims", "karim's jama masjid", "karim hotel old delhi", "karims delhi", "karim old delhi"]
    },
    "entity-saravana-bhavan-cp": {
        "canonical_name": "Saravana Bhavan",
        "aliases": ["saravana bhavan", "saravana bhavan cp", "hsb delhi", "saravana bhavan connaught place"]
    },
    "entity-caffe-tonino-cp": {
        "canonical_name": "Caffè Tonino",
        "aliases": ["caffè tonino", "caffe tonino", "tonino cp", "caffe tonino connaught place"]
    },

    # Compatibility Benchmarks (for offline regression testing)
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
