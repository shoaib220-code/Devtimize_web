'use client';

import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const MedspaContent = () => {
  const painPoints = [
    {
      title: 'Website Doesn\'t Reflect Your Brand',
      desc: 'A cheap-looking website drives away the premium clients you want and attracts the price-shoppers you don\'t.',
    },
    {
      title: 'No Online Booking',
      desc: 'Affluent clients don\'t want to call. They want to book a Botox appointment at midnight from their phone.',
    },
    {
      title: 'Not Showing Up for Treatments',
      desc: 'Searches like "lip filler near me" or "Botox [city]" have huge volume. You should own those results.',
    },
  ];

  const features = [
    {
      title: 'Luxury Visual Design',
      desc: 'High-end aesthetic that matches the premium experience clients expect before they walk in.',
    },
    {
      title: 'Treatment Pages with SEO',
      desc: 'Dedicated pages for Botox, filler, laser, skin treatments — each ranking for its own searches.',
    },
    {
      title: 'Online Booking Integration',
      desc: 'Real-time appointment booking that works 24/7 and integrates with your booking system.',
    },
    {
      title: 'Before & After Gallery',
      desc: 'Stunning visual proof of results that converts curious visitors into booked consultations.',
    },
    {
      title: 'Membership & Packages Section',
      desc: 'Promote membership plans and bundles that increase client lifetime value automatically.',
    },
    {
      title: 'AI Receptionist',
      desc: 'Handle enquiries, answer treatment questions, and book consultations 24/7 without staff.',
    },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Hero */}
        <div className="mb-20">
          <span className="font-mono text-[11px] text-acid-cyan tracking-[0.25em] uppercase block mb-4">
            Medspas
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary mb-6">
            Medspa Websites That Attract
            <span className="gradient-text"> Premium Clients.</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl leading-relaxed mb-10">
            Your medspa delivers luxury treatments. Your website should reflect that. We build high-end medspa websites with online booking, treatment galleries, and SEO that attracts clients ready to spend.
          </p>
          <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-acid-cyan text-bg-base font-bold rounded-xl hover:gap-5 transition-all">
            Get Your Free Growth Audit
          </a>
        </div>

        {/* Pain Points */}
        <div className="mb-20">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-12">
            What's Holding Your Medspa Back Online
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
            What We Build for Medspas
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
            Your Dream Clients Are Searching Right Now
          </h2>
          <p className="text-white/80 mb-8">
            Every month without a premium website is a month of high-value clients going to your competitor.
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
