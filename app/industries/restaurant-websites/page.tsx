import { Metadata } from 'next';
import { ogImage } from '@/lib/og';
import { RestaurantContent } from '@/components/industries/RestaurantContent';

export const metadata: Metadata = {
  title: 'Restaurant Website Design With Online Reservations | Devtimize',
  description: 'We build restaurant websites with online menus, reservation booking, and Google Maps integration. We\'ve done it. We know what converts.',
  alternates: {
    canonical: 'https://www.devtimize.com/industries/restaurant-websites/',
  },
  openGraph: {
    title: 'Restaurant Website Design With Online Reservations | Devtimize',
    description: 'We build restaurant websites with online menus, reservation booking, and Google Maps integration. We\'ve done it. We know what converts.',
    url: 'https://www.devtimize.com/industries/restaurant-websites/',
    siteName: 'Devtimize',
    locale: 'en_US',
    type: 'website',
    images: ogImage('Restaurant Websites', 'With Online Reservations'),
  },
};

export default function RestaurantPage() {
  return <RestaurantContent />;
}
