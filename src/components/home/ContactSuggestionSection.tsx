import React, { useState } from 'react';
import { Lightbulb, AlertTriangle, Mail, ArrowUpRight, Copy, Check } from 'lucide-react';
import { tactileAudio } from '../../utils/audio';

/**
 * CONTACT CONFIGURATION
 * Replace this placeholder email with your personal or project email address.
 */
export const CONTACT_EMAIL_PLACEHOLDER = "hello@reviewlens.local";

interface ContactSuggestionSectionProps {
  contactEmail?: string;
}

export const ContactSuggestionSection: React.FC<ContactSuggestionSectionProps> = ({
  contactEmail = CONTACT_EMAIL_PLACEHOLDER,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    tactileAudio.playClick();
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoLinks = {
    idea: `mailto:${contactEmail}?subject=${encodeURIComponent("ReviewLens Suggestion: New Research Domain")}&body=${encodeURIComponent("Hi ReviewLens Team,\n\nI have a suggestion for what ReviewLens should research next:\n\nDomain / Topic:\nDetails / Context:\n\nThanks!")}`,
    issue: `mailto:${contactEmail}?subject=${encodeURIComponent("ReviewLens Issue Report")}&body=${encodeURIComponent("Hi ReviewLens Team,\n\nI noticed an issue or inaccurate source evidence:\n\nQuery / Entity:\nObserved Problem:\nExpected Behavior:\n\nThanks!")}`,
    contact: `mailto:${contactEmail}?subject=${encodeURIComponent("ReviewLens Inquiry / Collaboration")}&body=${encodeURIComponent("Hi ReviewLens Team,\n\nI would love to connect regarding ReviewLens:\n\nMessage:\n\nBest regards,")}`,
  };

  return (
    <section
      id="contact-suggestion-section"
      className="py-24 border-t border-zinc-200/80 bg-[#FAF8F5] relative overflow-hidden"
    >
      {/* Editorial lighting element */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-gradient-to-b from-[#EFEAE2]/60 via-transparent to-transparent blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-zinc-700 text-xs font-mono-code">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B7CFF]" />
            <span className="uppercase tracking-wider font-semibold">Community & Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-editorial font-normal tracking-tight text-[#18181B] leading-tight">
            Help shape ReviewLens.
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed">
            Have a suggestion, found something we should improve, or want to talk about the project? I'd love to hear from you.
          </p>
        </div>

        {/* 3 Editorial Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Option 1: Suggest an Idea */}
          <div className="p-7 rounded-2xl bg-white border border-zinc-200/80 shadow-xs hover:border-zinc-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-700">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono-code uppercase font-semibold tracking-wider text-amber-700">
                  Suggest an Idea
                </span>
                <h3 className="text-lg font-editorial text-[#18181B] mt-1">
                  Tell us what ReviewLens should research next.
                </h3>
              </div>
              <p className="text-xs text-zinc-500 font-light leading-relaxed">
                Recommend new research domains, entity categories, or public data sources you'd like the engine to index and cross-examine.
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-100 mt-6">
              <a
                href={mailtoLinks.idea}
                onClick={() => tactileAudio.playClick()}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#18181B] hover:text-[#3444B8] transition-colors cursor-pointer"
              >
                <span>Send Suggestion</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#3444B8] transition-colors" />
              </a>
            </div>
          </div>

          {/* Option 2: Report an Issue */}
          <div className="p-7 rounded-2xl bg-white border border-zinc-200/80 shadow-xs hover:border-zinc-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200/60 flex items-center justify-center text-rose-700">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono-code uppercase font-semibold tracking-wider text-rose-700">
                  Report an Issue
                </span>
                <h3 className="text-lg font-editorial text-[#18181B] mt-1">
                  Found something broken or inaccurate?
                </h3>
              </div>
              <p className="text-xs text-zinc-500 font-light leading-relaxed">
                Flag an inaccurate entity resolution, an unresponsive connector, or a data inconsistency so we can refine the pipeline.
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-100 mt-6">
              <a
                href={mailtoLinks.issue}
                onClick={() => tactileAudio.playClick()}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#18181B] hover:text-[#3444B8] transition-colors cursor-pointer"
              >
                <span>Report Issue</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#3444B8] transition-colors" />
              </a>
            </div>
          </div>

          {/* Option 3: Get in Touch */}
          <div className="p-7 rounded-2xl bg-white border border-zinc-200/80 shadow-xs hover:border-zinc-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-700">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono-code uppercase font-semibold tracking-wider text-blue-700">
                  Get in Touch
                </span>
                <h3 className="text-lg font-editorial text-[#18181B] mt-1">
                  Collaborate or share general feedback.
                </h3>
              </div>
              <p className="text-xs text-zinc-500 font-light leading-relaxed">
                Interested in evidence-based research, technical architecture, or partnering on open decision intelligence? Reach out directly.
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-100 mt-6">
              <a
                href={mailtoLinks.contact}
                onClick={() => tactileAudio.playClick()}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#18181B] hover:text-[#3444B8] transition-colors cursor-pointer"
              >
                <span>Start Conversation</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#3444B8] transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Direct Contact Bar with Placeholder Note */}
        <div className="p-5 rounded-2xl bg-[#F6F3ED] border border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-zinc-600">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>
              Direct correspondence:{' '}
              <code className="px-2 py-0.5 rounded-md bg-white border border-zinc-200 font-mono-code text-zinc-800">
                {contactEmail}
              </code>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="px-3.5 py-2 rounded-lg bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-700 text-xs font-mono-code flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${contactEmail}`}
              onClick={() => tactileAudio.playClick()}
              className="px-4 py-2 rounded-lg bg-[#18181B] hover:bg-[#27272A] text-white text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Email Directly</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
