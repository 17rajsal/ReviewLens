import React from 'react';
import { EntityReport } from '../../types/evidence';
import {
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  MapPin,
  Sparkles,
  Layers,
  Scale
} from 'lucide-react';
import { tactileAudio } from '../../utils/audio';

interface CompareViewProps {
  entities: EntityReport[];
  allAvailableEntities?: EntityReport[];
  onBack: () => void;
  onSelectEntityDetail?: (entity: EntityReport) => void;
}

export const CompareView: React.FC<CompareViewProps> = ({
  entities,
  allAvailableEntities = [],
  onBack,
  onSelectEntityDetail,
}) => {
  // If fewer than 2 entities are provided, fallback to first 2-3 available
  const compareList = entities.length >= 2
    ? entities
    : (allAvailableEntities.length >= 2 ? allAvailableEntities.slice(0, 3) : entities);

  // Collect unique aspects across all compared entities
  const allAspectNames = Array.from(
    new Set(compareList.flatMap((e) => e.aspects.map((a) => a.name)))
  );

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#FAF8F5] text-[#18181B] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-20 left-1/4 w-[600px] h-[400px] bg-[#6B7CFF]/[0.03] rounded-full blur-[140px] -z-10" />
      <div className="pointer-events-none absolute top-80 right-1/4 w-[500px] h-[400px] bg-[#F59E72]/[0.03] rounded-full blur-[160px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
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

            <h1 className="text-xs sm:text-sm font-mono-code uppercase font-bold text-zinc-800 flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-[#4A5CD8]" />
              <span>Multi-Entity Comparative Intelligence Matrix</span>
            </h1>
          </div>

          <div className="text-xs font-mono-code text-zinc-500">
            Comparing {compareList.length} Entities
          </div>
        </div>

        {/* Editorial Notice Banner */}
        <div className="p-5 rounded-2xl bg-[#F6F3ED] border border-zinc-200/90 text-xs text-zinc-700 leading-relaxed flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-[#4A5CD8] shrink-0" />
          <div>
            <span className="font-semibold text-zinc-900">Evidence-Driven Comparative Framework: </span>
            ReviewLens presents comparative evidence patterns, recurrent strengths, concerns, and conflict signals without declaring subjective "winners". You retain full agency over the final decision.
          </div>
        </div>

        {/* Comparison Matrix Table */}
        <div className="rounded-3xl bg-white border border-zinc-200/80 shadow-xl shadow-zinc-900/[0.03] overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-zinc-200/80 bg-[#FAF8F5]">
                <th className="p-5 text-xs font-mono-code uppercase tracking-wider text-zinc-500 font-bold w-[220px]">
                  CRITERIA / ASPECT
                </th>
                {compareList.map((ent) => (
                  <th key={ent.id} className="p-5 text-left align-top space-y-2">
                    <span className="text-[10px] font-mono-code uppercase text-[#3444B8] font-bold bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                      {ent.category}
                    </span>
                    <h3 className="text-lg font-editorial font-bold text-[#18181B] pt-1">
                      {ent.canonicalName}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-zinc-500">
                      <MapPin className="w-3 h-3 text-[#4A5CD8] shrink-0" />
                      <span className="truncate max-w-[180px]">{ent.location}</span>
                    </div>
                    {onSelectEntityDetail && (
                      <button
                        onClick={() => {
                          tactileAudio.playClick();
                          onSelectEntityDetail(ent);
                        }}
                        className="text-[11px] font-mono-code text-[#4A5CD8] hover:underline font-semibold block pt-1"
                      >
                        Inspect Full Intelligence →
                      </button>
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-100 text-xs">
              {/* Evidence Coverage Row */}
              <tr className="hover:bg-zinc-50/50 transition-colors">
                <td className="p-5 font-mono-code font-bold text-zinc-700 bg-[#FAF8F5]/50">
                  Evidence Coverage
                </td>
                {compareList.map((ent) => (
                  <td key={ent.id} className="p-5">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm font-mono-code font-bold text-[#18181B]">
                        {Math.round(ent.evidenceConfidenceScore)}%
                      </span>
                    </div>
                    <span className="text-[10px] font-mono-code text-zinc-500 block pt-0.5">
                      {ent.confidenceBreakdown.independentDiscussions} independent citations
                    </span>
                  </td>
                ))}
              </tr>

              {/* Recurring Strength Row */}
              <tr className="hover:bg-zinc-50/50 transition-colors">
                <td className="p-5 font-mono-code font-bold text-zinc-700 bg-[#FAF8F5]/50 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Primary Strength
                </td>
                {compareList.map((ent) => {
                  const best = ent.aspects.find((a) => a.positiveRatio >= 70);
                  return (
                    <td key={ent.id} className="p-5">
                      {best ? (
                        <div className="space-y-1">
                          <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                            {best.name} ({Math.round(best.positiveRatio)}%)
                          </span>
                          <p className="text-zinc-600 text-[11px] pt-1 line-clamp-2">
                            {best.summary}
                          </p>
                        </div>
                      ) : (
                        <span className="text-zinc-500 italic">Balanced sentiment</span>
                      )}
                    </td>
                  );
                })}
              </tr>

              {/* Recurring Constraint / Concern Row */}
              <tr className="hover:bg-zinc-50/50 transition-colors">
                <td className="p-5 font-mono-code font-bold text-zinc-700 bg-[#FAF8F5]/50 flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5 text-amber-600" />
                  Noted Constraint
                </td>
                {compareList.map((ent) => {
                  const worst = ent.aspects.find((a) => a.positiveRatio <= 45);
                  return (
                    <td key={ent.id} className="p-5">
                      {worst ? (
                        <div className="space-y-1">
                          <span className="font-semibold text-rose-800 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
                            {worst.name} ({Math.round(100 - worst.positiveRatio)}% critical)
                          </span>
                          <p className="text-zinc-600 text-[11px] pt-1 line-clamp-2">
                            {worst.summary}
                          </p>
                        </div>
                      ) : (
                        <span className="text-zinc-500 italic">No dominant constraint</span>
                      )}
                    </td>
                  );
                })}
              </tr>

              {/* Contradiction / Divergence Row */}
              <tr className="hover:bg-zinc-50/50 transition-colors">
                <td className="p-5 font-mono-code font-bold text-zinc-700 bg-[#FAF8F5]/50 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                  Disputed Topic
                </td>
                {compareList.map((ent) => (
                  <td key={ent.id} className="p-5">
                    {ent.conflict && ent.conflict.hasConflict ? (
                      <div className="space-y-1">
                        <span className="font-semibold text-amber-900 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                          {ent.conflict.topic}
                        </span>
                        <p className="text-zinc-600 text-[11px] pt-1 line-clamp-2">
                          {ent.conflict.summary}
                        </p>
                      </div>
                    ) : (
                      <span className="text-emerald-700 font-mono-code text-[11px]">
                        Consistent consensus
                      </span>
                    )}
                  </td>
                ))}
              </tr>

              {/* Individual Aspect Rows */}
              {allAspectNames.map((aspectName) => (
                <tr key={aspectName} className="hover:bg-zinc-50/50 transition-colors">
                  <td className="p-5 font-mono-code font-semibold text-zinc-700 bg-[#FAF8F5]/50">
                    Aspect: {aspectName}
                  </td>
                  {compareList.map((ent) => {
                    const asp = ent.aspects.find((a) => a.name === aspectName);
                    return (
                      <td key={ent.id} className="p-5">
                        {asp ? (
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="font-mono-code font-bold text-zinc-900">
                                {Math.round(asp.positiveRatio)}% Positive
                              </span>
                              <span className="text-[10px] font-mono-code text-zinc-500">
                                {asp.evidenceCount} citations
                              </span>
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
                          </div>
                        ) : (
                          <span className="text-zinc-400 italic">Not evaluated</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
