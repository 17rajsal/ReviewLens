import { EntityReport } from '../types/evidence';

export const delhiColleges: EntityReport[] = [
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
];
