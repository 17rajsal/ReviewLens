import re
import math
from typing import List, Dict, Any, Optional, Tuple
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from backend.ml.preprocessing import clean_text

# Pre-populated dictionary of recognized acronyms, abbreviations, and informal names
KNOWN_ALIASES_MAP: Dict[str, str] = {
    # Higher Education
    "srcc": "Shri Ram College of Commerce (SRCC)",
    "shri ram college of commerce": "Shri Ram College of Commerce (SRCC)",
    "miranda house": "Miranda House",
    "miranda": "Miranda House",
    "mh": "Miranda House",
    "hindu college": "Hindu College",
    "hindu": "Hindu College",
    "st stephen's": "St. Stephen's College",
    "st stephens": "St. Stephen's College",
    "stephens": "St. Stephen's College",
    "hansraj": "Hansraj College",
    "hansraj college": "Hansraj College",
    "ramjas": "Ramjas College",
    "ramjas college": "Ramjas College",
    "gargi": "Gargi College",
    "gargi college": "Gargi College",
    "sscbs": "Shaheed Sukhdev College of Business Studies (SSCBS)",
    "shaheed sukhdev": "Shaheed Sukhdev College of Business Studies (SSCBS)",
    "cbs": "Shaheed Sukhdev College of Business Studies (SSCBS)",
    "andc": "Acharya Narendra Dev College (ANDC)",
    "dcac": "Delhi College of Arts and Commerce (DCAC)",
    "sggscc": "Sri Guru Gobind Singh College of Commerce (SGGSCC)",
    "ggs": "Sri Guru Gobind Singh College of Commerce (SGGSCC)",
    "dduc": "Deen Dayal Upadhyaya College (DDUC)",
    "sbsc": "Shaheed Bhagat Singh College (SBSC)",
    "keshav mahavidyalaya": "Keshav Mahavidyalaya",
    "maharaja agrasen": "Maharaja Agrasen College",
    "mac": "Maharaja Agrasen College",
    "bpit": "Bhagwan Parshuram Institute of Technology",
    "mait": "Maharaja Agrasen Institute of Technology",
    "usict": "University School of Information, Communication and Technology",
    "msit": "Maharaja Surajmal Institute of Technology",
    "dtu": "Delhi Technological University",
    "dce": "Delhi Technological University",
    "nsut": "Netaji Subhas University of Technology",
    "nsit": "Netaji Subhas University of Technology",
    "iitd": "Indian Institute of Technology Delhi",
    "iit delhi": "Indian Institute of Technology Delhi",
    "iiitd": "Indraprastha Institute of Information Technology Delhi",
    "igdtuw": "Indira Gandhi Delhi Technical University for Women",
    # Dining & Places
    "indian accent": "Indian Accent",
    "indian accent delhi": "Indian Accent",
    "bukhara": "Bukhara",
    "bukhara itc maurya": "Bukhara",
    "dal bukhara": "Bukhara",
    "tamra": "Tamra",
    "tamra shangri la": "Tamra",
    "delhi o delhi": "Delhi 'O' Delhi",
    "dakshin": "Dakshin",
    "dakshin sheraton": "Dakshin",
    "olive": "Olive Bar & Kitchen",
    "olive bar and kitchen": "Olive Bar & Kitchen",
    "olive mehrauli": "Olive Bar & Kitchen",
    "spice art": "Spice Art",
    "spice art rohini": "Spice Art",
    "daryaganj": "Daryaganj Restaurant",
    "daryaganj cp": "Daryaganj Restaurant",
    "karim's": "Karim's (Jama Masjid)",
    "karims": "Karim's (Jama Masjid)",
    "karim's jama masjid": "Karim's (Jama Masjid)",
    "caffe tonino": "Caffè Tonino",
    "tonino": "Caffè Tonino",
    "tonino cp": "Caffè Tonino",
    "caffe tonino cp": "Caffè Tonino",
    "big chill": "The Big Chill Cafe",
    "the big chill": "The Big Chill Cafe",
    "big chill cp": "The Big Chill Cafe",
    "saravana bhavan": "Saravana Bhavan",
    "saravana bhavan cp": "Saravana Bhavan",
    "united coffee house": "United Coffee House",
    "uch": "United Coffee House",
    "uch cp": "United Coffee House",
    "wenger's": "Wenger's Deli",
    "wengers": "Wenger's Deli"
}

def haversine_distance(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
    """
    Computes the great-circle distance between two points on the Earth's surface (in meters).
    """
    R = 6371000.0  # Earth's radius in meters
    phi1 = math.radians(lat1)
    phi2 = math.radians(lat2)
    delta_phi = math.radians(lat2 - lat1)
    delta_lambda = math.radians(lon2 - lon1)

    a = (math.sin(delta_phi / 2.0) ** 2 +
         math.cos(phi1) * math.cos(phi2) * math.sin(delta_lambda / 2.0) ** 2)
    c = 2.0 * math.atan2(math.sqrt(a), math.sqrt(1.0 - a))
    return R * c

def normalize_entity_name(name: str) -> str:
    """
    Strips noise words like 'the', 'restaurant', 'cafe', 'delhi', 'cp', 'college'
    for clean entity canonicalization.
    """
    cleaned = clean_text(name).lower()
    cleaned = re.sub(r"\b(the|restaurant|cafe|bar|bistro|pizzeria|hotel|institute|college|university|of|technology|delhi|cp|connaught place)\b", " ", cleaned)
    cleaned = re.sub(r"[^\w\s]", " ", cleaned)
    return re.sub(r"\s+", " ", cleaned).strip()

def jaro_winkler_similarity(s1: str, s2: str) -> float:
    """
    Lightweight pure-python Jaro string similarity calculation.
    """
    if s1 == s2:
        return 1.0
    len1, len2 = len(s1), len(s2)
    if len1 == 0 or len2 == 0:
        return 0.0

    match_distance = max(len1, len2) // 2 - 1
    s1_matches = [False] * len1
    s2_matches = [False] * len2
    matches = 0
    transpositions = 0

    for i in range(len1):
        start = max(0, i - match_distance)
        end = min(i + match_distance + 1, len2)
        for j in range(start, end):
            if s2_matches[j]:
                continue
            if s1[i] == s2[j]:
                s1_matches[i] = True
                s2_matches[j] = True
                matches += 1
                break

    if matches == 0:
        return 0.0

    k = 0
    for i in range(len1):
        if not s1_matches[i]:
            continue
        while not s2_matches[k]:
            k += 1
        if s1[i] != s2[k]:
            transpositions += 1
        k += 1

    transpositions //= 2
    jaro = (matches / len1 + matches / len2 + (matches - transpositions) / matches) / 3.0

    # Winkler prefix bonus
    prefix = 0
    for i in range(min(4, len1, len2)):
        if s1[i] == s2[i]:
            prefix += 1
        else:
            break

    return jaro + (prefix * 0.1 * (1.0 - jaro))

class EntityResolver:
    """
    Multi-strategy Entity Resolution engine.
    Combines:
    1. Direct Acronym & Alias Mapping
    2. Lexical canonicalization & token overlap
    3. Character n-gram TF-IDF cosine similarity
    4. Jaro-Winkler string distance
    5. Geographic proximity distance (when coordinates are available)
    6. Explicit UNRESOLVED_DISAMBIGUATION flagging for low-confidence pairs.
    """

    def __init__(self, match_threshold: float = 0.72):
        self.match_threshold = match_threshold

    def calculate_match_score(
        self,
        mention: str,
        target: str,
        mention_coords: Optional[Tuple[float, float]] = None,
        target_coords: Optional[Tuple[float, float]] = None
    ) -> float:
        clean_m = mention.lower().strip()
        clean_t = target.lower().strip()

        # 1. Alias / Acronym check
        if KNOWN_ALIASES_MAP.get(clean_m) and KNOWN_ALIASES_MAP.get(clean_m).lower() == clean_t:
            return 1.0
        if KNOWN_ALIASES_MAP.get(clean_t) and KNOWN_ALIASES_MAP.get(clean_t).lower() == clean_m:
            return 1.0

        norm_m = normalize_entity_name(mention)
        norm_t = normalize_entity_name(target)

        if not norm_m or not norm_t:
            return 0.0

        if norm_m == norm_t:
            return 1.0

        # Substring exact check
        if norm_m in norm_t or norm_t in norm_m:
            shorter, longer = (norm_m, norm_t) if len(norm_m) < len(norm_t) else (norm_t, norm_m)
            if len(shorter) >= 4:
                return 0.90 + 0.10 * (len(shorter) / len(longer))

        # Jaro-Winkler similarity
        jw = jaro_winkler_similarity(norm_m, norm_t)

        # Character 3-gram similarity
        vectorizer = TfidfVectorizer(analyzer="char_wb", ngram_range=(2, 3))
        try:
            tfidf = vectorizer.fit_transform([norm_m, norm_t])
            ngram_sim = float(cosine_similarity(tfidf[0:1], tfidf[1:2])[0][0])
        except ValueError:
            ngram_sim = 0.0

        score = 0.55 * jw + 0.45 * ngram_sim

        # Geographic proximity boost if both coordinates are present
        if mention_coords and target_coords:
            dist = haversine_distance(mention_coords[0], mention_coords[1], target_coords[0], target_coords[1])
            if dist < 200:  # Within 200 meters
                score = min(1.0, score + 0.20)
            elif dist > 15000:  # Over 15 km away, penalize heavily
                score = max(0.0, score - 0.35)

        return round(score, 3)

    def resolve(
        self,
        mention: str,
        candidates: List[str],
        mention_coords: Optional[Tuple[float, float]] = None,
        candidate_coords: Optional[Dict[str, Tuple[float, float]]] = None
    ) -> Tuple[Optional[str], float]:
        """
        Resolves mention to best matching candidate above match_threshold.
        Returns: (best_candidate, best_score)
        """
        cand, score, _ = self.resolve_with_details(mention, candidates, mention_coords, candidate_coords)
        return cand, score

    def resolve_with_details(
        self,
        mention: str,
        candidates: List[str],
        mention_coords: Optional[Tuple[float, float]] = None,
        candidate_coords: Optional[Dict[str, Tuple[float, float]]] = None
    ) -> Tuple[Optional[str], float, str]:
        """
        Resolves mention to best matching candidate above match_threshold with status label.
        Returns: (best_candidate, best_score, status_label)
        status_label: "RESOLVED_EXACT" | "RESOLVED_ALIAS" | "RESOLVED_SIMILARITY" | "UNRESOLVED_DISAMBIGUATION"
        """
        best_candidate = None
        best_score = 0.0

        clean_m = mention.lower().strip()
        if clean_m in KNOWN_ALIASES_MAP:
            mapped = KNOWN_ALIASES_MAP[clean_m]
            for cand in candidates:
                if cand.lower().strip() == mapped.lower().strip() or mapped.lower() in cand.lower():
                    return cand, 1.0, "RESOLVED_ALIAS"

        for cand in candidates:
            c_coords = candidate_coords.get(cand) if candidate_coords else None
            score = self.calculate_match_score(mention, cand, mention_coords, c_coords)
            if score > best_score:
                best_score = score
                best_candidate = cand

        if best_score >= 0.95:
            return best_candidate, best_score, "RESOLVED_EXACT"
        elif best_score >= self.match_threshold:
            return best_candidate, best_score, "RESOLVED_SIMILARITY"
        else:
            return None, best_score, "UNRESOLVED_DISAMBIGUATION"

