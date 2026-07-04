import { Metadata } from 'next';
import { ogImage } from '@/lib/og';
import { ServicesPageContent } from '@/components/ServicesPageContent';
import { servicesFaqs } from '@/lib/services-faq';

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": servicesFaqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a,
    },
  })),
};

export const metadata: Metadata = {
  title: 'Our Services | Expert Software Engineering',
  description:
    'Explore our range of services including Web Development, Mobile Apps, AI Integration, and Cloud Infrastructure. Tailored solutions for your business.',
  alternates: {
    canonical: 'https://devtimize.com/services/',
  },
  openGraph: {
    title: 'Our Services | Expert Software Engineering',
    description:
      'Explore our range of services including Web Development, Mobile Apps, AI Integration, and Cloud Infrastructure. Tailored solutions for your business.',
    url: 'https://devtimize.com/services/',
    siteName: 'Devtimize',
    locale: 'en_US',
    type: 'website',
    images: ogImage('Expert Software Engineering'),
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <ServicesPageContent />
    </>
  );
}
