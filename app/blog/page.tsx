import { Metadata } from 'next';
import { BlogPageContent } from '@/components/BlogPageContent';

export const metadata: Metadata = {
  title: 'Dev Blog — Tips, Case Studies & Tutorials | Devtimize',
  description:
    'Technical articles from the Devtimize team on AI development, web apps, mobile apps, trading bots, and hiring developers.',
  alternates: {
    canonical: 'https://devtimize.com/blog/',
  },
  openGraph: {
    title: 'Dev Blog — Tips, Case Studies & Tutorials | Devtimize',
    description:
      'Technical articles from the Devtimize team on AI development, web apps, mobile apps, trading bots, and hiring developers.',
    url: 'https://devtimize.com/blog/',
    siteName: 'Devtimize',
    locale: 'en_US',
    type: 'website',
  },
};

export default function BlogPage() {
  return <BlogPageContent />;
}
