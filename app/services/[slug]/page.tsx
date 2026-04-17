import { Metadata } from 'next';
import { ServiceDetailContent } from '@/components/ServiceDetailContent';
import { services } from '@/lib/services-data';

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The service you are looking for does not exist.',
    };
  }

  return {
    title: `${service.title} | Devtimize`,
    description: service.metaDescription,
    alternates: {
      canonical: `https://devtimize.com/services/${service.slug}/`,
    },
    openGraph: {
      title: `${service.title} | Devtimize`,
      description: service.metaDescription,
      url: `https://devtimize.com/services/${slug}/`,
      siteName: 'Devtimize',
      locale: 'en_US',
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ServiceDetailContent slug={slug} />;
}
