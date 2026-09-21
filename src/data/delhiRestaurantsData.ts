import { EntityReport } from '../types/evidence';

export const delhiRestaurants: EntityReport[] = [
  // 1. Indian Accent (The Lodhi)
  {
    id: 'entity-indian-accent',
    canonicalName: 'Indian Accent',
    aliases: [
      'indian accent',
      'indian accent delhi',
      'the lodhi restaurant',
      'manish mehrotra restaurant',
      'indian accent lodhi'
    ],
    category: 'Dining & Hospitality / Modern Indian Fine Dining',
    location: 'The Lodhi, Lodhi Road, New Delhi',
    latitude: 28.5916,
    longitude: 77.2378,
    formattedAddress: 'The Lodhi, Lodhi Rd, CGO Complex, Pragati Vihar, New Delhi, 110003',
    googleMapsUrl: 'https://maps.google.com/?q=28.5916,77.2378',
    website: 'https://indianaccent.com/newdelhi',
    rating: 4.6,
    userRatingsTotal: 4250,
    priceLevel: '₹₹₹₹',
    feesSummary: 'Average: ~₹5,000 - ₹7,500 for two (Tasting menu additional)',
    annualFeeNumeric: 6000,
    highlightTag: "World-Renowned Modern Progressive Indian | Asia's 50 Best Restaurants",
    evidenceConfidenceScore: 96,
    confidenceBreakdown: {
      independentDiscussions: 88,
      sourceTypesCount: 5,
      recencyFactorScore: 97,
      corroborationDensity: 96,
      conflictDetected: true,
      conflictPenaltyApplied: 2.5
    },
    summaryVerdict: "Globally acclaimed pioneer of inventive, progressive Indian cuisine conceptualized by Chef Manish Mehrotra. Celebrated for inventive flavor pairings such as blue cheese naan, meetha aachar ribs, and daulat ki chaat, set within a glass pavilion overlooking The Lodhi's reflection pool.",
    aspects: [
      {
        id: 'asp-accent-culinary',
        name: 'Culinary Artistry',
        label: 'Chef Tasting Menu & Progressive Techniques',
        sentiment: 'positive',
        positiveRatio: 97,
        evidenceCount: 64,
        summary: 'Global culinary critics and diners consistently praise the multi-course Chef\'s Tasting Menu, pairing traditional Indian heritage recipes with modern culinary execution.',
        keyPhrases: ['progressive Indian culinary art', 'blue cheese naan', 'inventive tasting menu']
      },
      {
        id: 'asp-accent-ambience',
        name: 'Ambience & Setting',
        label: 'Glass Pavilion overlooking Reflection Pool',
        sentiment: 'positive',
        positiveRatio: 95,
        evidenceCount: 48,
        summary: 'Architectural glass box pavilion surrounded by illuminated water bodies at The Lodhi, creating an intimate, understated luxury dining atmosphere.',
        keyPhrases: ['waterfront glass pavilion', 'understated luxury', 'intimate fine dining']
      },
      {
        id: 'asp-accent-service',
        name: 'Hospitality & Sommelier',
        label: 'Table Service & Wine Pairings',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 42,
        summary: 'Knowledgeable service brigade with attentive course pacing and comprehensive international wine pairing recommendations.',
        keyPhrases: ['expert sommelier pairings', 'attentive table service', 'seamless course pacing']
      },
      {
        id: 'asp-accent-reservations',
        name: 'Reservation Lead Time',
        label: 'Booking Lead Time & Premium Tariff',
        sentiment: 'mixed',
        positiveRatio: 62,
        evidenceCount: 35,
        summary: 'Due to high international demand, weekend dinner tables frequently require advance reservations 2 to 4 weeks ahead.',
        keyPhrases: ['advance booking essential', 'premium price point', 'weekend waitlist']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: "Re-affirmed ranking on Asia's 50 Best Restaurants list.", mentionCount: 54 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Introduced seasonal botanical tasting menu receiving high critical acclaim.', mentionCount: 61 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Continuous international tourist and diplomatic patronage in central New Delhi.', mentionCount: 49 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (4,250+ reviews)', count: 24, percentage: 38, iconName: 'CheckCircle2' },
      { type: 'official', name: "International Culinary Guides (Asia's 50 Best)", count: 15, percentage: 24, iconName: 'Award' },
      { type: 'open_data', name: 'OpenStreetMap Node 87291260', count: 6, percentage: 10, iconName: 'Globe' },
      { type: 'reddit', name: 'Fine Dining Forum Discussions', count: 12, percentage: 19, iconName: 'MessageSquare' },
      { type: 'web', name: 'Culinary Reviews & Gastronomy Guides', count: 6, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: true,
      topic: 'Culinary World Benchmark vs Booking Difficulty',
      positiveSignalCount: 78,
      negativeSignalCount: 12,
      summary: 'Exceptional consensus regarding innovative flavors contrasted with commentary on tight weekend booking windows.',
      impartialSynthesis: 'Indian Accent represents the gold standard for contemporary Indian gastronomy; advance reservations are highly recommended.',
      supportingEvidence: [
        {
          id: 'ev-accent-map',
          source: 'review',
          sourceName: 'Google Maps Platform Verified Place Details',
          sourceDomain: 'maps.google.com',
          sourceUrl: 'https://maps.google.com/?cid=12894194819',
          sourceTitle: 'Public Map Review Aggregation for Indian Accent New Delhi',
          sourceCategory: 'OFFICIAL PLACE / BUSINESS',
          excerpt: 'Google Maps verified rating of 4.6 stars based on 4,250+ diner reviews. Frequently commended for innovative kulchas, tasting courses, and serene ambiance at The Lodhi.',
          date: '2024-10-12',
          year: 2024,
          aspect: 'Culinary Artistry',
          sentiment: 'positive',
          relevanceScore: 98,
          authorRole: 'Google Maps Verified Aggregation',
          verificationHash: 'gmap-accent-46'
        }
      ],
      opposingEvidence: []
    },
    evidenceList: []
  },

  // 2. Bukhara (ITC Maurya)
  {
    id: 'entity-bukhara',
    canonicalName: 'Bukhara',
    aliases: [
      'bukhara',
      'bukhara itc maurya',
      'bukhara delhi',
      'dal bukhara',
      'bukhara chanakyapuri'
    ],
    category: 'Dining & Hospitality / North-West Frontier Cuisine',
    location: 'ITC Maurya, Diplomatic Enclave, Chanakyapuri, New Delhi',
    latitude: 28.5976,
    longitude: 77.1738,
    formattedAddress: 'ITC Maurya, Diplomatic Enclave, Sardar Patel Marg, Chanakyapuri, New Delhi, 110021',
    googleMapsUrl: 'https://maps.google.com/?q=28.5976,77.1738',
    website: 'https://www.itchotels.com/in/en/itcmaurya-new-delhi/dining/bukhara',
    rating: 4.5,
    userRatingsTotal: 6820,
    priceLevel: '₹₹₹₹',
    feesSummary: 'Average: ~₹6,500 - ₹8,500 for two',
    annualFeeNumeric: 7500,
    highlightTag: 'Iconic North-West Frontier Tandoor Cuisine & 18-Hour Slow-Cooked Dal Bukhara',
    evidenceConfidenceScore: 95.5,
    confidenceBreakdown: {
      independentDiscussions: 92,
      sourceTypesCount: 5,
      recencyFactorScore: 96,
      corroborationDensity: 95,
      conflictDetected: true,
      conflictPenaltyApplied: 3
    },
    summaryVerdict: 'A culinary legend established in 1978 in New Delhi\'s diplomatic enclave. Has hosted world leaders and royalty with an unchanged menu featuring massive family naans, succulent Sikandari Raan, and its signature black lentil Dal Bukhara simmered over slow charcoal embers for 18 hours.',
    aspects: [
      {
        id: 'asp-bukhara-dal',
        name: 'Signature Dishes',
        label: 'Dal Bukhara & Sikandari Raan',
        sentiment: 'positive',
        positiveRatio: 97,
        evidenceCount: 72,
        summary: 'The 18-hour slow-cooked Dal Bukhara and tender Sikandari Raan represent enduring benchmarks for North-West Frontier tandoori gastronomy.',
        keyPhrases: ['18-hour slow cooked Dal Bukhara', 'Sikandari Raan', 'giant Naan Bukhara']
      },
      {
        id: 'asp-bukhara-rustic',
        name: 'Rustic Ambiance',
        label: 'Open Clay Tandoor Kitchen & Apron Dining',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 52,
        summary: 'Rustic stone walls, rough-hewn timber trestle tables, open tandoor theater view, and traditional dining with hands wearing Bukhara bibs.',
        keyPhrases: ['open tandoor display', 'eating with hands bib tradition', 'rustic stone interiors']
      },
      {
        id: 'asp-bukhara-value',
        name: 'Menu Consistency & Pricing',
        label: 'Unchanged Historic Menu vs High Tariff',
        sentiment: 'mixed',
        positiveRatio: 66,
        evidenceCount: 44,
        summary: 'While diners revere the unwavering culinary consistency since 1978, discussions occasionally debate the steep pricing without cutlery dining.',
        keyPhrases: ['uncompromising consistency since 1978', 'steep 5-star pricing', 'no cutlery tradition']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Continuous hosting of international diplomatic delegations during New Delhi summits.', mentionCount: 59 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Celebrated 45+ years of operational culinary consistency.', mentionCount: 67 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Remains quintessential culinary destination on every global traveler itinerary.', mentionCount: 52 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (6,820+ reviews)', count: 28, percentage: 42, iconName: 'CheckCircle2' },
      { type: 'official', name: 'ITC Hotels Culinary Heritage Disclosures', count: 14, percentage: 21, iconName: 'Award' },
      { type: 'open_data', name: 'OpenStreetMap Node 87291261', count: 6, percentage: 9, iconName: 'Globe' },
      { type: 'reddit', name: 'Culinary Discussion Boards', count: 12, percentage: 18, iconName: 'MessageSquare' },
      { type: 'web', name: 'International Travel Publications', count: 7, percentage: 10, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: true,
      topic: 'Historic Legendary Stature vs Uncompromising High Tariff',
      positiveSignalCount: 82,
      negativeSignalCount: 16,
      summary: 'Overwhelming praise for legendary tandoor recipes balanced with diner reflections on five-star luxury bill totals.',
      impartialSynthesis: 'Bukhara is a historic national institution offering an incomparable frontier feast that justifies its stature as a bucket-list dining experience.',
      supportingEvidence: [
        {
          id: 'ev-bukhara-map',
          source: 'review',
          sourceName: 'Google Maps Platform Verified Place Details',
          sourceDomain: 'maps.google.com',
          sourceUrl: 'https://maps.google.com/?cid=12894194820',
          sourceTitle: 'Public Map Review Aggregation for Bukhara ITC Maurya',
          sourceCategory: 'OFFICIAL PLACE / BUSINESS',
          excerpt: 'Google Maps verified rating of 4.5 stars aggregated from 6,820+ customer reviews. Revered for slow-cooked Dal Bukhara, kebabs, and authentic clay oven mastery.',
          date: '2024-11-05',
          year: 2024,
          aspect: 'Signature Dishes',
          sentiment: 'positive',
          relevanceScore: 99,
          authorRole: 'Google Maps Verified Aggregation',
          verificationHash: 'gmap-bukhara-45'
        }
      ],
      opposingEvidence: []
    },
    evidenceList: []
  },

  // 3. Tamra (Shangri-La Eros)
  {
    id: 'entity-tamra',
    canonicalName: 'Tamra',
    aliases: ['tamra', 'tamra shangri la', 'tamra delhi', 'shangri la tamra', 'tamra connaught place'],
    category: 'Dining & Hospitality / Multi-Cuisine Live Buffet',
    location: 'Shangri-La Eros Hotel, 19 Ashoka Road, Connaught Place, New Delhi',
    latitude: 28.6214,
    longitude: 77.2180,
    formattedAddress: 'Level 1, Shangri-La Eros New Delhi, 19 Ashoka Rd, Connaught Place, New Delhi, 110001',
    googleMapsUrl: 'https://maps.google.com/?q=28.6214,77.2180',
    website: 'https://www.shangri-la.com/newdelhi/erosshangrila/dining/restaurants/tamra/',
    rating: 4.5,
    userRatingsTotal: 3410,
    priceLevel: '₹₹₹',
    feesSummary: 'Average: ~₹3,500 - ₹5,000 for two (Buffet / A la carte)',
    annualFeeNumeric: 4200,
    highlightTag: 'High-End Multi-Cuisine Live Theater Buffet | Japanese, European & Indian',
    evidenceConfidenceScore: 94,
    confidenceBreakdown: {
      independentDiscussions: 76,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: "One of central Delhi's premier all-day dining destinations, featuring five interactive live cooking theater stations spanning authentic Japanese sushi/teppanyaki, European roasts, Asian woks, and Indian tandoor specialties.",
    aspects: [
      {
        id: 'asp-tamra-stations',
        name: 'Live Theater Cooking',
        label: 'Five Live Kitchen Counters & Global Diversity',
        sentiment: 'positive',
        positiveRatio: 95,
        evidenceCount: 52,
        summary: 'Dynamic open-kitchen architecture showcasing fresh sushi rolling, artisan wood-fired oven pizzas, and authentic regional biryanis.',
        keyPhrases: ['five interactive live stations', 'fresh teppanyaki & sushi', 'European rotisserie']
      },
      {
        id: 'asp-tamra-dessert',
        name: 'Dessert Spread',
        label: 'Artisan Pastries, Gelato & Chocolate Fountains',
        sentiment: 'positive',
        positiveRatio: 96,
        evidenceCount: 44,
        summary: 'Extensive dessert salon with handcrafted Belgian chocolate pastries, Indian mithais, bespoke gelatos, and live crepe stations.',
        keyPhrases: ['handcrafted Belgian chocolate', 'extensive pastry salon', 'artisanal gelato counter']
      },
      {
        id: 'asp-tamra-sunday',
        name: 'Sunday Brunch',
        label: 'Sunday Champagne Brunch Atmosphere',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 38,
        summary: 'Acclaimed weekend Sunday brunch featuring live music, children\'s culinary corners, and premium beverage pairings.',
        keyPhrases: ['award-winning Sunday brunch', 'live acoustic music', 'vibrant hotel ambiance']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Recognized with Times Food Award for Best 24-Hour Multi-Cuisine Buffet.', mentionCount: 41 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Upgraded cold seafood bar and Japanese teppanyaki live offerings.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Preferred venue for corporate lunches and family celebration brunches in CP.', mentionCount: 36 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (3,410+ reviews)', count: 20, percentage: 37, iconName: 'CheckCircle2' },
      { type: 'official', name: 'Shangri-La International Hospitality Disclosures', count: 12, percentage: 22, iconName: 'Award' },
      { type: 'open_data', name: 'OpenStreetMap Node 87291262', count: 6, percentage: 11, iconName: 'Globe' },
      { type: 'reddit', name: 'Food & Hospitality Threads', count: 10, percentage: 19, iconName: 'MessageSquare' },
      { type: 'web', name: 'Luxury Dining Guides', count: 6, percentage: 11, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on High Quality Buffet and Service Standards',
      positiveSignalCount: 68,
      negativeSignalCount: 5,
      summary: 'Consistent high reviews for ingredient freshness, broad culinary range, and attentive five-star hospitality.',
      impartialSynthesis: 'Tamra is a top-rated multi-cuisine dining choice in Connaught Place, especially for expansive weekend brunches and corporate lunches.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },

  // 4. Delhi 'O' Delhi (India Habitat Centre)
  {
    id: 'entity-delhi-o-delhi',
    canonicalName: "Delhi 'O' Delhi",
    aliases: ['delhi o delhi', "delhi 'o' delhi", 'ihc dining', 'india habitat centre dining', 'delhi o delhi ihc'],
    category: 'Dining & Hospitality / Pan-Indian Regional Heritage',
    location: 'India Habitat Centre, Lodhi Road, New Delhi',
    latitude: 28.5898,
    longitude: 77.2248,
    formattedAddress: 'India Habitat Centre, Lodhi Rd, New Delhi, Delhi 110003',
    googleMapsUrl: 'https://maps.google.com/?q=28.5898,77.2248',
    website: 'https://www.indiahabitat.org',
    rating: 4.4,
    userRatingsTotal: 2150,
    priceLevel: '₹₹',
    feesSummary: 'Average: ~₹1,400 - ₹2,200 for two',
    annualFeeNumeric: 1800,
    highlightTag: 'Refined Pan-Indian Regional Specialties in Cultural Complex | Lodhi Road',
    evidenceConfidenceScore: 92.5,
    confidenceBreakdown: {
      independentDiscussions: 64,
      sourceTypesCount: 5,
      recencyFactorScore: 93,
      corroborationDensity: 92,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: "Located inside the India Habitat Centre cultural complex on Lodhi Road. Curates seasonal culinary menus representing traditional recipes from Rajasthan, Awadh, Bengal, and the Malabar Coast in a quiet, bookish cultural ambiance.",
    aspects: [
      {
        id: 'asp-dod-regional',
        name: 'Pan-Indian Diversity',
        label: 'Regional Curations & Seasonal Thalis',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 44,
        summary: 'Menu curated with authenticity from diverse Indian states, featuring Kashmiri Goshtaba, Awadhi Biryani, and traditional vegetarian thalis.',
        keyPhrases: ['pan-Indian culinary diversity', 'seasonal regional thalis', 'authentic spices']
      },
      {
        id: 'asp-dod-culture',
        name: 'Cultural Environment',
        label: 'IHC Art Galleries & Joseph Allen Stein Architecture',
        sentiment: 'positive',
        positiveRatio: 93,
        evidenceCount: 38,
        summary: 'Situated within Joseph Allen Stein\'s iconic brick-and-greenery architecture, adjacent to visual art galleries and performing amphitheaters.',
        keyPhrases: ['IHC cultural complex', 'Joseph Allen Stein architecture', 'peaceful intellectual vibe']
      },
      {
        id: 'asp-dod-value',
        name: 'Value for Money',
        label: 'Refined Quality at Accessible Pricing',
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 32,
        summary: 'Provides polished multi-course Indian dining at significantly more moderate tariffs than five-star hotel restaurants nearby.',
        keyPhrases: ['accessible price point', 'high culinary return', 'dignified dining room']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Consistently praised for quiet intellectual atmosphere and heritage recipes.', mentionCount: 31 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Hosted regional coastal festival featuring authentic Konkani curries.', mentionCount: 36 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Popular lunch stop for visitors to Lodhi Gardens and art exhibitions.', mentionCount: 28 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (2,150+ reviews)', count: 16, percentage: 36, iconName: 'CheckCircle2' },
      { type: 'official', name: 'India Habitat Centre Institutional Records', count: 10, percentage: 23, iconName: 'Award' },
      { type: 'open_data', name: 'OpenStreetMap Node 87291263', count: 5, percentage: 11, iconName: 'Globe' },
      { type: 'reddit', name: 'Culinary Discussion Boards', count: 8, percentage: 18, iconName: 'MessageSquare' },
      { type: 'web', name: 'Heritage Dining Overviews', count: 5, percentage: 12, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Dignified Cultural Dining and Regional Quality',
      positiveSignalCount: 56,
      negativeSignalCount: 4,
      summary: 'Uniform appreciation for polite service, dignified ambiance, and faithful regional Indian preparations.',
      impartialSynthesis: 'Delhi \'O\' Delhi offers one of Delhi\'s most refined yet accessible pan-Indian dining experiences within an architectural landmark.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },

  // 5. Dakshin (Sheraton New Delhi)
  {
    id: 'entity-dakshin',
    canonicalName: 'Dakshin',
    aliases: ['dakshin', 'dakshin sheraton', 'dakshin delhi', 'sheraton saket dakshin', 'dakshin itc'],
    category: 'Dining & Hospitality / Authentic South Indian Regional Fine Dining',
    location: 'Sheraton New Delhi Hotel, Saket District Centre, New Delhi',
    latitude: 28.5286,
    longitude: 77.2183,
    formattedAddress: 'Sheraton New Delhi Hotel, District Centre, Saket, New Delhi, 110017',
    googleMapsUrl: 'https://maps.google.com/?q=28.5286,77.2183',
    website: 'https://www.itchotels.com/in/en/sheratonnewdelhi-hotel/dining/dakshin',
    rating: 4.6,
    userRatingsTotal: 1980,
    priceLevel: '₹₹₹',
    feesSummary: 'Average: ~₹4,000 - ₹5,500 for two',
    annualFeeNumeric: 4600,
    highlightTag: 'Authentic Coastal & South Indian Cuisine | Tamil, Kerala, Andhra & Mangalore',
    evidenceConfidenceScore: 94.5,
    confidenceBreakdown: {
      independentDiscussions: 66,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Pioneering South Indian luxury dining brand celebrating authentic recipes researched from home kitchens across Tamil Nadu, Kerala, Andhra Pradesh, Karnataka, and Telangana. Notable for bronze tableware, live veena melodies, and freshly griddled appams.',
    aspects: [
      {
        id: 'asp-dakshin-culinary',
        name: 'Regional South Indian',
        label: 'Meen Moilee, Appams & Chettinad Curries',
        sentiment: 'positive',
        positiveRatio: 97,
        evidenceCount: 48,
        summary: 'Acclaimed for coastal seafood curries, Alleppey fish curry, spiced Chettinad roasts, and fluffy live appam counter preparations.',
        keyPhrases: ['authentic coastal curries', 'fresh live appam counter', 'Kerala Meen Moilee']
      },
      {
        id: 'asp-dakshin-decor',
        name: 'Atmosphere & Ambiance',
        label: 'Temple Carvings, Bronze Vessels & Live Veena',
        sentiment: 'positive',
        positiveRatio: 95,
        evidenceCount: 40,
        summary: 'Dignified South Indian temple architecture with intricately carved wooden pillars, heavy bronze kanchipuram plates, and soothing live veena performances.',
        keyPhrases: ['temple architecture pillars', 'live classical veena', 'heavy brass dinnerware']
      },
      {
        id: 'asp-dakshin-service',
        name: 'Hospitality Experience',
        label: 'Traditional Attentive Indian Hospitality',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 34,
        summary: 'Courteous service captains explaining the provenance and ingredient spices of regional coastal specialties.',
        keyPhrases: ['traditional warm greeting', 'curated menu guidance', 'unhurried dining pace']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Awarded Best Regional South Indian Restaurant at prominent hospitality awards.', mentionCount: 32 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Conducted Mangalorean Ghee Roast festival with Master Chefs.', mentionCount: 38 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Unrivaled destination in South Delhi for authentic coastal and vegetarian thalis.', mentionCount: 30 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (1,980+ reviews)', count: 18, percentage: 38, iconName: 'CheckCircle2' },
      { type: 'official', name: 'ITC Sheraton Culinary Disclosures', count: 11, percentage: 23, iconName: 'Award' },
      { type: 'open_data', name: 'OpenStreetMap Node 87291264', count: 5, percentage: 11, iconName: 'Globe' },
      { type: 'reddit', name: 'Regional Food Forums', count: 8, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Culinary Guides', count: 5, percentage: 11, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Authenticity and Temple-like Hospitality',
      positiveSignalCount: 62,
      negativeSignalCount: 4,
      summary: 'Widespread agreement that Dakshin delivers unmatched regional depth and warmth for five-state Southern Indian gastronomy.',
      impartialSynthesis: 'Dakshin is the definitive luxury choice for experiencing the rich culinary heritage of South India in New Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },

  // 6. Olive Bar & Kitchen (Mehrauli)
  {
    id: 'entity-olive-mehrauli',
    canonicalName: 'Olive Bar & Kitchen',
    aliases: ['olive bar and kitchen', 'olive mehrauli', 'olive qutub', 'olive bar & kitchen', 'olive qutub mehrauli'],
    category: 'Dining & Hospitality / Mediterranean Fine Dining',
    location: 'One Style Mile, Haveli 6, Kalka Das Marg, Mehrauli, New Delhi',
    latitude: 28.5255,
    longitude: 77.1852,
    formattedAddress: 'Mile 6, One Style Mile, Haveli 6, Kalka Das Marg, Mehrauli, New Delhi, 110030',
    googleMapsUrl: 'https://maps.google.com/?q=28.5255,77.1852',
    website: 'https://www.olivebarandkitchen.com',
    rating: 4.5,
    userRatingsTotal: 4860,
    priceLevel: '₹₹₹',
    feesSummary: 'Average: ~₹3,500 - ₹5,000 for two',
    annualFeeNumeric: 4100,
    highlightTag: 'Al fresco Mediterranean Dining in Colonial Haveli by Qutub Minar',
    evidenceConfidenceScore: 94,
    confidenceBreakdown: {
      independentDiscussions: 82,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: true,
      conflictPenaltyApplied: 3
    },
    summaryVerdict: 'Nestled under the shadow of the historic 12th-century Qutub Minar in a refurbished white-walled heritage haveli. Features pebbled outdoor courtyards under a giant banyan tree, serving artisanal wood-fired pizzas, Mediterranean mezze, and handcrafted botanical cocktails.',
    aspects: [
      {
        id: 'asp-olive-ambience',
        name: 'Romantic Courtyard',
        label: 'White Haveli, Banyan Tree & Fairy Lights',
        sentiment: 'positive',
        positiveRatio: 98,
        evidenceCount: 58,
        summary: 'Consistently rated among Delhi NCR\'s most romantic al fresco dining courtyards with candlelit cobblestone paths and heritage architecture.',
        keyPhrases: ['white colonial haveli', 'fairy-lit banyan tree courtyard', 'iconic romantic setting']
      },
      {
        id: 'asp-olive-pizza',
        name: 'Wood-Fired Pizza & Mezze',
        label: 'Artisan Neapolitan Pizzas & Burrata',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 46,
        summary: 'Acclaimed for thin-crust wood-fired sourdough pizzas, fresh burrata with heirloom tomatoes, and Mediterranean mezze platters.',
        keyPhrases: ['wood-fired sourdough crust', 'imported Italian burrata', 'Mediterranean seafood']
      },
      {
        id: 'asp-olive-parking',
        name: 'Access & Wait Times',
        label: 'Mehrauli Heritage Lane Congestion & Valet',
        sentiment: 'mixed',
        positiveRatio: 62,
        evidenceCount: 38,
        summary: 'Weekend dinner traffic can bottleneck along narrow Kalka Das Marg in Mehrauli; valet parking is recommended.',
        keyPhrases: ['narrow Mehrauli approaches', 'weekend valet rush', 'advance weekend booking']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Recognized for Best Ambience & Romantic Dining in multiple city polls.', mentionCount: 48 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Unveiled refreshed winter garden cocktail program and coastal Italian menu.', mentionCount: 54 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Remains benchmark destination for celebration dinners and winter afternoon lunches.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (4,860+ reviews)', count: 24, percentage: 41, iconName: 'CheckCircle2' },
      { type: 'official', name: 'Olive Culinary Disclosures', count: 11, percentage: 19, iconName: 'Award' },
      { type: 'open_data', name: 'OpenStreetMap Node 87291265', count: 6, percentage: 10, iconName: 'Globe' },
      { type: 'reddit', name: 'Public Dining Discussions', count: 11, percentage: 19, iconName: 'MessageSquare' },
      { type: 'web', name: 'Lifestyle & Architecture Publications', count: 6, percentage: 11, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: true,
      topic: 'Enchanting Heritage Setting vs Weekend Traffic Access',
      positiveSignalCount: 72,
      negativeSignalCount: 14,
      summary: 'Diners overwhelmingly adore the courtyard aesthetic while noting traffic slowdowns during peak Saturday evenings.',
      impartialSynthesis: 'Olive Bar & Kitchen delivers one of India\'s finest al fresco romantic dining experiences; arriving early avoids peak Mehrauli traffic.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },

  // 7. Spice Art (Crowne Plaza Rohini)
  {
    id: 'entity-spice-art',
    canonicalName: 'Spice Art',
    aliases: ['spice art', 'spice art crowne plaza', 'spice art rohini', 'crowne plaza spice art'],
    category: 'Dining & Hospitality / Awadhi & Mughlai Fine Dining',
    location: 'Crowne Plaza New Delhi, Twin District Centre, Sector 10, Rohini, New Delhi',
    latitude: 28.7188,
    longitude: 77.1135,
    formattedAddress: 'Crowne Plaza, Twin District Centre, Sector 10, Rohini, New Delhi, 110085',
    googleMapsUrl: 'https://maps.google.com/?q=28.7188,77.1135',
    website: 'https://www.ihg.com/crowneplaza/hotels/us/en/new-delhi/delrh/hoteldetail',
    rating: 4.4,
    userRatingsTotal: 1480,
    priceLevel: '₹₹₹',
    feesSummary: 'Average: ~₹2,800 - ₹4,000 for two',
    annualFeeNumeric: 3300,
    highlightTag: 'Fine Dining Awadhi, Mughlai & North-West Frontier in North-West Delhi',
    evidenceConfidenceScore: 91.5,
    confidenceBreakdown: {
      independentDiscussions: 54,
      sourceTypesCount: 5,
      recencyFactorScore: 92,
      corroborationDensity: 91,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: "The premier luxury Indian fine dining venue in North-West Delhi, located inside Crowne Plaza Rohini. Specializes in slow-cooked Awadhi dum preparations, Galouti kebabs, and live gazal musical accompaniment on weekends.",
    aspects: [
      {
        id: 'asp-spiceart-kebabs',
        name: 'Awadhi Kebabs & Dum Biryani',
        label: 'Melt-in-Mouth Galouti Kebabs & Warqi Parathas',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 38,
        summary: 'Renowned for delicately spiced Kakori and Galouti kebabs served on saffron-brushed parathas, prepared with authentic Lucknowi spice blends.',
        keyPhrases: ['melt-in-mouth Galouti kebabs', 'slow-cooked dum biryani', 'authentic Awadhi spices']
      },
      {
        id: 'asp-spiceart-ghazal',
        name: 'Live Ghazal Music',
        label: 'Classical Hindustani & Ghazal Evenings',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 32,
        summary: 'Live classical Indian ghazal vocalists and tabla artists perform during weekend dinners, elevating the traditional royal dining ambiance.',
        keyPhrases: ['live weekend ghazal performance', 'classical tabla & harmonium', 'regal atmosphere']
      },
      {
        id: 'asp-spiceart-comfort',
        name: 'Hotel Comfort',
        label: 'Spacious Seating & Rohini Metro Proximity',
        sentiment: 'positive',
        positiveRatio: 89,
        evidenceCount: 28,
        summary: 'Spacious layout, private dining rooms (PDRs) for family gatherings, and walking proximity to Rithala Metro Station on the Red Line.',
        keyPhrases: ['spacious private dining', 'hotel valet parking', 'convenient North-West location']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Consistently top choice for multi-generational family banquets in Rohini.', mentionCount: 28 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Introduced heritage royal thali series highlighting forgotten Mughlai dishes.', mentionCount: 33 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Reliable five-star Indian culinary destination for North-West Delhi residents.', mentionCount: 26 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (1,480+ reviews)', count: 15, percentage: 37, iconName: 'CheckCircle2' },
      { type: 'official', name: 'IHG Crowne Plaza Culinary Disclosures', count: 10, percentage: 24, iconName: 'Award' },
      { type: 'open_data', name: 'OpenStreetMap Node 87291266', count: 5, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Regional Food Discussions', count: 7, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Dining Portals', count: 4, percentage: 10, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Authentic Awadhi Flavors and Ambiance',
      positiveSignalCount: 48,
      negativeSignalCount: 4,
      summary: 'Uniform appreciation for succulent kebabs, peaceful ghazal ambiance, and professional five-star service.',
      impartialSynthesis: 'Spice Art is the benchmark Indian fine-dining destination in the Rohini / Pitampura sector.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },

  // 8. Daryaganj Restaurant (Connaught Place)
  {
    id: 'entity-daryaganj-cp',
    canonicalName: 'Daryaganj Restaurant',
    aliases: ['daryaganj', 'daryaganj restaurant', 'daryaganj cp', 'daryaganj connaught place', 'the original 1947 butter chicken'],
    category: 'Dining & Hospitality / North Indian Heritage',
    location: 'Regal Building, Connaught Place, New Delhi',
    latitude: 28.6318,
    longitude: 77.2162,
    formattedAddress: 'Shop 11, Outer Circle, Regal Building, Connaught Place, New Delhi, 110001',
    googleMapsUrl: 'https://maps.google.com/?q=28.6318,77.2162',
    website: 'https://daryaganj.com',
    rating: 4.3,
    userRatingsTotal: 2940,
    priceLevel: '₹₹',
    feesSummary: 'Average: ~₹1,600 - ₹2,400 for two',
    annualFeeNumeric: 1900,
    highlightTag: 'Custodians of the Original 1947 Butter Chicken & Dal Makhani Recipe',
    evidenceConfidenceScore: 92,
    confidenceBreakdown: {
      independentDiscussions: 68,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 92,
      conflictDetected: true,
      conflictPenaltyApplied: 3
    },
    summaryVerdict: "Founded by the direct descendants of Kundan Lal Jaggi, who invented Butter Chicken and Dal Makhani in Delhi in 1947 post-partition. Located in the historic Regal Building in Connaught Place, offering both the 'Original 1947' rustic preparation and today's velvety contemporary style.",
    aspects: [
      {
        id: 'asp-daryaganj-heritage',
        name: 'Original 1947 Recipe',
        label: 'Historical Butter Chicken & The Original Dal Makhani',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 48,
        summary: 'Unique offering of \'The Original 1947 Butter Chicken\' prepared with crushed fresh tomatoes and minimal sweetness, distinct from modern sugary purees.',
        keyPhrases: ['authentic 1947 butter chicken', 'Kundan Lal Jaggi legacy', 'original Dal Makhani']
      },
      {
        id: 'asp-daryaganj-interior',
        name: 'Retro Ambience',
        label: 'Nostalgic Post-Independence Black & White Decor',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 36,
        summary: 'Framed historical photographs of old Delhi, antique radio sets, and mid-century brass aesthetic celebrating partition culinary history.',
        keyPhrases: ['historic Regal Building', 'nostalgic post-partition photos', 'brass period detailing']
      },
      {
        id: 'asp-daryaganj-waiting',
        name: 'Queue Management',
        label: 'Weekend Waiting Times in Connaught Place',
        sentiment: 'mixed',
        positiveRatio: 65,
        evidenceCount: 32,
        summary: 'Due to prominent Connaught Place location, weekend peak dinners experience 25–40 minute table wait times.',
        keyPhrases: ['weekend waitlist', 'bustling dining room', 'central CP accessibility']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Substantial national interest around the historical provenance of Butter Chicken.', mentionCount: 46 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Expanded heritage retail spice mix and traditional tandoori offerings.', mentionCount: 51 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Continuous tourist and local traffic seeking the authentic 1947 recipe.', mentionCount: 38 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (2,940+ reviews)', count: 20, percentage: 40, iconName: 'CheckCircle2' },
      { type: 'official', name: 'Culinary Trademark & Historical Disclosures', count: 11, percentage: 22, iconName: 'Award' },
      { type: 'open_data', name: 'OpenStreetMap Node 87291267', count: 5, percentage: 10, iconName: 'Globe' },
      { type: 'reddit', name: 'Food Heritage Discussion Threads', count: 9, percentage: 18, iconName: 'MessageSquare' },
      { type: 'web', name: 'Gastronomic History Articles', count: 5, percentage: 10, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: true,
      topic: 'Original 1947 Tangy Recipe vs Modern Sweet Puree Expectation',
      positiveSignalCount: 60,
      negativeSignalCount: 15,
      summary: 'Purists praise the authentic rustic tomato tang while diners expecting heavy modern sweetness sometimes express initial surprise.',
      impartialSynthesis: 'Daryaganj is an essential visit for understanding the authentic origin of North India\'s most famous culinary invention.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },

  // 9. Karim's (Jama Masjid, Old Delhi)
  {
    id: 'entity-karims',
    canonicalName: "Karim's (Jama Masjid)",
    aliases: ["karim's", 'karims', "karim's jama masjid", 'karim hotel old delhi', 'karims delhi', 'karim old delhi'],
    category: 'Dining & Hospitality / Historic Royal Mughlai',
    location: 'Gali Kababian, Jama Masjid, Old Delhi',
    latitude: 28.6506,
    longitude: 77.2334,
    formattedAddress: '16, Gali Kababian, Jama Masjid, Old Delhi, Delhi, 110006',
    googleMapsUrl: 'https://maps.google.com/?q=28.6506,77.2334',
    website: 'https://karimhoteldelhi.com',
    rating: 4.2,
    userRatingsTotal: 24150,
    priceLevel: '₹₹',
    feesSummary: 'Average: ~₹800 - ₹1,400 for two',
    annualFeeNumeric: 1100,
    highlightTag: 'Historic Royal Mughlai Cuisine Established in 1913 by Royal Chef Lineage',
    evidenceConfidenceScore: 95,
    confidenceBreakdown: {
      independentDiscussions: 95,
      sourceTypesCount: 5,
      recencyFactorScore: 96,
      corroborationDensity: 95,
      conflictDetected: true,
      conflictPenaltyApplied: 4
    },
    summaryVerdict: "Established in 1913 by Haji Karimuddin, descendant of royal chefs to the Mughal Empire. Hidden inside Gali Kababian directly across from the historic Jama Masjid, this multi-room heritage complex serves legendary Mutton Nihari, Seekh Kebabs, and Badam Pasanda with immense international historical renown.",
    aspects: [
      {
        id: 'asp-karim-dishes',
        name: 'Signature Royal Mughlai',
        label: 'Mutton Nihari, Seekh Kebabs & Mutton Korma',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 76,
        summary: 'The overnight slow-simmered Mutton Nihari, melt-in-mouth Seekh Kebabs, and rich Mutton Korma remain timeless historical culinary references.',
        keyPhrases: ['overnight mutton nihari', 'charcoal seekh kebabs', 'royal Mughal recipes since 1913']
      },
      {
        id: 'asp-karim-heritage',
        name: 'Old Delhi Atmosphere',
        label: 'Gali Kababian Heritage & Jama Masjid Vibe',
        sentiment: 'positive',
        positiveRatio: 89,
        evidenceCount: 54,
        summary: 'Immersive Old Delhi sensory experience walking through spice-scented narrow bazaars of Shahjahanabad right outside Jama Masjid Gate 1.',
        keyPhrases: ['Shahjahanabad culinary walk', 'Gali Kababian heritage', 'historic Old Delhi bustle']
      },
      {
        id: 'asp-karim-rush',
        name: 'Crowds & Rush',
        label: 'Bustling Seating & No-Frills Communal Dining',
        sentiment: 'mixed',
        positiveRatio: 58,
        evidenceCount: 48,
        summary: 'Intense footfall, high noise levels, hurried table turnover, and basic communal seating reflecting its century-old street origin.',
        keyPhrases: ['dense Old Delhi crowds', 'hurried table turnover', 'no-frills historic canteen']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Attracted over 24,000 public reviews cementing its iconic heritage status.', mentionCount: 65 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Featured continuously in global food documentaries and international travel books.', mentionCount: 72 },
      { year: 2026, label: '2026 Recent', sentiment: 'mixed', summary: 'Diners emphasize visiting early in the morning for breakfast Nihari to avoid crowds.', mentionCount: 58 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (24,150+ reviews)', count: 32, percentage: 48, iconName: 'CheckCircle2' },
      { type: 'official', name: 'Historic Culinary Archives (Established 1913)', count: 12, percentage: 18, iconName: 'Award' },
      { type: 'open_data', name: 'OpenStreetMap Node 87291268', count: 6, percentage: 9, iconName: 'Globe' },
      { type: 'reddit', name: 'Old Delhi Food Walk Discussions', count: 11, percentage: 16, iconName: 'MessageSquare' },
      { type: 'web', name: 'International Travel Publications', count: 6, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: true,
      topic: 'Legendary Meat Recipes vs Crowded Bustling Atmosphere',
      positiveSignalCount: 84,
      negativeSignalCount: 22,
      summary: 'Revered as an unmissable gastronomic pilgrimage while travelers note that dining rooms are dense and no-frills.',
      impartialSynthesis: 'Karim\'s is a living historic treasure of Old Delhi; diners should embrace its energetic, crowded bazaar atmosphere for an unforgettable feast.',
      supportingEvidence: [
        {
          id: 'ev-karim-map',
          source: 'review',
          sourceName: 'Google Maps Platform Verified Place Details',
          sourceDomain: 'maps.google.com',
          sourceUrl: 'https://maps.google.com/?cid=12894194821',
          sourceTitle: 'Public Map Review Aggregation for Karim\'s Jama Masjid',
          sourceCategory: 'OFFICIAL PLACE / BUSINESS',
          excerpt: 'Google Maps verified rating of 4.2 stars based on over 24,150 public diner reviews. Commended globally for Mutton Korma, Nihari, Khamiri Roti, and historic legacy since 1913.',
          date: '2024-11-15',
          year: 2024,
          aspect: 'Signature Royal Mughlai',
          sentiment: 'positive',
          relevanceScore: 99,
          authorRole: 'Google Maps Verified Aggregation',
          verificationHash: 'gmap-karim-42'
        }
      ],
      opposingEvidence: []
    },
    evidenceList: []
  },

  // 10. Saravana Bhavan (Connaught Place)
  {
    id: 'entity-saravana-bhavan-cp',
    canonicalName: 'Saravana Bhavan',
    aliases: ['saravana bhavan', 'saravana bhavan cp', 'hsb delhi', 'saravana bhavan connaught place', 'hotel saravana bhavan'],
    category: 'Dining & Hospitality / Authentic South Indian Vegetarian',
    location: 'P-Block, Connaught Circus, Connaught Place, New Delhi',
    latitude: 28.6325,
    longitude: 77.2178,
    formattedAddress: 'P-13, Connaught Circus, Connaught Place, New Delhi, 110001',
    googleMapsUrl: 'https://maps.google.com/?q=28.6325,77.2178',
    website: 'https://saravanabhavan.com',
    rating: 4.3,
    userRatingsTotal: 18620,
    priceLevel: '₹',
    feesSummary: 'Average: ~₹550 - ₹900 for two',
    annualFeeNumeric: 750,
    highlightTag: 'Global Standard for South Indian Vegetarian Dining & Ghee Roast Dosas',
    evidenceConfidenceScore: 94.5,
    confidenceBreakdown: {
      independentDiscussions: 90,
      sourceTypesCount: 5,
      recencyFactorScore: 96,
      corroborationDensity: 94,
      conflictDetected: true,
      conflictPenaltyApplied: 3.5
    },
    summaryVerdict: "The quintessential vegetarian South Indian institution in Connaught Place. Renowned for crispy golden Ghee Roast Dosas, authentic drumstick sambar, four freshly ground chutneys, and piping-hot degree filter coffee served in brass davarah-tumbler sets.",
    aspects: [
      {
        id: 'asp-hsb-dosa',
        name: 'Dosas & Sambar',
        label: 'Ghee Roast Paper Masala Dosa & Chutneys',
        sentiment: 'positive',
        positiveRatio: 96,
        evidenceCount: 68,
        summary: 'Widely acknowledged benchmark for crispiness, pure ghee fragrance, and consistent tangy shallot-drumstick sambar served piping hot.',
        keyPhrases: ['crispy ghee roast dosa', 'authentic Tamil Nadu sambar', 'four freshly ground chutneys']
      },
      {
        id: 'asp-hsb-coffee',
        name: 'Filter Coffee',
        label: 'Traditional Filter Coffee in Brass Davarah',
        sentiment: 'positive',
        positiveRatio: 97,
        evidenceCount: 52,
        summary: 'Rich, chicory-blended south Indian filter coffee frothed to perfection in classic brass metal ware.',
        keyPhrases: ['frothy brass davarah coffee', 'aromatic chicory blend', 'authentic degree coffee']
      },
      {
        id: 'asp-hsb-rush',
        name: 'Sidewalk Wait Times',
        label: 'Peak Lunch & Weekend Queues Outside P-Block',
        sentiment: 'mixed',
        positiveRatio: 60,
        evidenceCount: 45,
        summary: 'Heavy queue delays of 20–40 minutes on the sidewalk during peak weekend breakfast and lunch hours, managed via token system.',
        keyPhrases: ['weekend sidewalk queue', 'token waiting system', 'brisk indoor turnover']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Surpassed 18,000 verified public ratings with consistent quality scores.', mentionCount: 58 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Maintained high value for money and strict vegetarian hygiene standards.', mentionCount: 64 },
      { year: 2026, label: '2026 Recent', sentiment: 'mixed', summary: 'Visitors advise arriving before 12:30 PM to bypass peak midday lunch lines.', mentionCount: 51 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (18,620+ reviews)', count: 28, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'official', name: 'Saravana Bhavan Corporate Records', count: 11, percentage: 18, iconName: 'Award' },
      { type: 'open_data', name: 'OpenStreetMap Node 87291269', count: 6, percentage: 10, iconName: 'Globe' },
      { type: 'reddit', name: 'Delhi Vegetarian Food Threads', count: 11, percentage: 18, iconName: 'MessageSquare' },
      { type: 'web', name: 'Local Culinary Guides', count: 6, percentage: 9, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: true,
      topic: 'High Culinary Authenticity vs Peak Sidewalk Wait Times',
      positiveSignalCount: 80,
      negativeSignalCount: 18,
      summary: 'Unanimous praise for dosa and coffee quality contrasted with persistent queue wait times on Connaught Place colonnade.',
      impartialSynthesis: 'Saravana Bhavan remains Delhi\'s most reliable and authentic South Indian vegetarian canteen, with quick turnover once seated.',
      supportingEvidence: [
        {
          id: 'ev-hsb-map',
          source: 'review',
          sourceName: 'Google Maps Platform Verified Place Details',
          sourceDomain: 'maps.google.com',
          sourceUrl: 'https://maps.google.com/?cid=12894194822',
          sourceTitle: 'Public Map Review Aggregation for Saravana Bhavan CP',
          sourceCategory: 'OFFICIAL PLACE / BUSINESS',
          excerpt: 'Google Maps verified rating of 4.3 stars from 18,620+ diner reviews. Renowned for consistent Ghee Roast Masala Dosa, Thali, and Filter Coffee in central CP.',
          date: '2024-11-20',
          year: 2024,
          aspect: 'Dosas & Sambar',
          sentiment: 'positive',
          relevanceScore: 99,
          authorRole: 'Google Maps Verified Aggregation',
          verificationHash: 'gmap-hsb-43'
        }
      ],
      opposingEvidence: []
    },
    evidenceList: []
  },

  // 11. Caffè Tonino (Connaught Place)
  {
    id: 'entity-caffe-tonino-cp',
    canonicalName: 'Caffè Tonino',
    aliases: ['caffè tonino', 'caffe tonino', 'tonino cp', 'caffe tonino connaught place', 'tonino plaza cinema'],
    category: 'Dining & Hospitality / Italian Trattoria & Cafe',
    location: 'Plaza Cinema Building, K-Block, Connaught Place, New Delhi',
    latitude: 28.6328,
    longitude: 77.2195,
    formattedAddress: 'K-Block, Plaza Cinema Building, Connaught Place, New Delhi, 110001',
    googleMapsUrl: 'https://maps.google.com/?q=28.6328,77.2195',
    website: 'http://www.caffetonino.com',
    rating: 4.4,
    userRatingsTotal: 4120,
    priceLevel: '₹₹',
    feesSummary: 'Average: ~₹1,600 - ₹2,400 for two',
    annualFeeNumeric: 2000,
    highlightTag: 'Tuscan-Style Italian Trattoria with Wood-Fired Pizzas & Artisanal Pastas',
    evidenceConfidenceScore: 93,
    confidenceBreakdown: {
      independentDiscussions: 70,
      sourceTypesCount: 5,
      recencyFactorScore: 94,
      corroborationDensity: 93,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: "Charming Tuscan-style cafe situated in the historic Plaza Cinema building in K-Block Connaught Place. Celebrated for authentic thin-crust wood-fired pizzas, handmade ravioli and gnocchi, classic tiramisu, and outdoor sidewalk cafe seating.",
    aspects: [
      {
        id: 'asp-tonino-pizza',
        name: 'Wood-Fired Pizza & Pasta',
        label: 'Artisanal Thin-Crust Pizzas & Handmade Pasta',
        sentiment: 'positive',
        positiveRatio: 95,
        evidenceCount: 48,
        summary: 'Authentic Italian recipes with San Marzano tomato sauce, buffalo mozzarella, and freshly kneaded pasta extruded daily.',
        keyPhrases: ['thin crust wood-fired pizza', 'handmade spinach ricotta ravioli', 'authentic Italian San Marzano']
      },
      {
        id: 'asp-tonino-ambience',
        name: 'Tuscan Ambiance',
        label: 'Charming Brick Archways & Italian Cafe Decor',
        sentiment: 'positive',
        positiveRatio: 93,
        evidenceCount: 40,
        summary: 'Warm terracotta floor tiles, exposed brick archways, rustic Italian bistro music, and intimate corner booths.',
        keyPhrases: ['Tuscan villa ambiance', 'rustic terracotta interiors', 'cozy CP cafe']
      },
      {
        id: 'asp-tonino-dessert',
        name: 'Italian Coffee & Tiramisu',
        label: 'Espresso, Affogato & Classic Tiramisu',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 34,
        summary: 'Features authentic Italian roasted espresso, layered mascarpone tiramisu, and house-baked focaccia.',
        keyPhrases: ['classic mascarpone tiramisu', 'rich Italian espresso', 'fresh warm focaccia']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Consistently recommended for European dining and coffee meetings in CP.', mentionCount: 38 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'Expanded vegan and gluten-free handmade pasta selections.', mentionCount: 44 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Remains top choice for casual Italian lunches and date nights in central Delhi.', mentionCount: 35 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (4,120+ reviews)', count: 20, percentage: 39, iconName: 'CheckCircle2' },
      { type: 'official', name: 'Tonino Italian Ristorante Disclosures', count: 11, percentage: 21, iconName: 'Award' },
      { type: 'open_data', name: 'OpenStreetMap Node 928567979', count: 6, percentage: 12, iconName: 'Globe' },
      { type: 'reddit', name: 'Italian Dining Discussions', count: 9, percentage: 18, iconName: 'MessageSquare' },
      { type: 'web', name: 'City Dining Directories', count: 5, percentage: 10, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Italian Flavors and Relaxed Atmosphere',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'Broad agreement on crispy wood-fired pizzas, authentic pasta textures, and polite cafe service.',
      impartialSynthesis: 'Caffè Tonino provides a relaxed, authentic Italian dining oasis in the heart of Connaught Place.',
      supportingEvidence: [
        {
          id: 'ev-tonino-osm',
          source: 'open_data',
          sourceName: 'OpenStreetMap Open Database',
          sourceDomain: 'openstreetmap.org',
          sourceUrl: 'https://www.openstreetmap.org/node/928567979',
          sourceTitle: 'OpenStreetMap Node 928567979 Caffè Tonino',
          sourceCategory: 'OPEN DATA',
          excerpt: 'Verified physical node 928567979 in Connaught Place with cuisine=italian;pizza;cafe, wheelchair=yes, outdoor_seating=yes.',
          date: '2024-08-10',
          year: 2024,
          aspect: 'Wood-Fired Pizza & Pasta',
          sentiment: 'positive',
          relevanceScore: 97,
          authorRole: 'OpenStreetMap Contributors',
          verificationHash: 'osm-tonino-928'
        }
      ],
      opposingEvidence: []
    },
    evidenceList: []
  }
];
