import { Metadata } from 'next';
import { Contact } from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact Devtimize | Start Your Project',
  description:
    'Ready to bring your idea to life? Contact Devtimize for a free consultation. We specialize in web, mobile, and AI solutions.',
  alternates: {
    canonical: 'https://devtimize.com/contact/',
  },
  openGraph: {
    title: 'Contact Devtimize | Start Your Project',
    description:
      'Ready to bring your idea to life? Contact Devtimize for a free consultation. We specialize in web, mobile, and AI solutions.',
    url: 'https://devtimize.com/contact/',
    siteName: 'Devtimize',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ContactPage() {
  return <Contact />;
}
