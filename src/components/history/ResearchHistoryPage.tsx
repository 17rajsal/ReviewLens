import React, { useEffect, useState } from 'react';
import { ResearchRunSummary } from '../../types/evidence';
import { getResearchRuns, getResearchRun } from '../../api/reviewLens';
import { ArrowLeft, Clock, Search, ArrowRight, RotateCcw, ShieldCheck, Database } from 'lucide-react';
import { tactileAudio } from '../../utils/audio';

interface ResearchHistoryPageProps {
  onBack: () => void;
  onSelectRun: (runData: any) => void;
  onRerunQuery: (query: string) => void;
}

export const ResearchHistoryPage: React.FC<ResearchHistoryPageProps> = ({
  onBack,
  onSelectRun,
  onRerunQuery,
}) => {
  const [runs, setRuns] = useState<ResearchRunSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRuns() {
      const data = await getResearchRuns();
      setRuns(data);
      setLoading(false);
    }
    loadRuns();
  }, []);

  const handleOpenRun = async (runId: string, queryText: string) => {
    tactileAudio.playClick();
    const runData = await getResearchRun(runId);
    if (runData) {
      onSelectRun(runData);
    } else {
      onRerunQuery(queryText);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#FAF8F5] text-[#18181B] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-20 left-1/4 w-[600px] h-[400px] bg-[#6B7CFF]/[0.03] rounded-full blur-[140px] -z-10" />
      <div className="pointer-events-none absolute top-80 right-1/4 w-[500px] h-[400px] bg-[#F59E72]/[0.03] rounded-full blur-[160px] -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Navigation & Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-200/80">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                tactileAudio.playClick();
                onBack();
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-mono-code text-[#4A5CD8] hover:text-[#2A3CB0] transition-all shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>

            <span className="text-zinc-300">•</span>

            <span className="text-[11px] font-mono-code uppercase font-semibold text-zinc-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#4A5CD8]" />
              Research Run Archive (Relational SQLite Store)
            </span>
          </div>

          <span className="text-xs font-mono-code text-zinc-500">
            {runs.length} Saved Inquiries
          </span>
        </div>

        {/* Page Title */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-editorial font-normal text-[#18181B]">
            Traceable Research History
          </h1>
          <p className="text-sm text-zinc-600 font-light">
            Every synthesized research inquiry is recorded in the local relational store with unique reproducibility IDs, audit logs, and normalized citation snapshots.
          </p>
        </div>

        {/* Runs List */}
        {loading ? (
          <div className="p-12 text-center text-xs font-mono-code text-zinc-500">
            Loading research archive...
          </div>
        ) : runs.length === 0 ? (
          <div className="p-12 rounded-3xl bg-white border border-zinc-200 text-center space-y-3">
            <Database className="w-8 h-8 text-zinc-300 mx-auto" />
            <p className="text-sm font-editorial text-zinc-700">No past research runs found yet.</p>
            <button
              onClick={onBack}
              className="px-4 py-2 rounded-full bg-[#18181B] text-white text-xs font-medium"
            >
              Start New Research
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {runs.map((run) => (
              <div
                key={run.researchRunId}
                className="p-5 sm:p-6 rounded-3xl bg-white border border-zinc-200/80 shadow-md shadow-zinc-900/[0.02] hover:border-zinc-300 transition-all space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-mono-code text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-md">
                      ID: {run.researchRunId}
                    </span>
                    <span className="text-[10px] font-mono-code uppercase font-bold text-[#3444B8] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                      {run.category}
                    </span>
                    {run.demoMode ? (
                      <span className="text-[10px] font-mono-code text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                        Demo Archive
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono-code text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        Live Research
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] font-mono-code text-zinc-400">
                    {new Date(run.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <h3 className="text-lg font-editorial font-bold text-[#18181B]">
                  "{run.query}"
                </h3>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-zinc-100 text-xs text-zinc-500">
                  <div className="flex items-center gap-4">
                    <span>{run.entitiesCount} Entities Discovered</span>
                    <span>•</span>
                    <span>{run.sourcesScannedCount} Sources Scanned</span>
                  </div>

                  <button
                    onClick={() => handleOpenRun(run.researchRunId, run.query)}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#18181B] hover:bg-[#27272A] text-white text-xs font-mono-code font-medium transition-all shadow-xs"
                  >
                    <span>Reopen Report</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
