from typing import List, Tuple
from backend.models.evidence import EvidenceItem
from backend.utils.text import calculate_jaccard_similarity

class DeduplicationService:
    """
    Identifies near-duplicate excerpts, syndications, and cross-posted claims.
    Prevents repeated claims from artificially inflating corroboration scores.
    
    IMPORTANT SAFETY & PRIVACY PRINCIPLE:
    Labels clusters strictly as 'Highly similar content'. Similarity alone is never
    treated as proof of malicious intent or fraudulent reviews.
    """

    def __init__(self, threshold: float = 0.80):
        self.threshold = threshold

    def deduplicate(self, items: List[EvidenceItem]) -> Tuple[List[EvidenceItem], int]:
        """
        Clusters duplicate/similar evidence items.
        Returns:
            (updated_items, total_duplicate_clusters)
        """
        if not items:
            return [], 0

        clusters: List[List[int]] = []
        visited = set()

        # Pairwise comparison
        for i in range(len(items)):
            if i in visited:
                continue
            cluster = [i]
            visited.add(i)

            for j in range(i + 1, len(items)):
                if j in visited:
                    continue

                # Exact cryptographic hash match OR high text similarity
                hash_match = (
                    items[i].verification_hash and
                    items[j].verification_hash and
                    items[i].verification_hash == items[j].verification_hash
                )

                text_a = items[i].text or items[i].excerpt
                text_b = items[j].text or items[j].excerpt
                sim = calculate_jaccard_similarity(text_a, text_b)

                if hash_match or sim >= self.threshold:
                    cluster.append(j)
                    visited.add(j)

            clusters.append(cluster)

        # Annotate items with duplicate cluster metadata
        updated_items = list(items)
        cluster_count = 0

        for c_idx, cluster in enumerate(clusters):
            if len(cluster) > 1:
                cluster_count += 1
                cluster_id = f"dup-cluster-{c_idx + 1}"

                # Original representative item
                original_idx = cluster[0]
                orig_item = updated_items[original_idx]
                updated_meta = dict(orig_item.metadata)
                updated_meta["similarity_label"] = "Highly similar content"
                updated_meta["cluster_size"] = len(cluster)

                updated_items[original_idx] = orig_item.model_copy(update={
                    "duplicate_cluster_id": cluster_id,
                    "is_duplicate_original": True,
                    "duplicate_count": len(cluster),
                    "metadata": updated_meta
                })

                # Replicas
                for dup_idx in cluster[1:]:
                    dup_item = updated_items[dup_idx]
                    dup_meta = dict(dup_item.metadata)
                    dup_meta["similarity_label"] = "Highly similar content"
                    dup_meta["cluster_size"] = len(cluster)

                    updated_items[dup_idx] = dup_item.model_copy(update={
                        "duplicate_cluster_id": cluster_id,
                        "is_duplicate_original": False,
                        "duplicate_count": len(cluster),
                        "metadata": dup_meta
                    })

        return updated_items, cluster_count
