'use client';

import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const DentistContent = () => {
  const painPoints = [
    {
      title: 'No Online Booking',
      desc: '85% of patients want to book online. If your site still says "call us", you\'re losing them to the practice down the road.',
    },
    {
      title: 'Outdated Design',
      desc: 'Patients judge your clinical quality by your website design. An outdated site signals outdated care.',
    },
    {
      title: 'Not Ranking Locally',
      desc: 'If you\'re not in the top 3 Google results for "dentist near me", you\'re invisible to 90% of searchers.',
    },
  ];

  const features = [
    {
      title: 'Online Appointment Booking',
      desc: 'Real-time booking integration so patients can schedule at any time without calling.',
    },
    {
      title: 'Patient Testimonials Section',
      desc: 'Automated review display that builds trust and converts first-time visitors.',
    },
    {
      title: 'Service Pages for Every Treatment',
      desc: 'Dedicated SEO pages for implants, whitening, orthodontics — each ranking for its own keywords.',
    },
    {
      title: 'HIPAA-Conscious Design',
      desc: 'Contact forms and patient intake built with privacy and compliance in mind.',
    },
    {
      title: 'Before/After Gallery',
      desc: 'Visual proof of your work displayed beautifully to convert hesitant visitors.',
    },
    {
      title: 'AI Receptionist Add-on',
      desc: 'Never miss a new patient call again. Our AI handles after-hours enquiries and books appointments.',
    },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Hero */}
        <div className="mb-20">
          <span className="font-mono text-[11px] text-acid-cyan tracking-[0.25em] uppercase block mb-4">
            Dentists
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary mb-6">
            Dental Websites That Turn Visitors into
            <span className="gradient-text"> Booked Patients.</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl leading-relaxed mb-10">
            A new dental patient is worth over $1,000 in lifetime value. We build dental websites that make booking effortless, build trust instantly, and dominate local search.
          </p>
          <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-acid-cyan text-bg-base font-bold rounded-xl hover:gap-5 transition-all">
            Get Your Free Growth Audit
          </a>
        </div>

        {/* Pain Points */}
        <div className="mb-20">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-12">
            What's Costing Your Practice New Patients
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
            Everything Your Dental Website Needs
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
            Your Next 10 Patients Are Searching Right Now
          </h2>
          <p className="text-white/80 mb-8">
            Every day without a converting dental website is a day you're losing high-value patients to competitors.
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
