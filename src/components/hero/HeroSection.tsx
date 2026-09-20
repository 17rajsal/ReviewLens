import React from 'react';
import { motion } from 'framer-motion';
import { ResearchInput } from './ResearchInput';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { tactileAudio } from '../../utils/audio';

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearch }) => {
  const categoryCards = [
    {
      id: 'restaurants',
      title: 'Restaurants',
      subtitle: 'Real food experiences',
      image: '/images/category-restaurants.jpg',
      query: 'Best Italian restaurants in Connaught Place under ₹1500',
    },
    {
      id: 'colleges',
      title: 'Colleges',
      subtitle: 'Student insights',
      image: '/images/category-colleges.jpg',
      query: 'B.Tech CSE colleges in Delhi under ₹2 lakh/year with good coding culture',
    },
    {
      id: 'laptops',
      title: 'Laptops',
      subtitle: 'Buyer opinions',
      image: '/images/category-laptops.jpg',
      query: 'Best budget laptops for software engineering and programming under ₹60000',
    },
    {
      id: 'travel',
      title: 'Travel',
      subtitle: 'Places & experiences',
      image: '/images/category-travel.jpg',
      query: 'Family-friendly heritage hotels in Jaipur with pool',
    },
  ];

  const handleCategoryClick = (query: string) => {
    tactileAudio.playClick();
    onSearch(query);
  };

  const handleScrollToStory = () => {
    tactileAudio.playClick();
    const el = document.getElementById('storytelling-container');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden bg-transparent text-[#18181B]">
      {/* ========================================================================= */}
      {/* HERO SECTION — FIRST VIEWPORT (MATCHING IMAGE 1 EXACTLY)                  */}
      {/* ========================================================================= */}
      <section className="relative min-h-screen pt-36 sm:pt-40 lg:pt-44 pb-8 sm:pb-12 flex flex-col justify-between overflow-hidden">
        {/* Full-Screen Scenic Background Image (z-0) */}
        <div
          className="absolute inset-0 bg-cover bg-center sm:bg-[center_top] bg-no-repeat pointer-events-none z-0 transition-all duration-700"
          style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
        />

        {/* Minimal Subtle Readability Treatment on the Left (z-1) — Reduced to prevent washout */}
        <div
          className="absolute inset-0 pointer-events-none z-[1] hidden sm:block"
          style={{
            background:
              'linear-gradient(90deg, rgba(250,248,245,0.60) 0%, rgba(250,248,245,0.28) 32%, rgba(250,248,245,0.04) 58%, rgba(250,248,245,0.00) 100%)',
          }}
        />
        {/* Mobile Readability Overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-[1] sm:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(250,248,245,0.80) 0%, rgba(250,248,245,0.50) 65%, rgba(250,248,245,0.10) 100%)',
          }}
        />

        {/* Right-Side Editorial Text Annotation (Natural integration above scenic chair) */}
        <div className="hidden lg:block absolute right-8 sm:right-14 xl:right-24 bottom-32 sm:bottom-36 xl:bottom-44 text-right pointer-events-none select-none z-10">
          <p className="font-editorial italic text-zinc-800 text-base xl:text-lg leading-snug">
            A more
            <br />
            informed you.
            <br />
            <span className="text-[#3444B8] font-medium">A brighter</span>
            <br />
            tomorrow.
          </p>
        </div>

        {/* Central Hero Body — Positioned Asymmetrically 7-9% from Left and 20-23% from Top */}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN: Large Typography, Annotation, Search */}
            <div className="lg:col-span-8 xl:col-span-7 space-y-6 text-left">

              {/* Large Editorial Serif Headline Matching Image 1 Visual Scale */}
              <div className="space-y-1 relative">
                <h1
                  className="font-editorial font-normal text-[#18181B]"
                  style={{
                    fontSize: 'clamp(4rem, 5.8vw, 6.5rem)',
                    lineHeight: 0.88,
                    letterSpacing: '-0.045em',
                  }}
                >
                  <span className="block">Don’t trust one</span>
                  <span className="block">rating.</span>
                  <span className="block pt-2 italic text-[#4A5CD8] font-editorial">
                    See the evidence.
                  </span>
                </h1>

                {/* Handwritten Script Annotation with Curved Arrow (Caveat font, larger & prominent) */}
                <div className="hidden sm:block absolute top-2 right-0 lg:-right-8 translate-x-4 pointer-events-none select-none">
                  <div className="text-zinc-700 font-script text-2xl sm:text-3xl leading-tight transform rotate-[-4deg]">
                    <span>Real opinions</span>
                    <br />
                    <span className="pl-3">Real experiences</span>
                    <br />
                    <span className="pl-6">A clearer tomorrow</span>
                  </div>
                  {/* Curved hand-drawn SVG arrow pointing down toward search input */}
                  <svg
                    className="w-14 h-14 text-zinc-600/90 -mt-1 ml-16 transform rotate-[10deg]"
                    viewBox="0 0 60 60"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10,12 C25,18 40,32 46,44" />
                    <polyline points="38,44 48,46 44,36" />
                  </svg>
                </div>
              </div>

              {/* Supporting Copy (font-size: 1.05rem, line-height: 1.5) */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-zinc-700 font-light max-w-xl"
                style={{ fontSize: '1.05rem', lineHeight: '1.5' }}
              >
                Search across public sources, compare perspectives, identify conflicts, and trace conclusions back to evidence.
              </motion.p>

              {/* Prominent Large Search Bar & Popular Chips */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="pt-1"
              >
                <ResearchInput onSearch={onSearch} />
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Open vista allowing the bright sunrise, mountains, lake & terrace to shine through */}
            <div className="hidden lg:block lg:col-span-4 xl:col-span-5 h-full min-h-[300px] pointer-events-none" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* LOWER VIEWPORT: Clean Scroll Indicator (z-10)                             */}
        {/* ========================================================================= */}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 w-full pt-8 pb-4 relative z-10">
          <button
            onClick={handleScrollToStory}
            className="inline-flex items-center gap-2.5 text-zinc-600 hover:text-[#18181B] transition-colors group cursor-pointer"
            title="Scroll to explore evidence methodology"
          >
            <div className="w-8 h-8 rounded-full border border-zinc-300/80 bg-white/75 backdrop-blur-xs flex items-center justify-center text-zinc-700 group-hover:border-zinc-500 group-hover:scale-105 transition-all shadow-xs">
              <ArrowDown className="w-3.5 h-3.5 stroke-[2]" />
            </div>
            <span className="text-[10px] font-mono-code tracking-[0.2em] uppercase font-semibold text-zinc-500 group-hover:text-zinc-800">
              SCROLL TO EXPLORE
            </span>
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECOND SECTION: "From everyday choices to bigger decisions."               */}
      {/* ========================================================================= */}
      <section id="storytelling-container" className="py-20 border-t border-zinc-200/80 bg-[#FAF8F5] relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Headline & Explore Trigger */}
            <div className="lg:col-span-4 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider text-zinc-500 font-semibold">
                <span className="w-5 h-[1.5px] bg-zinc-400" />
                <span>EXPLORE WHAT MATTERS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-editorial font-normal text-[#18181B] leading-tight">
                From everyday choices
                <br />
                to bigger decisions.
              </h2>

              <p className="text-sm text-zinc-600 font-light leading-relaxed">
                ReviewLens brings scattered public evidence into one clear, traceable research experience.
              </p>

              <button
                onClick={() => {
                  tactileAudio.playClick();
                  const el = document.getElementById('storytelling-container');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-700 hover:text-[#18181B] transition-all shadow-xs cursor-pointer"
              >
                <ArrowDown className="w-3.5 h-3.5 text-zinc-500" />
                <span>SCROLL TO EXPLORE</span>
              </button>
            </div>

            {/* Right: 4 Category Cards from Reference */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {categoryCards.map((cat) => (
                  <div
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.query)}
                    className="group cursor-pointer rounded-2xl bg-white border border-zinc-200/80 hover:border-zinc-300 p-2.5 shadow-sm hover:shadow-md transition-all duration-300 space-y-2.5"
                  >
                    {/* Image Preview Container */}
                    <div className="w-full h-24 sm:h-28 rounded-xl overflow-hidden bg-zinc-100 relative">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Metadata & Minimal Arrow */}
                    <div className="flex items-end justify-between px-1 pb-1">
                      <div>
                        <h4 className="text-xs font-bold text-[#18181B] group-hover:text-[#4A5CD8] transition-colors">
                          {cat.title}
                        </h4>
                        <p className="text-[10px] text-zinc-500 font-light">
                          {cat.subtitle}
                        </p>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-zinc-100 group-hover:bg-[#18181B] text-zinc-600 group-hover:text-white flex items-center justify-center transition-colors">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Right Margin Vertical Annotation */}
        <div className="hidden xl:flex flex-col items-center justify-center gap-4 absolute right-6 top-1/2 -translate-y-1/2 text-[9px] font-mono-code text-zinc-400 tracking-[0.2em] uppercase select-none pointer-events-none">
          <div className="writing-vertical-rl rotate-180">
            DISCOVER • COMPARE • UNDERSTAND • DECIDE
          </div>
        </div>
      </section>
    </div>
  );
};
