import { Metadata } from 'next';
import { HvacContent } from '@/components/industries/HvacContent';

export const metadata: Metadata = {
  title: 'HVAC Website Design That Fills Your Schedule | Devtimize',
  description: 'We build HVAC websites that turn searchers into booked jobs. AI chat, instant quote forms, and local SEO built in. Free audit.',
  alternates: {
    canonical: 'https://devtimize.com/industries/hvac-websites/',
  },
  openGraph: {
    title: 'HVAC Website Design That Fills Your Schedule | Devtimize',
    description: 'We build HVAC websites that turn searchers into booked jobs. AI chat, instant quote forms, and local SEO built in. Free audit.',
    url: 'https://devtimize.com/industries/hvac-websites/',
    siteName: 'Devtimize',
    locale: 'en_US',
    type: 'website',
  },
};

export default function HvacPage() {
  return <HvacContent />;
}
