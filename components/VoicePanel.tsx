'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Mic, Square, Globe } from 'lucide-react';
import type { VoiceState } from '@/lib/use-voice-chat';
import { VOICE_LANGUAGES } from '@/lib/voice';

interface VoicePanelProps {
  active: boolean;
  state: VoiceState;
  interim: string;
  error: string | null;
  notice: string | null;
  lang: string;
  onLangChange: (code: string) => void;
  onTapOrb: () => void;
  onStop: () => void;
}

const STATUS: Record<VoiceState, string> = {
  idle: 'Tap the mic and just start talking',
  listening: 'Listening… tap when you finish',
  thinking: 'Thinking…',
  speaking: 'Speaking… tap to interrupt',
};

export const VoicePanel = ({
  active,
  state,
  interim,
  error,
  notice,
  lang,
  onLangChange,
  onTapOrb,
  onStop,
}: VoicePanelProps) => {
  const reduceMotion = useReducedMotion();
  const label = error || notice || STATUS[state];
  const showTranscript = Boolean(interim) && state === 'listening';

  return (
    <div className="shrink-0 px-4 py-4 sm:px-5 border-t border-bg-stroke bg-bg-page/50 flex flex-col items-center gap-3">
      <p
        aria-live="polite"
        className={`min-h-[2.5rem] max-w-full text-center text-xs sm:text-sm leading-snug break-words ${
          error ? 'text-ember' : showTranscript ? 'text-text-primary' : 'text-text-secondary'
        }`}
      >
        {showTranscript ? `“${interim}”` : label}
      </p>

      <button
        type="button"
        onClick={onTapOrb}
        aria-label={STATUS[state]}
        className="relative w-16 h-16 rounded-full bg-acid-cyan text-ink flex items-center justify-center shadow-[0_0_24px_var(--color-acid-cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acid-cyan"
      >
        {state === 'listening' && !reduceMotion && (
          <>
            <span className="absolute inset-0 rounded-full border-2 border-acid-cyan animate-ping opacity-40" />
            <span className="absolute -inset-2 rounded-full border border-acid-cyan/40 animate-pulse" />
          </>
        )}

        {state === 'thinking' && (
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 bg-ink rounded-full animate-bounce motion-reduce:animate-none"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        )}

        {state === 'speaking' && (
          <div className="flex items-center gap-[3px] h-6">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.span
                key={i}
                className="w-[3px] h-full bg-ink rounded-full origin-center"
                animate={reduceMotion ? { scaleY: 0.7 } : { scaleY: [0.3, 1, 0.5, 0.9, 0.3] }}
                transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.12, ease: 'easeInOut' }}
              />
            ))}
          </div>
        )}

        {(state === 'listening' || state === 'idle') && <Mic size={26} strokeWidth={2.25} />}
      </button>

      <div className="flex items-center gap-2">
        <label className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg-raised border border-bg-stroke text-text-secondary text-xs focus-within:border-acid-cyan">
          <Globe size={13} aria-hidden="true" />
          <span className="sr-only">Voice language</span>
          <select
            value={lang}
            onChange={(e) => onLangChange(e.target.value)}
            className="bg-transparent text-text-primary outline-none cursor-pointer"
          >
            {VOICE_LANGUAGES.map((l) => (
              <option key={l.code} value={l.code} className="bg-bg-surface text-text-primary">
                {l.native === l.label ? l.label : `${l.label} · ${l.native}`}
              </option>
            ))}
          </select>
        </label>
        {active && (
          <button
            type="button"
            onClick={onStop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg-raised border border-bg-stroke text-text-secondary text-xs hover:border-ember hover:text-ember transition-colors"
          >
            <Square size={11} fill="currentColor" />
            Stop
          </button>
        )}
      </div>
    </div>
  );
};
