from backend.models.evidence import EvidenceItem
from backend.utils.text import categorize_recency

def test_evidence_item_normalization_and_serialization():
    item = EvidenceItem(
        id="ev-trace-1",
        source="reddit",
        source_url="https://forum.example.com/discussions/xyz",
        title="Institution A vs Institution B coding activities",
        author="community_dev_101",
        created_at="2026-02-15",
        text="The technical developer society at Institution A has regular meetups and collaborative sessions.",
        entity_hint="Institution A",
        aspect_hints=["Coding Culture", "Student Life"],
        metadata={"forum": "StudentDiscussions", "score": 85},
        year=2026
    )

    data = item.model_dump(by_alias=True)

    # Check that both camelCase and snake_case representations preserve traceability
    assert data["id"] == "ev-trace-1"
    assert data["source"] == "reddit"
    assert data["sourceUrl"] == "https://forum.example.com/discussions/xyz"
    assert data["author"] == "community_dev_101"
    assert data["text"] == "The technical developer society at Institution A has regular meetups and collaborative sessions."
    assert "Coding Culture" in data["aspectHints"]
    assert data["metadata"]["score"] == 85

def test_recency_categorization():
    assert categorize_recency(2026) == "recent"
    assert categorize_recency(2025) == "recent"
    assert categorize_recency(2024) == "moderately_recent"
    assert categorize_recency(2022) == "old"
