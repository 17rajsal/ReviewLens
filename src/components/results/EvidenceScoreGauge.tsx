import React, { useState } from 'react';
import { Info, Check } from 'lucide-react';
import { ConfidenceBreakdown } from '../../types/evidence';
import { tactileAudio } from '../../utils/audio';

interface EvidenceScoreGaugeProps {
  score: number;
  breakdown: ConfidenceBreakdown;
  onWhyClick: () => void;
  compact?: boolean;
}

export const EvidenceScoreGauge: React.FC<EvidenceScoreGaugeProps> = ({
  score,
  breakdown,
  onWhyClick,
  compact = false,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Circumference for circular gauge
  const radius = compact ? 12 : 26;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  if (compact) {
    return (
      <div className="relative inline-flex items-center gap-2 p-1.5 px-2.5 rounded-full bg-zinc-50 border border-zinc-200/80 shadow-2xs">
        {/* Compact Circular SVG Gauge */}
        <div className="relative w-8 h-8 flex items-center justify-center flex-shrink-0">
          <svg className="w-8 h-8 transform -rotate-90">
            <circle
              cx="16"
              cy="16"
              r={radius}
              stroke="#E4E0D8"
              strokeWidth="3"
              fill="transparent"
            />
            <circle
              cx="16"
              cy="16"
              r={radius}
              stroke="#4A5CD8"
              strokeWidth="3"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-700 ease-out"
            />
          </svg>
          <span className="absolute text-[10px] font-mono-code font-bold text-[#18181B] leading-none">
            {score}
          </span>
        </div>

        <div className="flex items-center gap-1 pr-1">
          <span className="text-[11px] font-mono-code font-semibold text-zinc-700">
            Coverage
          </span>
          <button
            type="button"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(!showTooltip);
            }}
            className="text-zinc-400 hover:text-zinc-700 transition-colors p-0.5"
            title="Corroboration Coverage breakdown"
            aria-label="Coverage explanation"
          >
            <Info className="w-3 h-3" />
          </button>
        </div>

        {/* Disclaimer Tooltip */}
        {showTooltip && (
          <div className="absolute top-full right-0 mt-2 z-50 w-72 p-3.5 rounded-2xl bg-white border border-zinc-200 shadow-xl text-left space-y-2 text-[11px]">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-1.5">
              <span className="font-bold text-[#18181B] font-mono-code uppercase">
                Confidence Breakdown
              </span>
              <span className="text-emerald-700 font-bold">{score}% Total</span>
            </div>
            <p className="text-zinc-600 leading-snug">
              Corroboration Coverage measures the density and independent multi-source agreement of public evidence. It is not a rating average.
            </p>
            <div className="space-y-1.5 pt-1 text-zinc-600 font-mono-code text-[10px]">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-600" /> Source Types Scanned
                </span>
                <span>{breakdown.sourceTypesCount} Tiers</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-600" /> Recency Factor
                </span>
                <span>{breakdown.recencyFactorScore}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-600" /> Corroboration Density
                </span>
                <span>{breakdown.corroborationDensity}%</span>
              </div>
            </div>
            <div className="pt-1 border-t border-zinc-100">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onWhyClick();
                }}
                className="text-[10px] font-mono-code text-[#4A5CD8] hover:underline font-semibold"
              >
                View all public citations →
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative flex items-center gap-3.5 p-3 rounded-2xl bg-zinc-50 border border-zinc-200/80 shadow-xs">
      {/* Circular SVG Gauge */}
      <div className="relative w-15 h-15 flex items-center justify-center flex-shrink-0">
        <svg className="w-15 h-15 transform -rotate-90">
          <circle
            cx="30"
            cy="30"
            r={radius}
            stroke="#E4E0D8"
            strokeWidth="4"
            fill="transparent"
          />
          <circle
            cx="30"
            cy="30"
            r={radius}
            stroke="#4A5CD8"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-sm font-bold text-[#18181B] tracking-tight leading-none">
            {score}%
          </span>
          <span className="text-[8px] font-mono-code text-zinc-500 mt-0.5 uppercase">
            Coverage
          </span>
        </div>
      </div>

      {/* Label & Breakdown Trigger */}
      <div className="space-y-0.5">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-bold text-[#18181B] tracking-tight">
            Corroboration Coverage
          </span>
          <button
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={() => setShowTooltip(!showTooltip)}
            className="text-zinc-400 hover:text-zinc-700 transition-colors"
            title="What is Corroboration Coverage?"
          >
            <Info className="w-3.5 h-3.5" />
          </button>
        </div>

        <p className="text-[10px] text-zinc-500 font-mono-code leading-tight">
          Evidence density across {breakdown.sourceTypesCount} independent source tiers
        </p>

        {/* Why Button Trigger */}
        <button
          onClick={() => {
            tactileAudio.playClick();
            onWhyClick();
          }}
          className="inline-flex items-center gap-1 text-[11px] font-mono-code text-[#4A5CD8] hover:text-[#2A3CB0] underline underline-offset-2 transition-colors pt-0.5 font-medium"
        >
          <span>Why this score? View citations →</span>
        </button>
      </div>

      {/* Explicit Disclaimer Tooltip */}
      {showTooltip && (
        <div className="absolute top-full right-0 mt-2 z-40 w-72 p-3.5 rounded-2xl bg-white border border-zinc-200 shadow-xl text-left space-y-2 text-[11px]">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-1.5">
            <span className="font-bold text-[#18181B] font-mono-code uppercase">
              Confidence Breakdown
            </span>
            <span className="text-emerald-700 font-bold">{score}% Total</span>
          </div>

          <p className="text-zinc-600 leading-snug">
            Corroboration Coverage measures the density and independent multi-source agreement of public evidence. It is not a rating average.
          </p>

          <div className="space-y-1.5 pt-1 text-zinc-600 font-mono-code text-[10px]">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Check className="w-3 h-3 text-emerald-600" /> Source Types Scanned
              </span>
              <span>{breakdown.sourceTypesCount} Tiers</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Check className="w-3 h-3 text-emerald-600" /> Recency Factor
              </span>
              <span>{breakdown.recencyFactorScore}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Check className="w-3 h-3 text-emerald-600" /> Corroboration Density
              </span>
              <span>{breakdown.corroborationDensity}%</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
