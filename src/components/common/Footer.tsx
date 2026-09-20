import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { tactileAudio } from '../../utils/audio';
import { NavTarget } from './GlassNav';

interface FooterProps {
  onNavClick: (target: NavTarget) => void;
  githubUrl?: string; // Only rendered if actual URL is known
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, githubUrl }) => {
  return (
    <footer className="border-t border-zinc-900/[0.08] bg-[#F6F3ED] text-zinc-600 py-16 relative overflow-hidden">
      {/* Soft warm ambient lighting */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[320px] bg-gradient-to-t from-[#EFEAE2] via-[#FAF8F5]/60 to-transparent blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Brand & Editorial Tagline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-zinc-900/[0.08]">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#18181B]" />
              <span className="font-editorial text-2xl tracking-tight text-[#18181B] font-medium">
                ReviewLens
              </span>
            </div>
            <p className="text-base text-zinc-700 font-editorial italic">
              "Don't trust one rating. See the evidence."
            </p>
            <p className="text-xs text-zinc-500 font-light max-w-md pt-1">
              An evidence-driven decision intelligence engine cross-examining public signals, resolving entities, and identifying recurring contradictions without opaque rating averages.
            </p>
          </div>

          {/* Direct Contact Anchor */}
          <div>
            <button
              onClick={() => {
                tactileAudio.playClick();
                onNavClick('contact');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white hover:bg-zinc-50 border border-zinc-200 text-xs font-mono-code text-zinc-800 transition-colors shadow-xs cursor-pointer"
            >
              <span>Contact / Suggestion</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </button>
          </div>
        </div>

        {/* Minimal Navigation Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-xs">
          <div className="space-y-2.5">
            <h4 className="font-mono-code font-bold text-[#18181B] uppercase tracking-wider text-[11px]">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    tactileAudio.playClick();
                    onNavClick('hero');
                  }}
                  className="text-zinc-600 hover:text-[#18181B] transition-colors text-left cursor-pointer"
                >
                  Research
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    tactileAudio.playClick();
                    onNavClick('map');
                  }}
                  className="text-zinc-600 hover:text-[#18181B] transition-colors text-left cursor-pointer"
                >
                  Map
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    tactileAudio.playClick();
                    onNavClick('compare');
                  }}
                  className="text-zinc-600 hover:text-[#18181B] transition-colors text-left cursor-pointer"
                >
                  Compare
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="font-mono-code font-bold text-[#18181B] uppercase tracking-wider text-[11px]">
              Transparency
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    tactileAudio.playClick();
                    onNavClick('sources');
                  }}
                  className="text-zinc-600 hover:text-[#18181B] transition-colors text-left cursor-pointer"
                >
                  Sources & Health
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    tactileAudio.playClick();
                    onNavClick('methodology');
                  }}
                  className="text-zinc-600 hover:text-[#18181B] transition-colors text-left cursor-pointer"
                >
                  Methodology
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    tactileAudio.playClick();
                    onNavClick('contact');
                  }}
                  className="text-zinc-600 hover:text-[#18181B] transition-colors text-left cursor-pointer"
                >
                  Contact / Suggestion
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    tactileAudio.playClick();
                    onNavClick('privacy');
                  }}
                  className="text-zinc-600 hover:text-[#18181B] transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    tactileAudio.playClick();
                    onNavClick('terms');
                  }}
                  className="text-zinc-600 hover:text-[#18181B] transition-colors text-left cursor-pointer"
                >
                  Terms of Use
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="font-mono-code font-bold text-[#18181B] uppercase tracking-wider text-[11px]">
              Live Connectors
            </h4>
            <ul className="space-y-2 text-zinc-500">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>OpenStreetMap</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Wikimedia</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Google Places (Auth)</span>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="font-mono-code font-bold text-[#18181B] uppercase tracking-wider text-[11px]">
              Discussion & Web
            </h4>
            <ul className="space-y-2 text-zinc-500">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Reddit (OAuth)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Web Search (API)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Benchmark Corpus</span>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5 sm:col-span-2 md:col-span-2">
            <h4 className="font-mono-code font-bold text-[#18181B] uppercase tracking-wider text-[11px]">
              Evidence Policy
            </h4>
            <p className="text-zinc-500 leading-relaxed font-light text-[11px]">
              ReviewLens enforces zero data fabrication. When external credentials are absent, the system transparently indicates unconfigured status and relies solely on verified open registries and benchmark baselines.
            </p>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[#18181B] hover:text-[#3444B8] font-mono-code text-[11px] pt-1"
              >
                <span>GitHub Repository</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        {/* Bottom Bar with Transparency Note */}
        <div className="pt-8 border-t border-zinc-900/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} ReviewLens. All rights reserved.</span>
            <span className="hidden sm:inline text-zinc-300">•</span>
            {/* Public-project transparency note */}
            <span className="text-zinc-500 italic">
              ReviewLens distinguishes live source evidence from illustrative/demo data.
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono-code text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Open Decision Intelligence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
