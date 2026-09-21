import React, { useEffect, useRef, useState } from 'react';
import { EntityReport } from '../../types/evidence';
import { MapPin, Navigation, ExternalLink, ShieldCheck, Eye, Layers, Sparkles, X } from 'lucide-react';
import { tactileAudio } from '../../utils/audio';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface InteractiveMapViewProps {
  entities: EntityReport[];
  selectedEntityId?: string | null;
  onSelectEntity?: (entity: EntityReport) => void;
  onOpenEntityDetail?: (entity: EntityReport) => void;
  onOpenEvidenceDrawer?: (entity: EntityReport) => void;
  className?: string;
  height?: string;
  showPreviewModal?: boolean;
}

export const InteractiveMapView: React.FC<InteractiveMapViewProps> = ({
  entities,
  selectedEntityId,
  onSelectEntity,
  onOpenEntityDetail,
  onOpenEvidenceDrawer,
  className = '',
  height = '540px',
  showPreviewModal = true,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});
  
  const googleApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
  const [mapSource, setMapSource] = useState<'google' | 'osm'>(googleApiKey ? 'google' : 'osm');
  const [activePreviewEntity, setActivePreviewEntity] = useState<EntityReport | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Filter entities that have valid coordinates
  const geocodedEntities = entities.filter(
    (e) => typeof e.latitude === 'number' && typeof e.longitude === 'number'
  );

  // Initialize or re-center Leaflet OSM Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Center coordinates: Connaught Place default (28.6328, 77.2195) or first entity
    const defaultCenter: [number, number] = geocodedEntities.length > 0 && geocodedEntities[0].latitude && geocodedEntities[0].longitude
      ? [geocodedEntities[0].latitude, geocodedEntities[0].longitude]
      : [28.6328, 77.2195];

    if (!leafletMapRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: defaultCenter,
        zoom: 12,
        zoomControl: false,
        attributionControl: true,
      });

      // OpenStreetMap: High-reliability open map tiles with ODbL attribution
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Add clean zoom control to top-right
      L.control.zoom({ position: 'topright' }).addTo(map);

      leafletMapRef.current = map;
      setIsMapLoaded(true);
    }

    const map = leafletMapRef.current;

    // Clear old markers
    Object.values(markersRef.current).forEach((marker) => marker.remove());
    markersRef.current = {};

    // Custom Editorial Pin Icon Factory
    const createEditorialIcon = (entity: EntityReport, isSelected: boolean) => {
      const score = Math.round(entity.evidenceConfidenceScore);
      const isSelectedClass = isSelected
        ? 'ring-4 ring-[#4A5CD8]/30 scale-110 shadow-lg shadow-[#4A5CD8]/40 bg-[#18181B] text-white'
        : 'bg-white text-[#18181B] hover:scale-105 shadow-md border border-zinc-200/90';

      const html = `
        <div class="relative group cursor-pointer transition-all duration-200">
          <div class="px-2.5 py-1.5 rounded-full font-mono-code text-[11px] font-bold flex items-center gap-1.5 ${isSelectedClass}">
            <div class="w-2 h-2 rounded-full ${isSelected ? 'bg-[#6B7CFF] animate-ping' : 'bg-emerald-500'}"></div>
            <span class="truncate max-w-[90px]">${entity.canonicalName.split(' ')[0]}</span>
            <span class="text-[9px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-zinc-100 text-zinc-600'}">${score}%</span>
          </div>
          <div class="w-2 h-2 bg-current rotate-45 mx-auto -mt-1 ${isSelected ? 'text-[#18181B]' : 'text-white border-r border-b border-zinc-200'}"></div>
        </div>
      `;

      return L.divIcon({
        className: 'custom-editorial-marker',
        html: html,
        iconSize: [120, 36],
        iconAnchor: [60, 36],
      });
    };

    // Add markers for all geocoded entities
    const bounds = L.latLngBounds([]);

    geocodedEntities.forEach((entity) => {
      if (entity.latitude && entity.longitude) {
        const isSelected = entity.id === selectedEntityId;
        const icon = createEditorialIcon(entity, isSelected);
        const marker = L.marker([entity.latitude, entity.longitude], { icon }).addTo(map);

        marker.on('click', () => {
          tactileAudio.playNodeHover();
          setActivePreviewEntity(entity);
          if (onSelectEntity) onSelectEntity(entity);
        });

        markersRef.current[entity.id] = marker;
        bounds.extend([entity.latitude, entity.longitude]);
      }
    });

    // Fit map bounds if entities exist
    if (geocodedEntities.length > 1) {
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
    } else if (geocodedEntities.length === 1 && geocodedEntities[0].latitude && geocodedEntities[0].longitude) {
      map.setView([geocodedEntities[0].latitude, geocodedEntities[0].longitude], 13);
    }

    // Invalidate map size after DOM mount and layout paint
    const timer = setTimeout(() => {
      if (leafletMapRef.current) {
        leafletMapRef.current.invalidateSize();
      }
    }, 150);

    let resizeObserver: ResizeObserver | null = null;
    if (mapContainerRef.current && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        if (leafletMapRef.current) {
          leafletMapRef.current.invalidateSize();
        }
      });
      resizeObserver.observe(mapContainerRef.current);
    }

    return () => {
      clearTimeout(timer);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [entities, selectedEntityId]);

  // Synchronize when selectedEntityId changes from entity card click
  useEffect(() => {
    if (!leafletMapRef.current || !selectedEntityId) return;
    const selected = entities.find((e) => e.id === selectedEntityId);
    if (selected && selected.latitude && selected.longitude) {
      leafletMapRef.current.flyTo([selected.latitude, selected.longitude], 14, {
        duration: 0.8,
      });
      if (showPreviewModal) {
        setActivePreviewEntity(selected);
      }
    }
  }, [selectedEntityId, entities, showPreviewModal]);

  return (
    <div
      style={{ height }}
      className={`relative rounded-2xl overflow-hidden border border-zinc-200/90 bg-[#F6F3ED] shadow-sm ${
        height === '100%' ? 'h-full w-full' : ''
      } ${className}`}
    >
      {/* Map Header Overlay */}
      <div className="absolute top-3 left-3 z-[400] flex items-center gap-2">
        <div className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-zinc-200/80 shadow-xs flex items-center gap-2">
          <Navigation className="w-3.5 h-3.5 text-[#4A5CD8]" />
          <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#18181B]">
            Geographic Intelligence
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>

        <div className="px-2.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/80 shadow-xs text-[10px] font-mono-code text-zinc-500">
          Source: {mapSource === 'google' ? 'Google Maps' : 'OpenStreetMap'}
        </div>
      </div>

      {/* Leaflet / Google Map Canvas */}
      <div
        ref={mapContainerRef}
        role="region"
        aria-label="Interactive map showing verified physical locations across Delhi NCR"
        tabIndex={0}
        style={{ height: '100%', minHeight: '100%' }}
        className="w-full h-full relative z-0 transition-opacity duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5CD8]"
      />

      {/* Interactive Entity Preview Bottom Modal / Drawer */}
      {showPreviewModal && activePreviewEntity && (
        <div className="absolute bottom-4 left-4 right-4 z-[450] max-w-md mx-auto sm:right-auto sm:left-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-white/98 backdrop-blur-xl border border-zinc-200/90 shadow-2xl shadow-zinc-900/10 space-y-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[9px] font-mono-code uppercase font-bold text-[#3444B8] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                    {activePreviewEntity.category}
                  </span>
                  <span className="text-[9px] font-mono-code text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-md">
                    {activePreviewEntity.evidenceList.length} Evidence Items
                  </span>
                </div>
                <h4 className="text-base font-editorial font-bold text-[#18181B] pt-1">
                  {activePreviewEntity.canonicalName}
                </h4>
              </div>

              <button
                onClick={() => setActivePreviewEntity(null)}
                className="p-1 rounded-full text-zinc-400 hover:text-[#18181B] hover:bg-zinc-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A5CD8] cursor-pointer"
                aria-label="Close place preview"
                title="Close preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Address & Coordinates */}
            <div className="flex items-center gap-1.5 text-xs text-zinc-600">
              <MapPin className="w-3.5 h-3.5 text-[#4A5CD8] shrink-0" />
              <span className="truncate">{activePreviewEntity.formattedAddress || activePreviewEntity.location}</span>
            </div>

            {/* Coverage Metric */}
            <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-zinc-200/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-[11px] font-mono-code text-zinc-600">
                  Evidence Coverage:
                </span>
              </div>
              <span className="text-xs font-mono-code font-bold text-[#18181B]">
                {Math.round(activePreviewEntity.evidenceConfidenceScore)}%
              </span>
            </div>

            {/* Key Aspects Chips */}
            {activePreviewEntity.aspects && activePreviewEntity.aspects.length > 0 && (
              <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                {activePreviewEntity.aspects.slice(0, 3).map((asp) => (
                  <span
                    key={asp.id}
                    className="text-[10px] font-mono-code px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-700"
                  >
                    {asp.name} ({Math.round(asp.positiveRatio)}%)
                  </span>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center gap-2 pt-1 border-t border-zinc-100">
              {onOpenEntityDetail && (
                <button
                  onClick={() => {
                    tactileAudio.playClick();
                    onOpenEntityDetail(activePreviewEntity);
                  }}
                  className="flex-1 px-3 py-2 rounded-xl bg-[#18181B] hover:bg-[#27272A] text-white text-xs font-medium tracking-wide flex items-center justify-center gap-1.5 transition-all shadow-xs"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#9B87F5]" />
                  <span>Open Intelligence</span>
                </button>
              )}

              {onOpenEvidenceDrawer && (
                <button
                  onClick={() => {
                    tactileAudio.playClick();
                    onOpenEvidenceDrawer(activePreviewEntity);
                  }}
                  className="px-3 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-[#18181B] text-xs font-medium flex items-center justify-center gap-1 transition-all"
                >
                  <Eye className="w-3.5 h-3.5 text-zinc-600" />
                  <span>Evidence</span>
                </button>
              )}

              {activePreviewEntity.googleMapsUrl && (
                <a
                  href={activePreviewEntity.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl border border-zinc-200 hover:bg-zinc-50 text-zinc-600 transition-colors"
                  title="Open in Google Maps"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Attribution footer indicator */}
      <div className="absolute bottom-2 right-2 z-[400] px-2 py-0.5 rounded-md bg-white/80 backdrop-blur-xs text-[9px] font-mono-code text-zinc-500 border border-zinc-200/50">
        © OpenStreetMap contributors • CartoDB Positron
      </div>
    </div>
  );
};
