import { Metadata } from 'next';
import { Testimonials } from '@/components/Testimonials';

export const metadata: Metadata = {
  title: 'Client Testimonials | What Our Partners Say',
  description:
    'Read reviews and success stories from our clients. See how Devtimize has helped businesses transform their digital landscape.',
  alternates: {
    canonical: 'https://devtimize.com/testimonials/',
  },
  openGraph: {
    title: 'Client Testimonials | What Our Partners Say',
    description:
      'Read reviews and success stories from our clients. See how Devtimize has helped businesses transform their digital landscape.',
    url: 'https://devtimize.com/testimonials/',
    siteName: 'Devtimize',
    locale: 'en_US',
    type: 'website',
  },
};

export default function TestimonialsPage() {
  return <Testimonials />;
}
