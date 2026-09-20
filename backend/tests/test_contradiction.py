from backend.models.evidence import EvidenceItem
from backend.services.contradiction import ContradictionDetectionService

def test_contradiction_detection():
    service = ContradictionDetectionService()

    pos_item = EvidenceItem(
        id="pos-1",
        source="reddit",
        source_name="Public Community Thread",
        source_domain="reddit.com",
        source_title="Example positive placement discussion",
        excerpt="Example positive placement experience reported in a public discussion: Proactive candidates secured competitive external offers.",
        date="2026-01-01",
        year=2026,
        aspect="Placements",
        sentiment="positive",
        relevance_score=92.0
    )

    neg_item = EvidenceItem(
        id="neg-1",
        source="forum",
        source_name="Public Forum",
        source_domain="forum.example.org",
        source_title="Discussion on institutional hiring volumes",
        excerpt="Example critical placement experience reported in a public discussion: General on-campus recruiter volumes have decreased this cycle.",
        date="2026-02-01",
        year=2026,
        aspect="Placements",
        sentiment="negative",
        relevance_score=94.0
    )

    report = service.detect("Institution A", [pos_item, neg_item])

    assert report.has_conflict is True
    assert report.positive_signal_count == 1
    assert report.negative_signal_count == 1
    assert "mixed" in report.impartial_synthesis.lower()
    assert len(report.supporting_evidence) == 1
    assert len(report.opposing_evidence) == 1
