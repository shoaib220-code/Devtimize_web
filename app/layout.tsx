import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { Loader } from '@/components/Loader';
import { DevBot } from '@/components/DevBot';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BackToTop } from '@/components/BackToTop';

export const metadata: Metadata = {
  metadataBase: new URL('https://devtimize.com'),
  title: 'Devtimize',
  description: 'Product engineering studio',
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
