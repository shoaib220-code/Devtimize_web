import { Metadata } from 'next';
import { ogImage } from '@/lib/og';
import { homeFaqs } from '@/lib/home-faq';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { Services } from '@/components/Services';
import { Stats } from '@/components/Stats';
import { Projects } from '@/components/Projects';
import { Team } from '@/components/Team';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": homeFaqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a,
    },
  })),
};

export const metadata: Metadata = {
  title: 'Devtimize — Web · Mobile · Desktop · AI Development Studio | Pakistan',
  description:
    'Devtimize builds production-grade web apps, mobile apps, AI chatbots, trading bots, and automation. Python, Flutter, React, .NET. Free quote in 24h.',
  alternates: {
    canonical: 'https://www.devtimize.com/',
  },
  openGraph: {
    title: 'Devtimize — Web · Mobile · Desktop · AI Development Studio | Pakistan',
    description:
      'Devtimize builds production-grade web apps, mobile apps, AI chatbots, trading bots, and automation. Python, Flutter, React, .NET. Free quote in 24h.',
    url: 'https://www.devtimize.com/',
    siteName: 'Devtimize',
    locale: 'en_US',
    type: 'website',
    images: ogImage('Web · Mobile · Desktop · AI Development Studio'),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devtimize — Web · Mobile · Desktop · AI Development Studio | Pakistan',
    description:
      'Devtimize builds production-grade web apps, mobile apps, AI chatbots, trading bots, and automation. Python, Flutter, React, .NET. Free quote in 24h.',
    images: ogImage('Web · Mobile · Desktop · AI Development Studio'),
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <Hero />
      <Marquee />
      <Services />
      <Stats />
      <Projects />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
