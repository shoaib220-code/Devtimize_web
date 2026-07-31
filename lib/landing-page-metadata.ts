import { Metadata } from 'next';
import { ogImage } from '@/lib/og';
import { landingPages, LandingPageData } from '@/lib/landing-pages-data';
import { PUBLIC_PRICING_RANGE } from '@/lib/ai-receptionist-data';

export function getLandingPage(slug: string): LandingPageData {
  const page = landingPages.find((p) => p.slug === slug);
  if (!page) {
    throw new Error(`Landing page not found for slug: ${slug}`);
  }
  return page;
}

export function buildLandingPageMetadata(page: LandingPageData): Metadata {
  const url = `https://www.devtimize.com/${page.slug}/`;
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      siteName: 'Devtimize',
      locale: 'en_US',
      type: 'website',
      images: ogImage(page.ogTitle, page.ogSubtitle),
    },
  };
}

export function buildFaqSchema(page: LandingPageData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

// Mirrors the Service schema pattern in app/services/[slug]/page.tsx — adapted for
// landing pages, which price via PUBLIC_PRICING_RANGE rather than a fixed min/max.
export function buildServiceSchema(page: LandingPageData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: page.ogTitle,
    name: page.ogTitle,
    description: page.metaDescription,
    provider: {
      '@type': 'Organization',
      name: 'Devtimize',
      url: 'https://www.devtimize.com',
    },
    areaServed: [
      'United States', 'United Kingdom', 'Canada', 'Germany', 'France',
      'Spain', 'Netherlands', 'Sweden', 'Australia', 'Kuwait',
    ],
    url: `https://www.devtimize.com/${page.slug}/`,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: PUBLIC_PRICING_RANGE.currency,
      lowPrice: PUBLIC_PRICING_RANGE.monthlyLow,
      highPrice: PUBLIC_PRICING_RANGE.monthlyHigh,
    },
  };
}
