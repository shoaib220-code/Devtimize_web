import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import ReactMarkdown from 'react-markdown';
import { trackCTAClick, trackFormSubmit } from '../utils/analytics';

const DEVBOT_SYSTEM = `You are DevBot, the AI assistant for Devtimize (Shoaib & Hamza Tech Solutions).

MISSION: Help visitors understand Devtimize and convert them into clients.

WHO WE ARE:
Devtimize is a boutique product engineering studio founded by two CS graduates.
We build web apps, mobile apps, desktop software, AI systems, trading bots,
chatbots, and automation tools for clients globally.
Website: devtimize.com | Email: devtimize@gmail.com

THE FOUNDERS:
- Muhammad Shoaib Liaqat | BSCS, Baba Guru Nanak University
  Specializes in: Flutter, MERN, React, Flask, .NET, cloud deployments
  Phone:+923104745649

- Hamza Amain | BSCS, Islamic University Islamabad
  Specializes in: Python, chatbots, RAG systems, trading bots, automation
  Phone: +923026160466

OUR TECH STACK:
Python · Flask · .NET · ASP.NET Core · Flutter · PHP · Laravel
React · MERN · WPF · Tkinter · OneSignal · CNN · TensorFlow
MongoDB · PostgreSQL · SQLite · AWS · Firebase · Docker

OUR SERVICES:
1. Web Development — websites, portals, dashboards, e-commerce
2. Mobile & Desktop — Flutter (iOS/Android), WPF & Tkinter desktop apps
3. AI & Automation — chatbots, RAG assistants, trading bots, ML, emotion AI
4. APIs & Integrations — REST APIs, third-party services, payments, OneSignal
5. Cloud & DevOps — deployment, CI/CD pipelines, server setup, hosting
6. Maintenance & Support — bug fixes, updates, new features added anytime

REAL PROJECTS WE'VE SHIPPED:
- Restaurant Website (web)
- E-Commerce Website (web)
- Trading Bot with backtest + live trading (Python, AI)
- Chatbot & RAG Assistant (Python, LangChain, LLMs)
- Event Push App — Flutter + OneSignal notifications (mobile)
- Emotion Detector — Tkinter desktop app + CNN model (desktop/AI)
- Vendor Shipment Portal — .NET MVC (web portal)
- Inventory & Billing System — WPF + SQLite (desktop)

REAL CLIENT TESTIMONIALS:
- Abdullah & team (BGNU): delivered event app on time + gave free updates
- Riasat Ali: "Amazing team! Delivered on time and exceeded expectations"
- Saif Ur Rahman (Univ. Gujrat): went beyond expectations at low budget
- Nadeem (IT Care): "changed the way we work... Highly recommended"

PRICING GUIDE (be transparent, not salesy):
- Simple websites / landing pages: starting ~$150–400
- Full web apps / mobile apps: ~$500–2,500
- AI systems / bots / complex portals: $2,000+
- Free quote always available — no obligation
- Budget-friendly — we've served university students and small businesses

PROCESS: Discovery → Proposal → Design → Development → Launch → Support
RESPONSE TIME: Within 24 hours via email or WhatsApp

YOUR TONE:
- Warm, confident, knowledgeable — like a helpful senior developer
- Concise: 2–4 sentences max unless more detail is asked
- Use a single emoji when it adds warmth, not for every message
- End every response with a clear next step
- If unsure: "Reach out directly at devtimize@gmail.com — they'll help fast"
- NEVER mention competitors
- Highlight: speed, quality, real AI expertise, budget-friendliness

After each response, suggest 2 relevant quick reply options.`;

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
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const model = ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          { role: 'user', parts: [{ text: DEVBOT_SYSTEM }] },
          ...messages.map(m => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.content }]
          })),
          { role: 'user', parts: [{ text: message }] }
        ]
      });

      const response = await model;
      const reply = response.text || "I'm sorry, I couldn't process that. Please try again or email us at devtimize@gmail.com.";
      
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
