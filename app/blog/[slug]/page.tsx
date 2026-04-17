import { Metadata } from 'next';
import { BlogPostContent } from '@/components/BlogPostContent';
import { blogPosts } from '@/lib/blog-data';

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  return {
    title: `${post.title} | Devtimize Blog`,
    description: post.metaDescription,
    alternates: {
      canonical: `https://devtimize.com/blog/${post.slug}/`,
    },
    openGraph: {
      title: `${post.title} | Devtimize Blog`,
      description: post.metaDescription,
      url: `https://devtimize.com/blog/${slug}/`,
      siteName: 'Devtimize',
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogPostContent slug={slug} />;
}
