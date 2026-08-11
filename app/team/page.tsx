import { Metadata } from 'next';
import { ogImage } from '@/lib/og';
import { Team } from '@/components/Team';

export const metadata: Metadata = {
  title: 'Our Team | The Mind Behind Devtimize',
  description:
    'Meet the founder of Devtimize, Shoaib Liaqat — a hands-on engineer dedicated to building the future of digital experiences.',
  alternates: {
    canonical: 'https://www.devtimize.com/team/',
  },
  openGraph: {
    title: 'Our Team | The Mind Behind Devtimize',
    description:
      'Meet the founder of Devtimize, Shoaib Liaqat — a hands-on engineer dedicated to building the future of digital experiences.',
    url: 'https://www.devtimize.com/team/',
    siteName: 'Devtimize',
    locale: 'en_US',
    type: 'website',
    images: ogImage('The Mind Behind Devtimize'),
  },
};

export default function TeamPage() {
  return <Team />;
}
