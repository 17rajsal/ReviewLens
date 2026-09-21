import pytest
from starlette.testclient import TestClient
from backend.main import app
from backend.connectors.local_archive import LocalArchiveConnector
from backend.services.query_engine import RuleBasedQueryParser

client = TestClient(app)

def test_btech_cse_under_2_lakh_strict_relevance():
    """
    1. Query: 'B.Tech CSE colleges in Delhi under ₹2 lakh/year with good coding culture'
       - AIIMS is NEVER in results
       - DTU, NSUT, IIIT-D excluded because their fees exceed ₹2L
       - Returned colleges ALL offer B.Tech CSE
       - Returned colleges have annual fees <= 200,000
    """
    parser = RuleBasedQueryParser()
    category, constraints = parser.parse("B.Tech CSE colleges in Delhi under ₹2 lakh/year with good coding culture")
    assert category == "college"
    assert constraints.target_domain == "engineering"
    assert constraints.budget_numeric == 200000

    archive = LocalArchiveConnector()
    results = archive.filter_education_entities(
        "B.Tech CSE colleges in Delhi under ₹2 lakh/year with good coding culture",
        limit=10,
        constraints=constraints
    )

    ids = [r.id for r in results]
    names = [r.canonical_name for r in results]

    # AIIMS must NEVER be returned
    assert "entity-aiims" not in ids
    for name in names:
        assert "AIIMS" not in name
        assert "Medical" not in name

    # DTU (₹2.15L), NSUT (₹2.25L), IIIT-D (₹4.40L) exceed ₹2L and must be excluded
    assert "entity-dtu" not in ids
    assert "entity-nsut" not in ids
    assert "entity-iiitd" not in ids

    # All returned entities must have fee <= 200,000 and offer B.Tech/CSE
    for r in results:
        assert r.annual_fee_numeric is not None
        assert r.annual_fee_numeric <= 200000, f"{r.canonical_name} fee {r.annual_fee_numeric} exceeds 200k"
        programs_str = " ".join(r.programs or []).lower()
        domains_str = " ".join(r.domains or []).lower()
        assert "b.tech" in programs_str or "cse" in programs_str or "engineering" in domains_str

    # Test through /api/research endpoint
    response = client.post("/api/research", json={"query": "B.Tech CSE colleges in Delhi under ₹2 lakh/year with good coding culture"})
    assert response.status_code == 200
    data = response.json()
    api_ids = [res["id"] for res in data["results"]]
    assert "entity-aiims" not in api_ids
    assert "entity-dtu" not in api_ids
    assert "entity-nsut" not in api_ids
    assert "entity-iiitd" not in api_ids

def test_medical_colleges_query_relevance():
    """
    2. Query: 'Medical colleges in Delhi'
       - AIIMS IS included
       - Engineering colleges (DTU, NSUT, IIIT-D) are NOT included
    """
    parser = RuleBasedQueryParser()
    category, constraints = parser.parse("Medical colleges in Delhi")
    assert category == "college"
    assert constraints.target_domain == "medical"
    assert constraints.institution_type == "medical"

    archive = LocalArchiveConnector()
    results = archive.filter_education_entities("Medical colleges in Delhi", limit=10, constraints=constraints)
    ids = [r.id for r in results]

    assert "entity-aiims" in ids
    assert "entity-dtu" not in ids
    assert "entity-nsut" not in ids
    assert "entity-iiitd" not in ids

    # API test
    response = client.post("/api/research", json={"query": "Medical colleges in Delhi"})
    assert response.status_code == 200
    data = response.json()
    api_ids = [res["id"] for res in data["results"]]
    assert "entity-aiims" in api_ids
    assert "entity-dtu" not in api_ids
    assert "entity-nsut" not in api_ids

def test_top_du_commerce_colleges():
    """
    3. Query: 'Top DU commerce colleges'
       - DU commerce colleges included
       - Engineering and medical colleges NOT included
    """
    parser = RuleBasedQueryParser()
    category, constraints = parser.parse("Top DU commerce colleges")
    assert category == "college"
    assert constraints.target_domain == "commerce"

    archive = LocalArchiveConnector()
    results = archive.filter_education_entities("Top DU commerce colleges", limit=10, constraints=constraints)
    ids = [r.id for r in results]

    assert any(c_id in ids for c_id in ["entity-srcc", "entity-hindu-college", "entity-hansraj", "entity-ramjas"])
    assert "entity-aiims" not in ids
    assert "entity-dtu" not in ids
    assert "entity-nsut" not in ids

def test_engineering_colleges_in_rohini():
    """
    4. Query: 'Engineering colleges in Rohini'
       - MAIT included (located in Rohini)
       - Colleges outside Rohini excluded
    """
    parser = RuleBasedQueryParser()
    category, constraints = parser.parse("Engineering colleges in Rohini")
    assert category == "college"
    assert constraints.target_domain == "engineering"
    assert "rohini" in constraints.location.lower()

    archive = LocalArchiveConnector()
    results = archive.filter_education_entities("Engineering colleges in Rohini", limit=10, constraints=constraints)
    ids = [r.id for r in results]

    assert "entity-mait" in ids
    assert "entity-aiims" not in ids
    for r in results:
        loc = (r.locality or r.location or "").lower()
        dist = (r.district or "").lower()
        assert "rohini" in loc or "north west delhi" in dist or "rohini" in (r.formatted_address or "").lower()

def test_fine_dining_mughlai_restaurants():
    """
    5. Query: 'Fine dining Mughlai restaurants in Delhi'
       - Bukhara, Karim's, Gulati included
       - Colleges NEVER included
    """
    parser = RuleBasedQueryParser()
    category, constraints = parser.parse("Fine dining Mughlai restaurants in Delhi")
    assert category == "restaurant"

    archive = LocalArchiveConnector()
    results = archive.filter_restaurant_entities("Fine dining Mughlai restaurants in Delhi", limit=10)
    ids = [r.id for r in results]

    assert "entity-bukhara" in ids or "entity-karims" in ids or "entity-gulati" in ids
    for r in results:
        assert not r.id.startswith("entity-dtu")
        assert not r.id.startswith("entity-aiims")
        assert "college" not in r.category.lower()

    # Via API
    response = client.post("/api/research", json={"query": "Fine dining Mughlai restaurants in Delhi"})
    assert response.status_code == 200
    data = response.json()
    assert data["category"] == "restaurant"
    for item in data["results"]:
        assert item["category"] != "college"
        assert "college" not in item["canonicalName"].lower()

def test_aiims_canonical_data_integrity():
    """
    6. Verify AIIMS canonical metadata:
       - institution_type: 'medical'
       - domains: ['medicine', 'healthcare']
       - programs: ['MBBS', 'MD', 'MS', 'DM', 'M.Ch', 'B.Sc Nursing']
       - annual_fee_numeric: 1628
    """
    from backend.data.delhi_colleges_data import COLLEGE_METADATA_MAP, DELHI_COLLEGES
    meta = COLLEGE_METADATA_MAP["entity-aiims"]
    assert meta["institution_type"] == "medical"
    assert "medicine" in meta["domains"]
    assert "MBBS" in meta["programs"]
    assert "B.Tech" not in meta["programs"]
    assert meta["annual_fee_numeric"] == 1628

    aiims = next(c for c in DELHI_COLLEGES if c.id == "entity-aiims")
    assert aiims.institution_type == "medical"
    assert "B.Tech" not in (aiims.programs or [])
