'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';
import { Calendar, Clock, User, ArrowLeft, Share2, MessageSquare } from 'lucide-react';
import { notFound } from 'next/navigation';

interface BlogPostContentProps {
  slug: string;
}

export const BlogPostContent = ({ slug }: BlogPostContentProps) => {
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-xs font-mono text-text-muted uppercase tracking-widest hover:text-acid-cyan transition-colors mb-12"
        >
          <ArrowLeft size={14} /> Back to Blog
        </Link>

        <div className="mb-12">
          <span className="px-3 py-1 bg-acid-cyan/10 text-acid-cyan text-[10px] font-mono uppercase tracking-wider rounded-full mb-6 inline-block">
            {post.category}
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-text-primary mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-y-4 gap-x-8 text-sm font-mono text-text-muted border-y border-bg-stroke py-6">
            <div className="flex items-center gap-2">
              <User size={16} className="text-acid-cyan" />
              <span className="text-text-primary">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-acid-cyan" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-acid-cyan" />
              {post.readTime}
            </div>
            <div className="flex-grow" />
            <div className="flex items-center gap-4">
              <button className="hover:text-acid-cyan transition-colors"><Share2 size={18} /></button>
              <button className="hover:text-acid-cyan transition-colors"><MessageSquare size={18} /></button>
            </div>
          </div>
        </div>

        <div 
          className="prose prose-invert prose-acid max-w-none text-text-secondary"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-20 pt-12 border-t border-bg-stroke">
          <div className="bg-bg-surface border border-bg-stroke p-10 rounded-3xl text-center">
            <h3 className="font-display text-2xl font-bold text-text-primary mb-4">
              Have a project in mind?
            </h3>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              Whether it's a trading bot, a custom chatbot, or a full-scale web application, 
              we're here to help you build it.
            </p>
            <Link 
              href="/contact"
              className="inline-flex h-12 px-8 items-center justify-center bg-acid-cyan text-bg-dark font-mono text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-xl"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
