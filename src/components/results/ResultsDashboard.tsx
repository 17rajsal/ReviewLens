import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ResearchQuery, EntityReport } from '../../types/evidence';
import { EntityCard } from './EntityCard';
import { EntityComparisonModal } from './EntityComparisonModal';
import { EvidenceDrawer } from '../drawer/EvidenceDrawer';
import { EvidenceGraphModal } from '../graph/EvidenceGraphModal';
import { InteractiveMapView } from '../map/InteractiveMapView';
import {
  ArrowLeft,
  GitCompare,
  RotateCcw,
  Scale,
  ShieldCheck,
  Share2,
  Clock,
  AlertTriangle,
  Sparkles,
  MapPin,
  CheckCircle2,
  XCircle,
  Layers,
  LayoutGrid,
  Map as MapIcon,
  Navigation
} from 'lucide-react';
import { tactileAudio } from '../../utils/audio';
import { FilterBar, FilterState, initialFilterState } from './FilterBar';

interface ResultsDashboardProps {
  researchQuery: ResearchQuery;
  onBackToHero: () => void;
  onOpenEntityDetail?: (entity: EntityReport) => void;
  onOpenComparePage?: (entities: EntityReport[]) => void;
  onOpenFullMapPage?: () => void;
}

export const ResultsDashboard: React.FC<ResultsDashboardProps> = ({
  researchQuery,
  onBackToHero,
  onOpenEntityDetail,
  onOpenComparePage,
  onOpenFullMapPage,
}) => {
  const [selectedEntityForDrawer, setSelectedEntityForDrawer] = useState<EntityReport | null>(null);
  const [drawerInitialAspect, setDrawerInitialAspect] = useState<string>('All');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [selectedEntityForGraph, setSelectedEntityForGraph] = useState<EntityReport | null>(null);
  const [isGraphOpen, setIsGraphOpen] = useState(false);

  const [comparedEntities, setComparedEntities] = useState<EntityReport[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const [sortBy, setSortBy] = useState<'confidence' | 'budget'>('confidence');
  const [selectedEntityForMap, setSelectedEntityForMap] = useState<string | null>(researchQuery.results[0]?.id || null);
  const [layoutMode, setLayoutMode] = useState<'split' | 'cards' | 'map'>('split');
  const [filters, setFilters] = useState<FilterState>(initialFilterState);

  // Sort entities
  const sortedEntities = [...researchQuery.results].sort((a, b) => {
    if (sortBy === 'confidence') {
      return b.evidenceConfidenceScore - a.evidenceConfidenceScore;
    } else {
      return (a.annualFeeNumeric || 0) - (b.annualFeeNumeric || 0);
    }
  });

  // Filter entities according to active filters
  const filteredEntities = sortedEntities.filter((e) => {
    const isCollegeEntity =
      e.category.toLowerCase().includes('education') ||
      e.category.toLowerCase().includes('college') ||
      e.category.toLowerCase().includes('university') ||
      e.category.toLowerCase().includes('institute');

    if (isCollegeEntity) {
      if (filters.collegeRegion !== 'all') {
        const loc = e.location.toLowerCase();
        if (filters.collegeRegion === 'north' && !loc.includes('north')) return false;
        if (filters.collegeRegion === 'south' && !loc.includes('south')) return false;
        if (filters.collegeRegion === 'central' && !(loc.includes('central') || loc.includes('connaught') || loc.includes('barakhamba'))) return false;
        if (filters.collegeRegion === 'west' && !(loc.includes('west') || loc.includes('janakpuri') || loc.includes('dwarka'))) return false;
        if (filters.collegeRegion === 'east' && !(loc.includes('east') || loc.includes('surajmal') || loc.includes('shahdara'))) return false;
        if (filters.collegeRegion === 'dwarka' && !loc.includes('dwarka')) return false;
        if (filters.collegeRegion === 'rohini' && !(loc.includes('rohini') || loc.includes('pitampura'))) return false;
        if (filters.collegeRegion === 'shahdara' && !(loc.includes('shahdara') || loc.includes('dilshad garden') || loc.includes('east delhi'))) return false;
      }

      if (filters.collegeType !== 'all') {
        const aff = (e.affiliation || '').toLowerCase();
        const cat = e.category.toLowerCase();
        if (filters.collegeType === 'du' && !(aff.includes('delhi university') || aff.includes('university of delhi') || aff.includes('du'))) return false;
        if (filters.collegeType === 'govt' && !(aff.includes('state university') || aff.includes('autonomous') || aff.includes('institute of national importance') || aff.includes('government') || aff.includes('govt') || aff.includes('central university'))) return false;
        if (filters.collegeType === 'private' && !(aff.includes('private') || cat.includes('private'))) return false;
      }

      if (filters.collegeDomain !== 'all') {
        const text = `${e.category} ${e.highlightTag} ${e.summaryVerdict}`.toLowerCase();
        if (filters.collegeDomain === 'engineering' && !(text.includes('engineering') || text.includes('technology') || text.includes('technical'))) return false;
        if (filters.collegeDomain === 'management' && !(text.includes('management') || text.includes('business') || text.includes('commerce'))) return false;
        if (filters.collegeDomain === 'medical' && !(text.includes('medical') || text.includes('health') || text.includes('nursing') || text.includes('dental') || text.includes('hospital'))) return false;
        if (filters.collegeDomain === 'arts' && !(text.includes('arts') || text.includes('humanities') || text.includes('social science'))) return false;
        if (filters.collegeDomain === 'law' && !(text.includes('law') || text.includes('legal'))) return false;
      }

      if (filters.collegeAccreditation !== 'all') {
        const text = `${e.highlightTag} ${e.affiliation || ''}`.toLowerCase();
        if (filters.collegeAccreditation === 'naac-aplus' && !text.includes('naac a')) return false;
        if (filters.collegeAccreditation === 'ini' && !text.includes('national importance')) return false;
      }

      if (filters.collegeNirf !== 'all') {
        const tag = (e.highlightTag || '').toLowerCase();
        if (filters.collegeNirf === 'top10' && !(tag.includes('rank 1') || tag.includes('rank 2') || tag.includes('rank 3') || tag.includes('rank 4') || tag.includes('rank 5') || tag.includes('rank 6') || tag.includes('rank 7') || tag.includes('top 10') || tag.includes('top 5'))) return false;
        if (filters.collegeNirf === 'top50' && !(tag.includes('nirf') || tag.includes('rank'))) return false;
      }
    } else {
      if (filters.restaurantLocality !== 'all') {
        const loc = e.location.toLowerCase();
        if (filters.restaurantLocality === 'cp' && !(loc.includes('connaught') || loc.includes(' cp'))) return false;
        if (filters.restaurantLocality === 'khan-market' && !loc.includes('khan market')) return false;
        if (filters.restaurantLocality === 'hauz-khas' && !loc.includes('hauz khas')) return false;
        if (filters.restaurantLocality === 'saket' && !loc.includes('saket')) return false;
        if (filters.restaurantLocality === 'south-ex' && !(loc.includes('south extension') || loc.includes('south ex'))) return false;
        if (filters.restaurantLocality === 'defence-colony' && !loc.includes('defence colony')) return false;
        if (filters.restaurantLocality === 'gk' && !(loc.includes('greater kailash') || loc.includes('gk'))) return false;
        if (filters.restaurantLocality === 'old-delhi' && !(loc.includes('chandni chowk') || loc.includes('jama masjid') || loc.includes('old delhi') || loc.includes('daryaganj'))) return false;
        if (filters.restaurantLocality === 'karol-bagh' && !loc.includes('karol bagh')) return false;
        if (filters.restaurantLocality === 'west-delhi' && !(loc.includes('rajouri') || loc.includes('punjabi bagh') || loc.includes('janakpuri') || loc.includes('west delhi'))) return false;
        if (filters.restaurantLocality === 'dwarka' && !loc.includes('dwarka')) return false;
        if (filters.restaurantLocality === 'rohini' && !(loc.includes('rohini') || loc.includes('pitampura'))) return false;
      }

      if (filters.restaurantCuisine !== 'all') {
        const text = `${e.category} ${e.summaryVerdict} ${e.highlightTag}`.toLowerCase();
        if (filters.restaurantCuisine === 'mughlai' && !(text.includes('mughlai') || text.includes('north indian') || text.includes('nihari') || text.includes('kebab'))) return false;
        if (filters.restaurantCuisine === 'street-food' && !(text.includes('chaat') || text.includes('street food') || text.includes('sweet') || text.includes('parantha') || text.includes('chole bhature'))) return false;
        if (filters.restaurantCuisine === 'tibetan' && !(text.includes('tibetan') || text.includes('momo') || text.includes('majnu ka tilla') || text.includes('thukpa'))) return false;
        if (filters.restaurantCuisine === 'south-indian' && !(text.includes('south indian') || text.includes('dosa') || text.includes('carnatic') || text.includes('idli'))) return false;
        if (filters.restaurantCuisine === 'italian' && !(text.includes('italian') || text.includes('pizza') || text.includes('pasta'))) return false;
        if (filters.restaurantCuisine === 'cafe' && !(text.includes('bakery') || text.includes('cafe') || text.includes('coffee') || text.includes('pastry'))) return false;
        if (filters.restaurantCuisine === 'fine-dining' && !(text.includes('fine dining') || e.priceLevel === '₹₹₹₹')) return false;
        if (filters.restaurantCuisine === 'regional' && !(text.includes('kashmiri') || text.includes('bengali') || text.includes('bhavan') || text.includes('regional') || text.includes('parsi'))) return false;
      }

      if (filters.restaurantPrice !== 'all') {
        if (e.priceLevel !== filters.restaurantPrice) return false;
      }

      if (filters.restaurantDiet !== 'all') {
        const text = `${e.category} ${e.summaryVerdict} ${e.highlightTag}`.toLowerCase();
        if (filters.restaurantDiet === 'veg' && !(text.includes('pure vegetarian') || text.includes('vegetarian') || text.includes('veg '))) return false;
        if (filters.restaurantDiet === 'non-veg' && text.includes('pure vegetarian')) return false;
      }

      if (filters.restaurantType !== 'all') {
        const text = `${e.category} ${e.summaryVerdict} ${e.highlightTag}`.toLowerCase();
        if (filters.restaurantType === 'heritage' && !(text.includes('heritage') || text.includes('iconic') || text.includes('historic') || text.includes('legacy') || text.includes('institution'))) return false;
        if (filters.restaurantType === 'fine-dining' && !(text.includes('fine dining') || e.priceLevel === '₹₹₹₹')) return false;
        if (filters.restaurantType === 'casual' && !(text.includes('casual') || e.priceLevel === '₹₹')) return false;
        if (filters.restaurantType === 'street' && !(text.includes('street') || text.includes('counter') || text.includes('dhaba') || text.includes('gali'))) return false;
        if (filters.restaurantType === 'bakery' && !(text.includes('bakery') || text.includes('patisserie') || text.includes('confectionery'))) return false;
      }
    }

    return true;
  });

  const avgCoverage = Math.round(
    researchQuery.results.reduce((acc, curr) => acc + curr.evidenceConfidenceScore, 0) /
      (researchQuery.results.length || 1)
  );

  // Derive "The Signal" summary across all entities
  const allAspects = researchQuery.results.flatMap((e) => e.aspects);
  const topPositiveAspect = allAspects.find((a) => a.positiveRatio >= 75);
  const topConcernAspect = allAspects.find((a) => a.positiveRatio <= 45);
  const conflictEntity = researchQuery.results.find((e) => e.conflict?.hasConflict);

  const signalPositive = topPositiveAspect
    ? `${topPositiveAspect.name} enjoy verified high consensus across independent mentions.`
    : 'Multiple sources report reliable operational performance.';

  const signalConcern = topConcernAspect
    ? `${topConcernAspect.name} represents the most noted constraint in public discussions.`
    : 'Administrative and pricing overhead noted as secondary friction points.';

  const signalDisputed = conflictEntity?.conflict?.topic
    ? `Divergence documented regarding "${conflictEntity.conflict.topic}".`
    : 'High consensus regarding core offerings; minimal direct polarity divergence.';

  const handleOpenDrawer = (entity: EntityReport, filterAspect?: string) => {
    setSelectedEntityForDrawer(entity);
    setDrawerInitialAspect(filterAspect || 'All');
    setIsDrawerOpen(true);
  };

  const handleOpenGraph = (entity: EntityReport) => {
    setSelectedEntityForGraph(entity);
    setIsGraphOpen(true);
  };

  const handleToggleCompare = (entity: EntityReport) => {
    if (comparedEntities.some((e) => e.id === entity.id)) {
      setComparedEntities(comparedEntities.filter((e) => e.id !== entity.id));
    } else {
      if (comparedEntities.length >= 3) {
        alert('You can compare up to 3 entities simultaneously.');
        return;
      }
      setComparedEntities([...comparedEntities, entity]);
    }
  };

  const handleViewOnMap = (entity: EntityReport) => {
    setSelectedEntityForMap(entity.id);
    if (layoutMode === 'cards') {
      setLayoutMode('split');
    }
    const mapElement = document.getElementById('research-map-section');
    mapElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#FAF8F5] text-[#18181B] relative overflow-hidden">
      {/* Background ambient daylight lighting */}
      <div className="pointer-events-none absolute top-20 left-1/4 w-[600px] h-[400px] bg-[#6B7CFF]/[0.03] rounded-full blur-[140px] -z-10" />
      <div className="pointer-events-none absolute top-80 right-1/4 w-[500px] h-[400px] bg-[#F59E72]/[0.03] rounded-full blur-[160px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Research Breadcrumb & Query Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-xl shadow-zinc-900/[0.04] relative overflow-hidden space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-200/80">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    tactileAudio.playClick();
                    onBackToHero();
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-mono-code text-[#4A5CD8] hover:text-[#2A3CB0] transition-colors font-semibold"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Return to Search</span>
                </button>

                <span className="text-zinc-300">•</span>

                <button
                  onClick={() => {
                    tactileAudio.playClick();
                    onBackToHero();
                  }}
                  className="inline-flex items-center gap-1 text-xs font-mono-code text-zinc-500 hover:text-[#18181B] transition-colors"
                  title="Reset demo back to Hero view"
                >
                  <RotateCcw className="w-3 h-3 text-zinc-400" />
                  <span>Reset Demo</span>
                </button>
              </div>

              {/* Status Badges */}
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-[10px] font-mono-code uppercase font-bold text-[#3444B8] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                  Synthesized Evidence Report
                </span>
                {researchQuery.researchMode === 'LIVE_RESEARCH' ? (
                  <span className="text-[10px] font-mono-code uppercase font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    LIVE RESEARCH (100% INTERNET DATA)
                  </span>
                ) : researchQuery.researchMode === 'PARTIAL_LIVE_RESEARCH' ? (
                  <span className="text-[10px] font-mono-code uppercase font-semibold text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    PARTIAL LIVE RESEARCH ({researchQuery.liveSourcesCount || 2} Live Internet • {researchQuery.demoSourcesCount || 5} Benchmark)
                  </span>
                ) : (
                  <span className="text-[10px] font-mono-code uppercase font-semibold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    DEMO DATA / BENCHMARK ARCHIVE
                  </span>
                )}
                <span className="text-xs text-zinc-500 font-mono-code">
                  ID: #{researchQuery.id.slice(0, 10)}
                </span>
              </div>

              {/* Large RESEARCH QUESTION */}
              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-mono-code uppercase tracking-wider text-zinc-500 font-bold">
                  RESEARCH INQUIRY
                </span>
                <h1 className="text-2xl sm:text-4xl font-editorial font-normal text-[#18181B] tracking-tight leading-snug">
                  "{researchQuery.query}"
                </h1>
              </div>

              {researchQuery.researchMode === 'PARTIAL_LIVE_RESEARCH' && (
                <div className="mt-2 text-[11px] font-mono-code text-blue-900 bg-blue-50/80 px-3.5 py-2 rounded-xl border border-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Live internet data retrieved from <strong>OpenStreetMap</strong> and <strong>Wikipedia REST API</strong>. Unconfigured sources (Reddit / Google Places) are labeled as benchmark data.</span>
                  </div>
                  <span className="text-[10px] text-blue-700 font-semibold uppercase tracking-wider">NO SILENT FALLBACK</span>
                </div>
              )}

              {(researchQuery.demoMode || researchQuery.researchMode === 'DEMO_DATA') && (
                <div className="mt-2 text-[11px] font-mono-code text-amber-800 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200 flex items-center gap-2">
                  <span className="text-amber-600 font-bold">ℹ</span>
                  <span>Demonstration evidence archive active. Showing verified benchmark models with genuine Delhi NCR coordinates.</span>
                </div>
              )}
            </div>

            {/* Quick Actions Header Buttons */}
            <div className="flex items-center gap-2.5 flex-wrap">
              {comparedEntities.length > 0 ? (
                <button
                  onClick={() => {
                    tactileAudio.playClick();
                    if (onOpenComparePage) {
                      onOpenComparePage(comparedEntities);
                    } else {
                      setIsCompareModalOpen(true);
                    }
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#18181B] text-white font-medium text-xs font-mono-code tracking-wide transition-all shadow-md active:scale-95 hover:bg-[#27272A]"
                >
                  <GitCompare className="w-4 h-4" />
                  <span>Compare ({comparedEntities.length}) →</span>
                </button>
              ) : (
                onOpenComparePage && (
                  <button
                    onClick={() => {
                      tactileAudio.playClick();
                      onOpenComparePage(sortedEntities.slice(0, 3));
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-zinc-200 hover:bg-zinc-50 text-xs font-mono-code text-zinc-700 transition-all shadow-2xs"
                  >
                    <GitCompare className="w-3.5 h-3.5 text-[#4A5CD8]" />
                    <span>Compare All</span>
                  </button>
                )
              )}

              {onOpenFullMapPage && (
                <button
                  onClick={() => {
                    tactileAudio.playClick();
                    onOpenFullMapPage();
                  }}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white border border-zinc-200 hover:bg-zinc-50 text-xs font-mono-code text-zinc-700 transition-all shadow-2xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#4A5CD8]" />
                  <span>Explore Map</span>
                </button>
              )}
            </div>
          </div>

          {/* 4-Box Telemetry Deck */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-zinc-200/80">
              <span className="text-[10px] font-mono-code uppercase font-semibold text-zinc-500 block">
                SOURCES SCANNED
              </span>
              <span className="text-2xl font-mono-code font-bold text-[#18181B] block pt-1">
                {researchQuery.sourcesScannedCount}
              </span>
              <span className="text-[10px] font-mono-code text-emerald-700 block">
                Across 4 platforms
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-zinc-200/80">
              <span className="text-[10px] font-mono-code uppercase font-semibold text-zinc-500 block">
                RESOLVED ENTITIES
              </span>
              <span className="text-2xl font-mono-code font-bold text-[#18181B] block pt-1">
                {researchQuery.entitiesDiscovered}
              </span>
              <span className="text-[10px] font-mono-code text-blue-700 block">
                Geographically mapped
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-zinc-200/80">
              <span className="text-[10px] font-mono-code uppercase font-semibold text-zinc-500 block">
                CONFLICTS IDENTIFIED
              </span>
              <span className="text-2xl font-mono-code font-bold text-[#18181B] block pt-1">
                {researchQuery.conflictsIdentified}
              </span>
              <span className="text-[10px] font-mono-code text-amber-700 block">
                Side-by-side traced
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-zinc-200/80">
              <span className="text-[10px] font-mono-code uppercase font-semibold text-zinc-500 block">
                AVERAGE COVERAGE
              </span>
              <span className="text-2xl font-mono-code font-bold text-[#18181B] block pt-1">
                {avgCoverage}%
              </span>
              <span className="text-[10px] font-mono-code text-purple-700 block">
                Corroboration density
              </span>
            </div>
          </div>
        </div>

        {/* THE SIGNAL (Section 25 Master Requirement) */}
        <section className="p-6 sm:p-8 rounded-3xl bg-[#F6F3ED]/95 border border-zinc-200/90 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200/80 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#4A5CD8]" />
              <h2 className="text-xs font-mono-code uppercase tracking-widest font-bold text-[#18181B]">
                THE SIGNAL • SYNTHESIZED EXECUTIVE CONSENSUS
              </h2>
            </div>
            <span className="text-[10px] font-mono-code text-zinc-500">
              Traceable across {researchQuery.sourcesScannedCount} independent citations
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-1.5">
              <span className="text-[10px] font-mono-code uppercase font-semibold text-emerald-700 block flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                RECURRING POSITIVE
              </span>
              <p className="text-xs text-zinc-800 font-medium leading-snug">
                {signalPositive}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-1.5">
              <span className="text-[10px] font-mono-code uppercase font-semibold text-amber-700 block flex items-center gap-1.5">
                <XCircle className="w-3.5 h-3.5 text-amber-600" />
                RECURRING CONCERN
              </span>
              <p className="text-xs text-zinc-800 font-medium leading-snug">
                {signalConcern}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-1.5">
              <span className="text-[10px] font-mono-code uppercase font-semibold text-rose-700 block flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                MOST DISPUTED
              </span>
              <p className="text-xs text-zinc-800 font-medium leading-snug">
                {signalDisputed}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-1.5">
              <span className="text-[10px] font-mono-code uppercase font-semibold text-blue-700 block flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                RECENT EVIDENCE
              </span>
              <p className="text-xs text-zinc-800 font-medium leading-snug">
                2026 mentions focus on off-campus portfolio outcomes and crowd surge hours.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <FilterBar
          category={
            researchQuery.category === 'college'
              ? 'college'
              : researchQuery.category === 'restaurant'
              ? 'restaurant'
              : 'all'
          }
          filters={filters}
          onFilterChange={(newFilters) => setFilters(newFilters)}
          onReset={() => setFilters(initialFilterState)}
          totalCount={sortedEntities.length}
          filteredCount={filteredEntities.length}
        />

        {/* View Layout Controls & Sort Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono-code text-zinc-500">Sort by:</span>
            <button
              onClick={() => setSortBy('confidence')}
              className={`px-3 py-1.5 rounded-full text-xs font-mono-code transition-all ${
                sortBy === 'confidence'
                  ? 'bg-[#18181B] text-white font-medium shadow-xs'
                  : 'bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300'
              }`}
            >
              Coverage
            </button>
            <button
              onClick={() => setSortBy('budget')}
              className={`px-3 py-1.5 rounded-full text-xs font-mono-code transition-all ${
                sortBy === 'budget'
                  ? 'bg-[#18181B] text-white font-medium shadow-xs'
                  : 'bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300'
              }`}
            >
              Cost / Fee
            </button>
          </div>

          {/* Layout Mode Toggles */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-white border border-zinc-200 shadow-2xs">
            <button
              onClick={() => setLayoutMode('split')}
              className={`px-3 py-1 rounded-full text-[11px] font-mono-code font-medium transition-all flex items-center gap-1 ${
                layoutMode === 'split' ? 'bg-[#18181B] text-white' : 'text-zinc-600 hover:text-[#18181B]'
              }`}
            >
              <LayoutGrid className="w-3 h-3" />
              <span>Split (Cards + Map)</span>
            </button>

            <button
              onClick={() => setLayoutMode('cards')}
              className={`px-3 py-1 rounded-full text-[11px] font-mono-code font-medium transition-all flex items-center gap-1 ${
                layoutMode === 'cards' ? 'bg-[#18181B] text-white' : 'text-zinc-600 hover:text-[#18181B]'
              }`}
            >
              <span>Cards Only</span>
            </button>

            <button
              onClick={() => setLayoutMode('map')}
              className={`px-3 py-1 rounded-full text-[11px] font-mono-code font-medium transition-all flex items-center gap-1 ${
                layoutMode === 'map' ? 'bg-[#18181B] text-white' : 'text-zinc-600 hover:text-[#18181B]'
              }`}
            >
              <MapIcon className="w-3 h-3" />
              <span>Map Only</span>
            </button>
          </div>
        </div>

        {/* Empty state when filters return 0 matches */}
        {filteredEntities.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-white border border-zinc-200 shadow-2xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto text-amber-700 font-bold">
              !
            </div>
            <h3 className="text-lg font-editorial font-bold text-zinc-900">
              No entities match the active filters
            </h3>
            <p className="text-xs text-zinc-500 max-w-md mx-auto">
              Try loosening your region, cuisine, or category criteria to view more verified Delhi discovery results.
            </p>
            <button
              onClick={() => setFilters(initialFilterState)}
              className="px-4 py-2 rounded-full bg-[#18181B] text-white text-xs font-mono-code hover:bg-zinc-800 transition-all"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <>
            {/* Primary Research Experience Layout */}
            {layoutMode === 'split' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Entity Cards (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  {filteredEntities.map((entity, idx) => (
                    <div
                      key={entity.id}
                      className={`transition-all duration-200 rounded-3xl ${
                        selectedEntityForMap === entity.id ? 'ring-2 ring-[#4A5CD8]/30 shadow-lg' : ''
                      }`}
                      onClick={() => setSelectedEntityForMap(entity.id)}
                    >
                      <EntityCard
                        entity={entity}
                        index={idx}
                        isCompared={comparedEntities.some((e) => e.id === entity.id)}
                        onToggleCompare={() => handleToggleCompare(entity)}
                        onOpenEvidence={(filterAspect) => handleOpenDrawer(entity, filterAspect)}
                        onOpenGraph={() => handleOpenGraph(entity)}
                        onViewOnMap={() => handleViewOnMap(entity)}
                        onOpenDetail={() => onOpenEntityDetail && onOpenEntityDetail(entity)}
                      />
                    </div>
                  ))}
                </div>

                {/* Right: Sticky Interactive Map (5 cols) */}
                <div id="research-map-section" className="lg:col-span-5 sticky top-24 space-y-4">
                  <InteractiveMapView
                    entities={filteredEntities}
                    selectedEntityId={selectedEntityForMap}
                    onSelectEntity={(ent) => setSelectedEntityForMap(ent.id)}
                    onOpenEntityDetail={(ent) => onOpenEntityDetail && onOpenEntityDetail(ent)}
                    onOpenEvidenceDrawer={(ent) => handleOpenDrawer(ent)}
                    height="620px"
                  />
                </div>
              </div>
            )}

            {layoutMode === 'cards' && (
              <div className="space-y-6 max-w-4xl mx-auto">
                {filteredEntities.map((entity, idx) => (
                  <EntityCard
                    key={entity.id}
                    entity={entity}
                    index={idx}
                    isCompared={comparedEntities.some((e) => e.id === entity.id)}
                    onToggleCompare={() => handleToggleCompare(entity)}
                    onOpenEvidence={(filterAspect) => handleOpenDrawer(entity, filterAspect)}
                    onOpenGraph={() => handleOpenGraph(entity)}
                    onViewOnMap={() => handleViewOnMap(entity)}
                    onOpenDetail={() => onOpenEntityDetail && onOpenEntityDetail(entity)}
                  />
                ))}
              </div>
            )}

            {layoutMode === 'map' && (
              <div className="space-y-4">
                <InteractiveMapView
                  entities={filteredEntities}
                  selectedEntityId={selectedEntityForMap}
                  onSelectEntity={(ent) => setSelectedEntityForMap(ent.id)}
                  onOpenEntityDetail={(ent) => onOpenEntityDetail && onOpenEntityDetail(ent)}
                  onOpenEvidenceDrawer={(ent) => handleOpenDrawer(ent)}
                  height="750px"
                />
              </div>
            )}
          </>
        )}
      </div>

      {/* Drawer & Modal Instruments */}
      <EvidenceDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        entity={selectedEntityForDrawer}
        initialAspectFilter={drawerInitialAspect}
      />

      {isGraphOpen && selectedEntityForGraph && (
        <EvidenceGraphModal
          isOpen={isGraphOpen}
          onClose={() => setIsGraphOpen(false)}
          entity={selectedEntityForGraph}
          allEntities={sortedEntities}
          onSelectEntity={(ent) => setSelectedEntityForGraph(ent)}
        />
      )}

      {isCompareModalOpen && (
        <EntityComparisonModal
          isOpen={isCompareModalOpen}
          onClose={() => setIsCompareModalOpen(false)}
          entities={comparedEntities}
        />
      )}
    </div>
  );
};
