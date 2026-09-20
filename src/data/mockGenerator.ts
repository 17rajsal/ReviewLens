import { EntityReport, ParsedConstraints, ResearchQuery } from '../types/evidence';
import { genericEducationDemoData } from './genericDemoData';

export function parseQueryConstraints(query: string): ParsedConstraints {
  const lower = query.toLowerCase();
  const constraints: ParsedConstraints = {};

  // Extract budget
  const budgetMatch = query.match(/under\s+(₹?[\d,]+(\s*lakh|\s*k)?|\$?[\d,]+)/i);
  if (budgetMatch) {
    constraints.budgetMax = budgetMatch[0].replace(/under\s+/i, '').trim();
  }

  // Extract location
  if (lower.includes('delhi')) constraints.location = 'Delhi NCR';
  else if (lower.includes('jaipur')) constraints.location = 'Jaipur, Rajasthan';
  else if (lower.includes('bangalore') || lower.includes('bengaluru')) constraints.location = 'Bengaluru';
  else if (lower.includes('mumbai')) constraints.location = 'Mumbai';
  else if (lower.includes('connaught place') || lower.includes('cp')) constraints.location = 'Connaught Place, New Delhi';

  // Extract discipline/topic
  if (lower.includes('b.tech') || lower.includes('engineering') || lower.includes('college') || lower.includes('institution')) {
    constraints.degree = 'B.Tech';
    if (lower.includes('cse') || lower.includes('computer')) constraints.branch = 'Computer Science (CSE)';
  }

  // Extract priority
  if (lower.includes('coding') || lower.includes('developer') || lower.includes('programming')) {
    constraints.priority = 'Coding Culture & Hackathons';
  } else if (lower.includes('food') || lower.includes('restaurant') || lower.includes('ambience')) {
    constraints.priority = 'Food Authenticity & Value';
  } else if (lower.includes('hotel') || lower.includes('heritage') || lower.includes('service')) {
    constraints.priority = 'Heritage Ambience & Guest Service';
  } else if (lower.includes('laptop') || lower.includes('software') || lower.includes('product')) {
    constraints.priority = 'Performance & Value';
  }

  return constraints;
}

export function generateResearchReportForQuery(query: string): ResearchQuery {
  const lower = query.toLowerCase().trim();

  // If query is related to colleges / engineering or matches our primary case:
  if (
    lower.includes('college') ||
    lower.includes('b.tech') ||
    lower.includes('cse') ||
    lower.includes('institution') ||
    lower.includes('engineering') ||
    lower.includes('university')
  ) {
    return {
      ...genericEducationDemoData,
      query: query,
      constraints: {
        ...genericEducationDemoData.constraints,
        ...parseQueryConstraints(query)
      }
    };
  }

  // Preset for Restaurants:
  if (lower.includes('restaurant') || lower.includes('connaught place') || lower.includes('food') || lower.includes('dining')) {
    return createRestaurantQuery(query);
  }

  // Preset for Hotels:
  if (lower.includes('hotel') || lower.includes('jaipur') || lower.includes('stay')) {
    return createHotelQuery(query);
  }

  // Preset for Products / Laptops:
  if (lower.includes('laptop') || lower.includes('software') || lower.includes('product')) {
    return createProductQuery(query);
  }

  // Dynamic fallback for any general research query
  return createDynamicFallbackQuery(query);
}

function createRestaurantQuery(query: string): ResearchQuery {
  const entities: EntityReport[] = [
    {
      id: 'entity-restaurant-a',
      canonicalName: 'Restaurant A (Traditional Kitchen)',
      aliases: ['Restaurant A', 'Kitchen A', 'Traditional Dining A'],
      category: 'Dining / Regional Cuisine',
      location: 'Connaught Place, New Delhi',
      feesSummary: 'Example price: ~₹600 - ₹900 for two',
      annualFeeNumeric: 800,
      highlightTag: 'Authentic Preparation & Consistent Sambar Quality',
      evidenceConfidenceScore: 89,
      confidenceBreakdown: {
        independentDiscussions: 52,
        sourceTypesCount: 4,
        recencyFactorScore: 94,
        corroborationDensity: 91,
        conflictDetected: true,
        conflictPenaltyApplied: 5,
      },
      summaryVerdict: 'High consensus regarding culinary authenticity and freshly prepared filter coffee. Significant rush during peak weekend hours creates documented wait times of 30-45 minutes.',
      aspects: [
        { id: 'asp-ra-food', name: 'Food Quality', label: 'Taste & Ingredient Authenticity', sentiment: 'positive', positiveRatio: 94, evidenceCount: 62, summary: 'Public dining reviews praise freshly ground spices, coconut chutney, and consistent preparation.', keyPhrases: ['authentic preparation', 'fresh accompaniments', 'consistent recipe'] },
        { id: 'asp-ra-wait', name: 'Service & Wait Times', label: 'Queue & Seating Efficiency', sentiment: 'negative', positiveRatio: 38, evidenceCount: 41, summary: 'Weekend queues with peak waiting times outside on sidewalk.', keyPhrases: ['peak rush delays', 'brisk indoor service', 'weekend queue'] }
      ],
      recencyTrends: [
        { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Consistently ranked high for traditional vegetarian dining.', mentionCount: 30 },
        { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Maintained strong standards across recurring reviews.', mentionCount: 42 },
        { year: 2026, label: '2026 Recent', sentiment: 'mixed', summary: 'Recent discussions highlight increased weekend queue delays.', mentionCount: 35 }
      ],
      sourceComposition: [
        { type: 'reddit', name: 'Public Forum Food Threads', count: 24, percentage: 42, iconName: 'MessageSquare' },
        { type: 'review', name: 'Culinary Review Directories', count: 18, percentage: 32, iconName: 'CheckCircle2' },
        { type: 'web', name: 'Local Dining Guides', count: 15, percentage: 26, iconName: 'Globe' }
      ],
      conflict: {
        hasConflict: true,
        topic: 'Peak Rush Queue Delays vs Culinary Quality',
        positiveSignalCount: 48,
        negativeSignalCount: 16,
        summary: 'Reviewers praise authentic food preparation while noting that weekend dining involves substantial queue waits.',
        impartialSynthesis: 'Public discussions confirm high culinary consistency and strong value for money, but advise visiting during non-peak hours to avoid 30–45 minute queue delays.',
        supportingEvidence: [
          {
            id: 'ev-demo-ra-1',
            source: 'review',
            sourceName: 'Culinary Review Submission',
            sourceDomain: 'dining.example.org',
            sourceTitle: 'Public discussion on traditional cuisine preparation',
            excerpt: 'Example positive culinary evidence: Authentic flavors and freshly brewed filter coffee remain highly consistent.',
            date: '2026-01-20',
            year: 2026,
            aspect: 'Food Quality',
            sentiment: 'positive',
            relevanceScore: 92,
            authorRole: 'Public contributor',
            verificationHash: 'rec-ra01'
          }
        ],
        opposingEvidence: [
          {
            id: 'ev-demo-ra-2',
            source: 'reddit',
            sourceName: 'Public Forum Thread',
            sourceDomain: 'reddit.com',
            sourceTitle: 'Discussion on weekend dining queue times',
            excerpt: 'Example critical review of peak queues: Waited nearly 40 minutes on Sunday afternoon before getting a table.',
            date: '2026-02-10',
            year: 2026,
            aspect: 'Service & Wait Times',
            sentiment: 'negative',
            relevanceScore: 95,
            authorRole: 'Public contributor',
            verificationHash: 'rec-ra02'
          }
        ]
      },
      evidenceList: [
        {
          id: 'ev-demo-ra-1',
          source: 'review',
          sourceName: 'Culinary Review Submission',
          sourceDomain: 'dining.example.org',
          sourceTitle: 'Public discussion on traditional cuisine preparation',
          excerpt: 'Example positive culinary evidence: Authentic flavors and freshly brewed filter coffee remain highly consistent.',
          date: '2026-01-20',
          year: 2026,
          aspect: 'Food Quality',
          sentiment: 'positive',
          relevanceScore: 92,
          authorRole: 'Public contributor',
          verificationHash: 'rec-ra01'
        },
        {
          id: 'ev-demo-ra-2',
          source: 'reddit',
          sourceName: 'Public Forum Thread',
          sourceDomain: 'reddit.com',
          sourceTitle: 'Discussion on weekend dining queue times',
          excerpt: 'Example critical review of peak queues: Waited nearly 40 minutes on Sunday afternoon before getting a table.',
          date: '2026-02-10',
          year: 2026,
          aspect: 'Service & Wait Times',
          sentiment: 'negative',
          relevanceScore: 95,
          authorRole: 'Public contributor',
          verificationHash: 'rec-ra02'
        }
      ]
    }
  ];

  return {
    id: 'query-demo-restaurants',
    query: query,
    category: 'restaurant',
    constraints: {
      location: 'Connaught Place, New Delhi',
      budgetMax: '₹1000 for two',
      priority: 'Food Authenticity & Value'
    },
    sourcesScannedCount: 36,
    entitiesDiscovered: 1,
    conflictsIdentified: 1,
    deduplicatedClusters: 5,
    results: entities,
    demoMode: true,
    sourceStatus: {
      reddit: 'unavailable',
      web_search: 'unavailable',
      local_archive: 'available'
    }
  };
}

function createHotelQuery(query: string): ResearchQuery {
  const entities: EntityReport[] = [
    {
      id: 'entity-hotel-a',
      canonicalName: 'Hotel A (Heritage Haveli)',
      aliases: ['Hotel A', 'Haveli A', 'Palace Stay A'],
      category: 'Hospitality / Heritage Hotel',
      location: 'Jaipur, Rajasthan',
      feesSummary: 'Example tariff: ~₹3,800 - ₹4,800 / night',
      annualFeeNumeric: 4200,
      highlightTag: 'Traditional Architecture & Courtyard Pool Setting',
      evidenceConfidenceScore: 91,
      confidenceBreakdown: {
        independentDiscussions: 48,
        sourceTypesCount: 4,
        recencyFactorScore: 93,
        corroborationDensity: 90,
        conflictDetected: true,
        conflictPenaltyApplied: 4,
      },
      summaryVerdict: 'Exceptional architectural charm with courtyard dining and folk music performances. Discussions note variable room acoustic insulation between heritage wings.',
      aspects: [
        { id: 'asp-ha-ambience', name: 'Ambience & Architecture', label: 'Architectural Charm & Decor', sentiment: 'positive', positiveRatio: 96, evidenceCount: 54, summary: 'Public hospitality reviews praise hand-painted frescoes and peaceful courtyard atmosphere.', keyPhrases: ['courtyard dining', 'traditional architecture', 'peaceful ambience'] },
        { id: 'asp-ha-noise', name: 'Room Acoustics', label: 'Acoustic Insulation & Noise', sentiment: 'negative', positiveRatio: 42, evidenceCount: 28, summary: 'Older heritage construction allows courtyard music to carry into courtyard-facing rooms.', keyPhrases: ['courtyard music echo', 'thin vintage doors', 'sound carries'] }
      ],
      recencyTrends: [
        { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Highly rated for authentic heritage restoration.', mentionCount: 22 },
        { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Maintained strong guest satisfaction and hospitality reviews.', mentionCount: 38 },
        { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Consistently recommended for cultural family trips.', mentionCount: 26 }
      ],
      sourceComposition: [
        { type: 'review', name: 'Travel Review Portals', count: 28, percentage: 50, iconName: 'CheckCircle2' },
        { type: 'web', name: 'Heritage Travel Blogs', count: 18, percentage: 32, iconName: 'Globe' },
        { type: 'official', name: 'Tourism Heritage Register', count: 10, percentage: 18, iconName: 'Award' }
      ],
      conflict: {
        hasConflict: true,
        topic: 'Evening Folk Music Atmosphere vs Room Soundproofing',
        positiveSignalCount: 42,
        negativeSignalCount: 14,
        summary: 'Guests celebrate the vibrant cultural evening music while light sleepers report sound carrying into ground-floor courtyard rooms.',
        impartialSynthesis: 'Available public evidence confirms high aesthetic and cultural satisfaction, while suggesting that light sleepers request garden-wing rooms situated away from the central courtyard.',
        supportingEvidence: [],
        opposingEvidence: []
      },
      evidenceList: [
        {
          id: 'ev-demo-ha-1',
          source: 'review',
          sourceName: 'Travel Review Submission',
          sourceDomain: 'travel.example.org',
          sourceTitle: 'Public review of heritage stay',
          excerpt: 'Example positive hospitality feedback: The central courtyard and restored architecture provide a calm retreat in the city.',
          date: '2026-01-18',
          year: 2026,
          aspect: 'Ambience & Architecture',
          sentiment: 'positive',
          relevanceScore: 94,
          authorRole: 'Public traveler',
          verificationHash: 'rec-ha01'
        }
      ]
    }
  ];

  return {
    id: 'query-demo-hotels',
    query: query,
    category: 'hotel',
    constraints: {
      location: 'Jaipur, Rajasthan',
      budgetMax: '₹5000 / night',
      priority: 'Heritage Ambience & Guest Service'
    },
    sourcesScannedCount: 32,
    entitiesDiscovered: 1,
    conflictsIdentified: 1,
    deduplicatedClusters: 4,
    results: entities,
    demoMode: true,
    sourceStatus: {
      reddit: 'unavailable',
      web_search: 'unavailable',
      local_archive: 'available'
    }
  };
}

function createProductQuery(query: string): ResearchQuery {
  const entities: EntityReport[] = [
    {
      id: 'entity-product-a',
      canonicalName: 'Device A (Developer Laptop)',
      aliases: ['Device A', 'Laptop A', 'Model A'],
      category: 'Hardware / Developer Laptops',
      location: 'Electronics Market',
      feesSummary: 'Example price: ~₹65,000 - ₹72,000',
      annualFeeNumeric: 68000,
      highlightTag: 'Balanced Thermals & Excellent Keyboard Ergonomics',
      evidenceConfidenceScore: 88,
      confidenceBreakdown: {
        independentDiscussions: 42,
        sourceTypesCount: 4,
        recencyFactorScore: 92,
        corroborationDensity: 86,
        conflictDetected: true,
        conflictPenaltyApplied: 4,
      },
      summaryVerdict: 'Strong reviews for keyboard travel, Linux driver compatibility, and thermal management during intensive compilation tasks. Mixed opinions on speaker fidelity.',
      aspects: [
        { id: 'asp-pa-perf', name: 'Performance & Thermals', label: 'Processor & Thermal Management', sentiment: 'positive', positiveRatio: 90, evidenceCount: 48, summary: 'Public tech discussions confirm sustained clock speeds without thermal throttling during multi-threaded builds.', keyPhrases: ['sustained clock speeds', 'cool palm rest', 'silent fan profile'] },
        { id: 'asp-pa-audio', name: 'Audio & Speakers', label: 'Speaker Quality', sentiment: 'negative', positiveRatio: 38, evidenceCount: 22, summary: 'Bottom-firing speakers lack bass resonance and sound muffled on lap surfaces.', keyPhrases: ['bottom firing speakers', 'lacks low end', 'headphones recommended'] }
      ],
      recencyTrends: [
        { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Launched with strong technical benchmark reception.', mentionCount: 36 },
        { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Remains popular budget developer workstation choice.', mentionCount: 28 }
      ],
      sourceComposition: [
        { type: 'web', name: 'Hardware Benchmark Portals', count: 24, percentage: 48, iconName: 'Globe' },
        { type: 'reddit', name: 'Developer Hardware Threads', count: 18, percentage: 36, iconName: 'MessageSquare' },
        { type: 'review', name: 'User Review Platforms', count: 8, percentage: 16, iconName: 'CheckCircle2' }
      ],
      conflict: {
        hasConflict: true,
        topic: 'Speaker Output vs Build Quality',
        positiveSignalCount: 38,
        negativeSignalCount: 12,
        summary: 'Users appreciate the durable chassis and compilation performance while expressing disappointment in audio quality.',
        impartialSynthesis: 'Public evidence confirms this model is well-engineered for software programming and multi-tasking, while users requiring media playback will benefit from external audio peripherals.',
        supportingEvidence: [],
        opposingEvidence: []
      },
      evidenceList: [
        {
          id: 'ev-demo-pa-1',
          source: 'web',
          sourceName: 'Hardware Review Archive',
          sourceDomain: 'tech.example.org',
          sourceTitle: 'Public performance benchmarking for programming workloads',
          excerpt: 'Example hardware performance evidence: The thermal profile sustains consistent clock speeds across extended compilation cycles.',
          date: '2026-01-25',
          year: 2026,
          aspect: 'Performance & Thermals',
          sentiment: 'positive',
          relevanceScore: 95,
          authorRole: 'Hardware reviewer',
          verificationHash: 'rec-pa01'
        }
      ]
    }
  ];

  return {
    id: 'query-demo-products',
    query: query,
    category: 'general',
    constraints: {
      budgetMax: '₹70,000',
      priority: 'Performance & Value'
    },
    sourcesScannedCount: 28,
    entitiesDiscovered: 1,
    conflictsIdentified: 1,
    deduplicatedClusters: 3,
    results: entities,
    demoMode: true,
    sourceStatus: {
      reddit: 'unavailable',
      web_search: 'unavailable',
      local_archive: 'available'
    }
  };
}

function createDynamicFallbackQuery(query: string): ResearchQuery {
  const entityName = `Research Subject: ${query.slice(0, 35)}`;
  const entities: EntityReport[] = [
    {
      id: 'entity-dynamic-demo',
      canonicalName: entityName,
      aliases: [query.toLowerCase()],
      category: 'Cross-Source Evidence Synthesis',
      location: 'Public Sources',
      feesSummary: 'Variable Market Value',
      highlightTag: 'Demonstration Evidence Topology',
      evidenceConfidenceScore: 78,
      confidenceBreakdown: {
        independentDiscussions: 18,
        sourceTypesCount: 3,
        recencyFactorScore: 85,
        corroborationDensity: 76,
        conflictDetected: false,
        conflictPenaltyApplied: 0,
      },
      summaryVerdict: `Demonstration evidence topology generated for "${query}". The system extracts key aspects, groups corroborating reports, and highlights conflicting evidence.`,
      aspects: [
        { id: 'asp-dyn-1', name: 'Core Quality', label: 'Primary Factor Consensus', sentiment: 'positive', positiveRatio: 82, evidenceCount: 16, summary: 'Cross-source public mentions reflect consistent general interest.', keyPhrases: ['consistent feedback', 'public mention'] },
        { id: 'asp-dyn-2', name: 'Value & Terms', label: 'Value Analysis', sentiment: 'mixed', positiveRatio: 60, evidenceCount: 12, summary: 'Public comments show variable opinions on overall value.', keyPhrases: ['market variance', 'price feedback'] }
      ],
      recencyTrends: [
        { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Baseline public mentions.', mentionCount: 12 },
        { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Active community feedback.', mentionCount: 14 }
      ],
      sourceComposition: [
        { type: 'web', name: 'Public Web Sources', count: 12, percentage: 60, iconName: 'Globe' },
        { type: 'reddit', name: 'Community Discussions', count: 8, percentage: 40, iconName: 'MessageSquare' }
      ],
      conflict: {
        hasConflict: false,
        topic: 'General Consensus',
        positiveSignalCount: 18,
        negativeSignalCount: 4,
        summary: 'Public evidence reflects broad alignment across available records.',
        impartialSynthesis: 'Cross-platform records indicate cohesive general reception across scanned sources.',
        supportingEvidence: [],
        opposingEvidence: []
      },
      evidenceList: [
        {
          id: 'ev-demo-dyn-1',
          source: 'web',
          sourceName: 'Public Web Source',
          sourceDomain: 'example.org',
          sourceTitle: 'Public discussion and review record',
          excerpt: 'Example retrieved evidence: Public discussion reflects general user satisfaction across primary criteria.',
          date: '2026-02-01',
          year: 2026,
          aspect: 'Core Quality',
          sentiment: 'positive',
          relevanceScore: 88,
          authorRole: 'Public contributor',
          verificationHash: 'rec-dyn01'
        }
      ]
    }
  ];

  return {
    id: `query-demo-${Math.floor(Math.random() * 100000)}`,
    query: query,
    category: 'general',
    constraints: parseQueryConstraints(query),
    sourcesScannedCount: 20,
    entitiesDiscovered: 1,
    conflictsIdentified: 0,
    deduplicatedClusters: 2,
    results: entities,
    demoMode: true,
    sourceStatus: {
      reddit: 'unavailable',
      web_search: 'unavailable',
      local_archive: 'available'
    }
  };
}
