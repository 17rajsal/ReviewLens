export type SourceType =
  | 'reddit'
  | 'forum'
  | 'review'
  | 'official'
  | 'web'
  | 'open_data'
  | 'institutional'
  | 'public_discussion'
  | 'public_web';

export type SentimentType = 'positive' | 'mixed' | 'negative' | 'nuanced' | 'neutral';

export interface EvidenceItem {
  id: string;
  source: SourceType;
  sourceName: string;
  sourceDomain: string;
  sourceUrl?: string;
  sourceTitle: string;
  sourceCategory?: string; // "OPEN DATA" | "INSTITUTIONAL SOURCE" | "PUBLIC DISCUSSION" | "PUBLIC WEB PAGE" | "OFFICIAL PLACE / BUSINESS"
  excerpt: string;
  date: string;
  publishedAt?: string;
  retrievedAt?: string;
  year: number;
  aspect: string;
  sentiment: SentimentType;
  sentimentConfidence?: number;
  relevanceScore: number; // 0 - 100
  authorRole?: string;
  upvotesOrReactions?: number;
  duplicateClusterId?: string;
  isDuplicateOriginal?: boolean;
  duplicateCount?: number;
  duplicateLabel?: string;
  duplicateExplanation?: string;
  verificationHash?: string;
  latitude?: number;
  longitude?: number;
  placeId?: string;
  provenance?: 'LIVE_GOOGLE_PLACES' | 'LIVE_REDDIT' | 'LIVE_OPENSTREETMAP' | 'LIVE_WIKIMEDIA' | 'LIVE_WEB_SEARCH' | 'DEMO_LOCAL_ARCHIVE' | 'FALLBACK_DATA' | string;
  isLive?: boolean;
  isDemo?: boolean;
  isFallback?: boolean;
}

export interface AspectAnalysis {
  id: string;
  name: string;
  label: string;
  sentiment: SentimentType;
  positiveRatio: number; // 0 - 100
  evidenceCount: number;
  summary: string;
  keyPhrases: string[];
}

export interface RecencyTrend {
  year: number;
  label: string;
  sentiment: SentimentType;
  summary: string;
  mentionCount: number;
}

export interface SourceDistribution {
  type: SourceType;
  name: string;
  count: number;
  percentage: number;
  iconName: string;
}

export interface ConflictReport {
  hasConflict: boolean;
  topic: string;
  positiveSignalCount: number;
  negativeSignalCount: number;
  summary: string;
  impartialSynthesis: string;
  supportingEvidence: EvidenceItem[];
  opposingEvidence: EvidenceItem[];
}

export interface ConfidenceBreakdown {
  independentDiscussions: number;
  sourceTypesCount: number;
  recencyFactorScore: number; // 0 - 100
  corroborationDensity: number; // 0 - 100
  conflictDetected: boolean;
  conflictPenaltyApplied: number;
}

export interface EntityReport {
  id: string;
  canonicalName: string;
  aliases: string[];
  category: string;
  location: string;
  latitude?: number;
  longitude?: number;
  placeId?: string;
  formattedAddress?: string;
  googleMapsUrl?: string;
  website?: string;
  rating?: number;
  userRatingsTotal?: number;
  priceLevel?: string;
  photos?: string[];
  affiliation?: string;
  feesSummary?: string;
  annualFeeNumeric?: number;
  highlightTag: string;
  evidenceConfidenceScore: number; // 0 - 100 (Coverage/Corroboration, NOT truth)
  confidenceBreakdown: ConfidenceBreakdown;
  summaryVerdict: string;
  aspects: AspectAnalysis[];
  recencyTrends: RecencyTrend[];
  sourceComposition: SourceDistribution[];
  conflict: ConflictReport;
  evidenceList: EvidenceItem[];
  institutionType?: string; // "engineering" | "medical" | "management" | "college" | "university" | "restaurant"
  programs?: string[];
  domains?: string[];
  degreeLevels?: string[];
  city?: string;
  district?: string;
  locality?: string;
}

export interface ParsedConstraints {
  domain?: string;
  targetDomain?: string;
  institutionType?: string;
  degree?: string;
  branch?: string;
  location?: string;
  budgetMax?: string;
  budgetNumeric?: number;
  priority?: string;
  cuisine?: string;
  propertyType?: string;
}

export interface ResearchQuery {
  id: string;
  query: string;
  category: 'college' | 'restaurant' | 'hotel' | 'pg' | 'general';
  constraints: ParsedConstraints;
  sourcesScannedCount: number;
  entitiesDiscovered: number;
  conflictsIdentified: number;
  deduplicatedClusters: number;
  results: EntityReport[];
  demoMode?: boolean;
  researchMode?: 'LIVE_RESEARCH' | 'PARTIAL_LIVE_RESEARCH' | 'DEMO_DATA' | 'FALLBACK_DATA';
  liveSourcesCount?: number;
  demoSourcesCount?: number;
  provenanceSummary?: Record<string, number>;
  sourceStatus?: Record<string, string>;
  researchRunId?: string;
}

export interface ResearchRunSummary {
  researchRunId: string;
  sessionId?: string;
  query: string;
  category: string;
  demoMode: boolean;
  createdAt: string;
  entitiesCount: number;
  evidenceCount: number;
  sourcesScannedCount: number;
  status: string;
}

export interface SourceHealthItem {
  source: string;
  status: 'available' | 'unavailable' | 'ready';
  authenticated: boolean;
  message: string;
  category: string;
  purpose: string;
  attribution: string;
}

export interface GraphNode {
  id: string;
  label: string;
  type: 'entity' | 'aspect' | 'source' | 'claim';
  sentiment?: SentimentType;
  value?: number;
  details?: string;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
}

export interface GraphEdge {
  source: string;
  target: string;
  label?: string;
  sentiment?: SentimentType;
  strength?: number;
}

export interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}
