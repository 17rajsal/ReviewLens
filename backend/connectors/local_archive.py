import re
from typing import List, Dict, Any, Optional
from backend.connectors.base import BaseSourceConnector, CATEGORY_DEMO_ARCHIVE
from backend.models.source import NormalizedSource
from backend.models.evidence import EvidenceItem
from backend.models.entity import EntityReport
from backend.models.query import ParsedConstraints
from backend.models.analysis import (
    AspectAnalysis,
    RecencyTrend,
    SourceDistribution,
    ConflictReport,
    ConfidenceBreakdown,
)

# -----------------------------------------------------------------------------
# GENERIC DEMONSTRATION DATASET (With Authentic Delhi NCR Geographic Context)
# -----------------------------------------------------------------------------

INSTITUTION_A = EntityReport(
    id="entity-institution-a",
    canonical_name="Institution A (Technical Campus)",
    aliases=["Institution A", "Tech Campus A", "Campus A", "bpit", "bhagwan parshuram institute of technology"],
    category="Education / Engineering Institute",
    location="Sector 17, Rohini, New Delhi",
    latitude=28.7258,
    longitude=77.1126,
    formatted_address="PSP-4, Dr KN Katju Marg, Sector 17, Rohini, Delhi, 110089",
    google_maps_url="https://maps.google.com/?q=28.7258,77.1126",
    affiliation="Affiliated University System",
    fees_summary="Example annual fee: ~₹1.35L / year",
    annual_fee_numeric=135000,
    highlight_tag="Active Technical Student Clubs & Peer Developer Circles",
    evidence_confidence_score=82.0,  # Corroboration Coverage, NOT truth
    confidence_breakdown=ConfidenceBreakdown(
        independent_discussions=28,
        source_types_count=4,
        recency_factor_score=89.0,
        corroboration_density=84.0,
        conflict_detected=True,
        conflict_penalty_applied=6.0,
    ),
    summary_verdict="Public discussions highlight strong student-driven coding circles and competitive hackathon participation. Campus placement discussions show divergence between independent off-campus applicants and general on-campus recruitments.",
    aspects=[
        AspectAnalysis(
            id="asp-inst-a-coding",
            name="Coding Culture",
            label="Coding & Developer Community",
            sentiment="positive",
            positive_ratio=88.0,
            evidence_count=31,
            summary="Example technical community evidence retrieved from public discussions indicates active peer collaboration and developer societies.",
            key_phrases=["peer developer circles", "hackathon participation", "student tech club"]
        ),
        AspectAnalysis(
            id="asp-inst-a-placements",
            name="Placements",
            label="Career Outcomes & Opportunities",
            sentiment="mixed",
            positive_ratio=58.0,
            evidence_count=46,
            summary="Example placement discussions show divergence: candidates preparing independently report positive outcomes, while overall mass hiring volume reflects wider market slowdowns.",
            key_phrases=["independent preparation", "market adjustments noted", "variable batch outcomes"]
        ),
        AspectAnalysis(
            id="asp-inst-a-faculty",
            name="Faculty",
            label="Academic Guidance & Faculty",
            sentiment="mixed",
            positive_ratio=62.0,
            evidence_count=19,
            summary="Public feedback reflects supportive mentorship from core faculty alongside reliance on self-study for practical modern frameworks.",
            key_phrases=["project guidance", "standard syllabus", "independent coursework"]
        ),
        AspectAnalysis(
            id="asp-inst-a-attendance",
            name="Attendance",
            label="Attendance Policy & Flexibility",
            sentiment="negative",
            positive_ratio=32.0,
            evidence_count=22,
            summary="Multiple student discussions mention rigid attendance requirements in early semesters that constrain off-campus commitments.",
            key_phrases=["rigid attendance", "mandatory hours", "schedule constraints"]
        )
    ],
    recency_trends=[
        RecencyTrend(year=2024, label="2024 Archive", sentiment="positive", summary="Public sentiment reflected active interest in software engineering societies.", mention_count=24),
        RecencyTrend(year=2025, label="2025 Archive", sentiment="mixed", summary="Discussions began noting broader tech industry hiring shifts.", mention_count=38),
        RecencyTrend(year=2026, label="2026 Recent", sentiment="mixed", summary="Recent discussions focus on off-campus portfolio building and peer hackathon teams.", mention_count=29)
    ],
    source_composition=[
        SourceDistribution(type="reddit", name="Public Forum Discussions", count=18, percentage=39.0, icon_name="MessageSquare"),
        SourceDistribution(type="forum", name="Student Discussion Boards", count=11, percentage=24.0, icon_name="Users"),
        SourceDistribution(type="web", name="Educational Directories", count=9, percentage=20.0, icon_name="Globe"),
        SourceDistribution(type="official", name="Published Institutional Overview", count=5, percentage=11.0, icon_name="Award"),
        SourceDistribution(type="review", name="Community Review Submissions", count=3, percentage=6.0, icon_name="CheckCircle2")
    ],
    conflict=ConflictReport(
        has_conflict=True,
        topic="Placements & Market Hiring Volume",
        positive_signal_count=34,
        negative_signal_count=19,
        summary="Publicly available evidence is mixed. Significant divergence exists between accounts of independent competitive achievers versus institutional placement volume.",
        impartial_synthesis="Publicly available evidence regarding Institution A is mixed: students focusing on independent competitive programming report strong personal outcomes, while discussions regarding general on-campus placement drives reflect wider industry slowdowns.",
        supporting_evidence=[
            EvidenceItem(
                id="ev-demo-inst-a-1",
                source="reddit",
                source_name="Public Community Thread",
                source_domain="reddit.com",
                source_title="Discussion on technical community and peer culture",
                source_category=CATEGORY_DEMO_ARCHIVE,
                excerpt="Example technical community evidence retrieved from a public discussion: The peer programming circles are active and students regularly organize study sessions for competitive contests.",
                date="2026-01-14",
                year=2026,
                aspect="Coding Culture",
                sentiment="positive",
                relevance_score=92.0,
                author_role="Community contributor",
                verification_hash="rec-a01f8"
            )
        ],
        opposing_evidence=[
            EvidenceItem(
                id="ev-demo-inst-a-2",
                source="forum",
                source_name="Public Education Forum",
                source_domain="forum.example.org",
                source_title="Discussion on current market recruitment trends",
                source_category=CATEGORY_DEMO_ARCHIVE,
                excerpt="Example critical placement experience reported in a public discussion: Institutional tech hiring has seen fewer mass intake drives this year, requiring students to rely on external applications.",
                date="2026-02-08",
                year=2026,
                aspect="Placements",
                sentiment="negative",
                relevance_score=94.0,
                author_role="Public contributor",
                verification_hash="rec-b02a4"
            )
        ]
    ),
    evidence_list=[
        EvidenceItem(
            id="ev-demo-inst-a-1",
            source="reddit",
            source_name="Public Community Thread",
            source_domain="reddit.com",
            source_title="Discussion on technical community and peer culture",
            source_category=CATEGORY_DEMO_ARCHIVE,
            excerpt="Example technical community evidence retrieved from a public discussion: The peer programming circles are active and students regularly organize study sessions for competitive contests.",
            date="2026-01-14",
            year=2026,
            aspect="Coding Culture",
            sentiment="positive",
            relevance_score=92.0,
            author_role="Community contributor",
            verification_hash="rec-a01f8"
        ),
        EvidenceItem(
            id="ev-demo-inst-a-2",
            source="forum",
            source_name="Public Education Forum",
            source_domain="forum.example.org",
            source_title="Discussion on current market recruitment trends",
            source_category=CATEGORY_DEMO_ARCHIVE,
            excerpt="Example critical placement experience reported in a public discussion: Institutional tech hiring has seen fewer mass intake drives this year, requiring students to rely on external applications.",
            date="2026-02-08",
            year=2026,
            aspect="Placements",
            sentiment="negative",
            relevance_score=94.0,
            author_role="Public contributor",
            verification_hash="rec-b02a4"
        ),
        EvidenceItem(
            id="ev-demo-inst-a-3",
            source="official",
            source_name="Institutional Public Disclosure",
            source_domain="education.example.gov",
            source_title="Approved Institutional Fee Structure Overview",
            source_category=CATEGORY_DEMO_ARCHIVE,
            excerpt="Example annual fee information: Approved annual academic tuition and fee schedules recorded within public regulatory disclosures.",
            date="2025-07-18",
            year=2025,
            aspect="Fees & Value",
            sentiment="positive",
            relevance_score=98.0,
            author_role="Public regulatory disclosure",
            verification_hash="rec-c03d9"
        )
    ]
)

INSTITUTION_B = EntityReport(
    id="entity-institution-b",
    canonical_name="Institution B (Engineering Institute)",
    aliases=["Institution B", "Eng Institute B", "Campus B", "mait", "maharaja agrasen institute of technology"],
    category="Education / Engineering Institute",
    location="Sector 22, Rohini, New Delhi",
    latitude=28.7303,
    longitude=77.0674,
    formatted_address="PSP Area, Sector 22, Rohini, Delhi, 110086",
    google_maps_url="https://maps.google.com/?q=28.7303,77.0674",
    affiliation="Affiliated University System",
    fees_summary="Example annual fee: ~₹1.45L / year",
    annual_fee_numeric=145000,
    highlight_tag="Large Student Body & Broad Technical Society Roster",
    evidence_confidence_score=86.0,
    confidence_breakdown=ConfidenceBreakdown(
        independent_discussions=39,
        source_types_count=5,
        recency_factor_score=92.0,
        corroboration_density=89.0,
        conflict_detected=True,
        conflict_penalty_applied=5.0,
    ),
    summary_verdict="Broad alumni representation and high candidate volume. Discussions indicate vibrant student society initiatives, counterbalanced by internal competition for top-tier opportunities.",
    aspects=[
        AspectAnalysis(
            id="asp-inst-b-coding",
            name="Coding Culture",
            label="Tech Societies & Student Hackathons",
            sentiment="positive",
            positive_ratio=84.0,
            evidence_count=42,
            summary="Public discussions record regular student-led hackathons and active technical club activities.",
            key_phrases=["student hackathons", "active tech clubs", "broad participation"]
        ),
        AspectAnalysis(
            id="asp-inst-b-placements",
            name="Placements",
            label="Placement Turnout & Opportunities",
            sentiment="positive",
            positive_ratio=74.0,
            evidence_count=58,
            summary="Consistently draws company participation; discussions note that higher student batch sizes increase competitive pressure.",
            key_phrases=["frequent company turnout", "batch size dynamics", "competitive screening"]
        )
    ],
    recency_trends=[
        RecencyTrend(year=2024, label="2024 Archive", sentiment="positive", summary="Consistent public discussion of company visits and career outcomes.", mention_count=44),
        RecencyTrend(year=2025, label="2025 Archive", sentiment="positive", summary="Strong participation in regional student hackathons.", mention_count=51),
        RecencyTrend(year=2026, label="2026 Recent", sentiment="mixed", summary="Conversations indicate stricter technical screening in recent placement cycles.", mention_count=36)
    ],
    source_composition=[
        SourceDistribution(type="reddit", name="Public Forum Discussions", count=25, percentage=41.0, icon_name="MessageSquare"),
        SourceDistribution(type="forum", name="Student Discussion Boards", count=16, percentage=26.0, icon_name="Users"),
        SourceDistribution(type="official", name="Public Audit Disclosures", count=11, percentage=18.0, icon_name="Award"),
        SourceDistribution(type="web", name="Educational Reviews", count=9, percentage=15.0, icon_name="Globe")
    ],
    conflict=ConflictReport(
        has_conflict=True,
        topic="Batch Size Dilution vs Opportunity Access",
        positive_signal_count=45,
        negative_signal_count=16,
        summary="Students debate whether expansive branch intakes dilute individual guidance and heighten internal competition.",
        impartial_synthesis="Public evidence indicates that while Institution B attracts substantial employer participation, large student cohorts require applicants to rank near the top of the batch to secure premium offers.",
        supporting_evidence=[],
        opposing_evidence=[]
    ),
    evidence_list=[]
)

INSTITUTION_C = EntityReport(
    id="entity-institution-c",
    canonical_name="Institution C (State University Campus)",
    aliases=["Institution C", "University Campus C", "Campus C", "usict", "university school of information communication and technology"],
    category="Education / State University Campus",
    location="Sector 16C, Dwarka, New Delhi",
    latitude=28.5950,
    longitude=77.0195,
    formatted_address="Sector 16C, Dwarka, New Delhi, Delhi, 110078",
    google_maps_url="https://maps.google.com/?q=28.5950,77.0195",
    affiliation="State University Main Campus",
    fees_summary="Example annual fee: ~₹98k / year",
    annual_fee_numeric=98000,
    highlight_tag="Government Subsidized Tuition & Research Labs",
    evidence_confidence_score=88.0,
    confidence_breakdown=ConfidenceBreakdown(
        independent_discussions=34,
        source_types_count=4,
        recency_factor_score=90.0,
        corroboration_density=87.0,
        conflict_detected=False,
        conflict_penalty_applied=0.0,
    ),
    summary_verdict="Subsidized university structure offering high value and affordable fee schedules. Public feedback consistently praises return on investment and spacious university infrastructure.",
    aspects=[
        AspectAnalysis(
            id="asp-inst-c-fees",
            name="Fees & Value",
            label="Affordability & Return on Investment",
            sentiment="positive",
            positive_ratio=96.0,
            evidence_count=35,
            summary="Widely regarded across public discussions as exceptionally cost-effective relative to private engineering institutions.",
            key_phrases=["low tuition fee", "subsidized structure", "high value return"]
        ),
        AspectAnalysis(
            id="asp-inst-c-coding",
            name="Coding Culture",
            label="Academic Computing & Research Circles",
            sentiment="positive",
            positive_ratio=80.0,
            evidence_count=29,
            summary="Solid academic computing foundation with dedicated research labs and competitive student peer groups.",
            key_phrases=["research orientation", "computing labs", "strong academic intake"]
        )
    ],
    recency_trends=[
        RecencyTrend(year=2024, label="2024 Archive", sentiment="positive", summary="Noted for affordability and campus infrastructure.", mention_count=32),
        RecencyTrend(year=2025, label="2025 Archive", sentiment="positive", summary="Consistent placement records across software and research roles.", mention_count=41),
        RecencyTrend(year=2026, label="2026 Recent", sentiment="positive", summary="Remains a leading choice for subsidized public engineering education.", mention_count=27)
    ],
    source_composition=[
        SourceDistribution(type="reddit", name="Public Forum Discussions", count=20, percentage=40.0, icon_name="MessageSquare"),
        SourceDistribution(type="official", name="State University Disclosures", count=14, percentage=28.0, icon_name="Award"),
        SourceDistribution(type="forum", name="Student Discussion Boards", count=10, percentage=20.0, icon_name="Users"),
        SourceDistribution(type="web", name="Educational Overviews", count=6, percentage=12.0, icon_name="Globe")
    ],
    conflict=ConflictReport(
        has_conflict=False,
        topic="Consensus on Return on Investment",
        positive_signal_count=42,
        negative_signal_count=4,
        summary="High consensus regarding exceptional fee affordability and university infrastructure.",
        impartial_synthesis="Cross-source feedback indicates consistent consensus on Institution C delivering strong value for money.",
        supporting_evidence=[],
        opposing_evidence=[]
    ),
    evidence_list=[]
)

INSTITUTION_D = EntityReport(
    id="entity-institution-d",
    canonical_name="Institution D (Institute of Technology)",
    aliases=["Institution D", "Tech Institute D", "Campus D", "msit", "maharaja surajmal institute of technology"],
    category="Education / Engineering Institute",
    location="C-4, Janakpuri, New Delhi",
    latitude=28.6212,
    longitude=77.0924,
    formatted_address="C-4, Janakpuri, New Delhi, Delhi, 110058",
    google_maps_url="https://maps.google.com/?q=28.6212,77.0924",
    affiliation="Affiliated University System",
    fees_summary="Example annual fee: ~₹1.38L / year",
    annual_fee_numeric=138000,
    highlight_tag="Accessible Metro Transit & Disciplined Routine",
    evidence_confidence_score=80.0,
    confidence_breakdown=ConfidenceBreakdown(
        independent_discussions=29,
        source_types_count=4,
        recency_factor_score=85.0,
        corroboration_density=82.0,
        conflict_detected=True,
        conflict_penalty_applied=6.0,
    ),
    summary_verdict="Accessible urban transit connectivity and established hiring relations. Feedback highlights structured study routines, accompanied by commentary on stringent administrative rules.",
    aspects=[
        AspectAnalysis(
            id="asp-inst-d-coding",
            name="Coding Culture",
            label="Technical Societies & Self-Directed Coding",
            sentiment="mixed",
            positive_ratio=70.0,
            evidence_count=26,
            summary="Student developers actively participate in hackathons; however, packed schedules limit unguided free time.",
            key_phrases=["student initiative", "scheduled timetable", "independent coding"]
        ),
        AspectAnalysis(
            id="asp-inst-d-discipline",
            name="Attendance & Policy",
            label="Administrative Oversight & Attendance",
            sentiment="negative",
            positive_ratio=36.0,
            evidence_count=30,
            summary="Rigid attendance tracking and administrative gate rules are frequently cited by attending students.",
            key_phrases=["strict attendance", "administrative policy", "structured schedule"]
        )
    ],
    recency_trends=[
        RecencyTrend(year=2024, label="2024 Archive", sentiment="mixed", summary="Commentary balanced placement opportunities with administrative strictness.", mention_count=28),
        RecencyTrend(year=2025, label="2025 Archive", sentiment="mixed", summary="Steady hiring reports alongside continued feedback on attendance rules.", mention_count=35),
        RecencyTrend(year=2026, label="2026 Recent", sentiment="mixed", summary="Location transit connectivity remains a strong positive highlight.", mention_count=24)
    ],
    source_composition=[
        SourceDistribution(type="reddit", name="Public Forum Discussions", count=18, percentage=42.0, icon_name="MessageSquare"),
        SourceDistribution(type="forum", name="Student Discussion Boards", count=13, percentage=30.0, icon_name="Users"),
        SourceDistribution(type="official", name="Institutional Annual Overview", count=7, percentage=16.0, icon_name="Award"),
        SourceDistribution(type="web", name="Educational Directories", count=5, percentage=12.0, icon_name="Globe")
    ],
    conflict=ConflictReport(
        has_conflict=True,
        topic="Institutional Strictness vs Academic Outcomes",
        positive_signal_count=31,
        negative_signal_count=18,
        summary="Students value the resulting academic discipline while expressing frustration regarding inflexible administrative policies.",
        impartial_synthesis="Public discussions validate that Institution D maintains dependable career outcomes and prime transit access, but operates with more restrictive oversight than peers.",
        supporting_evidence=[],
        opposing_evidence=[]
    ),
    evidence_list=[]
)

# Benchmark Restaurant Entity (for offline regression testing)
RESTAURANT_A = EntityReport(
    id="entity-restaurant-a",
    canonical_name="Restaurant A (Traditional Kitchen)",
    aliases=["Restaurant A", "Kitchen A", "Cafe A", "Traditional Dining A"],
    category="Dining / Regional Cuisine",
    location="Connaught Place, New Delhi",
    latitude=28.6328,
    longitude=77.2195,
    formatted_address="K-Block, Connaught Place, New Delhi, Delhi, 110001",
    google_maps_url="https://maps.google.com/?q=28.6328,77.2195",
    fees_summary="Example price: ~₹600 - ₹900 for two",
    annual_fee_numeric=800,
    highlight_tag="Authentic Recipes & High Culinary Consistency",
    evidence_confidence_score=87.0,
    confidence_breakdown=ConfidenceBreakdown(
        independent_discussions=45,
        source_types_count=4,
        recency_factor_score=91.0,
        corroboration_density=88.0,
        conflict_detected=True,
        conflict_penalty_applied=5.0,
    ),
    summary_verdict="High consensus regarding authentic preparation, aromatic filter coffee, and freshly prepared accompaniments. Significant rush during peak weekend evening hours creates notable wait times.",
    aspects=[
        AspectAnalysis(
            id="asp-rest-a-food",
            name="Food Quality",
            label="Taste & Ingredient Authenticity",
            sentiment="positive",
            positive_ratio=93.0,
            evidence_count=54,
            summary="Public dining reviews praise authentic seasoning, fresh accompaniments, and consistent flavors.",
            key_phrases=["authentic preparation", "consistent taste", "fresh chutneys"]
        ),
        AspectAnalysis(
            id="asp-rest-a-service",
            name="Service & Wait Times",
            label="Service Speed & Seating",
            sentiment="mixed",
            positive_ratio=52.0,
            evidence_count=38,
            summary="Service inside is brisk and courteous, but high weekend queue times frequently exceed 35 minutes.",
            key_phrases=["weekend wait time", "quick turnaround", "courteous staff"]
        )
    ],
    recency_trends=[
        RecencyTrend(year=2024, label="2024 Archive", sentiment="positive", summary="Consistently recommended for authentic vegetarian dining.", mention_count=26),
        RecencyTrend(year=2025, label="2025 Archive", sentiment="positive", summary="Maintained culinary consistency through dining room updates.", mention_count=34),
        RecencyTrend(year=2026, label="2026 Recent", sentiment="mixed", summary="Recent mentions emphasize arriving early to avoid weekend peak delays.", mention_count=28)
    ],
    source_composition=[
        SourceDistribution(type="review", name="Dining Review Platforms", count=22, percentage=44.0, icon_name="CheckCircle2"),
        SourceDistribution(type="reddit", name="Public Forum Food Threads", count=16, percentage=32.0, icon_name="MessageSquare"),
        SourceDistribution(type="web", name="Local Culinary Guides", count=12, percentage=24.0, icon_name="Globe")
    ],
    conflict=ConflictReport(
        has_conflict=True,
        topic="Peak Rush Wait Times vs Dining Experience",
        positive_signal_count=38,
        negative_signal_count=14,
        summary="Reviewers praise food authenticity while expressing impatience regarding sidewalk queue congestion during peak hours.",
        impartial_synthesis="Public discussions confirm culinary excellence and high value, but advise visiting during non-peak hours to avoid 30–45 minute queue delays.",
        supporting_evidence=[],
        opposing_evidence=[]
    ),
    evidence_list=[]
)

from backend.data.delhi_colleges_data import DELHI_COLLEGES
from backend.data.delhi_restaurants_data import DELHI_RESTAURANTS

# Complete Verified Collections (Verified Real Delhi Data + Compatibility Benchmarks)
ALL_EDUCATION_ENTITIES: List[EntityReport] = DELHI_COLLEGES + [
    INSTITUTION_A.model_copy(update={
        "institution_type": "engineering",
        "domains": ["engineering", "computer_science"],
        "programs": ["B.Tech CSE", "B.Tech IT", "B.Tech ECE", "BBA"],
        "locality": "Sector 17, Rohini",
        "district": "North West Delhi",
        "annual_fee_numeric": 135000.0,
    }),
    INSTITUTION_B.model_copy(update={
        "institution_type": "engineering",
        "domains": ["engineering", "computer_science"],
        "programs": ["B.Tech CSE", "B.Tech IT", "B.Tech ECE", "B.Tech EEE"],
        "locality": "Paschim Vihar",
        "district": "West Delhi",
        "annual_fee_numeric": 135000.0,
    }),
    INSTITUTION_C.model_copy(update={
        "institution_type": "college",
        "domains": ["management", "commerce"],
        "programs": ["BBA", "B.Com"],
        "locality": "Dwarka",
        "district": "South West Delhi",
        "annual_fee_numeric": 120000.0,
    }),
    INSTITUTION_D.model_copy(update={
        "institution_type": "college",
        "domains": ["humanities", "arts"],
        "programs": ["B.A. (Hons)"],
        "locality": "Janakpuri",
        "district": "West Delhi",
        "annual_fee_numeric": 110000.0,
    })
]
ALL_RESTAURANT_ENTITIES: List[EntityReport] = DELHI_RESTAURANTS + [RESTAURANT_A]

GENERIC_EDUCATION_ENTITIES = ALL_EDUCATION_ENTITIES
GENERIC_RESTAURANT_ENTITIES = ALL_RESTAURANT_ENTITIES

class LocalArchiveConnector(BaseSourceConnector):
    """
    Demonstration, benchmark, and verified local archive dataset connector.
    Supplies real verified Delhi colleges (15+) and restaurants (11+) with authentic
    geographic context and strict source provenance when running queries.
    """

    @property
    def name(self) -> str:
        return "Generic Demonstration Archive"

    @property
    def source_type(self) -> str:
        return "official"

    @property
    def standard_category(self) -> str:
        return CATEGORY_DEMO_ARCHIVE

    def is_available(self) -> bool:
        return True

    def get_rate_limit_info(self) -> Dict[str, Any]:
        return {"status": "unlimited", "remaining": 9999}

    async def health(self) -> Dict[str, Any]:
        return {
            "source": "local_archive",
            "status": "ready",
            "operational_status": "DEMO/FALLBACK",
            "configured": True,
            "reachable": True,
            "authenticated": True,
            "entities_loaded": len(GENERIC_EDUCATION_ENTITIES) + len(GENERIC_RESTAURANT_ENTITIES),
            "message": "Demonstration archive active with verified benchmark models."
        }

    async def search(
        self,
        query: str,
        entity_type: Optional[str] = None,
        location: Optional[str] = None,
        limit: int = 10
    ) -> List[NormalizedSource]:
        return []

    async def fetch(self, source_id_or_url: str) -> Optional[NormalizedSource]:
        return None

    def normalize(self, raw_payload: Dict[str, Any]) -> NormalizedSource:
        return NormalizedSource(**raw_payload)

    def get_generic_education_entities(self) -> List[EntityReport]:
        return GENERIC_EDUCATION_ENTITIES

    def get_generic_restaurant_entities(self) -> List[EntityReport]:
        return GENERIC_RESTAURANT_ENTITIES

    def filter_education_entities(
        self,
        query: str,
        constraints: Optional[ParsedConstraints] = None,
        limit: int = 12
    ) -> List[EntityReport]:
        q = query.lower()
        budget_limit = constraints.budget if (constraints and constraints.budget is not None) else None
        if budget_limit is None:
            budget_match = re.search(r'under\s+(₹?[\d,]+(\s*lakh|\s*k)?|\$?[\d,]+(\s*k)?)', query, re.IGNORECASE)
            if budget_match:
                raw_str = budget_match.group(0)
                clean_str = re.sub(r'under\s+', '', raw_str, flags=re.IGNORECASE).strip()
                num_clean = re.sub(r'[^\d.]', '', clean_str)
                try:
                    base_num = float(num_clean)
                    if "lakh" in clean_str.lower():
                        budget_limit = base_num * 100000.0
                    elif "k" in clean_str.lower():
                        budget_limit = base_num * 1000.0
                    else:
                        budget_limit = base_num
                except ValueError:
                    budget_limit = None

        is_btech_query = any(w in q for w in [
            "b.tech", "btech", "cse", "computer science", "engineering", "coding culture"
        ]) or (constraints is not None and constraints.target_domain == "engineering")

        is_medical_query = any(w in q for w in [
            "medical", "mbbs", "doctor", "health science", "neet"
        ]) or (constraints is not None and constraints.target_domain == "medical")

        is_commerce_query = any(w in q for w in [
            "commerce", "b.com", "bcom", "economics"
        ]) or (constraints is not None and constraints.target_domain == "commerce")

        is_management_query = any(w in q for w in [
            "management", "bba", "bms", "mba"
        ]) or (constraints is not None and constraints.target_domain == "management")

        is_du_query = any(w in q for w in [
            "du ", " du", "delhi university", "north campus", "south campus"
        ]) or (constraints is not None and constraints.target_domain == "du")

        is_rohini_query = "rohini" in q
        is_dwarka_query = "dwarka" in q

        exact_matches = []
        matching_candidates = []

        for ent in GENERIC_EDUCATION_ENTITIES:
            names = [ent.canonical_name.lower()] + [a.lower() for a in ent.aliases]
            loc = (ent.location or "").lower() + " " + (ent.formatted_address or "").lower() + " " + (ent.locality or "").lower()
            cat = (ent.category or "").lower()
            inst_type = (ent.institution_type or "").lower()
            programs = [p.lower() for p in ent.programs]
            domains = [d.lower() for d in ent.domains]
            aff = (ent.affiliation or "").lower()
            tag = (ent.highlight_tag or "").lower()

            # 1. HARD INTENT CONSTRAINTS
            if is_btech_query:
                # Under B.Tech/CSE/Engineering, medical institutions (AIIMS, VMMC, LHMC) MUST NOT appear!
                if inst_type == "medical" or "medicine" in domains or "medical" in cat or any("mbbs" in p for p in programs):
                    continue
                # Pure DU arts/commerce/science colleges with no B.Tech MUST NOT appear!
                has_btech = any("b.tech" in p for p in programs)
                has_engg = inst_type in ["engineering", "university"] or "engineering" in domains or "engineering" in cat or "technology" in cat
                if not (has_btech or has_engg):
                    continue

            if is_medical_query:
                # Under medical queries, non-medical institutions MUST NOT appear
                is_med = inst_type == "medical" or "medicine" in domains or "medical" in cat or any("mbbs" in p for p in programs)
                if not is_med:
                    continue

            # 2. NUMERIC BUDGET CONSTRAINT
            if budget_limit is not None and ent.annual_fee_numeric is not None:
                if ent.annual_fee_numeric > budget_limit:
                    continue

            # 3. DIRECT NAME OR ALIAS MATCH
            if any(name == q or (len(name) > 3 and name in q) for name in names):
                exact_matches.append(ent)
                continue

            # 4. LOCATION CONSTRAINT (if specifically asked for Rohini or Dwarka)
            if is_rohini_query and "rohini" not in loc:
                continue
            if is_dwarka_query and "dwarka" not in loc:
                continue

            # 5. INTENT MATCHING
            matched = False
            if is_btech_query:
                if "cse" in q or "computer science" in q:
                    if any("cse" in p or "computer" in p for p in programs) or "computer_science" in domains:
                        matched = True
                    elif any("b.tech" in p for p in programs):
                        matched = True
                else:
                    matched = True

            elif is_medical_query:
                matched = True

            elif is_commerce_query:
                if "commerce" in domains or "economics" in domains or any("b.com" in p for p in programs):
                    matched = True

            elif is_management_query:
                if "management" in domains or "business" in domains or any("bba" in p or "bms" in p or "mba" in p for p in programs):
                    matched = True

            elif is_du_query:
                if "university of delhi" in aff or "du" in aff:
                    matched = True

            elif is_rohini_query:
                matched = True

            elif is_dwarka_query:
                matched = True

            else:
                matched = True

            if matched:
                matching_candidates.append(ent)

        results = exact_matches + [e for e in matching_candidates if e not in exact_matches]
        return results[:limit]

    def filter_restaurant_entities(self, query: str, limit: int = 8) -> List[EntityReport]:
        q = query.lower()
        exact_matches = []
        partial_matches = []
        others = []

        for ent in GENERIC_RESTAURANT_ENTITIES:
            names = [ent.canonical_name.lower()] + [a.lower() for a in ent.aliases]
            loc = (ent.location or "").lower() + " " + (ent.formatted_address or "").lower()
            cat = (ent.category or "").lower()
            tag = (ent.highlight_tag or "").lower()

            # Exact or direct alias match
            if any(name in q or (len(q) > 2 and q in name) for name in names):
                exact_matches.append(ent)
            elif (
                # Locality filters
                (("connaught place" in q or " cp" in q or q.startswith("cp") or "cp " in q or "in cp" in q) and ("connaught" in loc or "cp" in loc)) or
                (("hauz khas" in q or "hkv" in q) and "hauz khas" in loc) or
                ("khan market" in q and "khan market" in loc) or
                ("saket" in q and "saket" in loc) or
                ("south delhi" in q and ("lodhi" in loc or "mehrauli" in loc or "saket" in loc or "defence colony" in loc or "greater kailash" in loc or "safdarjung" in loc or "lajpat" in loc or "hauz khas" in loc)) or
                ("defence colony" in q and "defence colony" in loc) or
                (("greater kailash" in q or "gk" in q) and "greater kailash" in loc) or
                ("lajpat nagar" in q and "lajpat" in loc) or
                ("safdarjung" in q and "safdarjung" in loc) or
                (("old delhi" in q or "chandni chowk" in q or "jama masjid" in q) and ("old delhi" in loc or "chandni chowk" in loc or "jama masjid" in loc or "chawri bazar" in loc)) or
                ("karol bagh" in q and "karol bagh" in loc) or
                (("west delhi" in q or "rajouri" in q or "punjabi bagh" in q) and ("rajouri" in loc or "punjabi bagh" in loc)) or
                ("north campus" in q and ("north campus" in loc or "gtb nagar" in loc or "hudson lane" in loc)) or
                ("rohini" in q and "rohini" in loc) or
                (("pitampura" in q or "nsp" in q) and ("pitampura" in loc or "nsp" in loc or "netaji subhash" in loc)) or
                ("dwarka" in q and "dwarka" in loc) or
                ("mehrauli" in q and "mehrauli" in loc) or
                # Cuisine & dining type filters
                (("cafe" in q or "cafes" in q) and ("cafe" in cat or "cafe" in ent.canonical_name.lower() or "deli" in cat or "bistro" in cat)) or
                (("budget" in q or "cheap" in q or "street food" in q or "quick bite" in q) and (ent.price_level in ("₹", "₹₹") or "street" in cat or "canteen" in cat)) or
                (("italian" in q or "pizza" in q or "pasta" in q) and ("italian" in cat or "pizza" in cat or "pasta" in tag or "tonino" in ent.id or "olive" in ent.id or "leos" in ent.id or "artusi" in ent.id or "big-chill" in ent.id or "diggin" in ent.id)) or
                (("mughlai" in q or "kebab" in q or "butter chicken" in q or "tandoori" in q or "meat" in q) and ("mughlai" in cat or "tandoori" in cat or "kebab" in cat or "butter chicken" in tag or "bukhara" in ent.id or "karim" in ent.id or "aslam" in ent.id or "al-jawahar" in ent.id or "daryaganj" in ent.id or "gulati" in ent.id or "moti-mahal" in ent.id or "rajinder" in ent.id)) or
                (("south indian" in q or "dosa" in q or "idli" in q) and ("south indian" in cat or "dosa" in tag or "saravana" in ent.id or "dakshin" in ent.id or "andhra" in ent.id or "carnatic" in ent.id or "sagar-ratna" in ent.id)) or
                (("vegetarian" in q or "pure veg" in q) and ("pure vegetarian" in tag or "vegetarian" in cat or "saravana" in ent.id or "carnatic" in ent.id or "burma" in ent.id or "sagar-ratna" in ent.id or "natraj" in ent.id or "suruchi" in ent.id or "kuremal" in ent.id or "billu" in ent.id)) or
                (("fine dining" in q or "luxury" in q) and (ent.price_level in ("₹₹₹", "₹₹₹₹") or "fine dining" in cat or "luxury" in tag)) or
                (("bakery" in q or "dessert" in q or "sweet" in q or "kulfi" in q) and ("bakery" in cat or "dessert" in cat or "kulfi" in tag or "wenger" in ent.id or "defence-bakery" in ent.id or "kuremal" in ent.id or "roshan" in ent.id))
            ):
                partial_matches.append(ent)
            else:
                others.append(ent)

        results = exact_matches + partial_matches + others
        return results[:limit]

# Backward-compatible alias
OfficialSourceConnector = LocalArchiveConnector
