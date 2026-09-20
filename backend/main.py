import uvicorn
from typing import List, Dict, Any, Optional
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from backend.config import settings
from backend.models.query import QueryRequest, ResearchQueryResponse
from backend.services.evidence_engine import EvidenceEngine
from backend.utils.repository import default_repository

app = FastAPI(
    title=settings.PROJECT_NAME,
    version="1.0.0",
    description="ReviewLens Evidence Intelligence Engine - Real Evidence Ingestion & Synthesis Pipeline",
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS configuration to enable seamless React frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize evidence engine
evidence_engine = EvidenceEngine()

@app.get("/api/health")
async def health_check():
    """
    Health check endpoint returning system status, demo mode state, and connector readiness.
    """
    sources_health = await evidence_engine.get_all_sources_health()
    return {
        "status": "ok",
        "service": "ReviewLens Evidence Engine",
        "version": "1.0.0",
        "demo_mode": settings.REVIEWLENS_DEMO_MODE,
        "connectors": sources_health
    }

@app.get("/api/sources/health")
async def get_sources_health():
    """
    Returns live health, rate limit info, and operational readiness for all registered source connectors.
    """
    return await evidence_engine.get_all_sources_health()

@app.post("/api/research", response_model=ResearchQueryResponse, response_model_by_alias=True)
async def conduct_research(payload: QueryRequest):
    """
    Executes the end-to-end evidence ingestion, deduplication, contradiction,
    and corroboration pipeline for a natural language research query.
    """
    query_str = payload.query.strip()
    if not query_str:
        raise HTTPException(status_code=400, detail="Query cannot be empty.")

    try:
        report = await evidence_engine.execute_research_pipeline(query_str)
        return report
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Evidence processing failure: {str(e)}")

@app.get("/api/runs")
async def list_runs(limit: int = Query(20, ge=1, le=100)):
    """
    Returns recent research execution runs from SQLite storage for the research history view.
    """
    return default_repository.list_research_runs(limit=limit)

@app.get("/api/runs/{run_id}")
@app.get("/api/research/{run_id}")
async def get_run_by_id(run_id: str):
    """
    Retrieves full reproducible research query report by session ID.
    """
    session_data = default_repository.get_research_session(run_id)
    if not session_data:
        raise HTTPException(status_code=404, detail=f"Research run '{run_id}' not found.")
    return session_data

@app.get("/api/entities/{entity_id}")
async def get_entity_by_id(entity_id: str):
    """
    Retrieves entity record and place metadata.
    """
    entity = default_repository.get_entity(entity_id)
    if not entity:
        # Check archive entities
        for ent in evidence_engine.archive_connector.get_generic_education_entities():
            if ent.id == entity_id:
                return ent.model_dump(by_alias=True)
        for ent in evidence_engine.archive_connector.get_generic_restaurant_entities():
            if ent.id == entity_id:
                return ent.model_dump(by_alias=True)
        raise HTTPException(status_code=404, detail=f"Entity '{entity_id}' not found.")
    return entity

@app.get("/api/entities/{entity_id}/evidence")
async def get_entity_evidence(entity_id: str):
    """
    Retrieves all auditable evidence items for a given entity.
    """
    evidence = default_repository.get_entity_evidence(entity_id)
    if not evidence:
        for ent in evidence_engine.archive_connector.get_generic_education_entities():
            if ent.id == entity_id:
                return [e.model_dump(by_alias=True) for e in ent.evidence_list]
        for ent in evidence_engine.archive_connector.get_generic_restaurant_entities():
            if ent.id == entity_id:
                return [e.model_dump(by_alias=True) for e in ent.evidence_list]
    return evidence

@app.get("/api/entities/{entity_id}/graph")
async def get_entity_graph(entity_id: str):
    """
    Retrieves dynamic evidence graph for a given entity.
    """
    for ent in evidence_engine.archive_connector.get_generic_education_entities():
        if ent.id == entity_id:
            return evidence_engine._generate_evidence_graph(ent).model_dump(by_alias=True)
    for ent in evidence_engine.archive_connector.get_generic_restaurant_entities():
        if ent.id == entity_id:
            return evidence_engine._generate_evidence_graph(ent).model_dump(by_alias=True)
    raise HTTPException(status_code=404, detail=f"Graph for entity '{entity_id}' not found.")

if __name__ == "__main__":
    uvicorn.run(
        "backend.main:app",
        host=settings.HOST,
        port=settings.PORT,
        reload=False
    )
