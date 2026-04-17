import { Metadata } from 'next';
import { ProjectDetailContent } from '@/components/ProjectDetailContent';
import { projects } from '@/lib/projects-data';

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The project you are looking for does not exist.',
    };
  }

  return {
    title: `${project.name} | Devtimize Case Study`,
    description: project.desc,
    alternates: {
      canonical: `https://devtimize.com/projects/${project.slug}/`,
    },
    openGraph: {
      title: `${project.name} | Devtimize Case Study`,
      description: project.desc,
      url: `https://devtimize.com/projects/${slug}/`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
      siteName: 'Devtimize',
      locale: 'en_US',
      type: 'website',
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectDetailContent slug={slug} />;
}
