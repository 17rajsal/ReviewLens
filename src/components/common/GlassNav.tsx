import React, { useEffect, useState } from 'react';
import { Search, ArrowRight, Volume2, VolumeX, Menu, X } from 'lucide-react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const toggleSound = () => {
    const muted = tactileAudio.toggleMute();
    setIsMuted(muted);
  };

  const handleMobileNav = (target: NavTarget) => {
    tactileAudio.playClick();
    setIsMobileMenuOpen(false);
    onNavClick(target);
  };

  const navLinks: { target: NavTarget; label: string }[] = [
    { target: 'hero', label: 'Home' },
    { target: 'results', label: 'Research' },
    { target: 'map', label: 'Map' },
    { target: 'compare', label: 'Compare' },
    { target: 'history', label: 'History' },
    { target: 'sources', label: 'Sources' },
    { target: 'methodology', label: 'Methodology' },
  ];

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
          aria-label="ReviewLens Home — Evidence-Driven Decision Intelligence"
          className="flex items-center gap-3 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5CD8] rounded-xl p-1 cursor-pointer"
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

        {/* Center: Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6 xl:gap-8 text-[14px] font-normal">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => {
                tactileAudio.playClick();
                onNavClick(link.target);
              }}
              className={`relative transition-colors duration-200 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5CD8] rounded-lg px-1 cursor-pointer ${
                activeView === link.target
                  ? 'text-[#18181B] font-semibold'
                  : 'text-zinc-600 hover:text-[#18181B]'
              }`}
            >
              <span>{link.label}</span>
              {activeView === link.target && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#18181B]" />
              )}
            </button>
          ))}
        </nav>

        {/* Right: Search Icon + Sound + Get Started Button + Mobile Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* Audio Feedback Toggle */}
          <button
            onClick={toggleSound}
            className="p-2 rounded-full text-zinc-500 hover:text-[#18181B] hover:bg-zinc-900/[0.04] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5CD8] cursor-pointer"
            aria-label={isMuted ? 'Unmute tactile audio' : 'Mute tactile audio'}
            title={isMuted ? 'Unmute tactile audio' : 'Mute tactical audio'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-zinc-600" />}
          </button>

          {/* Search Icon Trigger */}
          <button
            onClick={() => {
              tactileAudio.playClick();
              onOpenSearch();
            }}
            className="p-2.5 rounded-full text-zinc-700 hover:text-[#18181B] hover:bg-zinc-900/[0.05] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5CD8]"
            aria-label="Open search dialog"
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
            className="hidden sm:flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#18181B] hover:bg-[#27272A] text-white text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow-md active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#18181B]"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.4]" />
          </button>

          {/* Mobile Hamburger Menu Toggle (<lg) */}
          <button
            onClick={() => {
              tactileAudio.playClick();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-full text-zinc-700 hover:text-[#18181B] hover:bg-zinc-900/[0.05] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5CD8] cursor-pointer"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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

      {/* Accessible Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          role="navigation"
          aria-label="Mobile Navigation"
          className="lg:hidden px-4 pt-3 pb-6 border-t border-zinc-200 bg-[#FAF8F5]/98 backdrop-blur-xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleMobileNav(link.target)}
                className={`w-full text-left py-2 px-3 rounded-xl text-xs font-mono-code transition-colors ${
                  activeView === link.target
                    ? 'bg-[#18181B] text-white font-semibold shadow-xs'
                    : 'bg-white/80 text-zinc-700 hover:bg-white hover:text-[#18181B] border border-zinc-200/80'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-zinc-200/80 flex items-center justify-between gap-3">
            <button
              onClick={() => handleMobileNav('contact')}
              className="flex-1 py-2 px-3 rounded-xl bg-white border border-zinc-200 text-xs font-mono-code text-zinc-700 text-center hover:bg-zinc-50"
            >
              Contact / Feedback
            </button>
            <button
              onClick={() => {
                tactileAudio.playClick();
                setIsMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="flex-1 py-2 px-3 rounded-xl bg-[#4A5CD8] text-white text-xs font-mono-code text-center font-medium shadow-xs"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
