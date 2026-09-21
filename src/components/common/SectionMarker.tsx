import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface SectionMarkerProps {
  /** Optional section or chapter number (e.g. "01", "03", "04") */
  number?: string;
  /** Section title text (e.g. "INSTITUTION INTELLIGENCE", "MULTI-SOURCE RETRIEVAL") */
  title: string;
  /** Optional subtitle or contextual descriptor */
  subtitle?: string;
  /** Optional icon displayed alongside or before the label */
  icon?: LucideIcon;
  /** Visual display variant */
  variant?: 'editorial' | 'hairline' | 'bracket' | 'rubric';
  /** Horizontal alignment */
  align?: 'left' | 'center';
  /** Extra custom CSS classes */
  className?: string;
}

/**
 * SectionMarker — Premium Editorial Rubric & Chapter Marker
 * 
 * Replaces generic AI-style rounded pills with high-end, research-publication
 * typography inspired by data journalism and academic literature.
 */
export const SectionMarker: React.FC<SectionMarkerProps> = ({
  number,
  title,
  subtitle,
  icon: Icon,
  variant = 'editorial',
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  if (variant === 'hairline') {
    return (
      <div className={`flex items-center gap-3 w-full ${className}`}>
        {Icon && <Icon className="w-3.5 h-3.5 text-[#3444B8] shrink-0" aria-hidden="true" />}
        {number && (
          <span className="font-mono-code text-[11px] font-bold text-[#3444B8] tracking-widest shrink-0">
            {number}
          </span>
        )}
        {number && <span className="w-3.5 h-px bg-zinc-300 shrink-0" aria-hidden="true" />}
        <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-zinc-800 shrink-0">
          {title}
        </span>
        <div className="flex-1 h-px bg-zinc-200/80 mx-1 hidden sm:block" aria-hidden="true" />
        {subtitle && (
          <span className="font-mono-code text-[10px] text-zinc-400 uppercase tracking-wider shrink-0 hidden sm:inline-block">
            {subtitle}
          </span>
        )}
      </div>
    );
  }

  if (variant === 'bracket') {
    return (
      <div
        className={`inline-flex items-center gap-2 text-xs ${
          isCenter ? 'justify-center w-full' : ''
        } ${className}`}
      >
        {Icon && <Icon className="w-3.5 h-3.5 text-[#3444B8] shrink-0" aria-hidden="true" />}
        {number && (
          <span className="font-mono-code text-[11px] font-bold text-[#3444B8] tracking-wider shrink-0">
            [{number}]
          </span>
        )}
        <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-zinc-800 shrink-0">
          {title}
        </span>
        {subtitle && (
          <>
            <span className="text-zinc-300 select-none" aria-hidden="true">/</span>
            <span className="font-sans text-[11px] text-zinc-500 font-normal normal-case">
              {subtitle}
            </span>
          </>
        )}
      </div>
    );
  }

  if (variant === 'rubric') {
    return (
      <div
        className={`inline-flex items-center gap-2 text-xs border-l-2 border-[#3444B8] pl-2.5 py-0.5 ${className}`}
      >
        {number && (
          <span className="font-mono-code text-[11px] font-bold text-[#3444B8] tracking-wider shrink-0">
            {number}
          </span>
        )}
        <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-zinc-800 shrink-0">
          {title}
        </span>
        {subtitle && (
          <span className="font-sans text-[11px] text-zinc-500 font-normal">
            — {subtitle}
          </span>
        )}
      </div>
    );
  }

  // Default: 'editorial'
  return (
    <div
      className={`inline-flex items-center gap-2.5 flex-wrap sm:flex-nowrap ${
        isCenter ? 'justify-center w-full text-center' : 'justify-start'
      } ${className}`}
    >
      {Icon && (
        <Icon className="w-3.5 h-3.5 text-[#3444B8] shrink-0" aria-hidden="true" />
      )}

      {number && (
        <span className="font-mono-code text-[11px] font-bold text-[#3444B8] tracking-widest uppercase shrink-0">
          {number}
        </span>
      )}

      {number && (
        <span className="w-3.5 h-px bg-zinc-300 shrink-0" aria-hidden="true" />
      )}

      {!number && !Icon && (
        <span className="w-1.5 h-1.5 rounded-xs bg-[#3444B8] shrink-0" aria-hidden="true" />
      )}

      <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-zinc-800 shrink-0">
        {title}
      </span>

      {subtitle && (
        <>
          <span className="text-zinc-300 font-light select-none shrink-0" aria-hidden="true">
            /
          </span>
          <span className="font-sans text-[11px] text-zinc-500 font-normal tracking-normal shrink-0">
            {subtitle}
          </span>
        </>
      )}
    </div>
  );
};
