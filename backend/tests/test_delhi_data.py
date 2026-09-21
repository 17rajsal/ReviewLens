import pytest
from starlette.testclient import TestClient
from backend.main import app
from backend.data.delhi_colleges_data import DELHI_COLLEGES
from backend.data.delhi_restaurants_data import DELHI_RESTAURANTS
from backend.services.entity_resolution import EntityResolutionService
from backend.connectors.local_archive import LocalArchiveConnector

client = TestClient(app)

def test_delhi_colleges_count_and_coordinates():
    """Verify at least 45 verified Delhi colleges exist with valid Delhi NCR coordinates."""
    assert len(DELHI_COLLEGES) >= 45
    for college in DELHI_COLLEGES:
        assert college.latitude is not None and 28.4 <= college.latitude <= 28.9, f"Invalid lat {college.latitude} for {college.id}"
        assert college.longitude is not None and 76.8 <= college.longitude <= 77.4, f"Invalid lon {college.longitude} for {college.id}"
        assert college.canonical_name != ""
        assert college.affiliation is not None
        assert college.website is not None
        assert len(college.aliases) >= 2

def test_delhi_restaurants_count_and_coordinates():
    """Verify at least 50 verified Delhi restaurants exist with valid Delhi NCR coordinates."""
    assert len(DELHI_RESTAURANTS) >= 50
    for rest in DELHI_RESTAURANTS:
        assert rest.latitude is not None and 28.4 <= rest.latitude <= 28.9, f"Invalid lat {rest.latitude} for {rest.id}"
        assert rest.longitude is not None and 76.8 <= rest.longitude <= 77.4, f"Invalid lon {rest.longitude} for {rest.id}"
        assert rest.rating is not None and rest.rating >= 3.5, f"Rating too low {rest.rating} for {rest.id}"
        assert rest.user_ratings_total is not None and rest.user_ratings_total >= 1000, f"Review count too low for {rest.id}"
        assert rest.website is not None

def test_alias_resolution_for_delhi_entities():
    """Verify EntityResolutionService correctly maps acronyms and aliases to canonical IDs."""
    resolver = EntityResolutionService()

    # Core & Expanded Colleges
    assert resolver.resolve_text_to_entity_id("Is SRCC good for commerce?") == "entity-srcc"
    assert resolver.resolve_text_to_entity_id("What are Miranda House cutoffs?") == "entity-miranda-house"
    assert resolver.resolve_text_to_entity_id("Hindu College parliament society") == "entity-hindu-college"
    assert resolver.resolve_text_to_entity_id("Applying to St Stephens College") == "entity-st-stephens"
    assert resolver.resolve_text_to_entity_id("BMS admission at SSCBS") == "entity-sscbs"
    assert resolver.resolve_text_to_entity_id("Commerce faculty at SBSC") == "entity-sbsc"
    assert resolver.resolve_text_to_entity_id("Computer science at Keshav Mahavidyalaya") == "entity-keshav-mahavidyalaya"
    assert resolver.resolve_text_to_entity_id("B.Tech CSE placements at DTU") == "entity-dtu"
    assert resolver.resolve_text_to_entity_id("Engineering campus at NSUT dwarka") == "entity-nsut"
    assert resolver.resolve_text_to_entity_id("AI and research at IIITD okhla") == "entity-iiitd"
    assert resolver.resolve_text_to_entity_id("Women tech programs at IGDTUW") == "entity-igdtuw"
    assert resolver.resolve_text_to_entity_id("MBBS admission at AIIMS delhi") == "entity-aiims"
    assert resolver.resolve_text_to_entity_id("Economics cutoffs at Ramjas") == "entity-ramjas"
    assert resolver.resolve_text_to_entity_id("Science courses at Gargi college") == "entity-gargi"
    assert resolver.resolve_text_to_entity_id("Venky south campus festival") == "entity-venkateswara"
    assert resolver.resolve_text_to_entity_id("Psychology faculty at JMC") == "entity-jmc"

    # Core & Expanded Restaurants
    assert resolver.resolve_text_to_entity_id("Dining at Bukhara ITC Maurya") == "entity-bukhara"
    assert resolver.resolve_text_to_entity_id("Chef tasting menu at Indian Accent") == "entity-indian-accent"
    assert resolver.resolve_text_to_entity_id("Authentic dosas at Saravana Bhavan CP") == "entity-saravana-bhavan-cp"
    assert resolver.resolve_text_to_entity_id("Historic butter chicken at Daryaganj CP") == "entity-daryaganj-cp"
    assert resolver.resolve_text_to_entity_id("Pastries and patties at Wengers bakery") == "entity-wengers"
    assert resolver.resolve_text_to_entity_id("Pasta and mud pie at Big Chill khan market") == "entity-big-chill-khan"
    assert resolver.resolve_text_to_entity_id("Lake view drinks at Hauz Khas Social") == "entity-social-hkv"
    assert resolver.resolve_text_to_entity_id("Vegetarian Khow Suey at Burma Burma saket") == "entity-burma-burma-saket"
    assert resolver.resolve_text_to_entity_id("Galouti kebabs at Rajinder Da Dhaba") == "entity-rajinder-da-dhaba"

def test_locality_and_category_search_queries():
    """Verify local archive filters handle all common Delhi locality and domain queries."""
    archive = LocalArchiveConnector()

    # Colleges queries
    rohini_colleges = archive.filter_education_entities("colleges in Rohini", limit=5)
    assert any("rohini" in c.location.lower() or "rohini" in (c.formatted_address or "").lower() for c in rohini_colleges)

    north_campus = archive.filter_education_entities("North Campus colleges", limit=5)
    assert any("north campus" in c.location.lower() or "maurice nagar" in c.location.lower() for c in north_campus)

    eng_colleges = archive.filter_education_entities("engineering colleges Delhi", limit=5)
    assert any("engineering" in c.category.lower() or "dtu" in c.id or "nsut" in c.id or "iiitd" in c.id for c in eng_colleges)

    du_colleges = archive.filter_education_entities("DU colleges", limit=5)
    assert any("delhi" in (c.affiliation or "").lower() for c in du_colleges)

    # Restaurants queries
    cp_restaurants = archive.filter_restaurant_entities("restaurants in CP", limit=5)
    assert any("connaught" in r.location.lower() for r in cp_restaurants)

    hk_cafes = archive.filter_restaurant_entities("cafes in Hauz Khas", limit=5)
    assert any("hauz khas" in r.location.lower() for r in hk_cafes)

    south_delhi = archive.filter_restaurant_entities("South Delhi restaurants", limit=5)
    assert len(south_delhi) >= 3

    budget_rests = archive.filter_restaurant_entities("budget restaurants Delhi", limit=5)
    assert any(r.price_level in ("₹", "₹₹") for r in budget_rests)

    saket_rests = archive.filter_restaurant_entities("restaurants near Saket", limit=5)
    assert any("saket" in r.location.lower() for r in saket_rests)

def test_api_research_with_real_delhi_query():
    """Verify /api/research endpoint returns verified Delhi entities when searched."""
    response = client.post("/api/research", json={"query": "Delhi Technological University DTU"})
    assert response.status_code == 200
    data = response.json()
    assert len(data["results"]) >= 1
    top_entity = data["results"][0]
    assert "DTU" in top_entity["canonicalName"] or "Delhi Technological University" in top_entity["canonicalName"]
    assert top_entity["latitude"] == 28.7499
    assert top_entity["longitude"] == 77.1170

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
