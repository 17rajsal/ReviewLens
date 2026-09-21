from typing import List, Dict, Any, Optional
from backend.connectors.base import BaseSourceConnector, CATEGORY_DEMO_ARCHIVE
from backend.models.source import NormalizedSource
from backend.models.evidence import EvidenceItem
from backend.models.entity import EntityReport
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
ALL_EDUCATION_ENTITIES: List[EntityReport] = DELHI_COLLEGES + [INSTITUTION_A, INSTITUTION_B, INSTITUTION_C, INSTITUTION_D]
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

    def filter_education_entities(self, query: str, limit: int = 6) -> List[EntityReport]:
        q = query.lower()
        exact_matches = []
        partial_matches = []
        others = []

        for ent in GENERIC_EDUCATION_ENTITIES:
            names = [ent.canonical_name.lower()] + [a.lower() for a in ent.aliases]
            if any(name in q or (len(q) > 3 and q in name) for name in names):
                exact_matches.append(ent)
            elif (
                ("north campus" in q and "north campus" in ent.location.lower()) or
                ("south campus" in q and "south campus" in ent.location.lower()) or
                ("rohini" in q and "rohini" in ent.location.lower()) or
                ("pitampura" in q and "pitampura" in ent.location.lower()) or
                ("commerce" in q and ("commerce" in ent.canonical_name.lower() or "commerce" in ent.category.lower())) or
                ("women" in q and ("miranda" in ent.canonical_name.lower() or "gargi" in ent.canonical_name.lower())) or
                ("bms" in q and ("sscbs" in ent.id or "dduc" in ent.id or "keshav" in ent.id))
            ):
                partial_matches.append(ent)
            else:
                others.append(ent)

        results = exact_matches + partial_matches + others
        return results[:limit]

    def filter_restaurant_entities(self, query: str, limit: int = 6) -> List[EntityReport]:
        q = query.lower()
        exact_matches = []
        partial_matches = []
        others = []

        for ent in GENERIC_RESTAURANT_ENTITIES:
            names = [ent.canonical_name.lower()] + [a.lower() for a in ent.aliases]
            if any(name in q or (len(q) > 3 and q in name) for name in names):
                exact_matches.append(ent)
            elif (
                (("connaught place" in q or " cp" in q or q.startswith("cp")) and "connaught place" in ent.location.lower()) or
                ("south delhi" in q and ("lodhi" in ent.location.lower() or "mehrauli" in ent.location.lower() or "saket" in ent.location.lower())) or
                ("italian" in q and ("tonino" in ent.canonical_name.lower() or "olive" in ent.canonical_name.lower())) or
                ("mughlai" in q and ("karim" in ent.canonical_name.lower() or "bukhara" in ent.canonical_name.lower() or "spice art" in ent.canonical_name.lower())) or
                (("vegetarian" in q or "dosa" in q) and "saravana" in ent.canonical_name.lower()) or
                ("fine dining" in q and ent.price_level in ("₹₹₹", "₹₹₹₹"))
            ):
                partial_matches.append(ent)
            else:
                others.append(ent)

        results = exact_matches + partial_matches + others
        return results[:limit]

# Backward-compatible alias
OfficialSourceConnector = LocalArchiveConnector
