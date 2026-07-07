import { Metadata } from 'next';
import { LandingPageContent } from '@/components/LandingPageContent';
import { getLandingPage, buildLandingPageMetadata, buildFaqSchema } from '@/lib/landing-page-metadata';

const page = getLandingPage('ai-receptionist-dental-clinics-uk');

export const metadata: Metadata = buildLandingPageMetadata(page);

const FAQ_SCHEMA = buildFaqSchema(page);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <LandingPageContent data={page} />
    </>
  );
}
