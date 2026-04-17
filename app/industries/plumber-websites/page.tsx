import { Metadata } from 'next';
import { PlumberContent } from '@/components/industries/PlumberContent';

export const metadata: Metadata = {
  title: 'Plumber Website Design That Gets Emergency Calls | Devtimize',
  description: 'We build plumber websites that rank for emergency searches and convert visitors into booked jobs. Fast, mobile-first, and built to generate calls 24/7.',
  alternates: {
    canonical: 'https://devtimize.com/industries/plumber-websites/',
  },
  openGraph: {
    title: 'Plumber Website Design That Gets Emergency Calls | Devtimize',
    description: 'We build plumber websites that rank for emergency searches and convert visitors into booked jobs. Fast, mobile-first, and built to generate calls 24/7.',
    url: 'https://devtimize.com/industries/plumber-websites/',
    siteName: 'Devtimize',
    locale: 'en_US',
    type: 'website',
  },
};

export default function PlumberPage() {
  return <PlumberContent />;
}
