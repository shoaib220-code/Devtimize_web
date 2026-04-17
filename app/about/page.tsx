import { Metadata } from 'next';
import { AboutContent } from '@/components/AboutContent';

export const metadata: Metadata = {
  title: 'About Devtimize | Our Story & Mission',
  description:
    'Learn about Devtimize, a product engineering studio founded by Shoaib Liaqat and Hamza Amin. Discover our mission to build high-quality digital assets.',
  alternates: {
    canonical: 'https://devtimize.com/about/',
  },
  openGraph: {
    title: 'About Devtimize | Our Story & Mission',
    description:
      'Learn about Devtimize, a product engineering studio founded by Shoaib Liaqat and Hamza Amin. Discover our mission to build high-quality digital assets.',
    url: 'https://devtimize.com/about/',
    siteName: 'Devtimize',
    locale: 'en_US',
    type: 'website',
  },
};

export default function About() {
  return <AboutContent />;
}
