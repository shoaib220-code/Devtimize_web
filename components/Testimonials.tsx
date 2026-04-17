'use client';

import React from 'react';
import { motion } from 'motion/react';

export const Testimonials = () => {
  const reviews = [
    {
      stars: 5,
      text: "This was a big challenge for us... the team was so dedicated they delivered on time and gave free updates.",
      name: "Abdullah & team",
      sub: "BGNU · Event Push App"
    },
    {
      stars: 5,
      text: "Amazing team! Delivered on time and exceeded expectations. Highly professional and easy to communicate with.",
      name: "Riasat Ali",
      sub: "Job Person · Web Solution"
    },
    {
      stars: 5,
      text: "Went beyond expectations at a low budget. They really care about the success of the project.",
      name: "Saif Ur Rahman",
      sub: "Univ. of Gujrat · Portal Project"
    },
    {
      stars: 5,
      text: "Changed the way we work... Highly recommended for anyone looking for serious software development.",
      name: "Nadeem",
      sub: "IT Care · System Automation"
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-bg-base relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="relative mb-20">
          <span className="font-mono text-[11px] text-acid-cyan tracking-[0.25em] uppercase block mb-4">
            04 — Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-text-primary">
            Hear It From<br />
            <span className="text-text-secondary">Those Who Shipped With Us.</span>
          </h2>
          <div className="absolute top-0 right-0 font-display text-[120px] md:text-[160px] font-extrabold text-white/[0.02] leading-none pointer-events-none select-none">
            04
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-bg-surface border border-bg-stroke rounded-2xl hover:border-acid-cyan/10 transition-all"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <span key={i} className="text-gold text-lg">⭐</span>
                ))}
              </div>
              <p className="text-lg text-text-primary italic leading-relaxed mb-8">
                "{review.text}"
              </p>
              <div className="h-[1px] w-full bg-bg-stroke mb-6" />
              <div>
                <p className="font-display font-bold text-text-primary">{review.name}</p>
                <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mt-1">{review.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
