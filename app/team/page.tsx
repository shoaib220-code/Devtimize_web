import { Metadata } from 'next';
import { ogImage } from '@/lib/og';
import { Team } from '@/components/Team';

export const metadata: Metadata = {
  title: 'Our Team | The Minds Behind Devtimize',
  description:
    'Meet the founders of Devtimize, Shoaib Liaqat and Hamza Amin. A team of passionate engineers dedicated to building the future of digital experiences.',
  alternates: {
    canonical: 'https://www.devtimize.com/team/',
  },
  openGraph: {
    title: 'Our Team | The Minds Behind Devtimize',
    description:
      'Meet the founders of Devtimize, Shoaib Liaqat and Hamza Amin. A team of passionate engineers dedicated to building the future of digital experiences.',
    url: 'https://www.devtimize.com/team/',
    siteName: 'Devtimize',
    locale: 'en_US',
    type: 'website',
    images: ogImage('The Minds Behind Devtimize'),
  },
};

export default function TeamPage() {
  return <Team />;
}
