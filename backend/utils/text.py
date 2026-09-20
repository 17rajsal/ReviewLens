import re
from typing import Set, Tuple

def normalize_text(text: str) -> str:
    """
    Normalizes string by lowercasing, stripping punctuation, and collapsing whitespace.
    """
    if not text:
        return ""
    lowered = text.lower()
    cleaned = re.sub(r'[^\w\s]', ' ', lowered)
    return re.sub(r'\s+', ' ', cleaned).strip()

def extract_character_ngrams(text: str, n: int = 3) -> Set[str]:
    """
    Extracts character n-grams from normalized text for robust fuzzy similarity.
    """
    normalized = normalize_text(text)
    if len(normalized) < n:
        return {normalized} if normalized else set()
    return {normalized[i:i + n] for i in range(len(normalized) - n + 1)}

def calculate_jaccard_similarity(text_a: str, text_b: str, n: int = 3) -> float:
    """
    Computes Jaccard similarity across character n-grams.
    Returns value between 0.0 (disjoint) and 1.0 (identical).
    """
    ngrams_a = extract_character_ngrams(text_a, n)
    ngrams_b = extract_character_ngrams(text_b, n)
    if not ngrams_a or not ngrams_b:
        return 0.0
    intersection = len(ngrams_a.intersection(ngrams_b))
    union = len(ngrams_a.union(ngrams_b))
    return intersection / union if union > 0 else 0.0

def categorize_recency(year: int) -> str:
    """
    Categorizes evidence age into standard transparency buckets without discarding older signals.
    - recent: 2025-2026
    - moderately_recent: 2024
    - old: 2023 or earlier
    """
    if year >= 2025:
        return "recent"
    elif year == 2024:
        return "moderately_recent"
    else:
        return "old"
