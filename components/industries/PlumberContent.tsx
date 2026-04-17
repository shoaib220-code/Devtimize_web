'use client';

import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const PlumberContent = () => {
  const painPoints = [
    {
      title: 'Not in Emergency Search Results',
      desc: '"Emergency plumber near me" is searched thousands of times daily. Without local SEO you never appear.',
    },
    {
      title: 'Slow Mobile Website',
      desc: 'Emergency callers don\'t wait. A slow website means they hit back and call your competitor.',
    },
    {
      title: 'No Click-to-Call Button',
      desc: 'If calling you isn\'t one tap away on mobile, you\'re losing emergency jobs every single day.',
    },
  ];

  const features = [
    {
      title: 'Emergency SEO',
      desc: 'Optimized to rank for emergency plumber searches in your city and surrounding areas.',
    },
    {
      title: 'Click-to-Call Design',
      desc: 'Your phone number is always one tap away on mobile, above the fold on every page.',
    },
    {
      title: 'Service Area Pages',
      desc: 'Individual pages per town you serve, each ranking for local plumbing searches.',
    },
    {
      title: '24/7 AI Lead Capture',
      desc: 'When you can\'t answer, our AI captures the lead, takes details, and notifies you immediately.',
    },
    {
      title: 'Job Gallery & Reviews',
      desc: 'Showcase completed work and customer reviews to build trust before the first call.',
    },
    {
      title: 'Fast Load Speed',
      desc: 'Sub-2-second mobile load guaranteed. Speed wins emergency jobs.',
    },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Hero */}
        <div className="mb-20">
          <span className="font-mono text-[11px] text-acid-cyan tracking-[0.25em] uppercase block mb-4">
            Plumbers
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary mb-6">
            Plumber Websites Built for
            <span className="gradient-text"> Emergency Calls.</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl leading-relaxed mb-10">
            When a pipe bursts at midnight, homeowners call whoever shows up first on Google. We make sure that's you. Fast websites, emergency SEO, and 24/7 lead capture.
          </p>
          <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-acid-cyan text-bg-base font-bold rounded-xl hover:gap-5 transition-all">
            Get Your Free Growth Audit
          </a>
        </div>

        {/* Pain Points */}
        <div className="mb-20">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-12">
            Why Plumbers Miss Emergency Jobs Online
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((p, i) => (
              <div key={i} className="p-8 bg-bg-surface border border-bg-stroke rounded-3xl">
                <h3 className="font-display text-xl font-bold text-text-primary mb-4">{p.title}</h3>
                <p className="text-text-secondary">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What We Build */}
        <div className="mb-20">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-12">
            What We Build for Plumbing Companies
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4 p-6 bg-bg-surface border border-bg-stroke rounded-2xl">
                <CheckCircle2 className="text-jade shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-text-primary mb-2">{f.title}</h3>
                  <p className="text-text-secondary text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-grad-brand rounded-3xl p-12 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            The Next Emergency Job Should Be Yours
          </h2>
          <p className="text-white/80 mb-8">
            Every missed emergency call is $200 to $2,000 walking away. Let's fix your online presence today.
          </p>
          <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-bg-base font-bold rounded-xl hover:gap-5 transition-all">
            Book a Free Call
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
