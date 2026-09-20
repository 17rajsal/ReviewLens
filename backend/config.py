import os
from typing import List
from dotenv import load_dotenv

load_dotenv()

class Settings:
    PROJECT_NAME: str = "ReviewLens Evidence Intelligence Engine"
    API_PREFIX: str = "/api"
    HOST: str = os.getenv("HOST", "0.0.0.0")
    PORT: int = int(os.getenv("PORT", "8000"))
    
    # Demo Mode Toggle (defaults to false for live open data research)
    REVIEWLENS_DEMO_MODE: bool = os.getenv("REVIEWLENS_DEMO_MODE", "false").lower() in ("true", "1", "yes")

    # Reddit API Credentials (Official API only; no unpermitted scraping)
    REDDIT_CLIENT_ID: str = os.getenv("REDDIT_CLIENT_ID", "")
    REDDIT_CLIENT_SECRET: str = os.getenv("REDDIT_CLIENT_SECRET", "")
    REDDIT_USER_AGENT: str = os.getenv("REDDIT_USER_AGENT", "ReviewLens/1.0 (evidence-analysis)")

    # Google Places & Maps Credentials (Official API only; fallback to OSM when absent)
    GOOGLE_PLACES_API_KEY: str = os.getenv("GOOGLE_PLACES_API_KEY", "")
    GOOGLE_MAPS_API_KEY: str = os.getenv("GOOGLE_MAPS_API_KEY", "")

    # Web Search Credentials (SearXNG / Custom endpoint)
    WEB_SEARCH_API_KEY: str = os.getenv("WEB_SEARCH_API_KEY", "")
    WEB_SEARCH_ENDPOINT: str = os.getenv("WEB_SEARCH_ENDPOINT", "")

    # Caching & Resilience
    CACHE_TTL_SECONDS: int = int(os.getenv("CACHE_TTL_SECONDS", "3600"))
    
    # CORS Origins
    CORS_ORIGINS: List[str] = [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "*"
    ]

settings = Settings()
