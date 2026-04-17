import { Metadata } from 'next';
import { ProjectsPageContent } from '@/components/ProjectsPageContent';

export const metadata: Metadata = {
  title: 'Our Projects | Portfolio of Digital Excellence',
  description:
    'Explore our portfolio of successful projects across web development, mobile apps, AI solutions, and enterprise portals. See how we deliver value.',
  alternates: {
    canonical: 'https://devtimize.com/projects/',
  },
  openGraph: {
    title: 'Our Projects | Portfolio of Digital Excellence',
    description:
      'Explore our portfolio of successful projects across web development, mobile apps, AI solutions, and enterprise portals. See how we deliver value.',
    url: 'https://devtimize.com/projects/',
    siteName: 'Devtimize',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
