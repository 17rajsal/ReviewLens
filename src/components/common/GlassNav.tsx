import React, { useEffect, useState } from 'react';
import { Search, ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { tactileAudio } from '../../utils/audio';

export type NavTarget = 'hero' | 'story' | 'results' | 'graph' | 'methodology' | 'map' | 'compare' | 'history' | 'sources' | 'entity' | 'contact' | 'privacy' | 'terms' | '404';

interface GlassNavProps {
  onNavClick: (target: NavTarget) => void;
  activeView: string;
  onOpenSearch: () => void;
}

export const GlassNav: React.FC<GlassNavProps> = ({ onNavClick, activeView, onOpenSearch }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const muted = tactileAudio.toggleMute();
    setIsMuted(muted);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#FAF8F5]/94 backdrop-blur-xl border-b border-zinc-900/[0.06] shadow-sm'
          : 'py-5 bg-[#FAF8F5]/80 backdrop-blur-md border-b border-zinc-900/[0.04]'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Brand Logomark */}
        <button
          onClick={() => {
            tactileAudio.playClick();
            onNavClick('hero');
          }}
          className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer"
        >
          {/* Concentric gradient orb icon */}
          <div className="relative w-8 h-8 rounded-full flex items-center justify-center p-[2.5px] bg-gradient-to-tr from-[#384BC8] via-[#6B7CFF] to-[#9B87F5] shadow-sm shadow-[#6B7CFF]/25 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-[#FAF8F5] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#4A5CD8] to-[#9B87F5]" />
            </div>
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#18181B] group-hover:text-[#4A5CD8] transition-colors leading-none block">
              ReviewLens
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono-code uppercase tracking-[0.16em] text-zinc-500 font-medium block pt-0.5">
              EVIDENCE-DRIVEN DECISION INTELLIGENCE
            </span>
          </div>
        </button>

        {/* Center: Reference Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[14px] font-normal">
          <button
            onClick={() => {
              tactileAudio.playClick();
              onNavClick('hero');
            }}
            className={`relative transition-colors duration-200 py-1 cursor-pointer ${
              activeView === 'hero'
                ? 'text-[#18181B] font-semibold'
                : 'text-zinc-600 hover:text-[#18181B]'
            }`}
          >
            <span>Home</span>
            {activeView === 'hero' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#18181B]" />
            )}
          </button>

          <button
            onClick={() => {
              tactileAudio.playClick();
              onNavClick('results');
            }}
            className={`relative transition-colors duration-200 py-1 cursor-pointer ${
              activeView === 'results'
                ? 'text-[#18181B] font-semibold'
                : 'text-zinc-600 hover:text-[#18181B]'
            }`}
          >
            <span>Research</span>
            {activeView === 'results' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#18181B]" />
            )}
          </button>

          <button
            onClick={() => {
              tactileAudio.playClick();
              onNavClick('map');
            }}
            className={`relative transition-colors duration-200 py-1 cursor-pointer ${
              activeView === 'map'
                ? 'text-[#18181B] font-semibold'
                : 'text-zinc-600 hover:text-[#18181B]'
            }`}
          >
            <span>Map</span>
            {activeView === 'map' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#18181B]" />
            )}
          </button>

          <button
            onClick={() => {
              tactileAudio.playClick();
              onNavClick('compare');
            }}
            className={`relative transition-colors duration-200 py-1 cursor-pointer ${
              activeView === 'compare'
                ? 'text-[#18181B] font-semibold'
                : 'text-zinc-600 hover:text-[#18181B]'
            }`}
          >
            <span>Compare</span>
            {activeView === 'compare' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#18181B]" />
            )}
          </button>

          <button
            onClick={() => {
              tactileAudio.playClick();
              onNavClick('history');
            }}
            className={`relative transition-colors duration-200 py-1 cursor-pointer ${
              activeView === 'history'
                ? 'text-[#18181B] font-semibold'
                : 'text-zinc-600 hover:text-[#18181B]'
            }`}
          >
            <span>History</span>
            {activeView === 'history' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#18181B]" />
            )}
          </button>

          <button
            onClick={() => {
              tactileAudio.playClick();
              onNavClick('sources');
            }}
            className={`relative transition-colors duration-200 py-1 cursor-pointer ${
              activeView === 'sources'
                ? 'text-[#18181B] font-semibold'
                : 'text-zinc-600 hover:text-[#18181B]'
            }`}
          >
            <span>Sources</span>
            {activeView === 'sources' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#18181B]" />
            )}
          </button>

          <button
            onClick={() => {
              tactileAudio.playClick();
              onNavClick('methodology');
            }}
            className={`relative transition-colors duration-200 py-1 cursor-pointer ${
              activeView === 'methodology'
                ? 'text-[#18181B] font-semibold'
                : 'text-zinc-600 hover:text-[#18181B]'
            }`}
          >
            <span>Methodology</span>
            {activeView === 'methodology' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#18181B]" />
            )}
          </button>
        </nav>

        {/* Right: Search Icon + Sound + Get Started Button */}
        <div className="flex items-center gap-3.5">
          {/* Audio Feedback Toggle */}
          <button
            onClick={toggleSound}
            className="p-2 rounded-full text-zinc-500 hover:text-[#18181B] hover:bg-zinc-900/[0.04] transition-colors"
            title={isMuted ? 'Unmute tactical audio' : 'Mute tactical audio'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-zinc-600" />}
          </button>

          {/* Search Icon Trigger */}
          <button
            onClick={() => {
              tactileAudio.playClick();
              onOpenSearch();
            }}
            className="p-2.5 rounded-full text-zinc-700 hover:text-[#18181B] hover:bg-zinc-900/[0.05] transition-colors cursor-pointer"
            title="Search Evidence"
          >
            <Search className="w-4 h-4 stroke-[2.2]" />
          </button>

          {/* Reference Get Started Pill Button */}
          <button
            onClick={() => {
              tactileAudio.playClick();
              onOpenSearch();
            }}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#18181B] hover:bg-[#27272A] text-white text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.4]" />
          </button>

          {/* Reference Editorial Top-Right Margin Text */}
          <div className="hidden xl:flex flex-col text-[8px] font-mono-code uppercase tracking-widest text-zinc-500 leading-tight border-l border-zinc-300 pl-3.5">
            <span>REAL</span>
            <span>PEOPLE</span>
            <span>REAL DATA</span>
            <span>CLEARER</span>
            <span>DECISIONS</span>
          </div>
        </div>
      </div>
    </header>
  );
};
