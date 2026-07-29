import { MetadataRoute } from 'next';
import { services } from '@/lib/services-data';
import { projects } from '@/lib/projects-data';
import { blogPosts } from '@/lib/blog-data';
import { landingPages } from '@/lib/landing-pages-data';

const BASE_URL = 'https://www.devtimize.com';

const INDUSTRY_SLUGS = [
  'hvac-websites',
  'dentist-websites',
  'lawyer-websites',
  'medspa-websites',
  'roofing-websites',
  'plumber-websites',
  'restaurant-websites',
  'real-estate-websites',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/ai-receptionist`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/demo`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/services`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/projects`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/blog`, priority: 0.7, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/team`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/testimonials`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/about`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/contact`, priority: 0.9, changeFrequency: 'monthly' },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly',
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly',
  }));

  const industryPages: MetadataRoute.Sitemap = INDUSTRY_SLUGS.map((slug) => ({
    url: `${BASE_URL}/industries/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly',
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.7,
    changeFrequency: 'monthly',
  }));

  const landingPagesSitemap: MetadataRoute.Sitemap = landingPages.map((page) => ({
    url: `${BASE_URL}/${page.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly',
  }));

  return [...staticPages, ...servicePages, ...projectPages, ...industryPages, ...blogPages, ...landingPagesSitemap];
}
