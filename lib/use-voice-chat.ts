'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  cleanForSpeech,
  getRecognitionCtor,
  pickVoice,
  splitSentences,
  VOICE_LANGUAGES,
  type SpeechRecognitionLike,
} from './voice';

export type VoiceState = 'idle' | 'listening' | 'thinking' | 'speaking';

const MAX_SILENT_TURNS = 2;

export function useVoiceChat(onUtterance: (text: string) => Promise<string | null>, lang: string) {
  const [supported, setSupported] = useState(false);
  const [active, setActive] = useState(false);
  const [state, setState] = useState<VoiceState>('idle');
  const [interim, setInterim] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [dictating, setDictating] = useState(false);

  const langRef = useRef(lang);
  langRef.current = lang;
  const activeRef = useRef(false);
  const turnRef = useRef(0);
  const silentTurns = useRef(0);
  const recRef = useRef<SpeechRecognitionLike | null>(null);
  const dictRef = useRef<SpeechRecognitionLike | null>(null);
  const onUtteranceRef = useRef(onUtterance);
  onUtteranceRef.current = onUtterance;

  useEffect(() => {
    setSupported(Boolean(getRecognitionCtor()) && 'speechSynthesis' in window);
    // Voices load asynchronously in Chrome; touching the list early warms it up.
    window.speechSynthesis?.getVoices();
    return () => {
      activeRef.current = false;
      recRef.current?.abort();
      dictRef.current?.abort();
      window.speechSynthesis?.cancel();
    };
  }, []);

  const speak = useCallback(
    (text: string) =>
      new Promise<void>((resolve) => {
        const synth = window.speechSynthesis;
        const chunks = splitSentences(cleanForSpeech(text));
        if (chunks.length === 0) return resolve();
        synth.cancel();
        const { voice, available, female } = pickVoice(langRef.current);
        if (!available) {
          const label = VOICE_LANGUAGES.find((l) => l.code === langRef.current)?.label ?? 'this language';
          setNotice(`No ${label} voice is installed on this device, so I'll reply in text only.`);
          return resolve();
        }
        setNotice(null);
        let i = 0;
        const next = () => {
          if (!activeRef.current || i >= chunks.length) return resolve();
          const u = new SpeechSynthesisUtterance(chunks[i++]);
          u.lang = voice?.lang ?? langRef.current;
          if (voice) u.voice = voice;
          // If the only voice found isn't a known female one, nudge the pitch up.
          u.pitch = female ? 1.05 : 1.2;
          u.rate = 1;
          u.onend = next;
          u.onerror = () => resolve();
          synth.speak(u);
        };
        next();
      }),
    []
  );

  const stop = useCallback(() => {
    activeRef.current = false;
    turnRef.current += 1;
    recRef.current?.abort();
    window.speechSynthesis?.cancel();
    setActive(false);
    setState('idle');
    setInterim('');
  }, []);

  const listen = useCallback(() => {
    const Ctor = getRecognitionCtor();
    if (!Ctor || !activeRef.current) return;

    const turn = ++turnRef.current;
    const rec = new Ctor();
    rec.lang = langRef.current;
    rec.continuous = false;
    rec.interimResults = true;
    rec.maxAlternatives = 1;

    let finalText = '';
    let failed = false;

    rec.onresult = (e) => {
      let interimText = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const result = e.results[i];
        if (result.isFinal) finalText += result[0].transcript;
        else interimText += result[0].transcript;
      }
      setInterim((finalText + interimText).trim());
    };

    rec.onerror = (e) => {
      if (e.error === 'not-allowed' || e.error === 'service-not-allowed') {
        failed = true;
        setError('Microphone access is blocked. Allow it in your browser settings to talk to DevBot.');
        stop();
      } else if (e.error === 'network') {
        failed = true;
        setError('Voice recognition needs an internet connection.');
        stop();
      }
      // 'no-speech' and 'aborted' are handled in onend.
    };

    rec.onend = async () => {
      if (failed || turn !== turnRef.current || !activeRef.current) return;
      const text = finalText.trim();
      setInterim('');

      if (!text) {
        silentTurns.current += 1;
        if (silentTurns.current >= MAX_SILENT_TURNS) {
          setState('idle');
          setError("I didn't hear anything. Tap the mic when you're ready.");
          return;
        }
        listen();
        return;
      }

      silentTurns.current = 0;
      setState('thinking');
      const reply = await onUtteranceRef.current(text);
      if (turn !== turnRef.current || !activeRef.current) return;

      if (reply) {
        setState('speaking');
        await speak(reply);
        if (turn !== turnRef.current || !activeRef.current) return;
      }
      listen();
    };

    recRef.current = rec;
    setState('listening');
    try {
      rec.start();
    } catch {
      // start() throws if a session is already running; the running one will report back.
    }
  }, [speak, stop]);

  const stopDictation = useCallback(() => {
    dictRef.current?.abort();
    dictRef.current = null;
    setDictating(false);
  }, []);

  const start = useCallback(() => {
    stopDictation();
    setError(null);
    setNotice(null);
    silentTurns.current = 0;
    activeRef.current = true;
    setActive(true);
    // iOS Safari only allows speech synthesis that was unlocked by a user gesture.
    window.speechSynthesis?.speak(new SpeechSynthesisUtterance(''));
    listen();
  }, [listen, stopDictation]);

  // Tapping the orb: interrupt the bot, finish an utterance early, or resume after silence.
  const tapOrb = useCallback(() => {
    if (!activeRef.current) return;
    if (state === 'speaking') {
      window.speechSynthesis.cancel();
      listen();
    } else if (state === 'listening') {
      recRef.current?.stop();
    } else if (state === 'idle') {
      silentTurns.current = 0;
      setError(null);
      listen();
    }
  }, [state, listen]);

  // One-shot dictation into the text box (no auto-send, so names and emails can be corrected).
  const toggleDictation = useCallback(
    (baseText: string, onText: (text: string) => void) => {
      if (dictRef.current) {
        dictRef.current.stop();
        return;
      }
      const Ctor = getRecognitionCtor();
      if (!Ctor) return;
      if (activeRef.current) stop();
      setError(null);

      const rec = new Ctor();
      rec.lang = langRef.current;
      rec.continuous = false;
      rec.interimResults = true;
      rec.maxAlternatives = 1;
      const prefix = baseText.trim() ? baseText.trim() + ' ' : '';

      rec.onresult = (e) => {
        let text = '';
        for (let i = 0; i < e.results.length; i++) text += e.results[i][0].transcript;
        onText(prefix + text.trim());
      };
      rec.onerror = (e) => {
        if (e.error === 'not-allowed' || e.error === 'service-not-allowed') {
          setError('Microphone access is blocked. Allow it in your browser settings.');
        }
      };
      rec.onend = () => {
        dictRef.current = null;
        setDictating(false);
      };

      dictRef.current = rec;
      setDictating(true);
      try {
        rec.start();
      } catch {
        dictRef.current = null;
        setDictating(false);
      }
    },
    [stop]
  );

  return { supported, active, state, interim, error, notice, dictating, start, stop, tapOrb, toggleDictation };
}
