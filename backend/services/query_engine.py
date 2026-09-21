import re
from typing import Tuple, Literal, List, Optional
from abc import ABC, abstractmethod
from backend.models.query import ParsedConstraints

CategoryType = Literal["college", "restaurant", "hotel", "pg", "general"]

class BaseQueryParser(ABC):
    @abstractmethod
    def parse(self, query: str) -> Tuple[CategoryType, ParsedConstraints]:
        pass

class RuleBasedQueryParser(BaseQueryParser):
    """
    Heuristic rule-based query parser extracting structured constraints,
    domain classification, entity types, and user priorities.
    Designed to be modular so an LLM-based parser can be slotted in seamlessly.
    """

    def parse(self, query: str) -> Tuple[CategoryType, ParsedConstraints]:
        lower = query.lower()
        constraints = ParsedConstraints()
        category: CategoryType = "general"
        priorities: List[str] = []

        # 1. Domain & Entity Type Classification
        is_restaurant_query = any(w in lower for w in [
            "restaurant", "restaurants", "food", "cafe", "cafes", "dining", "dosa",
            "coffee", "buffet", "kebab", "biryani", "dhaba", "bakery", "chaat"
        ])
        is_medical_query = any(w in lower for w in [
            "medical", "mbbs", "doctor", "health science", "neet", "aiims", "vmmc", "lhmc", "mamc", "ucms"
        ])
        is_engineering_query = any(w in lower for w in [
            "b.tech", "btech", "engineering", "cse", "computer science", "it branch", "ece branch",
            "dtu", "nsut", "iiitd", "iiit-delhi", "igdtuw", "mait", "msit", "bpit", "bvcoe", "usict"
        ])

        if is_restaurant_query and not (is_engineering_query or is_medical_query or "college" in lower):
            category = "restaurant"
            constraints.domain = "dining"
            constraints.target_domain = "dining"
            constraints.entity_type = "restaurant"
            constraints.institution_type = "restaurant"
        elif is_medical_query and not is_engineering_query:
            category = "college"
            constraints.domain = "education"
            constraints.target_domain = "medical"
            constraints.entity_type = "college"
            constraints.institution_type = "medical"
            constraints.degree = "MBBS"
            constraints.branch = "Medicine"
            constraints.programs = ["MBBS", "MD"]
        elif is_engineering_query:
            category = "college"
            constraints.domain = "education"
            constraints.target_domain = "engineering"
            constraints.entity_type = "college"
            constraints.institution_type = "engineering"
            constraints.degree = "B.Tech"
            if "cse" in lower or "computer science" in lower:
                constraints.branch = "CSE"
                constraints.programs = ["B.Tech CSE"]
            elif "it" in lower:
                constraints.branch = "IT"
                constraints.programs = ["B.Tech IT"]
            elif "ece" in lower:
                constraints.branch = "ECE"
                constraints.programs = ["B.Tech ECE"]
            else:
                constraints.programs = ["B.Tech"]
        elif any(w in lower for w in ["college", "colleges", "campus", "university", "du colleges", "north campus"]):
            category = "college"
            constraints.domain = "education"
            constraints.entity_type = "college"
            if any(w in lower for w in ["commerce", "b.com", "bcom", "economics"]):
                constraints.target_domain = "commerce"
                constraints.degree = "B.Com"
            elif any(w in lower for w in ["management", "bba", "bms", "mba"]):
                constraints.target_domain = "management"
                constraints.degree = "BBA / BMS"
            elif any(w in lower for w in ["du", "delhi university"]):
                constraints.target_domain = "du"
            else:
                constraints.target_domain = "general_education"
        elif any(w in lower for w in ["hotel", "resort", "palace", "stay", "haveli", "heritage"]):
            category = "hotel"
            constraints.domain = "hospitality"
            constraints.entity_type = "hotel"
        elif any(w in lower for w in ["pg", "hostel", "paying guest", "flatshare"]):
            category = "pg"
            constraints.domain = "accommodation"
            constraints.entity_type = "pg"
        else:
            constraints.domain = "general"
            constraints.entity_type = "entity"

        # 2. Extract Budget (numeric + string representation)
        budget_match = re.search(r'under\s+(₹?[\d,]+(\s*lakh|\s*k)?|\$?[\d,]+(\s*k)?)', query, re.IGNORECASE)
        if budget_match:
            raw_str = budget_match.group(0)
            clean_str = re.sub(r'under\s+', '', raw_str, flags=re.IGNORECASE).strip()
            constraints.budget_max = clean_str

            # Parse numeric value
            num_clean = re.sub(r'[^\d.]', '', clean_str)
            try:
                base_num = float(num_clean)
                if "lakh" in clean_str.lower():
                    constraints.budget = base_num * 100000.0
                elif "k" in clean_str.lower():
                    constraints.budget = base_num * 1000.0
                else:
                    constraints.budget = base_num
                constraints.budget_numeric = constraints.budget
            except ValueError:
                constraints.budget = None
                constraints.budget_numeric = None

        # 3. Extract Location
        if "rohini" in lower:
            constraints.location = "Rohini, Delhi"
        elif "dwarka" in lower:
            constraints.location = "Dwarka, Delhi"
        elif "connaught place" in lower or "cp" in lower or "janpath" in lower:
            constraints.location = "Connaught Place, New Delhi"
        elif "north campus" in lower:
            constraints.location = "North Campus, Delhi"
        elif "south campus" in lower or "south delhi" in lower:
            constraints.location = "South Delhi"
        elif "west delhi" in lower or "janakpuri" in lower:
            constraints.location = "West Delhi"
        elif "east delhi" in lower or "shahdara" in lower:
            constraints.location = "East Delhi"
        elif "delhi" in lower or "ncr" in lower:
            constraints.location = "Delhi"
        elif "jaipur" in lower or "rajasthan" in lower:
            constraints.location = "Jaipur, Rajasthan"
        elif "bangalore" in lower or "bengaluru" in lower:
            constraints.location = "Bengaluru, Karnataka"
        elif "mumbai" in lower:
            constraints.location = "Mumbai, Maharashtra"
        elif "dtu" in lower or "bawana" in lower:
            constraints.location = "Rohini / Bawana, Delhi"

        # 5. Extract User Priorities
        if any(w in lower for w in ["coding", "hackathon", "developer", "leetcode", "programming", "coding culture"]):
            priorities.append("coding culture")
            constraints.priority = "Coding Culture & Hackathons"
        if any(w in lower for w in ["placement", "package", "roi", "job"]):
            priorities.append("placements")
            if not constraints.priority:
                constraints.priority = "Placement Track Record & ROI"
        if any(w in lower for w in ["food", "authentic", "taste", "cuisine"]):
            priorities.append("food authenticity")
            if not constraints.priority:
                constraints.priority = "Food Authenticity & Value"
        if any(w in lower for w in ["heritage", "pool", "luxury", "view"]):
            priorities.append("heritage ambience")
            if not constraints.priority:
                constraints.priority = "Heritage Ambience & Guest Service"
        if any(w in lower for w in ["wifi", "clean", "hygiene", "mess"]):
            priorities.append("hygiene & internet")
            if not constraints.priority:
                constraints.priority = "High-speed Internet & Hygiene"

        constraints.priorities = priorities
        return category, constraints

class QueryEngine:
    """Facade for query parsing supporting pluggable parser engines."""
    def __init__(self, parser: Optional[BaseQueryParser] = None):
        self._parser = parser or RuleBasedQueryParser()

    def parse(self, query: str) -> Tuple[CategoryType, ParsedConstraints]:
        return self._parser.parse(query)
