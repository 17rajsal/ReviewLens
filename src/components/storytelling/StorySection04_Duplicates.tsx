import React, { useState } from 'react';
import { Cpu, Filter, Layers } from 'lucide-react';
import { tactileAudio } from '../../utils/audio';
import { SectionMarker } from '../common/SectionMarker';

export const StorySection04_Duplicates: React.FC = () => {
  const [isDeduplicated, setIsDeduplicated] = useState(false);

  const reviews = [
    { id: 'A', user: 'Public Source A', text: 'Faculty is extremely cooperative and campus has very modern AC computer labs.', similarity: 98 },
    { id: 'B', user: 'Public Source B', text: 'Faculty is very cooperative and campus has modern air conditioned computer labs.', similarity: 96 },
    { id: 'C', user: 'Public Source C', text: 'Faculty is extremely cooperative, campus has very modern AC labs for all students.', similarity: 94 },
    { id: 'D', user: 'Public Source D', text: 'Extremely cooperative faculty with modern air conditioned computer labs.', similarity: 97 },
  ];

  const handleToggle = () => {
    tactileAudio.playResolve();
    setIsDeduplicated(!isDeduplicated);
  };

  return (
    <section className="py-24 border-t border-zinc-200/80 relative overflow-hidden bg-[#FAF4EE]">
      {/* Subtle Atmospheric Slice Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.03] pointer-events-none -z-10"
        style={{ backgroundImage: "url('/images/atmosphere-sunlight.jpg')" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <SectionMarker
            number="04"
            title="SIMILARITY & DUPLICATE DETECTION"
            className="mb-4"
          />
          <h2 className="text-3xl sm:text-5xl font-editorial font-normal tracking-tight text-[#18181B] mb-3">
            Not every opinion is independent.
            <br />
            <span className="italic editorial-gradient">
              Detecting highly similar content clusters.
            </span>
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
            Astroturfing campaigns, syndicated marketing copy, and copy-pasted reviews frequently flood discussion boards. ReviewLens evaluates semantic vector similarity, identifying redundant submissions and collapsing them into a single underlying text pattern.
          </p>
        </div>

        {/* Interactive Duplicate Detection Stage */}
        <div className="relative rounded-3xl bg-white/80 border border-zinc-200/80 p-6 sm:p-10 shadow-xl shadow-zinc-900/[0.04]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-zinc-200/80">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-orange-600" />
              <span className="text-xs font-mono-code text-zinc-600">
                Vector Similarity Engine: Cosine Threshold &gt; 0.92
              </span>
            </div>

            <button
              onClick={handleToggle}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#18181B] hover:bg-[#27272A] text-white text-xs font-medium tracking-wide transition-all shadow-md active:scale-95"
            >
              <Filter className="w-3.5 h-3.5 text-orange-300" />
              <span>{isDeduplicated ? 'Show Raw Content Variants' : 'Isolate Highly Similar Content Cluster'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Raw Review Streams */}
            <div className="space-y-3">
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  className={`p-3.5 rounded-2xl border transition-all ${
                    isDeduplicated
                      ? 'bg-orange-50/70 border-orange-200 opacity-75'
                      : 'bg-white border-zinc-200 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono-code text-zinc-500 mb-1">
                    <span className="font-semibold">Variant #{rev.id} ({rev.user})</span>
                    <span className="text-orange-700 font-bold">{rev.similarity}% Semantic Overlap</span>
                  </div>
                  <p className="text-xs text-zinc-700 italic font-serif">
                    "{rev.text}"
                  </p>
                </div>
              ))}
            </div>

            {/* Deduplicated Resolution Panel */}
            <div className="p-6 rounded-3xl bg-white border border-zinc-200/80 shadow-sm flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-mono-code font-bold text-[#18181B] uppercase tracking-wider">
                  Semantic Intelligence Output
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200 space-y-2">
                <div className="text-xs font-bold text-orange-900">
                  Possible Duplicate Cluster Detected
                </div>
                <p className="text-xs text-zinc-700 leading-relaxed font-light">
                  4 separate online submissions matched near-identical grammatical structure and vocabulary with &gt;94% semantic overlap.
                </p>
                <div className="pt-2 border-t border-orange-200/60 text-[10px] font-mono-code text-zinc-600 flex items-center justify-between">
                  <span>Raw Submissions: 4 entries</span>
                  <span className="font-bold text-emerald-700">Effective Weight: 1 Underlying Signal</span>
                </div>
              </div>

              <p className="text-[11px] text-zinc-500 italic leading-relaxed">
                Similarity does not by itself establish malicious intent; rather, it ensures that syndicated or copied content is counted as one underlying text pattern and cannot artificially inflate corroboration coverage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
