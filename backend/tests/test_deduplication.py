from backend.models.evidence import EvidenceItem
from backend.services.deduplication import DeduplicationService

def test_deduplication_clusters():
    deduplicator = DeduplicationService()

    item1 = EvidenceItem(
        id="ev-1",
        source="reddit",
        source_name="Reddit r/Btechtards",
        source_domain="reddit.com",
        source_title="Institution A student review",
        excerpt="The peer coding group here is genuinely competitive. In my 3rd year almost 15 of us grinded LeetCode together.",
        date="2026-01-01",
        year=2026,
        aspect="Coding",
        sentiment="positive",
        relevance_score=90.0,
        verification_hash="rec-a01f8"
    )

    # Identical copy reposted
    item2 = EvidenceItem(
        id="ev-2",
        source="forum",
        source_name="College Forum",
        source_domain="forum.com",
        source_title="Copied review",
        excerpt="The peer coding group here is genuinely competitive. In my 3rd year almost 15 of us grinded LeetCode together.",
        date="2026-01-02",
        year=2026,
        aspect="Coding",
        sentiment="positive",
        relevance_score=85.0,
        verification_hash="sha256:abc123"
    )

    # Unrelated distinct item
    item3 = EvidenceItem(
        id="ev-3",
        source="official",
        source_name="Fee Gazette",
        source_domain="ipu.ac.in",
        source_title="Fees",
        excerpt="Annual approved tuition fee is ₹1,34,800 for the academic year.",
        date="2025-07-01",
        year=2025,
        aspect="Fees",
        sentiment="positive",
        relevance_score=99.0
    )

    clustered, cluster_count = deduplicator.deduplicate([item1, item2, item3])

    assert cluster_count == 1
    assert clustered[0].is_duplicate_original is True
    assert clustered[0].duplicate_count == 2
    assert clustered[1].is_duplicate_original is False
    assert clustered[2].duplicate_cluster_id is None
