import { Metadata } from 'next';
import { DentistContent } from '@/components/industries/DentistContent';

export const metadata: Metadata = {
  title: 'Dental Website Design That Books Appointments | Devtimize',
  description: 'Custom dental websites with online booking, patient chat, and local SEO. A new patient is worth $1,000+. Your website should reflect that.',
  alternates: {
    canonical: 'https://devtimize.com/industries/dentist-websites/',
  },
  openGraph: {
    title: 'Dental Website Design That Books Appointments | Devtimize',
    description: 'Custom dental websites with online booking, patient chat, and local SEO. A new patient is worth $1,000+. Your website should reflect that.',
    url: 'https://devtimize.com/industries/dentist-websites/',
    siteName: 'Devtimize',
    locale: 'en_US',
    type: 'website',
  },
};

export default function DentistPage() {
  return <DentistContent />;
}
