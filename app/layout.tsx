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
import { ogImage } from '@/lib/og';

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Devtimize",
  "url": "https://www.devtimize.com",
  "foundingDate": "2024",
  "description":
    "Devtimize is a product engineering studio building web apps, mobile & desktop apps, AI automation, and an AI Receptionist product for local businesses.",
  "founder": [
    {
      "@type": "Person",
      "name": "Shoaib Liaqat",
      "jobTitle": "Founder & CEO",
      "sameAs": ["https://pk.linkedin.com/in/shoaib-liaqat-0755363a0"]
    },
    {
      "@type": "Person",
      "name": "Hamza Amin",
      "jobTitle": "Co-founder"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/devtimize/",
    "https://www.facebook.com/p/Devtimize-61579934221770/"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "devtimize@gmail.com",
      "telephone": "+92-310-4745649",
      "areaServed": ["US", "GB", "CA", "DE", "FR", "ES", "NL", "SE", "AU", "KW"],
      "availableLanguage": ["English"]
    }
  ],
  "areaServed": [
    {"@type": "Country", "name": "United States"},
    {"@type": "Country", "name": "United Kingdom"},
    {"@type": "Country", "name": "Canada"},
    {"@type": "Country", "name": "Germany"},
    {"@type": "Country", "name": "France"},
    {"@type": "Country", "name": "Spain"},
    {"@type": "Country", "name": "Netherlands"},
    {"@type": "Country", "name": "Sweden"},
    {"@type": "Country", "name": "Australia"},
    {"@type": "Country", "name": "Kuwait"}
  ],
  "serviceType": [
    "Web Development",
    "Mobile & Desktop App Development",
    "AI & Automation",
    "APIs & Integrations",
    "Cloud & DevOps",
    "AI Receptionist"
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.devtimize.com'),
  title: 'Devtimize | Product engineering studio | USA, UK, Canada, Europe & Kuwait',
  description:
    'Product engineering studio serving USA, UK, Canada, Europe, Australia, and Kuwait with web apps, mobile apps, AI automation, and an AI receptionist for local businesses.',
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
    title: 'Devtimize | Web & AI Development Agency | USA, UK, Canada, Europe & Kuwait',
    description:
      'Custom web apps, mobile apps, and AI automation for clients in the USA, UK, Canada, Europe, Australia, and Kuwait.',
    url: 'https://www.devtimize.com',
    siteName: 'Devtimize',
    type: 'website',
    images: ogImage('Product Engineering Studio'),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devtimize | Web & AI Development Agency | USA, UK, Canada, Europe & Kuwait',
    description:
      'Custom web apps, mobile apps, and AI automation for clients in the USA, UK, Canada, Europe, Australia, and Kuwait.',
    images: ogImage('Product Engineering Studio'),
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
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
