import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { tactileAudio } from '../../utils/audio';
import { SectionMarker } from '../common/SectionMarker';

export const StorySection06_Aspects: React.FC = () => {
  const [selectedAspect, setSelectedAspect] = useState<number>(0);

  const aspects = [
    {
      name: 'Coding Culture',
      sentiment: 'positive',
      score: 88,
      evidenceCount: 31,
      quote: 'Active student technical groups and developer clubs; teams consistently participate in national competitive coding events.',
      status: 'High Consensus',
      tags: ['Competitive Programming', 'Hackathons', 'Peer Support']
    },
    {
      name: 'Faculty & Mentorship',
      sentiment: 'mixed',
      score: 62,
      evidenceCount: 19,
      quote: 'Core departmental faculty provides guidance on technical projects; classroom coursework prioritizes foundational curriculum.',
      status: 'Nuanced',
      tags: ['Project Guides', 'Curriculum Focus', 'Self-study Needed']
    },
    {
      name: 'Placements & Hiring',
      sentiment: 'mixed',
      score: 58,
      evidenceCount: 46,
      quote: 'Proactive self-learners report positive technical roles, while high-volume corporate campus recruitment shows industry-wide moderation.',
      status: 'Contradiction Isolated',
      tags: ['Independent Search', 'Market Moderation', 'Peer Referrals']
    },
    {
      name: 'Attendance Policy',
      sentiment: 'negative',
      score: 32,
      evidenceCount: 22,
      quote: 'Strict minimum attendance regulations actively monitored, requiring balance between formal classroom commitments and external internships.',
      status: 'High Friction',
      tags: ['Mandatory Attendance', 'Administrative Review', 'Limited Flexibility']
    },
    {
      name: 'Infrastructure & Labs',
      sentiment: 'mixed',
      score: 54,
      evidenceCount: 18,
      quote: 'Modern computational laboratories and high-bandwidth network facilities, alongside compact physical recreational grounds.',
      status: 'Resource Specific',
      tags: ['Modern Laboratories', 'Compact Grounds', 'Central Library']
    }
  ];

  return (
    <section className="py-24 border-t border-zinc-200/80 relative overflow-hidden bg-[#F7F4EC]">
      {/* Subtle Atmospheric Slice Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.035] pointer-events-none -z-10"
        style={{ backgroundImage: "url('/images/atmosphere-terrace.jpg')" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <SectionMarker
            number="06"
            title="ASPECT-BASED INTELLIGENCE"
            className="mb-4"
          />
          <h2 className="text-3xl sm:text-5xl font-editorial font-normal tracking-tight text-[#18181B] mb-3">
            What are people actually talking about?
            <br />
            <span className="italic editorial-gradient">
              Granular aspect decomposition.
            </span>
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
            One dimension never tells the story. An entity can excel in peer collaboration while maintaining rigid operational policies. ReviewLens breaks down entities into verifiable operational facets.
          </p>
        </div>

        {/* Intelligence Dashboard Aspect Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Aspect Selector List */}
          <div className="lg:col-span-6 space-y-3">
            {aspects.map((asp, idx) => {
              const isSelected = selectedAspect === idx;
              return (
                <button
                  key={asp.name}
                  onClick={() => {
                    tactileAudio.playClick();
                    setSelectedAspect(idx);
                  }}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-white border-[#6B7CFF] shadow-lg shadow-zinc-900/[0.04] ring-2 ring-[#6B7CFF]/20'
                      : 'bg-white/80 border-zinc-200/80 hover:bg-white hover:border-zinc-300'
                  }`}
                >
                  <div className="space-y-1.5 flex-1 pr-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#18181B] tracking-tight">
                        {asp.name}
                      </span>
                      <span
                        className={`text-[9px] font-mono-code px-2 py-0.5 rounded-full uppercase font-bold ${
                          asp.sentiment === 'positive'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                            : asp.sentiment === 'negative'
                            ? 'bg-rose-100 text-rose-800 border border-rose-200'
                            : 'bg-amber-100 text-amber-800 border border-amber-200'
                        }`}
                      >
                        {asp.sentiment}
                      </span>
                    </div>

                    {/* Progress sentiment bar */}
                    <div className="w-full max-w-[260px] h-1.5 rounded-full bg-zinc-200 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          asp.sentiment === 'positive'
                            ? 'bg-emerald-500'
                            : asp.sentiment === 'negative'
                            ? 'bg-rose-500'
                            : 'bg-amber-500'
                        }`}
                        style={{ width: `${asp.score}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-right">
                    <div>
                      <span className="text-xs font-mono-code font-bold text-[#18181B] block">
                        {asp.evidenceCount}
                      </span>
                      <span className="text-[9px] font-mono-code text-zinc-500">Signals</span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'text-[#4A5CD8] translate-x-1' : 'text-zinc-400 group-hover:text-zinc-600'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Aspect Spotlight Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-xl shadow-zinc-900/[0.04] space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono-code uppercase font-bold text-[#4A5CD8] tracking-wider block">
                  ASPECT DETAIL SPOTLIGHT
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#18181B] tracking-tight mt-1">
                  {aspects[selectedAspect].name}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono-code text-zinc-600 font-medium">
                {aspects[selectedAspect].status}
              </span>
            </div>

            <blockquote className="p-4 rounded-2xl bg-[#F6F3ED] border-l-4 border-[#6B7CFF] text-zinc-800 text-sm leading-relaxed italic font-serif">
              "{aspects[selectedAspect].quote}"
            </blockquote>

            <div className="space-y-2">
              <span className="text-[11px] font-mono-code text-zinc-500 uppercase font-medium">
                Key Extracted Nuance Topics:
              </span>
              <div className="flex flex-wrap gap-2">
                {aspects[selectedAspect].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono-code text-zinc-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono-code text-zinc-500">
              <span>Sentiment Score: {aspects[selectedAspect].score}%</span>
              <span>Total Corroborated Evidence: {aspects[selectedAspect].evidenceCount} items</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
