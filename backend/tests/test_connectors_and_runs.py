import pytest
from starlette.testclient import TestClient
from backend.main import app
from backend.connectors.google_places import GooglePlacesConnector
from backend.connectors.reddit import RedditConnector
from backend.connectors.openstreetmap import OpenStreetMapConnector
from backend.connectors.wikipedia import WikimediaConnector
from backend.connectors.web_search import WebSearchConnector
from backend.connectors.local_archive import LocalArchiveConnector
from backend.ml.entity_resolution import haversine_distance

client = TestClient(app)

def test_google_places_connector_offline_safety():
    """Verify Google Places connector is graceful and does not crash without API key."""
    connector = GooglePlacesConnector()
    # When api_key is empty string
    connector.api_key = ""
    assert connector.is_available() is False
    health = pytest.importorskip("asyncio").run(connector.health())
    assert health["status"] in ("unavailable", "NOT CONFIGURED")
    assert health["authenticated"] is False

def test_haversine_distance_calculation():
    """Verify haversine distance calculation is accurate."""
    # Distance between Connaught Place (28.6328, 77.2195) and New Delhi Railway Station (28.6430, 77.2198)
    dist = haversine_distance(28.6328, 77.2195, 28.6430, 77.2198)
    # Approx 1.13 km (1134 meters)
    assert 1000 < dist < 1300

def test_sources_health_endpoint():
    """Verify /api/sources/health returns operational statuses for all 6 connectors."""
    response = client.get("/api/sources/health")
    assert response.status_code == 200
    data = response.json()
    assert "google_places" in data
    assert "reddit" in data
    assert "openstreetmap" in data
    assert "wikipedia" in data
    assert "web_search" in data
    assert "local_archive" in data
    assert data["openstreetmap"]["status"] in ("available", "LIVE")
    assert data["local_archive"]["status"] in ("ready", "DEMO/FALLBACK")
    assert data["google_places"]["status"] in ("unavailable", "NOT CONFIGURED", "LIVE")
    assert data["reddit"]["status"] in ("unavailable", "NOT CONFIGURED", "LIVE")

def test_runs_history_endpoint():
    """Verify /api/runs returns historical runs list."""
    response = client.get("/api/runs")
    assert response.status_code == 200
    runs = response.json()
    assert isinstance(runs, list)

def test_entity_by_id_endpoint():
    """Verify /api/entities/{id} retrieves benchmark or discovered entity."""
    response = client.get("/api/entities/entity-institution-a")
    assert response.status_code == 200
    entity = response.json()
    assert entity["id"] == "entity-institution-a"
    assert entity["canonicalName"] == "Institution A (Technical Campus)"
    assert entity["latitude"] is not None
    assert entity["longitude"] is not None
