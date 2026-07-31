import { Metadata } from 'next';
import { LandingPageContent } from '@/components/LandingPageContent';
import { getLandingPage, buildLandingPageMetadata, buildFaqSchema, buildServiceSchema } from '@/lib/landing-page-metadata';

const page = getLandingPage('ai-receptionist-law-firms-uk');

export const metadata: Metadata = buildLandingPageMetadata(page);

const FAQ_SCHEMA = buildFaqSchema(page);
const SERVICE_SCHEMA = buildServiceSchema(page);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <LandingPageContent data={page} />
    </>
  );
}
