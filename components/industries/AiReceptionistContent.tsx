'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { trackCTAClick } from '@/utils/analytics';

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

  const pricingTiers = [
    {
      name: 'Starter',
      price: '97',
      calls: 'Up to 100 calls/month',
      features: [
        'Appointment booking',
        'SMS notifications',
        'Basic FAQ answers',
      ],
    },
    {
      name: 'Growth',
      price: '197',
      calls: 'Up to 300 calls/month',
      features: [
        'Everything in Starter',
        'CRM integration',
        'Custom voice & personality',
        'Weekly call reports',
      ],
    },
    {
      name: 'Elite',
      price: '397',
      calls: 'Unlimited calls',
      features: [
        'Everything in Growth',
        'Priority escalation',
        'Multi-location support',
        'Dedicated account manager',
      ],
    },
  ];

  const faqs = [
    {
      q: 'Does it sound like a robot?',
      a: 'No. Our AI uses natural conversational speech that is warm, professional, and indistinguishable from a real receptionist in most cases.',
    },
    {
      q: 'What happens for complex questions?',
      a: 'The AI handles common questions automatically. For anything complex, it takes a detailed message and notifies you immediately.',
    },
    {
      q: 'How long does setup take?',
      a: 'Most businesses are live within 48 hours. We handle the entire setup — you just forward calls.',
    },
    {
      q: 'Can I see a transcript of every call?',
      a: 'Yes. Every call is transcribed and sent to you with a summary and any action items.',
    },
    {
      q: 'Does it work for my type of business?',
      a: 'If your business takes phone enquiries or appointment bookings, it works. We\'ve set it up for HVAC, dental, legal, medspa, roofing, restaurants, and more.',
    },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* SECTION 1 - HERO */}
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

        {/* SECTION 2 - PROBLEM */}
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

        {/* SECTION 3 - HOW IT WORKS */}
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

        {/* SECTION 4 - FEATURES GRID */}
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

        {/* SECTION 5 - WHO IT'S FOR */}
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
        </div>

        {/* SECTION 6 - PRICING */}
        <div className="mb-20">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-12 text-center">
            Simple Pricing. No Contracts.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, i) => (
              <div key={i} className="p-8 bg-bg-surface border border-bg-stroke rounded-3xl flex flex-col">
                <h3 className="font-display text-2xl font-bold text-text-primary mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="font-display text-5xl font-bold text-acid-cyan">${tier.price}</span>
                  <span className="text-text-secondary">/month</span>
                </div>
                <p className="text-text-secondary mb-8">{tier.calls}</p>
                <ul className="space-y-4 flex-grow">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-jade shrink-0 mt-1" />
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?package=${encodeURIComponent(tier.name)}#contact`}
                  className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 bg-acid-cyan text-bg-base font-bold rounded-xl hover:gap-4 transition-all w-full"
                  onClick={() => trackCTAClick(`${tier.name} Package`, 'ai_receptionist_page')}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 7 - FAQ */}
        <div className="mb-20">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-12 text-center">
            Common Questions
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-bg-stroke rounded-2xl overflow-hidden bg-bg-surface hover:border-acid-cyan/50 transition-colors">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left group"
                >
                  <h3 className="font-bold text-text-primary group-hover:text-acid-cyan transition-colors">{faq.q}</h3>
                  {expandedFaq === i ? (
                    <ChevronUp className="text-acid-cyan shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-text-secondary group-hover:text-acid-cyan transition-colors shrink-0" size={20} />
                  )}
                </button>
                {expandedFaq === i && (
                  <div className="px-6 pb-6 text-text-secondary leading-relaxed border-t border-bg-stroke">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 8 - CTA */}
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
