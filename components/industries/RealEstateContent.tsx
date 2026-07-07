'use client';

import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const RealEstateContent = () => {
  const painPoints = [
    {
      title: 'Listings Buried in Slow Pages',
      desc: 'Buyers browse listings on their phone between meetings. If photos and details load slowly, they move to the next agency\'s site.',
    },
    {
      title: 'No Way to Capture a Buyer at 11pm',
      desc: 'Serious buyers search at night and on weekends. Without instant inquiry capture, that lead goes cold before your office opens.',
    },
    {
      title: 'Invisible on Local Searches',
      desc: 'Without local SEO, you don\'t appear when someone searches "real estate agent near me" or "properties for sale in [city]" — the searches that actually convert.',
    },
  ];

  const features = [
    {
      title: 'Fast Property Listing Pages',
      desc: 'Image-heavy listing pages that load fast on mobile, so buyers can browse properties without waiting.',
    },
    {
      title: 'AI Chat & Lead Capture',
      desc: 'Our AI chatbot answers buyer questions 24/7, qualifies interest, and captures contact info while you\'re showing another property.',
    },
    {
      title: 'Local SEO Optimized',
      desc: 'Built to rank for "real estate agent near me", "homes for sale in [city]", and neighborhood-specific searches.',
    },
    {
      title: 'Instant Inquiry Forms',
      desc: 'Property inquiry forms that notify you by SMS and email the moment a buyer or seller reaches out.',
    },
    {
      title: 'Virtual Tour & Gallery Support',
      desc: 'Showcase photo galleries and virtual tours prominently so buyers can picture themselves in the property before booking a viewing.',
    },
    {
      title: 'Google Reviews Integration',
      desc: 'Display your client reviews prominently — trust is the deciding factor in a high-value purchase like real estate.',
    },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Hero */}
        <div className="mb-20">
          <span className="font-mono text-[11px] text-acid-cyan tracking-[0.25em] uppercase block mb-4">
            Real Estate agencies
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary mb-6">
            Real Estate Websites Built to
            <span className="gradient-text"> Convert Buyers.</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl leading-relaxed mb-10">
            Every day your listings sit on a slow, outdated site, a serious buyer is browsing a competitor's instead. We build fast, mobile-first real estate websites with AI chat and instant inquiry capture that work while you're out showing properties.
          </p>
          <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-acid-cyan text-bg-base font-bold rounded-xl hover:gap-5 transition-all">
            Get Your Free Growth Audit
          </a>
        </div>

        {/* Pain Points */}
        <div className="mb-20">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-12">
            Why Real Estate Agencies Lose Buyers Online
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
            What We Build for Real Estate Agencies
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
          <p className="text-text-secondary text-center mt-8 max-w-2xl mx-auto">
            Available for real estate agencies in the United States, United Kingdom, Canada, Europe, Australia, and Kuwait.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-grad-brand rounded-3xl p-12 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            The Next Buyer Should Reach You, Not Your Competitor
          </h2>
          <p className="text-white/80 mb-8">
            Stop watching serious buyers go to agencies with better websites. Let's build yours this week.
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
