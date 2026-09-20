import React from 'react';
import { AlertTriangle, TrendingDown, TrendingUp, HelpCircle } from 'lucide-react';

export const StorySection05_Conflict: React.FC = () => {
  return (
    <section className="py-24 border-t border-zinc-200/80 relative overflow-hidden bg-[#F0F6F9]">
      {/* Subtle Atmospheric Slice Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.03] pointer-events-none -z-10"
        style={{ backgroundImage: "url('/images/atmosphere-mountain.jpg')" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono-code uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200 font-semibold mb-3">
            05 // CONTRADICTION ENGINE
          </div>
          <h2 className="text-3xl sm:text-5xl font-editorial font-normal tracking-tight text-[#18181B] mb-3">
            People rarely agree on everything.
            <br />
            <span className="italic editorial-gradient">
              Conflicting evidence is information.
            </span>
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
            Conventional platforms force an artificial average (e.g. 3.8 stars), erasing crucial nuances. ReviewLens detects polar contradictions, isolates the underlying reasons, and presents both sides transparently.
          </p>
        </div>

        {/* The Conflict Presentation Console */}
        <div className="rounded-3xl bg-white border border-zinc-200/80 p-6 sm:p-10 shadow-xl shadow-zinc-900/[0.04] relative overflow-hidden">
          {/* Conflict Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200/80">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono-code uppercase text-amber-700 font-bold tracking-wider block">
                  Polarity Discrepancy Isolated
                </span>
                <h3 className="text-lg font-bold text-[#18181B] tracking-tight">
                  Subject: Career Opportunities & Hiring Outcomes (Institution A)
                </h3>
              </div>
            </div>

            <div className="px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono-code text-zinc-600">
              Corroboration: 53 Signals Analyzed
            </div>
          </div>

          {/* Polarity Evidence Ratio Bars */}
          <div className="py-6 space-y-2.5 max-w-2xl">
            <div className="flex items-center justify-between text-xs font-mono-code">
              <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" /> 34 Positive Signals (Independent Initiatives)
              </span>
              <span className="text-rose-700 font-semibold flex items-center gap-1.5">
                <TrendingDown className="w-3.5 h-3.5" /> 19 Critical Signals (Institutional Recruitment)
              </span>
            </div>

            <div className="w-full h-3 rounded-full bg-zinc-100 overflow-hidden flex p-0.5 border border-zinc-200">
              <div className="h-full bg-emerald-500 rounded-l-full" style={{ width: '64%' }} />
              <div className="w-1 bg-white" />
              <div className="h-full bg-rose-500 rounded-r-full" style={{ width: '36%' }} />
            </div>
          </div>

          {/* Opposing Evidence Cards Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {/* Supporting Evidence Card */}
            <div className="p-5 rounded-2xl bg-emerald-50/40 border border-emerald-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800 font-mono-code uppercase">
                  Supporting Signals (Peer Initiative)
                </span>
                <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold border border-emerald-200">
                  Public Discussion Archive • 2026
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed italic border-l-2 border-emerald-500 pl-3 font-serif">
                "Active participants in self-directed development groups report consistent success when applying independently. Peer collaboration and practical project experience were cited as the primary drivers."
              </p>
              <div className="text-[10px] font-mono-code text-zinc-500 flex items-center justify-between pt-2 border-t border-emerald-100">
                <span>Author: Community Contributor</span>
                <span>Record ID: #SRC-0482-P</span>
              </div>
            </div>

            {/* Opposing Evidence Card */}
            <div className="p-5 rounded-2xl bg-rose-50/40 border border-rose-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-800 font-mono-code uppercase">
                  Opposing Signals (Institutional Recruitment)
                </span>
                <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 font-semibold border border-rose-200">
                  Regional Forum Index • 2026
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed italic border-l-2 border-rose-500 pl-3 font-serif">
                "Direct on-campus corporate recruitment has shown moderation compared to prior cycles. Standard intake volumes and compensation bands reflect broader industry trends rather than exclusive premium tiers."
              </p>
              <div className="text-[10px] font-mono-code text-zinc-500 flex items-center justify-between pt-2 border-t border-rose-100">
                <span>Author: Community Contributor</span>
                <span>Record ID: #SRC-0914-C</span>
              </div>
            </div>
          </div>

          {/* Impartial Synthesis */}
          <div className="mt-6 p-4 rounded-2xl bg-blue-50/60 border border-blue-200 flex items-start gap-3">
            <HelpCircle className="w-4 h-4 text-[#4A5CD8] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="text-xs font-mono-code font-bold text-[#3444B8] uppercase">
                Impartial Synthesis Note:
              </span>
              <p className="text-xs text-zinc-700 leading-relaxed font-light">
                Available public evidence is mixed: community discussions document positive outcomes for candidates pursuing independent technical projects, while institutional placement statistics demonstrate broader market moderation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
