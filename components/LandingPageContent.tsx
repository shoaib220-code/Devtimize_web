'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, ChevronDown, ChevronUp, Quote } from 'lucide-react';
import { trackCTAClick } from '@/utils/analytics';
import type { LandingPageData } from '@/lib/landing-pages-data';

export const LandingPageContent = ({ data }: { data: LandingPageData }) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* HERO - the pain */}
        <div className="mb-20">
          <span className="font-mono text-[11px] text-acid-cyan tracking-[0.25em] uppercase block mb-4">
            {data.kicker}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-6">
            {data.h1}
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl leading-relaxed mb-10">
            {data.painParagraph}
          </p>
          <Link
            href="/contact"
            onClick={() => trackCTAClick(data.ctaLabel, `landing_${data.slug}`)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-acid-cyan text-bg-base font-bold rounded-xl hover:gap-5 transition-all"
          >
            {data.ctaLabel}
          </Link>
        </div>

        {/* WHAT IT FIXES */}
        <div className="mb-20 bg-bg-surface border border-bg-stroke rounded-3xl p-10 md:p-12">
          <h2 className="font-display text-3xl font-bold text-text-primary mb-4">
            {data.whatItFixesHeading || 'What This Fixes'}
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            {data.whatItFixes}
          </p>
        </div>

        {/* SOCIAL PROOF */}
        <div className="mb-20">
          <div className="bg-bg-surface border border-bg-stroke rounded-3xl p-10 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-8 right-8 text-acid-cyan/10" size={80} />
            {data.socialProofQuote && (
              <>
                <p className="text-xl md:text-2xl text-text-primary leading-relaxed mb-6 relative z-10">
                  "{data.socialProofQuote.text}"
                </p>
                <p className="text-text-secondary font-mono text-sm mb-8">— {data.socialProofQuote.author}</p>
                <div className="h-[1px] w-full bg-bg-stroke mb-8" />
              </>
            )}
            <p className="text-text-secondary leading-relaxed mb-4">{data.socialProofCaseStudy}</p>
            <Link href="/blog/parker-electrical-solutions-seo-case-study" className="text-acid-cyan font-mono text-sm hover:underline">
              Read the full case study →
            </Link>
          </div>
        </div>

        {/* COST OF INACTION */}
        <div className="mb-20">
          <h2 className="font-display text-3xl font-bold text-text-primary mb-4 text-center">
            What This Is Already Costing You
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-3xl mx-auto text-center">
            {data.costOfInaction}
          </p>
        </div>

        {/* VALUE STACK */}
        <div className="mb-20">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-12 text-center">
            What's Included
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.valueStack.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-bg-surface border border-bg-stroke rounded-2xl">
                <CheckCircle2 className="text-jade shrink-0" size={20} />
                <p className="text-text-secondary">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* COMPARISON TABLE */}
        <div className="mb-20 overflow-x-auto">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-12 text-center">
            How This Compares
          </h2>
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr>
                {data.comparisonTable.headers.map((h, i) => (
                  <th
                    key={i}
                    className={`text-left p-4 border border-bg-stroke font-display text-sm ${i === 0 ? 'bg-bg-base text-text-muted' : 'bg-bg-surface text-acid-cyan'}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.comparisonTable.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`p-4 border border-bg-stroke text-sm ${j === 0 ? 'font-bold text-text-primary' : 'text-text-secondary'}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* INVESTMENT (price, last, with risk reversal) */}
        <div id="pricing" className="mb-20">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-12 text-center">
            The Investment
          </h2>
          <div className="max-w-2xl mx-auto p-10 bg-bg-surface border border-bg-stroke rounded-3xl text-center">
            <p className="font-display text-3xl md:text-4xl font-bold text-acid-cyan mb-4">
              {data.investmentHeadline}
            </p>
            <p className="text-text-secondary mb-8">{data.investmentNote}</p>
            <div className="flex items-center justify-center gap-2 text-jade text-sm font-mono mb-8">
              <CheckCircle2 size={16} />
              {data.riskReversal}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-acid-cyan text-bg-base font-bold rounded-xl hover:gap-4 transition-all"
              onClick={() => trackCTAClick(data.ctaLabel, `landing_${data.slug}_pricing`)}
            >
              {data.ctaLabel}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-12 text-center">
            Common Questions
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {data.faqs.map((faq, i) => (
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

        {/* INTERNAL LINKS */}
        <div className="mb-20">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-6 text-center">
            Related
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.internalLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="px-5 py-3 bg-bg-surface border border-bg-stroke rounded-xl text-text-secondary hover:text-acid-cyan hover:border-acid-cyan/50 transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/"
              className="px-5 py-3 bg-bg-surface border border-bg-stroke rounded-xl text-text-secondary hover:text-acid-cyan hover:border-acid-cyan/50 transition-colors text-sm"
            >
              Home
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-grad-brand rounded-3xl p-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Stop Losing Business to This?
          </h2>
          <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-bg-base font-bold rounded-xl hover:gap-5 transition-all">
            {data.ctaLabel}
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};
