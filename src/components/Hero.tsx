import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Rocket } from 'lucide-react';
import { trackCTAClick } from '../utils/analytics';

export const Hero = () => {
  return (
    <section className="relative min-height-[100vh] flex items-center justify-center pt-20 overflow-hidden bg-bg-base">
      {/* Mesh Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(0,232,255,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(124,58,237,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-jade/5 border border-jade/20 mb-8">
            <div className="w-2 h-2 bg-jade rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-jade uppercase tracking-wider">Currently Accepting Projects</span>
          </div>

          <p className="font-mono text-[11px] text-acid-cyan tracking-[0.2em] uppercase mb-4">
            Product Engineering Studio · Est. 2024
          </p>

          <h1 className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] text-text-primary mb-6">
            Future-Ready<br />
            <span className="gradient-text">Software.</span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            We build modern apps, chatbots, trading bots, and automation using Python, Flask, .NET, Flutter, Laravel, React/MERN, and ASP.NET Core.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              onClick={() => trackCTAClick('See Our Work', 'homepage_hero')}
              className="w-full sm:w-auto px-8 py-4 bg-ember text-white font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 group"
            >
              <Rocket size={20} className="group-hover:translate-x-1 transition-transform" />
              See Our Work
            </a>
            <a
              href="#contact"
              onClick={() => trackCTAClick('Contact Us', 'homepage_hero')}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-acid-cyan/30 text-acid-cyan font-semibold rounded-xl hover:bg-acid-cyan/5 transition-all flex items-center justify-center gap-2"
            >
              Contact Us <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center lg:justify-start items-center gap-x-8 gap-y-4 text-[13px] font-mono text-text-muted">
            <div className="flex items-center gap-2">
              <span className="text-gold">⭐⭐⭐⭐⭐</span>
              <span>4 Verified Clients</span>
            </div>
            <div className="w-1 h-1 bg-text-muted rounded-full" />
            <span>8 Projects Shipped</span>
            <div className="w-1 h-1 bg-text-muted rounded-full" />
            <span>24h Response</span>
          </div>
        </motion.div>

        {/* Floating Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 0 }}
          animate={{ opacity: 1, x: 0, rotate: -3 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block relative"
        >
          <div className="w-[480px] h-[320px] bg-bg-surface/80 backdrop-blur-xl border border-acid-cyan/15 rounded-xl shadow-[0_24px_80px_rgba(0,0,0,0.5),0_0_32px_rgba(0,232,255,0.06)] overflow-hidden">
            <div className="h-10 bg-bg-raised border-b border-bg-stroke px-4 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <span className="text-[11px] font-mono text-text-secondary">devtimize.dev</span>
              <div className="w-12" />
            </div>
            <div className="p-6 font-mono text-sm space-y-2">
              <div className="flex gap-2">
                <span className="text-acid-cyan">$</span>
                <TypedText text="npm run build --production" delay={500} />
              </div>
              <div className="text-jade">✓ Compiled successfully</div>
              <div className="flex gap-2">
                <span className="text-acid-cyan">$</span>
                <TypedText text="docker push devtimize/app:latest" delay={2500} />
              </div>
              <div className="text-jade">✓ Pushed to registry</div>
              <div className="flex gap-2">
                <span className="text-acid-cyan">$</span>
                <TypedText text="./deploy.sh --env production" delay={4500} />
              </div>
              <div className="text-jade">✓ Deployed. Live in 3s...</div>
              <div className="flex gap-2">
                <span className="text-acid-cyan">$</span>
                <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>
          
          {/* Decorative Glow */}
          <div className="absolute -inset-4 bg-acid-cyan/5 blur-3xl rounded-full -z-10" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-acid-cyan to-transparent" />
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-acid-cyan"
        >
          <ArrowRight size={16} className="rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const TypedText = ({ text, delay }: { text: string; delay: number }) => {
  const [displayed, setDisplayed] = useState('');
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i === text.length) clearInterval(interval);
      }, 40);
      return () => clearInterval(interval);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span>{displayed}</span>;
};
