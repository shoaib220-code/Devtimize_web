import { Metadata } from 'next';
import { ogImage } from '@/lib/og';
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
      canonical: `https://www.devtimize.com/services/${service.slug}/`,
    },
    openGraph: {
      title: `${service.title} | Devtimize`,
      description: service.metaDescription,
      url: `https://www.devtimize.com/services/${slug}/`,
      siteName: 'Devtimize',
      locale: 'en_US',
      type: 'website',
      images: ogImage(service.title, `$${service.minPrice}–$${service.maxPrice}`),
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  const serviceSchema = service && {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "name": service.title,
    "description": service.metaDescription,
    "provider": {
      "@type": "Organization",
      "name": "Devtimize",
      "url": "https://www.devtimize.com",
    },
    "areaServed": [
      "United States", "United Kingdom", "Canada", "Germany", "France",
      "Spain", "Netherlands", "Sweden", "Australia", "Kuwait",
    ],
    "url": `https://www.devtimize.com/services/${service.slug}/`,
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": service.minPrice,
      "highPrice": service.maxPrice,
    },
  };

  return (
    <>
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
      <ServiceDetailContent slug={slug} />
    </>
  );
}
