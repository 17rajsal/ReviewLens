import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  Award, 
  MapPin, 
  Globe, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Info, 
  Sparkles, 
  Split,
  FileText
} from 'lucide-react';
import { tactileAudio } from '../../utils/audio';

interface StorySectionScatteredEvidenceProps {
  onExploreResearch?: () => void;
  liveQuery?: string;
  isLiveMode?: boolean;
}

export const StorySection_ScatteredEvidence: React.FC<StorySectionScatteredEvidenceProps> = ({
  onExploreResearch,
  liveQuery,
  isLiveMode = false,
}) => {
  const [isConverged, setIsConverged] = useState(false);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [interactionNotice, setInteractionNotice] = useState<string | null>(null);

  // The 6 Numbered Process Markers from Master Specification
  const pipelineSteps = [
    { num: '01', title: 'QUERY', desc: 'Constraint parsing' },
    { num: '02', title: 'MULTI-SOURCE RETRIEVAL', desc: 'Disparate ingestion', active: true },
    { num: '03', title: 'INSTITUTION INTELLIGENCE', desc: 'Alias clustering' },
    { num: '04', title: 'CONTRADICTION ENGINE', desc: 'Polarity divergence' },
    { num: '05', title: 'ASPECT ANALYSIS', desc: 'Dimension rating' },
    { num: '06', title: 'EVIDENCE SYNTHESIS', desc: 'Traceable dossier' },
  ];

  // The 4 Different Types of Real Evidence Fragments
  const evidenceFragments = [
    {
      id: 'frag-discussion',
      category: 'PUBLIC DISCUSSION',
      sourcePlatform: 'Reddit • r/delhi',
      sourceType: 'Community Discussion Thread',
      icon: MessageSquare,
      iconColor: 'text-blue-600 bg-blue-50',
      badge: isLiveMode ? 'LIVE SOURCE' : 'DEMO EVIDENCE',
      badgeStyle: isLiveMode 
        ? 'bg-emerald-50 text-emerald-800 border-emerald-300' 
        : 'bg-amber-50 text-amber-800 border-amber-200',
      excerpt: 'Several students mention that the campus central library and lab facilities become overcrowded after 6 PM, but peer hackathon and open-source culture is genuinely strong.',
      metaCount: '18 threads scanned',
      metaDate: 'Published 2026',
      rotation: -3.2,
      position: { x: -30, y: -20 },
      convergedPos: { x: -8, y: -45 }
    },
    {
      id: 'frag-institutional',
      category: 'INSTITUTIONAL SOURCE',
      sourcePlatform: 'Wikipedia & University Register',
      sourceType: 'Institutional Context & Charter',
      icon: Award,
      iconColor: 'text-purple-600 bg-purple-50',
      badge: isLiveMode ? 'LIVE SOURCE' : 'REFERENCE DATA',
      badgeStyle: isLiveMode 
        ? 'bg-emerald-50 text-emerald-800 border-emerald-300' 
        : 'bg-zinc-100 text-zinc-700 border-zinc-200',
      excerpt: 'Established as an autonomous state university under Delhi Act 6 of 2009. Academic curriculum accredited with statutory syllabus approvals and recognized research departments.',
      metaCount: '7 public records',
      metaDate: 'Public filing 2025',
      rotation: 2.5,
      position: { x: 40, y: -10 },
      convergedPos: { x: 8, y: -15 }
    },
    {
      id: 'frag-opendata',
      category: 'PLACE METADATA / OPEN DATA',
      sourcePlatform: 'OpenStreetMap Overpass API',
      sourceType: 'Official Open Registry',
      icon: MapPin,
      iconColor: 'text-emerald-600 bg-emerald-50',
      badge: isLiveMode ? 'LIVE SOURCE' : 'VERIFIED OPEN DATA',
      badgeStyle: 'bg-emerald-50 text-emerald-800 border-emerald-300',
      excerpt: 'Physical geographic node located at 28.6352° N, 77.2197° E. Verified amenity classification: Higher Education Campus & Technology Research Facility with wheelchair accessible entrances.',
      metaCount: '5 registry nodes',
      metaDate: 'ODbL Live Record',
      rotation: -2.0,
      position: { x: -45, y: 35 },
      convergedPos: { x: -6, y: 15 }
    },
    {
      id: 'frag-web',
      category: 'SEARCH RESULT / PUBLIC WEB PAGE',
      sourcePlatform: 'Independent Tech Forum & Web Index',
      sourceType: 'Public Web Discussion Article',
      icon: Globe,
      iconColor: 'text-amber-600 bg-amber-50',
      badge: isLiveMode ? 'LIVE SOURCE' : 'DEMO EVIDENCE',
      badgeStyle: isLiveMode 
        ? 'bg-emerald-50 text-emerald-800 border-emerald-300' 
        : 'bg-amber-50 text-amber-800 border-amber-200',
      excerpt: 'Independent review: Hostel Wi-Fi bandwidth and mess catering receive mixed reviews from 2nd-year residents, whereas core software engineering placement metrics remain solid.',
      metaCount: '12 relevant web pages',
      metaDate: 'Indexed 2026',
      rotation: 3.5,
      position: { x: 35, y: 50 },
      convergedPos: { x: 6, y: 45 }
    }
  ];

  const handleToggleConvergence = () => {
    tactileAudio.playResolve();
    setIsConverged(!isConverged);
  };

  const handleCardClick = (frag: typeof evidenceFragments[0]) => {
    tactileAudio.playClick();
    setActiveCardId(frag.id);
    if (!isLiveMode) {
      setInteractionNotice(
        `Illustrative evidence fragment (${frag.category}). In live mode, ReviewLens dynamically populates real normalized evidence from permitted APIs.`
      );
      setTimeout(() => setInteractionNotice(null), 5000);
    }
  };

  return (
    <section className="py-24 sm:py-32 border-t border-zinc-200/80 relative overflow-hidden bg-[#FAF8F5]">
      {/* Background soft ambient luxury gradient */}
      <div className="pointer-events-none absolute top-12 left-1/3 w-[700px] h-[500px] bg-[#6B7CFF]/[0.025] rounded-full blur-[140px] -z-10" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 w-[600px] h-[400px] bg-[#F59E72]/[0.025] rounded-full blur-[160px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* =================================================================== */}
        {/* SECTION 4: THE 6 NUMBERED PIPELINE CARDS (Master Specification)     */}
        {/* =================================================================== */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-200/80 pb-3">
            <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-zinc-500">
              ARCHITECTURE // THE 6-STAGE EVIDENCE PIPELINE
            </span>
            <span className="text-[10px] font-mono-code text-[#4A5CD8] font-semibold hidden sm:inline-block">
              TECHNICAL EXECUTION MODEL
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {pipelineSteps.map((step) => (
              <div
                key={step.num}
                className={`p-3.5 rounded-2xl border transition-all duration-300 relative ${
                  step.active
                    ? 'bg-white border-[#4A5CD8]/50 shadow-md shadow-[#4A5CD8]/5 ring-1 ring-[#4A5CD8]/20'
                    : 'bg-white/60 border-zinc-200/70 hover:bg-white hover:border-zinc-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-xs font-mono-code font-bold ${step.active ? 'text-[#4A5CD8]' : 'text-zinc-400'}`}>
                    {step.num}
                  </span>
                  {step.active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4A5CD8] animate-pulse" />
                  )}
                </div>
                <div className="text-[11px] font-mono-code font-bold text-[#18181B] tracking-tight leading-snug">
                  {step.title}
                </div>
                <div className="text-[10px] text-zinc-500 font-sans mt-0.5 font-light">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =================================================================== */}
        {/* EDITORIAL SPLIT LAYOUT: LEFT NARRATIVE + RIGHT FLOATING FIELD       */}
        {/* =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* --------------------------------------------------------------- */}
          {/* LEFT: Large Typography & Editorial Narrative                    */}
          {/* --------------------------------------------------------------- */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Technical Header Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-200/80 text-[#3444B8] text-[11px] font-mono-code font-bold">
              <span>01 — MULTI-SOURCE RETRIEVAL</span>
            </div>

            {/* Monumental Editorial Serif Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-editorial font-normal tracking-tight text-[#18181B] leading-[1.08]">
              One question.
              <br />
              <span className="italic editorial-gradient">
                Many independent
              </span>
              <br />
              sources.
            </h2>

            {/* Editorial Explanation Copy */}
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
              Useful evidence rarely lives in one place. One experience is discussed on Reddit, another exists in an official registry, another appears on an institutional portal, and another contradicts everything else. ReviewLens connects public discussions, place data, and institutional sources so you can see what is repeated, what conflicts, and where every conclusion originated.
            </p>

            {/* SCATTERED -> CONNECTED Interactive Convergence Controller */}
            <div className="pt-2">
              <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono-code uppercase font-semibold text-zinc-700">
                    Spatial Synthesis Controller
                  </span>
                  <span className="text-[10px] font-mono-code text-zinc-400">
                    {isConverged ? 'STATUS: CONVERGED' : 'STATUS: SCATTERED'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleToggleConvergence}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-mono-code transition-all cursor-pointer ${
                      isConverged
                        ? 'bg-[#18181B] text-white font-medium shadow-sm'
                        : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-800'
                    }`}
                  >
                    <Split className="w-3.5 h-3.5" />
                    <span>{isConverged ? 'Reset to Scattered' : 'Connect Evidence Fragments'}</span>
                  </button>
                </div>

                <div className="text-[10px] font-mono-code text-zinc-500 text-center">
                  WEB + REDDIT + OPEN REGISTRY + INSTITUTIONAL → REVIEWLENS SIGNAL
                </div>
              </div>
            </div>

            {/* 7-Step Progression Pipeline Flow */}
            <div className="pt-2 border-t border-zinc-200/80">
              <div className="text-[10px] font-mono-code uppercase font-semibold text-zinc-400 tracking-wider mb-2">
                DOWNSTREAM SYNTHESIS PIPELINE
              </div>
              <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono-code text-zinc-600">
                <span className="px-2 py-0.5 rounded-md bg-zinc-100 font-semibold text-zinc-800">NORMALIZE</span>
                <span>→</span>
                <span className="px-2 py-0.5 rounded-md bg-zinc-100">RESOLVE</span>
                <span>→</span>
                <span className="px-2 py-0.5 rounded-md bg-zinc-100">COMPARE</span>
                <span>→</span>
                <span className="px-2 py-0.5 rounded-md bg-zinc-100">ANALYZE</span>
                <span>→</span>
                <span className="px-2 py-0.5 rounded-md bg-zinc-100">DETECT CONFLICT</span>
                <span>→</span>
                <span className="px-2 py-0.5 rounded-md bg-zinc-100">SYNTHESIZE</span>
                <span>→</span>
                <span className="px-2 py-0.5 rounded-md bg-blue-50 text-[#3444B8] font-bold">TRACE</span>
              </div>
            </div>

          </div>

          {/* --------------------------------------------------------------- */}
          {/* RIGHT: Dynamic Field of Floating Evidence Cards                */}
          {/* --------------------------------------------------------------- */}
          <div className="lg:col-span-7 relative min-h-[580px] sm:min-h-[640px] flex flex-col justify-center">
            
            {/* Background Structural Blueprint Frame */}
            <div className="absolute inset-0 rounded-3xl bg-white/40 border border-zinc-200/60 backdrop-blur-xs -z-10 overflow-hidden">
              <div className="absolute top-4 left-4 text-[9px] font-mono-code text-zinc-400 uppercase tracking-widest">
                EVIDENCE_CORPUS // DISCOVERY_FIELD
              </div>
              <div className="absolute bottom-4 right-4 text-[9px] font-mono-code text-zinc-400 uppercase tracking-widest">
                VERIFIABLE_PUBLIC_CITATIONS
              </div>
              {/* Subtle Grid Markings */}
              <div className="w-full h-full opacity-[0.03] bg-[radial-gradient(#18181B_1px,transparent_1px)] [background-size:16px_16px]" />
            </div>

            {/* Central Synthesis Corroboration Badge (appears when converged) */}
            <AnimatePresence>
              {isConverged && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="z-30 mx-auto mb-4 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-mono-code flex items-center gap-2 shadow-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="font-semibold">4 Disparate Sources Corroborated into 1 Traceable ReviewLens Signal</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* The Dynamic Floating Cards Field */}
            <div className="relative w-full h-[460px] sm:h-[500px] flex items-center justify-center p-2">
              {evidenceFragments.map((frag, index) => {
                const IconComp = frag.icon;
                const isSelected = activeCardId === frag.id;

                return (
                  <motion.div
                    key={frag.id}
                    onClick={() => handleCardClick(frag)}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isConverged
                        ? {
                            x: frag.convergedPos.x,
                            y: (index - 1.5) * 88,
                            rotate: 0,
                            scale: 1,
                            opacity: 1,
                            zIndex: 20 + index,
                          }
                        : {
                            x: frag.position.x,
                            y: frag.position.y,
                            rotate: frag.rotation,
                            scale: 0.98,
                            opacity: 0.95,
                            zIndex: 10 + index,
                          }
                    }
                    whileHover={{
                      scale: 1.02,
                      rotate: 0,
                      y: isConverged ? (index - 1.5) * 88 - 4 : frag.position.y - 6,
                      zIndex: 40,
                      boxShadow: '0 16px 32px -8px rgba(24, 24, 27, 0.08)',
                    }}
                    transition={{ type: 'spring', damping: 22, stiffness: 140, mass: 0.8 }}
                    className={`absolute w-[90%] sm:w-[360px] p-4 sm:p-5 rounded-2xl bg-white/95 border transition-colors cursor-pointer ${
                      isSelected
                        ? 'border-[#4A5CD8] ring-1 ring-[#4A5CD8]/30 shadow-lg'
                        : 'border-zinc-200/90 hover:border-zinc-300 shadow-md'
                    }`}
                  >
                    {/* Card Top Metadata & Source Badge */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-2">
                        <div className={`p-1.5 rounded-lg ${frag.iconColor}`}>
                          <IconComp className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#18181B] tracking-tight leading-tight">
                            {frag.sourcePlatform}
                          </div>
                          <div className="text-[9px] font-mono-code text-zinc-400 font-medium">
                            {frag.sourceType}
                          </div>
                        </div>
                      </div>

                      <span className={`text-[9px] font-mono-code font-bold px-2 py-0.5 rounded-full border ${frag.badgeStyle}`}>
                        {frag.badge}
                      </span>
                    </div>

                    {/* Verbatim Excerpt */}
                    <p className="text-xs text-zinc-700 leading-relaxed font-serif italic line-clamp-3">
                      "{frag.excerpt}"
                    </p>

                    {/* Card Footer: Metadata and Provenance Metrics */}
                    <div className="mt-3 pt-2.5 border-t border-zinc-100 flex items-center justify-between text-[9px] font-mono-code text-zinc-500">
                      <span className="font-semibold text-zinc-600">{frag.metaCount}</span>
                      <span>•</span>
                      <span>{frag.metaDate}</span>
                      <span>•</span>
                      <span className="text-[#4A5CD8] font-semibold flex items-center gap-0.5">
                        <FileText className="w-2.5 h-2.5" />
                        <span>CITABLE</span>
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Interaction Toast Notice (when clicking demo cards) */}
            <AnimatePresence>
              {interactionNotice && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-3 p-3 rounded-xl bg-white border border-amber-300 text-amber-900 text-xs font-mono-code shadow-md flex items-center gap-2"
                >
                  <Info className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>{interactionNotice}</span>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
};

export default StorySection_ScatteredEvidence;
