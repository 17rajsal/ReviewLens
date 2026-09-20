import pytest
from starlette.testclient import TestClient
from backend.main import app

client = TestClient(app)

def test_api_health():
    response = client.get("/api/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"
    assert "demo_mode" in data or "demoMode" in data
    assert "connectors" in data
    assert "reddit" in data["connectors"]
    assert "local_archive" in data["connectors"]

def test_api_research_college_query():
    payload = {
        "query": "Best B.Tech CSE colleges in Delhi under ₹2 lakh/year with good coding culture"
    }
    response = client.post("/api/research", json=payload)
    assert response.status_code == 200
    data = response.json()

    # CamelCase serialization alignment with TypeScript
    assert "canonicalName" in data["results"][0]
    assert "evidenceConfidenceScore" in data["results"][0]
    assert "confidenceBreakdown" in data["results"][0]
    assert "independentDiscussions" in data["results"][0]["confidenceBreakdown"]

    # Extended unified contract keys
    assert "entities" in data
    assert "evidence" in data
    assert "aspects" in data
    assert "conflicts" in data
    assert "sources" in data
    assert "corroboration" in data
    assert "graph" in data
    assert len(data["results"]) >= 4
    assert len(data["graph"]["nodes"]) > 0
    assert len(data["graph"]["edges"]) > 0

def test_api_research_empty_query():
    response = client.post("/api/research", json={"query": ""})
    assert response.status_code == 400
