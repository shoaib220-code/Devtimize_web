import { Metadata } from 'next';
import { ServicesPageContent } from '@/components/ServicesPageContent';

export const metadata: Metadata = {
  title: 'Our Services | Expert Software Engineering',
  description:
    'Explore our range of services including Web Development, Mobile Apps, AI Integration, and Cloud Infrastructure. Tailored solutions for your business.',
  alternates: {
    canonical: 'https://devtimize.com/services/',
  },
  openGraph: {
    title: 'Our Services | Expert Software Engineering',
    description:
      'Explore our range of services including Web Development, Mobile Apps, AI Integration, and Cloud Infrastructure. Tailored solutions for your business.',
    url: 'https://devtimize.com/services/',
    siteName: 'Devtimize',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
