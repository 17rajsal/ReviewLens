import React from 'react';
import { EvidenceItem } from '../../types/evidence';
import { MessageSquare, Globe, Award, CheckCircle2, ExternalLink, FileText, Shield } from 'lucide-react';

interface EvidenceSnippetCardProps {
  evidence: EvidenceItem;
}

export const EvidenceSnippetCard: React.FC<EvidenceSnippetCardProps> = ({ evidence }) => {
  const getSourceCategory = () => {
    if (evidence.sourceCategory) return evidence.sourceCategory;
    if (evidence.source === 'open_data') return 'OPEN DATA';
    if (evidence.source === 'institutional') return 'INSTITUTIONAL SOURCE';
    if (evidence.source === 'reddit' || evidence.source === 'public_discussion') return 'PUBLIC DISCUSSION';
    if (evidence.source === 'web' || evidence.source === 'public_web') return 'PUBLIC WEB PAGE';
    return 'PUBLIC SOURCE';
  };

  const sourceCategory = getSourceCategory();

  const getSourceIcon = (source: string) => {
    switch (source) {
      case 'open_data':
        return <Globe className="w-3.5 h-3.5 text-[#4A5CD8]" />;
      case 'institutional':
        return <Award className="w-3.5 h-3.5 text-purple-600" />;
      case 'reddit':
      case 'public_discussion':
        return <MessageSquare className="w-3.5 h-3.5 text-blue-600" />;
      case 'web':
      case 'public_web':
        return <Globe className="w-3.5 h-3.5 text-emerald-600" />;
      default:
        return <CheckCircle2 className="w-3.5 h-3.5 text-zinc-600" />;
    }
  };

  const getRailColor = () => {
    if (evidence.sentiment === 'positive') return '#10B981';
    if (evidence.sentiment === 'negative') return '#EF4444';
    if (evidence.sentiment === 'mixed') return '#F59E0B';
    return '#6B7CFF';
  };

  const railColor = getRailColor();

  return (
    <div
      className="rounded-2xl bg-white border border-zinc-200/90 hover:border-zinc-300 transition-all duration-200 overflow-hidden shadow-xs hover:shadow-md relative"
      style={{ borderLeft: `3px solid ${railColor}` }}
    >
      {/* Top Source Identification Bar */}
      <div className="p-3.5 bg-[#FAF8F5] border-b border-zinc-200/70 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-white border border-zinc-200 shadow-xs">
            {getSourceIcon(evidence.source)}
          </div>
          <div>
            <div className="text-xs font-bold text-[#18181B] tracking-tight flex items-center gap-2 flex-wrap">
              <span>{evidence.sourceName}</span>
              <span className="text-[9px] font-mono-code px-2 py-0.5 rounded-full font-bold tracking-wider bg-zinc-100 text-zinc-700 border border-zinc-200">
                {sourceCategory}
              </span>
              {evidence.provenance && (
                <span
                  className={`text-[9px] font-mono-code px-2 py-0.5 rounded-full font-bold tracking-wider flex items-center gap-1.5 ${
                    evidence.isLive || evidence.provenance.startsWith('LIVE_')
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                      : 'bg-amber-50 text-amber-800 border border-amber-300'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      evidence.isLive || evidence.provenance.startsWith('LIVE_')
                        ? 'bg-emerald-500 animate-pulse'
                        : 'bg-amber-500'
                    }`}
                  />
                  <span>{evidence.provenance.replace(/_/g, ' ')}</span>
                </span>
              )}
            </div>
            <div className="text-[10px] font-mono-code text-zinc-500 flex items-center gap-2 mt-0.5">
              <span>Domain: {evidence.sourceDomain || 'Public Registry'}</span>
              <span>•</span>
              <span>Published: {evidence.publishedAt || evidence.date || 'Not provided by source'}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`text-[9px] font-mono-code px-2 py-0.5 rounded-full font-bold uppercase ${
              evidence.sentiment === 'positive'
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                : evidence.sentiment === 'negative'
                ? 'bg-rose-100 text-rose-800 border border-rose-200'
                : 'bg-amber-100 text-amber-800 border border-amber-200'
            }`}
          >
            {evidence.sentiment}
          </span>
          <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-white text-zinc-700 border border-zinc-200">
            {evidence.aspect}
          </span>
        </div>
      </div>

      {/* ZONE 1: Verbatim Source Evidence */}
      <div className="p-4 space-y-2.5 bg-white">
        <div className="flex items-center justify-between text-[9px] font-mono-code uppercase font-semibold text-zinc-500">
          <div className="flex items-center gap-1.5">
            <FileText className="w-3 h-3 text-[#4A5CD8]" />
            <span className="text-[#18181B] font-bold">SOURCE EVIDENCE (VERBATIM RECORD)</span>
          </div>
          {evidence.sourceUrl ? (
            <a
              href={evidence.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4A5CD8] hover:text-[#2A3CB0] flex items-center gap-1.5 font-bold transition-colors"
            >
              <span>Verify Original URL</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          ) : (
            <span className="text-zinc-400 italic">URL not provided by source</span>
          )}
        </div>

        {evidence.sourceTitle && (
          <div className="text-xs font-semibold text-zinc-800 pt-0.5">
            Record Title: "{evidence.sourceTitle}"
          </div>
        )}

        <blockquote
          className="text-xs sm:text-sm text-[#18181B] leading-relaxed italic pl-3.5 py-1 font-serif"
          style={{ borderLeft: `2px solid ${railColor}` }}
        >
          "{evidence.excerpt}"
        </blockquote>
      </div>

      {/* ZONE 2: ReviewLens Traceability & Provenance Metadata */}
      <div className="p-3.5 bg-[#FAF8F5] border-t border-zinc-200/70 space-y-2 text-[10px] font-mono-code">
        <div className="flex items-center justify-between text-zinc-500">
          <span className="text-[9px] uppercase tracking-wider text-purple-800 font-bold flex items-center gap-1">
            <Shield className="w-3 h-3 text-purple-600" />
            Traceable Provenance Metadata
          </span>
          {evidence.verificationHash && (
            <span className="text-zinc-400" title="Internal record identifier">
              Audit Hash: {evidence.verificationHash}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-600 pt-1 border-t border-zinc-200/50">
          <div>
            <span className="text-zinc-400">Source Type: </span>
            <span className="text-[#3444B8] font-semibold">{sourceCategory}</span>
          </div>
          <div>
            <span className="text-zinc-400">Retrieved Date: </span>
            <span className="text-[#18181B]">{evidence.retrievedAt || 'Live research session'}</span>
          </div>
          <div>
            <span className="text-zinc-400">Author Attribution: </span>
            <span className="text-[#18181B]">{evidence.authorRole || 'Not provided by source'}</span>
          </div>
          <div>
            <span className="text-zinc-400">Corroboration Coverage: </span>
            <span className="text-emerald-700 font-bold">{evidence.relevanceScore}% Cross-verified</span>
          </div>
          {evidence.duplicateClusterId && (
            <div className="sm:col-span-2 text-amber-800 bg-amber-50 px-2 py-1 rounded-lg border border-amber-200">
              Note: Part of a Highly Similar Content Cluster ({evidence.duplicateCount || 2} repetitions detected)
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
