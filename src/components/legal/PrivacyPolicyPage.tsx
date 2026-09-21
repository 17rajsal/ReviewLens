import React from 'react';
import { ArrowLeft, Shield, CheckCircle2, Lock, Database, Eye } from 'lucide-react';
import { tactileAudio } from '../../utils/audio';
import { CONTACT_EMAIL } from '../home/ContactSuggestionSection';

interface PrivacyPolicyPageProps {
  onBack: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#18181B] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Top Back Navigation */}
        <div>
          <button
            type="button"
            onClick={() => {
              tactileAudio.playClick();
              onBack();
            }}
            aria-label="Back to workspace"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-mono-code text-zinc-600 hover:text-[#18181B] hover:border-zinc-300 transition-all shadow-2xs cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#18181B]"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Back to Workspace</span>
          </button>
        </div>

        {/* Header */}
        <div className="space-y-4 border-b border-zinc-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#3444B8] text-xs font-mono-code font-bold">
            <Shield className="w-3.5 h-3.5 text-[#4A5CD8]" />
            <span className="tracking-wider uppercase">Transparency & Privacy</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-editorial font-normal tracking-tight text-[#18181B]">
            Privacy Policy
          </h1>

          <p className="text-sm text-zinc-500 font-mono-code">
            Effective Date: September 2026 • ReviewLens Intelligence Engine
          </p>
        </div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-2">
            <Lock className="w-4 h-4 text-emerald-600" />
            <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#18181B]">
              No Ad Trackers
            </h4>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">
              We do not deploy marketing trackers, advertising pixels, or commercial data broker cookies.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-2">
            <Database className="w-4 h-4 text-blue-600" />
            <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#18181B]">
              Local Browser Storage
            </h4>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">
              Research history and interface sound preferences are stored locally in your browser.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-2">
            <Eye className="w-4 h-4 text-purple-600" />
            <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#18181B]">
              Public Evidence Only
            </h4>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">
              All indexed content originates from authorized public APIs and open data registries.
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-8 text-sm text-zinc-700 leading-relaxed font-light">
          <section className="space-y-3">
            <h2 className="text-xl font-editorial text-[#18181B] font-normal">
              1. Information We Process
            </h2>
            <p>
              ReviewLens is an evidence-driven research engine. When you interact with ReviewLens, we process:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-600">
              <li>
                <strong className="text-zinc-800 font-medium">Search Queries:</strong> Natural language queries entered into the search bar to query and synthesize evidence across permitted source connectors.
              </li>
              <li>
                <strong className="text-zinc-800 font-medium">Session History & UI Preferences:</strong> Recent research sessions and audio toggles stored client-side in your local web browser storage.
              </li>
              <li>
                <strong className="text-zinc-800 font-medium">Direct Inquiries:</strong> If you choose to contact us via email, we process your email address and message solely to respond to your inquiry.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-editorial text-[#18181B] font-normal">
              2. Cookies & Local Storage
            </h2>
            <p>
              ReviewLens uses local browser storage strictly for functional application state (such as persisting past research sessions and sound effect preferences). We do not use persistent tracking cookies, third-party analytics cookies, or cross-site tracking technologies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-editorial text-[#18181B] font-normal">
              3. Third-Party Source Connectors & Links
            </h2>
            <p>
              ReviewLens queries permitted public endpoints (OpenStreetMap Overpass API, Wikimedia REST API, Reddit Official OAuth API, Google Places Platform, and public search indexes). Every evidence card provides a direct link to the original public source. When you click an external link, you leave ReviewLens and become subject to the respective external platform's privacy policy and terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-editorial text-[#18181B] font-normal">
              4. Data Security & Storage
            </h2>
            <p>
              ReviewLens operates with server-side rate limiting, session-isolated memory caching, and sanitized query handling. No personal passwords or private user accounts are created or required to use the research platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-editorial text-[#18181B] font-normal">
              5. Contact & Questions
            </h2>
            <p>
              For privacy-related questions or feedback regarding data handling, please contact:{' '}
              <code className="px-2 py-0.5 rounded-md bg-zinc-100 border border-zinc-200 font-mono-code text-zinc-800 text-xs">
                {CONTACT_EMAIL}
              </code>
            </p>
          </section>
        </div>

        {/* Bottom Action */}
        <div className="pt-8 border-t border-zinc-200">
          <button
            onClick={() => {
              tactileAudio.playClick();
              onBack();
            }}
            className="px-6 py-3 rounded-full bg-[#18181B] hover:bg-[#27272A] text-white text-xs font-medium tracking-wide transition-all shadow-xs cursor-pointer"
          >
            Return to ReviewLens Workspace
          </button>
        </div>
      </div>
    </div>
  );
};
