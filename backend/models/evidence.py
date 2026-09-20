from typing import Literal, Optional, List, Dict, Any
from pydantic import BaseModel, ConfigDict, Field
from pydantic.alias_generators import to_camel

SourceType = Literal[
    "reddit", "forum", "review", "official", "web",
    "open_data", "institutional", "public_discussion", "public_web"
]
SentimentType = Literal["positive", "mixed", "negative", "nuanced", "neutral", "unknown"]

class BaseCamelModel(BaseModel):
    model_config = ConfigDict(
        alias_generator=to_camel,
        populate_by_name=True,
        from_attributes=True,
        extra="allow"
    )

class EvidenceItem(BaseCamelModel):
    id: str
    source: SourceType
    source_name: str = "Public Source"
    source_domain: str = "web"
    source_url: Optional[str] = None
    source_title: str = ""
    excerpt: str = ""
    date: str = ""
    published_at: Optional[str] = None
    retrieved_at: Optional[str] = None
    source_category: str = "PUBLIC WEB PAGE"  # "OPEN DATA", "INSTITUTIONAL SOURCE", "PUBLIC DISCUSSION", "PUBLIC WEB PAGE"
    year: int = 2025
    aspect: str = "General"
    sentiment: SentimentType = "neutral"
    sentiment_confidence: float = 0.85  # Model confidence in sentiment classification (NOT factual truth)
    relevance_score: float = 85.0       # 0 - 100
    author_role: Optional[str] = None
    upvotes_or_reactions: Optional[int] = None
    duplicate_cluster_id: Optional[str] = None
    is_duplicate_original: Optional[bool] = None
    duplicate_count: Optional[int] = None
    verification_hash: Optional[str] = None
    provenance: Optional[str] = None  # LIVE_OPENSTREETMAP, LIVE_WIKIMEDIA, LIVE_GOOGLE_PLACES, LIVE_REDDIT, LIVE_WEB_SEARCH, DEMO_LOCAL_ARCHIVE, FALLBACK_DATA
    is_live: bool = False
    is_demo: bool = False
    is_fallback: bool = False
    
    # Explicit Normalization Contract Properties
    source_type: Optional[str] = None
    url: Optional[str] = None
    entity: Optional[str] = None
    content: Optional[str] = None
    author: Optional[str] = None
    created_at: Optional[str] = None
    text: Optional[str] = None
    entity_hint: Optional[str] = None
    aspect_hints: List[str] = []
    metadata: Dict[str, Any] = {}
    recency_bucket: Optional[str] = None  # "recent", "moderately_recent", "old"

    def model_post_init(self, __context: Any) -> None:
        # Guarantee cross-compatibility between source/source_type, text/excerpt/content, url/source_url, entity/entity_hint
        if not self.source_type and self.source:
            self.source_type = str(self.source)
        elif not self.source and self.source_type:
            self.source = self.source_type  # type: ignore

        if not self.url and self.source_url:
            self.url = self.source_url
        elif not self.source_url and self.url:
            self.source_url = self.url

        if not self.entity and self.entity_hint:
            self.entity = self.entity_hint
        elif not self.entity_hint and self.entity:
            self.entity_hint = self.entity

        if not self.content:
            self.content = self.text or self.excerpt or ""
        if not self.text:
            self.text = self.content or self.excerpt or ""
        if not self.excerpt:
            self.excerpt = self.content or self.text or ""
            
        if not self.source_title and self.metadata.get("title"):
            self.source_title = str(self.metadata.get("title"))
            
        if not self.author and self.author_role:
            self.author = self.author_role
        elif not self.author_role and self.author:
            self.author_role = self.author

        if not self.published_at and self.date:
            self.published_at = self.date
        elif not self.date and self.published_at:
            self.date = self.published_at

        if not self.created_at and self.date:
            self.created_at = self.date
