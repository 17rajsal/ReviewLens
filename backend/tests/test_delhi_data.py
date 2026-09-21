import pytest
from starlette.testclient import TestClient
from backend.main import app
from backend.data.delhi_colleges_data import DELHI_COLLEGES
from backend.data.delhi_restaurants_data import DELHI_RESTAURANTS
from backend.services.entity_resolution import EntityResolutionService
from backend.connectors.local_archive import LocalArchiveConnector

client = TestClient(app)

def test_delhi_colleges_count_and_coordinates():
    """Verify at least 15 verified Delhi colleges exist with valid Delhi NCR coordinates."""
    assert len(DELHI_COLLEGES) >= 15
    for college in DELHI_COLLEGES:
        assert college.latitude is not None and 28.4 <= college.latitude <= 28.9
        assert college.longitude is not None and 76.8 <= college.longitude <= 77.4
        assert college.canonical_name != ""
        assert college.affiliation is not None
        assert college.website is not None
        assert len(college.aliases) >= 2

def test_delhi_restaurants_count_and_coordinates():
    """Verify at least 10 verified Delhi restaurants exist with valid Delhi NCR coordinates."""
    assert len(DELHI_RESTAURANTS) >= 10
    for rest in DELHI_RESTAURANTS:
        assert rest.latitude is not None and 28.4 <= rest.latitude <= 28.9
        assert rest.longitude is not None and 76.8 <= rest.longitude <= 77.4
        assert rest.rating is not None and rest.rating >= 4.0
        assert rest.user_ratings_total is not None and rest.user_ratings_total >= 1000
        assert rest.website is not None

def test_alias_resolution_for_delhi_entities():
    """Verify EntityResolutionService correctly maps acronyms and aliases to canonical IDs."""
    resolver = EntityResolutionService()

    # Colleges
    assert resolver.resolve_text_to_entity_id("Is SRCC good for commerce?") == "entity-srcc"
    assert resolver.resolve_text_to_entity_id("What are Miranda House cutoffs?") == "entity-miranda-house"
    assert resolver.resolve_text_to_entity_id("Hindu College parliament society") == "entity-hindu-college"
    assert resolver.resolve_text_to_entity_id("Applying to St Stephens College") == "entity-st-stephens"
    assert resolver.resolve_text_to_entity_id("BMS admission at SSCBS") == "entity-sscbs"
    assert resolver.resolve_text_to_entity_id("Commerce faculty at SBSC") == "entity-sbsc"
    assert resolver.resolve_text_to_entity_id("Computer science at Keshav Mahavidyalaya") == "entity-keshav-mahavidyalaya"

    # Restaurants
    assert resolver.resolve_text_to_entity_id("Dining at Bukhara ITC Maurya") == "entity-bukhara"
    assert resolver.resolve_text_to_entity_id("Chef tasting menu at Indian Accent") == "entity-indian-accent"
    assert resolver.resolve_text_to_entity_id("Authentic dosas at Saravana Bhavan CP") == "entity-saravana-bhavan-cp"
    assert resolver.resolve_text_to_entity_id("Historic butter chicken at Daryaganj CP") == "entity-daryaganj-cp"

def test_api_research_with_real_delhi_query():
    """Verify /api/research endpoint returns verified Delhi entities when searched."""
    response = client.post("/api/research", json={"query": "Shri Ram College of Commerce SRCC"})
    assert response.status_code == 200
    data = response.json()
    assert len(data["results"]) >= 4
    top_entity = data["results"][0]
    assert top_entity["id"] == "entity-srcc"
    assert "Shri Ram College of Commerce" in top_entity["canonicalName"]
    assert top_entity["latitude"] == 28.6946
    assert top_entity["longitude"] == 77.2078

def test_api_research_with_bukhara_query():
    """Verify /api/research endpoint returns Bukhara when searching for Dal Bukhara."""
    response = client.post("/api/research", json={"query": "Bukhara restaurant Dal Bukhara ITC Maurya"})
    assert response.status_code == 200
    data = response.json()
    assert len(data["results"]) >= 1
    top_entity = data["results"][0]
    assert top_entity["id"] == "entity-bukhara"
    assert "Bukhara" in top_entity["canonicalName"]
    assert top_entity["rating"] == 4.5
    assert top_entity["userRatingsTotal"] >= 6000
