import React, { useState } from 'react';
import { ConflictReport } from '../../types/evidence';
import { AlertTriangle, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { tactileAudio } from '../../utils/audio';

interface ConflictAlertBannerProps {
  conflict: ConflictReport;
  onOpenDrawerWithConflict: () => void;
}

export const ConflictAlertBanner: React.FC<ConflictAlertBannerProps> = ({
  conflict,
  onOpenDrawerWithConflict,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!conflict.hasConflict) return null;

  return (
    <div className="rounded-3xl bg-amber-50/60 border border-amber-200 p-5 shadow-xs space-y-3">
      {/* Top Banner Row */}
      <div className="flex items-start sm:items-center justify-between gap-3">
        <div className="flex items-start sm:items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-amber-100 text-amber-800 border border-amber-200 shrink-0 mt-0.5 sm:mt-0">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">
                CONFLICTING EVIDENCE DETECTED
              </span>
              <span className="text-xs text-zinc-400 hidden sm:inline">•</span>
              <span className="text-xs font-semibold text-[#18181B] tracking-tight">
                {conflict.topic}
              </span>
            </div>
            <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
              {conflict.summary}
            </p>
          </div>
        </div>

        {/* Toggle Expand */}
        <button
          onClick={() => {
            tactileAudio.playClick();
            setIsExpanded(!isExpanded);
          }}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-zinc-50 border border-zinc-200 text-xs font-mono-code text-zinc-700 hover:text-[#18181B] transition-all shrink-0 shadow-xs"
        >
          <span>{isExpanded ? 'Collapse' : 'Inspect Opposing Signals'}</span>
          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Expanded Opposing Signals Matrix */}
      {isExpanded && (
        <div className="pt-3 border-t border-amber-200/80 space-y-3 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs font-mono-code">
            <button
              onClick={() => {
                tactileAudio.playClick();
                onOpenDrawerWithConflict();
              }}
              className="text-left px-3 py-2 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>Positive Signals: {conflict.positiveSignalCount}</span>
              <span className="text-[10px] text-zinc-500 font-normal hidden sm:inline">(Favorable perspectives)</span>
              <span className="text-[10px] text-[#4A5CD8] underline ml-auto">View →</span>
            </button>

            <button
              onClick={() => {
                tactileAudio.playClick();
                onOpenDrawerWithConflict();
              }}
              className="text-left px-3 py-2 rounded-2xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-900 font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>Critical Signals: {conflict.negativeSignalCount}</span>
              <span className="text-[10px] text-zinc-500 font-normal hidden sm:inline">(Critical perspectives)</span>
              <span className="text-[10px] text-[#4A5CD8] underline ml-auto">View →</span>
            </button>
          </div>

          {/* Impartial Synthesis Note */}
          <div className="p-3.5 rounded-2xl bg-white border border-amber-200/90 text-xs text-zinc-700 leading-relaxed flex items-start gap-2.5 shadow-xs">
            <HelpCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#18181B] font-mono-code uppercase block text-[10px]">
                ReviewLens Impartial Synthesis:
              </span>
              <p className="mt-0.5 text-zinc-600 font-light">
                {conflict.impartialSynthesis}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
