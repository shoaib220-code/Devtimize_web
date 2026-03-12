import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const BLOG_POSTS = [
  {
    slug: 'how-to-build-trading-bot-python',
    title: 'How to Build a Trading Bot in Python (2025 Full Guide)',
    excerpt: 'A complete walkthrough of building an algorithmic trading bot in Python — from backtesting historical data to live execution.',
    date: '2026-01-15',
    author: 'Hamza Amin',
    category: 'AI & Automation',
    readTime: '8 min read',
    keywords: 'trading bot developer Python, algorithmic trading Python',
  },
  {
    slug: 'rag-vs-fine-tuning-chatbots',
    title: 'RAG vs Fine-Tuning: Which Should You Use for Your Chatbot?',
    excerpt: 'An honest technical comparison of Retrieval-Augmented Generation vs fine-tuning for building production chatbots.',
    date: '2026-01-22',
    author: 'Hamza Amin',
    category: 'AI & Automation',
    readTime: '7 min read',
    keywords: 'RAG chatbot development, retrieval augmented generation',
  },
  {
    slug: 'flutter-vs-react-native-2025',
    title: 'Flutter vs React Native in 2025: An Honest Comparison',
    excerpt: 'We have shipped apps in both. Here is an unbiased breakdown of Flutter vs React Native to help you choose.',
    date: '2026-02-01',
    author: 'Shoaib Liaqat',
    category: 'Mobile Development',
    readTime: '6 min read',
    keywords: 'Flutter app developer, Flutter vs React Native',
  },
  {
    slug: 'how-much-does-chatbot-cost',
    title: 'How Much Does It Cost to Build a Custom Chatbot in 2025?',
    excerpt: 'Real pricing breakdown for custom AI chatbot development — from simple FAQ bots to full RAG systems.',
    date: '2026-02-10',
    author: 'Hamza Amin',
    category: 'AI & Automation',
    readTime: '5 min read',
    keywords: 'how much does a chatbot cost, chatbot development cost',
  },
  {
    slug: 'hire-developer-from-pakistan',
    title: 'How to Hire a Developer from Pakistan (Without Getting Burned)',
    excerpt: 'A transparent guide to finding and vetting Pakistani developers — from someone who has been on both sides.',
    date: '2026-02-18',
    author: 'Shoaib Liaqat',
    category: 'Hiring',
    readTime: '6 min read',
    keywords: 'hire developer from Pakistan, hire Pakistani developer',
  },
  {
    slug: 'best-tech-stack-saas-2025',
    title: 'The Best Tech Stack for a SaaS MVP in 2025',
    excerpt: 'After building multiple SaaS tools, here is the stack we recommend for fast, scalable MVPs.',
    date: '2026-02-25',
    author: 'Shoaib Liaqat',
    category: 'Web Development',
    readTime: '7 min read',
    keywords: 'best tech stack SaaS 2025, SaaS MVP development',
  },
];

export const BlogPage = () => {
  return (
    <div className="pt-32 pb-24">
      <SEO
        title="Dev Blog — Tips, Case Studies & Tutorials | Devtimize"
        description="Technical articles from the Devtimize team on AI development, web apps, mobile apps, trading bots, and hiring developers."
        canonical="https://devtimize.com/blog/"
        breadcrumbs={[
          { name: 'Home', url: 'https://devtimize.com/' },
          { name: 'Blog', url: 'https://devtimize.com/blog/' }
        ]}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="mb-20">
          <span className="font-mono text-[11px] text-acid-cyan tracking-[0.25em] uppercase block mb-4">
            Insights — Knowledge Sharing
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary mb-6">
            The Dev<span className="text-acid-cyan">Blog.</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
            Deep dives into engineering, AI automation, and product strategy. 
            We share what we learn while building for the real world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-bg-surface border border-bg-stroke rounded-2xl overflow-hidden hover:border-acid-cyan/20 transition-all duration-500 flex flex-col"
            >
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-acid-cyan/10 text-acid-cyan text-[10px] font-mono uppercase tracking-wider rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="font-display text-2xl font-bold text-text-primary mb-4 group-hover:text-acid-cyan transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                
                <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-y-4 gap-x-6 text-[11px] font-mono text-text-muted mb-8">
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-acid-cyan" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-acid-cyan" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-acid-cyan" />
                    {post.readTime}
                  </div>
                </div>

                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono text-acid-cyan uppercase tracking-widest group/link"
                >
                  Read Article 
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
