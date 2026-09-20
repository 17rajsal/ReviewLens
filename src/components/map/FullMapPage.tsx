import React, { useState } from 'react';
import { EntityReport } from '../../types/evidence';
import { InteractiveMapView } from './InteractiveMapView';
import { ArrowLeft, Search, Navigation, MapPin, ShieldCheck, Sparkles, Eye } from 'lucide-react';
import { tactileAudio } from '../../utils/audio';

interface FullMapPageProps {
  entities: EntityReport[];
  onBack: () => void;
  onOpenEntityDetail: (entity: EntityReport) => void;
  onOpenEvidenceDrawer: (entity: EntityReport) => void;
}

export const FullMapPage: React.FC<FullMapPageProps> = ({
  entities,
  onBack,
  onOpenEntityDetail,
  onOpenEvidenceDrawer,
}) => {
  const [searchFilter, setSearchFilter] = useState('');
  const [selectedEntityId, setSelectedEntityId] = useState<string | null>(entities[0]?.id || null);

  const filteredEntities = entities.filter((e) =>
    e.canonicalName.toLowerCase().includes(searchFilter.toLowerCase()) ||
    e.location.toLowerCase().includes(searchFilter.toLowerCase()) ||
    e.category.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#FAF8F5] text-[#18181B] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-20 left-1/4 w-[600px] h-[400px] bg-[#6B7CFF]/[0.03] rounded-full blur-[140px] -z-10" />
      <div className="pointer-events-none absolute top-80 right-1/4 w-[500px] h-[400px] bg-[#F59E72]/[0.03] rounded-full blur-[160px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Navigation & Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200/80">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                tactileAudio.playClick();
                onBack();
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-mono-code text-[#4A5CD8] hover:text-[#2A3CB0] transition-all shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Research</span>
            </button>

            <span className="text-zinc-300">•</span>

            <span className="text-[11px] font-mono-code uppercase font-semibold text-zinc-500 flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5 text-[#4A5CD8]" />
              Geographic Intelligence Explorer
            </span>
          </div>

          {/* Quick Filter */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Filter by name or area..."
              className="w-full pl-9 pr-4 py-2 rounded-full bg-white border border-zinc-200 text-xs font-mono-code placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#4A5CD8]/30 shadow-xs"
            />
          </div>
        </div>

        {/* Side-by-Side: Entity List and Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Entity List Column */}
          <div className="lg:col-span-4 space-y-3 max-h-[750px] overflow-y-auto pr-1">
            <span className="text-xs font-mono-code text-zinc-500 uppercase tracking-wider font-bold block pb-1">
              DISCOVERED PLACES ({filteredEntities.length})
            </span>

            {filteredEntities.map((ent) => {
              const isSelected = ent.id === selectedEntityId;
              return (
                <div
                  key={ent.id}
                  onClick={() => {
                    tactileAudio.playNodeHover();
                    setSelectedEntityId(ent.id);
                  }}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-2 ${
                    isSelected
                      ? 'bg-white border-[#4A5CD8] shadow-md ring-2 ring-[#4A5CD8]/20'
                      : 'bg-white/80 border-zinc-200/80 hover:border-zinc-300 hover:bg-white shadow-2xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[9px] font-mono-code uppercase font-bold text-[#3444B8] bg-blue-50 px-2 py-0.5 rounded-md">
                        {ent.category}
                      </span>
                      <h4 className="text-sm font-editorial font-bold text-[#18181B] pt-1">
                        {ent.canonicalName}
                      </h4>
                    </div>
                    <span className="text-xs font-mono-code font-bold text-zinc-700">
                      {Math.round(ent.evidenceConfidenceScore)}%
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                    <MapPin className="w-3.5 h-3.5 text-[#4A5CD8] shrink-0" />
                    <span className="truncate">{ent.location}</span>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-zinc-100">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        tactileAudio.playClick();
                        onOpenEntityDetail(ent);
                      }}
                      className="flex-1 py-1.5 rounded-xl bg-[#18181B] hover:bg-[#27272A] text-white text-[11px] font-medium flex items-center justify-center gap-1"
                    >
                      <Sparkles className="w-3 h-3 text-[#9B87F5]" />
                      <span>Details</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        tactileAudio.playClick();
                        onOpenEvidenceDrawer(ent);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-[#18181B] text-[11px] font-medium flex items-center gap-1"
                    >
                      <Eye className="w-3 h-3 text-zinc-600" />
                      <span>Evidence</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Full Interactive Map Canvas */}
          <div className="lg:col-span-8">
            <InteractiveMapView
              entities={filteredEntities}
              selectedEntityId={selectedEntityId}
              onSelectEntity={(ent) => setSelectedEntityId(ent.id)}
              onOpenEntityDetail={onOpenEntityDetail}
              onOpenEvidenceDrawer={onOpenEvidenceDrawer}
              height="750px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
