export interface SpeechRecognitionResultLike {
  isFinal: boolean;
  0: { transcript: string };
}

export interface SpeechRecognitionEventLike {
  resultIndex: number;
  results: ArrayLike<SpeechRecognitionResultLike>;
}

export interface SpeechRecognitionLike {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((e: SpeechRecognitionEventLike) => void) | null;
  onerror: ((e: { error: string }) => void) | null;
  onend: (() => void) | null;
}

export function getRecognitionCtor(): (new () => SpeechRecognitionLike) | null {
  if (typeof window === 'undefined') return null;
  const w = window as unknown as {
    SpeechRecognition?: new () => SpeechRecognitionLike;
    webkitSpeechRecognition?: new () => SpeechRecognitionLike;
  };
  return w.SpeechRecognition || w.webkitSpeechRecognition || null;
}

// Turns a chat reply (markdown, emojis, phone numbers, emails) into text that sounds natural when read aloud.
export function cleanForSpeech(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/([\w.+-]+)@([\w-]+(?:\.[\w-]+)+)/g, (_, local: string, domain: string) =>
      `${local.replace(/[._]/g, ' ')} at ${domain.replace(/\./g, ' dot ')}`
    )
    .replace(/\+?\d[\d\s().-]{6,}\d/g, (m) => {
      const digits = m.replace(/\D/g, '');
      return digits.length >= 9 ? digits.split('').join(' ') : m;
    })
    .replace(/^\s*[-*•]\s+/gm, '')
    .replace(/^\s*#+\s*/gm, '')
    .replace(/[*_`>~]/g, '')
    .replace(/\p{Extended_Pictographic}/gu, '')
    .replace(/([^.!?:;,\s])[ \t]*\n+/g, '$1. ')
    .replace(/\s+/g, ' ')
    .replace(/\s+([.,!?;:])/g, '$1')
    .trim();
}

// Chrome silently cuts off long utterances, so speak sentence by sentence.
export function splitSentences(text: string): string[] {
  const parts = text.match(/[^.!?]+[.!?]*\s*/g) ?? [text];
  return parts.map((p) => p.trim()).filter(Boolean);
}

export interface VoiceLanguage {
  code: string;
  label: string;
  native: string;
}

export const VOICE_LANGUAGES: VoiceLanguage[] = [
  { code: 'en-US', label: 'English', native: 'English' },
  { code: 'ur-PK', label: 'Urdu', native: 'اردو' },
  { code: 'ar-KW', label: 'Arabic', native: 'العربية' },
  { code: 'hi-IN', label: 'Hindi', native: 'हिन्दी' },
  { code: 'fr-FR', label: 'French', native: 'Français' },
  { code: 'es-ES', label: 'Spanish', native: 'Español' },
  { code: 'de-DE', label: 'German', native: 'Deutsch' },
  { code: 'nl-NL', label: 'Dutch', native: 'Nederlands' },
  { code: 'sv-SE', label: 'Swedish', native: 'Svenska' },
];

export function defaultVoiceLanguage(): string {
  if (typeof navigator === 'undefined') return 'en-US';
  const base = navigator.language?.split('-')[0].toLowerCase();
  return VOICE_LANGUAGES.find((l) => l.code.startsWith(base + '-'))?.code ?? 'en-US';
}

// Voice names carry no gender field, so match well-known female and male voices by name.
const FEMALE_HINTS = [
  'female', 'zira', 'aria', 'jenny', 'michelle', 'sonia', 'libby', 'hazel', 'susan', 'natasha', 'clara',
  'samantha', 'karen', 'moira', 'tessa', 'victoria', 'fiona', 'allison', 'ava', 'serena', 'nicky',
  'google us english', 'uzma', 'gul', 'zariyah', 'salma', 'hoda', 'laila', 'amira', 'mariam',
  'swara', 'kalpana', 'heera', 'lekha', 'denise', 'eloise', 'julie', 'hortense', 'amelie', 'audrey', 'marie',
  'elvira', 'helena', 'laura', 'paulina', 'sabina', 'monica', 'paloma', 'dalia',
  'katja', 'amala', 'hedda', 'anna', 'petra', 'colette', 'fenna', 'claire', 'sofie', 'hillevi',
];
const MALE_HINTS = [
  'male', 'david', 'mark', 'george', 'guy', 'ryan', 'james', 'richard', 'sean', 'alex', 'fred', 'daniel',
  'thomas', 'oliver', 'asad', 'naayf', 'hamed', 'shakir', 'tarik', 'maged', 'hemant', 'madhur', 'ravi',
  'henri', 'claude', 'paul', 'antoine', 'alvaro', 'pablo', 'jorge', 'conrad', 'stefan', 'killian',
  'maarten', 'mattias', 'sven',
];

const hasHint = (name: string, hints: string[]) =>
  hints.some((h) => (h === 'female' || h === 'male' ? new RegExp(`\\b${h}\\b`).test(name) : name.includes(h)));

export interface PickedVoice {
  voice: SpeechSynthesisVoice | undefined;
  // false when the device has no voice for this language at all
  available: boolean;
  // true when the chosen voice is a known female voice
  female: boolean;
}

export function pickVoice(langCode: string): PickedVoice {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return { voice: undefined, available: false, female: false };
  }
  const all = window.speechSynthesis.getVoices();
  // Voices load asynchronously; while the list is empty, let the browser choose by lang.
  if (all.length === 0) return { voice: undefined, available: true, female: false };

  const base = langCode.split('-')[0].toLowerCase();
  const candidates = all.filter((v) => v.lang.toLowerCase().replace('_', '-').startsWith(base));
  if (candidates.length === 0) return { voice: undefined, available: false, female: false };

  const score = (v: SpeechSynthesisVoice) => {
    const name = v.name.toLowerCase();
    let s = 0;
    if (hasHint(name, FEMALE_HINTS)) s += 10;
    if (hasHint(name, MALE_HINTS)) s -= 10;
    if (name.includes('natural') || name.includes('online')) s += 3;
    if (name.includes('google')) s += 1;
    if (v.lang.toLowerCase().replace('_', '-') === langCode.toLowerCase()) s += 1;
    return s;
  };
  const best = [...candidates].sort((a, b) => score(b) - score(a))[0];
  return { voice: best, available: true, female: hasHint(best.name.toLowerCase(), FEMALE_HINTS) && !hasHint(best.name.toLowerCase(), MALE_HINTS) };
}
