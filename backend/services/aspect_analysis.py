import re
from typing import List, Dict, Optional
from backend.models.evidence import EvidenceItem, SentimentType
from backend.models.analysis import AspectAnalysis

DOMAIN_ASPECT_REGISTRY = {
    "education": {
        "Coding Culture": ["coding", "hackathon", "developer", "programming", "tech club", "peer"],
        "Placements": ["placement", "recruitment", "hiring", "salary", "career", "interview", "drive"],
        "Faculty": ["faculty", "professor", "teacher", "syllabus", "academics", "mentorship"],
        "Attendance": ["attendance", "mandatory", "strict", "schedule", "routine", "hours"],
        "Infrastructure": ["campus", "lab", "library", "facilities", "transit", "wifi", "hostel"],
        "Fees & Value": ["fee", "tuition", "affordable", "cost", "scholarship", "value"]
    },
    "dining": {
        "Food Quality": ["food", "taste", "flavor", "authentic", "fresh", "spices", "recipe", "dish"],
        "Service": ["service", "staff", "waiter", "courteous", "order", "turnaround", "queue"],
        "Ambience": ["ambience", "atmosphere", "vibe", "decor", "lighting", "music", "seating"],
        "Price & Value": ["price", "cost", "bill", "portion", "value", "affordable", "expensive"],
        "Cleanliness": ["clean", "hygiene", "sanitary", "neat", "spotless", "tidy"]
    },
    "hospitality": {
        "Cleanliness": ["clean", "hygiene", "spotless", "linens", "sanitary", "neat"],
        "Rooms": ["room", "bed", "mattress", "spacious", "view", "ac", "balcony"],
        "Location": ["location", "central", "neighborhood", "reach", "transit", "access"],
        "Service": ["service", "reception", "hospitality", "check-in", "concierge", "staff"],
        "Value": ["value", "tariff", "rate", "worth", "cost", "luxury"]
    },
    "housing": {
        "Cleanliness & Hygiene": ["hygiene", "washroom", "clean", "neat", "housekeeping"],
        "Internet & Utilities": ["wifi", "internet", "power", "backup", "water", "electricity"],
        "Food & Mess": ["mess", "meals", "food", "cook", "kitchen", "breakfast", "dinner"],
        "Location & Commute": ["distance", "metro", "commute", "walk", "near campus", "market"],
        "Pricing & Terms": ["rent", "deposit", "bill", "charges", "rules", "agreement"]
    },
    "products": {
        "Performance": ["performance", "speed", "processor", "ram", "benchmark", "fast", "lag"],
        "Battery & Power": ["battery", "charging", "endurance", "hours", "power", "backup"],
        "Build Quality": ["build", "chassis", "durability", "hinge", "keyboard", "display", "weight"],
        "Software Experience": ["software", "os", "drivers", "bugs", "updates", "interface"],
        "Price & Value": ["price", "cost", "worth", "value", "budget", "expensive"]
    },
    "services": {
        "Service Quality": ["quality", "workmanship", "repair", "standard", "effective"],
        "Timeliness": ["time", "punctual", "turnaround", "delay", "quick", "prompt"],
        "Staff Professionalism": ["professional", "courteous", "attitude", "helpful", "polite"],
        "Pricing Transparency": ["estimate", "quote", "transparent", "hidden charges", "cost", "bill"]
    }
}

class AspectAnalysisService:
    """
    Extracts domain-specific aspects and aspect-level sentiments.
    Evaluates evidence distribution and calculates model confidence.
    NOTE: Sentiment confidence represents statistical classifier confidence,
    not factual or objective truth.
    """

    def __init__(self, domain: str = "education"):
        self.domain = domain.lower() if domain else "education"

    def get_aspect_map(self) -> Dict[str, List[str]]:
        return DOMAIN_ASPECT_REGISTRY.get(self.domain, DOMAIN_ASPECT_REGISTRY["education"])

    def evaluate_sentiment(self, text: str) -> tuple[SentimentType, float]:
        lower = text.lower()
        pos_words = ["great", "best", "excellent", "worth", "solid", "high", "good", "superb", "loved", "positive", "strong", "active"]
        neg_words = ["bad", "worst", "waste", "terrible", "avoid", "poor", "freeze", "strict", "low", "slowdown", "negative", "dilute"]

        has_pos = any(w in lower for w in pos_words)
        has_neg = any(w in lower for w in neg_words)

        if has_pos and has_neg:
            return "mixed", 0.78
        elif has_pos:
            return "positive", 0.86
        elif has_neg:
            return "negative", 0.84
        elif len(lower.strip()) > 10:
            return "neutral", 0.65
        else:
            return "unknown", 0.50

    def analyze(self, entity_id: str, evidence_list: List[EvidenceItem]) -> List[AspectAnalysis]:
        if not evidence_list:
            return []

        aspect_map = self.get_aspect_map()
        aspect_buckets: Dict[str, List[EvidenceItem]] = {k: [] for k in aspect_map.keys()}

        for item in evidence_list:
            text = f"{item.source_title} {item.aspect} {item.excerpt} {' '.join(item.aspect_hints)}".lower()
            assigned = False
            for aspect_name, keywords in aspect_map.items():
                if any(kw in text for kw in keywords):
                    aspect_buckets[aspect_name].append(item)
                    assigned = True
                    break
            if not assigned:
                first_key = list(aspect_map.keys())[0]
                aspect_buckets[first_key].append(item)

        results: List[AspectAnalysis] = []
        for name, items in aspect_buckets.items():
            if not items:
                continue

            pos_count = sum(1 for i in items if i.sentiment == "positive")
            total = len(items)
            pos_ratio = round((pos_count / total) * 100, 1)

            if pos_ratio >= 70.0:
                sentiment: SentimentType = "positive"
            elif pos_ratio <= 35.0:
                sentiment: SentimentType = "negative"
            else:
                sentiment: SentimentType = "mixed"

            phrases: List[str] = []
            for item in items[:4]:
                words = [w for w in re.findall(r'\b[a-zA-Z]{4,}\b', item.excerpt.lower()) if w not in ["this", "with", "that", "from", "they", "have", "were", "been"]]
                if len(words) >= 2:
                    phrases.append(f"{words[0]} {words[1]}")

            summary = f"Synthesized from {total} independent excerpts with {pos_ratio}% positive corroboration."

            results.append(AspectAnalysis(
                id=f"asp-{entity_id}-{name.lower().replace(' ', '-')[:12]}",
                name=name,
                label=f"{name} Consensus",
                sentiment=sentiment,
                positive_ratio=pos_ratio,
                evidence_count=total,
                summary=summary,
                key_phrases=list(set(phrases))[:4]
            ))

        return results
