import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Database, GitMerge, AlertTriangle, Layers, Cpu, Share2 } from 'lucide-react';
import { ParsedConstraints } from '../../types/evidence';
import { tactileAudio } from '../../utils/audio';

interface ResearchPipelineModalProps {
  isOpen: boolean;
  query: string;
  constraints: ParsedConstraints;
  onComplete: () => void;
}

interface PipelineStage {
  id: string;
  name: string;
  subhead: string;
  desc: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const ResearchPipelineModal: React.FC<ResearchPipelineModalProps> = ({
  isOpen,
  query,
  constraints,
  onComplete,
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const stages: PipelineStage[] = [
    {
      id: 'discover',
      name: 'DISCOVER',
      subhead: 'Query Intent & Domain Boundary',
      desc: 'Deconstructing constraints (category, location, price limits, qualitative culture).',
      color: '#4A5CD8',
      icon: Cpu,
    },
    {
      id: 'collect',
      name: 'COLLECT',
      subhead: 'Multi-Source Retrieval',
      desc: 'Scanning public forums, community threads, and permitted public archives.',
      color: '#7EA5D9',
      icon: Database,
    },
    {
      id: 'normalize',
      name: 'NORMALIZE',
      subhead: 'Provenance & Recency Indexing',
      desc: 'Structuring timestamps, recency buckets, and author attribution tags.',
      color: '#6B7CFF',
      icon: Layers,
    },
    {
      id: 'resolve',
      name: 'RESOLVE',
      subhead: 'Semantic Entity Resolution',
      desc: 'Disambiguating aliases, acronyms, and informal names to canonical knowledge nodes.',
      color: '#9B87F5',
      icon: GitMerge,
    },
    {
      id: 'compare',
      name: 'COMPARE',
      subhead: 'Content Deduplication',
      desc: 'Clustering repetitive commentary and syndicated promotional postings.',
      color: '#2D9A76',
      icon: Share2,
    },
    {
      id: 'analyze',
      name: 'ANALYZE',
      subhead: 'Aspect & Polarity Detection',
      desc: 'Decomposing operational facets and detecting opposing evidence viewpoints.',
      color: '#F59E72',
      icon: AlertTriangle,
    },
    {
      id: 'trace',
      name: 'TRACE',
      subhead: 'Traceable Graph Synthesis',
      desc: 'Calculating corroboration coverage density and anchoring auditable citations.',
      color: '#4A5CD8',
      icon: Sparkles,
    },
  ];

  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < stages.length - 1) {
          tactileAudio.playNodeHover();
          return prev + 1;
        } else {
          clearInterval(interval);
          tactileAudio.playResolve();
          setTimeout(() => {
            onComplete();
          }, 500);
          return prev;
        }
      });
    }, 450);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const currentStage = stages[currentStep];

  const sourcesScanned = Math.min(6 + currentStep * 6, 38);
  const entitiesCount = currentStep >= 3 ? 4 : Math.min(1 + Math.floor(currentStep / 1.5), 3);
  const signalsCount = Math.min(12 + currentStep * 11, 74);
  const conflictsCount = currentStep >= 5 ? 3 : Math.min(currentStep >= 3 ? 1 : 0, 2);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/40 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pipeline-modal-title"
    >
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Stage {currentStep + 1} of 7: {currentStage.name}. {currentStage.subhead}. {currentStage.desc}
      </div>
      <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-zinc-200 shadow-2xl overflow-hidden">
        {/* Top Header Telemetry */}
        <div className="p-6 border-b border-zinc-100 bg-[#FAF8F5] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-3 h-3 rounded-full animate-ping"
              style={{ backgroundColor: currentStage.color }}
              aria-hidden="true"
            />
            <div>
              <span id="pipeline-modal-title" className="text-xs font-mono-code uppercase font-bold tracking-wider text-[#18181B] block">
                Research Synthesis Pipeline
              </span>
              <span className="text-[10px] font-mono-code text-zinc-500 block">
                Evidence Engine Active • Autonomous Traceability
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span
              className="px-3 py-1 rounded-full text-[10px] font-mono-code font-bold tracking-wider uppercase border"
              style={{
                backgroundColor: `${currentStage.color}15`,
                color: currentStage.color,
                borderColor: `${currentStage.color}30`,
              }}
            >
              Stage {currentStep + 1} of 7: {currentStage.name}
            </span>
          </div>
        </div>

        {/* Target Query Callout */}
        <div className="p-5 border-b border-zinc-100 bg-white">
          <div className="text-[10px] font-mono-code uppercase text-zinc-400 font-bold mb-1">
            Analyzing Input:
          </div>
          <h4 className="text-base sm:text-lg font-bold text-[#18181B] tracking-tight leading-snug font-serif">
            "{query}"
          </h4>
        </div>

        {/* 7-Stage Horizontal Pipeline Progress Bar */}
        <div className="px-6 py-4 bg-[#FAF8F5] border-b border-zinc-100">
          <div className="flex items-center justify-between gap-1">
            {stages.map((stg, idx) => {
              const isDone = idx < currentStep;
              const isCurrent = idx === currentStep;

              return (
                <div key={stg.id} className="flex-1 flex flex-col items-center gap-1.5">
                  <div
                    className={`w-full h-1.5 rounded-full transition-all duration-300 ${
                      isDone
                        ? 'bg-[#4A5CD8]'
                        : isCurrent
                        ? 'bg-[#6B7CFF]'
                        : 'bg-zinc-200'
                    }`}
                  />
                  <span
                    className={`text-[9px] font-mono-code uppercase font-bold ${
                      isCurrent
                        ? 'text-[#4A5CD8]'
                        : isDone
                        ? 'text-zinc-700'
                        : 'text-zinc-400'
                    }`}
                  >
                    {stg.name.slice(0, 4)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Stage Spotlight Card */}
        <div className="p-6 bg-white space-y-4">
          <motion.div
            key={currentStage.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80"
          >
            <div
              className="p-3 rounded-2xl shrink-0"
              style={{
                backgroundColor: `${currentStage.color}15`,
                color: currentStage.color,
              }}
            >
              <currentStage.icon className="w-6 h-6 stroke-[1.8]" />
            </div>

            <div className="space-y-1 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#18181B] tracking-tight">
                  {currentStage.subhead}
                </h3>
                <span className="text-[10px] font-mono-code text-zinc-400">
                  {Math.round(((currentStep + 1) / 7) * 100)}% Complete
                </span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed font-light">
                {currentStage.desc}
              </p>
            </div>
          </motion.div>

          {/* Telemetry Progression Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center text-xs font-mono-code">
            <div className="p-3 rounded-xl bg-[#FAF8F5] border border-zinc-200">
              <span className="text-[10px] text-zinc-500 uppercase block">Sources Scanned</span>
              <span className="text-sm font-bold text-[#18181B]">{sourcesScanned} Sources</span>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF8F5] border border-zinc-200">
              <span className="text-[10px] text-zinc-500 uppercase block">Entities Resolved</span>
              <span className="text-sm font-bold text-[#4A5CD8]">{entitiesCount} Nodes</span>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF8F5] border border-zinc-200">
              <span className="text-[10px] text-zinc-500 uppercase block">Evidence Signals</span>
              <span className="text-sm font-bold text-emerald-700">{signalsCount} Triangulated</span>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF8F5] border border-zinc-200">
              <span className="text-[10px] text-zinc-500 uppercase block">Conflicts Flagged</span>
              <span className="text-sm font-bold text-amber-700">{conflictsCount} Discrepancies</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
