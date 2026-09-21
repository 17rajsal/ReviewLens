import React, { useState, useMemo, useEffect } from 'react';
import { EntityReport, EvidenceItem } from '../../types/evidence';
import {
  ArrowLeft,
  MapPin,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  Clock,
  Layers,
  Sparkles,
  CheckCircle2,
  XCircle,
  Eye,
  GitCompare,
  Share2,
  Bookmark,
  Compass,
  Building,
  DollarSign,
  Award,
  Check,
  ChevronRight,
  TrendingUp,
  FileText
} from 'lucide-react';
import { InteractiveMapView } from '../map/InteractiveMapView';
import { EvidenceDrawer } from '../drawer/EvidenceDrawer';
import { tactileAudio } from '../../utils/audio';
import { delhiColleges } from '../../data/delhiCollegesData';
import { delhiRestaurants } from '../../data/delhiRestaurantsData';

interface EntityDetailPageProps {
  entity: EntityReport;
  allEntities?: EntityReport[];
  onBack: () => void;
  onCompare?: (entity: EntityReport) => void;
  onSelectEntity?: (entity: EntityReport) => void;
}

export const EntityDetailPage: React.FC<EntityDetailPageProps> = ({
  entity,
  allEntities = [],
  onBack,
  onCompare,
  onSelectEntity,
}) => {
  const [selectedDrawerEntity, setSelectedDrawerEntity] = useState<EntityReport | null>(null);
  const [drawerAspect, setDrawerAspect] = useState<string>('All');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Dynamic document title and Schema.org structured data injection
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${entity.canonicalName} Evidence & Review Analysis | ReviewLens`;

    const scriptId = 'entity-schema-jsonld';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }

    const schemaType = entity.category.toLowerCase().includes('college') ||
      entity.category.toLowerCase().includes('education') ||
      entity.category.toLowerCase().includes('university')
      ? 'EducationalOrganization'
      : 'Restaurant';

    const schemaData = {
      '@context': 'https://schema.org',
      '@type': schemaType,
      name: entity.canonicalName,
      description: entity.summaryVerdict,
      address: {
        '@type': 'PostalAddress',
        streetAddress: entity.formattedAddress || entity.location,
        addressLocality: 'Delhi',
        addressRegion: 'Delhi',
        addressCountry: 'IN',
      },
      url: entity.website || 'https://review-lens-black.vercel.app/',
      ...(entity.rating
        ? {
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: entity.rating,
              reviewCount: entity.userRatingsTotal || 50,
            },
          }
        : {}),
    };
    scriptEl.textContent = JSON.stringify(schemaData);

    return () => {
      document.title = prevTitle;
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [entity]);

  // Compute Strengths & Friction Concerns from aspects
  const strengths = useMemo(() => {
    const sorted = [...entity.aspects].sort((a, b) => b.positiveRatio - a.positiveRatio);
    return sorted.slice(0, 3);
  }, [entity.aspects]);

  const concerns = useMemo(() => {
    const sorted = [...entity.aspects].sort((a, b) => a.positiveRatio - b.positiveRatio);
    return sorted.slice(0, 3);
  }, [entity.aspects]);

  // Find 3-4 real related entities
  const relatedEntities = useMemo(() => {
    const isCollege = entity.category.toLowerCase().includes('college') ||
      entity.category.toLowerCase().includes('education') ||
      entity.category.toLowerCase().includes('university') ||
      entity.category.toLowerCase().includes('institute');

    const pool = allEntities.filter((e) => e.id !== entity.id);
    const fallbackPool = isCollege ? delhiColleges : delhiRestaurants;
    const filteredFallbacks = fallbackPool.filter((e) => e.id !== entity.id);

    const combined = [...pool, ...filteredFallbacks];
    const seen = new Set<string>();
    const unique: EntityReport[] = [];

    for (const item of combined) {
      if (!seen.has(item.id)) {
        seen.add(item.id);
        unique.push(item);
      }
      if (unique.length >= 4) break;
    }
    return unique;
  }, [entity, allEntities]);

  const handleOpenEvidence = (aspectName: string = 'All') => {
    setSelectedDrawerEntity(entity);
    setDrawerAspect(aspectName);
    setIsDrawerOpen(true);
  };

  const handleShare = () => {
    tactileAudio.playClick();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  const handleToggleSave = () => {
    tactileAudio.playClick();
    setIsSaved(!isSaved);
  };

  const handleScrollToMap = () => {
    tactileAudio.playClick();
    const mapEl = document.getElementById('entity-sidebar-map-card');
    if (mapEl) {
      mapEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // SVG Circular Gauge calculations for Verdict
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const confidenceScore = Math.round(entity.evidenceConfidenceScore);
  const strokeDashoffset = circumference - (confidenceScore / 100) * circumference;

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#FAF8F5] text-[#18181B] relative overflow-hidden">
      {/* Background ambient lighting accents */}
      <div className="pointer-events-none absolute top-10 left-1/4 w-[800px] h-[500px] bg-[#6B7CFF]/[0.03] rounded-full blur-[140px] -z-10" />
      <div className="pointer-events-none absolute top-96 right-1/4 w-[700px] h-[500px] bg-[#F59E72]/[0.03] rounded-full blur-[160px] -z-10" />

      {/* Main Wide Container: 90-95% of viewport up to 1720px */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-6">

        {/* 1. BREADCRUMB & ACTION BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-3.5 sm:p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-xs">
          {/* Breadcrumb path */}
          <div className="flex items-center gap-2 text-xs font-mono-code text-zinc-600 flex-wrap">
            <button
              type="button"
              onClick={() => {
                tactileAudio.playClick();
                onBack();
              }}
              aria-label="Back to research results"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-50 hover:bg-zinc-100 text-[#4A5CD8] font-medium border border-zinc-200 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#4A5CD8]"
            >
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Back</span>
            </button>

            <span className="text-zinc-300">/</span>
            <span className="hover:text-zinc-900 cursor-pointer" onClick={onBack}>Research</span>
            <span className="text-zinc-300">/</span>
            <span className="text-zinc-500">Delhi NCR</span>
            <span className="text-zinc-300">/</span>
            <span className="px-2 py-0.5 rounded-md bg-blue-50 text-[#3444B8] border border-blue-100 font-semibold truncate max-w-[140px] sm:max-w-none">
              {entity.category.split('/')[0].trim()}
            </span>
            <span className="text-zinc-300">/</span>
            <span className="font-semibold text-zinc-900 truncate max-w-[160px] sm:max-w-[260px]">
              {entity.canonicalName}
            </span>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap shrink-0">
            {/* Share */}
            <button
              type="button"
              onClick={handleShare}
              aria-label="Share entity report URL"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-50 hover:bg-zinc-100 text-zinc-700 border border-zinc-200 text-xs font-mono-code transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#18181B]"
            >
              {isCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                  <span className="text-emerald-700 font-semibold">Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-zinc-500" aria-hidden="true" />
                  <span>Share</span>
                </>
              )}
            </button>

            {/* Save */}
            <button
              type="button"
              onClick={handleToggleSave}
              aria-label={isSaved ? "Remove from saved entities" : "Save this entity"}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono-code transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#18181B] ${
                isSaved
                  ? 'bg-amber-50 text-amber-900 border-amber-300 font-semibold'
                  : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-700 border-zinc-200'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'text-amber-600 fill-amber-500' : 'text-zinc-500'}`} aria-hidden="true" />
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </button>

            {/* Compare */}
            {onCompare && (
              <button
                type="button"
                onClick={() => {
                  tactileAudio.playClick();
                  onCompare(entity);
                }}
                aria-label={`Compare ${entity.canonicalName} with similar entities`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-zinc-50 border border-zinc-300 text-xs font-mono-code font-medium text-zinc-800 transition-colors shadow-2xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#4A5CD8]"
              >
                <GitCompare className="w-3.5 h-3.5 text-[#4A5CD8]" aria-hidden="true" />
                <span>Compare</span>
              </button>
            )}

            {/* View on Map Anchor */}
            <button
              type="button"
              onClick={handleScrollToMap}
              aria-label="Scroll to map and geographic coordinates"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#18181B] hover:bg-[#27272A] text-white text-xs font-mono-code font-medium transition-colors shadow-2xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#18181B]"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              <span>View on Map</span>
            </button>
          </div>
        </div>

        {/* 2. WIDE HORIZONTAL ENTITY HERO CARD */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-zinc-200/80 shadow-md shadow-zinc-900/[0.02]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Hero Details (8 cols on desktop) */}
            <div className="lg:col-span-8 space-y-4">
              {/* Badges Row */}
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-[10px] font-mono-code uppercase font-bold text-[#3444B8] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  {entity.category}
                </span>

                <span className="text-[10px] font-mono-code text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Verified Open Registry Node
                </span>

                {entity.highlightTag && (
                  <span className="text-[10px] font-mono-code font-semibold text-purple-800 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                    {entity.highlightTag}
                  </span>
                )}
              </div>

              {/* Title & Subhead */}
              <div>
                <h1 className="text-3xl sm:text-4xl xl:text-5xl font-editorial font-normal text-[#18181B] tracking-tight leading-tight">
                  {entity.canonicalName}
                </h1>
                <p className="text-sm text-zinc-600 font-light pt-1">
                  {entity.affiliation ? `${entity.affiliation} • Recognized Knowledge Node` : 'Delhi NCR Geographic Intelligence Record'}
                </p>
              </div>

              {/* Metadata strip: Location, Rating, Website, Aliases */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-zinc-600 pt-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#4A5CD8] shrink-0" aria-hidden="true" />
                  <span className="font-medium text-zinc-800">{entity.formattedAddress || entity.location}</span>
                </div>

                {entity.rating && (
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50/90 border border-amber-200 text-amber-950 font-mono-code font-semibold">
                    <span className="text-amber-500 font-bold">★</span>
                    <span>{entity.rating.toFixed(1)}</span>
                    {entity.userRatingsTotal && (
                      <span className="text-zinc-500 font-normal">({entity.userRatingsTotal.toLocaleString()} on Google Maps)</span>
                    )}
                  </div>
                )}

                {entity.feesSummary && (
                  <div className="flex items-center gap-1 text-emerald-800 font-mono-code font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <DollarSign className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{entity.feesSummary}</span>
                  </div>
                )}

                {entity.website && (
                  <a
                    href={entity.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit official website for ${entity.canonicalName} (opens in new tab)`}
                    className="inline-flex items-center gap-1 font-mono-code text-[#4A5CD8] hover:text-[#2A3CB0] hover:underline"
                  >
                    <span>Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>

              {/* Known Aliases */}
              {entity.aliases && entity.aliases.length > 0 && (
                <div className="flex items-center gap-2 pt-1 flex-wrap text-xs font-mono-code text-zinc-500">
                  <span className="text-zinc-400">Resolved Aliases:</span>
                  {entity.aliases.slice(0, 4).map((alias, aIdx) => (
                    <span key={aIdx} className="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-700 text-[11px]">
                      {alias}
                    </span>
                  ))}
                  {entity.aliases.length > 4 && (
                    <span className="text-[11px] text-zinc-400">+{entity.aliases.length - 4} more</span>
                  )}
                </div>
              )}
            </div>

            {/* Right Telemetry Block (4 cols on desktop) */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-4 border-t lg:border-t-0 lg:border-l border-zinc-100 pt-4 lg:pt-0 lg:pl-8">
              {/* Prominent Evidence Confidence Block */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-zinc-200/90 text-center lg:text-right w-full sm:w-auto lg:w-full space-y-1.5">
                <span className="text-[10px] font-mono-code uppercase font-bold tracking-wider text-zinc-500 block">
                  EVIDENCE CORROBORATION
                </span>
                <div className="flex items-baseline justify-center lg:justify-end gap-1.5">
                  <span className="text-4xl sm:text-5xl font-mono-code font-bold text-[#18181B]">
                    {confidenceScore}%
                  </span>
                  <span className="text-xs font-mono-code text-emerald-600 font-bold">DENSITY</span>
                </div>
                <div className="text-[11px] font-mono-code text-zinc-500 pt-1 border-t border-zinc-200/60">
                  <span>{entity.confidenceBreakdown.independentDiscussions} discussions</span>
                  <span className="mx-1.5">•</span>
                  <span>{entity.confidenceBreakdown.sourceTypesCount} sources</span>
                </div>
              </div>

              {/* Citations Tally Pill */}
              <div className="text-xs font-mono-code text-zinc-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>{entity.evidenceList.length} verified public citations</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. MAIN INTELLIGENCE GRID: 8 COLUMNS LEFT CONTENT, 4 COLUMNS RIGHT SIDEBAR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ========================================================================= */}
          {/* LEFT MAIN COLUMN: 8 COLUMNS (About, Strengths/Concerns, Verdict, Aspects) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-8 space-y-6">

            {/* SECTION A: ABOUT / INSTITUTIONAL OVERVIEW */}
            <section className="p-6 sm:p-7 rounded-3xl bg-white border border-zinc-200/80 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono-code font-bold uppercase tracking-wider text-[#18181B]">
                <FileText className="w-4 h-4 text-[#4A5CD8]" aria-hidden="true" />
                <h2>Overview & Public Consensus Verdict</h2>
              </div>
              <p className="text-sm sm:text-base text-zinc-700 font-light leading-relaxed">
                {entity.summaryVerdict}
              </p>
            </section>

            {/* SECTION B & C: KEY STRENGTHS | COMMON CONCERNS (2-Column Internal Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Key Strengths */}
              <div className="p-6 rounded-3xl bg-white border border-zinc-200/80 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono-code font-bold uppercase tracking-wider text-emerald-800 pb-1 border-b border-zinc-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                  <h3>Key Strengths & Consensus</h3>
                </div>
                <div className="space-y-3">
                  {strengths.map((st, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-zinc-900">{st.name}</span>
                        <span className="font-mono-code font-bold text-emerald-700">
                          {Math.round(st.positiveRatio)}% Positive
                        </span>
                      </div>
                      <p className="text-xs text-zinc-600 font-light leading-relaxed">
                        {st.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Concerns / Friction Signals */}
              <div className="p-6 rounded-3xl bg-white border border-zinc-200/80 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono-code font-bold uppercase tracking-wider text-amber-800 pb-1 border-b border-zinc-100">
                  <AlertTriangle className="w-4 h-4 text-amber-600" aria-hidden="true" />
                  <h3>Common Concerns & Constraints</h3>
                </div>
                <div className="space-y-3">
                  {concerns.map((cn, cIdx) => (
                    <div key={cIdx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-zinc-900">{cn.name}</span>
                        <span className="font-mono-code font-bold text-amber-700">
                          {Math.round(100 - cn.positiveRatio)}% Negative / Caveats
                        </span>
                      </div>
                      <p className="text-xs text-zinc-600 font-light leading-relaxed">
                        {cn.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SECTION D: REVIEWLENS SYNTHESIS & VERDICT */}
            <section className="p-6 sm:p-8 rounded-3xl bg-[#F6F3ED]/90 border border-zinc-200/90 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-200/80">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#4A5CD8]" aria-hidden="true" />
                  <h2 className="text-xs font-mono-code uppercase tracking-widest font-bold text-[#18181B]">
                    ReviewLens Synthesis & Multi-Source Audit
                  </h2>
                </div>
                <span className="text-[10px] font-mono-code text-zinc-500">
                  Confidence Score • Independent Corroboration
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Synthesis Narrative (8 cols) */}
                <div className="md:col-span-8 space-y-3">
                  <p className="text-sm text-zinc-800 font-normal leading-relaxed">
                    ReviewLens continuously cross-examines peer commentary, institutional registries, and geographic anchors for <strong className="font-semibold">{entity.canonicalName}</strong>. Unlike single-score averages that smooth out essential disagreements, this report preserves distinct operational facets.
                  </p>
                  <p className="text-xs text-zinc-600 leading-relaxed font-light">
                    Every observation is anchored to public citations with verifiable timestamps, protecting against commercial astroturfing and outdated reviews.
                  </p>
                </div>

                {/* Circular Gauge Display (4 cols) */}
                <div className="md:col-span-4 flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs text-center">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        className="text-zinc-100"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        className="text-[#4A5CD8] transition-all duration-1000 ease-out"
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl font-mono-code font-bold text-[#18181B]">
                        {confidenceScore}%
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono-code uppercase font-bold text-zinc-500 pt-1.5 block">
                    Confidence Density
                  </span>
                </div>
              </div>

              {/* 4 Bottom Telemetry Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-mono-code">
                <div className="p-3 rounded-xl bg-white border border-zinc-200">
                  <span className="text-[10px] text-zinc-500 uppercase block">Platforms</span>
                  <span className="text-sm font-bold text-[#18181B]">{entity.confidenceBreakdown.sourceTypesCount} Active</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-zinc-200">
                  <span className="text-[10px] text-zinc-500 uppercase block">Discussions</span>
                  <span className="text-sm font-bold text-[#4A5CD8]">{entity.confidenceBreakdown.independentDiscussions} Evaluated</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-zinc-200">
                  <span className="text-[10px] text-zinc-500 uppercase block">Recency Factor</span>
                  <span className="text-sm font-bold text-emerald-700">{entity.confidenceBreakdown.recencyFactorScore}% Current</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-zinc-200">
                  <span className="text-[10px] text-zinc-500 uppercase block">Contradictions</span>
                  <span className="text-sm font-bold text-zinc-800">
                    {entity.conflict?.hasConflict ? '1 Flagged' : '0 Severe'}
                  </span>
                </div>
              </div>
            </section>

            {/* SECTION E: ASPECT-WISE EVIDENCE SIGNALS (2-Column Internal Grid) */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-mono-code uppercase tracking-wider font-bold text-[#18181B]">
                    Aspect-Wise Evidence Signals ({entity.aspects.length} Facets)
                  </h2>
                  <p className="text-xs text-zinc-500 font-light">
                    Granular consensus extracted across operational facets with independent citation links.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenEvidence('All')}
                  aria-label="Open full evidence drawer for all aspects"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-zinc-50 border border-zinc-200 text-xs font-mono-code text-[#4A5CD8] font-medium shadow-2xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#4A5CD8]"
                >
                  <span>View All Citations</span>
                  <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>

              {/* 2-Column Compact Aspect Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {entity.aspects.map((asp) => (
                  <div
                    key={asp.id}
                    className="p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-3 hover:border-zinc-300 transition-colors flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-sm text-[#18181B]">{asp.name}</h3>
                          <span className="text-[11px] text-zinc-500 block">{asp.label}</span>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-xs font-mono-code font-bold text-[#18181B]">
                            {Math.round(asp.positiveRatio)}% Positive
                          </span>
                          <span className="text-[10px] font-mono-code text-zinc-500 block">
                            {asp.evidenceCount} Citations
                          </span>
                        </div>
                      </div>

                      {/* Micro Progress Bar */}
                      <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            asp.positiveRatio >= 70
                              ? 'bg-emerald-500'
                              : asp.positiveRatio <= 45
                              ? 'bg-rose-500'
                              : 'bg-amber-500'
                          }`}
                          style={{ width: `${asp.positiveRatio}%` }}
                        />
                      </div>

                      <p className="text-xs text-zinc-600 font-light leading-relaxed">
                        {asp.summary}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-zinc-100 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {asp.keyPhrases.slice(0, 2).map((phrase, pIdx) => (
                          <span
                            key={pIdx}
                            className="text-[10px] font-mono-code px-2 py-0.5 rounded-md bg-zinc-50 text-zinc-600 border border-zinc-200/60"
                          >
                            "{phrase}"
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => handleOpenEvidence(asp.name)}
                        aria-label={`Inspect evidence citations for ${asp.name}`}
                        className="text-[11px] font-mono-code text-[#4A5CD8] hover:text-[#2A3CB0] hover:underline font-medium inline-flex items-center gap-1 shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#4A5CD8] rounded-xs"
                      >
                        <span>Inspect</span>
                        <Eye className="w-3 h-3" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION F & G: DISCUSSION TREND / RECENCY | SOURCE COMPOSITION (2-Column Internal Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Discussion Trend & Recency */}
              <div className="p-6 rounded-3xl bg-white border border-zinc-200/80 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono-code font-bold uppercase tracking-wider text-[#18181B] pb-1 border-b border-zinc-100">
                  <Clock className="w-4 h-4 text-[#4A5CD8]" aria-hidden="true" />
                  <h3>Temporal Recency Trends</h3>
                </div>
                <div className="space-y-3">
                  {entity.recencyTrends.map((trend, tIdx) => (
                    <div key={tIdx} className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/70 space-y-1">
                      <div className="flex items-center justify-between text-xs font-mono-code">
                        <span className="font-bold text-zinc-900">{trend.year} ({trend.label})</span>
                        <span className="text-[10px] text-zinc-500">{trend.mentionCount} Mentions</span>
                      </div>
                      <p className="text-xs text-zinc-600 font-light leading-relaxed">
                        {trend.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Source Composition & Provenance */}
              <div className="p-6 rounded-3xl bg-white border border-zinc-200/80 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono-code font-bold uppercase tracking-wider text-[#18181B] pb-1 border-b border-zinc-100">
                  <Layers className="w-4 h-4 text-[#4A5CD8]" aria-hidden="true" />
                  <h3>Source Distribution</h3>
                </div>
                <div className="space-y-3">
                  {entity.sourceComposition.map((src, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-zinc-800">{src.name}</span>
                        <span className="font-mono-code text-[11px] text-zinc-500">
                          {src.count} signals ({Math.round(src.percentage)}%)
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#4A5CD8] rounded-full"
                          style={{ width: `${src.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CONFLICT / DIVERGENCE SECTION (if exists) */}
            {entity.conflict && entity.conflict.hasConflict && (
              <div className="p-6 sm:p-7 rounded-3xl bg-amber-50/70 border border-amber-200/90 space-y-4">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-700" aria-hidden="true" />
                  <h3 className="text-base font-editorial font-bold text-amber-950">
                    Documented Evidence Divergence: "{entity.conflict.topic}"
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  {entity.conflict.impartialSynthesis}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  {entity.conflict.supportingEvidence.slice(0, 1).map((ev) => (
                    <div key={ev.id} className="p-4 rounded-2xl bg-white border border-amber-200/60 space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-mono-code text-emerald-800">
                        <span className="font-bold uppercase">Consensus View</span>
                        <span>{ev.date}</span>
                      </div>
                      <p className="text-xs text-zinc-800 italic">"{ev.excerpt}"</p>
                      <span className="text-[10px] font-mono-code text-zinc-500 block">
                        Source: {ev.sourceName}
                      </span>
                    </div>
                  ))}

                  {entity.conflict.opposingEvidence.slice(0, 1).map((ev) => (
                    <div key={ev.id} className="p-4 rounded-2xl bg-white border border-amber-200/60 space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-mono-code text-rose-800">
                        <span className="font-bold uppercase">Critical Counter-Perspective</span>
                        <span>{ev.date}</span>
                      </div>
                      <p className="text-xs text-zinc-800 italic">"{ev.excerpt}"</p>
                      <span className="text-[10px] font-mono-code text-zinc-500 block">
                        Source: {ev.sourceName}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* AUDITABLE EVIDENCE CITATIONS PREVIEW */}
            <section className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-mono-code uppercase tracking-wider font-bold text-[#18181B]">
                    Auditable Citations ({entity.evidenceList.length} Records)
                  </h3>
                  <p className="text-xs text-zinc-500 font-light">
                    Click any citation to view full cryptographic provenance, extraction timestamp, and contextual sentiment.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenEvidence('All')}
                  aria-label="Open complete evidence drawer"
                  className="px-4 py-2 rounded-full bg-[#18181B] hover:bg-[#27272A] text-white text-xs font-mono-code font-medium transition-all shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#18181B]"
                >
                  Open Full Drawer
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {entity.evidenceList.slice(0, 4).map((ev) => (
                  <div
                    key={ev.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`Inspect evidence citation from ${ev.sourceName} regarding ${ev.aspect}`}
                    onClick={() => handleOpenEvidence(ev.aspect)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleOpenEvidence(ev.aspect);
                      }
                    }}
                    className="p-4 rounded-2xl bg-white border border-zinc-200/80 hover:border-zinc-300 shadow-2xs space-y-2.5 cursor-pointer transition-all hover:scale-[1.01] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#4A5CD8]"
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono-code">
                      <span className="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-700 font-bold uppercase">
                        {ev.sourceCategory || ev.source}
                      </span>
                      <span className="text-zinc-500">{ev.date}</span>
                    </div>

                    <p className="text-xs text-zinc-800 leading-relaxed line-clamp-3">
                      "{ev.excerpt}"
                    </p>

                    <div className="flex items-center justify-between text-[10px] font-mono-code text-zinc-500 pt-1 border-t border-zinc-100">
                      <span className="truncate max-w-[200px]">{ev.sourceName}</span>
                      <span className="text-[#4A5CD8] font-semibold">Aspect: {ev.aspect}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT SIDEBAR: 4 COLUMNS (Sticky Map, Quick Facts, Related Entities)      */}
          {/* ========================================================================= */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">

            {/* SIDEBAR CARD 1: LOCATION & EMBEDDED MAP (Properly Contained) */}
            <div id="entity-sidebar-map-card" className="p-5 rounded-3xl bg-white border border-zinc-200/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#4A5CD8]" aria-hidden="true" />
                  <h3 className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#18181B]">
                    Location & Geography
                  </h3>
                </div>
                <span className="text-[10px] font-mono-code text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  Physical Node
                </span>
              </div>

              {/* Contained Leaflet Map with fixed 280px height */}
              <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-inner">
                <InteractiveMapView
                  entities={[entity]}
                  selectedEntityId={entity.id}
                  height="280px"
                />
              </div>

              {/* Address details & coordinates */}
              <div className="space-y-1.5 text-xs text-zinc-600">
                <div className="font-semibold text-zinc-900">
                  {entity.formattedAddress || entity.location}
                </div>
                <div className="text-[11px] font-mono-code text-zinc-500">
                  Coordinates: {entity.latitude?.toFixed(4) || '28.6328'}° N, {entity.longitude?.toFixed(4) || '77.2195'}° E
                </div>
                {entity.googleMapsUrl && (
                  <div className="pt-1">
                    <a
                      href={entity.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open in Google Maps (opens in new tab)"
                      className="inline-flex items-center gap-1 text-[11px] font-mono-code text-[#4A5CD8] hover:underline"
                    >
                      <span>Get Directions in Google Maps</span>
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* SIDEBAR CARD 2: QUICK FACTS */}
            <div className="p-5 rounded-3xl bg-white border border-zinc-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-100">
                <ShieldCheck className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                <h3 className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#18181B]">
                  Verified Quick Facts
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200/60 space-y-0.5">
                  <span className="text-[10px] font-mono-code text-zinc-500 uppercase block">Public Rating</span>
                  <span className="font-bold text-zinc-900 font-mono-code">
                    {entity.rating ? `★ ${entity.rating.toFixed(1)} / 5.0` : 'Not Rated'}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200/60 space-y-0.5">
                  <span className="text-[10px] font-mono-code text-zinc-500 uppercase block">Corroboration</span>
                  <span className="font-bold text-[#4A5CD8] font-mono-code">{confidenceScore}% Density</span>
                </div>

                <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200/60 space-y-0.5">
                  <span className="text-[10px] font-mono-code text-zinc-500 uppercase block">Category</span>
                  <span className="font-medium text-zinc-800 truncate block">
                    {entity.category.split('/')[0].trim()}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200/60 space-y-0.5">
                  <span className="text-[10px] font-mono-code text-zinc-500 uppercase block">Pricing / Fee</span>
                  <span className="font-medium text-zinc-800 truncate block">
                    {entity.feesSummary || entity.priceLevel || 'Varies'}
                  </span>
                </div>
              </div>

              {entity.affiliation && (
                <div className="pt-2 border-t border-zinc-100 text-xs">
                  <span className="text-[10px] font-mono-code text-zinc-500 uppercase block">Affiliation / Authority</span>
                  <span className="text-zinc-800 font-medium">{entity.affiliation}</span>
                </div>
              )}
            </div>

            {/* SIDEBAR CARD 3: RELATED ENTITIES */}
            {relatedEntities.length > 0 && (
              <div className="p-5 rounded-3xl bg-white border border-zinc-200/80 shadow-sm space-y-3.5">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-purple-600" aria-hidden="true" />
                    <h3 className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#18181B]">
                      Related Entities
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono-code text-zinc-400">Delhi NCR</span>
                </div>

                <div className="space-y-2.5">
                  {relatedEntities.map((rel) => (
                    <div
                      key={rel.id}
                      onClick={() => {
                        tactileAudio.playClick();
                        if (onSelectEntity) {
                          onSelectEntity(rel);
                        }
                      }}
                      className="p-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/70 transition-colors cursor-pointer space-y-1 group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-semibold text-xs text-zinc-900 group-hover:text-[#4A5CD8] transition-colors line-clamp-1">
                          {rel.canonicalName}
                        </span>
                        <span className="text-[10px] font-mono-code font-bold text-zinc-700 shrink-0">
                          {rel.rating ? `★ ${rel.rating.toFixed(1)}` : `${Math.round(rel.evidenceConfidenceScore)}%`}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-zinc-500">
                        <span className="truncate max-w-[180px]">{rel.location}</span>
                        <span className="text-[#4A5CD8] font-mono-code text-[10px] group-hover:translate-x-0.5 transition-transform">
                          Inspect →
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SIDEBAR CARD 4: COMPARE CTA */}
            {onCompare && (
              <div className="p-5 rounded-3xl bg-gradient-to-br from-[#18181B] to-[#27272A] text-white shadow-md space-y-3">
                <div className="flex items-center gap-2">
                  <GitCompare className="w-4 h-4 text-[#9B87F5]" aria-hidden="true" />
                  <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider">
                    Compare with Peers
                  </h4>
                </div>
                <p className="text-xs text-zinc-300 font-light leading-relaxed">
                  Evaluate side-by-side corroboration density, aspect performance, and conflicting signals.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    tactileAudio.playClick();
                    onCompare(entity);
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-zinc-100 text-[#18181B] font-medium text-xs font-mono-code transition-colors shadow-xs flex items-center justify-center gap-1.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Launch Comparative Matrix</span>
                  <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Traceable Evidence Drawer */}
      <EvidenceDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        entity={selectedDrawerEntity}
        initialAspectFilter={drawerAspect}
      />
    </div>
  );
};
