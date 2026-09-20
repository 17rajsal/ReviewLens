from abc import ABC, abstractmethod
from typing import Dict, Any, Optional, List
import json
import sqlite3
import os
import datetime

class EvidenceRepository(ABC):
    """
    Abstract repository interface for persisting research queries, source entities,
    and traceable evidence graphs.
    Allows easy future migration to PostgreSQL or distributed stores.
    """

    @abstractmethod
    def save_research_session(self, session_id: str, query: str, data: Dict[str, Any]) -> None:
        pass

    @abstractmethod
    def get_research_session(self, session_id: str) -> Optional[Dict[str, Any]]:
        pass

    @abstractmethod
    def list_research_runs(self, limit: int = 20) -> List[Dict[str, Any]]:
        pass

    @abstractmethod
    def record_evidence_graph(
        self,
        session_id: str,
        sources: List[Dict[str, Any]],
        entities: List[Dict[str, Any]],
        evidence_items: List[Dict[str, Any]],
        claims: Optional[List[Dict[str, Any]]] = None
    ) -> None:
        pass


class SQLiteEvidenceRepository(EvidenceRepository):
    """
    Lightweight, embedded relational SQLite repository for evidence persistence.
    Schema maps directly to standard relational databases (PostgreSQL-compatible).
    """

    def __init__(self, db_path: str = "reviewlens_cache.db"):
        self.db_path = db_path
        self._init_db()

    def _init_db(self):
        with sqlite3.connect(self.db_path) as conn:
            conn.execute("PRAGMA foreign_keys = ON;")
            
            # 1. Sources table
            conn.execute("""
                CREATE TABLE IF NOT EXISTS sources (
                    id TEXT PRIMARY KEY,
                    source_type TEXT NOT NULL,
                    source_name TEXT NOT NULL,
                    domain TEXT NOT NULL,
                    title TEXT,
                    url TEXT,
                    author TEXT,
                    published_at TEXT,
                    retrieved_at TEXT NOT NULL,
                    source_status TEXT NOT NULL,
                    metadata_json TEXT
                )
            """)

            # 2. Entities table (with coordinates & Place ID)
            conn.execute("""
                CREATE TABLE IF NOT EXISTS entities (
                    id TEXT PRIMARY KEY,
                    canonical_name TEXT NOT NULL,
                    domain TEXT NOT NULL,
                    category TEXT,
                    location TEXT,
                    latitude REAL,
                    longitude REAL,
                    place_id TEXT,
                    formatted_address TEXT,
                    google_maps_url TEXT,
                    aliases_json TEXT,
                    metadata_json TEXT,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            """)

            # Ensure columns exist if migrating older database
            for col, col_type in [
                ("latitude", "REAL"),
                ("longitude", "REAL"),
                ("place_id", "TEXT"),
                ("formatted_address", "TEXT"),
                ("google_maps_url", "TEXT")
            ]:
                try:
                    conn.execute(f"ALTER TABLE entities ADD COLUMN {col} {col_type}")
                except Exception:
                    pass

            # 3. Aspects table
            conn.execute("""
                CREATE TABLE IF NOT EXISTS aspects (
                    id TEXT PRIMARY KEY,
                    name TEXT NOT NULL,
                    domain TEXT NOT NULL,
                    description TEXT
                )
            """)

            # 4. Evidence table (retaining original source URL, type, coordinates, and dates)
            conn.execute("""
                CREATE TABLE IF NOT EXISTS evidence (
                    id TEXT PRIMARY KEY,
                    session_id TEXT,
                    source_id TEXT,
                    entity_id TEXT,
                    aspect_id TEXT,
                    source_type TEXT NOT NULL,
                    source_name TEXT NOT NULL,
                    source_url TEXT,
                    excerpt TEXT NOT NULL,
                    sentiment TEXT,
                    sentiment_confidence REAL,
                    relevance_score REAL,
                    published_at TEXT,
                    retrieved_at TEXT NOT NULL,
                    verification_hash TEXT,
                    latitude REAL,
                    longitude REAL,
                    metadata_json TEXT
                )
            """)

            # Ensure evidence columns exist if migrating older database
            for col, col_type in [
                ("latitude", "REAL"),
                ("longitude", "REAL")
            ]:
                try:
                    conn.execute(f"ALTER TABLE evidence ADD COLUMN {col} {col_type}")
                except Exception:
                    pass

            # 5. Claims table
            conn.execute("""
                CREATE TABLE IF NOT EXISTS claims (
                    id TEXT PRIMARY KEY,
                    evidence_id TEXT,
                    entity_id TEXT,
                    aspect_id TEXT,
                    claim_text TEXT NOT NULL,
                    polarity TEXT,
                    confidence REAL,
                    FOREIGN KEY(evidence_id) REFERENCES evidence(id)
                )
            """)

            # 6. Relationships table (corroborations, contradictions, citations)
            conn.execute("""
                CREATE TABLE IF NOT EXISTS relationships (
                    id TEXT PRIMARY KEY,
                    session_id TEXT,
                    source_evidence_id TEXT,
                    target_evidence_id TEXT,
                    relationship_type TEXT NOT NULL,
                    score REAL,
                    details_json TEXT
                )
            """)

            # 7. Research sessions table
            conn.execute("""
                CREATE TABLE IF NOT EXISTS research_sessions (
                    session_id TEXT PRIMARY KEY,
                    query TEXT NOT NULL,
                    category TEXT,
                    data_json TEXT NOT NULL,
                    source_status_json TEXT,
                    demo_mode INTEGER DEFAULT 0,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            """)
            # Ensure migration for older cache databases
            for col, col_type in [("category", "TEXT"), ("source_status_json", "TEXT"), ("demo_mode", "INTEGER DEFAULT 0")]:
                try:
                    conn.execute(f"ALTER TABLE research_sessions ADD COLUMN {col} {col_type}")
                except Exception:
                    pass
            conn.commit()

    def save_research_session(self, session_id: str, query: str, data: Dict[str, Any]) -> None:
        try:
            with sqlite3.connect(self.db_path) as conn:
                demo_mode = 1 if data.get("demo_mode", data.get("demoMode", False)) else 0
                source_status = json.dumps(data.get("source_status", data.get("sourceStatus", {})))
                conn.execute(
                    """INSERT OR REPLACE INTO research_sessions 
                       (session_id, query, category, data_json, source_status_json, demo_mode) 
                       VALUES (?, ?, ?, ?, ?, ?)""",
                    (session_id, query, data.get("category", "general"), json.dumps(data), source_status, demo_mode)
                )

                # Persist discovered entities and evidence into relational tables
                results = data.get("results") or data.get("entities") or []
                for ent in results:
                    canonical_name = ent.get("canonical_name") or ent.get("canonicalName") or ent.get("name", "Unknown")
                    place_id = ent.get("place_id") or ent.get("placeId")
                    formatted_address = ent.get("formatted_address") or ent.get("formattedAddress") or ent.get("location")
                    google_maps_url = ent.get("google_maps_url") or ent.get("googleMapsUrl")
                    conn.execute("""
                        INSERT OR REPLACE INTO entities 
                        (id, canonical_name, domain, category, location, latitude, longitude, place_id, formatted_address, google_maps_url, aliases_json, metadata_json)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                    """, (
                        ent.get("id"),
                        canonical_name,
                        ent.get("domain", data.get("category", "general")),
                        ent.get("category", data.get("category", "")),
                        ent.get("location", ""),
                        ent.get("latitude"),
                        ent.get("longitude"),
                        place_id,
                        formatted_address,
                        google_maps_url,
                        json.dumps(ent.get("aliases", [])),
                        json.dumps(ent)
                    ))

                    ev_list = ent.get("evidence_list") or ent.get("evidenceList") or []
                    now_iso = datetime.datetime.now(datetime.timezone.utc).isoformat()
                    for ev in ev_list:
                        conn.execute("""
                            INSERT OR REPLACE INTO evidence
                            (id, session_id, source_id, entity_id, aspect_id, source_type, source_name, source_url, excerpt, sentiment, sentiment_confidence, relevance_score, published_at, retrieved_at, latitude, longitude)
                            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                        """, (
                            ev.get("id"),
                            session_id,
                            ev.get("source_id", ev.get("source", "src")),
                            ent.get("id"),
                            ev.get("aspect_id", ev.get("aspect")),
                            ev.get("source_type", ev.get("source", "public_web")),
                            ev.get("source_name", ev.get("sourceName", "Public Source")),
                            ev.get("source_url", ev.get("sourceUrl", ev.get("url"))),
                            ev.get("excerpt", ev.get("text", "")),
                            ev.get("sentiment", "neutral"),
                            ev.get("sentiment_confidence", ev.get("sentimentConfidence", 0.8)),
                            ev.get("relevance_score", ev.get("relevanceScore", 85.0)),
                            ev.get("published_at", ev.get("publishedAt", str(ev.get("year", "")))),
                            now_iso,
                            ev.get("latitude", ent.get("latitude")),
                            ev.get("longitude", ent.get("longitude"))
                        ))

                conn.commit()
        except Exception:
            pass  # Non-blocking

    def get_research_session(self, session_id: str) -> Optional[Dict[str, Any]]:
        try:
            with sqlite3.connect(self.db_path) as conn:
                cursor = conn.cursor()
                cursor.execute("SELECT data_json FROM research_sessions WHERE session_id = ?", (session_id,))
                row = cursor.fetchone()
                if row:
                    return json.loads(row[0])
        except Exception:
            pass
        return None

    def list_research_runs(self, limit: int = 20) -> List[Dict[str, Any]]:
        runs = []
        try:
            with sqlite3.connect(self.db_path) as conn:
                cursor = conn.cursor()
                cursor.execute("""
                    SELECT session_id, query, category, demo_mode, created_at, data_json
                    FROM research_sessions
                    ORDER BY created_at DESC
                    LIMIT ?
                """, (limit,))
                rows = cursor.fetchall()
                for row in rows:
                    session_id, query, cat, demo_mode, created_at, data_json = row
                    data = {}
                    try:
                        data = json.loads(data_json)
                    except Exception:
                        pass
                    
                    results = data.get("results") or data.get("entities") or []
                    evidence = data.get("evidence") or []
                    runs.append({
                        "research_run_id": session_id,
                        "sessionId": session_id,
                        "query": query,
                        "category": cat,
                        "demo_mode": bool(demo_mode),
                        "demoMode": bool(demo_mode),
                        "created_at": created_at,
                        "entities_count": len(results),
                        "entitiesCount": len(results),
                        "evidence_count": len(evidence),
                        "evidenceCount": len(evidence),
                        "sources_scanned_count": data.get("sources_scanned_count", data.get("sourcesScannedCount", len(evidence) + 10)),
                        "status": "completed"
                    })
        except Exception:
            pass
        return runs

    def record_evidence_graph(
        self,
        session_id: str,
        sources: List[Dict[str, Any]],
        entities: List[Dict[str, Any]],
        evidence_items: List[Dict[str, Any]],
        claims: Optional[List[Dict[str, Any]]] = None
    ) -> None:
        try:
            now_iso = datetime.datetime.now(datetime.timezone.utc).isoformat()
            with sqlite3.connect(self.db_path) as conn:
                for src in sources:
                    conn.execute("""
                        INSERT OR REPLACE INTO sources 
                        (id, source_type, source_name, domain, title, url, author, published_at, retrieved_at, source_status, metadata_json)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                    """, (
                        src.get("id"),
                        src.get("source_type", src.get("type", "unknown")),
                        src.get("source_name", src.get("domain", "source")),
                        src.get("domain", ""),
                        src.get("title", ""),
                        src.get("url"),
                        src.get("author"),
                        src.get("published_at"),
                        src.get("retrieved_at", now_iso),
                        src.get("source_status", "live"),
                        json.dumps(src.get("metadata", {}))
                    ))

                for ent in entities:
                    conn.execute("""
                        INSERT OR REPLACE INTO entities 
                        (id, canonical_name, domain, category, location, latitude, longitude, place_id, formatted_address, google_maps_url, aliases_json, metadata_json)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                    """, (
                        ent.get("id"),
                        ent.get("canonical_name", ent.get("name", "Unknown")),
                        ent.get("domain", "general"),
                        ent.get("category", ""),
                        ent.get("location", ""),
                        ent.get("latitude"),
                        ent.get("longitude"),
                        ent.get("place_id"),
                        ent.get("formatted_address"),
                        ent.get("google_maps_url"),
                        json.dumps(ent.get("aliases", [])),
                        json.dumps(ent.get("metadata", {}))
                    ))

                for ev in evidence_items:
                    conn.execute("""
                        INSERT OR REPLACE INTO evidence
                        (id, session_id, source_id, entity_id, aspect_id, source_type, source_name, source_url, excerpt, sentiment, sentiment_confidence, relevance_score, published_at, retrieved_at, verification_hash, latitude, longitude)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                    """, (
                        ev.get("id"),
                        session_id,
                        ev.get("source_id", ev.get("source", "src")),
                        ev.get("entity_id"),
                        ev.get("aspect_id", ev.get("aspect")),
                        ev.get("source_type", ev.get("source", "public_web")),
                        ev.get("source_name", ev.get("source_name", "Public Source")),
                        ev.get("source_url", ev.get("url")),
                        ev.get("excerpt", ev.get("text", "")),
                        ev.get("sentiment", "neutral"),
                        ev.get("sentiment_confidence", 0.8),
                        ev.get("relevance_score", 85.0),
                        ev.get("published_at", ev.get("date")),
                        ev.get("retrieved_at", now_iso),
                        ev.get("verification_hash"),
                        ev.get("latitude"),
                        ev.get("longitude")
                    ))
                conn.commit()
        except Exception:
            pass

    def get_entity(self, entity_id: str) -> Optional[Dict[str, Any]]:
        try:
            with sqlite3.connect(self.db_path) as conn:
                cursor = conn.cursor()
                cursor.execute("""
                    SELECT id, canonical_name, domain, category, location, latitude, longitude, place_id, formatted_address, google_maps_url, aliases_json, metadata_json
                    FROM entities WHERE id = ?
                """, (entity_id,))
                row = cursor.fetchone()
                if row:
                    return {
                        "id": row[0],
                        "canonical_name": row[1],
                        "canonicalName": row[1],
                        "domain": row[2],
                        "category": row[3],
                        "location": row[4],
                        "latitude": row[5],
                        "longitude": row[6],
                        "place_id": row[7],
                        "placeId": row[7],
                        "formatted_address": row[8],
                        "formattedAddress": row[8],
                        "google_maps_url": row[9],
                        "googleMapsUrl": row[9],
                        "aliases": json.loads(row[10] or "[]"),
                        "metadata": json.loads(row[11] or "{}")
                    }
        except Exception:
            pass
        return None

    def get_entity_evidence(self, entity_id: str) -> List[Dict[str, Any]]:
        evidence_list = []
        try:
            with sqlite3.connect(self.db_path) as conn:
                cursor = conn.cursor()
                cursor.execute("""
                    SELECT id, source_type, source_name, source_url, excerpt, sentiment, sentiment_confidence, relevance_score, published_at, retrieved_at, aspect_id
                    FROM evidence WHERE entity_id = ?
                """, (entity_id,))
                rows = cursor.fetchall()
                for row in rows:
                    evidence_list.append({
                        "id": row[0],
                        "source": row[1],
                        "source_name": row[2],
                        "sourceName": row[2],
                        "source_url": row[3],
                        "sourceUrl": row[3],
                        "excerpt": row[4],
                        "sentiment": row[5],
                        "sentiment_confidence": row[6],
                        "sentimentConfidence": row[6],
                        "relevance_score": row[7],
                        "relevanceScore": row[7],
                        "published_at": row[8],
                        "publishedAt": row[8],
                        "retrieved_at": row[9],
                        "retrievedAt": row[9],
                        "aspect": row[10]
                    })
        except Exception:
            pass
        return evidence_list

default_repository = SQLiteEvidenceRepository()
