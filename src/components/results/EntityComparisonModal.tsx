import React from 'react';
import { EntityReport } from '../../types/evidence';
import { X, GitCompare, ArrowUpRight } from 'lucide-react';
import { tactileAudio } from '../../utils/audio';

interface EntityComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  entities: EntityReport[];
}

export const EntityComparisonModal: React.FC<EntityComparisonModalProps> = ({
  isOpen,
  onClose,
  entities,
}) => {
  if (!isOpen || entities.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-900/40 backdrop-blur-md">
      <div className="relative w-full max-w-5xl max-h-[90vh] rounded-3xl bg-white border border-zinc-200 shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-zinc-100 bg-[#FAF8F5] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-blue-50 text-[#4A5CD8] border border-blue-200">
              <GitCompare className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono-code uppercase font-bold text-[#3444B8] tracking-wider">
                Multi-Entity Evidence Evaluation
              </span>
              <h2 className="text-xl font-bold text-[#18181B] tracking-tight">
                Side-by-Side Comparison ({entities.length} Entities)
              </h2>
            </div>
          </div>

          <button
            onClick={() => {
              tactileAudio.playClick();
              onClose();
            }}
            className="p-2 rounded-full bg-white hover:bg-zinc-100 text-zinc-500 hover:text-[#18181B] transition-colors border border-zinc-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Comparison Table / Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entities.map((entity) => (
              <div
                key={entity.id}
                className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono-code text-[#3444B8] px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 font-bold truncate max-w-[180px]">
                      {entity.highlightTag}
                    </span>
                    <span className="text-sm font-bold text-emerald-800 font-mono-code">
                      {entity.evidenceConfidenceScore}%
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#18181B] tracking-tight">
                    {entity.canonicalName}
                  </h3>
                  <p className="text-xs text-zinc-500 font-mono-code">
                    {entity.location}
                  </p>

                  <div className="p-3 rounded-xl bg-white border border-zinc-200 text-xs text-emerald-800 font-mono-code font-semibold">
                    {entity.feesSummary}
                  </div>

                  <p className="text-xs text-zinc-600 leading-relaxed font-light">
                    {entity.summaryVerdict}
                  </p>

                  {/* Aspects breakdown preview */}
                  <div className="space-y-1.5 pt-2 border-t border-zinc-200">
                    <span className="text-[10px] font-mono-code text-zinc-500 uppercase font-bold">
                      Aspect Consensus:
                    </span>
                    {entity.aspects.slice(0, 3).map((asp) => (
                      <div key={asp.id} className="flex items-center justify-between text-xs">
                        <span className="text-zinc-700">{asp.name}</span>
                        <span
                          className={`text-[9px] font-mono-code uppercase px-2 py-0.5 rounded-full font-bold ${
                            asp.sentiment === 'positive'
                              ? 'text-emerald-800 bg-emerald-100'
                              : asp.sentiment === 'negative'
                              ? 'text-rose-800 bg-rose-100'
                              : 'text-amber-800 bg-amber-100'
                          }`}
                        >
                          {asp.sentiment}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-100 bg-[#FAF8F5] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#18181B] text-white text-xs font-medium"
          >
            Close Comparison
          </button>
        </div>
      </div>
    </div>
  );
};
