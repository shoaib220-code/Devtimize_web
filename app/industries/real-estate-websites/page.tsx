import { Metadata } from 'next';
import { ogImage } from '@/lib/og';
import { RealEstateContent } from '@/components/industries/RealEstateContent';

export const metadata: Metadata = {
  title: 'Real Estate Website Design That Converts Buyers | Devtimize',
  description: 'We build real estate websites with fast listing pages, AI chat, and instant inquiry capture. Mobile-first, fast, and built to generate leads 24/7.',
  alternates: {
    canonical: 'https://www.devtimize.com/industries/real-estate-websites/',
  },
  openGraph: {
    title: 'Real Estate Website Design That Converts Buyers | Devtimize',
    description: 'We build real estate websites with fast listing pages, AI chat, and instant inquiry capture. Mobile-first, fast, and built to generate leads 24/7.',
    url: 'https://www.devtimize.com/industries/real-estate-websites/',
    siteName: 'Devtimize',
    locale: 'en_US',
    type: 'website',
    images: ogImage('Real Estate Websites', 'That Convert Buyers'),
  },
};

export default function RealEstatePage() {
  return <RealEstateContent />;
}
