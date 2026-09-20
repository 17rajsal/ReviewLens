import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { tactileAudio } from '../../utils/audio';

interface CookieNoticeProps {
  onOpenPrivacy: () => void;
}

export const CookieNotice: React.FC<CookieNoticeProps> = ({ onOpenPrivacy }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem('reviewlens_privacy_acknowledged');
      if (!dismissed) {
        // Small delay for natural entrance after page load
        const timer = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage access restricted in some iframes
    }
  }, []);

  const handleDismiss = () => {
    tactileAudio.playClick();
    setVisible(false);
    try {
      localStorage.setItem('reviewlens_privacy_acknowledged', 'true');
    } catch {
      // Ignore storage errors
    }
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Privacy and Local Storage Notice"
      className="fixed bottom-5 right-5 z-50 max-w-sm p-4 rounded-2xl bg-[#FAF8F5]/96 backdrop-blur-md border border-zinc-200/90 shadow-lg text-xs text-zinc-700 space-y-2.5 animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 font-mono-code text-[11px] font-semibold text-[#18181B] uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Local Storage & Privacy</span>
        </div>
        <button
          onClick={handleDismiss}
          aria-label="Dismiss privacy notice"
          className="p-1 text-zinc-400 hover:text-zinc-700 transition-colors rounded-full cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <p className="font-light text-zinc-600 leading-relaxed">
        ReviewLens stores research history and interface preferences locally on your device. We do not use advertising or third-party tracking cookies.
      </p>

      <div className="flex items-center justify-between pt-1">
        <button
          onClick={() => {
            tactileAudio.playClick();
            onOpenPrivacy();
          }}
          className="text-xs text-zinc-600 hover:text-[#18181B] underline underline-offset-2 transition-colors cursor-pointer"
        >
          Read Policy
        </button>

        <button
          onClick={handleDismiss}
          className="px-3 py-1 rounded-full bg-[#18181B] hover:bg-[#27272A] text-white text-[11px] font-medium transition-all cursor-pointer shadow-2xs"
        >
          Acknowledge
        </button>
      </div>
    </div>
  );
};
