import React, { useState } from 'react';
import { EntityReport } from '../../types/evidence';
import { EvidenceScoreGauge } from './EvidenceScoreGauge';
import { AspectBreakdown } from './AspectBreakdown';
import { RecencyTimeline } from './RecencyTimeline';
import { SourceDiversityMeter } from './SourceDiversityMeter';
import { ConflictAlertBanner } from './ConflictAlertBanner';
import {
  MapPin,
  Compass,
  FileText,
  GitCompare,
  Building,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  GraduationCap,
  Utensils,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { tactileAudio } from '../../utils/audio';

interface EntityCardProps {
  entity: EntityReport;
  index?: number;
  onOpenEvidence: (filterAspect?: string) => void;
  onOpenGraph: () => void;
  onToggleCompare?: () => void;
  isCompared?: boolean;
  onViewOnMap?: () => void;
  onOpenDetail?: () => void;
}

export const EntityCard: React.FC<EntityCardProps> = ({
  entity,
  index = 0,
  onOpenEvidence,
  onOpenGraph,
  onToggleCompare,
  isCompared = false,
  onViewOnMap,
  onOpenDetail,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Check if entity has genuine live provenance or is from curated benchmark archive
  const isLive = entity.evidenceList.some(
    (e) => e.isLive || (e.provenance && e.provenance.startsWith('LIVE_'))
  );

  const positiveAspects = entity.aspects.filter((a) => a.sentiment === 'positive').slice(0, 3);
  const mixedAspects = entity.aspects
    .filter((a) => a.sentiment === 'mixed' || a.sentiment === 'negative')
    .slice(0, 2);

  const isCollege =
    entity.institutionType ||
    entity.category.toLowerCase().includes('education') ||
    entity.category.toLowerCase().includes('college') ||
    entity.category.toLowerCase().includes('university') ||
    entity.category.toLowerCase().includes('institute');

  return (
    <div className="rounded-3xl bg-white border border-zinc-200/90 hover:border-zinc-300 transition-all duration-300 p-5 sm:p-6 shadow-xs hover:shadow-lg shadow-zinc-900/[0.03] space-y-4 relative overflow-hidden group">
      {/* 1. Top Bar: Badges + Score Gauge */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          {/* Category / Institution Type Badge */}
          <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#3444B8] border border-blue-200 text-[10px] font-mono-code font-bold uppercase tracking-wider">
            {entity.institutionType ? entity.institutionType.toUpperCase() : entity.category}
          </span>

          {/* Source / Archive Verification Badge */}
          {isLive ? (
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-mono-code font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live Geocoded</span>
            </span>
          ) : (
            <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-[10px] font-mono-code font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>Curated Benchmark</span>
            </span>
          )}

          {entity.highlightTag && (
            <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600 text-[10px] font-mono-code font-medium truncate max-w-[180px]">
              {entity.highlightTag}
            </span>
          )}
        </div>

        {/* Compact Corroboration Gauge */}
        <div className="flex-shrink-0">
          <EvidenceScoreGauge
            score={entity.evidenceConfidenceScore}
            breakdown={entity.confidenceBreakdown}
            onWhyClick={() => onOpenEvidence()}
            compact={true}
          />
        </div>
      </div>

      {/* 2. Main Title & Geography */}
      <div className="space-y-1.5">
        <h3
          onClick={() => onOpenDetail && onOpenDetail()}
          className="text-xl sm:text-2xl font-bold text-[#18181B] tracking-tight group-hover:text-[#4A5CD8] transition-colors cursor-pointer leading-snug"
        >
          {entity.canonicalName}
        </h3>

        <div className="flex flex-wrap items-center gap-3 text-xs font-mono-code text-zinc-600">
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#4A5CD8] flex-shrink-0" />
            <span className="truncate">{entity.location}</span>
          </div>
          {entity.affiliation && (
            <div className="flex items-center gap-1 text-zinc-500">
              <Building className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
              <span className="truncate">{entity.affiliation}</span>
            </div>
          )}
        </div>
      </div>

      {/* 3. Programs / Domain or Cuisine Badge */}
      {isCollege ? (
        entity.programs && entity.programs.length > 0 ? (
          <div className="flex items-center gap-1.5 text-xs font-mono-code text-zinc-700 bg-zinc-50 px-2.5 py-1 rounded-lg border border-zinc-200/70 w-fit max-w-full">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-zinc-900 flex-shrink-0">Programs:</span>
            <span className="truncate">
              {entity.programs.slice(0, 3).join(', ')}
              {entity.programs.length > 3 ? ` +${entity.programs.length - 3} more` : ''}
            </span>
          </div>
        ) : entity.domains && entity.domains.length > 0 ? (
          <div className="flex items-center gap-1.5 text-xs font-mono-code text-zinc-700 bg-zinc-50 px-2.5 py-1 rounded-lg border border-zinc-200/70 w-fit max-w-full">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-zinc-900 flex-shrink-0">Domains:</span>
            <span className="truncate">{entity.domains.join(', ')}</span>
          </div>
        ) : null
      ) : (
        <div className="flex items-center gap-1.5 text-xs font-mono-code text-zinc-700 bg-zinc-50 px-2.5 py-1 rounded-lg border border-zinc-200/70 w-fit max-w-full">
          <Utensils className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
          <span className="font-semibold text-zinc-900 flex-shrink-0">Cuisine / Type:</span>
          <span className="truncate">{entity.category}</span>
        </div>
      )}

      {/* 4. Metadata Row: Fee, Rating, Citations */}
      <div className="flex flex-wrap items-center gap-2 pt-0.5 text-xs font-mono-code">
        {/* Fee / Budget */}
        {entity.feesSummary ? (
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-bold flex items-center gap-1">
            <DollarSign className="w-3 h-3" />
            <span>₹ {entity.feesSummary}</span>
          </span>
        ) : entity.priceLevel ? (
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-bold">
            {entity.priceLevel}
          </span>
        ) : null}

        {/* Rating */}
        {entity.rating && (
          <span className="px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 font-semibold flex items-center gap-1">
            <span className="text-amber-500 font-bold">★</span>
            <span>{entity.rating}</span>
            <span className="text-zinc-500 font-normal text-[10px]">
              {isLive && entity.userRatingsTotal
                ? `(${entity.userRatingsTotal.toLocaleString()})`
                : `(archive sample)`}
            </span>
          </span>
        )}

        {/* Citations Count */}
        <span className="text-[11px] text-zinc-500 font-mono-code">
          • {entity.evidenceList.length} citations
        </span>
      </div>

      {/* 5. Strong Signals vs Mixed Signals Pills + Verdict */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-1.5">
          {positiveAspects.map((asp) => (
            <span
              key={asp.id}
              onClick={(e) => {
                e.stopPropagation();
                onOpenEvidence(asp.name);
              }}
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 text-[10px] font-mono-code font-medium text-emerald-900 cursor-pointer transition-colors"
              title={`Filter evidence by ${asp.name}`}
            >
              <span className="text-emerald-600 font-bold">✓</span>
              <span>
                {asp.name} ({asp.positiveRatio}%)
              </span>
            </span>
          ))}
          {mixedAspects.map((asp) => (
            <span
              key={asp.id}
              onClick={(e) => {
                e.stopPropagation();
                onOpenEvidence(asp.name);
              }}
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 hover:bg-amber-100 border border-amber-200/80 text-[10px] font-mono-code font-medium text-amber-900 cursor-pointer transition-colors"
              title={`Filter evidence by ${asp.name}`}
            >
              <span className="text-amber-600 font-bold">⚠</span>
              <span>{asp.name}</span>
            </span>
          ))}
        </div>

        {/* Concise Verdict */}
        <p className="text-xs text-zinc-700 leading-relaxed line-clamp-2 font-normal">
          {entity.summaryVerdict}
        </p>
      </div>

      {/* Conflict Notice Chip if Contradictions Exist */}
      {entity.conflict.hasConflict && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            onOpenEvidence(entity.conflict.topic.split(' ')[0] || 'All');
          }}
          className="p-2 rounded-xl bg-amber-50/70 border border-amber-200/70 text-[11px] font-mono-code text-amber-900 flex items-center justify-between gap-2 cursor-pointer hover:bg-amber-100/70 transition-colors"
        >
          <div className="flex items-center gap-1.5 truncate">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-amber-950">Disputed:</span>
            <span className="truncate">{entity.conflict.topic}</span>
          </div>
          <span className="text-[10px] text-amber-700 underline flex-shrink-0">View Trace →</span>
        </div>
      )}

      {/* 6. Action Footer & Expandable Deep Analysis Toggle */}
      <div className="pt-3 border-t border-zinc-200/80 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 flex-wrap">
          {onOpenDetail && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                tactileAudio.playClick();
                onOpenDetail();
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#18181B] hover:bg-[#27272A] text-white text-xs font-mono-code font-medium transition-all shadow-2xs"
            >
              <FileText className="w-3 h-3 text-[#9B87F5]" />
              <span>Full Intelligence</span>
            </button>
          )}

          {onViewOnMap && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                tactileAudio.playClick();
                onViewOnMap();
              }}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white hover:bg-zinc-50 border border-zinc-200 text-xs font-mono-code text-[#4A5CD8] transition-all shadow-2xs"
            >
              <MapPin className="w-3 h-3" />
              <span>View on Map</span>
            </button>
          )}

          {onToggleCompare && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                tactileAudio.playClick();
                onToggleCompare();
              }}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-mono-code transition-all shadow-2xs ${
                isCompared
                  ? 'bg-blue-50 text-[#3444B8] border border-blue-300 font-bold'
                  : 'bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-700'
              }`}
            >
              <GitCompare className="w-3 h-3" />
              <span>{isCompared ? 'Added' : 'Compare'}</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          {/* In-place Accordion Toggle */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              tactileAudio.playClick();
              setIsExpanded(!isExpanded);
            }}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-[11px] font-mono-code font-medium transition-all"
            aria-expanded={isExpanded}
            aria-label={isExpanded ? 'Collapse deep analysis' : 'Expand deep analysis'}
          >
            <span>{isExpanded ? 'Collapse' : 'Deep Analysis'}</span>
            {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              tactileAudio.playClick();
              onOpenEvidence();
            }}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#F0F2FF] hover:bg-[#E4E7FF] text-[#3444B8] border border-[#D5DCFF] text-xs font-mono-code font-semibold transition-all"
          >
            <span>Evidence ({entity.evidenceList.length}) →</span>
          </button>
        </div>
      </div>

      {/* 7. In-Place Accordion: Detailed Breakdowns (Only shown when expanded) */}
      {isExpanded && (
        <div className="pt-4 border-t border-zinc-200/80 space-y-5 animate-in fade-in-50 duration-200">
          {entity.conflict.hasConflict && (
            <ConflictAlertBanner
              conflict={entity.conflict}
              onOpenDrawerWithConflict={() =>
                onOpenEvidence(entity.conflict.topic.split(' ')[0] || 'All')
              }
            />
          )}

          {/* Aspect Analysis */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-zinc-800">
              Aspect-Level Consensus Breakdown
            </h4>
            <AspectBreakdown
              aspects={entity.aspects}
              onSelectAspect={(aspectName) => onOpenEvidence(aspectName)}
            />
          </div>

          {/* Recency & Source Composition */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-zinc-100">
            <RecencyTimeline trends={entity.recencyTrends} />
            <SourceDiversityMeter distribution={entity.sourceComposition} />
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={() => onOpenGraph()}
              className="inline-flex items-center gap-1.5 text-xs font-mono-code text-purple-700 hover:text-purple-900 font-medium"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Open Interactive Knowledge Graph →</span>
            </button>

            <button
              type="button"
              onClick={() => onOpenEvidence()}
              className="inline-flex items-center gap-1.5 text-xs font-mono-code text-[#4A5CD8] hover:text-[#2A3CB0] font-semibold underline underline-offset-2"
            >
              <span>View all {entity.evidenceList.length} citations in Drawer →</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
