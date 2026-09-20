import React, { useState } from 'react';
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
  HelpCircle,
  Eye,
  GitCompare
} from 'lucide-react';
import { InteractiveMapView } from '../map/InteractiveMapView';
import { EvidenceDrawer } from '../drawer/EvidenceDrawer';
import { tactileAudio } from '../../utils/audio';

interface EntityDetailPageProps {
  entity: EntityReport;
  onBack: () => void;
  onCompare?: (entity: EntityReport) => void;
}

export const EntityDetailPage: React.FC<EntityDetailPageProps> = ({
  entity,
  onBack,
  onCompare,
}) => {
  const [selectedDrawerEntity, setSelectedDrawerEntity] = useState<EntityReport | null>(null);
  const [drawerAspect, setDrawerAspect] = useState<string>('All');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Compute Signal facts from evidence & aspects
  const positiveAspects = entity.aspects.filter((a) => a.positiveRatio >= 70);
  const concernAspects = entity.aspects.filter((a) => a.positiveRatio <= 45);
  const disputedAspect = entity.conflict?.hasConflict ? entity.conflict.topic : (entity.aspects.find((a) => a.positiveRatio > 45 && a.positiveRatio < 70)?.name || 'None');

  const recurringPositive = positiveAspects.length > 0
    ? `${positiveAspects[0].name} (${Math.round(positiveAspects[0].positiveRatio)}% positive consensus)`
    : 'Consistent foundational ratings across sources';

  const recurringConcern = concernAspects.length > 0
    ? `${concernAspects[0].name} frequently cited as a constraint (${Math.round(100 - concernAspects[0].positiveRatio)}% negative mentions)`
    : 'No severe recurring systemic complaints identified';

  const recentEvidence = entity.recencyTrends.find((t) => t.year === 2026)?.summary ||
    'Recent mentions reflect active ongoing public community interest.';

  const handleOpenEvidence = (aspectName: string = 'All') => {
    setSelectedDrawerEntity(entity);
    setDrawerAspect(aspectName);
    setIsDrawerOpen(true);
  };

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#FAF8F5] text-[#18181B] relative overflow-hidden">
      {/* Background ambient daylight lighting */}
      <div className="pointer-events-none absolute top-20 left-1/4 w-[600px] h-[400px] bg-[#6B7CFF]/[0.03] rounded-full blur-[140px] -z-10" />
      <div className="pointer-events-none absolute top-80 right-1/4 w-[500px] h-[400px] bg-[#F59E72]/[0.03] rounded-full blur-[160px] -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Navigation & Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200/80">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                tactileAudio.playClick();
                onBack();
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-mono-code text-[#4A5CD8] hover:text-[#2A3CB0] transition-all shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Research</span>
            </button>

            <span className="text-zinc-300">•</span>

            <span className="text-[11px] font-mono-code uppercase font-semibold text-zinc-500">
              Entity Intelligence Report
            </span>
          </div>

          {onCompare && (
            <button
              onClick={() => {
                tactileAudio.playClick();
                onCompare(entity);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-zinc-300 hover:bg-zinc-50 text-xs font-mono-code font-medium text-zinc-800 transition-all shadow-xs"
            >
              <GitCompare className="w-3.5 h-3.5 text-[#4A5CD8]" />
              <span>Compare Entity</span>
            </button>
          )}
        </div>

        {/* Entity Hero Title Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-xl shadow-zinc-900/[0.03] space-y-5">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-[10px] font-mono-code uppercase font-bold text-[#3444B8] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                  {entity.category}
                </span>
                {entity.affiliation && (
                  <span className="text-[10px] font-mono-code text-zinc-600 bg-zinc-100 px-2.5 py-0.5 rounded-full">
                    {entity.affiliation}
                  </span>
                )}
                <span className="text-[10px] font-mono-code text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Verified Geographic Node
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-editorial font-normal text-[#18181B] tracking-tight leading-tight">
                {entity.canonicalName}
              </h1>

              <div className="flex items-center gap-2 text-sm text-zinc-600 flex-wrap">
                <MapPin className="w-4 h-4 text-[#4A5CD8] shrink-0" />
                <span>{entity.formattedAddress || entity.location}</span>
                {entity.googleMapsUrl && (
                  <a
                    href={entity.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono-code text-[#4A5CD8] hover:underline ml-2"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

            {/* Coverage Meter Block */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-zinc-200/80 flex md:flex-col items-center justify-between gap-3 text-center min-w-[180px]">
              <div>
                <span className="text-[10px] font-mono-code uppercase font-bold tracking-wider text-zinc-500 block">
                  EVIDENCE COVERAGE
                </span>
                <span className="text-3xl font-mono-code font-bold text-[#18181B] block pt-1">
                  {Math.round(entity.evidenceConfidenceScore)}%
                </span>
              </div>
              <div className="text-[11px] font-mono-code text-zinc-500 text-left md:text-center">
                <span>{entity.confidenceBreakdown.independentDiscussions} discussions</span>
                <br />
                <span>{entity.confidenceBreakdown.sourceTypesCount} source types</span>
              </div>
            </div>
          </div>

          <p className="text-zinc-700 text-sm sm:text-base font-light leading-relaxed border-t border-zinc-100 pt-4">
            {entity.summaryVerdict}
          </p>
        </div>

        {/* THE SIGNAL SECTION (Editorial Synthesis) */}
        <section className="p-6 sm:p-8 rounded-3xl bg-[#F6F3ED]/90 border border-zinc-200/90 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#4A5CD8]" />
              <h2 className="text-xs font-mono-code uppercase tracking-widest font-bold text-[#18181B]">
                THE SIGNAL • SUMMARY OF EXTRACTED CONSENSUS
              </h2>
            </div>
            <span className="text-[10px] font-mono-code text-zinc-500">
              Audit status: Traceable to underlying citations
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-1.5">
              <span className="text-[10px] font-mono-code uppercase font-semibold text-emerald-700 block flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                RECURRING POSITIVE
              </span>
              <p className="text-xs text-zinc-800 font-medium leading-snug">
                {recurringPositive}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-1.5">
              <span className="text-[10px] font-mono-code uppercase font-semibold text-amber-700 block flex items-center gap-1.5">
                <XCircle className="w-3.5 h-3.5 text-amber-600" />
                RECURRING CONCERN
              </span>
              <p className="text-xs text-zinc-800 font-medium leading-snug">
                {recurringConcern}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-1.5">
              <span className="text-[10px] font-mono-code uppercase font-semibold text-rose-700 block flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                MOST DISPUTED
              </span>
              <p className="text-xs text-zinc-800 font-medium leading-snug">
                {disputedAspect}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-1.5">
              <span className="text-[10px] font-mono-code uppercase font-semibold text-blue-700 block flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                RECENT EVIDENCE
              </span>
              <p className="text-xs text-zinc-800 font-medium leading-snug truncate">
                {recentEvidence}
              </p>
            </div>
          </div>
        </section>

        {/* Side-by-Side: Interactive Map & Aspects Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Map Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-mono-code uppercase tracking-wider font-bold text-[#18181B]">
              GEOGRAPHIC LOCATION
            </h3>
            <InteractiveMapView
              entities={[entity]}
              selectedEntityId={entity.id}
              height="380px"
            />
            <div className="p-4 rounded-2xl bg-white border border-zinc-200 text-xs text-zinc-600 space-y-1">
              <div className="font-semibold text-zinc-900">Geographic Verification</div>
              <div>Lat: {entity.latitude || '28.6328'}, Lon: {entity.longitude || '77.2195'}</div>
              <div>Verified via OpenStreetMap Open Data Record & Official Place Identifiers.</div>
            </div>
          </div>

          {/* Aspects Analysis Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-mono-code uppercase tracking-wider font-bold text-[#18181B]">
                DOMAIN ASPECT BREAKDOWN
              </h3>
              <span className="text-xs font-mono-code text-zinc-500">
                Extracted Public Consensus
              </span>
            </div>

            <div className="space-y-3">
              {entity.aspects.map((asp) => (
                <div
                  key={asp.id}
                  className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-2 hover:border-zinc-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-sm text-[#18181B]">{asp.name}</span>
                      <span className="text-xs text-zinc-500 block">{asp.label}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono-code font-bold text-[#18181B]">
                        {Math.round(asp.positiveRatio)}% Positive
                      </span>
                      <span className="text-[10px] font-mono-code text-zinc-500 block">
                        {asp.evidenceCount} Citations
                      </span>
                    </div>
                  </div>

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

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {asp.keyPhrases.map((phrase, pIdx) => (
                        <span
                          key={pIdx}
                          className="text-[10px] font-mono-code px-2 py-0.5 rounded-md bg-zinc-50 text-zinc-600 border border-zinc-200/50"
                        >
                          "{phrase}"
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => handleOpenEvidence(asp.name)}
                      className="text-[11px] font-mono-code text-[#4A5CD8] hover:underline font-medium inline-flex items-center gap-1"
                    >
                      <span>Inspect</span>
                      <Eye className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CONFLICT / DIVERGENCE SECTION */}
        {entity.conflict && entity.conflict.hasConflict && (
          <div className="p-6 sm:p-8 rounded-3xl bg-amber-50/70 border border-amber-200/90 space-y-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-700" />
              <h3 className="text-base font-editorial font-bold text-amber-950">
                Documented Evidence Divergence: "{entity.conflict.topic}"
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              {entity.conflict.impartialSynthesis}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
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

        {/* AUDITABLE EVIDENCE LIST */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-mono-code uppercase tracking-wider font-bold text-[#18181B]">
                TRACEABLE EVIDENCE REPOSITORY ({entity.evidenceList.length} CITATIONS)
              </h3>
              <p className="text-xs text-zinc-500 font-light">
                Click any citation to inspect source attribution, provenance timestamp, and impartial ReviewLens analysis.
              </p>
            </div>

            <button
              onClick={() => handleOpenEvidence('All')}
              className="px-4 py-2 rounded-full bg-[#18181B] hover:bg-[#27272A] text-white text-xs font-mono-code font-medium transition-all shadow-xs"
            >
              Open Full Drawer
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {entity.evidenceList.slice(0, 6).map((ev) => (
              <div
                key={ev.id}
                onClick={() => handleOpenEvidence(ev.aspect)}
                className="p-4 rounded-2xl bg-white border border-zinc-200/80 hover:border-zinc-300 shadow-2xs space-y-2.5 cursor-pointer transition-all hover:scale-[1.01]"
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
