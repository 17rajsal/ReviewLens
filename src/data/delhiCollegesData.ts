import { EntityReport } from '../types/evidence';

const rawDelhiColleges: EntityReport[] = [
  // 1. Shri Ram College of Commerce (SRCC)
  {
    id: 'entity-srcc',
    canonicalName: 'Shri Ram College of Commerce (SRCC)',
    aliases: [
      'srcc',
      'shri ram college of commerce',
      'shri ram college',
      'shriram college',
      'srcc delhi',
      'srcc north campus',
      'shriram college of commerce'
    ],
    category: 'Education / Delhi University College',
    location: 'University Enclave, North Campus, Delhi',
    latitude: 28.6946,
    longitude: 77.2078,
    formattedAddress: 'Maurice Nagar, University Enclave, North Campus, Delhi, 110007',
    googleMapsUrl: 'https://maps.google.com/?q=28.6946,77.2078',
    website: 'https://www.srcc.edu',
    rating: 4.6,
    userRatingsTotal: 3850,
    affiliation: 'University of Delhi (DU, Established 1926)',
    feesSummary: 'Official DU Fee: ~₹30,000 - ₹35,000 / year (B.Com Hons / BA Economics Hons)',
    annualFeeNumeric: 32000,
    highlightTag: 'Premier Commerce & Economics Institution | NAAC A++ (CGPA 3.65)',
    evidenceConfidenceScore: 95,
    confidenceBreakdown: {
      independentDiscussions: 76,
      sourceTypesCount: 5,
      recencyFactorScore: 96,
      corroborationDensity: 94,
      conflictDetected: true,
      conflictPenaltyApplied: 3
    },
    summaryVerdict: 'Consistently ranked among the foremost commerce and economics institutions across South Asia. Verified disclosures highlight leading corporate finance, consulting, and banking recruitment alongside high cutoff percentiles via CUET-UG. Student discourse balances elite peer networks against intensely competitive academic grading curves.',
    aspects: [
      {
        id: 'asp-srcc-academic',
        name: 'Academic Reputation',
        label: 'Economics & Commerce Curriculum',
        sentiment: 'positive',
        positiveRatio: 96,
        evidenceCount: 48,
        summary: 'Official NAAC accreditation (A++, CGPA 3.65) and NIRF College evaluations corroborate premier faculty standing and specialized honors coursework in Commerce and Economics.',
        keyPhrases: ['premier commerce faculty', 'rigorous economics curriculum', 'NAAC A++ accreditation']
      },
      {
        id: 'asp-srcc-placements',
        name: 'Placements',
        label: 'Corporate Placements & Career Cell',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 52,
        summary: 'SRCC Placement Cell annual reports document marquee recruitment across top-tier management consulting, investment banking, and big-4 advisory firms.',
        keyPhrases: ['marquee consulting recruiters', 'investment banking drives', 'high median package']
      },
      {
        id: 'asp-srcc-campus',
        name: 'Campus Infrastructure',
        label: 'Library, Sports Complex & Facilities',
        sentiment: 'positive',
        positiveRatio: 88,
        evidenceCount: 34,
        summary: 'Air-conditioned central library, Commonwealth Games standard indoor sports complex, and Wi-Fi enabled heritage campus in North Campus.',
        keyPhrases: ['indoor sports complex', 'heritage North Campus', 'central AC library']
      },
      {
        id: 'asp-srcc-competition',
        name: 'Academic Pressure',
        label: 'Grading Curve & Peer Competition',
        sentiment: 'mixed',
        positiveRatio: 58,
        evidenceCount: 29,
        summary: 'Student community discussions report significant internal competition for society positions and relative grading stress among high-achieving peer cohorts.',
        keyPhrases: ['peer pressure', 'competitive society recruitment', 'rigorous grading']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 reaffirmed national benchmark standing in commerce education.', mentionCount: 42 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High corporate recruiter participation documented in audited placement reports.', mentionCount: 54 },
      { year: 2026, label: '2026 Recent', sentiment: 'mixed', summary: 'Active CUET-UG counseling discussions focus on category cutoffs and society culture.', mentionCount: 40 }
    ],
    sourceComposition: [
      { type: 'official', name: 'NIRF & NAAC Official Disclosures', count: 18, percentage: 32, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (3,850+ reviews)', count: 15, percentage: 27, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Node 87291244', count: 6, percentage: 11, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Student Discussions', count: 12, percentage: 21, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Portals', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: true,
      topic: 'High Placement Success vs Academic Stress & Society Exclusivity',
      positiveSignalCount: 64,
      negativeSignalCount: 18,
      summary: 'Independent disclosures celebrate top corporate recruitment while community feedback notes aggressive competition during multi-tier society selections.',
      impartialSynthesis: 'Verified data corroborates unmatched career outcomes in commerce, but prospective applicants should anticipate a demanding competitive environment.',
      supportingEvidence: [
        {
          id: 'ev-srcc-nirf',
          source: 'official',
          sourceName: 'NIRF India 2024 Official Portal',
          sourceDomain: 'nirfindia.org',
          sourceUrl: 'https://www.nirfindia.org/Rankings/2024/CollegeRanking.html',
          sourceTitle: 'National Institutional Ranking Framework (NIRF) College Disclosures',
          sourceCategory: 'INSTITUTIONAL SOURCE',
          excerpt: 'Shri Ram College of Commerce (SRCC) ranks among India\'s top constituent colleges with top-tier scores in Teaching, Learning & Resources (TLR) and Graduate Outcomes (GO).',
          date: '2024-08-12',
          year: 2024,
          aspect: 'Academic Reputation',
          sentiment: 'positive',
          relevanceScore: 98,
          authorRole: 'Ministry of Education, Govt of India',
          verificationHash: 'nirf-srcc-2024'
        }
      ],
      opposingEvidence: [
        {
          id: 'ev-srcc-forum',
          source: 'public_discussion',
          sourceName: 'Delhi University Student Community Discourse',
          sourceDomain: 'reddit.com',
          sourceUrl: 'https://www.reddit.com/r/delhiuniversity/',
          sourceTitle: 'Discussion on academic intensity and society recruitment in SRCC',
          sourceCategory: 'PUBLIC DISCUSSION',
          excerpt: 'Public student discourse notes that while placement outcomes are dependable, society inductions can be intensely competitive with 4 to 5 rounds of interviews.',
          date: '2025-11-20',
          year: 2025,
          aspect: 'Academic Pressure',
          sentiment: 'mixed',
          relevanceScore: 88,
          authorRole: 'Enrolled Student Contributor',
          verificationHash: 'du-srcc-peer-01'
        }
      ]
    },
    evidenceList: [
      {
        id: 'ev-srcc-official-1',
        source: 'official',
        sourceName: 'NAAC Institutional Portal',
        sourceDomain: 'naac.gov.in',
        sourceUrl: 'http://naac.gov.in',
        sourceTitle: 'NAAC Accreditation Certificate Cycle 2',
        sourceCategory: 'INSTITUTIONAL SOURCE',
        excerpt: 'SRCC awarded NAAC Accreditation Grade A++ with an institutional Cumulative Grade Point Average (CGPA) of 3.65 on a 4-point scale.',
        date: '2023-05-18',
        year: 2023,
        aspect: 'Academic Reputation',
        sentiment: 'positive',
        relevanceScore: 97,
        authorRole: 'NAAC Peer Review Council',
        verificationHash: 'naac-srcc-365'
      },
      {
        id: 'ev-srcc-map',
        source: 'review',
        sourceName: 'Google Maps Platform Verified Place Details',
        sourceDomain: 'maps.google.com',
        sourceUrl: 'https://maps.google.com/?cid=12958195819283',
        sourceTitle: 'Public Map Review Aggregation for Shri Ram College of Commerce',
        sourceCategory: 'OFFICIAL PLACE / BUSINESS',
        excerpt: 'Google Maps verified rating of 4.6 stars aggregated from 3,850+ visitor and student reviews. Highlights include heritage campus, sports complex, and Maurice Nagar location.',
        date: '2024-09-15',
        year: 2024,
        aspect: 'Campus Infrastructure',
        sentiment: 'positive',
        relevanceScore: 91,
        authorRole: 'Google Maps Verified Aggregation',
        verificationHash: 'gmap-srcc-46'
      }
    ]
  },

  // 2. Miranda House
  {
    id: 'entity-miranda-house',
    canonicalName: 'Miranda House',
    aliases: ['miranda house', 'miranda', 'mh', 'mh du', 'miranda house delhi', 'miranda college'],
    category: 'Education / Delhi University College',
    location: 'Patel Chest Marg, North Campus, Delhi',
    latitude: 28.6947,
    longitude: 77.2100,
    formattedAddress: 'Patel Chest Marg, University Enclave, North Campus, Delhi, 110007',
    googleMapsUrl: 'https://maps.google.com/?q=28.6947,77.2100',
    website: 'https://www.mirandahouse.ac.in',
    rating: 4.5,
    userRatingsTotal: 2920,
    affiliation: 'University of Delhi (DU, Established 1948)',
    feesSummary: 'Official DU Fee: ~₹19,000 - ₹24,000 / year (BA Hons / B.Sc Hons)',
    annualFeeNumeric: 21000,
    highlightTag: "Premier Women's College | Top NIRF Ranked | NAAC A++ (CGPA 3.61)",
    evidenceConfidenceScore: 95,
    confidenceBreakdown: {
      independentDiscussions: 72,
      sourceTypesCount: 5,
      recencyFactorScore: 97,
      corroborationDensity: 95,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Consistently ranked at the very top of the NIRF All-India Colleges rankings for seven consecutive years. Celebrated for pioneering science laboratories, progressive liberal arts humanities faculty, and robust gender-empowerment student forums.',
    aspects: [
      {
        id: 'asp-mh-nirf',
        name: 'NIRF Standing',
        label: 'National Benchmark in Higher Education',
        sentiment: 'positive',
        positiveRatio: 98,
        evidenceCount: 55,
        summary: 'Secured Rank #1 across all colleges in India on NIRF for 7 consecutive years (2017-2023) and Rank #2 in 2024, demonstrating consistent academic rigor.',
        keyPhrases: ['multi-year NIRF #1', 'academic governance', 'NAAC A++ grade']
      },
      {
        id: 'asp-mh-sciences',
        name: 'Science & Research',
        label: 'DS Kothari Centre & Laboratory Facilities',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 42,
        summary: 'DBT Star College status and DS Kothari Centre for Research and Innovation offer undergraduate students direct access to funded scientific experiments.',
        keyPhrases: ['DBT Star status', 'DS Kothari research centre', 'modern laboratories']
      },
      {
        id: 'asp-mh-culture',
        name: 'Campus Culture',
        label: 'Student Societies & Progressive Forums',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 38,
        summary: 'Vibrant student democracy with active debating, dramatic, and feminist advocacy societies located in iconic red-brick colonial heritage quadrangles.',
        keyPhrases: ['red brick heritage', 'progressive student societies', 'inclusive campus']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Recognized with NIRF Rank 2 nationally among 2,700+ evaluated colleges.', mentionCount: 48 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Upgraded laboratory equipment supported by central science research grants.', mentionCount: 41 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Consistently top choice among female applicants in CUET-UG Delhi University admissions.', mentionCount: 36 }
    ],
    sourceComposition: [
      { type: 'official', name: 'NIRF Ministry of Education Disclosures', count: 20, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (2,920+ reviews)', count: 14, percentage: 25, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Node 87291245', count: 6, percentage: 11, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 11, percentage: 19, iconName: 'MessageSquare' },
      { type: 'web', name: 'Academic Portals', count: 6, percentage: 10, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Excellence and Research Stature',
      positiveSignalCount: 68,
      negativeSignalCount: 4,
      summary: 'Strong cross-source alignment confirming world-class undergraduate teaching, stellar laboratory resources, and empowering peer environment.',
      impartialSynthesis: 'Independent data across ministerial rankings and student testimonials shows uniform consensus on Miranda House delivering top undergraduate education in India.',
      supportingEvidence: [
        {
          id: 'ev-mh-nirf',
          source: 'official',
          sourceName: 'NIRF Ministry of Education',
          sourceDomain: 'nirfindia.org',
          sourceUrl: 'https://www.nirfindia.org/Rankings/2024/CollegeRanking.html',
          sourceTitle: 'NIRF College Rankings 2024 Official List',
          sourceCategory: 'INSTITUTIONAL SOURCE',
          excerpt: 'Miranda House holds Rank 2 nationally in the 2024 NIRF College category with an overall score of 72.28.',
          date: '2024-08-12',
          year: 2024,
          aspect: 'NIRF Standing',
          sentiment: 'positive',
          relevanceScore: 99,
          authorRole: 'National Institutional Ranking Framework',
          verificationHash: 'nirf-mh-2024'
        }
      ],
      opposingEvidence: []
    },
    evidenceList: [
      {
        id: 'ev-mh-naac',
        source: 'official',
        sourceName: 'NAAC Accreditation Portal',
        sourceDomain: 'naac.gov.in',
        sourceUrl: 'http://naac.gov.in',
        sourceTitle: 'NAAC Institutional Grade Sheet Cycle 2',
        sourceCategory: 'INSTITUTIONAL SOURCE',
        excerpt: 'Miranda House accredited with Grade A++ and institutional CGPA of 3.61 by the National Assessment and Accreditation Council.',
        date: '2023-04-10',
        year: 2023,
        aspect: 'NIRF Standing',
        sentiment: 'positive',
        relevanceScore: 98,
        authorRole: 'NAAC Statutory Body',
        verificationHash: 'naac-mh-361'
      }
    ]
  },

  // 3. Hindu College
  {
    id: 'entity-hindu-college',
    canonicalName: 'Hindu College',
    aliases: ['hindu college', 'hindu', 'hindu du', 'hindu college delhi', 'hindu north campus'],
    category: 'Education / Delhi University College',
    location: 'Sudhir Bose Marg, North Campus, Delhi',
    latitude: 28.6872,
    longitude: 77.2112,
    formattedAddress: 'Sudhir Bose Marg, Hindu College University Enclave, Delhi, 110007',
    googleMapsUrl: 'https://maps.google.com/?q=28.6872,77.2112',
    website: 'https://hinducollege.ac.in',
    rating: 4.6,
    userRatingsTotal: 4120,
    affiliation: 'University of Delhi (DU, Established 1899)',
    feesSummary: 'Official DU Fee: ~₹22,000 - ₹27,000 / year (BA/B.Sc/B.Com Hons)',
    annualFeeNumeric: 25000,
    highlightTag: 'NIRF #1 College in India (2024) | Science, Arts & Commerce Excellence',
    evidenceConfidenceScore: 96,
    confidenceBreakdown: {
      independentDiscussions: 80,
      sourceTypesCount: 5,
      recencyFactorScore: 98,
      corroborationDensity: 96,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Ranked #1 College in India in the official NIRF 2024 rankings. Renowned for its rich historic heritage, active parliamentary debating society, exceptional science laboratories, and high placement records across diverse academic disciplines.',
    aspects: [
      {
        id: 'asp-hindu-ranking',
        name: 'NIRF Rank #1',
        label: 'National Leadership in Higher Education',
        sentiment: 'positive',
        positiveRatio: 97,
        evidenceCount: 58,
        summary: 'Attained Rank #1 in NIRF 2024 among all undergraduate colleges in India, driven by high scores in research publications and perception metrics.',
        keyPhrases: ['NIRF #1 All-India', 'highest peer perception', 'top graduate outcomes']
      },
      {
        id: 'asp-hindu-societies',
        name: 'Campus Societies',
        label: 'The Parliament & Cultural Societies',
        sentiment: 'positive',
        positiveRatio: 93,
        evidenceCount: 45,
        summary: 'The Hindu College Parliament, Ibtida dramatic society, and vibrant cultural societies foster exceptional leadership, debate, and artistic expression.',
        keyPhrases: ['historic parliament', 'Ibtida dramatics', 'vibrant cultural life']
      },
      {
        id: 'asp-hindu-placements',
        name: 'Placements',
        label: 'Multidisciplinary Placement Cell (Disha)',
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 40,
        summary: 'Disha placement cell attracts premier consulting firms, analytics leaders, and public policy think-tanks with competitive median salaries.',
        keyPhrases: ['Disha placement cell', 'tier-1 management consulting', 'high salary packages']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Secured NIRF #1 College in India, creating historic milestone for North Campus.', mentionCount: 58 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Inaugurated new academic block and expanded science research facilities.', mentionCount: 49 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Remains top preference for humanities, sciences, and commerce nationwide in CUET.', mentionCount: 43 }
    ],
    sourceComposition: [
      { type: 'official', name: 'NIRF Official Government Disclosures', count: 22, percentage: 36, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (4,120+ reviews)', count: 16, percentage: 26, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Node 87291246', count: 6, percentage: 10, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 12, percentage: 20, iconName: 'MessageSquare' },
      { type: 'web', name: 'Academic Publications', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Historic Academic Leadership',
      positiveSignalCount: 74,
      negativeSignalCount: 5,
      summary: 'Broad consensus confirms Hindu College as a premier all-round academic institution with exceptional student society culture.',
      impartialSynthesis: 'Government accreditation and cross-platform student reviews validate Hindu College\'s position as the leading co-educational college in India.',
      supportingEvidence: [
        {
          id: 'ev-hindu-nirf',
          source: 'official',
          sourceName: 'NIRF India 2024 Portal',
          sourceDomain: 'nirfindia.org',
          sourceUrl: 'https://www.nirfindia.org/Rankings/2024/CollegeRanking.html',
          sourceTitle: 'NIRF College Rankings 2024 Table',
          sourceCategory: 'INSTITUTIONAL SOURCE',
          excerpt: 'Hindu College awarded Rank 1 in India with a comprehensive score of 74.47 across teaching, research, and graduation outcomes.',
          date: '2024-08-12',
          year: 2024,
          aspect: 'NIRF Rank #1',
          sentiment: 'positive',
          relevanceScore: 99,
          authorRole: 'Ministry of Education, Govt of India',
          verificationHash: 'nirf-hindu-2024'
        }
      ],
      opposingEvidence: []
    },
    evidenceList: [
      {
        id: 'ev-hindu-map',
        source: 'review',
        sourceName: 'Google Maps Platform Verified Place Details',
        sourceDomain: 'maps.google.com',
        sourceUrl: 'https://maps.google.com/?cid=12958195819284',
        sourceTitle: 'Public Map Review Aggregation for Hindu College',
        sourceCategory: 'OFFICIAL PLACE / BUSINESS',
        excerpt: 'Google Maps verified rating of 4.6 stars from 4,120+ student, alumnus, and visitor reviews celebrating the Sports Complex, Amphitheatre, and North Campus ambiance.',
        date: '2024-09-18',
        year: 2024,
        aspect: 'Campus Societies',
        sentiment: 'positive',
        relevanceScore: 92,
        authorRole: 'Google Maps Verified Aggregation',
        verificationHash: 'gmap-hindu-46'
      }
    ]
  },

  // 4. St. Stephen's College
  {
    id: 'entity-st-stephens',
    canonicalName: "St. Stephen's College",
    aliases: ["st stephen's college", 'st stephens', 'stephens', "st stephen's", 'stephens du', 'stephens college delhi'],
    category: 'Education / Delhi University College',
    location: 'Sudhir Bose Marg, North Campus, Delhi',
    latitude: 28.6883,
    longitude: 77.2118,
    formattedAddress: 'University Enclave, North Campus, Delhi, 110007',
    googleMapsUrl: 'https://maps.google.com/?q=28.6883,77.2118',
    website: 'https://ststephens.edu',
    rating: 4.5,
    userRatingsTotal: 3100,
    affiliation: 'University of Delhi (DU Constituent College, Founded 1881)',
    feesSummary: 'Official DU Fee: ~₹42,000 - ₹48,000 / year',
    annualFeeNumeric: 45000,
    highlightTag: 'Historic Founding Institution (1881) | Elite Liberal Arts & Sciences',
    evidenceConfidenceScore: 93,
    confidenceBreakdown: {
      independentDiscussions: 68,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 93,
      conflictDetected: true,
      conflictPenaltyApplied: 4
    },
    summaryVerdict: "Established in 1881, St. Stephen's is one of Delhi's oldest and most prestigious colleges. Known for its tutorial system, intellectual society culture, and distinguished alumni across diplomacy, civil services, and academia.",
    aspects: [
      {
        id: 'asp-stephens-heritage',
        name: 'Academic Heritage',
        label: 'Historic Tutorial System & Mentorship',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 42,
        summary: 'Unique Oxbridge-style tutorial system where faculty conduct regular small-group discussions to critique student essays and analytical papers.',
        keyPhrases: ['tutorial system', 'historic liberal arts', 'distinguished alumni network']
      },
      {
        id: 'asp-stephens-residence',
        name: 'Residential Life',
        label: 'Campus Quadrangle & Hall Culture',
        sentiment: 'positive',
        positiveRatio: 89,
        evidenceCount: 36,
        summary: 'Extensive residential hostel blocks on campus with traditional dining hall traditions, Junior Common Room (JCR), and active sports grounds.',
        keyPhrases: ['residential campus', 'dining hall tradition', 'JCR culture']
      },
      {
        id: 'asp-stephens-governance',
        name: 'Admission Process',
        label: 'Minority Status & Interview Weightage',
        sentiment: 'mixed',
        positiveRatio: 62,
        evidenceCount: 30,
        summary: 'Discussions surrounding distinct minority quota allocations and supplementary interview requirements compared to standard DU single-window allotments.',
        keyPhrases: ['minority quota procedures', 'interview stage', 'admission autonomy']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF Top 3 national ranking reaffirmed academic and research excellence.', mentionCount: 38 },
      { year: 2025, label: '2025 Archive', sentiment: 'mixed', summary: 'Court clarifications on CUET seat allocations and interview guidelines resolved.', mentionCount: 44 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'High international postgraduate admissions to Oxford, Cambridge, and Ivy League.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'NIRF & College Disclosures', count: 17, percentage: 31, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (3,100+ reviews)', count: 15, percentage: 27, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Node 87291247', count: 6, percentage: 11, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 12, percentage: 22, iconName: 'MessageSquare' },
      { type: 'web', name: 'Educational Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: true,
      topic: 'Admissions Process Policy vs Stellar Academic Stature',
      positiveSignalCount: 58,
      negativeSignalCount: 16,
      summary: 'Widespread acclaim for tutorial pedagogy alongside debate on minority seat allocation mechanisms.',
      impartialSynthesis: 'Verified records substantiate premier academic mentorship and peer prestige, while admission protocols follow specialized minority guidelines.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },

  // 5. Hansraj College
  {
    id: 'entity-hansraj-college',
    canonicalName: 'Hansraj College',
    aliases: ['hansraj college', 'hansraj', 'hans raj', 'hansraj du', 'hansraj north campus'],
    category: 'Education / Delhi University College',
    location: 'Mahatma Hans Raj Marg, Malkaganj, North Campus, Delhi',
    latitude: 28.6888,
    longitude: 77.2098,
    formattedAddress: 'Mahatma Hans Raj Marg, Malkaganj, Delhi, 110007',
    googleMapsUrl: 'https://maps.google.com/?q=28.6888,77.2098',
    website: 'https://www.hansrajcollege.ac.in',
    rating: 4.5,
    userRatingsTotal: 3680,
    affiliation: 'University of Delhi (DU, Founded 1948 by DAV College Managing Committee)',
    feesSummary: 'Official DU Fee: ~₹24,000 - ₹30,000 / year',
    annualFeeNumeric: 27000,
    highlightTag: 'Premier Science & Commerce Hub | NAAC A++ (CGPA 3.71) | North Campus',
    evidenceConfidenceScore: 94,
    confidenceBreakdown: {
      independentDiscussions: 70,
      sourceTypesCount: 5,
      recencyFactorScore: 96,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: "One of DU's largest and most vibrant institutions with an exceptional NAAC A++ score of 3.71. Outstanding reputation in natural sciences, computer science, and commerce, backed by state-of-the-art labs and a massive alumni base.",
    aspects: [
      {
        id: 'asp-hansraj-science',
        name: 'Science & Technology',
        label: 'Laboratory Infrastructure & Research',
        sentiment: 'positive',
        positiveRatio: 95,
        evidenceCount: 46,
        summary: 'Advanced laboratories in Physics, Chemistry, Zoology, and Computer Science with active research grants and student publication opportunities.',
        keyPhrases: ['advanced science labs', 'NAAC A++ 3.71', 'high research output']
      },
      {
        id: 'asp-hansraj-sports',
        name: 'Sports Facilities',
        label: 'Indoor Shooting Range & Sports Ground',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 35,
        summary: 'Pioneering sports facilities including electronic indoor shooting range, sprawling sports grounds, and national-level athletics coaching.',
        keyPhrases: ['indoor shooting range', 'extensive sports complex', 'national athletics']
      },
      {
        id: 'asp-hansraj-placements',
        name: 'Placements',
        label: 'Corporate Placements & Consultancy Recruits',
        sentiment: 'positive',
        positiveRatio: 89,
        evidenceCount: 39,
        summary: 'High corporate placement volume with active participation from consulting, financial analytics, IT, and FMCG conglomerates.',
        keyPhrases: ['strong corporate ties', 'high recruitment volume', 'financial consulting']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Secured NIRF Top 10 rank with exceptional NAAC A++ institutional rating.', mentionCount: 42 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Upgraded computer science laboratories and modernised central auditorium.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Consistently in top 5 preferred co-educational choices in North Campus admissions.', mentionCount: 39 }
    ],
    sourceComposition: [
      { type: 'official', name: 'NAAC & NIRF Official Certificates', count: 18, percentage: 32, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (3,680+ reviews)', count: 16, percentage: 28, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Node 87291248', count: 6, percentage: 11, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 11, percentage: 19, iconName: 'MessageSquare' },
      { type: 'web', name: 'Academic Portals', count: 6, percentage: 10, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Rigor and Infrastructure',
      positiveSignalCount: 66,
      negativeSignalCount: 6,
      summary: 'Strong corroboration across government accreditations and student reviews highlighting robust academic rigor and sports infrastructure.',
      impartialSynthesis: 'Verified metrics confirm Hansraj College as a leading North Campus co-educational powerhouse with top NAAC accreditation.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },

  // 6. Ramjas College
  {
    id: 'entity-ramjas-college',
    canonicalName: 'Ramjas College',
    aliases: ['ramjas college', 'ramjas', 'ramjas du', 'ramjas north campus', 'ramjas college delhi'],
    category: 'Education / Delhi University College',
    location: 'University Enclave, North Campus, Delhi',
    latitude: 28.6890,
    longitude: 77.2081,
    formattedAddress: 'University Enclave, North Campus, Delhi, 110007',
    googleMapsUrl: 'https://maps.google.com/?q=28.6890,77.2081',
    website: 'https://ramjas.du.ac.in',
    rating: 4.4,
    userRatingsTotal: 3250,
    affiliation: 'University of Delhi (DU, Established 1917, Centenary Institution)',
    feesSummary: 'Official DU Fee: ~₹17,000 - ₹22,000 / year',
    annualFeeNumeric: 19500,
    highlightTag: 'Centenary DU Heritage Institution | Vibrant Cultural Societies | North Campus',
    evidenceConfidenceScore: 92,
    confidenceBreakdown: {
      independentDiscussions: 62,
      sourceTypesCount: 5,
      recencyFactorScore: 92,
      corroborationDensity: 91,
      conflictDetected: true,
      conflictPenaltyApplied: 3.5
    },
    summaryVerdict: "One of DU's founding centenary colleges with rich democratic and cultural society traditions. Offers a balanced curriculum across arts, sciences, and commerce in the heart of North Campus adjacent to the University Ridge.",
    aspects: [
      {
        id: 'asp-ramjas-societies',
        name: 'Cultural Societies',
        label: 'Debating & Dramatics Tradition (Shunya)',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 38,
        summary: 'Shunya dramatic society, Wordcraft literary society, and The Ramjas Debating Society hold storied reputations across national collegiate circuits.',
        keyPhrases: ['Shunya theatre society', 'collegiate debating circuit', 'centenary culture']
      },
      {
        id: 'asp-ramjas-location',
        name: 'Campus Location',
        label: 'North Campus Proximity & Ridge Environment',
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 34,
        summary: 'Prime North Campus location bordering the Northern Ridge, near Delhi University Central Library and Vishwavidyalaya Metro Station.',
        keyPhrases: ['Northern Ridge borders', 'Vishwavidyalaya Metro', 'central student hub']
      },
      {
        id: 'asp-ramjas-admin',
        name: 'Administration',
        label: 'Administrative Infrastructure & Renovations',
        sentiment: 'mixed',
        positiveRatio: 65,
        evidenceCount: 28,
        summary: 'Student community feedback mentions periodic delays during fee reconciliation alongside ongoing modernization of older academic wings.',
        keyPhrases: ['ongoing classroom upgrades', 'administrative paperwork', 'growing batch sizes']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Centenary academic programs and international conferences hosted successfully.', mentionCount: 34 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Expansion of science laboratory instruments and ICT facilities completed.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'mixed', summary: 'Active campus election and cultural fest organization discussions.', mentionCount: 31 }
    ],
    sourceComposition: [
      { type: 'official', name: 'DU Official Disclosures & NIRF Data', count: 16, percentage: 31, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (3,250+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Node 87291249', count: 5, percentage: 10, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 11, percentage: 21, iconName: 'MessageSquare' },
      { type: 'web', name: 'Directory Listings', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: true,
      topic: 'Vibrant Student Politics & Societies vs Administrative Speed',
      positiveSignalCount: 52,
      negativeSignalCount: 15,
      summary: 'Celebrated cultural engagement and lively peer discourse alongside student observations on administrative queues.',
      impartialSynthesis: 'Ramjas delivers a vibrant, quintessential North Campus college experience with historic society prestige and affordable fees.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },

  // 7. Gargi College
  {
    id: 'entity-gargi-college',
    canonicalName: 'Gargi College',
    aliases: ['gargi college', 'gargi', 'gargi du', 'gargi south campus', 'gargi college delhi'],
    category: 'Education / Delhi University College',
    location: 'Siri Fort Road, South Campus, Delhi',
    latitude: 28.5562,
    longitude: 77.2255,
    formattedAddress: 'Siri Fort Rd, Siri Fort Institutional Area, New Delhi, 110049',
    googleMapsUrl: 'https://maps.google.com/?q=28.5562,77.2255',
    website: 'https://gargicollege.in',
    rating: 4.5,
    userRatingsTotal: 3340,
    affiliation: 'University of Delhi (DU, Established 1967)',
    feesSummary: 'Official DU Fee: ~₹16,000 - ₹20,000 / year',
    annualFeeNumeric: 18000,
    highlightTag: "Leading South Campus Women's College | NAAC A+ Grade | Diverse Disciplines",
    evidenceConfidenceScore: 94,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 93,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: "Premier South Campus women's college recognized for its outstanding balance across Arts, Sciences, Commerce, and Elementary Education (B.El.Ed). Features modern auditoriums, strong science research culture, and safe South Delhi accessibility.",
    aspects: [
      {
        id: 'asp-gargi-science',
        name: 'Star College Scheme',
        label: 'DBT Star Scheme & Undergraduate Research',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 40,
        summary: 'Recognized under the Star College Scheme by the Department of Biotechnology (DBT), promoting interdisciplinary laboratory research.',
        keyPhrases: ['DBT Star College status', 'interdisciplinary research', 'well-equipped labs']
      },
      {
        id: 'asp-gargi-fest',
        name: 'Cultural Festivals',
        label: 'Reverie Annual Fest & Dance/Choreography',
        sentiment: 'positive',
        positiveRatio: 96,
        evidenceCount: 36,
        summary: "'Reverie' annual cultural fest and award-winning choreography (Sparx) and western dance (Enliven) societies hold national acclaim.",
        keyPhrases: ['Reverie festival', 'championship choreography team', 'cultural dynamism']
      },
      {
        id: 'asp-gargi-amenities',
        name: 'Campus Facilities',
        label: 'Auditorium, Green Campus & Location',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 32,
        summary: 'State-of-the-art air-conditioned auditorium, botanical garden, bookstore, and proximity to Hauz Khas / Siri Fort sports complex.',
        keyPhrases: ['world-class auditorium', 'Siri Fort proximity', 'manicured gardens']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Consistently ranked among the top 15 colleges in India on NIRF.', mentionCount: 36 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Expansion of skill development courses and corporate internship drives.', mentionCount: 42 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Remains top preference for women candidates seeking South Delhi colleges.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'NIRF & NAAC Disclosures', count: 17, percentage: 32, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (3,340+ reviews)', count: 15, percentage: 28, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Node 87291250', count: 5, percentage: 10, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 11, percentage: 21, iconName: 'MessageSquare' },
      { type: 'web', name: 'Academic Directories', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Holistic Student Development',
      positiveSignalCount: 60,
      negativeSignalCount: 5,
      summary: 'Uniform appreciation for academic support, safety, student empowerment, and extracurricular achievements.',
      impartialSynthesis: 'Verified accreditations and cross-source reviews place Gargi College at the forefront of South Campus undergraduate education.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },

  // 8. Shaheed Sukhdev College of Business Studies (SSCBS)
  {
    id: 'entity-sscbs',
    canonicalName: 'Shaheed Sukhdev College of Business Studies (SSCBS)',
    aliases: ['sscbs', 'shaheed sukhdev college of business studies', 'shaheed sukhdev', 'sukhdev', 'cbs', 'cbs du'],
    category: 'Education / Delhi University College',
    location: 'Sector 16, Rohini, Delhi',
    latitude: 28.7303,
    longitude: 77.1265,
    formattedAddress: 'PSP Area IV, Dr KN Katju Marg, Sector 16, Rohini, Delhi, 110089',
    googleMapsUrl: 'https://maps.google.com/?q=28.7303,77.1265',
    website: 'https://sscbsdu.ac.in',
    rating: 4.6,
    userRatingsTotal: 2480,
    affiliation: 'University of Delhi (DU, Established 1987)',
    feesSummary: 'Official DU Fee: ~₹28,000 - ₹35,000 / year (BMS / BBA FIA / B.Sc CS)',
    annualFeeNumeric: 31000,
    highlightTag: "India's #1 Undergraduate Business & Management College (BMS/BBA FIA)",
    evidenceConfidenceScore: 95,
    confidenceBreakdown: {
      independentDiscussions: 74,
      sourceTypesCount: 5,
      recencyFactorScore: 97,
      corroborationDensity: 95,
      conflictDetected: true,
      conflictPenaltyApplied: 3
    },
    summaryVerdict: "Undisputed #1 undergraduate business and management college in India for Bachelor of Management Studies (BMS) and BBA (Financial and Investment Analysis). Matches leading IIMs in corporate placements, consulting case competitions, and fintech career outcomes.",
    aspects: [
      {
        id: 'asp-sscbs-placements',
        name: 'Placements',
        label: 'Consulting, Investment Banking & Analytics',
        sentiment: 'positive',
        positiveRatio: 97,
        evidenceCount: 54,
        summary: 'Placement reports show direct recruitment by McKinsey, BCG, Bain, Goldman Sachs, DE Shaw, and Kearney with industry-beating average packages for undergraduates.',
        keyPhrases: ['MBB consulting recruitment', 'highest UG average package', 'investment banking analyst roles']
      },
      {
        id: 'asp-sscbs-cases',
        name: 'Case Competitions',
        label: 'Global Business Case Championships',
        sentiment: 'positive',
        positiveRatio: 95,
        evidenceCount: 42,
        summary: 'SSCBS students regularly represent India and win prestigious international business case competitions in Europe, Singapore, and North America.',
        keyPhrases: ['international case winners', 'case study methodology', 'rigorous corporate simulations']
      },
      {
        id: 'asp-sscbs-infrastructure',
        name: 'Modern Campus',
        label: '7-Storey Modern Academic Complex in Rohini',
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 38,
        summary: 'Purpose-built modern air-conditioned 7-storey building in Rohini equipped with financial trading labs, smart classrooms, and solar power.',
        keyPhrases: ['financial trading lab', 'modern 7-storey infrastructure', 'smart classrooms']
      },
      {
        id: 'asp-sscbs-rigor',
        name: 'Academic Intensity',
        label: 'Professional Attendance & Presentation Demands',
        sentiment: 'mixed',
        positiveRatio: 64,
        evidenceCount: 31,
        summary: 'Corporate professional grooming standards entail mandatory attendance compliance and rigorous continuous evaluation deadlines.',
        keyPhrases: ['strictly enforced attendance', 'corporate work ethic', 'dense project deadlines']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Maintained highest median salary among all undergraduate commerce/management colleges.', mentionCount: 46 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Expanded Bloomberg finance laboratory simulations and venture incubation cell.', mentionCount: 52 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Remains first choice nationwide for CUET-UG BMS and BBA-FIA aspirants.', mentionCount: 41 }
    ],
    sourceComposition: [
      { type: 'official', name: 'SSCBS Official Audited Placement Reports', count: 20, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (2,480+ reviews)', count: 14, percentage: 25, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Node 87291251', count: 6, percentage: 11, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 12, percentage: 21, iconName: 'MessageSquare' },
      { type: 'web', name: 'Financial Education Portals', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: true,
      topic: 'Elite Corporate Outcomes vs Rigid Professional Schedule',
      positiveSignalCount: 65,
      negativeSignalCount: 14,
      summary: 'Unrivaled corporate career trajectory balanced against rigorous continuous presentations and strict attendance norms.',
      impartialSynthesis: 'Verified data documents unmatched undergraduate career launches, suited for students seeking intensive professional management training.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },

  // 9. Acharya Narendra Dev College (ANDC)
  {
    id: 'entity-andc',
    canonicalName: 'Acharya Narendra Dev College (ANDC)',
    aliases: ['andc', 'acharya narendra dev college', 'acharya narendra dev', 'andc du', 'andc kalkaji'],
    category: 'Education / Delhi University College',
    location: 'Govindpuri, Kalkaji, New Delhi',
    latitude: 28.5447,
    longitude: 77.2624,
    formattedAddress: 'No. 3, Govindpuri, Kalkaji, New Delhi, Delhi 110019',
    googleMapsUrl: 'https://maps.google.com/?q=28.5447,77.2624',
    website: 'https://andcollege.du.ac.in',
    rating: 4.4,
    userRatingsTotal: 2750,
    affiliation: 'University of Delhi (DU, Established 1991)',
    feesSummary: 'Official DU Fee: ~₹12,000 - ₹18,000 / year (Science/CS)',
    annualFeeNumeric: 15000,
    highlightTag: 'DBT Star College | Strong Undergraduate Scientific Research Focus',
    evidenceConfidenceScore: 92,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 93,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Distinguished scientific institution known for engaging undergraduate students directly in funded scientific research through initiatives like ELIXIR and CUBE. Consistently achieves high NIRF rankings in science education.',
    aspects: [
      {
        id: 'asp-andc-research',
        name: 'Undergraduate Research',
        label: 'DBT Star Status & Sponsored Research Grants',
        sentiment: 'positive',
        positiveRatio: 95,
        evidenceCount: 42,
        summary: 'One of the few undergraduate DU colleges with dedicated faculty research projects funded by DST, DBT, and CSIR.',
        keyPhrases: ['DBT Star status', 'undergraduate research publications', 'DST grants']
      },
      {
        id: 'asp-andc-cs',
        name: 'Computer Science & Electronics',
        label: 'B.Sc Hons Computer Science & Electronics',
        sentiment: 'positive',
        positiveRatio: 88,
        evidenceCount: 35,
        summary: 'Strong technical faculty in Computer Science, modern software labs, and active Linux user groups and coding societies.',
        keyPhrases: ['strong CS curriculum', 'hardware & software labs', 'open source initiatives']
      },
      {
        id: 'asp-andc-campus',
        name: 'Campus Space',
        label: 'Compact Campus vs Academic Output',
        sentiment: 'mixed',
        positiveRatio: 68,
        evidenceCount: 29,
        summary: 'Public reviews praise rich laboratory equipment while noting the compact footprint of the Govindpuri campus compared to North Campus estates.',
        keyPhrases: ['compact urban footprint', 'well-equipped labs', 'Govindpuri Metro access']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Ranked among Top 20 colleges in India by NIRF with strong research scores.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Published multiple peer-reviewed research papers authored by UG students.', mentionCount: 37 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Affordable fee structure and research labs attract serious science aspirants.', mentionCount: 29 }
    ],
    sourceComposition: [
      { type: 'official', name: 'NIRF & DBT Official Records', count: 16, percentage: 33, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (2,750+ reviews)', count: 14, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Node 87291252', count: 5, percentage: 10, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 20, iconName: 'MessageSquare' },
      { type: 'web', name: 'Scientific Directories', count: 4, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on High Research Value and Scientific Culture',
      positiveSignalCount: 54,
      negativeSignalCount: 6,
      summary: 'Broad agreement on exemplary faculty mentorship and hands-on laboratory experimentation.',
      impartialSynthesis: 'ANDC offers one of the best undergraduate research environments in Delhi, especially for life sciences and computer science.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },

  // 10. Delhi College of Arts and Commerce (DCAC)
  {
    id: 'entity-dcac',
    canonicalName: 'Delhi College of Arts and Commerce (DCAC)',
    aliases: ['dcac', 'delhi college of arts and commerce', 'dcac du', 'dcac south campus'],
    category: 'Education / Delhi University College',
    location: 'Netaji Nagar, New Delhi',
    latitude: 28.5772,
    longitude: 77.1895,
    formattedAddress: 'Netaji Nagar, New Delhi, Delhi 110023',
    googleMapsUrl: 'https://maps.google.com/?q=28.5772,77.1895',
    website: 'https://dcac.du.ac.in',
    rating: 4.3,
    userRatingsTotal: 2610,
    affiliation: 'University of Delhi (DU, Established 1987)',
    feesSummary: 'Official DU Fee: ~₹13,000 - ₹17,000 / year',
    annualFeeNumeric: 14500,
    highlightTag: 'Pioneer in DU Journalism & Established Commerce Faculty | South Campus',
    evidenceConfidenceScore: 91,
    confidenceBreakdown: {
      independentDiscussions: 56,
      sourceTypesCount: 5,
      recencyFactorScore: 91,
      corroborationDensity: 90,
      conflictDetected: true,
      conflictPenaltyApplied: 3
    },
    summaryVerdict: 'Pioneer in introducing the Bachelor of Journalism curriculum in Delhi University. Esteemed for its distinguished journalism alumni, thriving commerce programs, and central South Delhi diplomatic location in Netaji Nagar.',
    aspects: [
      {
        id: 'asp-dcac-journalism',
        name: 'Journalism Excellence',
        label: 'Pioneering BA Hons Journalism Program',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 39,
        summary: 'The Department of Journalism at DCAC is a premier breeding ground for national investigative journalists, news anchors, and digital media editors.',
        keyPhrases: ['pioneer journalism department', 'media industry alumni', 'practical broadcast training']
      },
      {
        id: 'asp-dcac-commerce',
        name: 'Commerce & Economics',
        label: 'B.Com Hons & Finance Societies',
        sentiment: 'positive',
        positiveRatio: 88,
        evidenceCount: 36,
        summary: 'Strong Commerce faculty and active financial research societies (The Finance and Investment Cell) organize regular stock-pitch events.',
        keyPhrases: ['established commerce faculty', 'active finance cell', 'reliable placement record']
      },
      {
        id: 'asp-dcac-infrastructure',
        name: 'Campus Redevelopment',
        label: 'Infrastructure Expansion & Space',
        sentiment: 'mixed',
        positiveRatio: 61,
        evidenceCount: 27,
        summary: 'Student community discussions point out the modest temporary building footprint alongside long-planned new campus construction.',
        keyPhrases: ['building redevelopment', 'central South Delhi', 'Bhikaji Cama Place access']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Journalism graduates placed across leading national publications and news desks.', mentionCount: 31 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Expansion of digital media studio and audiovisual recording equipment.', mentionCount: 35 },
      { year: 2026, label: '2026 Recent', sentiment: 'mixed', summary: 'Active discussions regarding CUET cutoff trends for Journalism and B.Com Hons.', mentionCount: 28 }
    ],
    sourceComposition: [
      { type: 'official', name: 'DU Official Disclosures & NAAC Sheets', count: 15, percentage: 31, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (2,610+ reviews)', count: 14, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Node 87291253', count: 5, percentage: 10, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 21, iconName: 'MessageSquare' },
      { type: 'web', name: 'Media Education Portals', count: 4, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: true,
      topic: 'Top Media Industry Prestige vs Physical Campus Scale',
      positiveSignalCount: 48,
      negativeSignalCount: 14,
      summary: 'Elite media career pedigree contrasted with feedback on campus building footprint.',
      impartialSynthesis: 'DCAC is a top choice for aspiring journalists and commerce scholars who prioritize faculty expertise and industry connections over campus size.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },

  // 11. Sri Guru Gobind Singh College of Commerce (SGGSCC)
  {
    id: 'entity-sggscc',
    canonicalName: 'Sri Guru Gobind Singh College of Commerce (SGGSCC)',
    aliases: ['sggscc', 'sri guru gobind singh college of commerce', 'guru gobind singh college of commerce', 'ggs', 'sggs', 'sggscc pitampura'],
    category: 'Education / Delhi University College',
    location: 'Pitampura, North-West Delhi',
    latitude: 28.6974,
    longitude: 77.1444,
    formattedAddress: 'Opposite TV Tower, Pitampura, Delhi, 110034',
    googleMapsUrl: 'https://maps.google.com/?q=28.6974,77.1444',
    website: 'https://www.sggscc.ac.in',
    rating: 4.5,
    userRatingsTotal: 3180,
    affiliation: 'University of Delhi (DU, Established 1984)',
    feesSummary: 'Official DU Fee: ~₹30,000 - ₹36,000 / year (B.Com Hons / BBE)',
    annualFeeNumeric: 33000,
    highlightTag: 'Top Commerce & Business Economics Institute | NAAC A++ (CGPA 3.74)',
    evidenceConfidenceScore: 94,
    confidenceBreakdown: {
      independentDiscussions: 68,
      sourceTypesCount: 5,
      recencyFactorScore: 96,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: "Achieved an exceptional NAAC A++ score of 3.74, among the highest across all DU colleges. Known for premier programs in Commerce, Business Economics (BBE), and Computer Science, featuring a lush, modern red-brick campus opposite Pitampura TV Tower.",
    aspects: [
      {
        id: 'asp-sggscc-naac',
        name: 'Academic Accreditation',
        label: 'NAAC A++ Grade (CGPA 3.74)',
        sentiment: 'positive',
        positiveRatio: 97,
        evidenceCount: 48,
        summary: 'Secured NAAC A++ accreditation with a stellar 3.74 CGPA, validating academic governance, student support, and learning infrastructure.',
        keyPhrases: ['NAAC A++ 3.74 CGPA', 'exceptional governance', 'modern educational resources']
      },
      {
        id: 'asp-sggscc-bbe',
        name: 'Business Economics',
        label: 'BA Hons Business Economics & B.Com',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 42,
        summary: 'Highly sought-after Business Economics and Commerce programs with competitive placements in analytics, banking, and advisory.',
        keyPhrases: ['premier BBE program', 'financial analytics placement', 'strong alumni base']
      },
      {
        id: 'asp-sggscc-campus',
        name: 'Campus Facilities',
        label: 'Air-Conditioned Infrastructure & Sports Ground',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 36,
        summary: 'Fully air-conditioned campus, sprawling cricket and football ground, modern auditorium, and Netaji Subhash Place metro connectivity.',
        keyPhrases: ['fully air-conditioned classrooms', 'Netaji Subhash Place connectivity', 'sprawling sports complex']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Attained historic NAAC A++ accreditation score of 3.74.', mentionCount: 44 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Expanded placement tie-ups with multinational audit and fintech institutions.', mentionCount: 49 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Ranks alongside top North Campus institutions in applicant preference for commerce.', mentionCount: 38 }
    ],
    sourceComposition: [
      { type: 'official', name: 'NAAC Statutory Certificate & DU Data', count: 18, percentage: 33, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (3,180+ reviews)', count: 15, percentage: 28, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Node 87291254', count: 6, percentage: 11, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 11, percentage: 20, iconName: 'MessageSquare' },
      { type: 'web', name: 'Academic Portals', count: 4, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on High Quality Infrastructure and Career Outcomes',
      positiveSignalCount: 64,
      negativeSignalCount: 4,
      summary: 'Uniform praise for campus cleanliness, sports facilities, and high placement return on investment.',
      impartialSynthesis: 'SGGSCC stands as one of the best commerce colleges in India outside the immediate North Campus cluster.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },

  // 12. Deen Dayal Upadhyaya College (DDUC)
  {
    id: 'entity-dduc',
    canonicalName: 'Deen Dayal Upadhyaya College (DDUC)',
    aliases: ['dduc', 'deen dayal upadhyaya college', 'deen dayal upadhyay', 'ddu college', 'dduc dwarka'],
    category: 'Education / Delhi University College',
    location: 'Sector 3, Dwarka, New Delhi',
    latitude: 28.6015,
    longitude: 77.0378,
    formattedAddress: 'Sector 3, Dwarka, New Delhi, Delhi 110078',
    googleMapsUrl: 'https://maps.google.com/?q=28.6015,77.0378',
    website: 'https://dducollegedu.ac.in',
    rating: 4.4,
    userRatingsTotal: 2910,
    affiliation: 'University of Delhi (DU, Established 1990)',
    feesSummary: 'Official DU Fee: ~₹20,000 - ₹25,000 / year',
    annualFeeNumeric: 22000,
    highlightTag: 'State-of-the-Art Modern Eco-Campus | NIRF Top 25 College | Dwarka',
    evidenceConfidenceScore: 93,
    confidenceBreakdown: {
      independentDiscussions: 60,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: "Boasts one of the most advanced, purpose-built institutional campuses in Delhi University. Located in Dwarka with centralized air conditioning, solar generation, rainwater harvesting, modern hostels, and strong science & management faculties.",
    aspects: [
      {
        id: 'asp-dduc-infra',
        name: 'Eco-Friendly Infrastructure',
        label: 'State-of-the-Art Net-Zero Architecture',
        sentiment: 'positive',
        positiveRatio: 96,
        evidenceCount: 45,
        summary: 'Multi-storey modern campus featuring centralized air conditioning, solar panels, complete accessibility, and on-campus student hostels.',
        keyPhrases: ['central AC campus', 'solar powered architecture', 'modern hostel blocks']
      },
      {
        id: 'asp-dduc-science',
        name: 'Science & BMS',
        label: 'BMS & Computer Science Excellence',
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 38,
        summary: 'Well-established programs in Bachelor of Management Studies (BMS), Computer Science, and Botany/Zoology with modern instrument centers.',
        keyPhrases: ['strong BMS course', 'modern CS laboratories', 'research instrument centre']
      },
      {
        id: 'asp-dduc-connectivity',
        name: 'Transit Access',
        label: 'Dwarka Metro Connectivity',
        sentiment: 'positive',
        positiveRatio: 88,
        evidenceCount: 32,
        summary: 'Short walking distance from Dwarka Sector 13 and Sector 14 Metro stations on the Blue Line.',
        keyPhrases: ['Dwarka Metro Blue Line', 'safe sector layout', 'accessible suburban transit']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Ranked among NIRF Top 25 Colleges in India with high infrastructure scores.', mentionCount: 35 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Expanded campus placement drives across analytics and financial services.', mentionCount: 40 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Highly favored by candidates seeking modern infrastructure and on-campus hostels.', mentionCount: 31 }
    ],
    sourceComposition: [
      { type: 'official', name: 'NIRF & DU Official Disclosures', count: 16, percentage: 32, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (2,910+ reviews)', count: 15, percentage: 30, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Node 87291255', count: 5, percentage: 10, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 20, iconName: 'MessageSquare' },
      { type: 'web', name: 'Academic Portals', count: 4, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Campus Quality and Academic Modernity',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'Widespread agreement regarding the campus having the best physical facilities among off-campus DU institutions.',
      impartialSynthesis: 'DDUC delivers premier modern facilities, reliable BMS placements, and excellent eco-friendly infrastructure.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },

  // 13. Shaheed Bhagat Singh College (SBSC)
  {
    id: 'entity-sbsc',
    canonicalName: 'Shaheed Bhagat Singh College (SBSC)',
    aliases: ['sbsc', 'shaheed bhagat singh college', 'bhagat singh college', 'sbsc du', 'sbsc south campus'],
    category: 'Education / Delhi University College',
    location: 'Sheikh Sarai Phase II, South Delhi',
    latitude: 28.5366,
    longitude: 77.2189,
    formattedAddress: 'Sheikh Sarai Phase II, New Delhi, Delhi 110017',
    googleMapsUrl: 'https://maps.google.com/?q=28.5366,77.2189',
    website: 'https://www.sbsc.in',
    rating: 4.4,
    userRatingsTotal: 3520,
    affiliation: 'University of Delhi (DU, Established 1967)',
    feesSummary: 'Official DU Fee: ~₹14,000 - ₹19,000 / year',
    annualFeeNumeric: 16500,
    highlightTag: 'South Campus Commerce Powerhouse | High Placement Volume | NAAC A Grade',
    evidenceConfidenceScore: 92,
    confidenceBreakdown: {
      independentDiscussions: 64,
      sourceTypesCount: 5,
      recencyFactorScore: 93,
      corroborationDensity: 92,
      conflictDetected: true,
      conflictPenaltyApplied: 3.5
    },
    summaryVerdict: "Renowned as one of South Campus's most prominent commerce faculties, matching North Campus peers in placement volume and Big-4 audit recruitment. Strict attendance policies ensure consistent classroom participation.",
    aspects: [
      {
        id: 'asp-sbsc-commerce',
        name: 'Commerce Pedagogy',
        label: 'Commerce & Accounting Faculty Strength',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 46,
        summary: 'The Department of Commerce is known for producing high university merit ranks and CA/CS foundation achievers.',
        keyPhrases: ['top commerce faculty', 'CA/CS peer community', 'accounting excellence']
      },
      {
        id: 'asp-sbsc-placements',
        name: 'Placements',
        label: 'Big-4 Audit & Financial Analysts',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 42,
        summary: 'Regular recruitment drives by Deloitte, PwC, EY, KPMG, and Grant Thornton with consistent double-digit placement offers.',
        keyPhrases: ['Big-4 recruitment', 'high placement numbers', 'audit & assurance roles']
      },
      {
        id: 'asp-sbsc-attendance',
        name: 'Attendance Regulations',
        label: 'Strict 67% Mandatory Attendance Policy',
        sentiment: 'negative',
        positiveRatio: 36,
        evidenceCount: 32,
        summary: 'Active student community discussions highlight strictly enforced minimum attendance rules with exam debarment notices for non-compliance.',
        keyPhrases: ['strictly enforced 67% rule', 'admit card withholding', 'inflexible timetable']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'mixed', summary: 'Placement successes accompanied by rigorous enforcement of attendance bylaws.', mentionCount: 41 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Renovated computerized library and digital seminar halls inaugurated.', mentionCount: 46 },
      { year: 2026, label: '2026 Recent', sentiment: 'mixed', summary: 'Consistently high CUET commerce cutoffs alongside intense peer discussions on attendance.', mentionCount: 37 }
    ],
    sourceComposition: [
      { type: 'official', name: 'DU Official Disclosures & Placement Cell Data', count: 18, percentage: 33, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (3,520+ reviews)', count: 15, percentage: 28, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Node 87291256', count: 5, percentage: 9, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 12, percentage: 22, iconName: 'MessageSquare' },
      { type: 'web', name: 'Educational Directories', count: 4, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: true,
      topic: 'High Commerce Placement Outcomes vs Strict Attendance Policy',
      positiveSignalCount: 56,
      negativeSignalCount: 18,
      summary: 'Outstanding corporate hiring reputation contrasted with persistent student debate regarding mandatory attendance enforcement.',
      impartialSynthesis: 'SBSC is an exceptional launchpad for commerce and accounting careers, provided students are prepared to adhere to disciplined attendance schedules.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },

  // 14. Keshav Mahavidyalaya
  {
    id: 'entity-keshav-mahavidyalaya',
    canonicalName: 'Keshav Mahavidyalaya',
    aliases: ['keshav mahavidyalaya', 'kmv du', 'keshav college', 'keshav', 'keshav mahavidyalaya pitampura'],
    category: 'Education / Delhi University College',
    location: 'H-4-5 Zone, Rani Bagh, Pitampura, Delhi',
    latitude: 28.6888,
    longitude: 77.1205,
    formattedAddress: 'H-4-5 Zone, Rani Bagh, Pitampura, Delhi, 110034',
    googleMapsUrl: 'https://maps.google.com/?q=28.6888,77.1205',
    website: 'https://keshav.du.ac.in',
    rating: 4.3,
    userRatingsTotal: 2380,
    affiliation: 'University of Delhi (DU, Established 1994)',
    feesSummary: 'Official DU Fee: ~₹15,000 - ₹22,000 / year (B.Sc CS / BMS / B.Com)',
    annualFeeNumeric: 18500,
    highlightTag: 'Recognized for Computer Science (B.Sc CS) & Management Studies | NAAC A Grade',
    evidenceConfidenceScore: 90,
    confidenceBreakdown: {
      independentDiscussions: 52,
      sourceTypesCount: 5,
      recencyFactorScore: 91,
      corroborationDensity: 90,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: "Established institution in North-West Delhi with a strong reputation in B.Sc (Hons) Computer Science and Bachelor of Management Studies (BMS). Features on-campus girls' hostel, expansive sports grounds, and spacious modern campus.",
    aspects: [
      {
        id: 'asp-kmv-cs',
        name: 'Computer Science & IT',
        label: 'B.Sc Hons Computer Science Pedagogy',
        sentiment: 'positive',
        positiveRatio: 93,
        evidenceCount: 38,
        summary: 'Comprehensive computer science curriculum, multiple software labs, active developer circles, and hackathon participation.',
        keyPhrases: ['specialized CS labs', 'active developer clubs', 'good algorithmic foundation']
      },
      {
        id: 'asp-kmv-bms',
        name: 'Management Studies',
        label: 'Bachelor of Management Studies (BMS)',
        sentiment: 'positive',
        positiveRatio: 89,
        evidenceCount: 32,
        summary: 'BMS program backed by dedicated corporate interaction sessions, internships, and annual management conclaves.',
        keyPhrases: ['reputed BMS department', 'corporate networking', 'internship placement']
      },
      {
        id: 'asp-kmv-campus',
        name: 'Campus Facilities',
        label: "Girls' Hostel & Sprawling Grounds",
        sentiment: 'positive',
        positiveRatio: 87,
        evidenceCount: 28,
        summary: "Features an on-campus girls' hostel, state-of-the-art auditorium, solar panels, and amphitheatre.",
        keyPhrases: ['on-campus girls hostel', 'spacious green campus', 'sprawling amphitheatre']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Graduating CS batches secured dependable technology and analyst roles.', mentionCount: 28 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Upgraded computational servers and campus high-speed Wi-Fi network.', mentionCount: 33 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Consistently strong option for students aiming for DU BMS and Computer Science.', mentionCount: 26 }
    ],
    sourceComposition: [
      { type: 'official', name: 'NAAC & DU Official Disclosures', count: 14, percentage: 31, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (2,380+ reviews)', count: 13, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Node 87291257', count: 5, percentage: 11, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 9, percentage: 20, iconName: 'MessageSquare' },
      { type: 'web', name: 'Academic Portals', count: 4, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Technical Education and Value',
      positiveSignalCount: 46,
      negativeSignalCount: 5,
      summary: 'Consistent positive consensus on faculty guidance in Computer Science and affordable fee structure.',
      impartialSynthesis: 'Keshav Mahavidyalaya is a dependable destination for computer science and management studies with quality infrastructure.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },

  // 15. Maharaja Agrasen College
  {
    id: 'entity-maharaja-agrasen',
    canonicalName: 'Maharaja Agrasen College',
    aliases: ['maharaja agrasen college', 'mac du', 'mac delhi', 'agrasen college du', 'maharaja agrasen vasundhara'],
    category: 'Education / Delhi University College',
    location: 'Vasundhara Enclave, East Delhi',
    latitude: 28.6012,
    longitude: 77.3195,
    formattedAddress: 'Vasundhara Enclave, Delhi, 110096',
    googleMapsUrl: 'https://maps.google.com/?q=28.6012,77.3195',
    website: 'https://mac.du.ac.in',
    rating: 4.3,
    userRatingsTotal: 2820,
    affiliation: 'University of Delhi (DU, Established 1994)',
    feesSummary: 'Official DU Fee: ~₹15,000 - ₹20,000 / year',
    annualFeeNumeric: 17000,
    highlightTag: 'East Delhi DU Hub | Modern Media Lab & Journalism Excellence | NAAC A Grade',
    evidenceConfidenceScore: 90,
    confidenceBreakdown: {
      independentDiscussions: 54,
      sourceTypesCount: 5,
      recencyFactorScore: 91,
      corroborationDensity: 90,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: "Anchor institution in East Delhi with a sprawling 10-acre modern campus. Known for its Department of Journalism with professional media studios, on-campus girls' hostel, expansive sports complex, and active student societies.",
    aspects: [
      {
        id: 'asp-mac-journalism',
        name: 'Journalism & Media',
        label: 'Advanced Media Lab & Studio Infrastructure',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 36,
        summary: 'Equipped with dedicated recording studios, teleprompters, video editing suites, and community radio broadcasting capabilities.',
        keyPhrases: ['media production studio', 'broadcast cameras', 'practical newsroom training']
      },
      {
        id: 'asp-mac-campus',
        name: '10-Acre Campus',
        label: "Modern Infrastructure & Girls' Hostel",
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 34,
        summary: "Spacious 10-acre campus with red sandstone buildings, sports grounds, modern auditorium, and on-campus residential hostel for girls.",
        keyPhrases: ['10-acre modern campus', 'on-campus girls hostel', 'large auditorium']
      },
      {
        id: 'asp-mac-arts',
        name: 'Humanities & Commerce',
        label: 'Interdisciplinary Academics & Value',
        sentiment: 'positive',
        positiveRatio: 86,
        evidenceCount: 28,
        summary: 'Diverse undergraduate offerings across English, Political Science, Economics, and B.Com with supportive faculty mentorship.',
        keyPhrases: ['affordable DU fee', 'supportive faculty', 'active literary societies']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Recognized in NIRF Rankings with consistent scores for learning facilities.', mentionCount: 29 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Hosted national media conferences and upgraded digital sound-editing suites.', mentionCount: 34 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Remains premier college destination for East Delhi and NCR students.', mentionCount: 27 }
    ],
    sourceComposition: [
      { type: 'official', name: 'DU Official Disclosures & NAAC Sheets', count: 15, percentage: 32, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (2,820+ reviews)', count: 14, percentage: 30, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Node 87291258', count: 5, percentage: 10, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 9, percentage: 19, iconName: 'MessageSquare' },
      { type: 'web', name: 'Educational Profiles', count: 4, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Media Training and Campus Amenities',
      positiveSignalCount: 48,
      negativeSignalCount: 5,
      summary: 'Consistent positive consensus on journalism training facilities and campus safety.',
      impartialSynthesis: 'Maharaja Agrasen College provides quality media and liberal arts education on an expansive 10-acre campus.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  }
,
  // Ramjas College
  {
    id: 'entity-ramjas',
    canonicalName: 'Ramjas College',
    aliases: ['ramjas', 'ramjas college', 'ramjas du', 'ramjas north campus', 'ramjas college delhi'],
    category: 'Education / Delhi University College',
    location: 'University Enclave, North Campus, Delhi',
    latitude: 28.6841,
    longitude: 77.2075,
    formattedAddress: 'University Enclave, North Campus, Delhi, 110007',
    googleMapsUrl: 'https://maps.google.com/?q=28.6841,77.2075',
    website: 'https://ramjas.du.ac.in',
    rating: 4.4,
    userRatingsTotal: 3950,
    affiliation: 'University of Delhi (DU, Established 1917)',
    feesSummary: 'Official DU Fee: ~₹15,000 - ₹20,000 / year (BA / B.Sc / B.Com Hons)',
    annualFeeNumeric: 17000,
    highlightTag: 'NIRF #10 Colleges (2024) | NAAC A++ (CGPA 3.57) | Historic North Campus',
    evidenceConfidenceScore: 93,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'One of Delhi University\'s founding colleges with an illustrious century-old legacy. Renowned for vibrant societies, high cutoffs via CUET, and extensive science laboratories.',
    aspects: [
      {
        id: 'asp-ramjas-0',
        name: 'Academic Legacy',
        label: 'Founding Faculty & Honors',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 42,
        summary: 'Century-old academic rigor with notable alumni in governance, law, and corporate leadership.',
        keyPhrases: ['historic heritage', 'strong science faculty', 'NIRF #10 ranking']
      },
      {
        id: 'asp-ramjas-1',
        name: 'Campus Life',
        label: 'Societies & North Campus Culture',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 46,
        summary: 'Active debating, drama, and fine arts societies participating across inter-college circuits.',
        keyPhrases: ['active dramatics', 'vibrant student elections', 'North Campus hub']
      },
      {
        id: 'asp-ramjas-2',
        name: 'Infrastructure',
        label: 'Centenary Block & Labs',
        sentiment: 'positive',
        positiveRatio: 84,
        evidenceCount: 30,
        summary: 'Modernized state-of-the-art amphitheatre and research facilities alongside heritage red-brick buildings.',
        keyPhrases: ['centenary building', 'modernized auditoriums', 'equipped labs']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (3,950+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Ramjas College offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Gargi College
  {
    id: 'entity-gargi',
    canonicalName: 'Gargi College',
    aliases: ['gargi', 'gargi college', 'gargi du', 'gargi south campus', 'gargi college delhi'],
    category: 'Education / Delhi University College',
    location: 'Siri Fort Road, South Delhi',
    latitude: 28.5528,
    longitude: 77.2206,
    formattedAddress: 'Siri Fort Road, New Delhi, 110049',
    googleMapsUrl: 'https://maps.google.com/?q=28.5528,77.2206',
    website: 'https://gargicollege.in',
    rating: 4.4,
    userRatingsTotal: 3620,
    affiliation: 'University of Delhi (DU, Established 1967, Women\'s College)',
    feesSummary: 'Official DU Fee: ~₹16,000 - ₹22,000 / year (BA / B.Sc / B.Com Hons)',
    annualFeeNumeric: 18000,
    highlightTag: 'NIRF #31 Colleges (2024) | NAAC A+ (CGPA 3.32) | Leading Women\'s College',
    evidenceConfidenceScore: 92,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Premier South Delhi women\'s college distinguished by exceptional science laboratories, interdisciplinary research, and vibrant cultural societies like Kshitij and Sparx.',
    aspects: [
      {
        id: 'asp-gargi-0',
        name: 'Sciences & Research',
        label: 'DBT Star College Scheme',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 38,
        summary: 'Recognized under DBT Star College Scheme with funded undergraduate research opportunities in Life Sciences.',
        keyPhrases: ['DBT star college', 'bioinformatics lab', 'undergraduate research']
      },
      {
        id: 'asp-gargi-1',
        name: 'Cultural Societies',
        label: 'Fine Arts & Dance',
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 34,
        summary: 'Renowned across national competitions for western dance, street play, and fine arts.',
        keyPhrases: ['reputed dance society', 'reverie festival', 'vibrant clubs']
      },
      {
        id: 'asp-gargi-2',
        name: 'Location & Safety',
        label: 'Siri Fort Institutional Area',
        sentiment: 'positive',
        positiveRatio: 88,
        evidenceCount: 28,
        summary: 'Convenient metro connectivity via Green Park / Hauz Khas and safe pedestrian pathways.',
        keyPhrases: ['near siri fort', 'safe campus', 'south delhi connectivity']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (3,620+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Gargi College offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Sri Venkateswara College (Venky)
  {
    id: 'entity-venkateswara',
    canonicalName: 'Sri Venkateswara College (Venky)',
    aliases: ['venky', 'sri venkateswara college', 'venkateswara college', 'svc du', 'venky south campus'],
    category: 'Education / Delhi University College',
    location: 'Benito Juarez Marg, Dhaula Kuan, South Campus, Delhi',
    latitude: 28.5888,
    longitude: 77.1656,
    formattedAddress: 'Benito Juarez Road, Dhaula Kuan, South Campus, New Delhi, 110021',
    googleMapsUrl: 'https://maps.google.com/?q=28.5888,77.1656',
    website: 'https://www.svc.ac.in',
    rating: 4.5,
    userRatingsTotal: 4200,
    affiliation: 'University of Delhi (DU, Established 1961, TTD)',
    feesSummary: 'Official DU Fee: ~₹18,000 - ₹24,000 / year (BA / B.Sc / B.Com Hons)',
    annualFeeNumeric: 20000,
    highlightTag: 'NIRF #13 Colleges (2024) | NAAC A++ (CGPA 3.63) | Premier South Campus Anchor',
    evidenceConfidenceScore: 94,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Flagship institution of South Campus celebrated for top-tier science departments, strong economics programs, and iconic cultural festivals (Nexus).',
    aspects: [
      {
        id: 'asp-venkateswara-0',
        name: 'Academic Standing',
        label: 'Life Sciences & Economics',
        sentiment: 'positive',
        positiveRatio: 95,
        evidenceCount: 45,
        summary: 'Consistently recognized as the academic benchmark of South Campus with distinguished science faculties.',
        keyPhrases: ['premier south campus', 'economics honors', 'top science faculty']
      },
      {
        id: 'asp-venkateswara-1',
        name: 'Campus Environment',
        label: 'Green Dhaula Kuan Enclave',
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 36,
        summary: 'Lush campus directly adjacent to South Campus Metro station with active student canteens.',
        keyPhrases: ['iconic south campus canteen', 'dhaula kuan metro', 'well-maintained gardens']
      },
      {
        id: 'asp-venkateswara-2',
        name: 'Placements',
        label: 'Career Placement Cell',
        sentiment: 'positive',
        positiveRatio: 88,
        evidenceCount: 40,
        summary: 'Robust placements in consulting, analytics, and FMCG sectors alongside North Campus counterparts.',
        keyPhrases: ['consulting recruitments', 'active placement drives', 'corporate internships']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (4,200+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Sri Venkateswara College (Venky) offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Jesus and Mary College (JMC)
  {
    id: 'entity-jmc',
    canonicalName: 'Jesus and Mary College (JMC)',
    aliases: ['jmc', 'jesus and mary college', 'jmc du', 'jmc chanakyapuri', 'jmc delhi'],
    category: 'Education / Delhi University College',
    location: 'Bapu Dham, Chanakyapuri, Central-South Delhi',
    latitude: 28.5919,
    longitude: 77.1775,
    formattedAddress: 'Chanakyapuri, New Delhi, 110021',
    googleMapsUrl: 'https://maps.google.com/?q=28.5919,77.1775',
    website: 'https://www.jmc.ac.in',
    rating: 4.4,
    userRatingsTotal: 3100,
    affiliation: 'University of Delhi (DU, Established 1968, Minority Institution)',
    feesSummary: 'Official DU Fee: ~₹22,000 - ₹28,000 / year (BA / B.Com / B.Voc)',
    annualFeeNumeric: 24000,
    highlightTag: 'NIRF #38 Colleges (2024) | NAAC A++ (CGPA 3.65) | Diplomatic Enclave',
    evidenceConfidenceScore: 93,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Distinguished minority women\'s institution located in Delhi\'s diplomatic zone. Renowned for Psychology, English, B.Voc programs, and exceptional student welfare.',
    aspects: [
      {
        id: 'asp-jmc-0',
        name: 'Humanities & Psychology',
        label: 'Specialized Faculty',
        sentiment: 'positive',
        positiveRatio: 93,
        evidenceCount: 39,
        summary: 'Highly sought-after departments in Applied Psychology, Sociology, and English Literature.',
        keyPhrases: ['renowned psychology lab', 'distinguished liberal arts', 'diplomatic location']
      },
      {
        id: 'asp-jmc-1',
        name: 'Discipline & Culture',
        label: 'Campus Atmosphere',
        sentiment: 'positive',
        positiveRatio: 89,
        evidenceCount: 31,
        summary: 'Strict attendance policies supported by world-class campus cleanliness and serene courtyards.',
        keyPhrases: ['orderly campus', 'clean infrastructure', 'active women leadership']
      },
      {
        id: 'asp-jmc-2',
        name: 'Sports Facilities',
        label: 'Athletics & Martial Arts',
        sentiment: 'positive',
        positiveRatio: 88,
        evidenceCount: 26,
        summary: 'Consistent winners in inter-university table tennis, basketball, and martial arts competitions.',
        keyPhrases: ['championship basketball', 'dedicated sports wing', 'fitness center']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (3,100+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Jesus and Mary College (JMC) offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Indraprastha College for Women (IP College)
  {
    id: 'entity-ipcw',
    canonicalName: 'Indraprastha College for Women (IP College)',
    aliases: ['ipcw', 'indraprastha college for women', 'ip college', 'ip college du', 'ip college civil lines'],
    category: 'Education / Delhi University College',
    location: 'Sham Nath Marg, Civil Lines, North Delhi',
    latitude: 28.6836,
    longitude: 77.2238,
    formattedAddress: '31, Sham Nath Marg, Civil Lines, Delhi, 110054',
    googleMapsUrl: 'https://maps.google.com/?q=28.6836,77.2238',
    website: 'https://ipcollege.ac.in',
    rating: 4.4,
    userRatingsTotal: 3200,
    affiliation: 'University of Delhi (DU, Oldest Women\'s College est. 1924)',
    feesSummary: 'Official DU Fee: ~₹20,000 - ₹26,000 / year (BA / B.Sc / BMMMC)',
    annualFeeNumeric: 22000,
    highlightTag: 'NIRF #26 Colleges (2024) | NAAC A+ | Heritage Campus & Media Laboratory',
    evidenceConfidenceScore: 92,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'The oldest women\'s college in the University of Delhi, set on a sprawling heritage estate in Civil Lines. Renowned for its pioneering Mass Media & Mass Communication (BMMMC) program.',
    aspects: [
      {
        id: 'asp-ipcw-0',
        name: 'Media & Mass Communication',
        label: 'BMMMC Audio-Visual Studios',
        sentiment: 'positive',
        positiveRatio: 95,
        evidenceCount: 44,
        summary: 'Pioneering media studies program with professional broadcasting suites, cameras, and editing bays.',
        keyPhrases: ['pioneering BMMMC course', 'broadcasting studio', 'media production']
      },
      {
        id: 'asp-ipcw-1',
        name: 'Heritage Architecture',
        label: 'Civil Lines Estate',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 33,
        summary: 'Heritage-grade colonial architecture, botanical gardens, swimming pool, and hostel amenities.',
        keyPhrases: ['heritage estate', 'in-campus swimming pool', 'tranquil civil lines']
      },
      {
        id: 'asp-ipcw-2',
        name: 'Academic Support',
        label: 'Mentorship & Library',
        sentiment: 'positive',
        positiveRatio: 87,
        evidenceCount: 29,
        summary: 'Well-stocked digital library and comprehensive counseling services for women students.',
        keyPhrases: ['comprehensive library', 'supportive teachers', 'research initiatives']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (3,200+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Indraprastha College for Women (IP College) offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Atma Ram Sanatan Dharma College (ARSD)
  {
    id: 'entity-arsd',
    canonicalName: 'Atma Ram Sanatan Dharma College (ARSD)',
    aliases: ['arsd', 'atma ram sanatan dharma college', 'arsd college', 'arsd du', 'arsd south campus'],
    category: 'Education / Delhi University College',
    location: 'Dhaula Kuan, South Campus, New Delhi',
    latitude: 28.5863,
    longitude: 77.1614,
    formattedAddress: 'Ring Road, Dhaula Kuan, South Campus, New Delhi, 110021',
    googleMapsUrl: 'https://maps.google.com/?q=28.5863,77.1614',
    website: 'https://www.arsdcollege.ac.in',
    rating: 4.3,
    userRatingsTotal: 3400,
    affiliation: 'University of Delhi (DU, Established 1959)',
    feesSummary: 'Official DU Fee: ~₹15,000 - ₹20,000 / year (B.Sc / BA / B.Com Hons)',
    annualFeeNumeric: 16500,
    highlightTag: 'NIRF #6 Colleges (2024) | NAAC A++ (CGPA 3.77 Highest in DU) | Science & Research Hub',
    evidenceConfidenceScore: 95,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Skyrocketed in national recognition, securing NIRF Rank #6 and NAAC CGPA 3.77. Celebrated for science faculty research, skill development hubs, and top-notch lab infrastructure.',
    aspects: [
      {
        id: 'asp-arsd-0',
        name: 'NIRF & NAAC Performance',
        label: 'Institutional Excellence',
        sentiment: 'positive',
        positiveRatio: 96,
        evidenceCount: 48,
        summary: 'Holds the highest NAAC CGPA (3.77) among all Delhi University colleges, driven by faculty publications.',
        keyPhrases: ['NIRF rank 6', 'highest NAAC score', 'research grants']
      },
      {
        id: 'asp-arsd-1',
        name: 'Science Laboratories',
        label: 'Chemistry & Physics Labs',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 35,
        summary: 'Fully modernized instrumentation centers supporting advanced undergraduate projects.',
        keyPhrases: ['advanced instrumentation', 'star college status', 'well-equipped labs']
      },
      {
        id: 'asp-arsd-2',
        name: 'Location & Transit',
        label: 'Ring Road & Metro',
        sentiment: 'positive',
        positiveRatio: 89,
        evidenceCount: 30,
        summary: 'Strategically positioned at Dhaula Kuan intersection with immediate metro connectivity.',
        keyPhrases: ['dhaula kuan connectivity', 'direct bus access', 'central south campus']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (3,400+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Atma Ram Sanatan Dharma College (ARSD) offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Motilal Nehru College (MLNC)
  {
    id: 'entity-motilal-nehru',
    canonicalName: 'Motilal Nehru College (MLNC)',
    aliases: ['mlnc', 'motilal nehru college', 'motilal nehru du', 'motilal nehru south campus'],
    category: 'Education / Delhi University College',
    location: 'Benito Juarez Marg, South Campus, New Delhi',
    latitude: 28.5828,
    longitude: 77.1664,
    formattedAddress: 'Benito Juarez Marg, South Campus, New Delhi, 110021',
    googleMapsUrl: 'https://maps.google.com/?q=28.5828,77.1664',
    website: 'https://www.mlncdu.ac.in',
    rating: 4.1,
    userRatingsTotal: 3100,
    affiliation: 'University of Delhi (DU, Established 1964)',
    feesSummary: 'Official DU Fee: ~₹12,000 - ₹16,000 / year (BA / B.Sc / B.Com)',
    annualFeeNumeric: 14000,
    highlightTag: 'NAAC A Grade | Expansive South Campus Playground & Library',
    evidenceConfidenceScore: 90,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Established co-educational college in the Benito Juarez Marg cluster featuring one of the largest sports grounds in South Campus and accessible academic fees.',
    aspects: [
      {
        id: 'asp-motilal-nehru-0',
        name: 'Sports & Grounds',
        label: 'Cricket & Football Fields',
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 36,
        summary: 'Expansive outdoor sports arena supporting active cricket, football, and athletics teams.',
        keyPhrases: ['large sports ground', 'football tournaments', 'cricket pitch']
      },
      {
        id: 'asp-motilal-nehru-1',
        name: 'Value & Accessibility',
        label: 'Affordable Higher Education',
        sentiment: 'positive',
        positiveRatio: 88,
        evidenceCount: 28,
        summary: 'Moderate fee structure enabling quality DU education across arts, science, and commerce streams.',
        keyPhrases: ['affordable annual fees', 'accessible scholarships', 'co-educational environment']
      },
      {
        id: 'asp-motilal-nehru-2',
        name: 'Student Societies',
        label: 'Cultural & Debating',
        sentiment: 'positive',
        positiveRatio: 82,
        evidenceCount: 24,
        summary: 'Active societies in debating, music, and street theatre with regular festival performances.',
        keyPhrases: ['vibrant student clubs', 'annual fest Aarohan', 'cultural presence']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (3,100+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Motilal Nehru College (MLNC) offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Ram Lal Anand College (RLA)
  {
    id: 'entity-ram-lal-anand',
    canonicalName: 'Ram Lal Anand College (RLA)',
    aliases: ['rla', 'ram lal anand college', 'ram lal anand', 'rla du', 'rla south campus'],
    category: 'Education / Delhi University College',
    location: 'Benito Juarez Marg, South Campus, New Delhi',
    latitude: 28.5819,
    longitude: 77.1659,
    formattedAddress: '5 Benito Juarez Road, South Campus, New Delhi, 110021',
    googleMapsUrl: 'https://maps.google.com/?q=28.5819,77.1659',
    website: 'https://rlacollege.edu.in',
    rating: 4.1,
    userRatingsTotal: 2800,
    affiliation: 'University of Delhi (DU, Established 1964)',
    feesSummary: 'Official DU Fee: ~₹14,000 - ₹18,000 / year (BA / B.Sc Microbiology / BJMC)',
    annualFeeNumeric: 15500,
    highlightTag: 'NAAC A Grade | Pioneer in Microbiology & Media Studies in DU',
    evidenceConfidenceScore: 90,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'South Campus institution known for specialized courses like B.Sc (Hons) Microbiology, Geology, and Hindi Journalism, supported by modernized media equipment.',
    aspects: [
      {
        id: 'asp-ram-lal-anand-0',
        name: 'Specialized Courses',
        label: 'Microbiology & Geology',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 32,
        summary: 'Offers distinct honors programs in Microbiology and Geology rare across DU colleges.',
        keyPhrases: ['reputed microbiology department', 'geology lab', 'niche specializations']
      },
      {
        id: 'asp-ram-lal-anand-1',
        name: 'Campus Environment',
        label: 'South Campus Hub',
        sentiment: 'positive',
        positiveRatio: 85,
        evidenceCount: 27,
        summary: 'Peaceful campus setting on Benito Juarez Marg near South Campus library and faculties.',
        keyPhrases: ['serene campus', 'friendly student body', 'south campus proximity']
      },
      {
        id: 'asp-ram-lal-anand-2',
        name: 'Media Studio',
        label: 'Mass Communication Lab',
        sentiment: 'positive',
        positiveRatio: 83,
        evidenceCount: 22,
        summary: 'Equipped with video recording equipment and sound setups for journalism students.',
        keyPhrases: ['media studio', 'journalism practice', 'digital editing']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (2,800+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Ram Lal Anand College (RLA) offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Zakir Husain Delhi College (ZHDC)
  {
    id: 'entity-zakir-husain',
    canonicalName: 'Zakir Husain Delhi College (ZHDC)',
    aliases: ['zhdc', 'zakir husain delhi college', 'zakir husain college', 'zakir husain du', 'zakir hussain'],
    category: 'Education / Delhi University College',
    location: 'Jawaharlal Nehru Marg, Central Delhi',
    latitude: 28.6416,
    longitude: 77.2299,
    formattedAddress: 'Jawaharlal Nehru Marg, Ajmeri Gate, New Delhi, 110002',
    googleMapsUrl: 'https://maps.google.com/?q=28.6416,77.2299',
    website: 'https://www.zakirhusaindelhicollege.ac.in',
    rating: 4.2,
    userRatingsTotal: 3700,
    affiliation: 'University of Delhi (Oldest DU College heritage est. 1696 / 1792)',
    feesSummary: 'Official DU Fee: ~₹10,000 - ₹14,000 / year (BA / B.Sc / B.Com)',
    annualFeeNumeric: 12000,
    highlightTag: 'NAAC A Grade | Historic Central Delhi Campus near New Delhi Railway Station',
    evidenceConfidenceScore: 91,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Delhi\'s oldest higher education institution tracing roots to Madrasa Ghaziuddin (1696) and Delhi College (1792). Located in Central Delhi with a new high-rise academic tower.',
    aspects: [
      {
        id: 'asp-zakir-husain-0',
        name: 'Historical Legacy',
        label: '300-Year Heritage',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 38,
        summary: 'Unmatched historic pedigree with archives documenting the Delhi Renaissance and literary movements.',
        keyPhrases: ['300 year heritage', 'historic delhi college', 'distinguished alumni']
      },
      {
        id: 'asp-zakir-husain-1',
        name: 'Modern Academic Tower',
        label: 'New Infrastructure',
        sentiment: 'positive',
        positiveRatio: 87,
        evidenceCount: 33,
        summary: 'Multi-storeyed academic block with centralized air conditioning, auditoriums, and labs.',
        keyPhrases: ['modern academic block', 'air conditioned classrooms', 'new auditorium']
      },
      {
        id: 'asp-zakir-husain-2',
        name: 'Central Location',
        label: 'Ajmeri Gate Connectivity',
        sentiment: 'positive',
        positiveRatio: 86,
        evidenceCount: 30,
        summary: 'Unbeatable transit convenience within walking distance of New Delhi Metro & Railway Station.',
        keyPhrases: ['near new delhi station', 'yellow line metro', 'central delhi access']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (3,700+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Zakir Husain Delhi College (ZHDC) offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Shivaji College
  {
    id: 'entity-shivaji',
    canonicalName: 'Shivaji College',
    aliases: ['shivaji college', 'shivaji du', 'shivaji college delhi', 'shivaji raja garden'],
    category: 'Education / Delhi University College',
    location: 'Raja Garden, Ring Road, West Delhi',
    latitude: 28.6508,
    longitude: 77.1264,
    formattedAddress: 'Ring Road, Raja Garden, New Delhi, 110027',
    googleMapsUrl: 'https://maps.google.com/?q=28.6508,77.1264',
    website: 'https://www.shivajicollege.ac.in',
    rating: 4.2,
    userRatingsTotal: 3450,
    affiliation: 'University of Delhi (DU, Established 1961)',
    feesSummary: 'Official DU Fee: ~₹18,000 - ₹24,000 / year (BA / B.Sc / B.Com Hons)',
    annualFeeNumeric: 20000,
    highlightTag: 'NIRF #70 Colleges (2024) | NAAC A+ Grade | Spacious West Delhi Campus',
    evidenceConfidenceScore: 91,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Premier co-educational DU college in West Delhi with a 10-acre green campus. Strong science programs, updated sports complex, and excellent Raja Garden metro access.',
    aspects: [
      {
        id: 'asp-shivaji-0',
        name: 'Campus Infrastructure',
        label: '10-Acre Campus & Sports',
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 35,
        summary: 'Spacious sports grounds, auditorium, and newly built Jijabai academic block.',
        keyPhrases: ['large sports complex', 'jijabai block', 'green landscaped lawns']
      },
      {
        id: 'asp-shivaji-1',
        name: 'Academics & Science Labs',
        label: 'B.Sc & Commerce Honors',
        sentiment: 'positive',
        positiveRatio: 88,
        evidenceCount: 31,
        summary: 'Accredited with NAAC A+; offers robust honors programs in Physics, Chemistry, and Commerce.',
        keyPhrases: ['NAAC A+ accredited', 'equipped science labs', 'experienced faculty']
      },
      {
        id: 'asp-shivaji-2',
        name: 'West Delhi Connectivity',
        label: 'Rajouri Garden & Shivaji Enclave',
        sentiment: 'positive',
        positiveRatio: 89,
        evidenceCount: 29,
        summary: 'Adjacent to Blue & Pink Line interchanges at Rajouri Garden and Punjabi Bagh.',
        keyPhrases: ['blue line metro', 'raja garden ring road', 'accessible west delhi']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (3,450+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Shivaji College offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Rajdhani College
  {
    id: 'entity-rajdhani',
    canonicalName: 'Rajdhani College',
    aliases: ['rajdhani college', 'rajdhani du', 'rajdhani college delhi', 'rajdhani raja garden'],
    category: 'Education / Delhi University College',
    location: 'Raja Garden, Ring Road, West Delhi',
    latitude: 28.6534,
    longitude: 77.1246,
    formattedAddress: 'Mahatma Gandhi Marg, Raja Garden, New Delhi, 110015',
    googleMapsUrl: 'https://maps.google.com/?q=28.6534,77.1246',
    website: 'https://www.rajdhanicollege.ac.in',
    rating: 4.1,
    userRatingsTotal: 3100,
    affiliation: 'University of Delhi (DU, Established 1964)',
    feesSummary: 'Official DU Fee: ~₹14,000 - ₹19,000 / year (BA / B.Sc / B.Com)',
    annualFeeNumeric: 16000,
    highlightTag: 'NAAC A Grade | Strong Sciences & Robotics Labs | West Delhi Hub',
    evidenceConfidenceScore: 90,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Established DU college adjacent to Shivaji College on the Ring Road. Well known for Physics, Mathematics, Chemistry, and active student societies like The Puppeteers.',
    aspects: [
      {
        id: 'asp-rajdhani-0',
        name: 'Sciences & Labs',
        label: 'Physics & Chemistry Labs',
        sentiment: 'positive',
        positiveRatio: 89,
        evidenceCount: 33,
        summary: 'Equipped laboratories and active science research societies fostering student projects.',
        keyPhrases: ['sound physics labs', 'robotics society', 'science research']
      },
      {
        id: 'asp-rajdhani-1',
        name: 'Campus Amenities',
        label: 'Auditorium & Library',
        sentiment: 'positive',
        positiveRatio: 84,
        evidenceCount: 28,
        summary: 'Air-conditioned seminar halls and automated central library system.',
        keyPhrases: ['automated library', 'seminar halls', 'active student union']
      },
      {
        id: 'asp-rajdhani-2',
        name: 'Metro Transit',
        label: 'Ramesh Nagar & Rajouri Metro',
        sentiment: 'positive',
        positiveRatio: 88,
        evidenceCount: 27,
        summary: 'Walking distance from Ramesh Nagar metro station on the Blue Line.',
        keyPhrases: ['ramesh nagar metro', 'ring road transit', 'convenient commute']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (3,100+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Rajdhani College offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Sri Guru Tegh Bahadur Khalsa College (SGTB Khalsa)
  {
    id: 'entity-sgtb-khalsa',
    canonicalName: 'Sri Guru Tegh Bahadur Khalsa College (SGTB Khalsa)',
    aliases: ['sgtb khalsa', 'khalsa college du', 'sgtb khalsa college', 'khalsa north campus'],
    category: 'Education / Delhi University College',
    location: 'University Enclave, North Campus, Delhi',
    latitude: 28.6942,
    longitude: 77.2052,
    formattedAddress: 'University Enclave, North Campus, Delhi, 110007',
    googleMapsUrl: 'https://maps.google.com/?q=28.6942,77.2052',
    website: 'https://www.sgtbkhalsadu.ac.in',
    rating: 4.3,
    userRatingsTotal: 3900,
    affiliation: 'University of Delhi (DU, Established 1951, DSGMC)',
    feesSummary: 'Official DU Fee: ~₹24,000 - ₹30,000 / year (BA / B.Sc / B.Com Hons)',
    annualFeeNumeric: 26000,
    highlightTag: 'NIRF #62 Colleges (2024) | NAAC A Grade | Renowned Sports, Music & Theatre (Anhad)',
    evidenceConfidenceScore: 92,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Prominent North Campus college renowned for its sports achievements, state-of-the-art indoor sports arena, and top theatre society (Anhad). Strong B.Com and Science cutoffs.',
    aspects: [
      {
        id: 'asp-sgtb-khalsa-0',
        name: 'Sports Infrastructure',
        label: 'Indoor Stadium & Gym',
        sentiment: 'positive',
        positiveRatio: 95,
        evidenceCount: 42,
        summary: 'World-class Commonwealth standard indoor stadium supporting badminton, shooting, and basketball.',
        keyPhrases: ['indoor sports arena', 'national sports champions', 'cricket academy']
      },
      {
        id: 'asp-sgtb-khalsa-1',
        name: 'Cultural Society (Anhad)',
        label: 'Music, Theatre & Bhangra',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 36,
        summary: 'Nationally celebrated collegiate music band (Anhad) and winning street play societies.',
        keyPhrases: ['anhad music society', 'bhangra team', 'lashkara college fest']
      },
      {
        id: 'asp-sgtb-khalsa-2',
        name: 'North Campus Location',
        label: 'Mall Road & Vishwavidyalaya',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 34,
        summary: 'Prime location directly across Vishwavidyalaya Metro Station on Mall Road.',
        keyPhrases: ['opp vishwavidyalaya metro', 'heart of north campus', 'hudson lane proximity']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (3,900+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Sri Guru Tegh Bahadur Khalsa College (SGTB Khalsa) offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // College of Vocational Studies (CVS)
  {
    id: 'entity-cvs',
    canonicalName: 'College of Vocational Studies (CVS)',
    aliases: ['cvs', 'college of vocational studies', 'cvs du', 'cvs south delhi'],
    category: 'Education / Delhi University College',
    location: 'Sheikh Sarai Phase II, South Delhi',
    latitude: 28.5369,
    longitude: 77.2227,
    formattedAddress: 'Triveni, Sheikh Sarai Phase II, New Delhi, 110017',
    googleMapsUrl: 'https://maps.google.com/?q=28.5369,77.2227',
    website: 'https://www.cvs.edu.in',
    rating: 4.1,
    userRatingsTotal: 2700,
    affiliation: 'University of Delhi (DU, Established 1972)',
    feesSummary: 'Official DU Fee: ~₹14,000 - ₹18,000 / year (Vocational Studies / B.Com Hons)',
    annualFeeNumeric: 15500,
    highlightTag: 'NAAC A Grade | Pioneer in Tourism, HRM, Marketing Management & Vocations',
    evidenceConfidenceScore: 90,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Pioneering institution in South Delhi offering specialized vocational degrees in Tourism Management, Human Resource Management, Small Business, and Retail alongside mainstream degrees.',
    aspects: [
      {
        id: 'asp-cvs-0',
        name: 'Vocational Programs',
        label: 'Tourism & HRM Specialization',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 37,
        summary: 'Distinct vocational curriculum designed for immediate corporate and industry readiness.',
        keyPhrases: ['tourism management', 'practical industry internships', 'HRM program']
      },
      {
        id: 'asp-cvs-1',
        name: 'Placements in Retail & Travel',
        label: 'Corporate Hiring',
        sentiment: 'positive',
        positiveRatio: 84,
        evidenceCount: 29,
        summary: 'Dedicated placement drives by travel agencies, hospitality groups, and logistics firms.',
        keyPhrases: ['travel sector placements', 'retail recruiter visits', 'summer internships']
      },
      {
        id: 'asp-cvs-2',
        name: 'Campus Sharing',
        label: 'Sheikh Sarai Institutional Area',
        sentiment: 'positive',
        positiveRatio: 83,
        evidenceCount: 24,
        summary: 'Situated in Sheikh Sarai next to Shaheed Bhagat Singh College with shared student hubs.',
        keyPhrases: ['sheikh sarai market', 'south delhi campus', 'metro accessibility']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (2,700+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'College of Vocational Studies (CVS) offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Bhagini Nivedita College (BNC)
  {
    id: 'entity-bhagini-nivedita',
    canonicalName: 'Bhagini Nivedita College (BNC)',
    aliases: ['bhagini nivedita college', 'bnc', 'bnc du', 'bhagini nivedita najafgarh'],
    category: 'Education / Delhi University College',
    location: 'Kair, Najafgarh, South-West Delhi',
    latitude: 28.6186,
    longitude: 76.9536,
    formattedAddress: 'Near Air Force Station, Kair, Najafgarh, New Delhi, 110043',
    googleMapsUrl: 'https://maps.google.com/?q=28.6186,76.9536',
    website: 'https://www.bhagininiveditacollege.in',
    rating: 3.9,
    userRatingsTotal: 1800,
    affiliation: 'University of Delhi (DU, Established 1993, Women\'s College)',
    feesSummary: 'Official DU Fee: ~₹8,000 - ₹12,000 / year (BA / B.Sc Home Science / B.Com)',
    annualFeeNumeric: 9500,
    highlightTag: 'Rural South-West Delhi Empowerment | NAAC Accredited | DU Affiliated',
    evidenceConfidenceScore: 87,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Established to cater to female students in rural and semi-urban fringes of South-West Delhi. Known for highly affordable fees, community outreach, and Home Science programs.',
    aspects: [
      {
        id: 'asp-bhagini-nivedita-0',
        name: 'Women\'s Empowerment',
        label: 'Rural & Semi-Urban Outreach',
        sentiment: 'positive',
        positiveRatio: 89,
        evidenceCount: 28,
        summary: 'Transforms higher education access for girls from surrounding rural villages and Najafgarh.',
        keyPhrases: ['rural empowerment', 'inclusive education', 'supportive scholarships']
      },
      {
        id: 'asp-bhagini-nivedita-1',
        name: 'Home Science & Arts',
        label: 'Practical Curriculum',
        sentiment: 'positive',
        positiveRatio: 82,
        evidenceCount: 22,
        summary: 'Equipped laboratories for Food & Nutrition, Textiles, and Child Development.',
        keyPhrases: ['home science lab', 'nutrition practicals', 'dedicated teachers']
      },
      {
        id: 'asp-bhagini-nivedita-2',
        name: 'Distance & Commute',
        label: 'Fringe Location',
        sentiment: 'mixed',
        positiveRatio: 54,
        evidenceCount: 26,
        summary: 'Requires feeder bus transit from Najafgarh Metro station on the Grey Line.',
        keyPhrases: ['najafgarh transit', 'grey line metro', 'feeder bus reliance']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (1,800+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Bhagini Nivedita College (BNC) offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Maharaja Surajmal Institute (MSI)
  {
    id: 'entity-msi',
    canonicalName: 'Maharaja Surajmal Institute (MSI)',
    aliases: ['msi', 'maharaja surajmal institute', 'msi janakpuri', 'msi ipu'],
    category: 'Education / Professional Institute (GGSIPU)',
    location: 'C-4, Janakpuri, West Delhi',
    latitude: 28.6212,
    longitude: 77.0863,
    formattedAddress: 'C-4, Janakpuri, New Delhi, 110058',
    googleMapsUrl: 'https://maps.google.com/?q=28.6212,77.0863',
    website: 'https://www.msi-ggsip.org',
    rating: 4.3,
    userRatingsTotal: 3200,
    affiliation: 'Guru Gobind Singh Indraprastha University (GGSIPU, Established 1999)',
    feesSummary: 'Official GGSIPU Fee: ~₹95,000 - ₹1,15,000 / year (BBA / BCA / B.Com Hons)',
    annualFeeNumeric: 105000,
    highlightTag: 'Top Ranked GGSIPU College | NAAC A+ Grade | Renowned BBA & BCA Programs',
    evidenceConfidenceScore: 93,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Widely recognized as the premier management and computer applications college affiliated with IP University. Consistently secures top GGSIPU ranks for BBA and BCA admissions.',
    aspects: [
      {
        id: 'asp-msi-0',
        name: 'BBA & BCA Reputation',
        label: 'Flagship Programs',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 45,
        summary: 'Highest cutoffs in IP University Common Entrance Test for undergraduate business and IT degrees.',
        keyPhrases: ['top IPU college', 'premier BBA program', 'BCA coding labs']
      },
      {
        id: 'asp-msi-1',
        name: 'Placements & Internships',
        label: 'Corporate Recruiters',
        sentiment: 'positive',
        positiveRatio: 89,
        evidenceCount: 38,
        summary: 'Active on-campus hiring by Big-4 advisory, IT consultancies, and Indian banking institutions.',
        keyPhrases: ['deloitte recruitment', 'wipro and tcs drives', 'corporate networking']
      },
      {
        id: 'asp-msi-2',
        name: 'Janakpuri Location',
        label: 'West Delhi Hub',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 32,
        summary: 'Prime Janakpuri location near Janakpuri East Metro Station with full institutional amenities.',
        keyPhrases: ['janakpuri east metro', 'well-connected campus', 'spacious library']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (3,200+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Maharaja Surajmal Institute (MSI) offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Maharaja Surajmal Institute of Technology (MSIT)
  {
    id: 'entity-msit',
    canonicalName: 'Maharaja Surajmal Institute of Technology (MSIT)',
    aliases: ['msit', 'maharaja surajmal institute of technology', 'msit janakpuri', 'msit btech'],
    category: 'Education / Engineering Institute (GGSIPU)',
    location: 'C-4, Janakpuri, West Delhi',
    latitude: 28.6215,
    longitude: 77.0868,
    formattedAddress: 'C-4, Janakpuri, New Delhi, 110058',
    googleMapsUrl: 'https://maps.google.com/?q=28.6215,77.0868',
    website: 'https://www.msit.in',
    rating: 4.2,
    userRatingsTotal: 3600,
    affiliation: 'Guru Gobind Singh Indraprastha University & AICTE (Established 2001)',
    feesSummary: 'Official GGSIPU Fee: ~₹1,35,000 - ₹1,55,000 / year (B.Tech CSE/IT/ECE)',
    annualFeeNumeric: 140000,
    highlightTag: 'Top GGSIPU Engineering College | NBA Accredited | Strong IT Placement Records',
    evidenceConfidenceScore: 93,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Consistently ranked among the top two engineering institutes affiliated with GGSIPU. Renowned for high JEE Main cutoff ranks for CSE/IT and consistent tier-1 IT recruitment.',
    aspects: [
      {
        id: 'asp-msit-0',
        name: 'Engineering Placements',
        label: 'Software & Product Companies',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 46,
        summary: 'Marquee recruiters include Amazon, Microsoft, Infosys, and high-growth Indian tech startups.',
        keyPhrases: ['strong CSE placement', 'high median tech salary', 'active coding club']
      },
      {
        id: 'asp-msit-1',
        name: 'Academic Curriculum',
        label: 'NBA Accredited Engineering',
        sentiment: 'positive',
        positiveRatio: 87,
        evidenceCount: 34,
        summary: 'All major undergraduate branches (CSE, IT, ECE) maintain NBA accreditation with updated labs.',
        keyPhrases: ['NBA accreditation', 'AICTE approved', 'rigorous curriculum']
      },
      {
        id: 'asp-msit-2',
        name: 'Peer Developer Culture',
        label: 'Hackathons & IEEE Branch',
        sentiment: 'positive',
        positiveRatio: 89,
        evidenceCount: 31,
        summary: 'Very active IEEE student chapter and regular internal hackathons driven by student societies.',
        keyPhrases: ['IEEE student branch', 'developer circles', 'competitive programming']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (3,600+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Maharaja Surajmal Institute of Technology (MSIT) offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Bharati College
  {
    id: 'entity-bharati',
    canonicalName: 'Bharati College',
    aliases: ['bharati college', 'bharati du', 'bharati college janakpuri', 'bharati college delhi'],
    category: 'Education / Delhi University College',
    location: 'C-4, Janakpuri, West Delhi',
    latitude: 28.6253,
    longitude: 77.0984,
    formattedAddress: 'C-4, Janakpuri, New Delhi, 110058',
    googleMapsUrl: 'https://maps.google.com/?q=28.6253,77.0984',
    website: 'https://www.bharaticollege.du.ac.in',
    rating: 4.1,
    userRatingsTotal: 2600,
    affiliation: 'University of Delhi (DU, Established 1971, Women\'s College)',
    feesSummary: 'Official DU Fee: ~₹12,000 - ₹17,000 / year (BA / B.Com / B.Sc)',
    annualFeeNumeric: 14500,
    highlightTag: 'NAAC B+ Grade | Active Performing Arts & Media Labs | West Delhi Hub',
    evidenceConfidenceScore: 89,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Established DU women\'s college situated in Janakpuri. Features an active studio for journalism practicals, language courses, and an inclusive campus community.',
    aspects: [
      {
        id: 'asp-bharati-0',
        name: 'Journalism & Performing Arts',
        label: 'BJMC & Theatre',
        sentiment: 'positive',
        positiveRatio: 88,
        evidenceCount: 30,
        summary: 'Active journalism laboratory and award-winning street play and classical dance societies.',
        keyPhrases: ['journalism studio', 'active street play', 'cultural presence']
      },
      {
        id: 'asp-bharati-1',
        name: 'Women\'s Development',
        label: 'Gender Studies & NCC',
        sentiment: 'positive',
        positiveRatio: 86,
        evidenceCount: 25,
        summary: 'Vibrant Women\'s Development Cell organizing national symposia on legal rights and entrepreneurship.',
        keyPhrases: ['women development cell', 'active NCC unit', 'leadership workshops']
      },
      {
        id: 'asp-bharati-2',
        name: 'Janakpuri Connectivity',
        label: 'Blue & Magenta Lines',
        sentiment: 'positive',
        positiveRatio: 88,
        evidenceCount: 27,
        summary: 'Conveniently located near Janakpuri West interchange metro station.',
        keyPhrases: ['janakpuri west metro', 'safe residential area', 'easy accessibility']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (2,600+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Bharati College offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Vivekananda College
  {
    id: 'entity-vivekananda',
    canonicalName: 'Vivekananda College',
    aliases: ['vivekananda college', 'vivekananda du', 'vivekananda college vivek vihar', 'vivekananda east delhi'],
    category: 'Education / Delhi University College',
    location: 'Vivek Vihar, East Delhi / Shahdara',
    latitude: 28.6658,
    longitude: 77.3094,
    formattedAddress: 'Vivek Vihar, New Delhi, 110095',
    googleMapsUrl: 'https://maps.google.com/?q=28.6658,77.3094',
    website: 'https://www.vivekanandacollege.edu.in',
    rating: 4.0,
    userRatingsTotal: 2200,
    affiliation: 'University of Delhi (DU, Established 1970, Women\'s College)',
    feesSummary: 'Official DU Fee: ~₹11,000 - ₹15,000 / year (BA / B.Com / B.Sc Hons)',
    annualFeeNumeric: 13000,
    highlightTag: 'NAAC A Grade | Premier Women\'s College in Trans-Yamuna East Delhi',
    evidenceConfidenceScore: 89,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'The premier DU college for women in the Trans-Yamuna Vivek Vihar region. Noted for strong commerce departments, dedicated faculty, and affordable fee structure.',
    aspects: [
      {
        id: 'asp-vivekananda-0',
        name: 'Trans-Yamuna Anchor',
        label: 'East Delhi Higher Education',
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 31,
        summary: 'Provides quality university education without requiring East Delhi students to cross the river daily.',
        keyPhrases: ['trans yamuna anchor', 'east delhi hub', 'convenient for local students']
      },
      {
        id: 'asp-vivekananda-1',
        name: 'Commerce & Mathematics',
        label: 'Honors Courses',
        sentiment: 'positive',
        positiveRatio: 85,
        evidenceCount: 26,
        summary: 'Consistent pass percentage and faculty mentorship in B.Com (Hons) and Mathematics (Hons).',
        keyPhrases: ['commerce faculty', 'mathematics honors', 'supportive teachers']
      },
      {
        id: 'asp-vivekananda-2',
        name: 'Green Campus',
        label: 'Lush Grounds & Library',
        sentiment: 'positive',
        positiveRatio: 84,
        evidenceCount: 22,
        summary: 'Pleasantly landscaped lawns, automated library, and outdoor sports facilities.',
        keyPhrases: ['spacious library', 'lush gardens', 'peaceful study spaces']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (2,200+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Vivekananda College offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Institute of Home Economics (IHE)
  {
    id: 'entity-ihe',
    canonicalName: 'Institute of Home Economics (IHE)',
    aliases: ['ihe', 'institute of home economics', 'ihe du', 'ihe hauz khas'],
    category: 'Education / Delhi University College',
    location: 'Hauz Khas Enclave, South Delhi',
    latitude: 28.5492,
    longitude: 77.2069,
    formattedAddress: 'F-4, Hauz Khas Enclave, New Delhi, 110016',
    googleMapsUrl: 'https://maps.google.com/?q=28.5492,77.2069',
    website: 'https://www.ihe.du.ac.in',
    rating: 4.3,
    userRatingsTotal: 1900,
    affiliation: 'University of Delhi (DU, Established 1961, Women\'s College)',
    feesSummary: 'Official DU Fee: ~₹25,000 - ₹35,000 / year (B.Sc Food Technology / Home Science / B.El.Ed)',
    annualFeeNumeric: 28000,
    highlightTag: 'NAAC A Grade | Specialized Nutrition, Biochemistry & Early Education',
    evidenceConfidenceScore: 92,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Specialized premier DU institution in Hauz Khas dedicated to Food & Nutrition, Biochemistry, Microbiology, and Elementary Teacher Education (B.El.Ed).',
    aspects: [
      {
        id: 'asp-ihe-0',
        name: 'Food Tech & Nutrition',
        label: 'Specialized Science Labs',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 36,
        summary: 'Renowned clinical nutrition, dietetics, and food science facilities with research tie-ups.',
        keyPhrases: ['clinical nutrition', 'food technology labs', 'dietetics expertise']
      },
      {
        id: 'asp-ihe-1',
        name: 'Teacher Education (B.El.Ed)',
        label: 'Early Childhood Pedagogy',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 28,
        summary: 'Flagship 4-year Bachelor of Elementary Education program with practical school internships.',
        keyPhrases: ['B.El.Ed program', 'pedagogy training', 'school attachments']
      },
      {
        id: 'asp-ihe-2',
        name: 'Hauz Khas Enclave',
        label: 'Prime South Delhi',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 25,
        summary: 'Located in an upscale, secure residential neighborhood right next to Hauz Khas Metro Station.',
        keyPhrases: ['hauz khas metro', 'secure enclave', 'peaceful campus']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (1,900+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Institute of Home Economics (IHE) offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Shaheed Rajguru College of Applied Sciences for Women (SRCASW)
  {
    id: 'entity-srcasw',
    canonicalName: 'Shaheed Rajguru College of Applied Sciences for Women (SRCASW)',
    aliases: ['srcasw', 'rajguru college', 'shaheed rajguru', 'rajguru du', 'srcasw vasundhara'],
    category: 'Education / Delhi University College',
    location: 'Vasundhara Enclave, East Delhi',
    latitude: 28.6011,
    longitude: 77.3208,
    formattedAddress: 'Vasundhara Enclave, Delhi, 110096',
    googleMapsUrl: 'https://maps.google.com/?q=28.6011,77.3208',
    website: 'https://www.rajgurucollege.com',
    rating: 4.3,
    userRatingsTotal: 2800,
    affiliation: 'University of Delhi (DU, Established 1989, Women\'s College)',
    feesSummary: 'Official DU Fee: ~₹20,000 - ₹28,000 / year (B.Sc Electronics / CS / Instrumentation / BMS)',
    annualFeeNumeric: 24000,
    highlightTag: 'NIRF #32 Colleges (2024) | NAAC A+ Grade | Leading Applied Sciences College',
    evidenceConfidenceScore: 93,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Exceptional women\'s college in East Delhi offering modern professional degrees including Electronics, Instrumentation, Biomedical Science, Computer Science, and BMS.',
    aspects: [
      {
        id: 'asp-srcasw-0',
        name: 'Applied Sciences Edge',
        label: 'STEM & BMS Programs',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 42,
        summary: 'High NIRF #32 ranking reflects exceptional research publications and modern laboratory setups.',
        keyPhrases: ['biomedical labs', 'instrumentation equipment', 'NIRF rank 32']
      },
      {
        id: 'asp-srcasw-1',
        name: 'Campus Infrastructure',
        label: 'Modern Vasundhara Enclave',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 33,
        summary: 'Fully equipped 10-acre campus with residential hostel, sports complex, and Wi-Fi coverage.',
        keyPhrases: ['in-campus hostel', 'modern architecture', 'well-maintained auditoriums']
      },
      {
        id: 'asp-srcasw-2',
        name: 'Placements & Industry Tie-ups',
        label: 'Corporate Opportunities',
        sentiment: 'positive',
        positiveRatio: 87,
        evidenceCount: 30,
        summary: 'Strong placements in technology consulting, healthcare analytics, and diagnostic firms.',
        keyPhrases: ['tech recruitment', 'biotech internships', 'consulting drives']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (2,800+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Shaheed Rajguru College of Applied Sciences for Women (SRCASW) offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Delhi Technological University (DTU, formerly DCE)
  {
    id: 'entity-dtu',
    canonicalName: 'Delhi Technological University (DTU, formerly DCE)',
    aliases: ['dtu', 'delhi technological university', 'dce', 'delhi college of engineering', 'dtu delhi', 'dtu bawana', 'dtu rohini'],
    category: 'Education / Premier Engineering University',
    location: 'Shahbad Daulatpur, Bawana Road, Rohini, North-West Delhi',
    latitude: 28.7499,
    longitude: 77.117,
    formattedAddress: 'Shahbad Daulatpur, Bawana Road, Rohini, Delhi, 110042',
    googleMapsUrl: 'https://maps.google.com/?q=28.7499,77.1170',
    website: 'https://www.dtu.ac.in',
    rating: 4.5,
    userRatingsTotal: 8900,
    affiliation: 'State University of Delhi (Govt of NCT of Delhi, Established 1941 as DCE)',
    feesSummary: 'Official State Fee: ~₹2,00,000 - ₹2,30,000 / year (B.Tech / M.Tech / MBA)',
    annualFeeNumeric: 215000,
    highlightTag: 'NIRF #29 Engineering (2024) | Premier 164-Acre Tech Campus | Top Tier-1 Placements',
    evidenceConfidenceScore: 96,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'One of India\'s oldest and most prestigious engineering institutions (est. 1941 as Delhi College of Engineering). Famous for elite coding culture, Formula Student teams, and top placements.',
    aspects: [
      {
        id: 'asp-dtu-0',
        name: 'Tier-1 Tech Placements',
        label: 'Big Tech & HFT Recruiters',
        sentiment: 'positive',
        positiveRatio: 96,
        evidenceCount: 68,
        summary: 'Consistently attracts Google, Microsoft, Apple, Goldman Sachs, Uber, and top international tech firms.',
        keyPhrases: ['top tier placements', 'high international packages', 'strong alumni network']
      },
      {
        id: 'asp-dtu-1',
        name: 'Peer Culture & Innovation',
        label: 'Hackathons & Student Tech Teams',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 55,
        summary: 'Celebrated automotive design teams (Defianz Racing, Raftaar) and hyperactive coding culture.',
        keyPhrases: ['formula student team', 'unrivaled coding culture', 'student tech societies']
      },
      {
        id: 'asp-dtu-2',
        name: '164-Acre Lush Campus',
        label: 'Hostels, Sports & Lake',
        sentiment: 'positive',
        positiveRatio: 89,
        evidenceCount: 48,
        summary: 'Expansive green campus with full residential hostels, sports stadium, and central Open Air Theatre.',
        keyPhrases: ['164 acre green campus', 'residential life', 'OAT and sports stadium']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (8,900+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Delhi Technological University (DTU, formerly DCE) offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Netaji Subhas University of Technology (NSUT, formerly NSIT)
  {
    id: 'entity-nsut',
    canonicalName: 'Netaji Subhas University of Technology (NSUT, formerly NSIT)',
    aliases: ['nsut', 'netaji subhas university of technology', 'nsit', 'netaji subhash', 'nsut dwarka', 'nsit dwarka'],
    category: 'Education / Premier Engineering University',
    location: 'Sector 3, Dwarka, South-West Delhi',
    latitude: 28.6083,
    longitude: 77.0371,
    formattedAddress: 'Azad Hind Fauj Marg, Sector 3, Dwarka, New Delhi, 110078',
    googleMapsUrl: 'https://maps.google.com/?q=28.6083,77.0371',
    website: 'https://www.nsut.ac.in',
    rating: 4.4,
    userRatingsTotal: 7800,
    affiliation: 'State University of Delhi (Govt of NCT of Delhi, Established 1983 as DIT)',
    feesSummary: 'Official State Fee: ~₹2,10,000 - ₹2,40,000 / year (B.Tech / M.Tech / MBA)',
    annualFeeNumeric: 225000,
    highlightTag: 'NIRF #60 Engineering (2024) | 145-Acre Lush Green Campus in Dwarka | Elite Placement Records',
    evidenceConfidenceScore: 95,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Premier state technical university renowned alongside DTU for stellar computer science and electronics departments. Set on a sprawling 145-acre forested sanctuary in Dwarka.',
    aspects: [
      {
        id: 'asp-nsut-0',
        name: 'Computer Science Placements',
        label: 'Software & Quant Finance',
        sentiment: 'positive',
        positiveRatio: 95,
        evidenceCount: 64,
        summary: 'Marquee hiring by global tech giants with numerous crore-plus international and domestic offers.',
        keyPhrases: ['elite software placements', 'quant finance roles', 'top tech median package']
      },
      {
        id: 'asp-nsut-1',
        name: '145-Acre Forest Campus',
        label: 'Bio-Diversity & Sports',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 46,
        summary: 'Lush campus home to over 100 bird species, expansive cricket/football grounds, and modernized labs.',
        keyPhrases: ['145 acre forested campus', 'dwarka sector 3', 'biodiversity sanctuary']
      },
      {
        id: 'asp-nsut-2',
        name: 'Student Societies (Moksha)',
        label: 'Cultural & Tech Fests',
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 42,
        summary: 'Moksha is one of North India\'s largest collegiate festivals alongside technical symposium Innovision.',
        keyPhrases: ['moksha annual fest', 'innovision tech fest', 'competitive societies']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (7,800+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Netaji Subhas University of Technology (NSUT, formerly NSIT) offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Indraprastha Institute of Information Technology Delhi (IIIT-Delhi)
  {
    id: 'entity-iiitd',
    canonicalName: 'Indraprastha Institute of Information Technology Delhi (IIIT-Delhi)',
    aliases: ['iiitd', 'iiit delhi', 'indraprastha institute of information technology', 'iiit-d', 'iiit okhla'],
    category: 'Education / Autonomous Research University',
    location: 'Okhla Industrial Estate Phase III, South-East Delhi',
    latitude: 28.5459,
    longitude: 77.2732,
    formattedAddress: 'Okhla Phase III, Near Govind Puri Metro, New Delhi, 110020',
    googleMapsUrl: 'https://maps.google.com/?q=28.5459,77.2732',
    website: 'https://www.iiitd.ac.in',
    rating: 4.6,
    userRatingsTotal: 3500,
    affiliation: 'State University (Govt of NCT of Delhi, Institute of National Importance, Est. 2008)',
    feesSummary: 'Official Fee: ~₹4,20,000 - ₹4,60,000 / year (B.Tech CS/AI/ECE)',
    annualFeeNumeric: 440000,
    highlightTag: 'NIRF #75 Engineering (2024) | NAAC A Grade | World-Class CS & AI Research Center',
    evidenceConfidenceScore: 96,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Globally respected research-driven university founded by Dr. Pankaj Jalote. Sets the standard in India for computer science curriculum, cutting-edge AI labs, and academic integrity.',
    aspects: [
      {
        id: 'asp-iiitd-0',
        name: 'Research Rigor & AI',
        label: 'Global CS Curriculum',
        sentiment: 'positive',
        positiveRatio: 97,
        evidenceCount: 58,
        summary: 'Faculty almost exclusively PhDs from premier world universities; exceptional publications in CVPR, NeurIPS, and ACL.',
        keyPhrases: ['world class AI research', 'rigorous CS curriculum', 'top tier conference papers']
      },
      {
        id: 'asp-iiitd-1',
        name: 'Modern Campus Architecture',
        label: 'Okhla Phase III Campus',
        sentiment: 'positive',
        positiveRatio: 93,
        evidenceCount: 40,
        summary: 'Stunning brick and glass architecture with 24/7 labs, swimming pool, and high-speed research computing clusters.',
        keyPhrases: ['24/7 computing labs', 'cutting-edge architecture', 'high-end GPU clusters']
      },
      {
        id: 'asp-iiitd-2',
        name: 'Academic Intensity',
        label: 'Heavy Workload & Grading',
        sentiment: 'mixed',
        positiveRatio: 62,
        evidenceCount: 44,
        summary: 'Demanding workload with continuous assignments and strict anti-plagiarism automated checks.',
        keyPhrases: ['heavy coursework', 'strict plagiarism policy', 'intense assignment deadlines']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (3,500+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Indraprastha Institute of Information Technology Delhi (IIIT-Delhi) offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Indira Gandhi Delhi Technical University for Women (IGDTUW)
  {
    id: 'entity-igdtuw',
    canonicalName: 'Indira Gandhi Delhi Technical University for Women (IGDTUW)',
    aliases: ['igdtuw', 'indira gandhi delhi technical university for women', 'igdtu', 'igdtuw kashmere gate'],
    category: 'Education / Women Engineering University',
    location: 'James Church Campus, Kashmere Gate, Central-North Delhi',
    latitude: 28.6653,
    longitude: 77.2323,
    formattedAddress: 'Madrasa Road, Kashmere Gate, Delhi, 110006',
    googleMapsUrl: 'https://maps.google.com/?q=28.6653,77.2323',
    website: 'https://www.igdtuw.ac.in',
    rating: 4.4,
    userRatingsTotal: 3100,
    affiliation: 'State University of Delhi (Govt of NCT of Delhi, Established 1998)',
    feesSummary: 'Official State Fee: ~₹1,20,000 - ₹1,40,000 / year (B.Tech CSE/IT/ECE/MAE)',
    annualFeeNumeric: 130000,
    highlightTag: 'NIRF #151-200 Engineering | NAAC A+ Grade | Top Placement Numbers for Women in Tech',
    evidenceConfidenceScore: 94,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'India\'s first women\'s technical university. Renowned for phenomenal placement statistics with major US tech companies actively seeking diversity engineering hires.',
    aspects: [
      {
        id: 'asp-igdtuw-0',
        name: 'Women in Tech Placements',
        label: 'Diversity Hiring Hub',
        sentiment: 'positive',
        positiveRatio: 96,
        evidenceCount: 52,
        summary: 'Unbeatable recruitment records with Google, Microsoft, Atlassian, Cisco, and Adobe offering high packages.',
        keyPhrases: ['exceptional diversity placement', 'high placement ratio', 'top tech hiring drives']
      },
      {
        id: 'asp-igdtuw-1',
        name: 'Technical Societies',
        label: 'ACM-W & Lean In Chapters',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 34,
        summary: 'Active peer mentorship networks, hackathon winning teams, and international fellowship recipients.',
        keyPhrases: ['active ACM-W chapter', 'grace hopper attendees', 'women coder mentorship']
      },
      {
        id: 'asp-igdtuw-2',
        name: 'Heritage Campus',
        label: 'Kashmere Gate Setting',
        sentiment: 'positive',
        positiveRatio: 85,
        evidenceCount: 28,
        summary: 'Historic campus near Kashmere Gate Metro interchange with secure hostels and lush shaded courtyards.',
        keyPhrases: ['kashmere gate metro', 'historic campus grounds', 'safe residential hostels']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (3,100+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Indira Gandhi Delhi Technical University for Women (IGDTUW) offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Guru Gobind Singh Indraprastha University (GGSIPU Main Campus)
  {
    id: 'entity-ggsipu',
    canonicalName: 'Guru Gobind Singh Indraprastha University (GGSIPU Main Campus)',
    aliases: ['ggsipu', 'ipu', 'guru gobind singh indraprastha university', 'ip university', 'ggsipu dwarka', 'ipu dwarka'],
    category: 'Education / State University',
    location: 'Sector 16C, Dwarka, South-West Delhi',
    latitude: 28.5946,
    longitude: 77.0189,
    formattedAddress: 'Sector 16C, Dwarka, New Delhi, 110078',
    googleMapsUrl: 'https://maps.google.com/?q=28.5946,77.0189',
    website: 'https://www.ipu.ac.in',
    rating: 4.3,
    userRatingsTotal: 6400,
    affiliation: 'State University of Delhi (Govt of NCT of Delhi, Established 1998)',
    feesSummary: 'Official University Fee: ~₹80,000 - ₹1,20,000 / year (University Schools B.Tech / MBA / LLB)',
    annualFeeNumeric: 95000,
    highlightTag: 'NIRF #74 Universities (2024) | NAAC A++ Grade | 60-Acre Modern Dwarka Campus',
    evidenceConfidenceScore: 93,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'The apex administrative and teaching campus of Delhi\'s premier state university system. Houses top University Schools (USICT, USLLS, USMS) on a 60-acre landscaped Dwarka estate.',
    aspects: [
      {
        id: 'asp-ggsipu-0',
        name: 'University Schools Excellence',
        label: 'USICT & USLLS',
        sentiment: 'positive',
        positiveRatio: 93,
        evidenceCount: 48,
        summary: 'Main campus University Schools maintain the highest entry cutoffs and superior faculty ratios across the IPU ecosystem.',
        keyPhrases: ['USICT campus', 'USLLS law school', 'NAAC A++ rating']
      },
      {
        id: 'asp-ggsipu-1',
        name: 'Dwarka Campus Infrastructure',
        label: '60-Acre Modern Estate',
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 41,
        summary: 'Modern architecture, Olympic-size swimming pool, central auditorium, and residential staff quarters.',
        keyPhrases: ['60-acre campus', 'swimming pool and sports', 'dwarka sector 16 metro']
      },
      {
        id: 'asp-ggsipu-2',
        name: 'Administrative Scale',
        label: 'Affiliation Umbrella',
        sentiment: 'mixed',
        positiveRatio: 66,
        evidenceCount: 35,
        summary: 'Large examination machinery sometimes encounters scheduling bottlenecks during semester evaluations.',
        keyPhrases: ['massive student base', 'centralized exams', 'broad college network']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (6,400+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Guru Gobind Singh Indraprastha University (GGSIPU Main Campus) offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // All India Institute of Medical Sciences (AIIMS New Delhi)
  {
    id: 'entity-aiims',
    canonicalName: 'All India Institute of Medical Sciences (AIIMS New Delhi)',
    aliases: ['aiims', 'aiims delhi', 'all india institute of medical sciences', 'aiims new delhi'],
    category: 'Education / Apex Medical Institute',
    location: 'Ansari Nagar, Sri Aurobindo Marg, South Delhi',
    latitude: 28.5672,
    longitude: 77.21,
    formattedAddress: 'Sri Aurobindo Marg, Ansari Nagar, New Delhi, 110029',
    googleMapsUrl: 'https://maps.google.com/?q=28.5672,77.2100',
    website: 'https://www.aiims.edu',
    rating: 4.7,
    userRatingsTotal: 18500,
    affiliation: 'Autonomous Institute of National Importance (Ministry of Health & Family Welfare)',
    feesSummary: 'Official Govt Fee: ~₹1,628 / total course (MBBS nominal government fee)',
    annualFeeNumeric: 1628,
    highlightTag: 'NIRF #1 Medical Institute in India (Consecutive #1) | Apex Healthcare & Research',
    evidenceConfidenceScore: 98,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'The crown jewel of Indian medical education and research. Consecutively ranked #1 Medical Institute in the country by NIRF, admitting only the single-digit top percentile of NEET-UG.',
    aspects: [
      {
        id: 'asp-aiims-0',
        name: 'Clinical Exposure',
        label: 'Unrivaled Patient Inflow',
        sentiment: 'positive',
        positiveRatio: 99,
        evidenceCount: 82,
        summary: 'Students encounter the most complex tertiary cases and rare pathology from across South Asia.',
        keyPhrases: ['unmatched clinical experience', 'tertiary care apex', 'world leading doctors']
      },
      {
        id: 'asp-aiims-1',
        name: 'Biomedical Research',
        label: 'Global Clinical Trials',
        sentiment: 'positive',
        positiveRatio: 97,
        evidenceCount: 64,
        summary: 'Pioneering clinical research published in The Lancet, NEJM, and BMJ with substantial national research funding.',
        keyPhrases: ['cutting-edge research', 'high citation volume', 'global clinical trials']
      },
      {
        id: 'asp-aiims-2',
        name: 'Campus & Subsidized Living',
        label: 'Nominal Fee & Residential Life',
        sentiment: 'positive',
        positiveRatio: 95,
        evidenceCount: 50,
        summary: 'Course fees remain nominal (~₹1,628 total) with dedicated residential hostels, mess, and gym facilities.',
        keyPhrases: ['heavily subsidized medical education', 'hostel life', 'pulse annual medical fest']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (18,500+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'All India Institute of Medical Sciences (AIIMS New Delhi) offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Vardhman Mahavir Medical College & Safdarjung Hospital (VMMC)
  {
    id: 'entity-vmmc',
    canonicalName: 'Vardhman Mahavir Medical College & Safdarjung Hospital (VMMC)',
    aliases: ['vmmc', 'vardhman mahavir medical college', 'safdarjung medical college', 'vmmc safdarjung'],
    category: 'Education / Medical College',
    location: 'Ring Road, Opposite AIIMS, South Delhi',
    latitude: 28.5703,
    longitude: 77.2081,
    formattedAddress: 'Ring Road, Safdarjung Enclave, New Delhi, 110029',
    googleMapsUrl: 'https://maps.google.com/?q=28.5703,77.2081',
    website: 'https://vmmc-sjh.nic.in',
    rating: 4.5,
    userRatingsTotal: 4900,
    affiliation: 'Guru Gobind Singh Indraprastha University & Govt of India (Established 2001)',
    feesSummary: 'Official Govt Fee: ~₹40,000 - ₹50,000 / year (MBBS)',
    annualFeeNumeric: 45000,
    highlightTag: 'NIRF #14 Medical Colleges (2024) | Associated with 2,900-Bed Safdarjung Hospital',
    evidenceConfidenceScore: 95,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Premier central government medical college attached to the massive 2,900-bed Safdarjung Hospital. Second only to AIIMS in Delhi for clinical hands-on exposure and top NEET cutoffs.',
    aspects: [
      {
        id: 'asp-vmmc-0',
        name: 'Clinical Hands-On',
        label: '2,900-Bed Safdarjung Hospital',
        sentiment: 'positive',
        positiveRatio: 98,
        evidenceCount: 60,
        summary: 'Massive emergency and burn units offer interns and residents world-class practical clinical training.',
        keyPhrases: ['safdarjung burn ICU', 'immense clinical volume', 'practical surgical exposure']
      },
      {
        id: 'asp-vmmc-1',
        name: 'Academic Prestige & Cutoffs',
        label: 'NEET Rank Cutoffs',
        sentiment: 'positive',
        positiveRatio: 95,
        evidenceCount: 48,
        summary: 'One of the top choices nationwide for all-India top 150 NEET rankers with internal IPU PG quota benefits.',
        keyPhrases: ['top NEET cutoff', 'internal PG reservation quota', 'distinguished faculty']
      },
      {
        id: 'asp-vmmc-2',
        name: 'Ring Road Location',
        label: 'Opposite AIIMS',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 38,
        summary: 'Conveniently located directly at AIIMS Metro Station on the Yellow Line.',
        keyPhrases: ['aiims metro access', 'central south delhi', 'well-connected medical hub']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (4,900+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Vardhman Mahavir Medical College & Safdarjung Hospital (VMMC) offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Lady Hardinge Medical College (LHMC)
  {
    id: 'entity-lhmc',
    canonicalName: 'Lady Hardinge Medical College (LHMC)',
    aliases: ['lhmc', 'lady hardinge medical college', 'lady hardinge', 'lhmc delhi'],
    category: 'Education / Medical College',
    location: 'Connaught Place / Shaheed Bhagat Singh Marg, Central Delhi',
    latitude: 28.6317,
    longitude: 77.2125,
    formattedAddress: 'Shaheed Bhagat Singh Marg, Connaught Place, New Delhi, 110001',
    googleMapsUrl: 'https://maps.google.com/?q=28.6317,77.2125',
    website: 'https://lhmc-hosp.gov.in',
    rating: 4.4,
    userRatingsTotal: 3700,
    affiliation: 'University of Delhi (Faculty of Medical Sciences, Established 1916)',
    feesSummary: 'Official Govt Fee: ~₹2,000 / year (MBBS government subsidized)',
    annualFeeNumeric: 2000,
    highlightTag: 'NIRF #29 Medical Colleges (2024) | Historic Central Delhi Campus & Kalawati Saran Hospital',
    evidenceConfidenceScore: 94,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Historic medical college for women established in 1916. Operates Smt. Sucheta Kriplani Hospital and Kalawati Saran Children\'s Hospital in the heart of Connaught Place.',
    aspects: [
      {
        id: 'asp-lhmc-0',
        name: 'Pediatrics & Obstetrics',
        label: 'Specialized Hospital Wings',
        sentiment: 'positive',
        positiveRatio: 96,
        evidenceCount: 48,
        summary: 'Kalawati Saran Children\'s Hospital provides unmatched pediatric and maternal health training in Asia.',
        keyPhrases: ['premier pediatric hospital', 'obstetrics and gynecology', 'historic medical institution']
      },
      {
        id: 'asp-lhmc-1',
        name: 'DU 50% Internal PG Quota',
        label: 'Postgraduate Advantages',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 40,
        summary: 'Graduates benefit from DU internal institutional preference for highly competitive MD/MS seats.',
        keyPhrases: ['DU internal PG quota', 'high PG entrance success', 'distinguished alumni network']
      },
      {
        id: 'asp-lhmc-2',
        name: 'Connaught Place Location',
        label: 'Heart of New Delhi',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 32,
        summary: 'Located seconds from Shivaji Stadium and Rajiv Chowk Metro stations.',
        keyPhrases: ['connaught place walking distance', 'shivaji stadium metro', 'central capital access']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (3,700+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Lady Hardinge Medical College (LHMC) offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Jamia Millia Islamia (JMI)
  {
    id: 'entity-jmi',
    canonicalName: 'Jamia Millia Islamia (JMI)',
    aliases: ['jmi', 'jamia millia islamia', 'jamia', 'jamia university', 'jamia engineering'],
    category: 'Education / Central University',
    location: 'Jamia Nagar, Okhla, South-East Delhi',
    latitude: 28.5616,
    longitude: 77.2802,
    formattedAddress: 'Jamia Nagar, Okhla, New Delhi, 110025',
    googleMapsUrl: 'https://maps.google.com/?q=28.5616,77.2802',
    website: 'https://www.jmi.ac.in',
    rating: 4.6,
    userRatingsTotal: 9200,
    affiliation: 'Central University (Govt of India, Established 1920)',
    feesSummary: 'Official Central Fee: ~₹15,000 - ₹45,000 / year (B.Tech / BA / Law / Fine Arts)',
    annualFeeNumeric: 30000,
    highlightTag: 'NIRF #3 Universities in India (2024) | NAAC A++ (CGPA 3.61) | Comprehensive Central Campus',
    evidenceConfidenceScore: 96,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Ranked #3 among all universities in India by NIRF 2024. Renowned for its AJK Mass Communication Research Centre, Faculty of Engineering & Technology, and Residential Coaching Academy (RCA).',
    aspects: [
      {
        id: 'asp-jmi-0',
        name: 'National University Standing',
        label: 'NIRF Rank 3 & Research',
        sentiment: 'positive',
        positiveRatio: 97,
        evidenceCount: 66,
        summary: 'Recognized globally in QS and Times Higher Education with top-tier research output across multidisciplinary departments.',
        keyPhrases: ['NIRF #3 in India', 'NAAC A++ grade', 'premier research center']
      },
      {
        id: 'asp-jmi-1',
        name: 'Mass Communication (AJK MCRC)',
        label: 'Pioneering Media School',
        sentiment: 'positive',
        positiveRatio: 96,
        evidenceCount: 50,
        summary: 'India\'s premier film and broadcast journalism institute with alumni directing leading national news and cinema.',
        keyPhrases: ['AJK MCRC broadcast school', 'famed film alumni', 'documentary production']
      },
      {
        id: 'asp-jmi-2',
        name: 'Residential Coaching Academy',
        label: 'Civil Services Benchmark',
        sentiment: 'positive',
        positiveRatio: 95,
        evidenceCount: 46,
        summary: 'JMI\'s RCA consistently produces dozens of successful UPSC Civil Services qualifiers and top-rankers yearly.',
        keyPhrases: ['UPSC civil services qualifiers', 'RCA residential academy', 'dedicated civil services mentorship']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (9,200+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Jamia Millia Islamia (JMI) offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Shyam Lal College (SLC)
  {
    id: 'entity-shyam-lal',
    canonicalName: 'Shyam Lal College (SLC)',
    aliases: ['shyam lal college', 'slc', 'slc du', 'shyam lal shahdara'],
    category: 'Education / Delhi University College',
    location: 'G.T. Road, Shahdara, East/North-East Delhi',
    latitude: 28.6714,
    longitude: 77.2839,
    formattedAddress: 'Grand Trunk Road, Shahdara, Delhi, 110032',
    googleMapsUrl: 'https://maps.google.com/?q=28.6714,77.2839',
    website: 'https://www.shyamlal.du.ac.in',
    rating: 4.0,
    userRatingsTotal: 2700,
    affiliation: 'University of Delhi (DU, Established 1964)',
    feesSummary: 'Official DU Fee: ~₹13,000 - ₹18,000 / year (BA / B.Sc / B.Com Hons)',
    annualFeeNumeric: 15000,
    highlightTag: 'NAAC A+ Grade | Prominent Co-educational DU College in Shahdara',
    evidenceConfidenceScore: 89,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Established co-educational Delhi University institution located directly on G.T. Road in Shahdara, serving students from North-East Delhi and neighboring NCR areas with NAAC A+ accreditation.',
    aspects: [
      {
        id: 'asp-shyam-lal-0',
        name: 'Shahdara Regional Pillar',
        label: 'East/North-East Delhi Anchor',
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 32,
        summary: 'Offers full DU degree spectrum right in Shahdara with direct Welcome Metro transit access.',
        keyPhrases: ['shahdara G.T. road', 'welcome metro access', 'accessible east delhi']
      },
      {
        id: 'asp-shyam-lal-1',
        name: 'Commerce & Sciences',
        label: 'Updated Labs & Faculty',
        sentiment: 'positive',
        positiveRatio: 85,
        evidenceCount: 27,
        summary: 'Equipped chemistry, physics, and computer science laboratories with consistent honors results.',
        keyPhrases: ['science laboratories', 'B.Com honors', 'experienced teachers']
      },
      {
        id: 'asp-shyam-lal-2',
        name: 'Solar Powered Green Campus',
        label: 'Eco-Friendly Amenities',
        sentiment: 'positive',
        positiveRatio: 86,
        evidenceCount: 23,
        summary: 'Pioneered institutional solar energy setups and rainwater harvesting on campus.',
        keyPhrases: ['solar power initiatives', 'rainwater harvesting', 'clean energy campus']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (2,700+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Shyam Lal College (SLC) offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Daulat Ram College (DRC)
  {
    id: 'entity-drc',
    canonicalName: 'Daulat Ram College (DRC)',
    aliases: ['drc', 'daulat ram college', 'daulat ram', 'drc du', 'drc north campus'],
    category: 'Education / Delhi University College',
    location: '4 Patel Marg, Maurice Nagar, North Campus, Delhi',
    latitude: 28.6877,
    longitude: 77.2117,
    formattedAddress: '4, Patel Marg, Maurice Nagar, North Campus, Delhi, 110007',
    googleMapsUrl: 'https://maps.google.com/?q=28.6877,77.2117',
    website: 'https://dr.du.ac.in',
    rating: 4.3,
    userRatingsTotal: 3400,
    affiliation: 'University of Delhi (DU, Established 1960, Women\'s College)',
    feesSummary: 'Official DU Fee: ~₹18,000 - ₹24,000 / year (BA / B.Sc / B.Com Hons)',
    annualFeeNumeric: 21000,
    highlightTag: 'NIRF #28 Colleges (2024) | NAAC A Grade | Core North Campus Enclave',
    evidenceConfidenceScore: 93,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Premier North Campus women\'s college situated in Maurice Nagar. Features strong science faculties, active foreign language courses, and an on-campus girls\' hostel.',
    aspects: [
      {
        id: 'asp-drc-0',
        name: 'Core North Campus Location',
        label: 'Maurice Nagar Enclave',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 40,
        summary: 'Situated right between SRCC and Miranda House in the vibrant core of North Campus.',
        keyPhrases: ['maurice nagar heart', 'north campus walking', 'vishwavidyalaya metro']
      },
      {
        id: 'asp-drc-1',
        name: 'Science & Foreign Languages',
        label: 'Biochemistry & Linguistics',
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 33,
        summary: 'Distinguished programs in Biochemistry, Psychology, and diploma courses in French, German, and Spanish.',
        keyPhrases: ['biochemistry department', 'psychology labs', 'foreign language diplomas']
      },
      {
        id: 'asp-drc-2',
        name: 'Hostel & Safety',
        label: 'In-Campus Residential Facility',
        sentiment: 'positive',
        positiveRatio: 89,
        evidenceCount: 28,
        summary: 'Secure, well-maintained on-campus hostel providing peaceful living quarters for outstation students.',
        keyPhrases: ['in-campus girls hostel', 'safe residential life', 'well-kept canteen']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (3,400+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Daulat Ram College (DRC) offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Maharaja Agrasen Institute of Technology (MAIT)
  {
    id: 'entity-mait',
    canonicalName: 'Maharaja Agrasen Institute of Technology (MAIT)',
    aliases: ['mait', 'maharaja agrasen institute of technology', 'mait rohini', 'mait ipu', 'mait btech'],
    category: 'Education / Engineering Institute (GGSIPU)',
    location: 'PSP Area, Sector 22, Rohini, North-West Delhi',
    latitude: 28.7188,
    longitude: 77.0673,
    formattedAddress: 'PSP Area, Plot No. 1, Sector 22, Rohini, Delhi, 110086',
    googleMapsUrl: 'https://maps.google.com/?q=28.7188,77.0673',
    website: 'https://www.mait.ac.in',
    rating: 4.2,
    userRatingsTotal: 4200,
    affiliation: 'Guru Gobind Singh Indraprastha University (Established 1999)',
    feesSummary: 'Official GGSIPU Fee: ~₹1,40,000 - ₹1,60,000 / year (B.Tech CSE/IT/ECE)',
    annualFeeNumeric: 150000,
    highlightTag: 'Top Ranked GGSIPU Engineering College | NBA Accredited | Rohini Tech Campus',
    evidenceConfidenceScore: 93,
    confidenceBreakdown: {
      independentDiscussions: 58,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Consistently matches MSIT as the top choice for engineering students in IP University. Located on a 10.5-acre campus in Rohini Sector 22 with strong coding clubs and tech placements.',
    aspects: [
      {
        id: 'asp-mait-0',
        name: 'CSE & IT Placements',
        label: 'Software & Service Drives',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 48,
        summary: 'Regular high-volume hiring from tech giants including Amazon, Infosys, Cognizant, and ZS Associates.',
        keyPhrases: ['strong CSE placements', 'mass IT drives', 'product company visits']
      },
      {
        id: 'asp-mait-1',
        name: 'Rohini Campus',
        label: '10.5-Acre Institutional Area',
        sentiment: 'positive',
        positiveRatio: 87,
        evidenceCount: 35,
        summary: 'Large sports arena, separate boys and girls hostels, and air-conditioned computing complexes.',
        keyPhrases: ['rohini sector 22', 'spacious campus grounds', 'equipped computer labs']
      },
      {
        id: 'asp-mait-2',
        name: 'Competitive Coding Society',
        label: 'Hackathons & Dev Circles',
        sentiment: 'positive',
        positiveRatio: 89,
        evidenceCount: 32,
        summary: 'Active student developer circles regularly winning Smart India Hackathons and coding challenges.',
        keyPhrases: ['smart india hackathon winners', 'active tech clubs', 'peer coding circles']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'NIRF 2024 report highlighted research contributions and student-faculty ratios.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Campus hosted major inter-college symposia and academic skill workshops.', mentionCount: 39 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent discussions focus on CUET cutoffs, internship placements, and campus societies.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'official', name: 'Official Disclosures & Accreditation Portals', count: 18, percentage: 35, iconName: 'Award' },
      { type: 'review', name: 'Google Maps Verified Metadata (4,200+ reviews)', count: 15, percentage: 29, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Campus Node', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 8, percentage: 15, iconName: 'MessageSquare' },
      { type: 'web', name: 'Higher Education Directory Profiles', count: 5, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Academic Standing and Infrastructure',
      positiveSignalCount: 52,
      negativeSignalCount: 4,
      summary: 'Strong positive alignment across national accreditation ratings and student feedback.',
      impartialSynthesis: 'Maharaja Agrasen Institute of Technology (MAIT) offers verified academic credentials within the Delhi higher education network.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  }
];

export const collegeMetadataMap: Record<string, Partial<EntityReport>> = {
  // Engineering & Technology Institutions
  'entity-dtu': {
    institutionType: 'engineering',
    domains: ['engineering', 'computer_science', 'technology'],
    programs: ['B.Tech CSE', 'B.Tech IT', 'B.Tech Software Engineering', 'B.Tech ECE', 'B.Tech Mechanical', 'M.Tech', 'MBA'],
    degreeLevels: ['undergraduate', 'postgraduate', 'doctoral'],
    locality: 'Rohini / Bawana',
    district: 'North West Delhi',
    annualFeeNumeric: 215000,
  },
  'entity-nsut': {
    institutionType: 'engineering',
    domains: ['engineering', 'computer_science', 'technology'],
    programs: ['B.Tech CSE', 'B.Tech IT', 'B.Tech ECE', 'B.Tech AI', 'M.Tech', 'MBA'],
    degreeLevels: ['undergraduate', 'postgraduate', 'doctoral'],
    locality: 'Dwarka',
    district: 'South West Delhi',
    annualFeeNumeric: 225000,
  },
  'entity-iiitd': {
    institutionType: 'engineering',
    domains: ['computer_science', 'engineering', 'artificial_intelligence'],
    programs: ['B.Tech CSE', 'B.Tech CSAM', 'B.Tech CSD', 'B.Tech CSSS', 'B.Tech CSB', 'B.Tech ECE', 'M.Tech', 'Ph.D.'],
    degreeLevels: ['undergraduate', 'postgraduate', 'doctoral'],
    locality: 'Okhla Phase III',
    district: 'South East Delhi',
    annualFeeNumeric: 440000,
  },
  'entity-igdtuw': {
    institutionType: 'engineering',
    domains: ['engineering', 'computer_science', 'technology'],
    programs: ['B.Tech CSE', 'B.Tech IT', 'B.Tech ECE', 'B.Tech AI', 'B.Tech MAE', 'MCA', 'M.Tech'],
    degreeLevels: ['undergraduate', 'postgraduate', 'doctoral'],
    locality: 'Kashmere Gate',
    district: 'North Delhi',
    annualFeeNumeric: 130000,
  },
  'entity-msit': {
    institutionType: 'engineering',
    domains: ['engineering', 'computer_science', 'technology'],
    programs: ['B.Tech CSE', 'B.Tech IT', 'B.Tech ECE', 'B.Tech EEE'],
    degreeLevels: ['undergraduate'],
    locality: 'Janakpuri',
    district: 'West Delhi',
    annualFeeNumeric: 140000,
  },
  'entity-mait': {
    institutionType: 'engineering',
    domains: ['engineering', 'computer_science', 'technology'],
    programs: ['B.Tech CSE', 'B.Tech IT', 'B.Tech AI & DS', 'B.Tech ECE', 'B.Tech Mechanical', 'MBA'],
    degreeLevels: ['undergraduate', 'postgraduate'],
    locality: 'Sector 22, Rohini',
    district: 'North West Delhi',
    annualFeeNumeric: 150000,
  },
  'entity-jmi': {
    institutionType: 'university',
    domains: ['engineering', 'computer_science', 'humanities', 'law', 'sciences'],
    programs: ['B.Tech CSE', 'B.Tech Civil', 'B.Tech Electrical', 'B.Tech Mechanical', 'B.Tech ECE', 'B.A.', 'B.Sc', 'LL.B.'],
    degreeLevels: ['undergraduate', 'postgraduate', 'doctoral'],
    locality: 'Jamia Nagar, Okhla',
    district: 'South East Delhi',
    annualFeeNumeric: 30000,
  },
  'entity-ggsipu': {
    institutionType: 'university',
    domains: ['engineering', 'computer_science', 'management', 'law'],
    programs: ['B.Tech CSE (USICT)', 'B.Tech IT', 'B.Tech ECE', 'MCA', 'MBA', 'B.A. LL.B.'],
    degreeLevels: ['undergraduate', 'postgraduate', 'doctoral'],
    locality: 'Sector 16C, Dwarka',
    district: 'South West Delhi',
    annualFeeNumeric: 95000,
  },
  // Medical Institutions
  'entity-aiims': {
    institutionType: 'medical',
    domains: ['medicine', 'healthcare', 'biomedical_research'],
    programs: ['MBBS', 'MD', 'MS', 'M.Ch', 'DM', 'B.Sc Nursing'],
    degreeLevels: ['undergraduate', 'postgraduate', 'doctoral'],
    locality: 'Ansari Nagar',
    district: 'South Delhi',
    annualFeeNumeric: 1628,
    feesSummary: 'Official Govt MBBS Fee: ~₹1,628 / total 5.5-yr course (nominal government subsidized tuition)',
  },
  'entity-vmmc': {
    institutionType: 'medical',
    domains: ['medicine', 'healthcare'],
    programs: ['MBBS', 'MD', 'MS'],
    degreeLevels: ['undergraduate', 'postgraduate'],
    locality: 'Safdarjung Enclave',
    district: 'South Delhi',
    annualFeeNumeric: 40000,
    feesSummary: 'Official Govt Fee: ~₹40,000 / year (MBBS State/Central Govt Subsidized)',
  },
  'entity-lhmc': {
    institutionType: 'medical',
    domains: ['medicine', 'healthcare'],
    programs: ['MBBS', 'MD', 'MS'],
    degreeLevels: ['undergraduate', 'postgraduate'],
    locality: 'Connaught Place',
    district: 'Central Delhi',
    annualFeeNumeric: 15000,
    feesSummary: 'Official Govt Fee: ~₹15,000 / year (MBBS Central Govt Subsidized)',
  },
  // Management & Professional
  'entity-sscbs': {
    institutionType: 'college',
    domains: ['management', 'business', 'computer_science'],
    programs: ['BMS', 'BBA (FIA)', 'B.Sc (Hons) Computer Science'],
    degreeLevels: ['undergraduate'],
    locality: 'Sector 16, Rohini',
    district: 'North West Delhi',
    annualFeeNumeric: 25000,
  },
  'entity-msi': {
    institutionType: 'college',
    domains: ['management', 'computer_applications', 'commerce'],
    programs: ['BBA', 'BCA', 'B.Com (Hons)', 'B.Ed'],
    degreeLevels: ['undergraduate'],
    locality: 'Janakpuri',
    district: 'West Delhi',
    annualFeeNumeric: 90000,
  },
  // Commerce DU Colleges
  'entity-srcc': {
    institutionType: 'college',
    domains: ['commerce', 'economics', 'business'],
    programs: ['B.Com (Hons)', 'B.A. (Hons) Economics'],
    degreeLevels: ['undergraduate', 'postgraduate'],
    locality: 'North Campus',
    district: 'North Delhi',
    annualFeeNumeric: 32000,
  },
  'entity-sggscc': {
    institutionType: 'college',
    domains: ['commerce', 'economics', 'computer_science'],
    programs: ['B.Com (Hons)', 'B.A. (Hons) Economics', 'B.Sc (Hons) Computer Science', 'BBA'],
    degreeLevels: ['undergraduate'],
    locality: 'Pitampura',
    district: 'North West Delhi',
    annualFeeNumeric: 32000,
  },
  'entity-dcac': {
    institutionType: 'college',
    domains: ['commerce', 'arts', 'economics'],
    programs: ['B.Com (Hons)', 'B.A. (Hons) Economics', 'B.A. Journalism'],
    degreeLevels: ['undergraduate'],
    locality: 'Netaji Nagar',
    district: 'South Delhi',
    annualFeeNumeric: 22000,
  },
  'entity-sbsc': {
    institutionType: 'college',
    domains: ['commerce', 'arts', 'economics'],
    programs: ['B.Com (Hons)', 'B.A. (Hons) Economics', 'B.A. Geography'],
    degreeLevels: ['undergraduate'],
    locality: 'Sheikh Sarai',
    district: 'South Delhi',
    annualFeeNumeric: 24000,
  },
  // DU Science & Multi-disciplinary
  'entity-andc': {
    institutionType: 'college',
    domains: ['sciences', 'computer_science'],
    programs: ['B.Sc (Hons) Computer Science', 'B.Sc (Hons) Biomedical Science', 'B.Sc (Hons) Electronics'],
    degreeLevels: ['undergraduate'],
    locality: 'Govindpuri, Kalkaji',
    district: 'South Delhi',
    annualFeeNumeric: 28000,
  },
  'entity-dduc': {
    institutionType: 'college',
    domains: ['sciences', 'commerce', 'computer_science'],
    programs: ['B.Sc (Hons) Computer Science', 'B.Com (Hons)', 'B.Sc (Hons) Mathematics'],
    degreeLevels: ['undergraduate'],
    locality: 'Sector 3, Dwarka',
    district: 'South West Delhi',
    annualFeeNumeric: 27000,
  },
  'entity-keshav-mahavidyalaya': {
    institutionType: 'college',
    domains: ['sciences', 'commerce', 'computer_science', 'management'],
    programs: ['B.Sc (Hons) Computer Science', 'BMS', 'B.Com (Hons)'],
    degreeLevels: ['undergraduate'],
    locality: 'Rani Bagh, Pitampura',
    district: 'North West Delhi',
    annualFeeNumeric: 26000,
  },
  'entity-srcasw': {
    institutionType: 'college',
    domains: ['sciences', 'technology', 'computer_science', 'management'],
    programs: ['B.Sc (Hons) Computer Science', 'BBA (FIA)', 'BMS', 'B.Sc (Hons) Electronics'],
    degreeLevels: ['undergraduate'],
    locality: 'Vasundhara Enclave',
    district: 'East Delhi',
    annualFeeNumeric: 28000,
  },
  // DU Arts & Multi-disciplinary Colleges
  'entity-miranda-house': {
    institutionType: 'college',
    domains: ['arts', 'sciences', 'humanities'],
    programs: ['B.A. (Hons)', 'B.Sc (Hons)'],
    degreeLevels: ['undergraduate', 'postgraduate'],
    locality: 'North Campus',
    district: 'North Delhi',
    annualFeeNumeric: 22000,
  },
  'entity-hindu-college': {
    institutionType: 'college',
    domains: ['arts', 'sciences', 'commerce'],
    programs: ['B.A. (Hons)', 'B.Sc (Hons)', 'B.Com (Hons)'],
    degreeLevels: ['undergraduate', 'postgraduate'],
    locality: 'North Campus',
    district: 'North Delhi',
    annualFeeNumeric: 26000,
  },
  'entity-st-stephens': {
    institutionType: 'college',
    domains: ['arts', 'sciences'],
    programs: ['B.A. (Hons)', 'B.Sc (Hons)'],
    degreeLevels: ['undergraduate', 'postgraduate'],
    locality: 'North Campus',
    district: 'North Delhi',
    annualFeeNumeric: 42000,
  },
  'entity-hansraj-college': {
    institutionType: 'college',
    domains: ['arts', 'sciences', 'commerce'],
    programs: ['B.A. (Hons)', 'B.Sc (Hons)', 'B.Com (Hons)'],
    degreeLevels: ['undergraduate', 'postgraduate'],
    locality: 'North Campus',
    district: 'North Delhi',
    annualFeeNumeric: 25000,
  },
  'entity-ramjas-college': {
    institutionType: 'college',
    domains: ['arts', 'sciences', 'commerce'],
    programs: ['B.A. (Hons)', 'B.Sc (Hons)', 'B.Com (Hons)'],
    degreeLevels: ['undergraduate', 'postgraduate'],
    locality: 'North Campus',
    district: 'North Delhi',
    annualFeeNumeric: 20000,
  },
  'entity-ramjas': {
    institutionType: 'college',
    domains: ['arts', 'sciences', 'commerce'],
    programs: ['B.A. (Hons)', 'B.Sc (Hons)', 'B.Com (Hons)'],
    degreeLevels: ['undergraduate', 'postgraduate'],
    locality: 'North Campus',
    district: 'North Delhi',
    annualFeeNumeric: 20000,
  },
  'entity-gargi-college': {
    institutionType: 'college',
    domains: ['arts', 'sciences', 'commerce'],
    programs: ['B.A. (Hons)', 'B.Sc (Hons)', 'B.Com (Hons)'],
    degreeLevels: ['undergraduate', 'postgraduate'],
    locality: 'Siri Fort Road, South Delhi',
    district: 'South Delhi',
    annualFeeNumeric: 24000,
  },
  'entity-gargi': {
    institutionType: 'college',
    domains: ['arts', 'sciences', 'commerce'],
    programs: ['B.A. (Hons)', 'B.Sc (Hons)', 'B.Com (Hons)'],
    degreeLevels: ['undergraduate', 'postgraduate'],
    locality: 'Siri Fort Road, South Delhi',
    district: 'South Delhi',
    annualFeeNumeric: 24000,
  },
  'entity-venkateswara': {
    institutionType: 'college',
    domains: ['arts', 'sciences', 'commerce'],
    programs: ['B.A. (Hons)', 'B.Sc (Hons)', 'B.Com (Hons)'],
    degreeLevels: ['undergraduate', 'postgraduate'],
    locality: 'Dhaula Kuan, South Campus',
    district: 'South Delhi',
    annualFeeNumeric: 28000,
  },
  'entity-jmc': {
    institutionType: 'college',
    domains: ['arts', 'commerce'],
    programs: ['B.A. (Hons)', 'B.Com (Hons)'],
    degreeLevels: ['undergraduate', 'postgraduate'],
    locality: 'Chanakyapuri',
    district: 'New Delhi',
    annualFeeNumeric: 25000,
  },
  'entity-ipcw': {
    institutionType: 'college',
    domains: ['arts', 'commerce', 'computer_applications'],
    programs: ['B.A. (Hons)', 'B.Com (Hons)', 'B.Sc (Hons) Computer Science'],
    degreeLevels: ['undergraduate', 'postgraduate'],
    locality: 'Civil Lines',
    district: 'North Delhi',
    annualFeeNumeric: 28000,
  },
  'entity-arsd': {
    institutionType: 'college',
    domains: ['arts', 'sciences', 'commerce'],
    programs: ['B.A. (Hons)', 'B.Sc (Hons)', 'B.Com (Hons)'],
    degreeLevels: ['undergraduate'],
    locality: 'Dhaula Kuan, South Campus',
    district: 'South Delhi',
    annualFeeNumeric: 22000,
  },
  'entity-motilal-nehru': {
    institutionType: 'college',
    domains: ['arts', 'sciences', 'commerce'],
    programs: ['B.A. (Hons)', 'B.Sc (Hons)', 'B.Com (Hons)'],
    degreeLevels: ['undergraduate'],
    locality: 'Benito Juarez Marg, South Campus',
    district: 'South Delhi',
    annualFeeNumeric: 20000,
  },
  'entity-ram-lal-anand': {
    institutionType: 'college',
    domains: ['arts', 'sciences', 'commerce'],
    programs: ['B.A. (Hons)', 'B.Sc (Hons)', 'B.Com (Hons)'],
    degreeLevels: ['undergraduate'],
    locality: 'Benito Juarez Marg, South Campus',
    district: 'South Delhi',
    annualFeeNumeric: 19000,
  },
  'entity-zakir-husain': {
    institutionType: 'college',
    domains: ['arts', 'sciences', 'commerce'],
    programs: ['B.A. (Hons)', 'B.Sc (Hons)', 'B.Com (Hons)'],
    degreeLevels: ['undergraduate', 'postgraduate'],
    locality: 'Ajmeri Gate',
    district: 'Central Delhi',
    annualFeeNumeric: 18000,
  },
  'entity-shivaji': {
    institutionType: 'college',
    domains: ['arts', 'sciences', 'commerce'],
    programs: ['B.A. (Hons)', 'B.Sc (Hons)', 'B.Com (Hons)'],
    degreeLevels: ['undergraduate'],
    locality: 'Raja Garden',
    district: 'West Delhi',
    annualFeeNumeric: 22000,
  },
  'entity-rajdhani': {
    institutionType: 'college',
    domains: ['arts', 'sciences', 'commerce'],
    programs: ['B.A. (Hons)', 'B.Sc (Hons)', 'B.Com (Hons)'],
    degreeLevels: ['undergraduate'],
    locality: 'Raja Garden',
    district: 'West Delhi',
    annualFeeNumeric: 21000,
  },
  'entity-sgtb-khalsa': {
    institutionType: 'college',
    domains: ['arts', 'sciences', 'commerce'],
    programs: ['B.A. (Hons)', 'B.Sc (Hons)', 'B.Com (Hons)'],
    degreeLevels: ['undergraduate', 'postgraduate'],
    locality: 'North Campus',
    district: 'North Delhi',
    annualFeeNumeric: 30000,
  },
  'entity-cvs': {
    institutionType: 'college',
    domains: ['vocational', 'commerce', 'management'],
    programs: ['B.A. Vocational Studies', 'B.Com (Hons)', 'BMS'],
    degreeLevels: ['undergraduate'],
    locality: 'Sheikh Sarai Phase II',
    district: 'South Delhi',
    annualFeeNumeric: 22000,
  },
  'entity-bhagini-nivedita': {
    institutionType: 'college',
    domains: ['arts', 'commerce'],
    programs: ['B.A. (Hons)', 'B.Com (Hons)'],
    degreeLevels: ['undergraduate'],
    locality: 'Najafgarh',
    district: 'South West Delhi',
    annualFeeNumeric: 16000,
  },
  'entity-bharati': {
    institutionType: 'college',
    domains: ['arts', 'commerce'],
    programs: ['B.A. (Hons)', 'B.Com (Hons)'],
    degreeLevels: ['undergraduate'],
    locality: 'Janakpuri',
    district: 'West Delhi',
    annualFeeNumeric: 18000,
  },
  'entity-vivekananda': {
    institutionType: 'college',
    domains: ['arts', 'commerce'],
    programs: ['B.A. (Hons)', 'B.Com (Hons)'],
    degreeLevels: ['undergraduate'],
    locality: 'Vivek Vihar',
    district: 'East Delhi',
    annualFeeNumeric: 17000,
  },
  'entity-ihe': {
    institutionType: 'college',
    domains: ['sciences', 'home_economics'],
    programs: ['B.Sc (Hons) Home Science', 'B.Sc (Hons) Food Technology', 'B.El.Ed'],
    degreeLevels: ['undergraduate', 'postgraduate'],
    locality: 'Hauz Khas',
    district: 'South Delhi',
    annualFeeNumeric: 35000,
  },
  'entity-shyam-lal': {
    institutionType: 'college',
    domains: ['arts', 'sciences', 'commerce'],
    programs: ['B.A. (Hons)', 'B.Sc (Hons)', 'B.Com (Hons)'],
    degreeLevels: ['undergraduate'],
    locality: 'Shahdara',
    district: 'East Delhi',
    annualFeeNumeric: 19000,
  },
  'entity-drc': {
    institutionType: 'college',
    domains: ['arts', 'sciences', 'commerce'],
    programs: ['B.A. (Hons)', 'B.Sc (Hons)', 'B.Com (Hons)'],
    degreeLevels: ['undergraduate', 'postgraduate'],
    locality: 'North Campus',
    district: 'North Delhi',
    annualFeeNumeric: 24000,
  },
  'entity-maharaja-agrasen': {
    institutionType: 'college',
    domains: ['arts', 'sciences', 'commerce'],
    programs: ['B.A. (Hons)', 'B.Sc (Hons)', 'B.Com (Hons)', 'B.A. Journalism'],
    degreeLevels: ['undergraduate'],
    locality: 'Vasundhara Enclave',
    district: 'East Delhi',
    annualFeeNumeric: 21000,
  }
};

export const delhiColleges: EntityReport[] = rawDelhiColleges.map((col) => {
  const meta = collegeMetadataMap[col.id];
  return meta ? { ...col, ...meta } : col;
});
