'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, GripVertical, Briefcase, DollarSign, Zap, Phone, Mic, AudioLines } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { trackCTAClick, trackChatbotLead } from '../utils/analytics';
import { useVoiceChat } from '@/lib/use-voice-chat';
import { defaultVoiceLanguage, VOICE_LANGUAGES } from '@/lib/voice';
import { VoicePanel } from './VoicePanel';

const LANG_STORAGE_KEY = 'dtz-voice-lang';

export const DevBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string }[]>([
    { role: 'bot', content: "Hey! I'm DevBot — ask me anything about Devtimize's work, stack, or pricing. Happy to help." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPill, setShowPill] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [customHeight, setCustomHeight] = useState(550);
  // simple rate limiter: max 5 sends in 5 seconds
  const [sendCount, setSendCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<'chat' | 'voice'>('chat');
  const modeChosenByUser = useRef(false);
  const [voiceLang, setVoiceLang] = useState('en-US');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      setVoiceLang(saved && VOICE_LANGUAGES.some((l) => l.code === saved) ? saved : defaultVoiceLanguage());
    } catch {
      setVoiceLang(defaultVoiceLanguage());
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowPill(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  // Handle resize
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;

      const newHeight = window.innerHeight - e.clientY - 16;
      // Constrain between 300px and 80vh
      const constrainedHeight = Math.max(300, Math.min(newHeight, window.innerHeight * 0.8));
      setCustomHeight(constrainedHeight);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isResizing]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isLoading, isOpen]);

  // Shared by typing and voice. Returns the bot's reply so voice mode can speak it.
  const sendMessage = async (raw: string, clearInput = true): Promise<string | null> => {
    let message = raw;
    if (!message.trim() || isLoading) return null;

    // enforce rate limit
    if (sendCount >= 5) {
      const reply = "I'm getting a bit overwhelmed – please wait a few seconds before sending more messages.";
      setMessages(prev => [...prev, { role: 'bot', content: reply }]);
      return reply;
    }

    // cap message length to avoid giant payloads
    if (message.length > 1000) {
      message = message.slice(0, 1000) + "...(truncated)";
    }

    setMessages(prev => [...prev, { role: 'user', content: message }]);
    if (clearInput) setInput('');
    setIsLoading(true);

    // bump counter and schedule decrement
    setSendCount(c => c + 1);
    setTimeout(() => setSendCount(c => Math.max(0, c - 1)), 5000);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: messages,
          userMessage: message,
          lang: voiceLang,
          mode
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const reply = data.reply || "I'm sorry, I couldn't process that. Please try again or email us at devtimize@gmail.com.";

      if (data.leadCaptured) {
        trackChatbotLead();
      }

      setMessages(prev => [...prev, { role: 'bot', content: reply }]);
      return reply;
    } catch (error) {
      console.error('DevBot Error:', error);
      const reply = "Oops! Something went wrong. You can reach Shoaib directly at devtimize@gmail.com.";
      setMessages(prev => [...prev, { role: 'bot', content: reply }]);
      return reply;
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = (text?: string) => {
    sendMessage(text || input);
  };

  const voice = useVoiceChat((text) => sendMessage(text, false), voiceLang);
  const stopVoice = voice.stop;

  useEffect(() => {
    if (!isOpen) stopVoice();
  }, [isOpen, stopVoice]);

  // Voice is the default mode wherever the browser supports it; typing remains one tap away.
  useEffect(() => {
    if (voice.supported && !modeChosenByUser.current) setMode('voice');
  }, [voice.supported]);

  const switchMode = (next: 'chat' | 'voice') => {
    modeChosenByUser.current = true;
    if (next === 'chat') voice.stop();
    setMode(next);
  };

  const changeLanguage = (code: string) => {
    voice.stop();
    setVoiceLang(code);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, code);
    } catch {
      // storage unavailable — the choice just won't persist
    }
  };

  const voiceMode = mode === 'voice' && voice.supported;

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{ height: `${customHeight}px` }}
            className="fixed bottom-4 right-4 w-[360px] max-w-[calc(100vw-2rem)] max-h-[80vh] z-50 flex flex-col overflow-hidden bg-bg-page/97 backdrop-blur-3xl border border-acid-cyan/15 rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.7),0_0_24px_rgba(0,232,255,0.1)]"
          >
            {/* Resize Handle - Top */}
            <div
              onMouseDown={() => setIsResizing(true)}
              className="shrink-0 h-2 bg-gradient-to-r from-transparent via-acid-cyan/30 to-transparent hover:via-acid-cyan/60 transition-colors cursor-ns-resize flex items-center justify-center group active:via-acid-cyan/80"
              title="Drag to resize"
            >
              <GripVertical size={14} className="text-acid-cyan/40 group-hover:text-acid-cyan/70 transition-colors" />
            </div>

            {/* Header */}
            <div className="shrink-0 p-4 sm:p-5 bg-bg-raised border-b border-bg-stroke flex items-center justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-jade rounded-full animate-pulse flex-shrink-0" />
                  <span className="font-display font-semibold text-text-primary text-sm sm:text-base truncate">DevBot</span>
                </div>
                <span className="text-xs sm:text-[11px] text-text-secondary uppercase tracking-wider block">Online now</span>
              </div>
              {voice.supported && (
                <div
                  role="tablist"
                  aria-label="Conversation mode"
                  className="flex-shrink-0 flex rounded-full bg-bg-page border border-bg-stroke p-0.5"
                >
                  {([
                    { id: 'chat', label: 'Chat', icon: MessageSquare },
                    { id: 'voice', label: 'Voice', icon: AudioLines },
                  ] as const).map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      type="button"
                      role="tab"
                      aria-selected={mode === id}
                      onClick={() => {
                        if (mode !== id && id === 'voice') trackCTAClick('Switch to Voice', 'devbot_header');
                        switchMode(id);
                      }}
                      className={cn(
                        'relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors',
                        mode === id ? 'text-ink' : 'text-text-secondary hover:text-acid-cyan'
                      )}
                    >
                      {mode === id && (
                        <motion.span
                          layoutId="devbot-mode-pill"
                          className="absolute inset-0 rounded-full bg-acid-cyan"
                          transition={{ type: 'spring', stiffness: 500, damping: 36 }}
                        />
                      )}
                      <Icon size={13} className="relative" />
                      <span className="relative">{label}</span>
                    </button>
                  ))}
                </div>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="flex-shrink-0 text-text-secondary hover:text-acid-cyan transition-colors p-1"
                aria-label="Close"
              >
                <X size={20} className="sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-5 flex flex-col gap-3">
              {messages.map((m, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "flex w-full",
                    m.role === 'bot' ? 'justify-start' : 'justify-end'
                  )}
                >
                  <div 
                    className={cn(
                      "max-w-xs sm:max-w-sm md:max-w-md px-3 py-2 sm:px-4 sm:py-3 rounded-2xl text-xs sm:text-sm leading-relaxed break-words",
                      m.role === 'bot' 
                        ? "bg-bg-raised border border-bg-stroke text-text-primary rounded-tl-none" 
                        : "bg-[image:var(--grad-cta)] text-white rounded-tr-none"
                    )}
                  >
                    <ReactMarkdown>{m.content}</ReactMarkdown>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start w-full">
                  <div className="bg-bg-raised border border-bg-stroke text-text-primary px-3 py-2 sm:px-4 sm:py-3 rounded-2xl rounded-tl-none text-sm">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-acid-cyan rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-acid-cyan rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-acid-cyan rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {voiceMode ? (
              <VoicePanel
                active={voice.active}
                state={voice.state}
                interim={voice.interim}
                error={voice.error}
                notice={voice.notice}
                lang={voiceLang}
                onLangChange={changeLanguage}
                onTapOrb={voice.active ? voice.tapOrb : voice.start}
                onStop={voice.stop}
              />
            ) : (
            /* Input Area */
            <div className="shrink-0 p-4 sm:p-5 border-t border-bg-stroke bg-bg-page/50 space-y-3">
              <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-1 px-1">
                {[
                  { label: 'Projects', icon: Briefcase },
                  { label: 'Pricing', icon: DollarSign },
                  { label: 'Tech Stack', icon: Zap },
                  { label: 'Contact', icon: Phone },
                ].map(({ label, icon: Icon }) => (
                  <button
                    key={label}
                    onClick={() => handleSend(label)}
                    className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg-raised border border-bg-stroke text-acid-cyan text-xs hover:border-acid-cyan hover:bg-acid-cyan/5 transition-all whitespace-nowrap"
                  >
                    <Icon size={12} />
                    {label}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={voice.dictating ? 'Listening…' : 'Type message...'}
                  className="flex-1 min-w-0 bg-bg-raised border border-bg-stroke rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm text-text-primary outline-none focus:border-acid-cyan transition-colors"
                />
                {voice.supported && (
                  <button
                    type="button"
                    onClick={() => voice.toggleDictation(input, setInput)}
                    aria-pressed={voice.dictating}
                    aria-label={voice.dictating ? 'Stop dictation' : 'Dictate message'}
                    className={cn(
                      'shrink-0 p-2 sm:p-2.5 rounded-lg border transition-colors flex items-center justify-center',
                      voice.dictating
                        ? 'bg-acid-cyan border-acid-cyan text-ink animate-pulse'
                        : 'bg-bg-raised border-bg-stroke text-acid-cyan hover:border-acid-cyan'
                    )}
                  >
                    <Mic size={18} className="sm:w-5 sm:h-5" />
                  </button>
                )}
                <button
                  onClick={() => handleSend()}
                  disabled={isLoading}
                  className="shrink-0 bg-[image:var(--grad-cta)] p-2 sm:p-2.5 rounded-lg text-white hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center"
                  aria-label="Send"
                >
                  <Send size={18} className="sm:w-5 sm:h-5" />
                </button>
              </div>
              {voice.error && <p className="text-xs text-ember">{voice.error}</p>}
            </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button & Pill */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-40">
        <AnimatePresence>
          {showPill && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              className="absolute bottom-20 sm:bottom-24 right-0 bg-bg-raised border border-acid-cyan/30 px-4 py-2 rounded-full text-xs text-acid-cyan whitespace-nowrap shadow-xl"
            >
              Ask DevBot
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsOpen(!isOpen);
            setShowPill(false);
            if (!isOpen) trackCTAClick('Open DevBot', 'floating_button');
          }}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-bg-raised border border-acid-cyan flex items-center justify-center text-acid-cyan shadow-[0_0_24px_rgba(0,232,255,0.25)] hover:shadow-[0_0_32px_rgba(0,232,255,0.35)] transition-shadow relative"
        >
          <MessageSquare size={24} className="sm:w-7 sm:h-7" />
          <div className="absolute inset-0 border-2 border-acid-cyan rounded-full animate-ping opacity-20" />
        </motion.button>
      </div>
    </>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
