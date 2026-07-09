import { Metadata } from 'next';
import { ogImage } from '@/lib/og';
import { landingPages, LandingPageData } from '@/lib/landing-pages-data';

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
