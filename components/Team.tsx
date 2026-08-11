'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Linkedin, Phone } from 'lucide-react';

export const Team = () => {
  const founders = [
    {
      name: 'Shoaib Liaqat',
      role: 'FOUNDER & CEO',
      edu: 'BSCS · Baba Guru Nanak University',
      skills: 'Flutter · MERN · Flask · .NET · Cloud · React · Mobile',
      phone: '+923104745649',
      image: '/images/team/shoaib.png',
      linkedin: 'https://pk.linkedin.com/in/shoaib-liaqat-0755363a0',
    },
  ];

  return (
    <section id="team" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="relative mb-20">
          <span className="font-mono text-[11px] text-acid-cyan tracking-[0.25em] uppercase block mb-4">
            03 — The Team
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-text-primary">
            A Hands-On Founder<br />
            <span className="text-text-secondary">Who Ships.</span>
          </h2>
          <div className="absolute top-0 right-0 font-display text-[120px] md:text-[160px] font-extrabold text-white/[0.02] leading-none pointer-events-none select-none">
            03
          </div>
        </div>

        <div className="grid gap-8 lg:gap-16 max-w-xl mx-auto">
          {founders.map((founder, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group bg-bg-surface border border-bg-stroke rounded-2xl p-8 lg:p-12 hover:border-acid-cyan/20 transition-all duration-500"
            >
              <div className="relative aspect-square w-full max-w-[300px] mx-auto mb-10 rounded-xl overflow-hidden border border-acid-cyan/10 group-hover:border-acid-cyan/30 transition-colors">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  sizes="300px"
                  className="object-cover saturate-[0.8] group-hover:saturate-[1.1] transition-all duration-700"
                />
              </div>

              <div className="text-center">
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-text-primary mb-2">
                  {founder.name}
                </h3>
                <p className="font-mono text-[10px] text-acid-cyan tracking-[0.2em] uppercase mb-4">
                  {founder.role}
                </p>
                <p className="text-sm text-text-secondary mb-8">
                  {founder.edu}
                </p>

                <div className="h-[1px] w-full bg-bg-stroke mb-8" />

                <p className="text-sm text-text-secondary leading-relaxed mb-10">
                  {founder.skills}
                </p>

                <div className="flex items-center justify-center gap-6">
                  {founder.linkedin && (
                    <a href={founder.linkedin} className="text-text-muted hover:text-acid-cyan transition-colors"><Linkedin size={20} /></a>
                  )}
                  <a href={`tel:${founder.phone}`} className="text-text-muted hover:text-acid-cyan transition-colors flex items-center gap-2 text-xs font-mono">
                    <Phone size={16} /> {founder.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h4 className="font-display text-xl sm:text-2xl md:text-4xl text-text-secondary max-w-3xl mx-auto leading-tight">
            "A CS graduate building software<br />
            <span className="text-text-primary">the world actually uses."</span>
          </h4>
        </div>
      </div>
    </section>
  );
};
