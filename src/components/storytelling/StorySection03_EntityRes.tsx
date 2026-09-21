import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitMerge, Check } from 'lucide-react';
import { tactileAudio } from '../../utils/audio';

export const StorySection03_EntityRes: React.FC = () => {
  const [isMerged, setIsMerged] = useState(false);

  const aliases = [
    { name: 'Example Campus A', source: 'Public Discussion Threads', meta: 'Mentioned 84 times', color: 'border-purple-200' },
    { name: 'Institution A (Technical Campus)', source: 'Official Institutional Register', meta: 'Reference Record ID: EDU-108', color: 'border-blue-200' },
    { name: 'Tech Campus A', source: 'Community Forum Discussions', meta: 'Regional Location Tag', color: 'border-indigo-200' },
  ];

  const handleToggle = () => {
    tactileAudio.playResolve();
    setIsMerged(!isMerged);
  };

  return (
    <section className="py-24 border-t border-zinc-200/80 relative overflow-hidden bg-[#F5F3FA]">
      {/* Subtle Atmospheric Slice Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.03] pointer-events-none -z-10"
        style={{ backgroundImage: "url('/images/atmosphere-arch.jpg')" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono-code uppercase tracking-wider bg-purple-100 text-purple-800 border border-purple-200 font-semibold mb-3">
            03 // INSTITUTION INTELLIGENCE
          </div>
          <h2 className="text-3xl sm:text-5xl font-editorial font-normal tracking-tight text-[#18181B] mb-3">
            Same entity.
            <br />
            <span className="italic editorial-gradient">
              Different names.
            </span>
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
            People use slang, abbreviations, official legal titles, and geographic nicknames. Naive search engines treat them as distinct disconnected records. ReviewLens clusters semantic aliases into a unified knowledge entity.
          </p>
        </div>

        {/* Morphing Interactive Canvas */}
        <div className="relative rounded-3xl bg-white/80 border border-zinc-200/80 p-6 sm:p-12 overflow-hidden shadow-xl shadow-zinc-900/[0.04] min-h-[420px] flex flex-col items-center justify-center">
          {/* Action Trigger */}
          <div className="mb-8 z-20">
            <button
              onClick={handleToggle}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#18181B] hover:bg-[#27272A] text-white text-xs font-medium tracking-wide transition-all shadow-md active:scale-95"
            >
              <GitMerge className="w-3.5 h-3.5 text-purple-300" />
              <span>{isMerged ? 'Separate Aliases' : 'Execute Semantic Entity Resolution'}</span>
            </button>
          </div>

          {/* Morphing Arena */}
          <div className="relative w-full max-w-xl h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {!isMerged ? (
                <motion.div
                  key="separated"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3.5"
                >
                  {aliases.map((alias, idx) => (
                    <motion.div
                      key={alias.name}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className={`p-4 rounded-2xl bg-white border ${alias.color} space-y-2 text-center shadow-sm`}
                    >
                      <div className="text-[10px] font-mono-code text-zinc-500 uppercase font-semibold">
                        {alias.source}
                      </div>
                      <div className="text-sm font-bold text-[#18181B] tracking-tight">
                        "{alias.name}"
                      </div>
                      <div className="text-[10px] font-mono-code text-[#4A5CD8] font-medium">
                        {alias.meta}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="merged"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                  className="w-full max-w-md p-6 rounded-3xl bg-white border-2 border-purple-300 shadow-xl shadow-purple-900/[0.08] text-center relative"
                >
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#6B7CFF] text-white text-[10px] font-mono-code font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                    <Check className="w-3 h-3" />
                    <span>CANONICAL ENTITY RESOLVED</span>
                  </div>

                  <div className="text-lg font-bold text-[#18181B] tracking-tight mt-2">
                    Institution A (Technical Campus)
                  </div>
                  <p className="text-xs text-zinc-500 mt-1 font-mono-code">
                    Delhi NCR • Affiliated University System
                  </p>

                  <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-around text-[10px] font-mono-code text-zinc-500">
                    <div>
                      <span className="text-[#4A5CD8] font-bold block text-sm">3</span>
                      <span>Aliases Bound</span>
                    </div>
                    <div>
                      <span className="text-purple-600 font-bold block text-sm">142</span>
                      <span>Raw Mentions</span>
                    </div>
                    <div>
                      <span className="text-emerald-600 font-bold block text-sm">100%</span>
                      <span>Identity Match</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
