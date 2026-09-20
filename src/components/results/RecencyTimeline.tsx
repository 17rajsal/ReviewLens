import React from 'react';
import { RecencyTrend } from '../../types/evidence';
import { History } from 'lucide-react';

interface RecencyTimelineProps {
  trends: RecencyTrend[];
}

export const RecencyTimeline: React.FC<RecencyTimelineProps> = ({ trends }) => {
  return (
    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3 shadow-xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-bold text-[#18181B] tracking-tight">
          <History className="w-3.5 h-3.5 text-[#4A5CD8]" />
          <span>Discussion Trend & Recency Shift</span>
        </div>
        <span className="text-[10px] font-mono-code text-[#3444B8] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200 font-semibold">
          2024 → 2026 Shift
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {trends.map((trend) => (
          <div
            key={trend.year}
            className="p-2.5 rounded-xl bg-white border border-zinc-200/80 space-y-1 relative shadow-xs"
          >
            <div className="flex items-center justify-between text-[10px] font-mono-code">
              <span className="font-bold text-[#18181B]">{trend.year}</span>
              <span
                className={`px-1.5 py-0.2 rounded-full uppercase font-bold text-[9px] ${
                  trend.sentiment === 'positive'
                    ? 'text-emerald-800 bg-emerald-100'
                    : trend.sentiment === 'negative'
                    ? 'text-rose-800 bg-rose-100'
                    : 'text-amber-800 bg-amber-100'
                }`}
              >
                {trend.sentiment}
              </span>
            </div>
            <p className="text-[10px] text-zinc-600 leading-tight line-clamp-2">
              {trend.summary}
            </p>
            <span className="text-[9px] font-mono-code text-zinc-400 block pt-1">
              {trend.mentionCount} public threads
            </span>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-zinc-500 italic">
        Recent 2025–2026 discussions contain more nuanced perspectives regarding operational policies, while peer technical initiatives remain resilient.
      </p>
    </div>
  );
};
