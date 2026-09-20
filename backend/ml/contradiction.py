from typing import List, Dict, Any, Optional
from backend.ml.preprocessing import clean_text

class ContradictionDetector:
    """
    Detects polarity discordance and divergence across independent sources
    for the exact same entity and aspect.
    Does NOT declare either source fake or determine truth.
    Produces balanced ReviewLens synthesis highlighting nuanced divergence.
    """

    def analyze_contradictions(
        self,
        entity_name: str,
        evidence_items: List[Dict[str, Any]]
    ) -> Dict[str, Any]:
        """
        Groups evidence by aspect, evaluates polarity divergence, and produces
        unbiased conflict report if opposing evidence is discovered.
        """
        aspect_buckets: Dict[str, Dict[str, List[Dict[str, Any]]]] = {}

        for ev in evidence_items:
            aspect = ev.get("aspect", "General")
            sentiment = ev.get("sentiment", "neutral").lower()

            if aspect not in aspect_buckets:
                aspect_buckets[aspect] = {"positive": [], "negative": [], "mixed": [], "neutral": []}

            if sentiment in aspect_buckets[aspect]:
                aspect_buckets[aspect][sentiment].append(ev)
            else:
                aspect_buckets[aspect]["neutral"].append(ev)

        # Detect aspect with largest divergence between positive and negative
        divergent_aspect = None
        max_divergence_score = 0
        conflicting_pos: List[Dict[str, Any]] = []
        conflicting_neg: List[Dict[str, Any]] = []

        for aspect, sentiments in aspect_buckets.items():
            pos_count = len(sentiments["positive"])
            neg_count = len(sentiments["negative"])

            if pos_count > 0 and neg_count > 0:
                score = min(pos_count, neg_count) * 2
                if score > max_divergence_score:
                    max_divergence_score = score
                    divergent_aspect = aspect
                    conflicting_pos = sentiments["positive"]
                    conflicting_neg = sentiments["negative"]

        if divergent_aspect and conflicting_pos and conflicting_neg:
            src_a = conflicting_pos[0]
            src_b = conflicting_neg[0]

            aspect_claim_a = src_a.get("excerpt", src_a.get("text", ""))[:180]
            aspect_claim_b = src_b.get("excerpt", src_b.get("text", ""))[:180]

            synthesis = (
                f"ReviewLens cross-source synthesis: Significant divergence identified across independent sources "
                f"regarding {divergent_aspect.lower()} for {entity_name}. Certain sources report favorable experience "
                f"({src_a.get('source_name', 'Source')}), whereas others report adverse experience "
                f"({src_b.get('source_name', 'Source')}). Evidence indicates mixed real-world consistency."
            )

            return {
                "has_conflict": True,
                "aspect": divergent_aspect,
                "claim_a": aspect_claim_a,
                "source_a": src_a.get("source_name", "Public Discussion"),
                "date_a": src_a.get("published_at", src_a.get("date", "Date unavailable")),
                "claim_b": aspect_claim_b,
                "source_b": src_b.get("source_name", "Public Web Page"),
                "date_b": src_b.get("published_at", src_b.get("date", "Date unavailable")),
                "synthesis": synthesis,
                "divergence_magnitude": "MODERATE_DIVERGENCE",
                "status": "MIXED"
            }

        return {
            "has_conflict": False,
            "aspect": None,
            "claim_a": None,
            "source_a": None,
            "date_a": None,
            "claim_b": None,
            "source_b": None,
            "date_b": None,
            "synthesis": f"No material divergence detected across sources for {entity_name}.",
            "divergence_magnitude": "CONSISTENT",
            "status": "CONSENSUS"
        }
