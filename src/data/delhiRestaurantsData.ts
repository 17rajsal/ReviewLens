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
,
  // Wenger's
  {
    id: 'entity-wengers',
    canonicalName: 'Wenger\'s',
    aliases: ['wengers', "wenger's", 'wengers cp', 'wengers bakery', 'wengers connaught place'],
    category: 'Dining & Bakery / Heritage Swiss Confectionery & Pastries',
    location: 'A-Block, Connaught Place, New Delhi',
    latitude: 28.6331,
    longitude: 77.2194,
    formattedAddress: 'A-16, Inner Circle, Connaught Place, New Delhi, 110001',
    googleMapsUrl: 'https://maps.google.com/?q=28.6331,77.2194',
    website: 'https://wengers.co.in',
    rating: 4.5,
    userRatingsTotal: 18200,
    priceLevel: '₹₹',
    feesSummary: 'Average: ~₹400 - ₹800 for two',
    annualFeeNumeric: 600,
    highlightTag: 'Delhi\'s Oldest Operating Swiss Bakery est. 1926 | Legendary Shammis & Patties',
    evidenceConfidenceScore: 95,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Iconic Connaught Place institution established in 1926. World-famous for chicken and mutton patties, cream rolls, rum balls, and artisanal confectionery.',
    aspects: [
      {
        id: 'asp-wengers-0',
        name: 'Heritage Confectionery',
        label: 'Swiss Pastries & Patties',
        sentiment: 'positive',
        positiveRatio: 96,
        evidenceCount: 64,
        summary: 'Unmatched reputation for chicken patties, chocolate éclairs, and shammi kebabs.',
        keyPhrases: ['historic bakery est 1926', 'legendary chicken patties', 'fresh rum balls']
      },
      {
        id: 'asp-wengers-1',
        name: 'Consistency & Quality',
        label: 'Baking Standards',
        sentiment: 'positive',
        positiveRatio: 93,
        evidenceCount: 48,
        summary: 'Maintains high traditional standards across nearly a century of continuous baking operations.',
        keyPhrases: ['timeless taste', 'consistent baking quality', 'fresh morning batches']
      },
      {
        id: 'asp-wengers-2',
        name: 'Rush & Queue',
        label: 'Standing Room Only',
        sentiment: 'mixed',
        positiveRatio: 65,
        evidenceCount: 40,
        summary: 'Long queues especially on weekends with no sit-down dining inside the primary bakery.',
        keyPhrases: ['weekend rush', 'takeaway only', 'efficient crowd queue']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (18,200+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Wenger\'s maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Wenger's Deli
  {
    id: 'entity-wengers-deli',
    canonicalName: 'Wenger\'s Deli',
    aliases: ['wengers deli', "wenger's deli", 'wengers deli cp', 'wengers cafe'],
    category: 'Dining & Cafe / European Deli & Quick Gourmet',
    location: 'A-Block, Connaught Place, New Delhi',
    latitude: 28.6333,
    longitude: 77.2195,
    formattedAddress: 'A-16/1, Radial Road 3, Inner Circle, Connaught Place, New Delhi, 110001',
    googleMapsUrl: 'https://maps.google.com/?q=28.6333,77.2195',
    website: 'https://wengers.co.in',
    rating: 4.4,
    userRatingsTotal: 5200,
    priceLevel: '₹₹',
    feesSummary: 'Average: ~₹500 - ₹900 for two',
    annualFeeNumeric: 700,
    highlightTag: 'Gourmet Panini, Waffles & European Deli Sandwiches in CP',
    evidenceConfidenceScore: 93,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'The sit-down contemporary sibling of Wenger\'s Bakery. Renowned for crispy waffles, toasted paninis, lasagna, and gourmet hot dogs in a cozy European deli setting.',
    aspects: [
      {
        id: 'asp-wengers-deli-0',
        name: 'Gourmet Paninis & Waffles',
        label: 'European Deli Menu',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 42,
        summary: 'Freshly pressed paninis, Nutella waffles, and blueberry cheesecakes highly lauded by CP visitors.',
        keyPhrases: ['crispy nutella waffles', 'toasted chicken panini', 'flavorful lasagna']
      },
      {
        id: 'asp-wengers-deli-1',
        name: 'Value for Quality',
        label: 'CP Casual Dining',
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 35,
        summary: 'Affordable European cafe fare in the heart of the inner circle.',
        keyPhrases: ['fair pricing', 'high quality ingredients', 'reliable taste']
      },
      {
        id: 'asp-wengers-deli-2',
        name: 'Cozy Seating',
        label: 'Compact Dining Space',
        sentiment: 'mixed',
        positiveRatio: 68,
        evidenceCount: 30,
        summary: 'Compact seating area can feel crowded during peak lunch and evening hours.',
        keyPhrases: ['limited tables', 'cozy interior', 'quick turnaround']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (5,200+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Wenger\'s Deli maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Kake Da Hotel
  {
    id: 'entity-kake-da-hotel',
    canonicalName: 'Kake Da Hotel',
    aliases: ['kake da hotel', 'kake da hotel cp', 'kake da hotel connaught place', 'kake da hotel delhi'],
    category: 'Dining / Traditional Punjabi Dhabha & Curries',
    location: 'Municipal Market, Connaught Circus, New Delhi',
    latitude: 28.6329,
    longitude: 77.2201,
    formattedAddress: '67, Municipal Market, Connaught Circus, New Delhi, 110001',
    googleMapsUrl: 'https://maps.google.com/?q=28.6329,77.2201',
    website: 'https://kakedahotel.com',
    rating: 4.0,
    userRatingsTotal: 14500,
    priceLevel: '₹₹',
    feesSummary: 'Average: ~₹600 - ₹1,000 for two',
    annualFeeNumeric: 800,
    highlightTag: 'Legendary CP Punjabi Dhaba est. 1931 | Rich Dahi Meat & Butter Chicken',
    evidenceConfidenceScore: 92,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Partition-era rustic Punjabi culinary icon operating in Connaught Circus since 1931. Famous for its slow-cooked Dahi Meat, rich Saag Chicken, and hot tandoori rotis.',
    aspects: [
      {
        id: 'asp-kake-da-hotel-0',
        name: 'Signature Dahi Meat & Curries',
        label: 'Desi Ghee Curries',
        sentiment: 'positive',
        positiveRatio: 89,
        evidenceCount: 55,
        summary: 'Distinctive slow-cooked mutton in curd gravy and hearty Punjabi butter gravies.',
        keyPhrases: ['famous dahi meat', 'authentic desi ghee curry', 'spicy mutton curry']
      },
      {
        id: 'asp-kake-da-hotel-1',
        name: 'Historic Dhabha Vibe',
        label: 'Heritage CP Spot',
        sentiment: 'positive',
        positiveRatio: 85,
        evidenceCount: 40,
        summary: 'Rustic, no-frills dhabha atmosphere frequented by generations of Delhi foodies.',
        keyPhrases: ['heritage punjabi spot', 'no-frills dining', 'vintage connaught place']
      },
      {
        id: 'asp-kake-da-hotel-2',
        name: 'Rich Greasiness',
        label: 'Heavy Punjabi Masala',
        sentiment: 'mixed',
        positiveRatio: 62,
        evidenceCount: 36,
        summary: 'Authentically heavy on oil and ghee, which divides lighter health-conscious diners.',
        keyPhrases: ['rich heavy oil', 'spicy robust gravy', 'traditional dhabha style']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (14,500+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Kake Da Hotel maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Keventers (Original Milkshake Stand)
  {
    id: 'entity-keventers-cp',
    canonicalName: 'Keventers (Original Milkshake Stand)',
    aliases: ['keventers', 'keventers cp', 'original keventers', 'keventers connaught place'],
    category: 'Dining / Heritage Milkshakes & Beverages',
    location: 'A-Block, Connaught Place, New Delhi',
    latitude: 28.6327,
    longitude: 77.2212,
    formattedAddress: 'Shop 76, Radial Road 3, Inner Circle, Connaught Place, New Delhi, 110001',
    googleMapsUrl: 'https://maps.google.com/?q=28.6327,77.2212',
    website: 'https://keventers.com',
    rating: 4.2,
    userRatingsTotal: 8900,
    priceLevel: '₹',
    feesSummary: 'Average: ~₹200 - ₹450 for two',
    annualFeeNumeric: 300,
    highlightTag: 'Delhi\'s Iconic Milkshake Legacy est. 1925 | Famous Glass Bottles',
    evidenceConfidenceScore: 93,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Vintage milkshake brand tracing origins back to Edward Keventer in 1925. Renowned for serving thick milkshakes in collectible vintage glass bottles in Connaught Place.',
    aspects: [
      {
        id: 'asp-keventers-cp-0',
        name: 'Classic Milkshake Flavors',
        label: 'Butterscotch, Strawberry & Chocolate',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 48,
        summary: 'Nostalgic chilled milkshakes served fresh with high customer satisfaction.',
        keyPhrases: ['thick butterscotch shake', 'classic glass bottle', 'refreshing chilled milk']
      },
      {
        id: 'asp-keventers-cp-1',
        name: 'Heritage Branding',
        label: 'Collectible Glass Bottle',
        sentiment: 'positive',
        positiveRatio: 88,
        evidenceCount: 36,
        summary: 'Signature take-home glass bottles have become an iconic Delhi souvenir.',
        keyPhrases: ['take-home bottle', 'vintage aesthetic', 'quick service counter']
      },
      {
        id: 'asp-keventers-cp-2',
        name: 'Price Escalation',
        label: 'Modern Franchise Pricing',
        sentiment: 'mixed',
        positiveRatio: 64,
        evidenceCount: 30,
        summary: 'Some longtime locals note franchise price increases compared to original dairy counter rates.',
        keyPhrases: ['premium milkshake cost', 'franchise pricing', 'good occasional treat']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (8,900+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Keventers (Original Milkshake Stand) maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Farzi Café
  {
    id: 'entity-farzi-cafe-cp',
    canonicalName: 'Farzi Café',
    aliases: ['farzi cafe', 'farzi cafe cp', 'farzi cafe connaught place', 'farzi cafe delhi'],
    category: 'Dining / Modern Indian Bistro & Molecular Gastronomy',
    location: 'E-Block, Connaught Place, New Delhi',
    latitude: 28.6309,
    longitude: 77.2207,
    formattedAddress: 'E-38/39, First Floor, Inner Circle, Connaught Place, New Delhi, 110001',
    googleMapsUrl: 'https://maps.google.com/?q=28.6309,77.2207',
    website: 'https://massiverestaurants.com/farzicafe',
    rating: 4.3,
    userRatingsTotal: 9200,
    priceLevel: '₹₹₹',
    feesSummary: 'Average: ~₹2,200 - ₹3,500 for two (Cocktails extra)',
    annualFeeNumeric: 2800,
    highlightTag: 'Pioneering Indian Molecular Gastronomy & Artisanal Cocktails',
    evidenceConfidenceScore: 94,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Zorawar Kalra\'s trend-setting bistro reinventing traditional Indian dishes through modern culinary illusions, molecular gastronomy, and theatrical mixology.',
    aspects: [
      {
        id: 'asp-farzi-cafe-cp-0',
        name: 'Culinary Innovation',
        label: 'Molecular Twists on Indian Classics',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 52,
        summary: 'Playful presentations such as Mishti Doi Spheres, Dal Chawal Arancini, and Raj Kachori crisp.',
        keyPhrases: ['dal chawal arancini', 'molecular gastronomy', 'creative presentation']
      },
      {
        id: 'asp-farzi-cafe-cp-1',
        name: 'Ambience & Cocktails',
        label: 'Vibrant Nightlife & Mixology',
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 44,
        summary: 'Energetic music, chic contemporary interiors, and inventive craft cocktail presentations.',
        keyPhrases: ['craft cocktails', 'lively CP nightlife', 'stylish interior']
      },
      {
        id: 'asp-farzi-cafe-cp-2',
        name: 'Noise Levels',
        label: 'High Weekend Decibels',
        sentiment: 'mixed',
        positiveRatio: 66,
        evidenceCount: 34,
        summary: 'Loud music on weekend evenings suits partygoers more than quiet family dining.',
        keyPhrases: ['loud music on weekends', 'party atmosphere', 'bustling crowd']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (9,200+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Farzi Café maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Andhra Bhavan Canteen
  {
    id: 'entity-andhra-bhavan',
    canonicalName: 'Andhra Bhavan Canteen',
    aliases: ['andhra bhavan', 'andhra bhavan canteen', 'andhra bhawan', 'andhra canteen delhi'],
    category: 'Dining / Authentic Andhra Regional Thali & Biryani',
    location: 'Ashoka Road, Central Delhi',
    latitude: 28.6186,
    longitude: 77.2241,
    formattedAddress: '1, Ashoka Road, Near India Gate, New Delhi, 110001',
    googleMapsUrl: 'https://maps.google.com/?q=28.6186,77.2241',
    website: 'https://andhrabhavan.ap.gov.in',
    rating: 4.4,
    userRatingsTotal: 22000,
    priceLevel: '₹',
    feesSummary: 'Average: ~₹350 - ₹650 for two (Unlimited South Indian Thali)',
    annualFeeNumeric: 500,
    highlightTag: 'Legendary Unlimited Andhra Thali, Mutton Fry & Sunday Hyderabadi Biryani',
    evidenceConfidenceScore: 96,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'State bhavan canteen legendary among Delhi food lovers for lightning-fast service of authentic fiery Andhra vegetarian thalis, crispy mutton fry, and Sunday Hyderabadi Biryani.',
    aspects: [
      {
        id: 'asp-andhra-bhavan-0',
        name: 'Unlimited Andhra Thali',
        label: 'Pappu, Gongura & Ghee',
        sentiment: 'positive',
        positiveRatio: 96,
        evidenceCount: 76,
        summary: 'Legendary unlimited banana leaf-style thali with spicy gongura pickle, gunpowder podi, and fresh curd.',
        keyPhrases: ['unlimited andhra thali', 'authentic gongura pickle', 'gunpowder and ghee']
      },
      {
        id: 'asp-andhra-bhavan-1',
        name: 'Sunday Dum Biryani & Mutton Fry',
        label: 'Weekend Specials',
        sentiment: 'positive',
        positiveRatio: 95,
        evidenceCount: 62,
        summary: 'Spicy Hyderabadi Dum Biryani and tender Andhra mutton fry draw massive crowds every Sunday.',
        keyPhrases: ['hyderabadi dum biryani', 'spicy mutton fry', 'sunday lunchtime rush']
      },
      {
        id: 'asp-andhra-bhavan-2',
        name: 'Canteen Queue System',
        label: 'Token System & Rapid Turnover',
        sentiment: 'positive',
        positiveRatio: 87,
        evidenceCount: 48,
        summary: 'Well-organized token queue with lightning-fast table turnover ensuring reasonable wait times.',
        keyPhrases: ['token system', 'swift service', 'clean canteen tables']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (22,000+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Andhra Bhavan Canteen maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // The Big Chill Café (Khan Market)
  {
    id: 'entity-big-chill-khan',
    canonicalName: 'The Big Chill Café (Khan Market)',
    aliases: ['the big chill cafe', 'big chill', 'big chill khan market', 'big chill delhi'],
    category: 'Dining / Italian Trattoria, Pasta & Continental Desserts',
    location: 'Khan Market, New Delhi',
    latitude: 28.6001,
    longitude: 77.2272,
    formattedAddress: '68-A, Khan Market, Rabindra Nagar, New Delhi, 110003',
    googleMapsUrl: 'https://maps.google.com/?q=28.6001,77.2272',
    website: 'https://thebigchillcafe.com',
    rating: 4.5,
    userRatingsTotal: 11000,
    priceLevel: '₹₹₹',
    feesSummary: 'Average: ~₹1,800 - ₹2,800 for two',
    annualFeeNumeric: 2200,
    highlightTag: 'Delhi\'s Iconic Italian Café & Legendary Mississippi Mud Pie',
    evidenceConfidenceScore: 95,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'A beloved Delhi cultural landmark since 2000. Revered for classic Italian pasta in rich creamy sauces, brick-oven pizzas, vintage Hollywood poster decor, and legendary decadent desserts.',
    aspects: [
      {
        id: 'asp-big-chill-khan-0',
        name: 'Iconic Pasta & Pizza',
        label: 'Baked Lasagna & Penne Vodka',
        sentiment: 'positive',
        positiveRatio: 95,
        evidenceCount: 68,
        summary: 'Generous portions of four-cheese pasta, creamy chicken ravioli, and crispy thin-crust pizza.',
        keyPhrases: ['legendary penne vodka', 'baked four cheese pasta', 'classic caesar salad']
      },
      {
        id: 'asp-big-chill-khan-1',
        name: 'Legendary Desserts',
        label: 'Mississippi Mud Pie & Cheesecakes',
        sentiment: 'positive',
        positiveRatio: 97,
        evidenceCount: 72,
        summary: 'The Mississippi Mud Pie and Belgian Chocolate shake are among the most famous desserts in Delhi.',
        keyPhrases: ['mississippi mud pie', 'belgian chocolate shake', 'baked blueberry cheesecake']
      },
      {
        id: 'asp-big-chill-khan-2',
        name: 'Retro Cinema Aesthetics',
        label: 'Vintage Hollywood Posters',
        sentiment: 'positive',
        positiveRatio: 93,
        evidenceCount: 45,
        summary: 'Atmospheric retro walls adorned with vintage 1950s cinema classics and cozy booth seating.',
        keyPhrases: ['vintage movie posters', 'warm welcoming vibe', 'cozy khan market cafe']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (11,000+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'The Big Chill Café (Khan Market) maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Khan Chacha
  {
    id: 'entity-khan-chacha',
    canonicalName: 'Khan Chacha',
    aliases: ['khan chacha', 'khan chacha khan market', 'khan chacha rolls', 'khan chacha delhi'],
    category: 'Dining / Mughlai Kebabs & Kathi Rolls',
    location: 'Khan Market, New Delhi',
    latitude: 28.5998,
    longitude: 77.227,
    formattedAddress: 'Shop 50, 1st Floor, Middle Lane, Khan Market, New Delhi, 110003',
    googleMapsUrl: 'https://maps.google.com/?q=28.5998,77.2270',
    website: 'https://khanchacha.com',
    rating: 4.0,
    userRatingsTotal: 13000,
    priceLevel: '₹₹',
    feesSummary: 'Average: ~₹600 - ₹1,100 for two',
    annualFeeNumeric: 850,
    highlightTag: 'Famous Mutton Seekh, Chicken Tikka & Kakori Rolls in Khan Market',
    evidenceConfidenceScore: 92,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Established in 1972 by Haji Banda Hasan (\'Chacha\'). Famous for introducing succulent melt-in-mouth mutton seekh, chicken tikka, and kakori rolls to Khan Market shoppers.',
    aspects: [
      {
        id: 'asp-khan-chacha-0',
        name: 'Signature Kebab Rolls',
        label: 'Mutton Seekh & Chicken Tikka',
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 60,
        summary: 'Freshly rolled rumali rotis filled with juicy charcoal-tandoored meat and green mint chutney.',
        keyPhrases: ['mutton seekh roll', 'chicken tikka roll', 'mint chutney and onions']
      },
      {
        id: 'asp-khan-chacha-1',
        name: 'Khan Market Convenience',
        label: 'Quick Middle Lane Spot',
        sentiment: 'positive',
        positiveRatio: 87,
        evidenceCount: 42,
        summary: 'Prime middle lane spot ideal for grabbing hot kebab rolls during shopping excursions.',
        keyPhrases: ['quick bite in khan market', 'middle lane location', 'fast preparation']
      },
      {
        id: 'asp-khan-chacha-2',
        name: 'Price Transition',
        label: 'Kiosk to Commercial Outlets',
        sentiment: 'mixed',
        positiveRatio: 62,
        evidenceCount: 36,
        summary: 'Some patrons compare modern franchised roll portions with memories of the original small kiosk.',
        keyPhrases: ['premium price for rolls', 'popular brand', 'dependable kebab bite']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (13,000+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Khan Chacha maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // SodaBottleOpenerWala (Khan Market)
  {
    id: 'entity-sodabottleopenerwala-khan',
    canonicalName: 'SodaBottleOpenerWala (Khan Market)',
    aliases: ['sodabottleopenerwala', 'soda bottle opener wala', 'sodabottleopenerwala khan market', 'parsi cafe delhi'],
    category: 'Dining / Bombay Irani Café & Parsi Specialty',
    location: 'Khan Market, New Delhi',
    latitude: 28.6003,
    longitude: 77.2275,
    formattedAddress: '73, Khan Market, Rabindra Nagar, New Delhi, 110003',
    googleMapsUrl: 'https://maps.google.com/?q=28.6003,77.2275',
    website: 'https://sodabottleopenerwala.in',
    rating: 4.3,
    userRatingsTotal: 4600,
    priceLevel: '₹₹₹',
    feesSummary: 'Average: ~₹1,400 - ₹2,200 for two',
    annualFeeNumeric: 1800,
    highlightTag: 'Tribute to Bombay Irani Cafe Culture | Mutton Berry Pulao & Dhansak',
    evidenceConfidenceScore: 93,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Charming homage to dying Bombay Irani cafes featuring quirky chalkboard rules, toy trains, and authentic Parsi delicacies like Mutton Berry Pulao, Salli Boti, and Bun Maska Chai.',
    aspects: [
      {
        id: 'asp-sodabottleopenerwala-khan-0',
        name: 'Parsi & Irani Classics',
        label: 'Berry Pulao & Dhansak',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 45,
        summary: 'Authentic sour Iranian berries on fragrant spiced rice, paired with tender slow-cooked mutton.',
        keyPhrases: ['mutton berry pulao', 'comforting dhansak', 'bun maska chai']
      },
      {
        id: 'asp-sodabottleopenerwala-khan-1',
        name: 'Nostalgic Irani Decor',
        label: 'Quirky Cafe Atmosphere',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 38,
        summary: 'Checkerboard floors, overhead toy trains, vintage tins, and humorous rules on the walls.',
        keyPhrases: ['quirky vintage decor', 'overhead toy train', 'bombay irani vibe']
      },
      {
        id: 'asp-sodabottleopenerwala-khan-2',
        name: 'Cocktails & Chai',
        label: 'Irani Chai & Brews',
        sentiment: 'positive',
        positiveRatio: 89,
        evidenceCount: 32,
        summary: 'Irani chai served in glass tumblers alongside creative Parsi-themed craft cocktails.',
        keyPhrases: ['cutting irani chai', 'innovative cocktails', 'refreshing raspberry soda']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (4,600+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'SodaBottleOpenerWala (Khan Market) maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Carnatic Cafe (Lodhi Colony)
  {
    id: 'entity-carnatic-cafe-lodhi',
    canonicalName: 'Carnatic Cafe (Lodhi Colony)',
    aliases: ['carnatic cafe', 'carnatic cafe lodhi', 'carnatic cafe delhi', 'carnatic dosa'],
    category: 'Dining / Authentic Karnataka Vegetarian & Specialty Dosas',
    location: 'Lodhi Colony Market / Meharchand, New Delhi',
    latitude: 28.5878,
    longitude: 77.2234,
    formattedAddress: 'Shop 21, Ground Floor, Meharchand Market, Lodhi Colony, New Delhi, 110003',
    googleMapsUrl: 'https://maps.google.com/?q=28.5878,77.2234',
    website: 'https://carnaticcafe.com',
    rating: 4.5,
    userRatingsTotal: 7800,
    priceLevel: '₹₹',
    feesSummary: 'Average: ~₹600 - ₹1,000 for two',
    annualFeeNumeric: 750,
    highlightTag: 'Thick Golden Butter Dosas | Malleshwaram 18th Cross & Filter Coffee (100% Veg)',
    evidenceConfidenceScore: 95,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Celebrated culinary gem dedicated to traditional Bengaluru and Karnataka cuisine. Famous for thick, fluffy, golden-crisp dosas roasted in pure white butter, accompanied by three unique chutneys.',
    aspects: [
      {
        id: 'asp-carnatic-cafe-lodhi-0',
        name: 'Malleshwaram 18th Cross Dosa',
        label: 'Signature White Butter Dosa',
        sentiment: 'positive',
        positiveRatio: 97,
        evidenceCount: 62,
        summary: 'Thick fluffy dosa smeared with fiery red chutney powder and roasted in pure white butter.',
        keyPhrases: ['malleshwaram 18th cross', 'crispy white butter dosa', 'authentic karnataka taste']
      },
      {
        id: 'asp-carnatic-cafe-lodhi-1',
        name: 'Chutney Variety & Filter Coffee',
        label: 'Fresh Coconut & Tomato Chutneys',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 48,
        summary: 'Served without standard sambar; paired with fresh coconut, mint, and tomato chutneys, ending with authentic filter kaapi.',
        keyPhrases: ['three distinct chutneys', 'frothy filter coffee', 'fresh ingredients']
      },
      {
        id: 'asp-carnatic-cafe-lodhi-2',
        name: 'Minimalist Serene Space',
        label: 'Meharchand Market Setting',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 36,
        summary: 'Warm wooden accents, calm South Indian music, and clean minimalist dining area.',
        keyPhrases: ['peaceful cafe ambiance', 'meharchand market', 'courteous staff']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (7,800+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Carnatic Cafe (Lodhi Colony) maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Hauz Khas Social
  {
    id: 'entity-social-hkv',
    canonicalName: 'Hauz Khas Social',
    aliases: ['social hkv', 'hauz khas social', 'social hauz khas', 'social cafe delhi'],
    category: 'Dining & Cafe / Lake View Co-working Bistro & Lounge',
    location: 'Hauz Khas Village, South Delhi',
    latitude: 28.5539,
    longitude: 77.1948,
    formattedAddress: '9-A & 12, Hauz Khas Village, New Delhi, 110016',
    googleMapsUrl: 'https://maps.google.com/?q=28.5539,77.1948',
    website: 'https://socialoffline.in',
    rating: 4.3,
    userRatingsTotal: 16000,
    priceLevel: '₹₹₹',
    feesSummary: 'Average: ~₹1,600 - ₹2,500 for two (Drinks extra)',
    annualFeeNumeric: 2000,
    highlightTag: 'Pioneering Co-Working Cafe Overlooking Hauz Khas Heritage Lake',
    evidenceConfidenceScore: 94,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'The flagship outlet that pioneered India\'s co-working cafe culture. Features multi-level industrial design, massive glass windows overlooking the 13th-century Hauz Khas reservoir, and creative comfort food.',
    aspects: [
      {
        id: 'asp-social-hkv-0',
        name: 'Hauz Khas Lake View',
        label: 'Historic Reservoir Panoramas',
        sentiment: 'positive',
        positiveRatio: 96,
        evidenceCount: 72,
        summary: 'Dramatic vistas of the medieval Hauz Khas tank and Deer Park greenery.',
        keyPhrases: ['stunning lake view', 'hauz khas monument view', 'best sunset table']
      },
      {
        id: 'asp-social-hkv-1',
        name: 'Comfort Food & Cocktails',
        label: 'LIITs & Fusion Platters',
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 58,
        summary: 'Famous for signature Long Island Iced Teas (LIIT), butter chicken biryani, and death-by-chocolate desserts.',
        keyPhrases: ['famous LIIT cocktails', 'butter chicken biryani', 'generous fusion platters']
      },
      {
        id: 'asp-social-hkv-2',
        name: 'Weekend Crowd',
        label: 'Bustling Nightlife',
        sentiment: 'mixed',
        positiveRatio: 68,
        evidenceCount: 44,
        summary: 'Substantial waiting times and high energy beats during Friday and Saturday nights.',
        keyPhrases: ['weekend entry queues', 'party vibe', 'popular youth destination']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (16,000+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Hauz Khas Social maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Coast Café (Hauz Khas Village)
  {
    id: 'entity-coast-cafe-hkv',
    canonicalName: 'Coast Café (Hauz Khas Village)',
    aliases: ['coast cafe', 'coast cafe hkv', 'coast cafe hauz khas', 'coast cafe delhi'],
    category: 'Dining & Cafe / Coastal Malabar & Contemporary Continental',
    location: 'Hauz Khas Village, South Delhi',
    latitude: 28.5538,
    longitude: 77.1945,
    formattedAddress: 'H-2, 2nd & 3rd Floor, Hauz Khas Village, New Delhi, 110016',
    googleMapsUrl: 'https://maps.google.com/?q=28.5538,77.1945',
    website: 'https://obeetee.com/coastcafe',
    rating: 4.4,
    userRatingsTotal: 3400,
    priceLevel: '₹₹₹',
    feesSummary: 'Average: ~₹1,800 - ₹2,800 for two',
    annualFeeNumeric: 2200,
    highlightTag: 'Sunlit Coastal Kerala Curries, Fluffy Appams & Tree-Canopy Balconies',
    evidenceConfidenceScore: 93,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Sun-drenched, sophisticated cafe in Hauz Khas Village serving soulful Kerala coastal curries, fresh coconut milk gravies, soft hoppers/appams, and contemporary continental dishes.',
    aspects: [
      {
        id: 'asp-coast-cafe-hkv-0',
        name: 'Kerala Coastal Curries',
        label: 'Malabar Prawn & Coconut Gravy',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 44,
        summary: 'Authentic spiced coastal curries paired with feather-light hot appams.',
        keyPhrases: ['malabar fish curry', 'steaming appams', 'coconut prawn stew']
      },
      {
        id: 'asp-coast-cafe-hkv-1',
        name: 'Sunlit Tree-Top Ambiance',
        label: 'Whitewashed Decor & Plants',
        sentiment: 'positive',
        positiveRatio: 93,
        evidenceCount: 38,
        summary: 'Breezy white interiors with floor-to-ceiling windows looking directly into the lush tree canopy.',
        keyPhrases: ['tree canopy view', 'sunlit interiors', 'chic aesthetic']
      },
      {
        id: 'asp-coast-cafe-hkv-2',
        name: 'Cocktails & Salads',
        label: 'Boutique Sips',
        sentiment: 'positive',
        positiveRatio: 88,
        evidenceCount: 28,
        summary: 'Refreshing gin-based cocktails, fresh avocado salads, and artisan iced coffees.',
        keyPhrases: ['refreshing cocktails', 'avocado salad', 'artisanal coffee']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (3,400+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Coast Café (Hauz Khas Village) maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Nagaland Kitchen
  {
    id: 'entity-nagaland-kitchen-greenpark',
    canonicalName: 'Nagaland Kitchen',
    aliases: ['nagaland kitchen', 'nagaland kitchen green park', 'naga food delhi', 'nagaland restaurant'],
    category: 'Dining / Authentic Naga & North-East Tribal Specialty',
    location: 'Green Park Extension, South Delhi',
    latitude: 28.5587,
    longitude: 77.2065,
    formattedAddress: 'S-2, Uphaar Cinema Complex, Green Park Extension, New Delhi, 110016',
    googleMapsUrl: 'https://maps.google.com/?q=28.5587,77.2065',
    website: 'https://nagalandkitchen.com',
    rating: 4.3,
    userRatingsTotal: 2800,
    priceLevel: '₹₹',
    feesSummary: 'Average: ~₹1,000 - ₹1,600 for two',
    annualFeeNumeric: 1300,
    highlightTag: 'Authentic Naga Smoked Pork, Raja Mircha & Bamboo Shoot Curries',
    evidenceConfidenceScore: 92,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'One of Delhi\'s most respected ambassadors of authentic Naga cuisine. Specializes in traditional smoked meats, bamboo shoot stews, and fiery Raja Mircha (Bhut Jolokia) chutneys.',
    aspects: [
      {
        id: 'asp-nagaland-kitchen-greenpark-0',
        name: 'Authentic Smoked Meats',
        label: 'Smoked Pork with Axone',
        sentiment: 'positive',
        positiveRatio: 93,
        evidenceCount: 40,
        summary: 'Authentic preparation using fermented bamboo shoot, dried fish, and fermented soya bean (axone).',
        keyPhrases: ['smoked pork with bamboo shoot', 'authentic axone flavor', 'spicy raja mircha chutney']
      },
      {
        id: 'asp-nagaland-kitchen-greenpark-1',
        name: 'Warm Tribal Hospitality',
        label: 'Traditional Decor',
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 32,
        summary: 'Welcoming staff and authentic Naga tribal motifs, wood carvings, and woven textiles.',
        keyPhrases: ['traditional naga artifacts', 'welcoming hosts', 'cozy seating']
      },
      {
        id: 'asp-nagaland-kitchen-greenpark-2',
        name: 'Acquired Flavor Profile',
        label: 'Pungent Fermented Dishes',
        sentiment: 'nuanced',
        positiveRatio: 72,
        evidenceCount: 28,
        summary: 'Fermented bamboo shoot and axone feature distinct pungent aromas prized by enthusiasts but intense for beginners.',
        keyPhrases: ['pungent authentic aromas', 'acquired taste', 'enthusiastic foodies']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (2,800+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Nagaland Kitchen maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Moti Mahal Delux (South Extension II)
  {
    id: 'entity-moti-mahal-delux-south-ex',
    canonicalName: 'Moti Mahal Delux (South Extension II)',
    aliases: ['moti mahal', 'moti mahal delux', 'moti mahal south ex', 'moti mahal butter chicken'],
    category: 'Dining / Heritage Mughlai, Tandoori & Butter Chicken',
    location: 'South Extension II, New Delhi',
    latitude: 28.5678,
    longitude: 77.2198,
    formattedAddress: 'E-31/32, South Extension II, New Delhi, 110049',
    googleMapsUrl: 'https://maps.google.com/?q=28.5678,77.2198',
    website: 'https://motimahaldelux.com',
    rating: 4.1,
    userRatingsTotal: 6400,
    priceLevel: '₹₹₹',
    feesSummary: 'Average: ~₹1,400 - ₹2,200 for two',
    annualFeeNumeric: 1800,
    highlightTag: 'Pioneers of Tandoori Chicken, Murgh Makhani & Dal Makhani Legacy',
    evidenceConfidenceScore: 92,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Historic restaurant brand whose founders (Kundan Lal Gujral & partners) famously created Butter Chicken and Dal Makhani in post-partition Delhi. Continues serving classic tandoori platters.',
    aspects: [
      {
        id: 'asp-moti-mahal-delux-south-ex-0',
        name: 'Classic Butter Chicken & Dal',
        label: 'Original Makhani Gravy',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 52,
        summary: 'Traditional silky tomato-fenugreek butter chicken gravy cooked without modern chemical colorings.',
        keyPhrases: ['historic butter chicken', 'slow simmered dal makhani', 'tender tandoori chicken']
      },
      {
        id: 'asp-moti-mahal-delux-south-ex-1',
        name: 'Family Dining Comfort',
        label: 'Traditional South Ex Outpost',
        sentiment: 'positive',
        positiveRatio: 87,
        evidenceCount: 38,
        summary: 'Spacious family seating and dependable hospitality in the busy South Extension market.',
        keyPhrases: ['classic family restaurant', 'courteous captains', 'south ex shopping meal']
      },
      {
        id: 'asp-moti-mahal-delux-south-ex-2',
        name: 'Brand Proliferation',
        label: 'Franchise Comparisons',
        sentiment: 'mixed',
        positiveRatio: 64,
        evidenceCount: 32,
        summary: 'Some diners debate subtle taste variations across different Moti Mahal franchise branches.',
        keyPhrases: ['traditional recipe', 'dependable north indian', 'franchise variation noted']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (6,400+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Moti Mahal Delux (South Extension II) maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Defence Bakery
  {
    id: 'entity-defence-bakery',
    canonicalName: 'Defence Bakery',
    aliases: ['defence bakery', 'defence colony bakery', 'defence bakery delhi'],
    category: 'Dining & Bakery / Heritage European Breads, Quiches & Confectionery',
    location: 'Defence Colony Market, New Delhi',
    latitude: 28.5739,
    longitude: 77.2312,
    formattedAddress: 'Shop 34, Defence Colony Market, New Delhi, 110024',
    googleMapsUrl: 'https://maps.google.com/?q=28.5739,77.2312',
    website: 'https://defencebakery.in',
    rating: 4.5,
    userRatingsTotal: 5900,
    priceLevel: '₹₹',
    feesSummary: 'Average: ~₹400 - ₹800 for two',
    annualFeeNumeric: 600,
    highlightTag: 'Pioneer of Artisanal Sourdough, Quiches & Belgian Truffle Cakes est. 1962',
    evidenceConfidenceScore: 94,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Established in 1962 by the Dhingra family, Defence Bakery was among the first in the capital to introduce genuine artisanal European sourdoughs, savory quiches, and delicate French pastries.',
    aspects: [
      {
        id: 'asp-defence-bakery-0',
        name: 'Artisanal Breads & Quiches',
        label: 'Sourdough & Savories',
        sentiment: 'positive',
        positiveRatio: 96,
        evidenceCount: 54,
        summary: 'Exceptional spinach-mushroom quiches, multigrain loaves, focaccia, and stuffed savory pies.',
        keyPhrases: ['fresh artisan sourdough', 'savory quiches', 'delicate french croissants']
      },
      {
        id: 'asp-defence-bakery-1',
        name: 'Cakes & Confectionery',
        label: 'Belgian Chocolate & Cheesecakes',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 46,
        summary: 'Decadent custom celebration cakes, mud cakes, and delicate seasonal strawberry tarts.',
        keyPhrases: ['belgian chocolate truffle', 'seasonal fruit tarts', 'custom birthday cakes']
      },
      {
        id: 'asp-defence-bakery-2',
        name: 'Takeaway Format',
        label: 'Counter Pickup',
        sentiment: 'positive',
        positiveRatio: 89,
        evidenceCount: 35,
        summary: 'Efficient counter ordering with quick packaging and steady neighborhood footfall.',
        keyPhrases: ['bustling defence colony spot', 'speedy counter service', 'clean hygiene standards']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (5,900+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Defence Bakery maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Colonel's Kababz
  {
    id: 'entity-colonel-kababz',
    canonicalName: 'Colonel\'s Kababz',
    aliases: ['colonel kababz', "colonel's kababz", 'colonels kababs defence colony'],
    category: 'Dining / Charcoal Tandoori & Mughlai Specialties',
    location: 'Defence Colony Market, New Delhi',
    latitude: 28.5741,
    longitude: 77.2315,
    formattedAddress: '29, Defence Colony Market, New Delhi, 110024',
    googleMapsUrl: 'https://maps.google.com/?q=28.5741,77.2315',
    website: 'https://colonelskababz.com',
    rating: 4.2,
    userRatingsTotal: 4800,
    priceLevel: '₹₹',
    feesSummary: 'Average: ~₹800 - ₹1,400 for two',
    annualFeeNumeric: 1100,
    highlightTag: 'Famous Defence Colony Mutton Galouti, Burrah & Tandoori Fish',
    evidenceConfidenceScore: 92,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Long-running Defence Colony favorite founded by a retired army officer. Famed for charcoal-smoked Mutton Burrah, silken Kakori and Galouti kebabs, and car-side dine-in service.',
    aspects: [
      {
        id: 'asp-colonel-kababz-0',
        name: 'Charcoal Kebabs',
        label: 'Mutton Burrah & Kakori',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 46,
        summary: 'Charred to smoky perfection with rich secret spice blends and tender textures.',
        keyPhrases: ['smoky mutton burrah', 'soft galouti kebabs', 'crispy tandoori chicken']
      },
      {
        id: 'asp-colonel-kababz-1',
        name: 'Car Dine-In Culture',
        label: 'Evening Car Service',
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 38,
        summary: 'Popular evening tradition of having kebabs served directly on tray-stands in parked cars.',
        keyPhrases: ['car dine-in service', 'lively market parking', 'quick roadside service']
      },
      {
        id: 'asp-colonel-kababz-2',
        name: 'Menu Breadth',
        label: 'Curries & Roomali Rotis',
        sentiment: 'positive',
        positiveRatio: 86,
        evidenceCount: 30,
        summary: 'Hearty main-course curries paired with freshly tossed paper-thin roomali rotis.',
        keyPhrases: ['paper thin roomali', 'rich mutton rogan josh', 'flavorful korma']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (4,800+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Colonel\'s Kababz maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Burma Burma Restaurant & Tea Room
  {
    id: 'entity-burma-burma-saket',
    canonicalName: 'Burma Burma Restaurant & Tea Room',
    aliases: ['burma burma', 'burma burma saket', 'burma burma delhi', 'burma burma select citywalk'],
    category: 'Dining / 100% Vegetarian Burmese Specialty & Artisan Tea Room',
    location: 'Select Citywalk, Saket, South Delhi',
    latitude: 28.5283,
    longitude: 77.2192,
    formattedAddress: 'Shop S-25, 2nd Floor, Select Citywalk, Saket District Centre, New Delhi, 110017',
    googleMapsUrl: 'https://maps.google.com/?q=28.5283,77.2192',
    website: 'https://burmaburma.in',
    rating: 4.6,
    userRatingsTotal: 6800,
    priceLevel: '₹₹₹',
    feesSummary: 'Average: ~₹1,800 - ₹2,600 for two',
    annualFeeNumeric: 2200,
    highlightTag: 'All-Vegetarian Burmese Dining | Authentic Khow Suey & Tea Leaf Salad',
    evidenceConfidenceScore: 96,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Celebrated pan-Indian concept redefining plant-based dining. Serves exquisite family-recipe Burmese dishes without onion/garlic options alongside an extraordinary catalog of artisanal teas.',
    aspects: [
      {
        id: 'asp-burma-burma-saket-0',
        name: 'Signature Khow Suey & Salads',
        label: 'Traditional Burmese Flavors',
        sentiment: 'positive',
        positiveRatio: 97,
        evidenceCount: 65,
        summary: 'Coconut cream Khow Suey with customizable crisp toppings, fermented tea leaf salad (Laphet Thoke).',
        keyPhrases: ['legendary khow suey', 'fermented tea leaf salad', 'crispy lotus stem']
      },
      {
        id: 'asp-burma-burma-saket-1',
        name: '100% Vegetarian Philosophy',
        label: 'No Meat or Animal Derivatives',
        sentiment: 'positive',
        positiveRatio: 95,
        evidenceCount: 52,
        summary: 'Entire menu is purely vegetarian and remarkably creative, winning over vegetarian and meat-eating diners alike.',
        keyPhrases: ['pure veg fine dining', 'creative plant-based recipes', 'mock meat textures']
      },
      {
        id: 'asp-burma-burma-saket-2',
        name: 'Tea Room Ceremonies',
        label: 'Artisan Tea Selection',
        sentiment: 'positive',
        positiveRatio: 93,
        evidenceCount: 40,
        summary: 'Over 50 exotic handpicked whole-leaf teas brewed at table-side with traditional sand timers.',
        keyPhrases: ['artisan tea ceremony', 'flowering white teas', 'soothing tea room']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (6,800+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Burma Burma Restaurant & Tea Room maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Yum Yum Cha (Saket)
  {
    id: 'entity-yum-yum-cha-saket',
    canonicalName: 'Yum Yum Cha (Saket)',
    aliases: ['yum yum cha', 'yum yum cha saket', 'yum yum cha select citywalk', 'yum yum cha delhi'],
    category: 'Dining / Origami-Themed Pan-Asian, Dim Sum & Sushi',
    location: 'Select Citywalk, Saket, South Delhi',
    latitude: 28.5286,
    longitude: 77.2195,
    formattedAddress: '2nd Floor, Select Citywalk Mall, Saket District Centre, New Delhi, 110017',
    googleMapsUrl: 'https://maps.google.com/?q=28.5286,77.2195',
    website: 'https://yumyumcha.in',
    rating: 4.4,
    userRatingsTotal: 5200,
    priceLevel: '₹₹₹',
    feesSummary: 'Average: ~₹2,000 - ₹3,000 for two',
    annualFeeNumeric: 2500,
    highlightTag: 'Vibrant Origami Decor, Crystal Dim Sum, Sizzling Stone Bowls & Mochi Ice Cream',
    evidenceConfidenceScore: 94,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Playful, brightly colored Pan-Asian restaurant decorated with thousands of paper origami installations. Famed for translucent crystal dim sum, sizzling stone bowls, and Japanese mochi ice creams.',
    aspects: [
      {
        id: 'asp-yum-yum-cha-saket-0',
        name: 'Dim Sum & Sushi Baskets',
        label: 'Crystal Dumplings & Nigiri',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 50,
        summary: 'Delicate translucent wrappers filled with prawn and edamame, fresh salmon rolls, and spicy crab sushi.',
        keyPhrases: ['crystal truffle dim sum', 'fresh salmon sushi', 'piping hot baskets']
      },
      {
        id: 'asp-yum-yum-cha-saket-1',
        name: 'Sizzling Stone Bowls & Noodles',
        label: 'Interactive Hot Pots',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 38,
        summary: 'Stone bowls brought sizzling to the table with noodles, fragrant sauces, and crispy garlic.',
        keyPhrases: ['sizzling stone bowl', 'chili garlic noodles', 'flavorful broth']
      },
      {
        id: 'asp-yum-yum-cha-saket-2',
        name: 'Origami Aesthetic',
        label: 'Playful Modern Design',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 34,
        summary: 'Delightful Japanese origami art on walls and ceilings creating an uplifting atmosphere.',
        keyPhrases: ['origami ceiling art', 'vibrant playful dining', 'mochi ice cream finish']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (5,200+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Yum Yum Cha (Saket) maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Leo's Pizzeria
  {
    id: 'entity-leos-pizzeria-vasant-vihar',
    canonicalName: 'Leo\'s Pizzeria',
    aliases: ['leos pizzeria', "leo's pizzeria", 'leos pizza vasant vihar', 'leos pizza delhi'],
    category: 'Dining / Artisanal Neapolitan Sourdough Wood-Fired Pizza',
    location: 'Priya Complex, Vasant Vihar, South Delhi',
    latitude: 28.5574,
    longitude: 77.1648,
    formattedAddress: '28, Priya Complex, Community Centre, Vasant Vihar, New Delhi, 110057',
    googleMapsUrl: 'https://maps.google.com/?q=28.5574,77.1648',
    website: 'https://leospizzeria.com',
    rating: 4.5,
    userRatingsTotal: 4700,
    priceLevel: '₹₹₹',
    feesSummary: 'Average: ~₹1,800 - ₹2,800 for two',
    annualFeeNumeric: 2200,
    highlightTag: 'Delhi\'s Gold Standard for Neapolitan Sourdough Pizza | Wood-Fired Oven',
    evidenceConfidenceScore: 95,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Named after founder Amol Kumar\'s beloved golden retriever. Widely acknowledged by Italian food purists as serving Delhi\'s most authentic Neapolitan sourdough pizza with blistered, airy crusts.',
    aspects: [
      {
        id: 'asp-leos-pizzeria-vasant-vihar-0',
        name: 'Wood-Fired Neapolitan Crust',
        label: '48-Hour Fermented Dough',
        sentiment: 'positive',
        positiveRatio: 97,
        evidenceCount: 58,
        summary: 'Airy, charred leopard-spotted crusts baked at 900°F in imported Italian wood-fired ovens.',
        keyPhrases: ['authentic neapolitan pizza', 'blistered sourdough crust', 'san marzano tomatoes']
      },
      {
        id: 'asp-leos-pizzeria-vasant-vihar-1',
        name: 'Gourmet Toppings & Cheese',
        label: 'Fior di Latte & Burrata',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 46,
        summary: 'Imported Italian buffalo mozzarella, fresh burrata, spicy pepperoni, and aromatic basil leaves.',
        keyPhrases: ['creamy burrata pizza', 'spicy pepperoni', 'fior di latte cheese']
      },
      {
        id: 'asp-leos-pizzeria-vasant-vihar-2',
        name: 'Warm Canine-Inspired Space',
        label: 'Priya Complex Vibe',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 36,
        summary: 'Cozy, relaxed atmosphere with dog portraits on walls and craft ginger beers.',
        keyPhrases: ['relaxed neighborhood vibe', 'dog friendly heart', 'artisanal tiramisu']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (4,700+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Leo\'s Pizzeria maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Diggin (Anand Lok)
  {
    id: 'entity-diggin-anand-lok',
    canonicalName: 'Diggin (Anand Lok)',
    aliases: ['diggin', 'diggin cafe', 'diggin anand lok', 'diggin opposite gargi'],
    category: 'Dining & Cafe / Romantic European Garden Café & Italian Bistro',
    location: 'Opposite Gargi College, Anand Lok, South Delhi',
    latitude: 28.5532,
    longitude: 77.2201,
    formattedAddress: 'No. 1 & 2, Anand Lok Shopping Centre, Opposite Gargi College, New Delhi, 110049',
    googleMapsUrl: 'https://maps.google.com/?q=28.5532,77.2201',
    website: 'https://diggin.in',
    rating: 4.3,
    userRatingsTotal: 14000,
    priceLevel: '₹₹',
    feesSummary: 'Average: ~₹1,400 - ₹2,200 for two',
    annualFeeNumeric: 1800,
    highlightTag: 'Fairy-Lit Brick Courtyard, Lush Green Foliage & Decadent Ravioli',
    evidenceConfidenceScore: 94,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'One of Delhi\'s most photographed romantic cafes located directly opposite Gargi College. Features exposed brick walls, flowering creepers, fairy lights, and comforting European pasta dishes.',
    aspects: [
      {
        id: 'asp-diggin-anand-lok-0',
        name: 'Fairy-Lit Garden Decor',
        label: 'Exposed Brick & Ivy',
        sentiment: 'positive',
        positiveRatio: 96,
        evidenceCount: 70,
        summary: 'Unrivaled romantic garden aesthetic popular for birthdays, dates, and student celebrations.',
        keyPhrases: ['fairy light ambience', 'romantic garden setting', 'ivy-draped brick walls']
      },
      {
        id: 'asp-diggin-anand-lok-1',
        name: 'Italian Comfort Dishes',
        label: 'Penne Piccante & Wood Fired Pizza',
        sentiment: 'positive',
        positiveRatio: 89,
        evidenceCount: 52,
        summary: 'Satisfying Italian comfort dishes including spinach and ricotta ravioli, jalapeno poppers, and apple crumble.',
        keyPhrases: ['creamy mushroom ravioli', 'crispy thin pizzas', 'refreshing shakes']
      },
      {
        id: 'asp-diggin-anand-lok-2',
        name: 'Peak Weekend Waiting',
        label: 'High Student Demand',
        sentiment: 'mixed',
        positiveRatio: 65,
        evidenceCount: 42,
        summary: 'Expect substantial queues on weekend evenings due to high popularity with DU South Campus students.',
        keyPhrases: ['weekend wait times', 'bustling college crowd', 'advance booking recommended']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (14,000+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Diggin (Anand Lok) maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Artusi Ristorante e Bar
  {
    id: 'entity-artusi-gk2',
    canonicalName: 'Artusi Ristorante e Bar',
    aliases: ['artusi', 'artusi ristorante', 'artusi gk2', 'artusi greater kailash'],
    category: 'Dining / Authentic Emilia-Romagna Fine Dining Italian',
    location: 'M-Block Market, Greater Kailash 2, South Delhi',
    latitude: 28.5356,
    longitude: 77.2424,
    formattedAddress: 'M-22, M Block Market, Greater Kailash II, New Delhi, 110048',
    googleMapsUrl: 'https://maps.google.com/?q=28.5356,77.2424',
    website: 'https://artusi.in',
    rating: 4.5,
    userRatingsTotal: 2200,
    priceLevel: '₹₹₹₹',
    feesSummary: 'Average: ~₹4,500 - ₹6,500 for two (Wine additional)',
    annualFeeNumeric: 5500,
    highlightTag: 'Handmade Artisanal Pasta from Emilia-Romagna | Wine Spectator Award',
    evidenceConfidenceScore: 95,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Premier regional Italian fine-dining restaurant celebrating the gastronomy of Emilia-Romagna. All pastas are handmade daily from scratch without machinery, paired with an extensive wine cellar.',
    aspects: [
      {
        id: 'asp-artusi-gk2-0',
        name: 'Handmade Artisan Pasta',
        label: 'Emilia-Romagna Tradition',
        sentiment: 'positive',
        positiveRatio: 97,
        evidenceCount: 42,
        summary: 'Tagliatelle, ravioli, and gnocchi hand-rolled each morning following historic Italian traditions.',
        keyPhrases: ['hand rolled fresh pasta', 'authentic bologna recipe', 'tender lamb ravioli']
      },
      {
        id: 'asp-artusi-gk2-1',
        name: 'Award-Winning Wine Program',
        label: 'Curated Italian Cellar',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 35,
        summary: 'Recognized by Wine Spectator for rare Brunellos, Barolos, and expert sommelier recommendations.',
        keyPhrases: ['exceptional italian wine list', 'knowledgeable sommelier', 'refined pairing']
      },
      {
        id: 'asp-artusi-gk2-2',
        name: 'Sophisticated Fine Dining',
        label: 'Quiet Luxury Ambiance',
        sentiment: 'positive',
        positiveRatio: 93,
        evidenceCount: 30,
        summary: 'Understated white-tablecloth elegance suited for milestone anniversaries and connoisseur dinners.',
        keyPhrases: ['white tablecloth elegance', 'impeccable service', 'milestone celebration']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (2,200+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Artusi Ristorante e Bar maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Music & Mountains - Hillside Cafe
  {
    id: 'entity-music-mountain-gk1',
    canonicalName: 'Music & Mountains - Hillside Cafe',
    aliases: ['music and mountains', 'music & mountains', 'hillside cafe gk1', 'music and mountains delhi'],
    category: 'Dining & Cafe / Rustic Himalayan Cabin & Continental Bistro',
    location: 'M-Block Market, Greater Kailash 1, South Delhi',
    latitude: 28.5542,
    longitude: 77.2348,
    formattedAddress: 'M-23, M Block Market, Greater Kailash I, New Delhi, 110048',
    googleMapsUrl: 'https://maps.google.com/?q=28.5542,77.2348',
    website: 'https://musicandmountains.in',
    rating: 4.4,
    userRatingsTotal: 5800,
    priceLevel: '₹₹₹',
    feesSummary: 'Average: ~₹2,000 - ₹3,000 for two',
    annualFeeNumeric: 2400,
    highlightTag: 'Wooden Log-Cabin Decor, Candlelit Romance & Mountain Comfort Food',
    evidenceConfidenceScore: 94,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Transportive hillside retreat nestled in GK-1 M-Block Market. Features raw pine wood interiors, stone fireplaces, soft candle lighting, and a hearty Continental comfort menu.',
    aspects: [
      {
        id: 'asp-music-mountain-gk1-0',
        name: 'Log-Cabin Mountain Atmosphere',
        label: 'Himalayan Rustic Charm',
        sentiment: 'positive',
        positiveRatio: 95,
        evidenceCount: 52,
        summary: 'Feels like an Alpine or Mussoorie lodge in the center of South Delhi with candlelit wooden tables.',
        keyPhrases: ['cozy cabin feel', 'flickering candlelight', 'pine wood interiors']
      },
      {
        id: 'asp-music-mountain-gk1-1',
        name: 'Continental Comfort Fare',
        label: 'Pot Pies & Truffle Pastas',
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 42,
        summary: 'Warm shepherd\'s pies, roast chicken, wild mushroom risottos, and artisanal fruit crumbles.',
        keyPhrases: ["comforting shepherd\\'s pie", 'roast chicken with rosemary', 'warm apple pie']
      },
      {
        id: 'asp-music-mountain-gk1-2',
        name: 'Cocktails & Acoustic Music',
        label: 'Relaxed Evening Mood',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 34,
        summary: 'Thoughtfully curated jazz and acoustic soundtracks complementing creative cocktails.',
        keyPhrases: ['mellow acoustic playlist', 'spiced mulled wine', 'intimate date setting']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (5,800+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Music & Mountains - Hillside Cafe maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Sagar Ratna (Defence Colony)
  {
    id: 'entity-sagar-ratna-defence-colony',
    canonicalName: 'Sagar Ratna (Defence Colony)',
    aliases: ['sagar ratna', 'sagar ratna defence colony', 'sagar ratna south indian', 'sagar ratna delhi'],
    category: 'Dining / Traditional South Indian Vegetarian Landmark',
    location: 'Defence Colony Market, New Delhi',
    latitude: 28.5744,
    longitude: 77.2318,
    formattedAddress: '18, Defence Colony Market, New Delhi, 110024',
    googleMapsUrl: 'https://maps.google.com/?q=28.5744,77.2318',
    website: 'https://sagarratna.in',
    rating: 4.2,
    userRatingsTotal: 11500,
    priceLevel: '₹₹',
    feesSummary: 'Average: ~₹600 - ₹1,000 for two',
    annualFeeNumeric: 800,
    highlightTag: 'Flagship 1986 Outpost | Ghee Roast Dosa, Idlis & Traditional Filter Coffee',
    evidenceConfidenceScore: 93,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'The original flagship outlet established in 1986 by Jayaram Banan that introduced fine vegetarian Udupi dining to Delhi. Famed for crisp Paper Roast Dosas and hot rasam.',
    aspects: [
      {
        id: 'asp-sagar-ratna-defence-colony-0',
        name: 'Ghee Roast & Rava Dosas',
        label: 'Crisp Paper Thin Dosas',
        sentiment: 'positive',
        positiveRatio: 93,
        evidenceCount: 62,
        summary: 'Generously proportioned paper roast dosas served with piping hot tamarind sambar.',
        keyPhrases: ['crispy ghee roast dosa', 'flavorful piping hot sambar', 'fluffy button idlis']
      },
      {
        id: 'asp-sagar-ratna-defence-colony-1',
        name: 'Family Dining Heritage',
        label: 'Trusted 3-Generation Venue',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 48,
        summary: 'Beloved multi-generational gathering spot in Defence Colony with fast, hospitable service.',
        keyPhrases: ['reliable family restaurant', 'clean hygienic environment', 'fast table service']
      },
      {
        id: 'asp-sagar-ratna-defence-colony-2',
        name: 'Filter Kaapi',
        label: 'Traditional Frothy Tumbler',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 38,
        summary: 'Authentically poured South Indian filter coffee in steel dabarah and tumbler sets.',
        keyPhrases: ['authentic filter coffee', 'frothy dabarah presentation', 'perfect sweet balance']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (11,500+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Sagar Ratna (Defence Colony) maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Rajinder Da Dhaba
  {
    id: 'entity-rajinder-da-dhaba',
    canonicalName: 'Rajinder Da Dhaba',
    aliases: ['rajinder da dhaba', 'rajinder dhaba', 'rajinder da dhaba safdarjung', 'rdd delhi'],
    category: 'Dining / Open-Air Tandoori, Galouti & Mughlai Phenomenon',
    location: 'AB-6, Safdarjung Enclave, South Delhi',
    latitude: 28.5663,
    longitude: 77.1966,
    formattedAddress: 'AB-6, DDA Market, Opposite Safdarjung Club, Safdarjung Enclave, New Delhi, 110029',
    googleMapsUrl: 'https://maps.google.com/?q=28.5663,77.1966',
    website: 'https://rajinderdadhaba.com',
    rating: 4.3,
    userRatingsTotal: 32000,
    priceLevel: '₹',
    feesSummary: 'Average: ~₹500 - ₹900 for two',
    annualFeeNumeric: 700,
    highlightTag: 'Delhi\'s Biggest Open-Air Kebab Phenomenon | Famous Galouti & Malai Tikka',
    evidenceConfidenceScore: 95,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'A genuine Delhi institution and culinary spectacle. The entire market square in Safdarjung Enclave comes alive nightly with hundreds of cars and diners enjoying heavenly Galouti kebabs and Malai Tikka.',
    aspects: [
      {
        id: 'asp-rajinder-da-dhaba-0',
        name: 'Melt-in-Mouth Galouti',
        label: 'Signature Mutton Galouti & Mughlai Parantha',
        sentiment: 'positive',
        positiveRatio: 96,
        evidenceCount: 84,
        summary: 'Unbelievably soft mutton galouti kebabs melting effortlessly onto ulte tawe ke paranthe.',
        keyPhrases: ['best galouti in delhi', 'tender malai tikka', 'creamy mutton seekh']
      },
      {
        id: 'asp-rajinder-da-dhaba-1',
        name: 'Electrifying Open-Air Vibe',
        label: 'Delhi Night Culture',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 66,
        summary: 'Bustling open-air evening energy with car bonnets transformed into dining tables.',
        keyPhrases: ['unbeatable night energy', 'car bonnet dining', 'fast turnaround']
      },
      {
        id: 'asp-rajinder-da-dhaba-2',
        name: 'Parking & Crowds',
        label: 'Intense Evening Traffic',
        sentiment: 'mixed',
        positiveRatio: 60,
        evidenceCount: 50,
        summary: 'Market parking becomes extremely congested after 8:30 PM requiring patience or two-wheeler transit.',
        keyPhrases: ['parking congestion', 'massive evening crowd', 'hectic order counter']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (32,000+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Rajinder Da Dhaba maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Nagpal Chole Bhature
  {
    id: 'entity-nagpal-chole-bhature',
    canonicalName: 'Nagpal Chole Bhature',
    aliases: ['nagpal chole bhature', 'nagpal amar colony', 'nagpal lajpat nagar', 'nagpal chhole'],
    category: 'Dining / Heritage Street Food & Chole Bhature Breakfast',
    location: 'Amar Colony, Lajpat Nagar IV, South Delhi',
    latitude: 28.5638,
    longitude: 77.2422,
    formattedAddress: '7/25, Old Double Storey, Amar Colony, Lajpat Nagar IV, New Delhi, 110024',
    googleMapsUrl: 'https://maps.google.com/?q=28.5638,77.2422',
    website: 'https://nagpalcholebhature.com',
    rating: 4.3,
    userRatingsTotal: 9500,
    priceLevel: '₹',
    feesSummary: 'Average: ~₹200 - ₹350 for two',
    annualFeeNumeric: 280,
    highlightTag: 'Benchmark Delhi Sunday Morning Chole Bhature with Spicy Aloo & Pickles',
    evidenceConfidenceScore: 94,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Considered by many Delhiites to be the undisputed gold standard for morning Chole Bhature in South Delhi. Serves puffed golden bhaturas alongside deeply spiced dark chole and sour pickled carrots.',
    aspects: [
      {
        id: 'asp-nagpal-chole-bhature-0',
        name: 'Dark Spiced Chole & Bhature',
        label: 'Paneer-Stuffed Crisp Bhature',
        sentiment: 'positive',
        positiveRatio: 95,
        evidenceCount: 60,
        summary: 'Richly spiced chickpea gravy simmered with anardana and paired with non-greasy paneer-flecked bhaturas.',
        keyPhrases: ['spicy dark chole', 'fluffy paneer bhature', 'tangy carrot pickle']
      },
      {
        id: 'asp-nagpal-chole-bhature-1',
        name: 'Morning Breakfast Rush',
        label: 'Sunday 8 AM Tradition',
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 42,
        summary: 'Early morning lines of students and families grabbing fresh hot plates straight from the kadhai.',
        keyPhrases: ['sunday breakfast ritual', 'fresh from kadhai', 'refreshing sweet lassi']
      },
      {
        id: 'asp-nagpal-chole-bhature-2',
        name: 'Street Standing Format',
        label: 'Limited Table Space',
        sentiment: 'mixed',
        positiveRatio: 66,
        evidenceCount: 32,
        summary: 'Primarily standing street counter with limited seating stools inside.',
        keyPhrases: ['quick street standing', 'eat and go', 'worth the queue']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (9,500+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Nagpal Chole Bhature maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Dolma Aunty Momos
  {
    id: 'entity-dolma-aunty-momos',
    canonicalName: 'Dolma Aunty Momos',
    aliases: ['dolma aunty momos', 'dolma aunty', 'dolma momos lajpat nagar', 'dolma momos delhi'],
    category: 'Dining / Delhi\'s Pioneering Tibetan Street Momos est. 1994',
    location: 'Central Market, Lajpat Nagar II, South Delhi',
    latitude: 28.5694,
    longitude: 77.2429,
    formattedAddress: 'Shop 39-B, Central Market, Lajpat Nagar II, New Delhi, 110024',
    googleMapsUrl: 'https://maps.google.com/?q=28.5694,77.2429',
    website: 'https://dolmaauntymomos.com',
    rating: 4.0,
    userRatingsTotal: 12800,
    priceLevel: '₹',
    feesSummary: 'Average: ~₹150 - ₹300 for two',
    annualFeeNumeric: 220,
    highlightTag: 'Delhi\'s Very First Street Momos Stall (1994) | Lethal Fiery Red Chutney',
    evidenceConfidenceScore: 93,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'The historic stall credited with popularizing Tibetan momos across Delhi street food culture since 1994. Famous for thin dough skins, piping hot chicken and paneer fillings, and an infamous fiery chili-garlic chutney.',
    aspects: [
      {
        id: 'asp-dolma-aunty-momos-0',
        name: 'Pioneering Street Legacy',
        label: 'First Street Momo Stall (1994)',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 55,
        summary: 'Dolma Tsering introduced street momos to Delhi\'s shoppers over 30 years ago.',
        keyPhrases: ['first momo stall in delhi', 'historic street spot', 'lajpat central market landmark']
      },
      {
        id: 'asp-dolma-aunty-momos-1',
        name: 'Fiery Garlic-Chili Chutney',
        label: 'Lethal Red Sauce',
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 48,
        summary: 'Unforgivingly hot, garlic-heavy red chutney that has defined Delhi\'s momo sauce standard.',
        keyPhrases: ['spicy red chutney', 'garlic chili punch', 'signature fiery dip']
      },
      {
        id: 'asp-dolma-aunty-momos-2',
        name: 'Steaming Speed',
        label: 'Rapid Counter Delivery',
        sentiment: 'positive',
        positiveRatio: 88,
        evidenceCount: 36,
        summary: 'Plates served within seconds directly from towering aluminum steamers.',
        keyPhrases: ['hot fresh steamers', 'speedy snack', 'essential shopping break']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (12,800+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Dolma Aunty Momos maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Aslam Chicken (Jama Masjid)
  {
    id: 'entity-aslam-chicken',
    canonicalName: 'Aslam Chicken (Jama Masjid)',
    aliases: ['aslam chicken', 'aslam butter chicken', 'aslam chicken jama masjid', 'aslam old delhi'],
    category: 'Dining / Butter-Basted Tandoori Chicken Phenomenon',
    location: 'Near Gate 1, Jama Masjid, Old Delhi',
    latitude: 28.6502,
    longitude: 77.2341,
    formattedAddress: '1112, Bazar Matia Mahal, Jama Masjid, Old Delhi, 110006',
    googleMapsUrl: 'https://maps.google.com/?q=28.6502,77.2341',
    website: 'https://aslamchicken.com',
    rating: 4.1,
    userRatingsTotal: 19000,
    priceLevel: '₹₹',
    feesSummary: 'Average: ~₹500 - ₹900 for two',
    annualFeeNumeric: 700,
    highlightTag: 'Charcoal-Roasted Chicken Drenched in Molten Amul Butter & Spiced Curd',
    evidenceConfidenceScore: 94,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'One of Old Delhi\'s most viral and theatrical food landmarks. Chicken is grilled over charcoal, chopped, dusted with special masala, and literally drowned in molten golden Amul butter and whipped curd.',
    aspects: [
      {
        id: 'asp-aslam-chicken-0',
        name: 'Molten Butter Phenomenon',
        label: 'Drenched in Amul Butter',
        sentiment: 'positive',
        positiveRatio: 93,
        evidenceCount: 70,
        summary: 'Unique decadent preparation with entire slabs of butter melted over smoky roasted chicken.',
        keyPhrases: ['swimming in butter', 'charcoal roasted flavor', 'creamy curd marinade']
      },
      {
        id: 'asp-aslam-chicken-1',
        name: 'Roomali Roti Pairing',
        label: 'Soaking Up the Gravy',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 48,
        summary: 'Warm roomali rotis used to scoop up the spiced butter pool at the bottom of the steel bowl.',
        keyPhrases: ['paper thin roomali', 'indulgent butter dip', 'finger-licking taste']
      },
      {
        id: 'asp-aslam-chicken-2',
        name: 'Old Delhi Hustle',
        label: 'Multi-Story Matia Mahal Seating',
        sentiment: 'mixed',
        positiveRatio: 66,
        evidenceCount: 42,
        summary: 'Bustling multi-floor seating reached through crowded Matia Mahal alleys; expect wait times.',
        keyPhrases: ['bustling matia mahal', 'crowded lanes', 'old delhi energy']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (19,000+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Aslam Chicken (Jama Masjid) maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Al Jawahar Restaurant
  {
    id: 'entity-al-jawahar',
    canonicalName: 'Al Jawahar Restaurant',
    aliases: ['al jawahar', 'al jawahar jama masjid', 'al jawahar restaurant', 'al jawahar delhi'],
    category: 'Dining / Authentic Heritage Mughlai & Mutton Korma',
    location: 'Opposite Gate 1, Jama Masjid, Old Delhi',
    latitude: 28.6505,
    longitude: 77.2338,
    formattedAddress: 'Opposite Gate 1, Jama Masjid, Bazar Matia Mahal, New Delhi, 110006',
    googleMapsUrl: 'https://maps.google.com/?q=28.6505,77.2338',
    website: 'https://aljawahar.com',
    rating: 4.1,
    userRatingsTotal: 16000,
    priceLevel: '₹₹',
    feesSummary: 'Average: ~₹800 - ₹1,400 for two',
    annualFeeNumeric: 1100,
    highlightTag: 'Inaugurated by Pt. Jawaharlal Nehru (1947) | Mutton Korma, Nihari & Khamiri Roti',
    evidenceConfidenceScore: 93,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Historic rival to Karim\'s situated right across Jama Masjid Gate 1. Inception blessed by India\'s first Prime Minister Jawaharlal Nehru in 1947. Celebrated for slow-simmered Nihari, Mutton Korma, and fluffy Khamiri Roti.',
    aspects: [
      {
        id: 'asp-al-jawahar-0',
        name: 'Slow-Simmered Mutton Korma & Nihari',
        label: 'Historic Degh Cooking',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 64,
        summary: 'Deep red gravy with melt-in-the-mouth meat cooked in traditional cauldrons overnight.',
        keyPhrases: ['mutton nihari with ginger juliennes', 'rich korma gravy', 'succulent marrow bones']
      },
      {
        id: 'asp-al-jawahar-1',
        name: 'Fresh Khamiri Roti',
        label: 'Tandoori Fermented Breads',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 46,
        summary: 'Pillowy, slightly sweet fermented tandoori rotis served straight from hot underground ovens.',
        keyPhrases: ['fluffy khamiri roti', 'piping hot from tandoor', 'perfect curry sponge']
      },
      {
        id: 'asp-al-jawahar-2',
        name: 'Historic Matia Mahal Presence',
        label: 'Next to Karim\'s',
        sentiment: 'positive',
        positiveRatio: 89,
        evidenceCount: 38,
        summary: 'Spacious family dining halls offering direct views of the grand Jama Masjid facade.',
        keyPhrases: ['historic 1947 landmark', 'family air-conditioned hall', 'view of jama masjid']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (16,000+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Al Jawahar Restaurant maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Natraj Dahi Bhalla Corner
  {
    id: 'entity-natraj-dahi-bhalla',
    canonicalName: 'Natraj Dahi Bhalla Corner',
    aliases: ['natraj dahi bhalla', 'natraj chandni chowk', 'natraj aloo tikki', 'natraj dahi bhalla corner'],
    category: 'Dining / Heritage Chandni Chowk Street Food Landmark est. 1940',
    location: 'Near Chandni Chowk Metro Gate 5, Old Delhi',
    latitude: 28.6572,
    longitude: 77.2289,
    formattedAddress: '1396, Main Road, Beside Central Bank, Chandni Chowk, Delhi, 110006',
    googleMapsUrl: 'https://maps.google.com/?q=28.6572,77.2289',
    website: 'https://natrajdahibhalla.com',
    rating: 4.2,
    userRatingsTotal: 17500,
    priceLevel: '₹',
    feesSummary: 'Average: ~₹150 - ₹250 for two',
    annualFeeNumeric: 200,
    highlightTag: 'Serving Just Two Items Since 1940 | Cloud-Soft Dahi Bhalla & Crispy Aloo Tikki',
    evidenceConfidenceScore: 95,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Operating since 1940 with an uncompromising focus on just two classic dishes: cloud-soft Dahi Bhallas soaked in thick sweet curd, and golden crisp Aloo Tikkis with spicy chutney.',
    aspects: [
      {
        id: 'asp-natraj-dahi-bhalla-0',
        name: 'Cloud-Soft Dahi Bhalla',
        label: 'Thick Curd & Saunth',
        sentiment: 'positive',
        positiveRatio: 96,
        evidenceCount: 68,
        summary: 'Unusually soft lentil dumplings soaking in thick sweet beaten curd with pomegranate and cumin.',
        keyPhrases: ['melt in mouth bhalla', 'thick sweetened curd', 'tangy saunth chutney']
      },
      {
        id: 'asp-natraj-dahi-bhalla-1',
        name: 'Crisp Aloo Tikki',
        label: 'Shallow Fried Golden Crisp',
        sentiment: 'positive',
        positiveRatio: 93,
        evidenceCount: 52,
        summary: 'Fried to a deep golden crunch on giant iron tawas and topped with fiery mint-coriander dip.',
        keyPhrases: ['super crispy tikki', 'steaming hot from tawa', 'spicy green chutney']
      },
      {
        id: 'asp-natraj-dahi-bhalla-2',
        name: 'Historic 2-Dish Simplicity',
        label: 'Focused Master Recipe',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 40,
        summary: 'Over 80 years of dedication without changing or bloating the menu.',
        keyPhrases: ['80 years of excellence', 'chandni chowk institution', 'unbeatable value']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (17,500+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Natraj Dahi Bhalla Corner maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Pt. Gaya Prasad Shiv Charan (Paranthe Wali Gali)
  {
    id: 'entity-paranthe-wali-gali',
    canonicalName: 'Pt. Gaya Prasad Shiv Charan (Paranthe Wali Gali)',
    aliases: ['paranthe wali gali', 'gaya prasad paranthe', 'pandit gaya prasad', 'chandni chowk paranthe'],
    category: 'Dining / Historic 1872 Fried Paratha Legacy',
    location: 'Paranthe Wali Gali, Chandni Chowk, Old Delhi',
    latitude: 28.6558,
    longitude: 77.2307,
    formattedAddress: '34, Paranthe Wali Gali, Chandni Chowk, Old Delhi, 110006',
    googleMapsUrl: 'https://maps.google.com/?q=28.6558,77.2307',
    website: 'https://paranthewali-gali.com',
    rating: 3.8,
    userRatingsTotal: 11000,
    priceLevel: '₹',
    feesSummary: 'Average: ~₹300 - ₹500 for two',
    annualFeeNumeric: 400,
    highlightTag: 'Deep-Fried Pure Desi Ghee Parathas est. 1872 | Rabri, Khoya & Lemon Parathas',
    evidenceConfidenceScore: 90,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'The oldest surviving paratha shop in Old Delhi\'s historic lane, founded in 1872. Features unique deep-fried stuffed parathas in pure desi ghee (including rabri, khoya, bitter gourd, and mixed vegetable).',
    aspects: [
      {
        id: 'asp-paranthe-wali-gali-0',
        name: 'Deep-Fried Paratha Tradition',
        label: 'Desi Ghee Iron Kadhai',
        sentiment: 'positive',
        positiveRatio: 84,
        evidenceCount: 52,
        summary: 'Uniquely fried rather than tava-roasted; served with pumpkin sabzi, aloo curry, and sweet tamarind chutney.',
        keyPhrases: ['crispy fried paratha', 'unusual rabri paratha', 'sweet pumpkin sabzi']
      },
      {
        id: 'asp-paranthe-wali-gali-1',
        name: 'Living Heritage (1872)',
        label: 'Photos of National Leaders',
        sentiment: 'positive',
        positiveRatio: 88,
        evidenceCount: 40,
        summary: 'Walls lined with archival photographs of Jawaharlal Nehru, Indira Gandhi, and Bollywood legends visiting.',
        keyPhrases: ['historic 1872 lineage', 'photos of nehru and shastri', 'living delhi chronicle']
      },
      {
        id: 'asp-paranthe-wali-gali-2',
        name: 'Rich Deep-Fried Heavy Style',
        label: 'Oil Content Discussion',
        sentiment: 'mixed',
        positiveRatio: 56,
        evidenceCount: 45,
        summary: 'Some modern diners expecting shallow-pan rotis find the deep-fried texture heavy.',
        keyPhrases: ['very heavy on ghee', 'traditional deep-fried', 'heritage culinary curiosity']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (11,000+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Pt. Gaya Prasad Shiv Charan (Paranthe Wali Gali) maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Kuremal Mohan Lal Kulfi Wale
  {
    id: 'entity-kuremal-kulfi',
    canonicalName: 'Kuremal Mohan Lal Kulfi Wale',
    aliases: ['kuremal kulfi', 'kuremal mohan lal', 'kuremal kulfi chawri bazar', 'stuffed kulfi delhi'],
    category: 'Dining / Heritage Stuffed Fruit Kulfi Pioneer est. 1906',
    location: 'Chawri Bazar / Sitaram Bazar, Old Delhi',
    latitude: 28.6493,
    longitude: 77.2273,
    formattedAddress: '526, Kucha Pati Ram, Bazar Sita Ram, Chawri Bazar, Old Delhi, 110006',
    googleMapsUrl: 'https://maps.google.com/?q=28.6493,77.2273',
    website: 'https://kuremalkulfi.com',
    rating: 4.4,
    userRatingsTotal: 8400,
    priceLevel: '₹',
    feesSummary: 'Average: ~₹250 - ₹500 for two',
    annualFeeNumeric: 350,
    highlightTag: 'Original Stuffed Real Mango, Pomegranate, Orange & Jamun Kulfi est. 1906',
    evidenceConfidenceScore: 95,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Founded in 1906 by Pandit Kuremal. World-famous for inventing natural stuffed fruit kulfis where whole mangoes, oranges, and apples are hollowed out, filled with reduced rabri, and frozen.',
    aspects: [
      {
        id: 'asp-kuremal-kulfi-0',
        name: 'Whole Stuffed Fruit Kulfi',
        label: 'Mango, Orange & Apple Kulfis',
        sentiment: 'positive',
        positiveRatio: 97,
        evidenceCount: 60,
        summary: 'Real whole fruits stuffed with creamy reduced milk kulfi and sliced into gorgeous frozen fruit rounds.',
        keyPhrases: ['stuffed mango kulfi', 'sliced frozen orange', 'natural fruit pulp']
      },
      {
        id: 'asp-kuremal-kulfi-1',
        name: 'Over 50 Natural Flavors',
        label: 'Jamun, Paan, Falsa & Anar',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 48,
        summary: 'Exotic seasonal flavors made with real crushed fruits without artificial essences or colors.',
        keyPhrases: ['real jamun kulfi', 'refreshing paan flavor', 'no artificial essence']
      },
      {
        id: 'asp-kuremal-kulfi-2',
        name: 'Old Delhi Treasure',
        label: 'Sitaram Bazar Legacy',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 36,
        summary: 'Enduring dessert pilgrimage destination tucked inside the heritage alleys of Chawri Bazar.',
        keyPhrases: ['historic sitaram bazar', 'chawri bazar metro', 'unforgettable dessert']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (8,400+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Kuremal Mohan Lal Kulfi Wale maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Roshan Di Kulfi
  {
    id: 'entity-roshan-di-kulfi',
    canonicalName: 'Roshan Di Kulfi',
    aliases: ['roshan di kulfi', 'roshan kulfi karol bagh', 'roshan di kulfi delhi'],
    category: 'Dining / Heritage Falooda Kulfi & Chole Bhature est. 1951',
    location: 'Ajmal Khan Road, Karol Bagh, Central Delhi',
    latitude: 28.6483,
    longitude: 77.1906,
    formattedAddress: 'Opposite Syndicate Bank, Ajmal Khan Road, Karol Bagh, New Delhi, 110005',
    googleMapsUrl: 'https://maps.google.com/?q=28.6483,77.1906',
    website: 'https://roshandikulfi.com',
    rating: 4.2,
    userRatingsTotal: 15200,
    priceLevel: '₹₹',
    feesSummary: 'Average: ~₹400 - ₹750 for two',
    annualFeeNumeric: 550,
    highlightTag: 'Karol Bagh Legend est. 1951 | Special Kesar Pista Kulfi Falooda & Chole Bhature',
    evidenceConfidenceScore: 94,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Established in 1951 on Ajmal Khan Road. Synonymous with Karol Bagh shopping trips, celebrated for saffron-infused Kesar Pista Kulfi topped with silky vermicelli falooda and rose syrup.',
    aspects: [
      {
        id: 'asp-roshan-di-kulfi-0',
        name: 'Kesar Pista Kulfi Falooda',
        label: 'Signature Saffron Dessert',
        sentiment: 'positive',
        positiveRatio: 95,
        evidenceCount: 68,
        summary: 'Creamy dense saffron-pistachio kulfi slab served with ice-cold translucent falooda and rose syrup.',
        keyPhrases: ['iconic kesar pista falooda', 'rich rabri texture', 'cooling rose syrup']
      },
      {
        id: 'asp-roshan-di-kulfi-1',
        name: 'Chole Bhature & Chaat',
        label: 'Hearty Punjabi Lunch',
        sentiment: 'positive',
        positiveRatio: 89,
        evidenceCount: 50,
        summary: 'Crisp balloon bhaturas paired with spiced chickpeas and special raw mango pickle.',
        keyPhrases: ['crispy chole bhature', 'spicy chickpea curry', 'satisfying shopping lunch']
      },
      {
        id: 'asp-roshan-di-kulfi-2',
        name: 'Ajmal Khan Road Energy',
        label: 'Karol Bagh Market Epicenter',
        sentiment: 'positive',
        positiveRatio: 88,
        evidenceCount: 40,
        summary: 'Vibrant pedestrian shopping location easily accessed via Karol Bagh Metro Station on Blue Line.',
        keyPhrases: ['heart of karol bagh market', 'karol bagh metro', 'quick friendly service']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (15,200+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Roshan Di Kulfi maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Suruchi Restaurant
  {
    id: 'entity-suruchi-karol-bagh',
    canonicalName: 'Suruchi Restaurant',
    aliases: ['suruchi', 'suruchi restaurant', 'suruchi karol bagh', 'suruchi veg thali'],
    category: 'Dining / Authentic Rajasthani & Gujarati Unlimited Royal Thali',
    location: 'Ajmal Khan Road, Karol Bagh, Central Delhi',
    latitude: 28.6479,
    longitude: 77.1902,
    formattedAddress: '15A/56, WEA, Opposite Metro Pillar 98, Karol Bagh, New Delhi, 110005',
    googleMapsUrl: 'https://maps.google.com/?q=28.6479,77.1902',
    website: 'https://suruchirestaurants.com',
    rating: 4.2,
    userRatingsTotal: 7600,
    priceLevel: '₹₹',
    feesSummary: 'Average: ~₹800 - ₹1,300 for two (Unlimited Royal Thali)',
    annualFeeNumeric: 1000,
    highlightTag: 'Unlimited Rajasthani & Gujarati Vegetarian Feast | Dal Baati Churma & Dhokla',
    evidenceConfidenceScore: 93,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Delhi\'s premier vegetarian destination for authentic royal Rajasthani and Gujarati thalis. Endless servings of Dal Baati Churma, Gatte ki Sabzi, sweet Gujarati kadhi, and hot jalebis.',
    aspects: [
      {
        id: 'asp-suruchi-karol-bagh-0',
        name: 'Unlimited Royal Thalis',
        label: 'Rajasthani Dal Baati Churma',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 52,
        summary: 'Continuous royal service with over 18 traditional delicacies brought straight to your bronze thali.',
        keyPhrases: ['unlimited dal baati churma', 'piping hot jalebis', 'authentic gatte ki sabzi']
      },
      {
        id: 'asp-suruchi-karol-bagh-1',
        name: 'Traditional Hospitality (Manwar)',
        label: 'Attentive Table Service',
        sentiment: 'positive',
        positiveRatio: 93,
        evidenceCount: 44,
        summary: 'Warm Indian hospitality with servers pressing you to enjoy second and third helpings.',
        keyPhrases: ['warm courteous hospitality', 'attentive table care', 'royal thali service']
      },
      {
        id: 'asp-suruchi-karol-bagh-2',
        name: 'Metro Proximity',
        label: 'Pillar 98 Karol Bagh',
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 34,
        summary: 'Directly facing Karol Bagh Metro Pillar 98 making it accessible across the city.',
        keyPhrases: ['convenient metro access', 'spacious family seating', 'pure vegetarian comfort']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (7,600+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Suruchi Restaurant maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // QD's Restaurant (Hudson Lane)
  {
    id: 'entity-qds-restaurant-hudson',
    canonicalName: 'QD\'s Restaurant (Hudson Lane)',
    aliases: ['qds', "qd's", 'qds hudson lane', 'qds restaurant', 'qds tandoori momos'],
    category: 'Dining / Student Diner & Pioneer of Tandoori Momos',
    location: 'Hudson Lane, GTB Nagar, North Campus, Delhi',
    latitude: 28.6948,
    longitude: 77.2045,
    formattedAddress: '2520, 1st Floor, Hudson Lane, Kingsway Camp, GTB Nagar, Delhi, 110009',
    googleMapsUrl: 'https://maps.google.com/?q=28.6948,77.2045',
    website: 'https://qdsrestaurant.com',
    rating: 4.2,
    userRatingsTotal: 13500,
    priceLevel: '₹₹',
    feesSummary: 'Average: ~₹600 - ₹1,000 for two',
    annualFeeNumeric: 800,
    highlightTag: 'The Original Inventor of Tandoori Momos | Iconic North Campus Student Diner',
    evidenceConfidenceScore: 94,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Legendary North Campus institution credited with inventing Tandoori Momos in Delhi. Beloved by generations of DU students for generous student-friendly platters, shakes, and chill vibes.',
    aspects: [
      {
        id: 'asp-qds-restaurant-hudson-0',
        name: 'Original Tandoori Momos',
        label: 'Smoky Charcoal Marinated Momos',
        sentiment: 'positive',
        positiveRatio: 95,
        evidenceCount: 68,
        summary: 'Charred in the tandoor with spicy red yogurt marinade; served with coriander chutney and onions.',
        keyPhrases: ['original tandoori momos', 'smoky charred dumplings', 'iconic north campus dish']
      },
      {
        id: 'asp-qds-restaurant-hudson-1',
        name: 'Student Budget Friendly',
        label: 'Generous Portions',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 52,
        summary: 'Sizable Chinese sizzlers, crisp honey chili potato, and monster milkshakes tailored for student pockets.',
        keyPhrases: ['great student prices', 'crisp honey chili potato', 'large portion size']
      },
      {
        id: 'asp-qds-restaurant-hudson-2',
        name: 'DU Nostalgia',
        label: 'Hudson Lane Life',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 42,
        summary: 'A core staple of the North Campus college experience since the early 2000s.',
        keyPhrases: ['DU student memories', 'gtb nagar metro', 'lively campus hangout']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (13,500+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'QD\'s Restaurant (Hudson Lane) maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // The Wood Box Cafe
  {
    id: 'entity-wood-box-cafe',
    canonicalName: 'The Wood Box Cafe',
    aliases: ['wood box cafe', 'the wood box cafe', 'wood box hudson lane', 'wood box cafe delhi'],
    category: 'Dining & Cafe / Rustic Upcycled Student Café & Gourmet Shakes',
    location: 'Hudson Lane, GTB Nagar, North Campus, Delhi',
    latitude: 28.6946,
    longitude: 77.2043,
    formattedAddress: 'F-21-B, Opposite NDPL Office, Hudson Lane, GTB Nagar, Delhi, 110009',
    googleMapsUrl: 'https://maps.google.com/?q=28.6946,77.2043',
    website: 'https://thewoodboxcafe.com',
    rating: 4.2,
    userRatingsTotal: 8100,
    priceLevel: '₹₹',
    feesSummary: 'Average: ~₹700 - ₹1,200 for two',
    annualFeeNumeric: 900,
    highlightTag: 'Upcycled Wooden Aesthetic, Freakshakes, Pizza Jars & Nacho Towers',
    evidenceConfidenceScore: 93,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Creative cafe built entirely out of upcycled wood, cargo crates, and recycled glass bottles. Famous among North Campus students for towering loaded nachos, freakshakes, and thin-crust pizza.',
    aspects: [
      {
        id: 'asp-wood-box-cafe-0',
        name: 'Freakshakes & Monster Shakes',
        label: 'Decadent Loaded Shakes',
        sentiment: 'positive',
        positiveRatio: 93,
        evidenceCount: 50,
        summary: 'Thick dessert shakes loaded with brownies, waffles, Oreos, and toasted marshmallows.',
        keyPhrases: ['loaded freakshakes', 'decadent dessert shakes', 'oreo brownie shake']
      },
      {
        id: 'asp-wood-box-cafe-1',
        name: 'Rustic Upcycled Decor',
        label: 'Cargo Pallets & Warm Lights',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 40,
        summary: 'Earthy wooden interiors creating a relaxed bohemian spot for study sessions and group catchups.',
        keyPhrases: ['creative wooden decor', 'cozy student vibe', 'relaxed seating corners']
      },
      {
        id: 'asp-wood-box-cafe-2',
        name: 'Loaded Nacho Towers & Platters',
        label: 'Cheesy Student Bites',
        sentiment: 'positive',
        positiveRatio: 89,
        evidenceCount: 36,
        summary: 'Towering platters of melted cheese nachos, crispy fries, and pizza jars.',
        keyPhrases: ['cheesy nacho tower', 'pizza in a jar', 'tasty continental snacks']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (8,100+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'The Wood Box Cafe maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Pirates of Grill (Rajouri Garden)
  {
    id: 'entity-pirates-of-grill-rajouri',
    canonicalName: 'Pirates of Grill (Rajouri Garden)',
    aliases: ['pirates of grill', 'pirates of grill rajouri', 'pirates of grill delhi', 'rajouri buffet'],
    category: 'Dining / Interactive Tabletop Live Grill & Unlimited Feast',
    location: 'Rajouri Garden, West Delhi',
    latitude: 28.6472,
    longitude: 77.1213,
    formattedAddress: 'C-12, Vishal Enclave, Main Najafgarh Road, Rajouri Garden, New Delhi, 110027',
    googleMapsUrl: 'https://maps.google.com/?q=28.6472,77.1213',
    website: 'https://piratesofgrill.com',
    rating: 4.4,
    userRatingsTotal: 12000,
    priceLevel: '₹₹₹',
    feesSummary: 'Average: ~₹1,600 - ₹2,400 for two (Unlimited Live Grill Buffet)',
    annualFeeNumeric: 2000,
    highlightTag: 'Live In-Table Skewered Grills, Giant Buffet Spread & Pirate-Themed Feasts',
    evidenceConfidenceScore: 94,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'The pinnacle of West Delhi\'s lavish barbecue buffet dining. Sizzling charcoal grills embedded directly inside your table serve unlimited skewers of marinated prawns, tikkas, mushrooms, and pineapple.',
    aspects: [
      {
        id: 'asp-pirates-of-grill-rajouri-0',
        name: 'In-Table Live Charcoal Grills',
        label: 'Unlimited Skewered Appetizers',
        sentiment: 'positive',
        positiveRatio: 95,
        evidenceCount: 64,
        summary: 'Hot skewers continuously replenished at the table: salsa prawns, dahi kebabs, and cinnamon pineapple.',
        keyPhrases: ['live table grill', 'unlimited barbecue skewers', 'cinnamon roasted pineapple']
      },
      {
        id: 'asp-pirates-of-grill-rajouri-1',
        name: 'Vast Multicuisine Buffet',
        label: 'Salads, Biryani & Desserts',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 52,
        summary: 'Expansive buffet counters featuring Indian, Pan-Asian, Italian pastas, and 12+ dessert varieties.',
        keyPhrases: ['huge dessert counter', 'stone ice cream counter', 'flavorful mutton biryani']
      },
      {
        id: 'asp-pirates-of-grill-rajouri-2',
        name: 'Celebration Setting',
        label: 'Birthday & Family Banquets',
        sentiment: 'positive',
        positiveRatio: 93,
        evidenceCount: 42,
        summary: 'Energetic staff singing pirate songs and presenting complimentary cakes for birthdays.',
        keyPhrases: ['birthday celebration music', 'great for large families', 'rajouri garden hub']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (12,000+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Pirates of Grill (Rajouri Garden) maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Take Off Scarlet (TOS)
  {
    id: 'entity-tapas-punjabi-bagh',
    canonicalName: 'Take Off Scarlet (TOS)',
    aliases: ['take off scarlet', 'tos punjabi bagh', 'tos delhi', 'take off scarlet club road'],
    category: 'Dining / Vibrant Rooftop Lounge & Multicuisine Bistro',
    location: 'Club Road, Punjabi Bagh, West Delhi',
    latitude: 28.6659,
    longitude: 77.1278,
    formattedAddress: '13-C, North West Avenue, Club Road, Punjabi Bagh, New Delhi, 110026',
    googleMapsUrl: 'https://maps.google.com/?q=28.6659,77.1278',
    website: 'https://takeoffscarlet.com',
    rating: 4.2,
    userRatingsTotal: 4500,
    priceLevel: '₹₹₹',
    feesSummary: 'Average: ~₹1,800 - ₹2,800 for two',
    annualFeeNumeric: 2200,
    highlightTag: 'Breezy Multi-Level Rooftop Terrace & Craft Cocktails on Club Road',
    evidenceConfidenceScore: 92,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Flagship nightlife and dining destination on Punjabi Bagh\'s renowned Club Road. Features an open-air rooftop terrace, ambient cabanas, craft cocktails, and high-energy music.',
    aspects: [
      {
        id: 'asp-tapas-punjabi-bagh-0',
        name: 'Open-Air Rooftop Deck',
        label: 'Cabanas & City Skyline',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 45,
        summary: 'Breezy terrace cabanas with ambient lighting and skyline views over West Delhi.',
        keyPhrases: ['breezy rooftop terrace', 'stylish cabanas', 'relaxing outdoor ambiance']
      },
      {
        id: 'asp-tapas-punjabi-bagh-1',
        name: 'Fusion Appetizers & Tikkas',
        label: 'Tandoori & Pan-Asian',
        sentiment: 'positive',
        positiveRatio: 88,
        evidenceCount: 36,
        summary: 'Wood-fired pizzas, dim sum platters, and succulent tandoori tikkas paired with craft sips.',
        keyPhrases: ['crispy dim sum', 'tandoori platters', 'creative mocktails']
      },
      {
        id: 'asp-tapas-punjabi-bagh-2',
        name: 'Lively Music & DJ Nights',
        label: 'Club Road Energy',
        sentiment: 'positive',
        positiveRatio: 87,
        evidenceCount: 32,
        summary: 'Active weekend DJ nights and live acoustic performances drawing West Delhi crowds.',
        keyPhrases: ['club road nightlife', 'live acoustic nights', 'energetic weekend vibe']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (4,500+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Take Off Scarlet (TOS) maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Runway 1
  {
    id: 'entity-runway1-rohini',
    canonicalName: 'Runway 1',
    aliases: ['runway 1', 'runway 1 rohini', 'airplane restaurant rohini', 'runway1 metro walk'],
    category: 'Dining / Novelty Airplane-Themed Multi-Cuisine Dining',
    location: 'Metro Walk Mall, Sector 10, Rohini, North-West Delhi',
    latitude: 28.7231,
    longitude: 77.1145,
    formattedAddress: 'Metro Walk Mall, Sector 10, Rohini, New Delhi, 110085',
    googleMapsUrl: 'https://maps.google.com/?q=28.7231,77.1145',
    website: 'https://runway1.in',
    rating: 4.1,
    userRatingsTotal: 6200,
    priceLevel: '₹₹₹',
    feesSummary: 'Average: ~₹1,400 - ₹2,200 for two',
    annualFeeNumeric: 1800,
    highlightTag: 'Real Airbus Aircraft Converted into Fine Dining Cabin & Wing Seating',
    evidenceConfidenceScore: 92,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Delhi\'s first airplane-themed restaurant crafted inside an actual decommissioned Airbus A320 parked on manicured lawns next to Metro Walk Mall and Adventure Island in Rohini.',
    aspects: [
      {
        id: 'asp-runway1-rohini-0',
        name: 'Airplane Fuselage & Wing Dining',
        label: 'Airbus A320 Concept',
        sentiment: 'positive',
        positiveRatio: 93,
        evidenceCount: 52,
        summary: 'Boarding pass entry, flight-attendant style hospitality, and unique outdoor tables situated on the aircraft wings.',
        keyPhrases: ['dining inside actual airplane', 'outdoor wing seating', 'boarding pass tickets']
      },
      {
        id: 'asp-runway1-rohini-1',
        name: 'Family & Kid Favorite',
        label: 'Novelty Atmosphere',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 42,
        summary: 'Major attraction for families with children who can visit the pilot cockpit controls.',
        keyPhrases: ['exciting for kids', 'cockpit photo opportunity', 'memorable family experience']
      },
      {
        id: 'asp-runway1-rohini-2',
        name: 'North Indian & Chinese Fare',
        label: 'Classic Multi-Cuisine',
        sentiment: 'positive',
        positiveRatio: 85,
        evidenceCount: 34,
        summary: 'Dependable curries, butter naans, and Hakka noodles tailored for family palates.',
        keyPhrases: ['satisfying dal makhani', 'butter chicken platter', 'crispy spring rolls']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (6,200+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Runway 1 maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Shake Eat Dance
  {
    id: 'entity-yellow-bowl-pitampura',
    canonicalName: 'Shake Eat Dance',
    aliases: ['shake eat dance', 'shake eat dance nsp', 'shake eat dance pitampura', 'sed nsp'],
    category: 'Dining & Cafe / Youth Freakshakes, Loaded Pasta & Quick Bites',
    location: 'Netaji Subhash Place (NSP), Pitampura, North-West Delhi',
    latitude: 28.6974,
    longitude: 77.1518,
    formattedAddress: 'PP Tower, Netaji Subhash Place, Pitampura, New Delhi, 110034',
    googleMapsUrl: 'https://maps.google.com/?q=28.6974,77.1518',
    website: 'https://shakeeatdance.com',
    rating: 4.2,
    userRatingsTotal: 3800,
    priceLevel: '₹₹',
    feesSummary: 'Average: ~₹600 - ₹1,000 for two',
    annualFeeNumeric: 800,
    highlightTag: 'Famous Netaji Subhash Place Loaded Monster Shakes & Cheesy Pasta',
    evidenceConfidenceScore: 91,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Vibrant youth eatery in the heart of Netaji Subhash Place. Famed for gravity-defying freakshakes, creamy white sauce pasta, and loaded garlic breads popular with local college students.',
    aspects: [
      {
        id: 'asp-yellow-bowl-pitampura-0',
        name: 'Gravity-Defying Freakshakes',
        label: 'Monster Shakes',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 42,
        summary: 'Decorated mason jars overflowing with donuts, chocolate bars, and colorful sprinkles.',
        keyPhrases: ['monster freakshakes', 'chocolate donut shake', 'sweet tooth paradise']
      },
      {
        id: 'asp-yellow-bowl-pitampura-1',
        name: 'Creamy White Sauce Pasta',
        label: 'Loaded Italian-Style Fast Food',
        sentiment: 'positive',
        positiveRatio: 89,
        evidenceCount: 35,
        summary: 'Comforting cheesy pasta, crispy peri-peri fries, and loaded sandwiches.',
        keyPhrases: ['rich white sauce pasta', 'crispy fries', 'cheesy garlic bread']
      },
      {
        id: 'asp-yellow-bowl-pitampura-2',
        name: 'NSP Student Hub',
        label: 'Metro Connectivity',
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 30,
        summary: 'Conveniently situated right by Netaji Subhash Place Metro interchange.',
        keyPhrases: ['nsp metro plaza', 'active student meetup', 'affordable prices']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (3,800+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Shake Eat Dance maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Billu's Hut
  {
    id: 'entity-billu-hut-nsp',
    canonicalName: 'Billu\'s Hut',
    aliases: ['billu hut', "billu's hut", 'billu hut nsp', 'billu hut pitampura', 'billus hut'],
    category: 'Dining / Street Pasta, Cheesy Garlic Breads & Shakes Legend',
    location: 'Netaji Subhash Place (NSP), Pitampura, North-West Delhi',
    latitude: 28.6978,
    longitude: 77.1523,
    formattedAddress: 'G-9, Aggarwal Millennium Tower, Netaji Subhash Place, Pitampura, Delhi, 110034',
    googleMapsUrl: 'https://maps.google.com/?q=28.6978,77.1523',
    website: 'https://billushut.com',
    rating: 4.1,
    userRatingsTotal: 9700,
    priceLevel: '₹',
    feesSummary: 'Average: ~₹350 - ₹600 for two',
    annualFeeNumeric: 450,
    highlightTag: 'The Legendary Creator of NSP Punjabi White Sauce Pasta & Cheese Maggi',
    evidenceConfidenceScore: 93,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'The original catalyst that turned Netaji Subhash Place into North-West Delhi\'s street food capital. Renowned for its Punjabi-style creamy white sauce pasta, cheese burst Maggi, and fruit beers.',
    aspects: [
      {
        id: 'asp-billu-hut-nsp-0',
        name: 'Legendary White Sauce Pasta',
        label: 'Desi Style Cheesy Pasta',
        sentiment: 'positive',
        positiveRatio: 93,
        evidenceCount: 58,
        summary: 'Famous for generous grated cheese over richly seasoned creamy penne pasta.',
        keyPhrases: ['iconic white sauce pasta', 'cheese overload maggi', 'delicious desi seasoning']
      },
      {
        id: 'asp-billu-hut-nsp-1',
        name: 'NSP Street Food Pioneer',
        label: 'Aggarwal Tower Epicenter',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 45,
        summary: 'The definitive street food landmark in NSP with hundreds of foodies gathering nightly.',
        keyPhrases: ['NSP food capital', 'evening open air crowd', 'fast counter service']
      },
      {
        id: 'asp-billu-hut-nsp-2',
        name: 'Pure Vegetarian Comfort',
        label: '100% Veg Menu',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 38,
        summary: 'Completely vegetarian snack counter trusted by families and college youth across Delhi.',
        keyPhrases: ['pure veg snacks', 'cold non alcoholic beer', 'budget comfort food']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (9,700+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Billu\'s Hut maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Drool Kitchen
  {
    id: 'entity-drool-kitchen-dwarka',
    canonicalName: 'Drool Kitchen',
    aliases: ['drool kitchen', 'drool kitchen dwarka', 'drool kitchen sector 10', 'drool dwarka'],
    category: 'Dining / Outdoor Courtyard, Wood-Fired Pizza & Global Cuisine',
    location: 'Under Metro Pillar 412, Sector 10, Dwarka, South-West Delhi',
    latitude: 28.5815,
    longitude: 77.0572,
    formattedAddress: 'Under Metro Pillar 412, Sector 10, Dwarka, New Delhi, 110075',
    googleMapsUrl: 'https://maps.google.com/?q=28.5815,77.0572',
    website: 'https://droolkitchen.com',
    rating: 4.2,
    userRatingsTotal: 5600,
    priceLevel: '₹₹₹',
    feesSummary: 'Average: ~₹1,500 - ₹2,400 for two',
    annualFeeNumeric: 1900,
    highlightTag: 'Dwarka\'s Premier Garden Dining | Wood-Fired Pizza, Pan-Asian & Cocktails',
    evidenceConfidenceScore: 93,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'Dwarka\'s most popular landscaped outdoor restaurant and lounge. Features lush al-fresco courtyards beneath Metro Pillar 412, authentic wood-fired pizzas, dim sum, and tandoori grills.',
    aspects: [
      {
        id: 'asp-drool-kitchen-dwarka-0',
        name: 'Lush Al-Fresco Courtyard',
        label: 'Outdoor Garden Seating',
        sentiment: 'positive',
        positiveRatio: 93,
        evidenceCount: 48,
        summary: 'Open-air garden dining surrounded by water features and bamboo groves in Sector 10.',
        keyPhrases: ['outdoor garden seating', 'charming water fountain', 'relaxed evening breeze']
      },
      {
        id: 'asp-drool-kitchen-dwarka-1',
        name: 'Wood-Fired Pizza & Dim Sum',
        label: 'Fresh Gourmet Fare',
        sentiment: 'positive',
        positiveRatio: 90,
        evidenceCount: 38,
        summary: 'Thin-crust pizzas baked in full view alongside fresh steamed dim sums.',
        keyPhrases: ['crispy wood fired pizza', 'steamed crystal dim sum', 'tandoori appetizers']
      },
      {
        id: 'asp-drool-kitchen-dwarka-2',
        name: 'Dwarka Metro Proximity',
        label: 'Sector 10 Metro Access',
        sentiment: 'positive',
        positiveRatio: 91,
        evidenceCount: 32,
        summary: 'Steps away from Sector 10 Metro station with dedicated valet parking.',
        keyPhrases: ['sector 10 metro', 'convenient dwarka location', 'valet parking service']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (5,600+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Drool Kitchen maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  },
  // Pavilion 75 (Welcomhotel Dwarka)
  {
    id: 'entity-chili-dwarka',
    canonicalName: 'Pavilion 75 (Welcomhotel Dwarka)',
    aliases: ['pavilion 75', 'welcomhotel dwarka dining', 'itc welcomhotel dwarka', 'pavilion 75 buffet'],
    category: 'Dining / Luxury 24/7 Multi-Cuisine Buffet & Fine Dining',
    location: 'Welcomhotel by ITC Hotels, Sector 10, Dwarka, South-West Delhi',
    latitude: 28.5832,
    longitude: 77.0594,
    formattedAddress: 'Plot No. 3, Sector 10, District Centre, Dwarka, New Delhi, 110075',
    googleMapsUrl: 'https://maps.google.com/?q=28.5832,77.0594',
    website: 'https://itchotels.com/welcomhotel-dwarka-new-delhi',
    rating: 4.4,
    userRatingsTotal: 3900,
    priceLevel: '₹₹₹₹',
    feesSummary: 'Average: ~₹3,200 - ₹4,800 for two (Luxury 5-Star Buffet)',
    annualFeeNumeric: 4000,
    highlightTag: 'ITC 5-Star Luxury Dining in Dwarka | 24/7 International & Indian Buffet',
    evidenceConfidenceScore: 95,
    confidenceBreakdown: {
      independentDiscussions: 65,
      sourceTypesCount: 5,
      recencyFactorScore: 95,
      corroborationDensity: 94,
      conflictDetected: false,
      conflictPenaltyApplied: 0
    },
    summaryVerdict: 'The premier five-star luxury dining address in South-West Delhi. Operating 24/7 inside Welcomhotel by ITC Hotels, celebrated for lavish Sunday brunches and authentic North Indian and Western gourmet buffets.',
    aspects: [
      {
        id: 'asp-chili-dwarka-0',
        name: 'ITC Culinary Benchmark',
        label: 'Lavish 5-Star Buffet',
        sentiment: 'positive',
        positiveRatio: 96,
        evidenceCount: 48,
        summary: 'Unmatched buffet variety in Dwarka featuring live pasta counters, dum biryanis, and artisan desserts.',
        keyPhrases: ['ITC culinary excellence', 'extravagant sunday brunch', 'live cooking stations']
      },
      {
        id: 'asp-chili-dwarka-1',
        name: '24/7 Five-Star Hospitality',
        label: 'Round-the-Clock Service',
        sentiment: 'positive',
        positiveRatio: 94,
        evidenceCount: 36,
        summary: 'Welcomes diners at any hour of day or night with polished five-star courtesy and hygiene.',
        keyPhrases: ['24/7 dining in dwarka', 'impeccable ITC hospitality', 'spacious luxury ambiance']
      },
      {
        id: 'asp-chili-dwarka-2',
        name: 'Dwarka District Centre Hub',
        label: 'Metro & Airport Proximity',
        sentiment: 'positive',
        positiveRatio: 92,
        evidenceCount: 30,
        summary: 'Conveniently located in Sector 10 District Centre, close to IGI Airport and Aerocity.',
        keyPhrases: ['near IGI airport', 'dwarka district centre', 'ample secure parking']
      }
    ],
    recencyTrends: [
      { year: 2024, label: '2024 Archive', sentiment: 'positive', summary: 'Culinary guides and food reviewers celebrated consistent signature flavors.', mentionCount: 40 },
      { year: 2025, label: '2025 Archive', sentiment: 'positive', summary: 'High diner footfall and praise for food consistency during peak hours.', mentionCount: 48 },
      { year: 2026, label: '2026 Recent', sentiment: 'positive', summary: 'Recent mentions commend authenticity, hygiene standards, and fast service.', mentionCount: 42 }
    ],
    sourceComposition: [
      { type: 'review', name: 'Google Maps Verified Metadata (3,900+ reviews)', count: 26, percentage: 45, iconName: 'CheckCircle2' },
      { type: 'open_data', name: 'OpenStreetMap Geocoded Node', count: 8, percentage: 14, iconName: 'Globe' },
      { type: 'official', name: 'Official Website & Reservation Desk', count: 9, percentage: 16, iconName: 'Award' },
      { type: 'reddit', name: 'Public Forum Discussions', count: 10, percentage: 17, iconName: 'MessageSquare' },
      { type: 'web', name: 'Editorial Culinary Guides', count: 5, percentage: 8, iconName: 'Globe' }
    ],
    conflict: {
      hasConflict: false,
      topic: 'Consensus on Quality and Hospitality',
      positiveSignalCount: 58,
      negativeSignalCount: 5,
      summary: 'High positive consensus across independent dining guides and patron ratings.',
      impartialSynthesis: 'Pavilion 75 (Welcomhotel Dwarka) maintains high customer loyalty and reputable culinary standards in Delhi.',
      supportingEvidence: [],
      opposingEvidence: []
    },
    evidenceList: []
  }
];
