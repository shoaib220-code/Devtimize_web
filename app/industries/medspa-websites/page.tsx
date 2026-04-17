import { Metadata } from 'next';
import { MedspaContent } from '@/components/industries/MedspaContent';

export const metadata: Metadata = {
  title: 'Medspa Website Design That Books Treatments | Devtimize',
  description: 'Luxury medspa websites with online booking, treatment galleries, and local SEO. Built to attract high-value clients in USA, UK and Canada.',
  alternates: {
    canonical: 'https://devtimize.com/industries/medspa-websites/',
  },
  openGraph: {
    title: 'Medspa Website Design That Books Treatments | Devtimize',
    description: 'Luxury medspa websites with online booking, treatment galleries, and local SEO. Built to attract high-value clients in USA, UK and Canada.',
    url: 'https://devtimize.com/industries/medspa-websites/',
    siteName: 'Devtimize',
    locale: 'en_US',
    type: 'website',
  },
};

export default function MedspaPage() {
  return <MedspaContent />;
}
