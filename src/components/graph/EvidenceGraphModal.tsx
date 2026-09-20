import React, { useState, useEffect, useMemo } from 'react';
import { EntityReport, SentimentType } from '../../types/evidence';
import { X, ZoomIn, ZoomOut, RotateCcw, Compass, ChevronRight, Layers, ExternalLink } from 'lucide-react';
import { tactileAudio } from '../../utils/audio';

interface EvidenceGraphModalProps {
  isOpen: boolean;
  onClose: () => void;
  entity: EntityReport;
  allEntities: EntityReport[];
  onSelectEntity: (entity: EntityReport) => void;
}

interface Node {
  id: string;
  label: string;
  type: 'entity' | 'aspect' | 'source' | 'claim';
  sentiment?: SentimentType;
  x: number;
  y: number;
  snippet?: string;
  count?: number;
  parentId?: string;
  aspectId?: string;
  color: string;
  glowColor: string;
}

interface Edge {
  id: string;
  sourceId: string;
  targetId: string;
  sentiment?: SentimentType;
  pathType: 'default' | 'corroborating' | 'contradiction';
  color: string;
}

export const EvidenceGraphModal: React.FC<EvidenceGraphModalProps> = ({
  isOpen,
  onClose,
  entity,
  allEntities,
  onSelectEntity,
}) => {
  const [activeEntity, setActiveEntity] = useState<EntityReport>(entity);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [expandedAspectIds, setExpandedAspectIds] = useState<Set<string>>(new Set());
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setActiveEntity(entity);
    if (entity.aspects.length > 0) {
      setExpandedAspectIds(new Set([`asp-${entity.aspects[0].id}`]));
    }
  }, [entity]);

  // Generate 4-tier topology: Entity -> Aspect -> Source -> Claim
  const { nodes, edges } = useMemo(() => {
    const nList: Node[] = [];
    const eList: Edge[] = [];

    // LEVEL 0: Entity Root (White / Lavender Blue)
    const rootId = activeEntity.id;
    nList.push({
      id: rootId,
      label: activeEntity.canonicalName.split(' (')[0],
      type: 'entity',
      x: 120,
      y: 320,
      snippet: activeEntity.summaryVerdict,
      color: '#4A5CD8',
      glowColor: 'rgba(74, 92, 216, 0.2)',
    });

    // LEVEL 1: Aspects (Soft Lavender)
    const aspectY = [140, 230, 320, 410, 500];
    activeEntity.aspects.forEach((asp, aspIdx) => {
      const aspId = `asp-${asp.id}`;
      const yPos = aspectY[aspIdx % aspectY.length];
      const isExpanded = expandedAspectIds.has(aspId);

      nList.push({
        id: aspId,
        label: asp.name,
        type: 'aspect',
        sentiment: asp.sentiment,
        x: 360,
        y: yPos,
        snippet: asp.summary,
        count: asp.evidenceCount,
        parentId: rootId,
        color: '#6B7CFF',
        glowColor: 'rgba(107, 124, 255, 0.2)',
      });

      // Edge from Entity to Aspect
      const isContradiction = asp.sentiment === 'mixed' || asp.sentiment === 'negative';
      const edgeColor = isContradiction ? '#F59E0B' : '#10B981';

      eList.push({
        id: `e-${rootId}-${aspId}`,
        sourceId: rootId,
        targetId: aspId,
        sentiment: asp.sentiment,
        pathType: isContradiction ? 'contradiction' : 'corroborating',
        color: edgeColor,
      });

      // LEVEL 2: Sources (Powder Blue)
      if (isExpanded) {
        const sourcesForAsp = activeEntity.sourceComposition.slice(0, 2);
        sourcesForAsp.forEach((src, srcIdx) => {
          const srcId = `src-${asp.id}-${src.type}`;
          const srcY = yPos + (srcIdx === 0 ? -32 : 32);

          nList.push({
            id: srcId,
            label: src.name.split(' ')[0],
            type: 'source',
            x: 620,
            y: srcY,
            count: src.count,
            parentId: aspId,
            aspectId: aspId,
            color: '#7EA5D9',
            glowColor: 'rgba(126, 165, 217, 0.2)',
          });

          eList.push({
            id: `e-${aspId}-${srcId}`,
            sourceId: aspId,
            targetId: srcId,
            pathType: 'default',
            color: '#7EA5D9',
          });

          // LEVEL 3: Claim / Excerpt (Soft Peach / Soft Mint)
          const relevantEvidence = activeEntity.evidenceList.find(
            (e) => e.aspect.toLowerCase().includes(asp.name.toLowerCase())
          );
          if (relevantEvidence) {
            const claimId = `claim-${asp.id}-${src.type}`;
            const claimColor = relevantEvidence.sentiment === 'positive' ? '#2D9A76' : '#F59E72';

            nList.push({
              id: claimId,
              label: `Signal: ${relevantEvidence.aspect.split(' / ')[1] || 'Citation'}`,
              type: 'claim',
              sentiment: relevantEvidence.sentiment,
              x: 880,
              y: srcY,
              snippet: relevantEvidence.excerpt,
              parentId: srcId,
              color: claimColor,
              glowColor: 'rgba(245, 158, 114, 0.2)',
            });

            eList.push({
              id: `e-${srcId}-${claimId}`,
              sourceId: srcId,
              targetId: claimId,
              pathType: relevantEvidence.sentiment === 'positive' ? 'corroborating' : 'contradiction',
              color: claimColor,
            });
          }
        });
      }
    });

    return { nodes: nList, edges: eList };
  }, [activeEntity, expandedAspectIds]);

  const toggleAspectExpand = (aspId: string) => {
    tactileAudio.playClick();
    setExpandedAspectIds((prev) => {
      const next = new Set(prev);
      if (next.has(aspId)) {
        next.delete(aspId);
      } else {
        next.add(aspId);
      }
      return next;
    });
  };

  // Trace full path from node back to root
  const activePathNodeIds = useMemo(() => {
    if (!selectedNode && !hoveredNodeId) return null;
    const targetId = selectedNode?.id || hoveredNodeId;
    if (!targetId) return null;

    const pathSet = new Set<string>();
    let curr: Node | undefined = nodes.find((n) => n.id === targetId);
    while (curr) {
      pathSet.add(curr.id);
      curr = nodes.find((n) => n.id === curr?.parentId);
    }
    return pathSet;
  }, [selectedNode, hoveredNodeId, nodes]);

  // Pan and drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetView = () => {
    tactileAudio.playClick();
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setSelectedNode(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-900/40 backdrop-blur-md">
      <div className="relative w-full max-w-6xl h-[88vh] rounded-3xl bg-white border border-zinc-200 shadow-2xl flex flex-col overflow-hidden">
        {/* Header HUD */}
        <div className="p-5 sm:p-6 border-b border-zinc-200/80 bg-[#FAF8F5] flex flex-wrap items-center justify-between gap-4 z-20">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-blue-50 text-[#4A5CD8] border border-blue-200">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono-code uppercase font-bold text-[#3444B8] tracking-wider">
                  Interactive Topology Graph
                </span>
                <span className="text-[9px] font-mono-code px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 font-semibold border border-purple-200">
                  4-Tier Hierarchy
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#18181B] tracking-tight">
                {activeEntity.canonicalName}
              </h3>
            </div>
          </div>

          {/* Color System Legend Header Bar */}
          <div className="hidden lg:flex items-center gap-3 text-[10px] font-mono-code bg-white px-3.5 py-1.5 rounded-full border border-zinc-200 shadow-xs">
            <span className="flex items-center gap-1.5 text-[#4A5CD8] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#4A5CD8]" /> Entity
            </span>
            <span className="text-zinc-300">→</span>
            <span className="flex items-center gap-1.5 text-purple-700 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#6B7CFF]" /> Aspect
            </span>
            <span className="text-zinc-300">→</span>
            <span className="flex items-center gap-1.5 text-blue-700 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#7EA5D9]" /> Source
            </span>
            <span className="text-zinc-300">→</span>
            <span className="flex items-center gap-1.5 text-orange-700 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#F59E72]" /> Claim
            </span>
          </div>

          {/* Close & Entity Selector */}
          <div className="flex items-center gap-2.5">
            <select
              value={activeEntity.id}
              onChange={(e) => {
                const found = allEntities.find((ent) => ent.id === e.target.value);
                if (found) {
                  setActiveEntity(found);
                  onSelectEntity(found);
                }
              }}
              className="bg-white border border-zinc-200 rounded-full px-3.5 py-1.5 text-xs text-zinc-700 focus:outline-none focus:border-[#6B7CFF] font-mono-code shadow-xs"
            >
              {allEntities.map((ent) => (
                <option key={ent.id} value={ent.id}>
                  {ent.canonicalName}
                </option>
              ))}
            </select>

            <button
              onClick={() => {
                tactileAudio.playClick();
                onClose();
              }}
              className="p-2 rounded-full bg-white hover:bg-zinc-100 text-zinc-500 hover:text-[#18181B] transition-colors border border-zinc-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Graph Canvas Container */}
        <div
          className="relative flex-1 bg-[#FAF8F5] overflow-hidden select-none cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Atmospheric scenic blur subtle texture */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-[0.025] pointer-events-none -z-10"
            style={{ backgroundImage: "url('/images/atmosphere-scenic-blur.jpg')" }}
          />

          {/* Subtle background ambient mesh */}
          <div className="pointer-events-none absolute inset-0 bg-subtle-grid opacity-40" />

          {/* Controls Floating Pod */}
          <div className="absolute top-4 left-4 z-30 flex items-center gap-1.5 p-1.5 rounded-full bg-white/90 border border-zinc-200/90 backdrop-blur-xl shadow-md">
            <button
              onClick={() => setZoom((z) => Math.min(z + 0.15, 2.0))}
              className="p-1.5 rounded-full text-zinc-600 hover:text-[#18181B] hover:bg-zinc-100"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoom((z) => Math.max(z - 0.15, 0.6))}
              className="p-1.5 rounded-full text-zinc-600 hover:text-[#18181B] hover:bg-zinc-100"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={resetView}
              className="p-1.5 rounded-full text-zinc-600 hover:text-[#18181B] hover:bg-zinc-100"
              title="Reset View"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {activePathNodeIds && (
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-mono-code text-[#3444B8] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4A5CD8]" />
                <span>Path Traced</span>
              </div>
            )}
          </div>

          {/* SVG Visual Canvas with Nodes and Curved Edges */}
          <svg
            className="w-full h-full"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: '0 0',
              transition: isDragging ? 'none' : 'transform 0.1s ease-out',
            }}
          >
            {/* 1. Curved Spline Edges */}
            {edges.map((edge) => {
              const srcNode = nodes.find((n) => n.id === edge.sourceId);
              const tgtNode = nodes.find((n) => n.id === edge.targetId);
              if (!srcNode || !tgtNode) return null;

              const isPathActive =
                activePathNodeIds?.has(srcNode.id) && activePathNodeIds?.has(tgtNode.id);

              const midX = (srcNode.x + tgtNode.x) / 2;
              const pathD = `M ${srcNode.x} ${srcNode.y} C ${midX} ${srcNode.y}, ${midX} ${tgtNode.y}, ${tgtNode.x} ${tgtNode.y}`;

              return (
                <path
                  key={edge.id}
                  d={pathD}
                  fill="none"
                  stroke={isPathActive ? edge.color : '#E2DDD5'}
                  strokeWidth={isPathActive ? 2.5 : 1.2}
                  strokeDasharray={edge.pathType === 'contradiction' ? '4,4' : 'none'}
                  strokeOpacity={isPathActive ? 0.95 : 0.6}
                  className="transition-all duration-200"
                />
              );
            })}

            {/* 2. Interactive Nodes */}
            {nodes.map((node) => {
              const isHovered = hoveredNodeId === node.id;
              const isSelected = selectedNode?.id === node.id;
              const isPathActive = activePathNodeIds?.has(node.id);

              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  className="cursor-pointer transition-transform duration-200"
                  onClick={() => {
                    tactileAudio.playClick();
                    setSelectedNode(node);
                    if (node.type === 'aspect') {
                      toggleAspectExpand(node.id);
                    }
                  }}
                  onMouseEnter={() => {
                    tactileAudio.playNodeHover();
                    setHoveredNodeId(node.id);
                  }}
                  onMouseLeave={() => setHoveredNodeId(null)}
                >
                  {/* Subtle ambient circle halo */}
                  <circle
                    r={node.type === 'entity' ? 24 : node.type === 'aspect' ? 20 : 16}
                    fill={node.glowColor}
                    opacity={isHovered || isSelected || isPathActive ? 0.4 : 0.15}
                  />

                  {/* Core Node Circle */}
                  <circle
                    r={node.type === 'entity' ? 14 : node.type === 'aspect' ? 11 : 8}
                    fill="#FFFFFF"
                    stroke={node.color}
                    strokeWidth={isPathActive || isSelected ? 3 : 2}
                  />

                  {/* Label Text */}
                  <text
                    x={node.type === 'entity' ? -18 : 18}
                    y={4}
                    textAnchor={node.type === 'entity' ? 'end' : 'start'}
                    fill={isPathActive || isSelected ? '#18181B' : '#52525B'}
                    fontSize={node.type === 'entity' ? 12 : 11}
                    fontFamily="var(--font-mono)"
                    fontWeight={isPathActive || isSelected ? '700' : '500'}
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Node Detail Inspector HUD (Bottom Right) */}
          {selectedNode && (
            <div className="absolute bottom-4 right-4 z-30 w-80 p-4 rounded-3xl bg-white/95 border border-zinc-200/90 backdrop-blur-xl shadow-xl space-y-2.5">
              <div className="flex items-center justify-between">
                <span
                  className="text-[10px] font-mono-code px-2.5 py-0.5 rounded-full font-bold uppercase"
                  style={{
                    backgroundColor: `${selectedNode.color}15`,
                    color: selectedNode.color,
                  }}
                >
                  {selectedNode.type} Node
                </span>
                <button
                  onClick={() => setSelectedNode(null)}
                  className="text-zinc-400 hover:text-zinc-700"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <h4 className="text-sm font-bold text-[#18181B]">{selectedNode.label}</h4>

              {selectedNode.snippet && (
                <p className="text-xs text-zinc-600 font-serif italic border-l-2 pl-2.5 leading-relaxed" style={{ borderColor: selectedNode.color }}>
                  "{selectedNode.snippet}"
                </p>
              )}

              {selectedNode.count && (
                <div className="text-[10px] font-mono-code text-zinc-500 pt-1">
                  Corroborated Signals: {selectedNode.count}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
