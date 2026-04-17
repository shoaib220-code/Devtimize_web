import { Metadata } from 'next';
import { AiReceptionistContent } from '@/components/industries/AiReceptionistContent';

export const metadata: Metadata = {
  title: 'AI Receptionist for Local Businesses | Never Miss a Call | Devtimize',
  description: 'Our AI receptionist handles missed calls 24/7, books appointments, and answers questions. Your clients wake up to booked calls, not voicemails.',
  alternates: {
    canonical: 'https://devtimize.com/ai-receptionist/',
  },
  openGraph: {
    title: 'AI Receptionist for Local Businesses | Never Miss a Call | Devtimize',
    description: 'Our AI receptionist handles missed calls 24/7, books appointments, and answers questions. Your clients wake up to booked calls, not voicemails.',
    url: 'https://devtimize.com/ai-receptionist/',
    siteName: 'Devtimize',
    locale: 'en_US',
    type: 'website',
  },
};

export default function AiReceptionistPage() {
  return <AiReceptionistContent />;
}
