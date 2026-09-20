import { EntityReport, ResearchQuery } from '../types/evidence';

export const genericInstitutionA: EntityReport = {
  id: 'entity-institution-a',
  canonicalName: 'Institution A (Technical Campus)',
  aliases: ['Institution A', 'Tech Campus A', 'Campus A'],
  category: 'Education / Engineering Institute',
  location: 'Delhi NCR',
  affiliation: 'Affiliated University System',
  feesSummary: 'Example annual fee: ~₹1.35L / year',
  annualFeeNumeric: 135000,
  highlightTag: 'Active Technical Student Clubs & Peer Developer Circles',
  evidenceConfidenceScore: 82, // Corroboration Coverage score, NOT truth probability
  confidenceBreakdown: {
    independentDiscussions: 28,
    sourceTypesCount: 4,
    recencyFactorScore: 89,
    corroborationDensity: 84,
    conflictDetected: true,
    conflictPenaltyApplied: 6,
  },
  summaryVerdict: 'Public discussions highlight strong student-driven coding circles and competitive hackathon participation. Campus placement discussions show divergence between independent off-campus applicants and general on-campus recruitments.',
  aspects: [
    {
      id: 'asp-inst-a-coding',
      name: 'Coding Culture',
      label: 'Coding & Developer Community',
      sentiment: 'positive',
      positiveRatio: 88,
      evidenceCount: 31,
      summary: 'Example technical community evidence retrieved from public discussions indicates active peer collaboration and developer societies.',
      keyPhrases: ['peer developer circles', 'hackathon participation', 'student tech club']
    },
    {
      id: 'asp-inst-a-placements',
      name: 'Placements',
      label: 'Career Outcomes & Opportunities',
      sentiment: 'mixed',
      positiveRatio: 58,
      evidenceCount: 46,
      summary: 'Example placement discussions show divergence: candidates preparing independently report positive outcomes, while overall mass hiring volume reflects wider market slowdowns.',
      keyPhrases: ['independent preparation', 'market adjustments noted', 'variable batch outcomes']
    },
    {
      id: 'asp-inst-a-faculty',
      name: 'Faculty',
      label: 'Academic Guidance & Faculty',
      sentiment: 'mixed',
      positiveRatio: 62,
      evidenceCount: 19,
      summary: 'Public feedback reflects supportive mentorship from core faculty alongside reliance on self-study for practical modern frameworks.',
      keyPhrases: ['project guidance', 'standard syllabus', 'independent coursework']
    },
    {
      id: 'asp-inst-a-attendance',
      name: 'Attendance',
      label: 'Attendance Policy & Flexibility',
      sentiment: 'negative',
      positiveRatio: 32,
      evidenceCount: 22,
      summary: 'Multiple student discussions mention rigid attendance requirements in early semesters that constrain off-campus commitments.',
      keyPhrases: ['rigid attendance', 'mandatory hours', 'schedule constraints']
    }
  ],
  recencyTrends: [
    {
      year: 2024,
      label: '2024 Archive',
      sentiment: 'positive',
      summary: 'Public sentiment reflected active interest in software engineering societies.',
      mentionCount: 24
    },
    {
      year: 2025,
      label: '2025 Archive',
      sentiment: 'mixed',
      summary: 'Discussions began noting broader tech industry hiring shifts.',
      mentionCount: 38
    },
    {
      year: 2026,
      label: '2026 Recent',
      sentiment: 'mixed',
      summary: 'Recent discussions focus on off-campus portfolio building and peer hackathon teams.',
      mentionCount: 29
    }
  ],
  sourceComposition: [
    { type: 'reddit', name: 'Public Forum Discussions', count: 18, percentage: 39, iconName: 'MessageSquare' },
    { type: 'forum', name: 'Student Discussion Boards', count: 11, percentage: 24, iconName: 'Users' },
    { type: 'web', name: 'Educational Directories', count: 9, percentage: 20, iconName: 'Globe' },
    { type: 'official', name: 'Published Institutional Overview', count: 5, percentage: 11, iconName: 'Award' },
    { type: 'review', name: 'Community Review Submissions', count: 3, percentage: 6, iconName: 'CheckCircle2' }
  ],
  conflict: {
    hasConflict: true,
    topic: 'Placements & Market Hiring Volume',
    positiveSignalCount: 34,
    negativeSignalCount: 19,
    summary: 'Publicly available evidence is mixed. Significant divergence exists between accounts of independent competitive achievers versus institutional placement volume.',
    impartialSynthesis: 'Publicly available evidence regarding Institution A is mixed: students focusing on independent competitive programming report strong personal outcomes, while discussions regarding general on-campus placement drives reflect wider industry slowdowns.',
    supportingEvidence: [
      {
        id: 'ev-demo-inst-a-1',
        source: 'reddit',
        sourceName: 'Public Community Thread',
        sourceDomain: 'reddit.com',
        sourceTitle: 'Discussion on technical community and peer culture',
        excerpt: 'Example technical community evidence retrieved from a public discussion: The peer programming circles are active and students regularly organize study sessions for competitive contests.',
        date: '2026-01-14',
        year: 2026,
        aspect: 'Coding Culture',
        sentiment: 'positive',
        relevanceScore: 92,
        authorRole: 'Public community contributor',
        verificationHash: 'rec-a01f8'
      }
    ],
    opposingEvidence: [
      {
        id: 'ev-demo-inst-a-2',
        source: 'forum',
        sourceName: 'Public Education Forum',
        sourceDomain: 'forum.example.org',
        sourceTitle: 'Discussion on current market recruitment trends',
        excerpt: 'Example critical placement experience reported in a public discussion: Institutional tech hiring has seen fewer mass intake drives this year, requiring students to rely on external applications.',
        date: '2026-02-08',
        year: 2026,
        aspect: 'Placements',
        sentiment: 'negative',
        relevanceScore: 94,
        authorRole: 'Public contributor',
        verificationHash: 'rec-b02a4'
      }
    ]
  },
  evidenceList: [
    {
      id: 'ev-demo-inst-a-1',
      source: 'reddit',
      sourceName: 'Public Community Thread',
      sourceDomain: 'reddit.com',
      sourceTitle: 'Discussion on technical community and peer culture',
      excerpt: 'Example technical community evidence retrieved from a public discussion: The peer programming circles are active and students regularly organize study sessions for competitive contests.',
      date: '2026-01-14',
      year: 2026,
      aspect: 'Coding Culture',
      sentiment: 'positive',
      relevanceScore: 92,
      authorRole: 'Public community contributor',
      verificationHash: 'rec-a01f8'
    },
    {
      id: 'ev-demo-inst-a-2',
      source: 'forum',
      sourceName: 'Public Education Forum',
      sourceDomain: 'forum.example.org',
      sourceTitle: 'Discussion on current market recruitment trends',
      excerpt: 'Example critical placement experience reported in a public discussion: Institutional tech hiring has seen fewer mass intake drives this year, requiring students to rely on external applications.',
      date: '2026-02-08',
      year: 2026,
      aspect: 'Placements',
      sentiment: 'negative',
      relevanceScore: 94,
      authorRole: 'Public contributor',
      verificationHash: 'rec-b02a4'
    },
    {
      id: 'ev-demo-inst-a-3',
      source: 'official',
      sourceName: 'Institutional Public Disclosure',
      sourceDomain: 'education.example.gov',
      sourceTitle: 'Approved Institutional Fee Structure Overview',
      excerpt: 'Example annual fee information: Approved annual academic tuition and fee schedules recorded within public regulatory disclosures.',
      date: '2025-07-18',
      year: 2025,
      aspect: 'Fees & Value',
      sentiment: 'positive',
      relevanceScore: 98,
      authorRole: 'Public regulatory disclosure',
      verificationHash: 'rec-c03d9'
    }
  ]
};

export const genericInstitutionB: EntityReport = {
  id: 'entity-institution-b',
  canonicalName: 'Institution B (Engineering Institute)',
  aliases: ['Institution B', 'Eng Institute B', 'Campus B'],
  category: 'Education / Engineering Institute',
  location: 'Delhi NCR',
  affiliation: 'Affiliated University System',
  feesSummary: 'Example annual fee: ~₹1.45L / year',
  annualFeeNumeric: 145000,
  highlightTag: 'Large Student Body & Broad Technical Society Roster',
  evidenceConfidenceScore: 86,
  confidenceBreakdown: {
    independentDiscussions: 39,
    sourceTypesCount: 5,
    recencyFactorScore: 92,
    corroborationDensity: 89,
    conflictDetected: true,
    conflictPenaltyApplied: 5,
  },
  summaryVerdict: 'Broad alumni representation and high candidate volume. Discussions indicate vibrant student society initiatives, counterbalanced by internal competition for top-tier opportunities.',
  aspects: [
    {
      id: 'asp-inst-b-coding',
      name: 'Coding Culture',
      label: 'Tech Societies & Student Hackathons',
      sentiment: 'positive',
      positiveRatio: 84,
      evidenceCount: 42,
      summary: 'Public discussions record regular student-led hackathons and active technical club activities.',
      keyPhrases: ['student hackathons', 'active tech clubs', 'broad participation']
    },
    {
      id: 'asp-inst-b-placements',
      name: 'Placements',
      label: 'Placement Turnout & Opportunities',
      sentiment: 'positive',
      positiveRatio: 74,
      evidenceCount: 58,
      summary: 'Consistently draws company participation; discussions note that higher student batch sizes increase competitive pressure.',
      keyPhrases: ['frequent company turnout', 'batch size dynamics', 'competitive screening']
    }
  ],
  recencyTrends: [
    { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Consistent public discussion of company visits and career outcomes.', mentionCount: 44 },
    { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Strong participation in regional student hackathons.', mentionCount: 51 },
    { year: 2026, label: '2026 Recent', sentiment: 'mixed', summary: 'Conversations indicate stricter technical screening in recent placement cycles.', mentionCount: 36 }
  ],
  sourceComposition: [
    { type: 'reddit', name: 'Public Forum Discussions', count: 25, percentage: 41, iconName: 'MessageSquare' },
    { type: 'forum', name: 'Student Discussion Boards', count: 16, percentage: 26, iconName: 'Users' },
    { type: 'official', name: 'Public Audit Disclosures', count: 11, percentage: 18, iconName: 'Award' },
    { type: 'web', name: 'Educational Reviews', count: 9, percentage: 15, iconName: 'Globe' }
  ],
  conflict: {
    hasConflict: true,
    topic: 'Batch Size Dilution vs Opportunity Access',
    positiveSignalCount: 45,
    negativeSignalCount: 16,
    summary: 'Students debate whether expansive branch intakes dilute individual guidance and heighten internal competition.',
    impartialSynthesis: 'Public evidence indicates that while Institution B attracts substantial employer participation, large student cohorts require applicants to rank near the top of the batch to secure premium offers.',
    supportingEvidence: [],
    opposingEvidence: []
  },
  evidenceList: []
};

export const genericInstitutionC: EntityReport = {
  id: 'entity-institution-c',
  canonicalName: 'Institution C (State University Campus)',
  aliases: ['Institution C', 'University Campus C', 'Campus C'],
  category: 'Education / State University Campus',
  location: 'Delhi NCR',
  affiliation: 'State University Main Campus',
  feesSummary: 'Example annual fee: ~₹98k / year',
  annualFeeNumeric: 98000,
  highlightTag: 'Government Subsidized Tuition & Research Labs',
  evidenceConfidenceScore: 88,
  confidenceBreakdown: {
    independentDiscussions: 34,
    sourceTypesCount: 4,
    recencyFactorScore: 90,
    corroborationDensity: 87,
    conflictDetected: false,
    conflictPenaltyApplied: 0,
  },
  summaryVerdict: 'Subsidized university structure offering high value and affordable fee schedules. Public feedback consistently praises return on investment and spacious university infrastructure.',
  aspects: [
    {
      id: 'asp-inst-c-fees',
      name: 'Fees & Value',
      label: 'Affordability & Return on Investment',
      sentiment: 'positive',
      positiveRatio: 96,
      evidenceCount: 35,
      summary: 'Widely regarded across public discussions as exceptionally cost-effective relative to private engineering institutions.',
      keyPhrases: ['low tuition fee', 'subsidized structure', 'high value return']
    },
    {
      id: 'asp-inst-c-coding',
      name: 'Coding Culture',
      label: 'Academic Computing & Research Circles',
      sentiment: 'positive',
      positiveRatio: 80,
      evidenceCount: 29,
      summary: 'Solid academic computing foundation with dedicated research labs and competitive student peer groups.',
      keyPhrases: ['research orientation', 'computing labs', 'strong academic intake']
    }
  ],
  recencyTrends: [
    { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Noted for affordability and campus infrastructure.', mentionCount: 32 },
    { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Consistent placement records across software and research roles.', mentionCount: 41 },
    { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Remains a leading choice for subsidized public engineering education.', mentionCount: 27 }
  ],
  sourceComposition: [
    { type: 'reddit', name: 'Public Forum Discussions', count: 20, percentage: 40, iconName: 'MessageSquare' },
    { type: 'official', name: 'State University Disclosures', count: 14, percentage: 28, iconName: 'Award' },
    { type: 'forum', name: 'Student Discussion Boards', count: 10, percentage: 20, iconName: 'Users' },
    { type: 'web', name: 'Educational Overviews', count: 6, percentage: 12, iconName: 'Globe' }
  ],
  conflict: {
    hasConflict: false,
    topic: 'Consensus on Return on Investment',
    positiveSignalCount: 42,
    negativeSignalCount: 4,
    summary: 'High consensus regarding exceptional fee affordability and university infrastructure.',
    impartialSynthesis: 'Cross-source feedback indicates consistent consensus on Institution C delivering strong value for money.',
    supportingEvidence: [],
    opposingEvidence: []
  },
  evidenceList: []
};

export const genericInstitutionD: EntityReport = {
  id: 'entity-institution-d',
  canonicalName: 'Institution D (Institute of Technology)',
  aliases: ['Institution D', 'Tech Institute D', 'Campus D'],
  category: 'Education / Engineering Institute',
  location: 'Delhi NCR',
  affiliation: 'Affiliated University System',
  feesSummary: 'Example annual fee: ~₹1.38L / year',
  annualFeeNumeric: 138000,
  highlightTag: 'Accessible Metro Transit & Disciplined Routine',
  evidenceConfidenceScore: 80,
  confidenceBreakdown: {
    independentDiscussions: 29,
    sourceTypesCount: 4,
    recencyFactorScore: 85,
    corroborationDensity: 82,
    conflictDetected: true,
    conflictPenaltyApplied: 6,
  },
  summaryVerdict: 'Accessible urban transit connectivity and established hiring relations. Feedback highlights structured study routines, accompanied by commentary on stringent administrative rules.',
  aspects: [
    {
      id: 'asp-inst-d-coding',
      name: 'Coding Culture',
      label: 'Technical Societies & Self-Directed Coding',
      sentiment: 'mixed',
      positiveRatio: 70,
      evidenceCount: 26,
      summary: 'Student developers actively participate in hackathons; however, packed schedules limit unguided free time.',
      keyPhrases: ['student initiative', 'scheduled timetable', 'independent coding']
    },
    {
      id: 'asp-inst-d-discipline',
      name: 'Attendance',
      label: 'Administrative Oversight & Attendance',
      sentiment: 'negative',
      positiveRatio: 36,
      evidenceCount: 30,
      summary: 'Rigid attendance tracking and administrative gate rules are frequently cited by attending students.',
      keyPhrases: ['strict attendance', 'administrative policy', 'structured schedule']
    }
  ],
  recencyTrends: [
    { year: 2024, label: '2024 Archive', sentiment: 'mixed', summary: 'Commentary balanced placement opportunities with administrative strictness.', mentionCount: 28 },
    { year: 2025, label: '2025 Archive', sentiment: 'mixed', summary: 'Steady hiring reports alongside continued feedback on attendance rules.', mentionCount: 35 },
    { year: 2026, label: '2026 Recent', sentiment: 'mixed', summary: 'Location transit connectivity remains a strong positive highlight.', mentionCount: 24 }
  ],
  sourceComposition: [
    { type: 'reddit', name: 'Public Forum Discussions', count: 18, percentage: 42, iconName: 'MessageSquare' },
    { type: 'forum', name: 'Student Discussion Boards', count: 13, percentage: 30, iconName: 'Users' },
    { type: 'official', name: 'Institutional Annual Overview', count: 7, percentage: 16, iconName: 'Award' },
    { type: 'web', name: 'Educational Directories', count: 5, percentage: 12, iconName: 'Globe' }
  ],
  conflict: {
    hasConflict: true,
    topic: 'Institutional Strictness vs Academic Outcomes',
    positiveSignalCount: 31,
    negativeSignalCount: 18,
    summary: 'Students value the resulting academic discipline while expressing frustration regarding inflexible administrative policies.',
    impartialSynthesis: 'Public discussions validate that Institution D maintains dependable career outcomes and prime transit access, but operates with more restrictive oversight than peers.',
    supportingEvidence: [],
    opposingEvidence: []
  },
  evidenceList: []
};

export const genericEducationEntities: EntityReport[] = [
  genericInstitutionA,
  genericInstitutionB,
  genericInstitutionC,
  genericInstitutionD
];

export const genericEducationDemoData: ResearchQuery = {
  id: 'query-demo-education',
  query: 'Best B.Tech CSE colleges in Delhi under ₹2 lakh/year with good coding culture',
  category: 'college',
  constraints: {
    degree: 'B.Tech',
    branch: 'Computer Science (CSE)',
    location: 'Delhi NCR',
    budgetMax: '₹2 lakh/year',
    priority: 'Coding Culture & Hackathons'
  },
  sourcesScannedCount: 38,
  entitiesDiscovered: 4,
  conflictsIdentified: 3,
  deduplicatedClusters: 8,
  results: genericEducationEntities,
  demoMode: true,
  sourceStatus: {
    reddit: 'unavailable',
    web_search: 'unavailable',
    local_archive: 'available'
  }
};
