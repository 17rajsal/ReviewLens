from backend.services.query_engine import QueryEngine

def test_parse_btech_delhi_query():
    query = "Best B.Tech CSE colleges in Delhi under ₹2 lakh/year with good coding culture"
    category, constraints = QueryEngine().parse(query)

    assert category == "college"
    assert constraints.domain == "education"
    assert constraints.entity_type == "college"
    assert constraints.degree == "B.Tech"
    assert constraints.branch == "CSE"
    assert constraints.location == "Delhi"
    assert constraints.budget == 200000.0
    assert "2 lakh" in (constraints.budget_max or "").lower()
    assert "coding culture" in constraints.priorities

def test_parse_restaurant_query():
    query = "Authentic South Indian restaurants in Connaught Place under 800"
    category, constraints = QueryEngine().parse(query)

    assert category == "restaurant"
    assert constraints.domain == "dining"
    assert constraints.entity_type == "restaurant"
    assert constraints.budget == 800.0
    assert "Connaught Place" in (constraints.location or "")
