'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, ChevronDown, ChevronUp, Quote } from 'lucide-react';
import { trackCTAClick } from '@/utils/analytics';
import { faqs, PUBLIC_PRICING_RANGE } from '@/lib/ai-receptionist-data';
import { MissedCallCalculator } from '@/components/MissedCallCalculator';

export const AiReceptionistContent = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const stats = [
    '62% of callers won\'t call back if they reach voicemail',
    '85% of people won\'t call a business twice',
    '1 in 3 missed calls becomes a competitor\'s client',
  ];

  const steps = [
    {
      number: '1',
      title: 'Customer calls your number after hours or during busy periods',
    },
    {
      number: '2',
      title: 'AI answers instantly, introduces itself as your assistant, and handles the conversation',
    },
    {
      number: '3',
      title: 'Qualifies the lead, books the appointment, or takes a message with full details',
    },
    {
      number: '4',
      title: 'You receive an instant notification with the transcript and next steps',
    },
  ];

  const features = [
    'Answer calls 24/7 including weekends and holidays',
    'Book appointments directly into your calendar',
    'Answer FAQs about your services and pricing',
    'Qualify leads and capture full contact details',
    'Send follow-up texts and confirmation messages',
    'Escalate urgent calls to your mobile instantly',
    'Handle multiple calls simultaneously — no hold music',
    'Works for any local business in any industry',
  ];

  const niches = [
    'HVAC',
    'Dentists',
    'Lawyers',
    'Medspas',
    'Roofing',
    'Plumbers',
    'Restaurants',
    'Real Estate',
  ];

  // Monthly range decomposed to a daily figure — math only, no favorable rounding.
  const dailyLow = Math.round(PUBLIC_PRICING_RANGE.monthlyLow / 30);
  const dailyHigh = Math.round(PUBLIC_PRICING_RANGE.monthlyHigh / 30);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* SECTION 1 - HERO (the wound) */}
        <div className="mb-20">
          <span className="font-mono text-[11px] text-acid-cyan tracking-[0.25em] uppercase block mb-4">
            AI Receptionist
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary mb-6">
            Every Missed Call Is a
            <span className="gradient-text"> Lost Client.</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl leading-relaxed mb-10">
            Your competitors are open 24/7 — not because they never sleep, but because they have an AI receptionist. We build AI that answers calls, books appointments, and qualifies leads while you focus on the work.
          </p>
          <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-acid-cyan text-bg-base font-bold rounded-xl hover:gap-5 transition-all">
            Book a Free Demo
          </a>
        </div>

        {/* SECTION 2 - PROBLEM (the wound, reinforced) */}
        <div className="mb-20 bg-bg-surface border border-bg-stroke rounded-3xl p-12">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-12 text-center">
            What Happens When You Miss a Call
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-acid-cyan mb-4">
                  {stat.split('%')[0]}%
                </div>
                <p className="text-text-secondary text-lg">{stat.split('%')[1]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3 - HOW IT WORKS (what the system fixes) */}
        <div className="mb-20">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-12 text-center">
            How Our AI Receptionist Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="p-8 bg-bg-surface border border-bg-stroke rounded-2xl h-full flex flex-col justify-between">
                  <div>
                    <div className="text-5xl font-display font-bold text-acid-cyan/20 mb-4">
                      {step.number}
                    </div>
                    <p className="text-text-secondary leading-relaxed">{step.title}</p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 translate-y-1/2">
                    <ArrowRight className="text-acid-cyan/30" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4 - SOCIAL PROOF (placed before cost-of-inaction and price, not after) */}
        <div className="mb-20">
          <div className="bg-bg-surface border border-bg-stroke rounded-3xl p-10 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-8 right-8 text-acid-cyan/10" size={80} />
            <p className="text-xl md:text-2xl text-text-primary leading-relaxed mb-6 relative z-10">
              "Changed the way we work... Highly recommended for anyone looking for serious software development."
            </p>
            <p className="text-text-secondary font-mono text-sm mb-8">— Nadeem, IT Care</p>
            <div className="h-[1px] w-full bg-bg-stroke mb-8" />
            <p className="text-text-secondary leading-relaxed">
              We've used this same technical approach to take a client's website from a basic template with zero search visibility to ranking on page 1 for their target local search.{' '}
              <span className="text-text-muted italic">(Full case study coming soon.)</span>
            </p>
          </div>
        </div>

        {/* SECTION 5 - COST OF INACTION */}
        <div className="mb-20">
          <MissedCallCalculator />
        </div>

        {/* SECTION 6 - VALUE STACK (everything the system does) */}
        <div className="mb-20">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-12 text-center">
            What Your AI Receptionist Can Do
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-bg-surface border border-bg-stroke rounded-2xl">
                <CheckCircle2 className="text-jade shrink-0" size={20} />
                <p className="text-text-secondary">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 7 - WHO IT'S FOR */}
        <div className="mb-20">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-12 text-center">
            Built for Local Businesses That Can't Afford to Miss Calls
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {niches.map((niche, i) => (
              <div key={i} className="p-8 bg-bg-surface border border-bg-stroke rounded-2xl text-center hover:border-acid-cyan/50 transition-colors">
                <p className="font-display text-lg font-bold text-text-primary">{niche}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary text-center mt-8 max-w-2xl mx-auto">
            Available for clinics, law firms, and local businesses in the United States, United Kingdom, Canada, Europe, Australia, and Kuwait.
          </p>
        </div>

        {/* SECTION 8 - INVESTMENT (price, last, with risk reversal) */}
        <div id="pricing" className="mb-20">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-6 text-center">
            The Investment
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
            A single missed call costing you a client is worth more than what this system replaces it with.
          </p>
          <div className="max-w-2xl mx-auto p-10 bg-bg-surface border border-bg-stroke rounded-3xl text-center">
            <p className="font-display text-3xl md:text-4xl font-bold text-acid-cyan mb-3">
              ${PUBLIC_PRICING_RANGE.setupLow.toLocaleString()}–${PUBLIC_PRICING_RANGE.setupHigh.toLocaleString()} setup
            </p>
            <p className="font-display text-3xl md:text-4xl font-bold text-acid-cyan mb-4">
              ${PUBLIC_PRICING_RANGE.monthlyLow}–${PUBLIC_PRICING_RANGE.monthlyHigh}/month
            </p>
            <p className="text-text-secondary mb-2">
              Depending on scope — call volume, number of locations, and integrations.
            </p>
            <p className="text-text-muted text-sm mb-8">
              That works out to roughly ${dailyLow}–${dailyHigh}/day — less than most businesses spend on things that don't bring in a single customer.
            </p>
            <div className="flex items-center justify-center gap-2 text-jade text-sm font-mono mb-8">
              <CheckCircle2 size={16} />
              Month-to-month, no long-term lock-in
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-acid-cyan text-bg-base font-bold rounded-xl hover:gap-4 transition-all"
              onClick={() => trackCTAClick('Book a Call for Quote', 'ai_receptionist_page')}
            >
              Book a Call for Your Exact Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* SECTION 9 - FAQ */}
        <div className="mb-20">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-12 text-center">
            Common Questions
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-bg-stroke rounded-2xl overflow-hidden bg-bg-surface hover:border-acid-cyan/50 transition-colors">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  aria-expanded={expandedFaq === i}
                  className="w-full p-6 flex items-center justify-between text-left group"
                >
                  <h3 className="font-bold text-text-primary group-hover:text-acid-cyan transition-colors">{faq.q}</h3>
                  {expandedFaq === i ? (
                    <ChevronUp className="text-acid-cyan shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-text-secondary group-hover:text-acid-cyan transition-colors shrink-0" size={20} />
                  )}
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{ gridTemplateRows: expandedFaq === i ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-text-secondary leading-relaxed border-t border-bg-stroke">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 10 - CTA */}
        <div className="bg-grad-brand rounded-3xl p-12 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Wake Up to Booked Appointments Tomorrow
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Setup takes 48 hours. The first missed call it catches pays for months of service.
          </p>
          <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-bg-base font-bold rounded-xl hover:gap-5 transition-all">
            Book Your Free Demo
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
