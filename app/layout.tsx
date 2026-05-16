import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { Loader } from '@/components/Loader';
import { DevBot } from '@/components/DevBot';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BackToTop } from '@/components/BackToTop';

const PROFESSIONAL_SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Devtimize",
  "url": "https://devtimize.com",
  "areaServed": [
    {"@type": "Country", "name": "United States"},
    {"@type": "Country", "name": "United Kingdom"},
    {"@type": "Country", "name": "Canada"},
    {"@type": "Country", "name": "Germany"},
    {"@type": "Country", "name": "France"},
    {"@type": "Country", "name": "Spain"},
    {"@type": "Country", "name": "Netherlands"},
    {"@type": "Country", "name": "Sweden"},
    {"@type": "Country", "name": "Australia"}
  ],
  "serviceType": ["Web Development", "Mobile App Development", "SEO Optimization"]
};

export const metadata: Metadata = {
  metadataBase: new URL('https://devtimize.com'),
  title: 'Devtimize | Product engineering studio | USA, UK, Canada & Europe',
  description:
    'Product engineering studio serving USA, UK, Canada, Europe, and Australia with web apps, mobile apps, AI systems, and SEO optimization.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      'en-US': '/',
      'en-GB': '/',
      'en-CA': '/',
      'en-DE': '/',
      'en-FR': '/',
      'en-ES': '/',
      'en-NL': '/',
      'en-SE': '/',
      'en-AU': '/',
    },
  },
  openGraph: {
    title: 'Devtimize | Web Development Agency | USA, UK, Canada & Europe',
    description:
      'Custom web apps and SEO optimization for global enterprises in the USA, UK, Canada, Europe, and Australia.',
    url: 'https://devtimize.com',
    siteName: 'Devtimize',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devtimize | Web Development Agency | USA, UK, Canada & Europe',
    description:
      'Custom web apps and SEO optimization for global enterprises in the USA, UK, Canada, Europe, and Australia.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PROFESSIONAL_SERVICE_SCHEMA) }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PV0DEWF85F"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PV0DEWF85F');
            `,
          }}
        />
      </head>
      <body>
        <CustomCursor />
        <Loader />
        <Navbar />
        <div className="min-h-screen selection:bg-acid-cyan/30 selection:text-acid-cyan">
          <main>{children}</main>
        </div>
        <Footer />
        <DevBot />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
