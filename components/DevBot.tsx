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
    <div className="fixed bottom-7 right-7 z-[9000]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            className="absolute bottom-20 right-0 w-[380px] h-[540px] bg-bg-page/97 backdrop-blur-3xl border border-acid-cyan/15 rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.7),0_0_24px_rgba(0,232,255,0.1)] flex flex-col overflow-hidden"
          >
            <div className="p-4 bg-bg-raised border-b border-bg-stroke flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-jade rounded-full animate-pulse" />
                  <span className="font-display font-semibold text-text-primary">DevBot</span>
                </div>
                <span className="text-[10px] text-text-secondary uppercase tracking-wider">Online · Powered by Gemini AI</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-text-secondary hover:text-acid-cyan transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
              {messages.map((m, i) => (
                <div key={i} className={cn(
                  "max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed",
                  m.role === 'bot' 
                    ? "bg-bg-raised border border-bg-stroke text-text-primary self-start rounded-tl-none" 
                    : "bg-grad-cta text-white self-end rounded-tr-none shadow-lg"
                )}>
                  <ReactMarkdown>{m.content}</ReactMarkdown>
                </div>
              ))}
              {isLoading && (
                <div className="bg-bg-raised border border-bg-stroke text-text-primary self-start p-3 rounded-2xl rounded-tl-none text-sm">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-acid-cyan rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-acid-cyan rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-acid-cyan rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-bg-stroke bg-bg-page/50">
              <div className="flex gap-2 mb-3 overflow-x-auto no-scrollbar">
                {['💼 Projects', '💰 Pricing', '⚡ Tech Stack', '📞 Contact'].map(chip => (
                  <button
                    key={chip}
                    onClick={() => handleSend(chip)}
                    className="whitespace-nowrap px-3 py-1.5 rounded-full bg-bg-raised border border-bg-stroke text-acid-cyan text-xs hover:border-acid-cyan hover:bg-acid-cyan/5 transition-all"
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
                  placeholder="Type a message..."
                  className="flex-1 bg-bg-raised border border-bg-stroke rounded-xl px-4 py-2.5 text-sm text-text-primary outline-none focus:border-acid-cyan transition-colors"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={isLoading}
                  className="bg-grad-cta p-2.5 rounded-xl text-white hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        <AnimatePresence>
          {showPill && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              className="absolute bottom-16 right-0 bg-bg-raised border border-acid-cyan/30 px-4 py-2 rounded-full text-xs text-acid-cyan whitespace-nowrap shadow-xl"
            >
              Ask DevBot 👋
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setIsOpen(!isOpen);
            setShowPill(false);
            if (!isOpen) trackCTAClick('Open DevBot', 'floating_button');
          }}
          className="w-14 h-14 rounded-full bg-bg-raised border border-acid-cyan flex items-center justify-center text-acid-cyan shadow-[0_0_24px_rgba(0,232,255,0.25)] relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-acid-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <MessageSquare size={24} />
          <div className="absolute inset-0 border-2 border-acid-cyan rounded-full animate-ping opacity-20" />
        </motion.button>
      </div>
    </div>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
