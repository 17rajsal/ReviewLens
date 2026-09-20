import React from 'react';
import { X, ShieldCheck, GitMerge, AlertTriangle, Layers, Award } from 'lucide-react';
import { tactileAudio } from '../../utils/audio';

interface MethodologyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MethodologyModal: React.FC<MethodologyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/40 backdrop-blur-md">
      <div className="relative w-full max-w-3xl max-h-[90vh] rounded-3xl bg-white border border-zinc-200 shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-zinc-100 bg-[#FAF8F5] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-blue-50 text-[#4A5CD8] border border-blue-200">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono-code uppercase font-bold text-[#3444B8] tracking-wider">
                Scientific & Engineering Architecture
              </span>
              <h2 className="text-xl font-bold text-[#18181B] tracking-tight">
                ReviewLens Evidence Methodology
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

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 text-sm text-zinc-600 leading-relaxed font-light">
          {/* Principle 01 */}
          <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-1.5">
            <div className="flex items-center gap-2 text-[#18181B] font-bold text-base">
              <Award className="w-4 h-4 text-[#4A5CD8]" />
              <span>1. Evidence Confidence vs. "Truth"</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600">
              ReviewLens calculates an <strong>Evidence Confidence Score</strong> based on corroboration density, source diversity, independent author counts, and temporal recency. We explicitly do <strong>not</strong> label any entity "82% true". A high score means the public evidentiary record is rich and corroborated across multiple independent channels.
            </p>
          </div>

          {/* Principle 02 */}
          <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-1.5">
            <div className="flex items-center gap-2 text-[#18181B] font-bold text-base">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>2. The Contradiction Principle</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600">
              Conventional consumer platforms compute naive arithmetic averages (e.g. 3.7 out of 5 stars), smoothing out essential disagreements. ReviewLens isolates contradictions. If 34 sources report positive career development while 19 document recruitment moderation, both perspectives are surfaced with an impartial synthesis note.
            </p>
          </div>

          {/* Principle 03 */}
          <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-1.5">
            <div className="flex items-center gap-2 text-[#18181B] font-bold text-base">
              <Layers className="w-4 h-4 text-emerald-600" />
              <span>3. Anti-Astroturfing & Deduplication</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600">
              When paid review agencies flood social boards with templated praises, vector cosine similarity isolates the identical lexical patterns (&gt;92% similarity) and collapses the cluster to a single weighted testimonial.
            </p>
          </div>

          {/* Principle 04 */}
          <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-1.5">
            <div className="flex items-center gap-2 text-[#18181B] font-bold text-base">
              <GitMerge className="w-4 h-4 text-purple-600" />
              <span>4. Entity Resolution Graph</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600">
              Using fuzzy character n-grams and geographical context, ReviewLens reconciles disparate abbreviations and informal aliases (e.g. acronyms, localized names) to unified canonical knowledge nodes, preventing fragmented records.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-100 bg-[#FAF8F5] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-[#18181B] hover:bg-[#27272A] text-white font-medium text-xs font-mono-code transition-colors shadow-xs"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
