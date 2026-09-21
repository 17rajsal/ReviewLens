import React, { useEffect, useState } from 'react';
import { SourceHealthItem } from '../../types/evidence';
import { getSourcesHealth } from '../../api/reviewLens';
import { ArrowLeft, ShieldCheck, CheckCircle2, XCircle, Layers, ExternalLink, Sparkles, Database } from 'lucide-react';
import { tactileAudio } from '../../utils/audio';

interface SourcesStatusPageProps {
  onBack: () => void;
}

export const SourcesStatusPage: React.FC<SourcesStatusPageProps> = ({ onBack }) => {
  const [sources, setSources] = useState<Record<string, SourceHealthItem>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHealth() {
      const data = await getSourcesHealth();
      setSources(data);
      setLoading(false);
    }
    loadHealth();
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#FAF8F5] text-[#18181B] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-20 left-1/4 w-[600px] h-[400px] bg-[#6B7CFF]/[0.03] rounded-full blur-[140px] -z-10" />
      <div className="pointer-events-none absolute top-80 right-1/4 w-[500px] h-[400px] bg-[#F59E72]/[0.03] rounded-full blur-[160px] -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Navigation & Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-200/80">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                tactileAudio.playClick();
                onBack();
              }}
              aria-label="Back to research"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-mono-code text-[#4A5CD8] hover:text-[#2A3CB0] transition-all shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#18181B]"
            >
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Back</span>
            </button>

            <span className="text-zinc-300">•</span>

            <span className="text-[11px] font-mono-code uppercase font-semibold text-zinc-500 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#4A5CD8]" />
              Source Connector Infrastructure
            </span>
          </div>

          <span className="text-xs font-mono-code text-zinc-500">
            {Object.keys(sources).length} Registered Connectors
          </span>
        </div>

        {/* Page Title & Ethical Policy */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-editorial font-normal text-[#18181B]">
            Data Sources & Ethical Ingestion Policy
          </h1>
          <p className="text-sm text-zinc-600 font-light leading-relaxed max-w-3xl">
            ReviewLens strictly enforces zero-scraping ethics: we never bypass authentication, CAPTCHAs, rate limits, or robots.txt. Evidence is collected exclusively via permitted official APIs, public open data, and institutional records with full provenance preservation.
          </p>
        </div>

        {/* Source Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Object.entries(sources).map(([key, item]) => {
            const isReady = item.status === 'available' || item.status === 'ready';
            return (
              <div
                key={key}
                className="p-6 rounded-3xl bg-white border border-zinc-200/80 shadow-md shadow-zinc-900/[0.02] space-y-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono-code uppercase font-bold text-[#3444B8] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-editorial font-bold text-[#18181B] pt-1 capitalize">
                      {key.replace('_', ' ')}
                    </h3>
                  </div>

                  <span
                    className={`text-[10px] font-mono-code font-bold uppercase px-2.5 py-1 rounded-full border flex items-center gap-1.5 ${
                      isReady
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : 'bg-zinc-100 text-zinc-500 border-zinc-200'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isReady ? 'bg-emerald-500' : 'bg-zinc-400'}`} />
                    {item.status}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-semibold text-zinc-800 block">Role in Pipeline:</span>
                    <p className="text-zinc-600 font-light leading-relaxed">{item.purpose}</p>
                  </div>

                  <div>
                    <span className="font-semibold text-zinc-800 block">Attribution & License:</span>
                    <p className="text-zinc-500 font-mono-code text-[11px]">{item.attribution}</p>
                  </div>

                  <div className="pt-2 border-t border-zinc-100 text-[11px] font-mono-code text-zinc-600">
                    Status Message: {item.message}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
