import React from 'react';
import { ArrowLeft, Compass, Search } from 'lucide-react';
import { tactileAudio } from '../../utils/audio';
import { SectionMarker } from './SectionMarker';

interface NotFoundPageProps {
  onHome: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onHome }) => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#18181B] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-24 text-center relative overflow-hidden">
      {/* Background ambient gradient */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#EFEAE2]/50 via-transparent to-transparent blur-3xl -z-10" />

      <div className="max-w-md space-y-6">
        <SectionMarker
          number="404"
          title="ROUTE UNRESOLVED"
          align="center"
          className="mb-2"
        />

        <h1 className="text-4xl sm:text-6xl font-editorial font-normal tracking-tight text-[#18181B]">
          Evidence Not Found
        </h1>

        <p className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed">
          The requested dossier, entity node, or navigation route could not be resolved in the current research corpus.
        </p>

        <div className="pt-4 flex items-center justify-center gap-3">
          <button
            onClick={() => {
              tactileAudio.playClick();
              onHome();
            }}
            className="px-6 py-3 rounded-full bg-[#18181B] hover:bg-[#27272A] text-white text-xs font-medium tracking-wide transition-all shadow-xs cursor-pointer flex items-center gap-2"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Return to Query Workspace</span>
          </button>
        </div>
      </div>
    </div>
  );
};
