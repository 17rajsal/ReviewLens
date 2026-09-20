import math
from typing import List, Dict, Union
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from backend.ml.preprocessing import clean_text

class TextEmbedder:
    """
    Lightweight, fast, local vectorizer using subword and word-level TF-IDF.
    Provides normalized vector representations for cosine similarity and clustering
    without requiring heavy PyTorch models.
    """

    def __init__(self, max_features: int = 2000, ngram_range: tuple = (1, 2)):
        self.vectorizer = TfidfVectorizer(
            preprocessor=clean_text,
            max_features=max_features,
            ngram_range=ngram_range,
            sublinear_tf=True
        )
        self.is_fitted = False

    def fit(self, texts: List[str]):
        cleaned = [clean_text(t) for t in texts if clean_text(t)]
        if cleaned:
            self.vectorizer.fit(cleaned)
            self.is_fitted = True
        return self

    def transform(self, texts: List[str]) -> np.ndarray:
        if not self.is_fitted:
            self.fit(texts)
        cleaned = [clean_text(t) for t in texts]
        if not cleaned or not any(cleaned):
            return np.zeros((len(texts), 1))
        return self.vectorizer.transform(cleaned).toarray()

    def embed_single(self, text: str) -> np.ndarray:
        vectors = self.transform([text])
        return vectors[0]

def cosine_similarity(v1: np.ndarray, v2: np.ndarray) -> float:
    """
    Computes cosine similarity between two 1D or 2D numpy vectors.
    """
    norm1 = np.linalg.norm(v1)
    norm2 = np.linalg.norm(v2)
    if norm1 == 0 or norm2 == 0:
        return 0.0
    return float(np.dot(v1, v2) / (norm1 * norm2))
