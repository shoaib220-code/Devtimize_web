'use client';

import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const RestaurantContent = () => {
  const painPoints = [
    {
      title: 'Not Found on Google Maps',
      desc: 'When someone searches "restaurants near me", they pick from the top 3. Without local SEO you are not one of them.',
    },
    {
      title: 'No Online Reservations',
      desc: 'Diners book tables on their phones at 10pm. If you can\'t take online bookings, they choose a restaurant that can.',
    },
    {
      title: 'Menu Not Online',
      desc: '60% of diners check the menu online before deciding where to eat. A PDF menu or no menu loses you customers daily.',
    },
  ];

  const features = [
    {
      title: 'Online Reservation System',
      desc: 'Real-time table booking that works 24/7 and sends confirmation emails automatically.',
    },
    {
      title: 'Mobile-Optimized Menu',
      desc: 'Beautiful digital menu with photos, filters, and dietary labels that makes mouths water.',
    },
    {
      title: 'Google Maps & Local SEO',
      desc: 'Optimized to appear when hungry locals search for restaurants in your area.',
    },
    {
      title: 'Story & Atmosphere Pages',
      desc: 'Photography-first pages that sell the experience before customers arrive.',
    },
    {
      title: 'Events & Specials Section',
      desc: 'Promote live music, happy hours, and special menus to drive midweek footfall.',
    },
    {
      title: 'AI Chat for Bookings',
      desc: 'Handle reservation enquiries, dietary questions, and private dining requests automatically.',
    },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Hero */}
        <div className="mb-20">
          <span className="font-mono text-[11px] text-acid-cyan tracking-[0.25em] uppercase block mb-4">
            Restaurants
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary mb-6">
            Restaurant Websites That
            <span className="gradient-text"> Fill Every Table.</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl leading-relaxed mb-10">
            We've built websites for restaurant owners that went from zero online presence to consistent reservations. Your menu, your story, your booking — built to convert.
          </p>
          <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-acid-cyan text-bg-base font-bold rounded-xl hover:gap-5 transition-all">
            Get Your Free Growth Audit
          </a>
        </div>

        {/* Pain Points */}
        <div className="mb-20">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-12">
            What Empty Tables and Slow Nights Have in Common
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
            What We Built for Restaurant Owners
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
            We've Done This Before. We Can Do It for You.
          </h2>
          <p className="text-white/80 mb-8">
            We built restaurant websites that started generating online reservations within weeks. Yours could be next.
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
