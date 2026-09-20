# ReviewLens

> **"Don't trust one rating. See the evidence."**

ReviewLens is an evidence-driven decision intelligence engine that synthesizes permitted public evidence from multiple independent sources, resolves ambiguous entities, identifies recurring and conflicting perspectives, performs multi-faceted aspect analysis, and provides traceable, auditable evidence graphs without relying on opaque rating averages.

---

## Overview

Traditional review aggregators compress complex, multi-faceted human experiences into a single numerical star rating. This leads to review manipulation, biased averages, and context flattening. 

ReviewLens takes an intelligence-grade, evidence-first approach:
1. **Multi-Source Ingestion**: Discovers entities and collects signals from permitted open datasets, public discussions, and encyclopedic records.
2. **Entity Resolution & Deduplication**: Disambiguates aliases, matches geographic coordinates, and clusters redundant records.
3. **Contrastive Conflict Detection**: Flags opposing sentiment signals on the same subject rather than averaging them out.
4. **Traceable Attribution**: Every assertion links directly back to its original source URL, timestamp, and provenance category.

---

## Why ReviewLens

* **No Black-Box Ratings**: We do not calculate artificial 1-to-5 star scores. Instead, we show corroboration density, aspect breakdowns, and verified source distributions.
* **Genuine Conflict Isolation**: When half the community praises an aspect (e.g. food quality) and the other half criticizes it, ReviewLens highlights the controversy with supporting and opposing citations.
* **Verifiable Provenance**: Users can inspect exact source URLs, timestamps, author roles, and operational source statuses.
* **Multi-Domain Intelligence**: Built to handle complex real-world queries across higher education, dining & hospitality, housing, and general research.

---

## Core Features

- **Multi-Source Connector Architecture**: Pluggable connectors for OpenStreetMap, Wikimedia Foundation, Reddit OAuth, Google Places, and compliant Web Search engines.
- **Entity Resolution Engine**: Normalizes colloquial aliases (e.g., "Tonino CP" $\rightarrow$ "Caffè Tonino, Connaught Place") using geospatial proximity (Haversine distance) and Levenshtein token similarity.
- **Topological Evidence Graph**: Interactive force-directed graph connecting entities, aspects, claims, and underlying source nodes.
- **Contrastive Perspective Analyzer**: Extracts opposing sentiment polarities with confidence scores and synthesis summaries.
- **Temporal Recency Decay**: Weights recent evidence higher while preserving longitudinal historical context.
- **Interactive Deep Map**: Geospatial visualization of verified physical entities with amenity tags and direct evidence inspection.
- **Side-by-Side Entity Comparison**: Compare multiple entities across corroboration density, aspect performance, and conflicting claims.

---

## Architecture

ReviewLens separates evidence discovery, normalization, analysis, and presentation into clean, decoupled layers:

```
[ User Query ]
       │
       ▼
[ Query Parser ] ─── extracts intent, domain, location, priorities
       │
       ▼
[ Evidence Engine ] ─── coordinates independent connectors
       ├── OpenStreetMapConnector  ─── Live Overpass API (coordinates & amenity tags)
       ├── WikimediaConnector      ─── Live REST API (institutional background)
       ├── GooglePlacesConnector   ─── Official Places API (verified Place IDs & metadata)
       ├── RedditConnector         ─── Official OAuth Search API (public discussions)
       ├── WebSearchConnector      ─── SearXNG / Compliant Search API (public web documents)
       └── LocalArchiveConnector   ─── Offline verified benchmark models
       │
       ▼
[ Entity Resolution & Deduplication ] ─── clusters nodes & removes duplicate claims
       │
       ▼
[ Contradiction & Aspect Analyzer ] ─── identifies conflicting claims & aspect scores
       │
       ▼
[ Unified Evidence Report & Graph ] ─── returned to Frontend (React + Vite + Tailwind)
```

---

## Data Sources & Current Operational Status

ReviewLens strictly distinguishes between live network data and offline demonstration baselines. Sources are never labeled `LIVE` unless an active network request successfully returned valid data.

| Source | Category | Status | Authentication & Policy | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **OpenStreetMap** | Open Data | **LIVE** | Public Overpass API (ODbL License) | Physical entity discovery, geographic coordinates, amenity tags. |
| **Wikimedia** | Institutional | **LIVE** | Public Wikipedia REST API (CC-BY-SA 4.0) | Institutional background, founding history, encyclopedic context. |
| **Google Places** | Official Business | **Requires Credentials** | Google Places Platform (`GOOGLE_PLACES_API_KEY`) | Official Place IDs, verified business metadata, address verification. |
| **Reddit** | Public Discussion | **Requires Credentials** | Official OAuth 2.0 (`REDDIT_CLIENT_ID`, `SECRET`) | Public community discussions and student/consumer feedback. |
| **Web Search** | Search Result | **Requires Provider** | SearXNG / Custom Endpoint (`WEB_SEARCH_ENDPOINT`) | Public web documents and index overviews. |
| **Local Archive** | Benchmark Baseline | **Offline Ready** | Local Benchmark Corpus | Verified Delhi NCR benchmark baseline for offline testing. |

---

## Evidence & Provenance Contract

Every evidence item collected and presented by ReviewLens strictly adheres to our normalization contract:

- `source`: Standard source category (`open_data`, `institutional`, `official`, `reddit`, `web`, `archive`)
- `url`: Direct, traceable external URL
- `entity`: Canonical resolved entity name
- `retrieved_at`: ISO 8601 UTC timestamp of retrieval
- `published_at`: Original publication date where available
- `provenance`: Traceability tag (`LIVE_OPENSTREETMAP`, `LIVE_WIKIMEDIA`, `LIVE_GOOGLE_PLACES`, `LIVE_REDDIT`, `LIVE_WEB_SEARCH`, `DEMO_LOCAL_ARCHIVE`)
- `is_live`: Boolean (`True` if retrieved from a live external network request)
- `is_demo`: Boolean (`True` if originating from offline benchmark baseline)

---

## Tech Stack

### Backend
- **FastAPI** (Python 3.10+)
- **Pydantic v2** (Strict data modeling & camelCase serialization)
- **HTTPX** (Asynchronous HTTP client with backoff retries)
- **SQLite / In-Memory Cache** (Resilient session storage and request caching)
- **Pytest** (Unit and integration test suite)

### Frontend
- **React 19** + **TypeScript**
- **Vite** (Next-generation frontend tooling)
- **Tailwind CSS v4** (Editorial daylight typography & design system)
- **Lucide React** (Minimalist iconography)
- **Canvas / Force-Directed Graph** (Interactive evidence topology)
- **Leaflet / React Leaflet** (Geospatial entity mapping)

---

## Project Structure

```
ReviewLens/
├── backend/
│   ├── connectors/          # Independent source adapters (OSM, Wiki, Reddit, Google Places, Web)
│   ├── ml/                  # Deduplication, contradiction detection, and aspect sentiment
│   ├── models/              # Pydantic schemas (evidence, entity, query, analysis)
│   ├── services/            # EvidenceEngine & orchestration pipeline
│   ├── tests/               # Pytest suite (23+ unit & integration tests)
│   ├── utils/               # SQLite persistence, rate limiting, and caching
│   ├── config.py            # Environment configuration loader
│   ├── main.py              # FastAPI app definition and route registration
│   └── requirements.txt     # Python backend dependencies
├── src/
│   ├── api/                 # Frontend API client and backend bridge
│   ├── components/
│   │   ├── common/          # Navigation, Footer, Modals, Audio
│   │   ├── compare/         # Side-by-side comparison matrix
│   │   ├── drawer/          # Evidence detail drawer
│   │   ├── entity/          # Deep entity detail view
│   │   ├── graph/           # Topological force graph
│   │   ├── hero/            # Hero section and search bar
│   │   ├── history/         # Research session history
│   │   ├── home/            # Contact and Suggestion section
│   │   ├── map/             # Interactive geographic evidence map
│   │   ├── results/         # Intelligence report dashboard
│   │   ├── sources/         # Real-time connector health monitor
│   │   └── storytelling/    # 6-stage evidence methodology walkthrough
│   ├── data/                # Verified demonstration datasets
│   ├── types/               # TypeScript interface definitions
│   ├── App.tsx              # Application root and state router
│   └── main.tsx             # React DOM entry point
├── .env.example             # Clean configuration template with placeholders
├── package.json             # Frontend npm dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite bundler configuration
```

---

## Local Setup

### Prerequisites
- Node.js 18+ and npm
- Python 3.10+
- Git

### 1. Clone the Repository
```bash
git clone <repository-url>
cd ReviewLens
```

### 2. Frontend Setup
```bash
# Install frontend dependencies
npm install

# Run frontend development server
npm run dev
```
The frontend will be available at `http://localhost:5173`.

### 3. Backend Setup
```bash
# Create and activate Python virtual environment
python -m venv venv

# On Windows:
venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate

# Install backend dependencies
pip install -r backend/requirements.txt

# Start the FastAPI server
python -m uvicorn backend.main:app --host 127.0.0.1 --port 8000 --reload
```
The API documentation will be available at `http://127.0.0.1:8000/docs`.

---

## Environment Variables

ReviewLens works out of the box with open data sources (OpenStreetMap and Wikimedia). To enable additional sources, copy `.env.example` to `.env` and provide your credentials:

```bash
cp .env.example .env
```

| Variable | Required? | Description |
| :--- | :--- | :--- |
| `HOST` | Optional | Server host (default: `0.0.0.0`) |
| `PORT` | Optional | Server port (default: `8000`) |
| `REVIEWLENS_DEMO_MODE` | Optional | Set `true` to force demo mode; defaults to `false` |
| `GOOGLE_PLACES_API_KEY` | Optional | Google Places Platform API key for Place search and details |
| `REDDIT_CLIENT_ID` | Optional | Official Reddit OAuth App Client ID |
| `REDDIT_CLIENT_SECRET` | Optional | Official Reddit OAuth App Client Secret |
| `REDDIT_USER_AGENT` | Optional | Reddit User-Agent header (default: `ReviewLens/1.0`) |
| `WEB_SEARCH_ENDPOINT` | Optional | JSON search endpoint (SearXNG or compliant provider) |
| `WEB_SEARCH_API_KEY` | Optional | Bearer authentication key for web search provider |
| `CACHE_TTL_SECONDS` | Optional | In-memory cache duration in seconds (default: `3600`) |

---

## Testing

### Run Backend Tests
ReviewLens includes a comprehensive pytest suite covering entity resolution, contradiction detection, connector error isolation, and serialization contracts:

```bash
python -m pytest backend/tests -v
```

### Run Frontend Production Build
Validate TypeScript types and asset compilation:

```bash
npm run build
```

---

## Demo vs. Live Data Distinction

ReviewLens enforces strict data transparency:
- **`LIVE_RESEARCH`**: Engaged when one or more live connectors successfully retrieve external data. Evidence items are tagged with their specific provenance (`LIVE_OPENSTREETMAP`, `LIVE_WIKIMEDIA`, etc.).
- **Unconfigured Connectors**: If credentials are missing or an API is unreachable, ReviewLens reports `NOT CONFIGURED` or `ERROR` and **never generates fabricated reviews or mock forum discussions**.
- **Offline Benchmark Baseline**: When explicitly testing offline, the engine uses the verified Delhi NCR benchmark dataset (`DEMO_LOCAL_ARCHIVE`).

---

## Security & Privacy Policy

- **No Secret Storage**: Real credentials, `.env` files, and local runtime databases are strictly excluded from version control via `.gitignore`.
- **No Private Data Harvesting**: ReviewLens queries only authorized public APIs and complies with respective terms of service and robots.txt.
- **Official APIs Only**: We do not perform unpermitted HTML web scraping or bypass rate limits.

---

## Roadmap

- [x] Independent multi-source connector architecture
- [x] Live OpenStreetMap Overpass & Wikimedia REST integration
- [x] Official Reddit OAuth & Google Places connector templates
- [x] Contrastive contradiction detection & Aspect sentiment analysis
- [x] Force-directed interactive Evidence Graph
- [x] Real-time Source Health monitoring dashboard (`/api/sources/health`)
- [ ] Multi-region geographic expansion beyond Delhi NCR
- [ ] Exportable executive PDF and Markdown evidence dossiers
- [ ] Support for custom local LLM entity summarizers (Ollama / Llama-cpp)

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
