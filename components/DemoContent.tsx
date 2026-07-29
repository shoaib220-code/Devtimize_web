'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { trackCTAClick } from '@/utils/analytics';

const YOUTUBE_VIDEO_ID = 'Cxcse8fAWek';

export const DemoContent = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 text-center">
        <span className="font-mono text-[11px] text-acid-cyan tracking-[0.25em] uppercase block mb-4">
          Live Demo
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-6">
          Watch Your Missed Calls
          <span className="gradient-text"> Turn Into Booked Jobs.</span>
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed mb-12 max-w-2xl mx-auto">
          This is a real call handled by our AI receptionist — no editing, no script. Watch how it answers, qualifies the caller, and books the appointment directly into the calendar, the same way it would for your business.
        </p>

        <div className="relative aspect-video rounded-3xl overflow-hidden border border-bg-stroke shadow-2xl mb-16">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
            title="AI Receptionist Live Call Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className="bg-bg-surface border border-bg-stroke rounded-3xl p-10 md:p-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Want This Answering Calls for Your Business?
          </h2>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto">
            Book a call and we'll show you exactly how it would work for your specific business — no obligation.
          </p>
          <Link
            href="/contact"
            onClick={() => trackCTAClick('Book a Call', 'demo_page')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-acid-cyan text-bg-base font-bold rounded-xl hover:gap-5 transition-all"
          >
            Book a Call
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};
