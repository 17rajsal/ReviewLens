from typing import List, Dict, Any, Tuple
import numpy as np
from backend.ml.preprocessing import clean_text, tokenize, character_ngrams

class DuplicateDetector:
    """
    ML-based near-duplicate and content-similarity detector using hybrid token
    and character n-gram overlap.
    Identifies 'Highly similar content clusters' without asserting whether a review is fake.
    """

    def __init__(self, threshold: float = 0.38):
        self.threshold = threshold

    def compute_pairwise_similarity(self, text_a: str, text_b: str) -> float:
        """
        Computes hybrid similarity combining lexical token Jaccard and character 3-gram overlap.
        Handles subtle rephrasings, copy-pastes, and near-duplicate variations.
        """
        toks_a = set(tokenize(text_a, remove_stopwords=True))
        toks_b = set(tokenize(text_b, remove_stopwords=True))
        union_toks = toks_a | toks_b
        jaccard = (len(toks_a & toks_b) / len(union_toks)) if union_toks else 0.0

        chars_a = set(character_ngrams(text_a, n=3))
        chars_b = set(character_ngrams(text_b, n=3))
        union_chars = chars_a | chars_b
        char_jaccard = (len(chars_a & chars_b) / len(union_chars)) if union_chars else 0.0

        return round(0.50 * jaccard + 0.50 * char_jaccard, 4)

    def compute_pairwise_similarities(self, texts: List[str]) -> np.ndarray:
        n = len(texts)
        if n == 0:
            return np.zeros((0, 0))
        matrix = np.eye(n)
        for i in range(n):
            for j in range(i + 1, n):
                sim = self.compute_pairwise_similarity(texts[i], texts[j])
                matrix[i, j] = sim
                matrix[j, i] = sim
        return matrix

    def cluster_duplicates(self, items: List[Dict[str, Any]], text_field: str = "text") -> Tuple[List[Dict[str, Any]], List[List[Dict[str, Any]]]]:
        """
        Groups highly similar texts into clusters.
        Returns (deduped_representative_items, clusters_of_duplicates).
        """
        if not items:
            return [], []

        texts = [it.get(text_field, it.get("excerpt", "")) for it in items]
        sim_matrix = self.compute_pairwise_similarities(texts)
        n = len(items)
        visited = [False] * n
        clusters: List[List[Dict[str, Any]]] = []
        representatives: List[Dict[str, Any]] = []

        for i in range(n):
            if visited[i]:
                continue
            cluster = [items[i]]
            visited[i] = True
            for j in range(i + 1, n):
                if not visited[j] and sim_matrix[i, j] >= self.threshold:
                    cluster.append(items[j])
                    visited[j] = True

            if len(cluster) > 1:
                clusters.append(cluster)
                rep = dict(cluster[0])
                rep["duplicate_cluster_id"] = f"cluster-{i}"
                rep["is_duplicate_original"] = True
                rep["duplicate_count"] = len(cluster)
                rep["duplicate_label"] = "HIGH TEXTUAL SIMILARITY (POSSIBLE DUPLICATE CONTENT)"
                rep["duplicate_explanation"] = "Content appears syndicated, cross-posted, or repeated across sources"
                representatives.append(rep)
            else:
                rep = dict(cluster[0])
                rep["duplicate_count"] = 1
                representatives.append(rep)

        return representatives, clusters
