import { Metadata } from 'next';
import { RoofingContent } from '@/components/industries/RoofingContent';

export const metadata: Metadata = {
  title: 'Roofing Company Website Design That Gets Calls | Devtimize',
  description: 'We build roofing websites that rank on Google and convert visitors into quote requests. Mobile-first, fast, and built to generate leads 24/7.',
  alternates: {
    canonical: 'https://devtimize.com/industries/roofing-websites/',
  },
  openGraph: {
    title: 'Roofing Company Website Design That Gets Calls | Devtimize',
    description: 'We build roofing websites that rank on Google and convert visitors into quote requests. Mobile-first, fast, and built to generate leads 24/7.',
    url: 'https://devtimize.com/industries/roofing-websites/',
    siteName: 'Devtimize',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RoofingPage() {
  return <RoofingContent />;
}
