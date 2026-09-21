import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export type CursorMode = 'default' | 'pointer' | 'view' | 'inspect' | 'graph';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorMode, setCursorMode] = useState<CursorMode>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    // Disable on touch devices, reduced motion, or automated browser testing
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      (typeof navigator !== 'undefined' && navigator.webdriver)
    ) {
      setIsDisabled(true);
      return;
    }

    let idleTimer: ReturnType<typeof setTimeout> | null = null;

    const updateMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        setIsVisible(false);
      }, 800);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (cursorAttr === 'view') {
        setCursorMode('view');
      } else if (cursorAttr === 'inspect') {
        setCursorMode('inspect');
      } else if (cursorAttr === 'graph') {
        setCursorMode('graph');
      } else if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT'
      ) {
        setCursorMode('pointer');
      } else {
        setCursorMode('default');
      }
    };

    const handleMouseLeave = () => {
      if (idleTimer) clearTimeout(idleTimer);
      setIsVisible(false);
    };
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMouse);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      if (idleTimer) clearTimeout(idleTimer);
      window.removeEventListener('mousemove', updateMouse);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isDisabled || !isVisible) return null;

  return (
    <>
      {/* Precision center micro-dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 2.5,
          y: mousePosition.y - 2.5,
          scale: cursorMode === 'pointer' ? 0.7 : 1,
        }}
        transition={{ type: 'spring', damping: 35, stiffness: 500, mass: 0.08 }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-white" />
      </motion.div>

      {/* Trailing tactile ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center font-mono-code text-[8px] tracking-widest uppercase font-semibold text-zinc-800"
        animate={{
          x: mousePosition.x - (cursorMode === 'view' || cursorMode === 'inspect' || cursorMode === 'graph' ? 24 : cursorMode === 'pointer' ? 16 : 10),
          y: mousePosition.y - (cursorMode === 'view' || cursorMode === 'inspect' || cursorMode === 'graph' ? 24 : cursorMode === 'pointer' ? 16 : 10),
          width: cursorMode === 'view' || cursorMode === 'inspect' || cursorMode === 'graph' ? 48 : cursorMode === 'pointer' ? 32 : 20,
          height: cursorMode === 'view' || cursorMode === 'inspect' || cursorMode === 'graph' ? 48 : cursorMode === 'pointer' ? 32 : 20,
          borderColor: cursorMode === 'view' ? 'rgba(74, 92, 216, 0.6)' : cursorMode === 'inspect' ? 'rgba(245, 158, 114, 0.7)' : cursorMode === 'pointer' ? 'rgba(107, 124, 255, 0.5)' : 'rgba(24, 24, 27, 0.15)',
          backgroundColor: cursorMode === 'view' || cursorMode === 'inspect' || cursorMode === 'graph' ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 320, mass: 0.15 }}
        style={{
          borderWidth: '1px',
          borderStyle: 'solid',
          borderRadius: '9999px',
          backdropFilter: cursorMode === 'view' || cursorMode === 'inspect' ? 'blur(6px)' : 'none',
        }}
      >
        {cursorMode === 'view' && <span className="text-[#4A5CD8]">VIEW</span>}
        {cursorMode === 'inspect' && <span className="text-orange-700">AUDIT</span>}
        {cursorMode === 'graph' && <span className="text-purple-700">GRAPH</span>}
      </motion.div>
    </>
  );
};
