'use client';

import React from 'react';
import { motion } from 'motion/react';
import { homeFaqs } from '@/lib/home-faq';

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="relative mb-20">
          <span className="font-mono text-[11px] text-acid-cyan tracking-[0.25em] uppercase block mb-4">
            05 — FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-text-primary">
            Common<br />
            <span className="text-text-secondary">Questions.</span>
          </h2>
          <div className="absolute top-0 right-0 font-display text-[120px] md:text-[160px] font-extrabold text-white/[0.02] leading-none pointer-events-none select-none">
            05
          </div>
        </div>

        <div className="space-y-6 max-w-3xl">
          {homeFaqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-bg-surface border border-bg-stroke rounded-2xl"
            >
              <h3 className="font-bold text-text-primary mb-3">{faq.q}</h3>
              <p className="text-text-secondary leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
