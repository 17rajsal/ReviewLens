import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EntityReport } from '../../types/evidence';
import { EvidenceSnippetCard } from './EvidenceSnippetCard';
import { X, Search, Sparkles, BookOpen, Shield } from 'lucide-react';
import { tactileAudio } from '../../utils/audio';

interface EvidenceDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  entity: EntityReport | null;
  initialAspectFilter?: string;
}

export const EvidenceDrawer: React.FC<EvidenceDrawerProps> = ({
  isOpen,
  onClose,
  entity,
  initialAspectFilter = 'All',
}) => {
  const [selectedAspect, setSelectedAspect] = useState<string>(initialAspectFilter);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    if (initialAspectFilter) {
      setSelectedAspect(initialAspectFilter);
    }
  }, [initialAspectFilter]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!entity) return null;

  const availableAspects = ['All', ...Array.from(new Set(entity.evidenceList.map((e) => e.aspect.split(' / ')[0])))];

  const filteredEvidence = entity.evidenceList.filter((item) => {
    const matchesAspect =
      selectedAspect === 'All' || item.aspect.toLowerCase().includes(selectedAspect.toLowerCase());
    const matchesSearch =
      !searchTerm.trim() ||
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sourceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sourceTitle.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesAspect && matchesSearch;
  });

  const matchingAspectObj = entity.aspects.find(
    (a) => a.name.toLowerCase() === selectedAspect.toLowerCase()
  );

  const supportingEvidence = filteredEvidence.filter((e) => e.sentiment === 'positive' || e.sentiment === 'nuanced');
  const opposingEvidence = filteredEvidence.filter((e) => e.sentiment === 'negative' || e.sentiment === 'mixed');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end items-end sm:items-stretch">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm"
          />

          {/* Drawer Body: Responsive Bottom-Sheet on mobile, Slide-over on desktop */}
          <motion.div
            initial={{ y: '100%', x: 0 }}
            animate={{ y: 0, x: 0 }}
            exit={{ y: '100%', x: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="relative z-50 w-full sm:max-w-2xl max-h-[92vh] sm:max-h-full sm:h-full rounded-t-3xl sm:rounded-none bg-[#FAF8F5] border-t sm:border-t-0 sm:border-l border-zinc-200 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Atmospheric scenic blur subtle texture */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-[0.03] pointer-events-none -z-10"
              style={{ backgroundImage: "url('/images/atmosphere-scenic-blur.jpg')" }}
            />
            {/* Mobile Drag Handle */}
            <div className="sm:hidden w-full flex justify-center pt-3 pb-1">
              <div className="w-12 h-1.5 rounded-full bg-zinc-300" />
            </div>

            {/* Document Header */}
            <div className="p-6 border-b border-zinc-200/80 bg-white space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#4A5CD8]" />
                    <span className="text-[10px] font-mono-code uppercase font-bold text-[#3444B8] tracking-wider">
                      SOURCE EVIDENCE DOCUMENT
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#18181B] tracking-tight">
                    {entity.canonicalName}
                  </h2>
                  <p className="text-xs text-zinc-500 font-mono-code">
                    {entity.evidenceList.length} public citations analyzed • Full provenance audit
                  </p>
                </div>

                <button
                  onClick={() => {
                    tactileAudio.playClick();
                    onClose();
                  }}
                  className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-[#18181B] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* In-drawer Search & Quick Filters */}
              <div className="space-y-2.5 pt-1">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search within verbatim quotes..."
                    className="w-full bg-[#FAF8F5] border border-zinc-200 rounded-full pl-9 pr-4 py-2 text-xs text-[#18181B] placeholder-zinc-400 focus:outline-none focus:border-[#6B7CFF] font-mono-code"
                  />
                </div>

                {/* Aspect filter pills */}
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {availableAspects.map((asp) => (
                    <button
                      key={asp}
                      onClick={() => {
                        tactileAudio.playClick();
                        setSelectedAspect(asp);
                      }}
                      className={`px-3 py-1 rounded-full text-[10px] font-mono-code transition-all ${
                        selectedAspect === asp
                          ? 'bg-[#18181B] text-white font-bold shadow-xs'
                          : 'bg-white text-zinc-600 hover:text-[#18181B] border border-zinc-200'
                      }`}
                    >
                      {asp}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Citations List Scroll Container */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
              {/* CLEAR SEPARATION: REVIEWLENS SYNTHESIS PANEL */}
              <div className="p-5 rounded-2xl bg-purple-50/50 border border-purple-200/80 space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-purple-800 font-bold text-[10px] font-mono-code uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>REVIEWLENS SYSTEM SYNTHESIS</span>
                  </div>
                  <span className="text-[9px] font-mono-code px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 font-semibold border border-purple-200">
                    AI INTERPRETATION — NOT A DIRECT QUOTE
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] font-mono-code text-zinc-500 uppercase">Target Claim Topic:</span>
                  <p className="text-sm font-bold text-[#18181B] tracking-tight">
                    {matchingAspectObj
                      ? `"${matchingAspectObj.name} shows mostly ${matchingAspectObj.sentiment} discussion across public channels."`
                      : `"${entity.canonicalName} public discussion synthesis across ${entity.evidenceList.length} sources."`}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-purple-100 space-y-1">
                  <p className="text-xs text-zinc-700 leading-relaxed font-light">
                    {matchingAspectObj
                      ? matchingAspectObj.summary
                      : entity.summaryVerdict}
                  </p>
                </div>

                {/* Signals Overview */}
                <div className="flex items-center justify-between pt-1 text-[10px] font-mono-code">
                  <span className="text-emerald-800 font-bold">
                    ✓ {supportingEvidence.length} Corroborated Signals
                  </span>
                  {opposingEvidence.length > 0 && (
                    <span className="text-amber-800 font-bold">
                      ⚠ {opposingEvidence.length} Divergent / Mixed Signals
                    </span>
                  )}
                </div>
              </div>

              {/* CLEAR SEPARATION: SOURCE EVIDENCE (AUDITABLE CITATIONS) */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono-code text-zinc-500 uppercase tracking-wider pb-1 border-b border-zinc-200">
                  <span className="text-[#18181B] font-bold">
                    SOURCE EVIDENCE — VERBATIM CITATIONS ({filteredEvidence.length})
                  </span>
                  <span className="text-[#4A5CD8] font-semibold">AUDITABLE TRANSCRIPTS</span>
                </div>

                {filteredEvidence.length === 0 ? (
                  <div className="py-16 text-center text-xs font-mono-code text-zinc-500 space-y-2">
                    <p>No evidence citations match the active filters.</p>
                    <button
                      onClick={() => {
                        setSelectedAspect('All');
                        setSearchTerm('');
                      }}
                      className="text-[#4A5CD8] underline font-semibold"
                    >
                      Reset filters
                    </button>
                  </div>
                ) : (
                  filteredEvidence.map((evidence) => (
                    <EvidenceSnippetCard key={evidence.id} evidence={evidence} />
                  ))
                )}
              </div>
            </div>

            {/* Footer Transparency Notice */}
            <div className="p-4 border-t border-zinc-200/80 bg-white flex items-center justify-between text-[10px] font-mono-code text-zinc-500">
              <span className="flex items-center gap-1.5 text-zinc-700 font-medium">
                <Shield className="w-3.5 h-3.5 text-[#4A5CD8]" />
                <span>TRACEABLE PUBLIC ARCHIVE • AUDITABLE CITATIONS</span>
              </span>
              <span className="text-zinc-400">ESC TO CLOSE</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
