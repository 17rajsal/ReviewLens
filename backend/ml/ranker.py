import math
from typing import List, Dict, Any

class CorroborationRanker:
    """
    Computes Corroboration Coverage and Evidence Density scores for ranked entities.
    STRICT PHILOSOPHY:
    - Measures evidence density, source diversity, and cross-source corroboration.
    - NEVER purports to measure 'factual truth' or 'truth probability'.
    """

    def __init__(
        self,
        weight_relevance: float = 0.25,
        weight_corroboration: float = 0.35,
        weight_diversity: float = 0.20,
        weight_recency: float = 0.20,
        duplicate_penalty: float = 0.10,
        conflict_penalty: float = 0.05
    ):
        self.weight_relevance = weight_relevance
        self.weight_corroboration = weight_corroboration
        self.weight_diversity = weight_diversity
        self.weight_recency = weight_recency
        self.duplicate_penalty = duplicate_penalty
        self.conflict_penalty = conflict_penalty

    def calculate_corroboration_coverage(
        self,
        evidence_items: List[Dict[str, Any]],
        has_conflict: bool = False,
        duplicate_cluster_count: int = 0
    ) -> Dict[str, Any]:
        """
        Calculates normalized corroboration coverage score (0.0 to 100.0)
        and individual factor breakdowns.
        """
        if not evidence_items:
            return {
                "coverage_score": 50.0,
                "independent_sources_count": 0,
                "source_types_count": 0,
                "corroboration_density": 40.0,
                "recency_factor": 50.0,
                "conflict_penalty_applied": 0.0,
                "duplicate_penalty_applied": 0.0,
                "explanation": "Limited evidence density retrieved."
            }

        # 1. Independent sources and types count
        source_types = set(ev.get("source_type", ev.get("source", "web")) for ev in evidence_items)
        authors = set(ev.get("author", "unknown") for ev in evidence_items if ev.get("author") and ev.get("author") != "Not provided by source")
        
        # 2. Corroboration density based on distinct corroborating citations
        unique_sources_count = len(evidence_items)
        corroboration_raw = min(100.0, (unique_sources_count * 5.0) + (len(authors) * 3.5))
        
        # 3. Source diversity score (out of 4 main categories: Open Data, Discussions, Institutional, Web)
        diversity_score = min(100.0, (len(source_types) / 4.0) * 100.0)
        
        # 4. Recency factor
        recency_scores = []
        for ev in evidence_items:
            bucket = ev.get("recency_bucket", "recent")
            if bucket == "recent":
                recency_scores.append(95.0)
            elif bucket == "moderately_recent":
                recency_scores.append(80.0)
            else:
                recency_scores.append(60.0)
        recency_factor = sum(recency_scores) / len(recency_scores) if recency_scores else 75.0

        # 5. Penalties
        dup_penalty = min(15.0, duplicate_cluster_count * 3.0)
        conf_penalty = 5.0 if has_conflict else 0.0

        # Weighted composition
        base_score = (
            (corroboration_raw * self.weight_corroboration) +
            (diversity_score * self.weight_diversity) +
            (recency_factor * self.weight_recency) +
            (85.0 * self.weight_relevance)
        )
        final_coverage = round(max(50.0, min(96.0, base_score - dup_penalty - conf_penalty)), 1)

        return {
            "coverage_score": final_coverage,
            "independent_sources_count": unique_sources_count,
            "source_types_count": len(source_types),
            "corroboration_density": round(corroboration_raw, 1),
            "recency_factor": round(recency_factor, 1),
            "conflict_penalty_applied": conf_penalty,
            "duplicate_penalty_applied": dup_penalty,
            "explanation": (
                f"Corroboration coverage of {final_coverage}% derived across {len(source_types)} distinct source categories "
                f"and {unique_sources_count} traceable evidence citations."
            )
        }
