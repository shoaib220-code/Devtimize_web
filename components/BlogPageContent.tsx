'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

export const BlogPageContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
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
          {blogPosts.map((post, i) => (
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
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
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
                  href={`/blog/${post.slug}`}
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
    </motion.div>
  );
};
