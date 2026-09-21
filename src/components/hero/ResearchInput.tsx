import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { tactileAudio } from '../../utils/audio';

interface ResearchInputProps {
  onSearch: (query: string) => void;
  initialQuery?: string;
}

export const ResearchInput: React.FC<ResearchInputProps> = ({ onSearch, initialQuery = '' }) => {
  const [query, setQuery] = useState(initialQuery);
  const [isFocused, setIsFocused] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const rotatingPlaceholders = [
    'Best Italian restaurants in Connaught Place',
    'B.Tech CSE colleges in Delhi under ₹2 lakh/year',
    'Best budget laptops for engineering under ₹60000',
    'Family-friendly heritage hotels in Jaipur with pool',
  ];

  const popularPills = [
    { label: 'Best pizza in Delhi', query: 'Best pizza restaurants in Delhi with authentic woodfired crust' },
    { label: 'Top B.Tech colleges', query: 'B.Tech CSE colleges in Delhi under ₹2 lakh/year with good coding culture' },
    { label: 'Laptops under ₹60,000', query: 'Best budget laptops for software engineering and programming under ₹60000' },
    { label: 'Travel destinations', query: 'Family-friendly heritage hotels in Jaipur with pool' },
  ];

  useEffect(() => {
    if (isFocused || query.length > 0) return;
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % rotatingPlaceholders.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isFocused, query]);

  // Keyboard shortcut listener: Press '/' to focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
        tactileAudio.playClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalQuery = query.trim() || rotatingPlaceholders[placeholderIndex];
    if (!finalQuery) return;
    tactileAudio.playResolve();
    onSearch(finalQuery);
  };

  const handleSelectPill = (q: string) => {
    tactileAudio.playClick();
    setQuery(q);
    onSearch(q);
  };

  return (
    <div className="w-full max-w-[660px] space-y-3.5">
      {/* Reference Large Rounded Pill Search Input (Height: 64-68px) */}
      <form onSubmit={handleSubmit} className="relative group">
        <div
          className={`relative flex items-center w-full h-[64px] sm:h-[68px] rounded-full bg-white/90 backdrop-blur-xl border transition-all duration-300 shadow-xl shadow-zinc-900/[0.05] pl-6 pr-2.5 ${
            isFocused
              ? 'border-zinc-400 ring-2 ring-[#4A5CD8]/25 shadow-2xl shadow-zinc-900/[0.10]'
              : 'border-white/90 hover:border-zinc-300'
          }`}
        >
          {/* Search Icon */}
          <div className="flex-shrink-0 text-zinc-500 mr-3.5" aria-hidden="true">
            <Search className="w-5 h-5 stroke-[2]" />
          </div>

          {/* Accessible Form Label */}
          <label htmlFor="research-query-input" className="sr-only">
            Search entities, colleges, restaurants, or research topics
          </label>

          {/* Text Input */}
          <input
            id="research-query-input"
            name="query"
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={`Search anything... e.g. ${rotatingPlaceholders[placeholderIndex]}`}
            className="w-full bg-transparent text-sm sm:text-base text-[#18181B] placeholder-zinc-400 focus:outline-none tracking-tight font-normal pr-4"
          />

          {/* Discreet Desktop Keyboard Shortcut Hint */}
          {!isFocused && !query && (
            <div className="hidden sm:flex items-center mr-3 px-2 py-0.5 rounded border border-zinc-200/90 text-[10px] font-mono-code text-zinc-400 pointer-events-none">
              /
            </div>
          )}

          {/* Circular Dark Charcoal Submit Button matching Image 1 */}
          <button
            type="submit"
            aria-label="Submit search query"
            className="flex-shrink-0 w-12 h-12 rounded-full bg-[#18181B] hover:bg-[#27272A] text-white flex items-center justify-center transition-all shadow-md active:scale-95 group-hover:scale-105 cursor-pointer"
          >
            <ArrowRight className="w-4 h-4 stroke-[2.2]" />
          </button>
        </div>
      </form>

      {/* Reference "Popular:" Pill Controls */}
      <div className="flex items-center gap-2 flex-wrap pt-0.5 text-xs text-zinc-600">
        <span className="font-medium text-zinc-700">Popular:</span>
        {popularPills.map((pill, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSelectPill(pill.query)}
            className="px-3.5 py-1.5 rounded-full bg-white/75 hover:bg-white border border-white/90 hover:border-zinc-300 text-zinc-700 hover:text-[#18181B] transition-all shadow-xs hover:shadow-sm cursor-pointer"
          >
            {pill.label}
          </button>
        ))}
      </div>
    </div>
  );
};
