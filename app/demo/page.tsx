import { Metadata } from 'next';
import { ogImage } from '@/lib/og';
import { DemoContent } from '@/components/DemoContent';

export const metadata: Metadata = {
  title: 'See How It Handles a Real Call | AI Receptionist Demo | Devtimize',
  description: 'Watch a real AI receptionist call — no editing, no script. See how it answers, qualifies the caller, and books the appointment directly into the calendar.',
  alternates: {
    canonical: 'https://www.devtimize.com/demo/',
  },
  openGraph: {
    title: 'See How It Handles a Real Call | AI Receptionist Demo | Devtimize',
    description: 'Watch a real AI receptionist call — no editing, no script. See how it answers, qualifies the caller, and books the appointment directly into the calendar.',
    url: 'https://www.devtimize.com/demo/',
    siteName: 'Devtimize',
    locale: 'en_US',
    type: 'website',
    images: ogImage('Live Demo', 'Watch a Real AI Receptionist Call'),
  },
};

export default function DemoPage() {
  return <DemoContent />;
}
