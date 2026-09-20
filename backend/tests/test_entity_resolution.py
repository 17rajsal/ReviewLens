from backend.services.entity_resolution import EntityResolutionService

def test_resolve_generic_aliases():
    resolver = EntityResolutionService()

    # Test exact and informal mentions of generic entities
    assert resolver.resolve_text_to_entity_id("Discussing Tech Campus A coding club") == "entity-institution-a"
    assert resolver.resolve_text_to_entity_id("Is Eng Institute B better than others?") == "entity-institution-b"
    assert resolver.resolve_text_to_entity_id("University Campus C fees is affordable") == "entity-institution-c"
    assert resolver.resolve_text_to_entity_id("Strict discipline at Tech Institute D") == "entity-institution-d"
    assert resolver.resolve_text_to_entity_id("Dining at Kitchen A in Connaught Place") == "entity-restaurant-a"

def test_unresolved_entity():
    resolver = EntityResolutionService()
    assert resolver.resolve_text_to_entity_id("Completely unrelated text about guitars") is None
