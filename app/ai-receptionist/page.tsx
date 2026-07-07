import { Metadata } from 'next';
import { ogImage } from '@/lib/og';
import { AiReceptionistContent } from '@/components/industries/AiReceptionistContent';
import { faqs, PUBLIC_PRICING_RANGE } from '@/lib/ai-receptionist-data';

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI Receptionist",
  "name": "Devtimize AI Receptionist",
  "description":
    'AI receptionist that answers calls 24/7, books appointments, and answers FAQs for local businesses like HVAC, dental, legal, medspa, roofing, plumbing, and restaurants.',
  "provider": {
    "@type": "Organization",
    "name": "Devtimize",
    "url": "https://devtimize.com",
  },
  "areaServed": [
    "United States", "United Kingdom", "Canada", "Germany", "France",
    "Spain", "Netherlands", "Sweden", "Australia", "Kuwait",
  ],
  "url": "https://devtimize.com/ai-receptionist/",
  // A range, not a fixed checkout price — AggregateOffer with lowPrice/highPrice is the
  // schema.org-correct pattern here, not a set of discrete named Offers.
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": PUBLIC_PRICING_RANGE.currency,
    "lowPrice": PUBLIC_PRICING_RANGE.monthlyLow,
    "highPrice": PUBLIC_PRICING_RANGE.monthlyHigh,
    "offerCount": 1,
    "description": `Monthly cost depends on scope. One-time setup ranges from $${PUBLIC_PRICING_RANGE.setupLow.toLocaleString()}-$${PUBLIC_PRICING_RANGE.setupHigh.toLocaleString()}. Contact for an exact quote.`,
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a,
    },
  })),
};

export const metadata: Metadata = {
  title: 'AI Receptionist for Local Businesses | Never Miss a Call | Devtimize',
  description: 'Our AI receptionist handles missed calls 24/7, books appointments, and answers questions. Your clients wake up to booked calls, not voicemails.',
  alternates: {
    canonical: 'https://devtimize.com/ai-receptionist/',
  },
  openGraph: {
    title: 'AI Receptionist for Local Businesses | Never Miss a Call | Devtimize',
    description: 'Our AI receptionist handles missed calls 24/7, books appointments, and answers questions. Your clients wake up to booked calls, not voicemails.',
    url: 'https://devtimize.com/ai-receptionist/',
    siteName: 'Devtimize',
    locale: 'en_US',
    type: 'website',
    images: ogImage('AI Receptionist', 'Never Miss a Call Again'),
  },
};

export default function AiReceptionistPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <AiReceptionistContent />
    </>
  );
}
