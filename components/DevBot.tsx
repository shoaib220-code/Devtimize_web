'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { trackCTAClick, trackFormSubmit } from '../utils/analytics';

export const DevBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string }[]>([
    { role: 'bot', content: "Hey! I'm DevBot — ask me anything about Devtimize's work, stack, or pricing. Happy to help 🚀" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPill, setShowPill] = useState(false);
  // simple rate limiter: max 5 sends in 5 seconds
  const [sendCount, setSendCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowPill(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = async (text?: string) => {
    let message = text || input;
    if (!message.trim() || isLoading) return;

    // enforce rate limit
    if (sendCount >= 5) {
      setMessages(prev => [...prev, { role: 'bot', content: "I'm getting a bit overwhelmed – please wait a few seconds before sending more messages." }]);
      return;
    }

    // cap message length to avoid giant payloads
    if (message.length > 1000) {
      message = message.slice(0, 1000) + "...(truncated)";
    }

    trackFormSubmit('devbot_chat');
    setMessages(prev => [...prev, { role: 'user', content: message }]);
    setInput('');
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
          userMessage: message
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const reply = data.reply || "I'm sorry, I couldn't process that. Please try again or email us at devtimize@gmail.com.";
      
      setMessages(prev => [...prev, { role: 'bot', content: reply }]);
    } catch (error) {
      console.error('DevBot Error:', error);
      setMessages(prev => [...prev, { role: 'bot', content: "Oops! Something went wrong. You can reach Shoaib & Hamza directly at devtimize@gmail.com." }]);
    } finally {
      setIsLoading(false);
    }
  };

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
            className="fixed bottom-4 right-4 w-[360px] max-w-[calc(100vw-2rem)] h-[550px] max-h-[70vh] z-50 flex flex-col overflow-hidden bg-bg-page/97 backdrop-blur-3xl border border-acid-cyan/15 rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.7),0_0_24px_rgba(0,232,255,0.1)]"
          >
            {/* Header */}
            <div className="shrink-0 p-4 sm:p-5 bg-bg-raised border-b border-bg-stroke flex items-center justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-jade rounded-full animate-pulse flex-shrink-0" />
                  <span className="font-display font-semibold text-text-primary text-sm sm:text-base truncate">DevBot</span>
                </div>
                <span className="text-xs sm:text-[11px] text-text-secondary uppercase tracking-wider block">Online · Gemini 2.0 Flash</span>
              </div>
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
                        : "bg-grad-cta text-white rounded-tr-none"
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
            </div>

            {/* Input Area */}
            <div className="shrink-0 p-4 sm:p-5 border-t border-bg-stroke bg-bg-page/50 space-y-3">
              <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-1 px-1">
                {['💼 Projects', '💰 Pricing', '⚡ Tech Stack', '📞 Contact'].map(chip => (
                  <button
                    key={chip}
                    onClick={() => handleSend(chip)}
                    className="shrink-0 px-3 py-1.5 rounded-full bg-bg-raised border border-bg-stroke text-acid-cyan text-xs hover:border-acid-cyan hover:bg-acid-cyan/5 transition-all whitespace-nowrap"
                  >
                    {chip}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type message..."
                  className="flex-1 min-w-0 bg-bg-raised border border-bg-stroke rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm text-text-primary outline-none focus:border-acid-cyan transition-colors"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={isLoading}
                  className="shrink-0 bg-grad-cta p-2 sm:p-2.5 rounded-lg text-white hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center"
                  aria-label="Send"
                >
                  <Send size={18} className="sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
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
              Ask DevBot 👋
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
