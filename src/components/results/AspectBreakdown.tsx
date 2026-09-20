import React from 'react';
import { AspectAnalysis } from '../../types/evidence';
import { ChevronRight } from 'lucide-react';
import { tactileAudio } from '../../utils/audio';

interface AspectBreakdownProps {
  aspects: AspectAnalysis[];
  onSelectAspect: (aspectName: string) => void;
}

export const AspectBreakdown: React.FC<AspectBreakdownProps> = ({ aspects, onSelectAspect }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs font-mono-code text-zinc-500">
        <span className="font-bold text-zinc-700">ASPECT-BASED EVIDENCE SIGNALS</span>
        <span className="text-[#4A5CD8] font-semibold">CLICK ASPECT TO TRACE →</span>
      </div>

      <div className="grid grid-cols-1 gap-2.5">
        {aspects.map((asp) => {
          const isPositive = asp.sentiment === 'positive';
          const isNegative = asp.sentiment === 'negative';

          const barColor = isPositive ? '#10B981' : isNegative ? '#EF4444' : '#F59E0B';

          return (
            <button
              key={asp.id}
              onClick={() => {
                tactileAudio.playClick();
                onSelectAspect(asp.name);
              }}
              className="w-full min-h-[44px] p-3 sm:p-3.5 rounded-2xl bg-zinc-50/70 hover:bg-white border border-zinc-200/80 hover:border-zinc-300 hover:shadow-xs transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group text-left"
            >
              {/* Aspect Label & Sentiment Tag */}
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#18181B] group-hover:text-[#4A5CD8] transition-colors">
                    {asp.name}
                  </span>
                  <span
                    className={`text-[9px] font-mono-code px-2 py-0.5 rounded-full font-bold uppercase ${
                      isPositive
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                        : isNegative
                        ? 'bg-rose-100 text-rose-800 border border-rose-200'
                        : 'bg-amber-100 text-amber-800 border border-amber-200'
                    }`}
                  >
                    {asp.sentiment}
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500 leading-snug line-clamp-1 font-light">
                  {asp.summary}
                </p>
              </div>

              {/* Evidence Ratio Progress Bar & Action */}
              <div className="flex items-center gap-3 sm:self-center flex-shrink-0">
                <div className="w-28 sm:w-32 space-y-1">
                  <div className="w-full h-1.5 rounded-full bg-zinc-200 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${asp.positiveRatio}%`,
                        backgroundColor: barColor,
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-[9px] font-mono-code text-zinc-500">
                    <span>{asp.evidenceCount} signals</span>
                    <span style={{ color: barColor }} className="font-semibold">{asp.positiveRatio}% pos</span>
                  </div>
                </div>

                <div className="p-1.5 rounded-lg bg-zinc-100 text-zinc-500 group-hover:text-[#18181B] group-hover:bg-zinc-200 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
