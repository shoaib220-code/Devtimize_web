'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle = ({ className = '' }: ThemeToggleProps) => {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      try {
        localStorage.setItem('dtz-theme', next);
      } catch {
        // localStorage unavailable (private mode, etc.) — theme just won't persist
      }
      return next;
    });
  };

  // Render an inert placeholder until we know the real theme, so we never
  // flash the wrong icon/position before hydration settles.
  if (theme === null) {
    return <div className={`w-14 h-8 rounded-full bg-bg-raised border border-bg-stroke ${className}`} aria-hidden="true" />;
  }

  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={isLight}
      aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      className={`relative w-14 h-8 rounded-full bg-bg-raised border border-bg-stroke p-1 transition-colors hover:border-acid-cyan/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-acid-cyan focus-visible:outline-offset-2 ${className}`}
    >
      <Moon size={12} strokeWidth={2.5} className="absolute left-[7px] top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
      <Sun size={12} strokeWidth={2.5} className="absolute right-[7px] top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />

      <motion.span
        animate={{ x: isLight ? 24 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
        className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-acid-cyan text-ink shadow-[0_0_10px_var(--color-acid-cyan)]"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isLight ? 'sun' : 'moon'}
            initial={{ opacity: 0, rotate: -90, scale: 0.4 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.4 }}
            transition={{ duration: 0.22 }}
            className="flex items-center justify-center"
          >
            {isLight ? <Sun size={14} strokeWidth={2.5} /> : <Moon size={14} strokeWidth={2.5} />}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </button>
  );
};
