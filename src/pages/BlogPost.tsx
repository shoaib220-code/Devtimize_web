import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { Calendar, Clock, User, ArrowLeft, Share2, MessageSquare } from 'lucide-react';

export const BLOG_POST_CONTENT = {
  'how-to-build-trading-bot-python': {
    title: 'How to Build a Trading Bot in Python (2025 Full Guide)',
    metaDescription: 'Step-by-step guide to building a Python trading bot with backtesting on historical data and live trading. Real code from the Devtimize team.',
    content: `
      <p class="text-xl text-text-secondary mb-12 leading-relaxed">
        Building a trading bot in Python is one of the most requested projects we get at Devtimize. We have shipped several — including one with full backtesting and live execution. Here is exactly how it works.
      </p>

      <h2 class="font-display text-3xl font-bold text-text-primary mt-16 mb-6">What Is a Trading Bot?</h2>
      <p class="text-text-secondary mb-8 leading-relaxed">
        A trading bot is a program that automatically executes buy and sell orders on financial markets based on predefined rules or algorithms — without human intervention.
      </p>

      <h2 class="font-display text-3xl font-bold text-text-primary mt-16 mb-6">Step 1: Set Up Your Python Environment</h2>
      <p class="text-text-secondary mb-4 leading-relaxed">Install the core libraries:</p>
      <pre class="bg-bg-surface border border-bg-stroke p-6 rounded-xl font-mono text-sm text-acid-cyan mb-8 overflow-x-auto">
pip install backtrader pandas yfinance ccxt</pre>
      <p class="text-text-secondary mb-8 leading-relaxed">
        Use <strong>backtrader</strong> for strategy development, <strong>yfinance</strong> or <strong>ccxt</strong> for market data, and <strong>pandas</strong> for data manipulation.
      </p>

      <h2 class="font-display text-3xl font-bold text-text-primary mt-16 mb-6">Step 2: Define Your Strategy</h2>
      <p class="text-text-secondary mb-8 leading-relaxed">
        A simple moving average crossover strategy checks when a short-term average crosses above a long-term average — a classic buy signal. Backtrader makes this straightforward to implement and test.
      </p>

      <h2 class="font-display text-3xl font-bold text-text-primary mt-16 mb-6">Step 3: Backtest on Historical Data</h2>
      <p class="text-text-secondary mb-8 leading-relaxed">
        Before going live, always backtest. Pull historical OHLCV data, run your strategy against it, and measure performance metrics: Sharpe ratio, max drawdown, win rate, and total return.
      </p>

      <h2 class="font-display text-3xl font-bold text-text-primary mt-16 mb-6">Step 4: Add Risk Management</h2>
      <p class="text-text-secondary mb-8 leading-relaxed">
        Never skip this. Set stop-loss orders, define maximum position size, and implement a daily loss limit. Without risk controls, a bug can wipe an account in minutes.
      </p>

      <h2 class="font-display text-3xl font-bold text-text-primary mt-16 mb-6">Step 5: Connect to a Live Exchange</h2>
      <p class="text-text-secondary mb-8 leading-relaxed">
        Use the <strong>ccxt</strong> library to connect to exchanges like Binance, Kraken, or Coinbase. You will need API keys — always use read + trade permissions only, never withdrawal permissions.
      </p>

      <div class="bg-acid-cyan/5 border border-acid-cyan/20 p-8 rounded-2xl my-16">
        <h3 class="font-display text-2xl font-bold text-text-primary mb-4">How Devtimize Builds Trading Bots</h3>
        <p class="text-text-secondary mb-6 leading-relaxed">
          Our trading bot project included a full backtesting engine, a live trading module with real-time signal generation, a risk management layer, and a performance dashboard. We built it in Python using backtrader, pandas, and ccxt — deployed on a VPS for 24/7 operation.
        </p>
        <a href="/contact" class="inline-flex items-center gap-2 text-acid-cyan font-mono text-sm uppercase tracking-widest hover:gap-4 transition-all">
          Contact Devtimize for a free quote →
        </a>
      </div>

      <h2 class="font-display text-3xl font-bold text-text-primary mt-16 mb-6">Conclusion</h2>
      <p class="text-text-secondary mb-8 leading-relaxed">
        Building a trading bot is manageable in Python but the details — especially risk management and live execution — require careful engineering. If you want one built professionally, <a href="/services/ai-automation" class="text-acid-cyan hover:underline">see our AI & automation services</a> or reach out at devtimize@gmail.com.
      </p>
    `,
    author: 'Hamza Amin',
    date: '2026-01-15',
    category: 'AI & Automation',
    readTime: '8 min read',
  },

  'how-much-does-chatbot-cost': {
    title: 'How Much Does It Cost to Build a Custom Chatbot in 2025?',
    metaDescription: 'Real pricing for custom AI chatbot development — from simple FAQ bots to full RAG systems with custom knowledge bases. Transparent breakdown from Devtimize.',
    content: `
      <p class="text-xl text-text-secondary mb-12 leading-relaxed">
        The honest answer: it depends on what the bot actually needs to do. Here is a transparent breakdown based on what we charge and what the market looks like.
      </p>

      <h2 class="font-display text-3xl font-bold text-text-primary mt-16 mb-6">Type 1: Simple FAQ Chatbot ($150–$500)</h2>
      <p class="text-text-secondary mb-8 leading-relaxed">
        A rule-based or simple LLM-powered bot that answers a fixed set of questions. Good for customer support pages, restaurant menus, or basic lead capture. No custom knowledge base, no memory.
      </p>

      <h2 class="font-display text-3xl font-bold text-text-primary mt-16 mb-6">Type 2: Custom Knowledge Base Chatbot ($500–$2,000)</h2>
      <p class="text-text-secondary mb-8 leading-relaxed">
        This is where <strong>RAG (Retrieval-Augmented Generation)</strong> comes in. The bot is trained on your specific documents, PDFs, website content, or database. It retrieves relevant information and generates accurate answers. This is what most businesses actually need.
      </p>

      <h2 class="font-display text-3xl font-bold text-text-primary mt-16 mb-6">Type 3: Full AI Agent / Workflow Automation ($2,000–$8,000+)</h2>
      <p class="text-text-secondary mb-8 leading-relaxed">
        Multi-step reasoning, tool use (web search, API calls, calendar booking), memory across sessions, CRM integration, and complex workflows. This is enterprise-level and priced accordingly.
      </p>

      <h2 class="font-display text-3xl font-bold text-text-primary mt-16 mb-6">What Affects the Price?</h2>
      <p class="text-text-secondary mb-8 leading-relaxed">
        The key variables are: size of the knowledge base, number of integrations, whether you need conversation memory, the hosting setup, and the UI complexity.
      </p>

      <div class="bg-acid-cyan/5 border border-acid-cyan/20 p-8 rounded-2xl my-16">
        <h3 class="font-display text-2xl font-bold text-text-primary mb-4">What Devtimize Charges</h3>
        <p class="text-text-secondary mb-6 leading-relaxed">
          Our Chatbot & RAG Assistant project was delivered well within a mid-range budget with a full custom knowledge base, vector search, and a clean chat interface. We keep costs low because we are not a 50-person agency — you work directly with the developers building your bot.
        </p>
        <a href="/contact" class="inline-flex items-center gap-2 text-acid-cyan font-mono text-sm uppercase tracking-widest hover:gap-4 transition-all">
          Get a free quote for your chatbot →
        </a>
      </div>

      <h2 class="font-display text-3xl font-bold text-text-primary mt-16 mb-6">Conclusion</h2>
      <p class="text-text-secondary mb-8 leading-relaxed">
        A useful chatbot does not have to be expensive. Start simple, prove the value, then expand. See our <a href="/services/ai-automation" class="text-acid-cyan hover:underline">AI & automation services</a> for the full picture.
      </p>
    `,
    author: 'Hamza Amin',
    date: '2026-02-10',
    category: 'AI & Automation',
    readTime: '5 min read',
  },
};

export const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POST_CONTENT[slug as keyof typeof BLOG_POST_CONTENT];

  if (!post) {
    return (
      <div className="pt-48 pb-24 text-center">
        <h1 className="text-4xl font-bold text-text-primary mb-8">Post Not Found</h1>
        <Link to="/blog" className="text-acid-cyan hover:underline">Back to Blog</Link>
      </div>
    );
  }

  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "author": {
      "@type": "Person",
      "name": post.author,
      "worksFor": { "@type": "Organization", "name": "Devtimize" }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Devtimize",
      "logo": { "@type": "ImageObject", "url": "https://devtimize.com/logo.png" }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "url": `https://devtimize.com/blog/${slug}/`,
    "mainEntityOfPage": `https://devtimize.com/blog/${slug}/`
  };

  return (
    <div className="pt-32 pb-24">
      <SEO
        title={`${post.title} | Devtimize Blog`}
        description={post.metaDescription}
        canonical={`https://devtimize.com/blog/${slug}/`}
        breadcrumbs={[
          { name: 'Home', url: 'https://devtimize.com/' },
          { name: 'Blog', url: 'https://devtimize.com/blog/' },
          { name: post.title, url: `https://devtimize.com/blog/${slug}/` }
        ]}
      />
      
      <script type="application/ld+json">
        {JSON.stringify(postSchema)}
      </script>

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Link 
          to="/blog" 
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
          className="prose prose-invert prose-acid max-w-none"
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
              to="/contact"
              className="inline-flex h-12 px-8 items-center justify-center bg-acid-cyan text-bg-dark font-mono text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
