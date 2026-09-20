from typing import Literal, Optional, Dict, Any
from pydantic import BaseModel, ConfigDict
from pydantic.alias_generators import to_camel

SourceType = Literal[
    "reddit", "web", "official", "forum", "review",
    "institutional", "open_data", "public_discussion", "public_web"
]
SourceStatus = Literal["live", "cached", "demo"]

class NormalizedSource(BaseModel):
    """
    Standardized, traceable source representation for all ingested evidence.
    Every claim in ReviewLens traces back to an instance of this model.
    """
    model_config = ConfigDict(
        alias_generator=to_camel,
        populate_by_name=True,
        from_attributes=True
    )

    id: str
    type: SourceType
    domain: str
    title: str
    url: Optional[str] = None
    author: Optional[str] = None
    published_at: Optional[str] = None
    retrieved_at: str
    content: str
    snippet: str
    source_status: SourceStatus = "demo"
    metadata: Dict[str, Any] = {}
