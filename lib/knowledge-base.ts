import { services } from '@/lib/services-data';
import { projects } from '@/lib/projects-data';
import { blogPosts } from '@/lib/blog-data';
import { landingPages } from '@/lib/landing-pages-data';
import { homeFaqs } from '@/lib/home-faq';
import { servicesFaqs } from '@/lib/services-faq';
import { faqs as aiReceptionistFaqs } from '@/lib/ai-receptionist-data';

const SITE = 'https://www.devtimize.com';

function uniqueFaqs() {
  const seen = new Set<string>();
  return [...homeFaqs, ...servicesFaqs, ...aiReceptionistFaqs].filter((f) => {
    const key = f.q.trim().toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// Built from the same data files that power the website, so the bot's knowledge
// updates automatically whenever a project, service, post or FAQ is added there.
export function buildKnowledgeBase(): string {
  const servicesText = services
    .map(
      (s) =>
        `- ${s.title} (${SITE}/services/${s.slug}): ${s.desc} Typical range $${s.minPrice}-$${s.maxPrice}. ` +
        `Includes: ${s.features.join('; ')}. Tech: ${s.stack.join(', ')}.`
    )
    .join('\n');

  const projectsText = projects
    .map((p) => {
      const live = p.livePreview ? ` Live demo: ${p.livePreview}` : '';
      return `- ${p.name} [${p.category}] — ${p.desc} Tech: ${p.stack.join(', ')}. Client: ${p.client ?? 'confidential'}. Details: ${SITE}/projects/${p.slug}.${live}`;
    })
    .join('\n');

  const blogText = blogPosts
    .map((b) => `- ${b.title} (${SITE}/blog/${b.slug}): ${b.metaDescription}`)
    .join('\n');

  const pagesText = landingPages.map((l) => `- ${l.metaTitle} (${SITE}/${l.slug})`).join('\n');

  const faqText = uniqueFaqs()
    .map((f) => `Q: ${f.q}\nA: ${f.a}`)
    .join('\n\n');

  return `SITE KNOWLEDGE BASE (generated from devtimize.com — treat as ground truth, never invent beyond it):

SERVICES AND LISTED PRICE RANGES:
${servicesText}

PROJECTS WE HAVE BUILT (${projects.length}) — when asked for examples, pick the ones closest to the visitor's industry and mention the live demo link if there is one:
${projectsText}

SPECIALISED PAGES:
${pagesText}

BLOG ARTICLES (point visitors here for deeper reading):
${blogText}

FREQUENTLY ASKED QUESTIONS (answer consistently with these):
${faqText}

If a visitor asks something this knowledge does not cover, say you are not sure and offer to pass the question to the team instead of guessing.`;
}
