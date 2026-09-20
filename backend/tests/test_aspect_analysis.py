from backend.models.evidence import EvidenceItem
from backend.services.aspect_analysis import AspectAnalysisService

def test_education_aspect_analysis():
    service = AspectAnalysisService(domain="education")
    
    item1 = EvidenceItem(
        id="ev-1",
        source="reddit",
        source_name="Reddit",
        source_domain="reddit.com",
        source_title="Leetcode and hackathon scene",
        excerpt="The peer coding culture is great, students participate in GSOC and hackathons.",
        date="2026-01-01",
        year=2026,
        aspect="Coding Culture",
        sentiment="positive"
    )
    
    item2 = EvidenceItem(
        id="ev-2",
        source="forum",
        source_name="Forum",
        source_domain="forum.com",
        source_title="Placements overview",
        excerpt="Placements in mass recruiting IT companies have dropped this year.",
        date="2026-02-01",
        year=2026,
        aspect="Placements",
        sentiment="negative"
    )
    
    aspects = service.analyze("bpit", [item1, item2])
    assert len(aspects) >= 1
    aspect_names = [a.name for a in aspects]
    assert "Coding Culture" in aspect_names or "Placements" in aspect_names

def test_sentiment_confidence_documentation():
    service = AspectAnalysisService()
    sentiment, confidence = service.evaluate_sentiment("The peer coding community is great and active")
    assert sentiment == "positive"
    assert confidence > 0.70  # Model classification confidence
