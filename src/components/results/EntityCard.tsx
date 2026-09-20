import React from 'react';
import { EntityReport } from '../../types/evidence';
import { EvidenceScoreGauge } from './EvidenceScoreGauge';
import { AspectBreakdown } from './AspectBreakdown';
import { RecencyTimeline } from './RecencyTimeline';
import { SourceDiversityMeter } from './SourceDiversityMeter';
import { ConflictAlertBanner } from './ConflictAlertBanner';
import { MapPin, Compass, FileText, GitCompare, Building, DollarSign, TrendingUp, AlertTriangle } from 'lucide-react';
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

  const positiveAspects = entity.aspects.filter((a) => a.sentiment === 'positive');
  const mixedAspects = entity.aspects.filter((a) => a.sentiment === 'mixed' || a.sentiment === 'negative');

  return (
    <div className="rounded-3xl bg-white border border-zinc-200/80 hover:border-zinc-300 transition-all duration-300 p-6 sm:p-8 shadow-md hover:shadow-xl shadow-zinc-900/[0.03] space-y-7 relative overflow-hidden group">
      {/* Top Banner & Header */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-zinc-200/80">
        <div className="space-y-2.5 flex-1">
          {/* Tag Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-0.5 rounded-full bg-blue-50 text-[#3444B8] border border-blue-200 text-[10px] font-mono-code font-bold uppercase tracking-wider">
              {entity.category}
            </span>
            {entity.feesSummary && (
              <span className="px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-mono-code font-semibold flex items-center gap-1">
                <DollarSign className="w-3 h-3" />
                <span>{entity.feesSummary}</span>
              </span>
            )}
            <span className="text-[10px] font-mono-code text-zinc-500">
              Resolved from {entity.aliases.length} aliases
            </span>
          </div>

          {/* Canonical Title */}
          <h3 className="text-2xl sm:text-3xl font-bold text-[#18181B] tracking-tight group-hover:text-[#4A5CD8] transition-colors">
            {entity.canonicalName}
          </h3>

          {/* Meta Details & Geography */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono-code text-zinc-600">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#4A5CD8]" />
              <span>{entity.location}</span>
            </div>
            {entity.affiliation && (
              <div className="flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-purple-600" />
                <span>{entity.affiliation}</span>
              </div>
            )}
            <div className="text-zinc-300">•</div>
            <div className="text-[11px] text-zinc-500">
              {entity.evidenceList.length} public discussions analyzed
            </div>
          </div>
        </div>

        {/* Evidence Coverage Visualization Gauge */}
        <div className="flex-shrink-0">
          <EvidenceScoreGauge
            score={entity.evidenceConfidenceScore}
            breakdown={entity.confidenceBreakdown}
            onWhyClick={() => onOpenEvidence()}
          />
        </div>
      </div>

      {/* Strong Signals vs Mixed Signals Visualization Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {/* Strong Corroborated Signals */}
        <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono-code uppercase font-bold text-emerald-800 flex items-center gap-1.5 tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Strong Consensus Signals ({positiveAspects.length})</span>
            </span>
            <span className="text-[10px] font-mono-code text-emerald-700 font-semibold">Corroborated</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {positiveAspects.map((asp) => (
              <span
                key={asp.id}
                onClick={() => onOpenEvidence(asp.name)}
                className="px-2.5 py-1 rounded-full bg-emerald-100/70 hover:bg-emerald-100 border border-emerald-300 text-[10px] font-mono-code text-emerald-900 cursor-pointer transition-colors"
              >
                ✓ {asp.name} ({asp.positiveRatio}%)
              </span>
            ))}
          </div>
        </div>

        {/* Mixed Signals / Friction */}
        <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono-code uppercase font-bold text-amber-800 flex items-center gap-1.5 tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Mixed / Friction Signals ({mixedAspects.length})</span>
            </span>
            <span className="text-[10px] font-mono-code text-amber-700 font-semibold">Nuanced</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {mixedAspects.map((asp) => (
              <span
                key={asp.id}
                onClick={() => onOpenEvidence(asp.name)}
                className="px-2.5 py-1 rounded-full bg-amber-100/70 hover:bg-amber-100 border border-amber-300 text-[10px] font-mono-code text-amber-900 cursor-pointer transition-colors"
              >
                ⚠ {asp.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ReviewLens Synthesized Verdict Callout */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#F6F3ED] border-l-4 border-[#6B7CFF] border-y border-r border-zinc-200/60 space-y-1">
        <span className="text-[10px] font-mono-code text-[#3444B8] font-bold uppercase tracking-wider block">
          ReviewLens Synthesized Verdict
        </span>
        <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed font-light">
          {entity.summaryVerdict}
        </p>
      </div>

      {/* Conflict Alert Banner (If Contradictions Exist) */}
      {entity.conflict.hasConflict && (
        <ConflictAlertBanner
          conflict={entity.conflict}
          onOpenDrawerWithConflict={() => onOpenEvidence(entity.conflict.topic.split(' ')[0] || 'All')}
        />
      )}

      {/* Main Analysis Grid: Aspects (7 Cols) & Recency / Source Diversity (5 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Aspect Analysis (7 Cols) */}
        <div className="lg:col-span-7">
          <AspectBreakdown
            aspects={entity.aspects}
            onSelectAspect={(aspectName) => onOpenEvidence(aspectName)}
          />
        </div>

        {/* Recency & Source Composition (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <RecencyTimeline trends={entity.recencyTrends} />
          <SourceDiversityMeter distribution={entity.sourceComposition} />
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="pt-5 border-t border-zinc-200/80 flex flex-wrap items-center justify-between gap-3.5">
        <div className="flex items-center gap-2 flex-wrap">
          {onOpenDetail && (
            <button
              onClick={() => {
                tactileAudio.playClick();
                onOpenDetail();
              }}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#18181B] hover:bg-[#27272A] text-white text-xs font-mono-code font-medium transition-all shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-[#9B87F5]" />
              <span>Full Intelligence</span>
            </button>
          )}

          {onViewOnMap && (
            <button
              onClick={() => {
                tactileAudio.playClick();
                onViewOnMap();
              }}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white hover:bg-zinc-50 border border-zinc-200 text-xs font-mono-code text-[#4A5CD8] transition-all"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>View on Map</span>
            </button>
          )}

          {onToggleCompare && (
            <button
              onClick={() => {
                tactileAudio.playClick();
                onToggleCompare();
              }}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-mono-code transition-all ${
                isCompared
                  ? 'bg-blue-50 text-[#3444B8] border border-blue-300 font-bold'
                  : 'bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-700'
              }`}
            >
              <GitCompare className="w-3.5 h-3.5" />
              <span>{isCompared ? 'Added' : 'Compare'}</span>
            </button>
          )}

          <button
            onClick={() => {
              tactileAudio.playClick();
              onOpenGraph();
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white hover:bg-purple-50/50 border border-zinc-200 hover:border-purple-300 text-xs font-mono-code text-purple-800 transition-all"
          >
            <Compass className="w-3.5 h-3.5 text-purple-600" />
            <span>Graph</span>
          </button>
        </div>

        {/* Primary Trace Action */}
        <button
          onClick={() => {
            tactileAudio.playClick();
            onOpenEvidence();
          }}
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-[#18181B] font-medium text-xs font-mono-code tracking-wide transition-all shadow-2xs"
        >
          <span>Evidence ({entity.evidenceList.length}) →</span>
        </button>
      </div>
    </div>
  );
};

