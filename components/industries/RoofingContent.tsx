'use client';

import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const RoofingContent = () => {
  const painPoints = [
    {
      title: 'Not in Google\'s Top 3',
      desc: '90% of homeowners searching "roofing company near me" click the top 3 results. If you\'re not there, you don\'t exist.',
    },
    {
      title: 'No Instant Quote Option',
      desc: 'Homeowners want quick estimates. If your website can\'t deliver, they\'ll find someone who can.',
    },
    {
      title: 'Looks Untrustworthy',
      desc: 'Roofing is a high-trust purchase. An outdated website makes homeowners question your legitimacy.',
    },
  ];

  const features = [
    {
      title: 'Local SEO Foundation',
      desc: 'Built to rank for roofing keywords in your specific service areas from day one.',
    },
    {
      title: 'Instant Quote Forms',
      desc: 'Capture leads 24/7 with smart quote request forms that notify you immediately.',
    },
    {
      title: 'Project Gallery',
      desc: 'Before/after project photos that prove your quality and convert hesitant homeowners.',
    },
    {
      title: 'Trust Badges & Certifications',
      desc: 'Display your licenses, warranties, and certifications prominently to build instant trust.',
    },
    {
      title: 'AI Chat for After-Hours',
      desc: 'Storm damage calls come at all hours. Our AI captures every lead even when you\'re on a roof.',
    },
    {
      title: 'Service Area Pages',
      desc: 'Dedicated pages per city and town you serve, each ranking for local roofing searches.',
    },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Hero */}
        <div className="mb-20">
          <span className="font-mono text-[11px] text-acid-cyan tracking-[0.25em] uppercase block mb-4">
            Roofing companies
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary mb-6">
            Roofing Websites That
            <span className="gradient-text"> Generate Real Leads.</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl leading-relaxed mb-10">
            Roofing is a high-ticket, high-competition market. We build roofing company websites that rank locally, load fast, and turn visitors into quote requests around the clock.
          </p>
          <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-acid-cyan text-bg-base font-bold rounded-xl hover:gap-5 transition-all">
            Get Your Free Growth Audit
          </a>
        </div>

        {/* Pain Points */}
        <div className="mb-20">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-12">
            Why Roofing Companies Lose Jobs Online
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
            What We Build for Roofing Companies
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
            The Next Roof in Your Area Should Be Yours
          </h2>
          <p className="text-white/80 mb-8">
            Stop watching jobs go to competitors with better websites. Let's build yours this week.
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
