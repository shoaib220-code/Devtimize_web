'use client';

import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const HvacContent = () => {
  const painPoints = [
    {
      title: 'Slow Sites Kill Calls',
      desc: 'If your site loads in over 3 seconds on mobile, 60% of visitors leave before they see your number.',
    },
    {
      title: 'No Online Booking',
      desc: 'Customers search at 11pm. If they can\'t book instantly, they call your competitor in the morning.',
    },
    {
      title: 'Invisible on Google',
      desc: 'Without local SEO, you don\'t appear when homeowners search "HVAC repair near me" — the most valuable search in your market.',
    },
  ];

  const features = [
    {
      title: 'Mobile-First Design',
      desc: 'Over 70% of HVAC searches happen on mobile. Your site will look and perform perfectly on every device.',
    },
    {
      title: 'AI Chat & Lead Capture',
      desc: 'Our AI chatbot qualifies leads 24/7, captures contact info, and books appointments automatically.',
    },
    {
      title: 'Local SEO Optimized',
      desc: 'Built to rank for "HVAC near me", "AC repair [city]", and emergency heating searches in your area.',
    },
    {
      title: 'Instant Quote Forms',
      desc: 'Custom quote request forms that integrate with your CRM and notify you instantly via SMS and email.',
    },
    {
      title: 'Google Reviews Integration',
      desc: 'Showcase your 5-star reviews prominently to build trust before the first call.',
    },
    {
      title: 'Fast Load Speed',
      desc: 'Sub-2-second load times guaranteed. Google rewards fast sites with higher rankings.',
    },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Hero */}
        <div className="mb-20">
          <span className="font-mono text-[11px] text-acid-cyan tracking-[0.25em] uppercase block mb-4">
            HVAC businesses
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary mb-6">
            HVAC Websites Built to
            <span className="gradient-text"> Fill Your Calendar.</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl leading-relaxed mb-10">
            Every day your HVAC website sits outdated, a competitor is booking the job that should be yours. We build fast, mobile-first HVAC websites with AI chat and booking that work while you sleep.
          </p>
          <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-acid-cyan text-bg-base font-bold rounded-xl hover:gap-5 transition-all">
            Get Your Free Growth Audit
          </a>
        </div>

        {/* Pain Points */}
        <div className="mb-20">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-12">
            Why Most HVAC Companies Lose Jobs Online
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
            What We Build for HVAC Companies
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
            Ready to Fill Your HVAC Schedule?
          </h2>
          <p className="text-white/80 mb-8">
            Every week without a proper website is revenue walking to your competitor. Let's fix that.
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
