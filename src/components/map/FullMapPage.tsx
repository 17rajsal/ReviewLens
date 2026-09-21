import React, { useState } from 'react';
import { EntityReport } from '../../types/evidence';
import { InteractiveMapView } from './InteractiveMapView';
import { ArrowLeft, Search, Navigation, MapPin, Sparkles, Eye, Filter, School, Utensils } from 'lucide-react';
import { tactileAudio } from '../../utils/audio';
import { delhiColleges } from '../../data/delhiCollegesData';
import { delhiRestaurants } from '../../data/delhiRestaurantsData';

const ALL_DELHI_ENTITIES: EntityReport[] = [...delhiColleges, ...delhiRestaurants];

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
  const [scope, setScope] = useState<'all' | 'query'>(entities && entities.length > 0 ? 'query' : 'all');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'college' | 'restaurant'>('all');
  const [localityFilter, setLocalityFilter] = useState<string>('all');
  const [searchFilter, setSearchFilter] = useState('');
  const [selectedEntityId, setSelectedEntityId] = useState<string | null>(null);

  // Base list of entities based on selected scope
  const baseList = scope === 'query' && entities && entities.length > 0 ? entities : ALL_DELHI_ENTITIES;

  const filteredEntities = baseList.filter((e) => {
    // Category filter
    const isCollege =
      e.category.toLowerCase().includes('education') ||
      e.category.toLowerCase().includes('college') ||
      e.category.toLowerCase().includes('university') ||
      e.category.toLowerCase().includes('institute');

    if (categoryFilter === 'college' && !isCollege) return false;
    if (categoryFilter === 'restaurant' && isCollege) return false;

    // Locality filter
    if (localityFilter !== 'all') {
      const loc = e.location.toLowerCase();
      if (localityFilter === 'north' && !loc.includes('north')) return false;
      if (localityFilter === 'south' && !loc.includes('south')) return false;
      if (localityFilter === 'central' && !(loc.includes('central') || loc.includes('connaught') || loc.includes('barakhamba'))) return false;
      if (localityFilter === 'west' && !(loc.includes('west') || loc.includes('janakpuri') || loc.includes('rajouri') || loc.includes('punjabi bagh'))) return false;
      if (localityFilter === 'east' && !(loc.includes('east') || loc.includes('surajmal') || loc.includes('shahdara') || loc.includes('dilshad'))) return false;
      if (localityFilter === 'dwarka' && !loc.includes('dwarka')) return false;
      if (localityFilter === 'rohini' && !(loc.includes('rohini') || loc.includes('pitampura'))) return false;
    }

    // Search filter
    if (searchFilter.trim()) {
      const q = searchFilter.toLowerCase();
      const match =
        e.canonicalName.toLowerCase().includes(q) ||
        e.location.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q) ||
        e.highlightTag.toLowerCase().includes(q);
      if (!match) return false;
    }

    return true;
  });

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

          {/* Quick Search */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Search by name, cuisine, or area..."
              className="w-full pl-9 pr-4 py-2 rounded-full bg-white border border-zinc-200 text-xs font-mono-code placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#4A5CD8]/30 shadow-xs"
            />
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Scope / Category Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-100/80 border border-zinc-200">
              {entities && entities.length > 0 && (
                <button
                  onClick={() => {
                    tactileAudio.playClick();
                    setScope('query');
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-mono-code transition-all ${
                    scope === 'query'
                      ? 'bg-white text-[#18181B] font-semibold shadow-xs'
                      : 'text-zinc-600 hover:text-[#18181B]'
                  }`}
                >
                  Query Results ({entities.length})
                </button>
              )}
              <button
                onClick={() => {
                  tactileAudio.playClick();
                  setScope('all');
                }}
                className={`px-3 py-1 rounded-lg text-xs font-mono-code transition-all ${
                  scope === 'all'
                    ? 'bg-white text-[#18181B] font-semibold shadow-xs'
                    : 'text-zinc-600 hover:text-[#18181B]'
                }`}
              >
                All Verified Delhi ({ALL_DELHI_ENTITIES.length})
              </button>
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                onClick={() => {
                  tactileAudio.playClick();
                  setCategoryFilter('all');
                }}
                className={`px-3 py-1 rounded-full text-xs font-mono-code transition-all ${
                  categoryFilter === 'all'
                    ? 'bg-[#18181B] text-white font-medium'
                    : 'bg-zinc-50 border border-zinc-200 text-zinc-600 hover:bg-zinc-100'
                }`}
              >
                All Categories
              </button>
              <button
                onClick={() => {
                  tactileAudio.playClick();
                  setCategoryFilter('college');
                }}
                className={`px-3 py-1 rounded-full text-xs font-mono-code flex items-center gap-1 transition-all ${
                  categoryFilter === 'college'
                    ? 'bg-[#4A5CD8] text-white font-medium'
                    : 'bg-zinc-50 border border-zinc-200 text-zinc-600 hover:bg-zinc-100'
                }`}
              >
                <School className="w-3 h-3" />
                <span>Colleges (47)</span>
              </button>
              <button
                onClick={() => {
                  tactileAudio.playClick();
                  setCategoryFilter('restaurant');
                }}
                className={`px-3 py-1 rounded-full text-xs font-mono-code flex items-center gap-1 transition-all ${
                  categoryFilter === 'restaurant'
                    ? 'bg-[#4A5CD8] text-white font-medium'
                    : 'bg-zinc-50 border border-zinc-200 text-zinc-600 hover:bg-zinc-100'
                }`}
              >
                <Utensils className="w-3 h-3" />
                <span>Restaurants & Cafes (53)</span>
              </button>
            </div>
          </div>

          {/* Region / Locality Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap pt-2 border-t border-zinc-100">
            <span className="text-[10px] font-mono-code text-zinc-400 uppercase tracking-wider font-semibold mr-1">
              Area:
            </span>
            {[
              { id: 'all', label: 'All Delhi NCR' },
              { id: 'north', label: 'North Campus / Civil Lines' },
              { id: 'south', label: 'South Delhi' },
              { id: 'central', label: 'Central / Connaught Place' },
              { id: 'west', label: 'West Delhi' },
              { id: 'east', label: 'East Delhi / Shahdara' },
              { id: 'dwarka', label: 'Dwarka' },
              { id: 'rohini', label: 'Rohini / Pitampura' },
            ].map((loc) => (
              <button
                key={loc.id}
                onClick={() => {
                  tactileAudio.playClick();
                  setLocalityFilter(loc.id);
                }}
                className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono-code transition-all ${
                  localityFilter === loc.id
                    ? 'bg-zinc-800 text-white font-medium'
                    : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                }`}
              >
                {loc.label}
              </button>
            ))}
          </div>
        </div>

        {/* Side-by-Side: Entity List and Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Entity List Column */}
          <div className="lg:col-span-4 space-y-3 max-h-[750px] overflow-y-auto pr-1">
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs font-mono-code text-zinc-500 uppercase tracking-wider font-bold block">
                DISCOVERED PLACES ({filteredEntities.length})
              </span>
              <span className="text-[10px] font-mono-code text-zinc-400">
                Lat 28.4°–28.9°N, Lon 76.8°–77.4°E
              </span>
            </div>

            {filteredEntities.length === 0 ? (
              <div className="p-8 text-center rounded-2xl bg-white border border-zinc-200 space-y-2">
                <p className="text-xs text-zinc-500">No places match the active filters.</p>
                <button
                  onClick={() => {
                    setCategoryFilter('all');
                    setLocalityFilter('all');
                    setSearchFilter('');
                  }}
                  className="text-xs font-mono-code text-[#4A5CD8] underline font-medium"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              filteredEntities.map((ent) => {
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

                    <p className="text-[11px] text-zinc-600 line-clamp-2 leading-relaxed">
                      {ent.summaryVerdict}
                    </p>

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
              })
            )}
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
