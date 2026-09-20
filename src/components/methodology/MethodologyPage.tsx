import React, { useState } from 'react';
import { ArrowLeft, Cpu, Database, Layers, GitMerge, AlertTriangle, Sparkles, Share2, Compass, ShieldCheck } from 'lucide-react';
import { tactileAudio } from '../../utils/audio';

interface MethodologyPageProps {
  onBack: () => void;
}

export const MethodologyPage: React.FC<MethodologyPageProps> = ({ onBack }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: '01',
      title: 'QUESTION & CONSTRAINT PARSING',
      icon: Cpu,
      summary: 'Deconstruct natural language inquiries into domains, entities, locations, and qualitative priorities.',
      details: 'ReviewLens does not treat searches as naive keyword lookups. It parses whether the query targets higher education, dining, hotels, or consumer technology, identifying specific budgetary caps, geographic coordinates, and aspect preferences.'
    },
    {
      step: '02',
      title: 'MULTI-SOURCE ENTITY DISCOVERY',
      icon: Compass,
      summary: 'Discover genuine real-world entities via OpenStreetMap Overpass and official Google Places APIs.',
      details: 'Physical coordinates, verified addresses, and Place IDs anchor every entity to authentic geographic nodes. OpenStreetMap provides open-data place metadata while Wikipedia supplies encyclopedic founding history.'
    },
    {
      step: '03',
      title: 'PERMITTED EVIDENCE COLLECTION',
      icon: Database,
      summary: 'Ingest public discussions, web documents, and institutional records respecting all rate limits.',
      details: 'Strict legal compliance: Reddit discussions are accessed only through official developer OAuth APIs; Wikipedia uses public REST APIs. Zero indiscriminate web scraping. Missing credentials cleanly trigger verified benchmark archives.'
    },
    {
      step: '04',
      title: 'PROVENANCE NORMALIZATION',
      icon: Layers,
      summary: 'Standardize timestamps, recency buckets, author attribution, and source categories.',
      details: 'Every piece of evidence is tagged with an immutable record: source type (PUBLIC DISCUSSION, OPEN DATA, INSTITUTIONAL SOURCE), publication date, retrieval date, and original URL.'
    },
    {
      step: '05',
      title: 'MULTI-STRATEGY ENTITY RESOLUTION',
      icon: GitMerge,
      summary: 'Resolve cross-source mentions using acronym dictionaries, string distance, and Haversine distance.',
      details: 'Informal names ("BPIT", "Tonino CP") are mapped to canonical knowledge nodes using Jaro-Winkler distance, character 3-grams, and geographic proximity checks within 200 meters. Low-confidence matches are flagged as UNRESOLVED_DISAMBIGUATION.'
    },
    {
      step: '06',
      title: 'CONTENT SIMILARITY & CLUSTERING',
      icon: Share2,
      summary: 'Detect near-duplicate wording and syndicated promotional commentary across sources.',
      details: 'Near-duplicate text is clustered and marked as "HIGH TEXTUAL SIMILARITY (POSSIBLE DUPLICATE CONTENT)". ReviewLens never asserts a review is "fake" without proof; similarity is reported objectively as a corroboration signal.'
    },
    {
      step: '07',
      title: 'ASPECT SENTIMENT & CONFLICT DETECTION',
      icon: AlertTriangle,
      summary: 'Decompose operational facets and detect opposing viewpoints side-by-side.',
      details: 'Sentiment is classified at the aspect level (Food, Service, Price, Ambience / Placements, Faculty, Campus). When opposing signals exist (e.g. food praise vs slow service), ReviewLens highlights the divergence rather than concealing it.'
    },
    {
      step: '08',
      title: 'CORROBORATION COVERAGE & TRACEABILITY',
      icon: Sparkles,
      summary: 'Calculate Evidence Coverage scores and link every claim to an auditable source citation.',
      details: 'The Evidence Coverage score is NOT a "Truth Score" or "Fake Review Score" — it transparently reflects evidence density, source diversity, recency weight, and corroboration across independent sources.'
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#FAF8F5] text-[#18181B] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-20 left-1/4 w-[600px] h-[400px] bg-[#6B7CFF]/[0.03] rounded-full blur-[140px] -z-10" />
      <div className="pointer-events-none absolute top-80 right-1/4 w-[500px] h-[400px] bg-[#F59E72]/[0.03] rounded-full blur-[160px] -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
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
              <ShieldCheck className="w-3.5 h-3.5 text-[#4A5CD8]" />
              Scientific & Algorithmic Methodology
            </span>
          </div>

          <span className="text-xs font-mono-code text-zinc-500">
            8-Pass Evidence Synthesis
          </span>
        </div>

        {/* Hero Section */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-editorial font-normal text-[#18181B] leading-tight tracking-tight">
            Why ReviewLens Replaces The Simplistic Five-Star Rating
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
            Star ratings compress thousands of complex, subjective experiences into an arbitrary decimal number. ReviewLens unbundles that average by mapping evidence, identifying recurring patterns, detecting genuine disagreements, and anchoring every claim to auditable public sources.
          </p>
        </div>

        {/* Interactive 8-Stage Pipeline Walkthrough */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Step Selector Column */}
          <div className="md:col-span-5 space-y-2">
            <span className="text-[10px] font-mono-code uppercase tracking-widest text-zinc-500 font-bold block pb-1">
              PIPELINE STAGES
            </span>
            {steps.map((item, idx) => {
              const isActive = idx === activeStep;
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  onClick={() => {
                    tactileAudio.playNodeHover();
                    setActiveStep(idx);
                  }}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                    isActive
                      ? 'bg-white border-[#4A5CD8] shadow-md ring-2 ring-[#4A5CD8]/20'
                      : 'bg-white/70 border-zinc-200/80 hover:bg-white hover:border-zinc-300 shadow-2xs'
                  }`}
                >
                  <span className={`text-xs font-mono-code font-bold ${isActive ? 'text-[#4A5CD8]' : 'text-zinc-400'}`}>
                    {item.step}
                  </span>
                  <div className="flex-1 truncate">
                    <span className="text-xs font-semibold text-[#18181B] block truncate">
                      {item.title}
                    </span>
                  </div>
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#4A5CD8]' : 'text-zinc-400'}`} />
                </div>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Card */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-xl shadow-zinc-900/[0.03] space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono-code font-bold text-[#3444B8] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                STAGE {steps[activeStep].step}
              </span>
              <h2 className="text-xl font-editorial font-bold text-[#18181B]">
                {steps[activeStep].title}
              </h2>
            </div>

            <p className="text-base text-zinc-800 font-light leading-relaxed border-l-2 border-[#4A5CD8] pl-4">
              "{steps[activeStep].summary}"
            </p>

            <div className="pt-2 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed space-y-3">
              <p>{steps[activeStep].details}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-zinc-200/70 text-xs text-zinc-600 space-y-1">
              <span className="font-semibold text-zinc-900 block font-mono-code text-[11px] uppercase">
                Ethical Access Guarantee:
              </span>
              <span>All processes operate without bypassing paywalls, rate limits, or proprietary platform protections.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
