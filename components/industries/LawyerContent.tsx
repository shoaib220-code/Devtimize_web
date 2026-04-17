'use client';

import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const LawyerContent = () => {
  const painPoints = [
    {
      title: 'No Trust Signals',
      desc: 'Prospective clients are scared. Your website needs to communicate authority, wins, and credibility within 5 seconds.',
    },
    {
      title: 'Zero Consultation Bookings',
      desc: 'If your contact page is just a form with no calendar, you\'re adding friction that costs you cases.',
    },
    {
      title: 'Not Found on Google',
      desc: '"Personal injury lawyer near me" gets thousands of searches daily. Without SEO you are invisible.',
    },
  ];

  const features = [
    {
      title: 'Authority-First Design',
      desc: 'Professional design that communicates trust, credibility, and results before a word is read.',
    },
    {
      title: 'Practice Area Pages',
      desc: 'Dedicated SEO pages per practice area — personal injury, family law, criminal defense — each ranking for its own keyword cluster.',
    },
    {
      title: 'Consultation Booking',
      desc: 'Integrated calendar booking for free consultations, reducing the barrier to first contact.',
    },
    {
      title: 'Attorney Profiles',
      desc: 'Detailed lawyer bio pages with qualifications, cases won, and human photos that build connection.',
    },
    {
      title: 'Case Results & Testimonials',
      desc: 'Social proof displayed prominently to convert hesitant visitors into enquiries.',
    },
    {
      title: 'AI Chat for After-Hours',
      desc: 'Capture enquiries 24/7. Most legal searches happen evenings and weekends — be there.',
    },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Hero */}
        <div className="mb-20">
          <span className="font-mono text-[11px] text-acid-cyan tracking-[0.25em] uppercase block mb-4">
            Lawyers
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary mb-6">
            Law Firm Websites That
            <span className="gradient-text"> Win Cases Before Court.</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl leading-relaxed mb-10">
            Personal injury lawyers spend $1,000+ per lead on ads. We build law firm websites that generate leads organically — authority design, local SEO, and consultation booking that converts.
          </p>
          <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-acid-cyan text-bg-base font-bold rounded-xl hover:gap-5 transition-all">
            Get Your Free Growth Audit
          </a>
        </div>

        {/* Pain Points */}
        <div className="mb-20">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-12">
            Why Law Firms Lose Clients Online
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
            What We Build for Law Firms
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
            Your Competitors Are Getting the Cases You Should Win
          </h2>
          <p className="text-white/80 mb-8">
            A converting law firm website pays for itself with a single case. Let's build yours.
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
