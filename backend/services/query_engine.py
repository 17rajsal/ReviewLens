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
        if any(w in lower for w in ["college", "b.tech", "engineering", "campus", "cse", "ipu", "bpit", "mait", "usict", "msit", "dtu", "university"]):
            category = "college"
            constraints.domain = "education"
            constraints.entity_type = "college"
        elif any(w in lower for w in ["restaurant", "food", "cafe", "dining", "dosa", "coffee", "buffet", "connaught place", "cp"]):
            category = "restaurant"
            constraints.domain = "dining"
            constraints.entity_type = "restaurant"
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
            except ValueError:
                constraints.budget = None

        # 3. Extract Location
        if "delhi" in lower or "ncr" in lower or "rohini" in lower or "dwarka" in lower or "janakpuri" in lower:
            constraints.location = "Delhi"
        elif "connaught place" in lower or "cp" in lower or "janpath" in lower:
            constraints.location = "Connaught Place, New Delhi"
        elif "jaipur" in lower or "rajasthan" in lower:
            constraints.location = "Jaipur, Rajasthan"
        elif "bangalore" in lower or "bengaluru" in lower:
            constraints.location = "Bengaluru, Karnataka"
        elif "mumbai" in lower:
            constraints.location = "Mumbai, Maharashtra"
        elif "dtu" in lower or "bawana" in lower:
            constraints.location = "Near DTU, Delhi"

        # 4. Extract Degree & Branch for Colleges
        if constraints.domain == "education":
            if "b.tech" in lower or "engineering" in lower or "btech" in lower:
                constraints.degree = "B.Tech"
            elif "m.tech" in lower:
                constraints.degree = "M.Tech"
            elif "mba" in lower:
                constraints.degree = "MBA"

            if "cse" in lower or "computer science" in lower:
                constraints.branch = "CSE"
            elif "it" in lower or "information tech" in lower:
                constraints.branch = "IT"
            elif "ece" in lower or "electronics" in lower:
                constraints.branch = "ECE"

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
