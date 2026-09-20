import pytest
from starlette.testclient import TestClient
from backend.main import app
from backend.ml.aspect_classifier import AspectClassifier
from backend.ml.sentiment import SentimentAnalyzer
from backend.ml.entity_resolution import EntityResolver
from backend.ml.similarity import DuplicateDetector
from backend.ml.ranker import CorroborationRanker
from backend.utils.repository import default_repository

client = TestClient(app)

def test_live_dining_research_endpoint():
    """
    Tests end-to-end research query for Connaught Place Italian restaurants:
    - Verifies real entity discovery from OpenStreetMap
    - Verifies demo_mode is False (LIVE RESEARCH)
    - Verifies source_category contains OPEN DATA and INSTITUTIONAL SOURCE
    - Verifies evidence items have real URLs
    """
    payload = {"query": "Best Italian restaurants in Connaught Place"}
    response = client.post("/api/research", json=payload)
    assert response.status_code == 200
    data = response.json()

    assert data["query"] == "Best Italian restaurants in Connaught Place"
    assert data["demoMode"] is False  # Genuine LIVE RESEARCH
    assert len(data["entities"]) >= 1
    assert len(data["entities"][0]["canonicalName"]) > 2
    assert data["entities"][0]["id"].startswith("osm-")

    # Verify traceable URLs and source categories
    evidence = data["evidence"]
    assert len(evidence) >= 3
    has_osm = any(e.get("sourceCategory") == "OPEN DATA" for e in evidence)
    has_wiki = any(e.get("sourceCategory") == "INSTITUTIONAL SOURCE" for e in evidence)
    assert has_osm, "Expected OpenStreetMap OPEN DATA evidence item"
    assert has_wiki, "Expected Wikipedia INSTITUTIONAL SOURCE evidence item"

    # Verify URLs
    for ev in evidence:
        assert ev.get("sourceUrl") is not None
        assert ev["sourceUrl"].startswith("http")

def test_ml_entity_resolution_accuracy():
    resolver = EntityResolver(match_threshold=0.72)
    match, score = resolver.resolve("caffe tonino cp", ["Caffè Tonino", "The Big Chill Cafe"])
    assert match == "Caffè Tonino"
    assert score >= 0.72

    no_match, _ = resolver.resolve("starbucks coffee", ["Caffè Tonino"])
    assert no_match is None

def test_ml_sentiment_contrastive_parser():
    analyzer = SentimentAnalyzer()
    sent_pos, _ = analyzer.predict("The wood-fired pizza was absolutely fantastic and delicious.")
    assert sent_pos == "positive"

    sent_neg, _ = analyzer.predict("The food arrived cold and pasta was bland and disappointing.")
    assert sent_neg == "negative"

    sent_mixed, _ = analyzer.predict("The pizza crust was crispy but customer service was very slow.")
    assert sent_mixed == "mixed"

def test_ml_duplicate_clustering():
    detector = DuplicateDetector(threshold=0.38)
    items = [
        {"id": "1", "excerpt": "Great pizza, excellent crust and very good service in CP."},
        {"id": "2", "excerpt": "Great pizza, excellent crust and very good service in Connaught Place."},
        {"id": "3", "excerpt": "Campus computer labs are centrally air-conditioned."}
    ]
    reps, clusters = detector.cluster_duplicates(items, text_field="excerpt")
    assert len(clusters) == 1
    assert len(clusters[0]) == 2
    assert len(reps) == 2

def test_sqlite_repository_persistence():
    session_id = "test-session-123"
    default_repository.save_research_session(session_id, "test query", {"test": "data", "demo_mode": False})
    fetched = default_repository.get_research_session(session_id)
    assert fetched is not None
    assert fetched.get("test") == "data"
