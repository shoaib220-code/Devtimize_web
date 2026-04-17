import { Metadata } from 'next';
import { LawyerContent } from '@/components/industries/LawyerContent';

export const metadata: Metadata = {
  title: 'Law Firm Website Design That Generates Cases | Devtimize',
  description: 'We build law firm websites that rank on Google, build authority, and convert visitors into consultation bookings. Trusted by firms in US and UK.',
  alternates: {
    canonical: 'https://devtimize.com/industries/lawyer-websites/',
  },
  openGraph: {
    title: 'Law Firm Website Design That Generates Cases | Devtimize',
    description: 'We build law firm websites that rank on Google, build authority, and convert visitors into consultation bookings. Trusted by firms in US and UK.',
    url: 'https://devtimize.com/industries/lawyer-websites/',
    siteName: 'Devtimize',
    locale: 'en_US',
    type: 'website',
  },
};

export default function LawyerPage() {
  return <LawyerContent />;
}
