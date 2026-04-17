import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { Services } from '@/components/Services';
import { Stats } from '@/components/Stats';
import { Projects } from '@/components/Projects';
import { Team } from '@/components/Team';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Devtimize — Web · Mobile · Desktop · AI Development Studio | Pakistan',
  description:
    'Devtimize builds production-grade web apps, mobile apps, AI chatbots, trading bots, and automation. Python, Flutter, React, .NET. Free quote in 24h.',
  alternates: {
    canonical: 'https://devtimize.com/',
  },
  openGraph: {
    title: 'Devtimize — Web · Mobile · Desktop · AI Development Studio | Pakistan',
    description:
      'Devtimize builds production-grade web apps, mobile apps, AI chatbots, trading bots, and automation. Python, Flutter, React, .NET. Free quote in 24h.',
    url: 'https://devtimize.com/',
    siteName: 'Devtimize',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Stats />
      <Projects />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
}
