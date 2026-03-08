import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { trackProjectView, trackCTAClick } from '../utils/analytics';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    slug: 'trading-bot',
    name: 'Trading Bot (Backtest + Live)',
    category: 'AI & Bots',
    image: 'https://picsum.photos/seed/trading/800/450',
    stack: 'Python · Backtrader · Pandas · Flask',
    features: [
      'Backtesting engine on historical data',
      'Live trading integration with real-time signals',
      'Risk management controls and stop-loss logic',
      'Performance dashboard with charts'
    ]
  },
  {
    id: 2,
    slug: 'chatbot-rag',
    name: 'Chatbot & RAG Assistant',
    category: 'AI & Bots',
    image: 'https://picsum.photos/seed/ai/800/450',
    stack: 'Python · LangChain · LLMs · Vector DB',
    features: [
      'Vector search for custom knowledge base',
      'Context memory for natural conversations',
      'Multi-source data ingestion',
      'Secure deployment with API protection'
    ]
  },
  {
    id: 3,
    slug: 'restaurant-site',
    name: 'Restaurant Website',
    category: 'Web',
    image: 'https://picsum.photos/seed/food/800/450',
    stack: 'PHP · Laravel · MySQL · Tailwind',
    features: [
      'Menu management system',
      'Online ordering & reservation flow',
      'Responsive design for all devices',
      'Admin dashboard for order tracking'
    ]
  },
  {
    id: 4,
    slug: 'ecommerce-platform',
    name: 'E-Commerce Platform',
    category: 'Web',
    image: 'https://picsum.photos/seed/shop/800/450',
    stack: 'MERN · React · Node.js · MongoDB',
    features: [
      'Product catalog with advanced filters',
      'Shopping cart & secure checkout',
      'Payment gateway integration',
      'User account & order history'
    ]
  },
  {
    id: 5,
    slug: 'event-push-app',
    name: 'Event Push App',
    category: 'Mobile',
    image: 'https://picsum.photos/seed/mobile/800/450',
    stack: 'Flutter · OneSignal · Firebase',
    features: [
      'Real-time push notifications',
      'Event scheduling & reminders',
      'Cross-platform iOS & Android',
      'Offline support for event details'
    ]
  },
  {
    id: 6,
    slug: 'emotion-detector',
    name: 'Emotion Detector',
    category: 'Desktop/AI',
    image: 'https://picsum.photos/seed/face/800/450',
    stack: 'Tkinter · CNN · TensorFlow',
    features: [
      'Real-time face detection',
      'Emotion classification (7 states)',
      'Desktop GUI with live preview',
      'Performance optimized for low-end PCs'
    ]
  },
  {
    id: 7,
    slug: 'vendor-portal',
    name: 'Vendor Shipment Portal',
    category: 'Portals',
    image: 'https://picsum.photos/seed/logistics/800/450',
    stack: '.NET MVC · SQL Server · Azure',
    features: [
      'Shipment tracking & status updates',
      'Vendor management & onboarding',
      'Automated reporting & analytics',
      'Role-based access control'
    ]
  },
  {
    id: 8,
    slug: 'inventory-billing',
    name: 'Inventory & Billing System',
    category: 'Desktop',
    image: 'https://picsum.photos/seed/billing/800/450',
    stack: 'WPF · C# · SQLite',
    features: [
      'Inventory control & low stock alerts',
      'Automated billing & PDF generation',
      'Daily/Monthly sales reports',
      'Local database for high speed'
    ]
  }
];

const categories = ['All', 'Web', 'Mobile', 'AI & Bots', 'Portals', 'Desktop'];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category.includes(activeCategory) || p.category === activeCategory);

  const next = () => setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);

  return (
    <section id="projects" className="py-24 md:py-32 bg-bg-base relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative mb-16">
          <span className="font-mono text-[11px] text-acid-cyan tracking-[0.25em] uppercase block mb-4">
            02 — Our Work
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-text-primary">
            Real Projects.<br />
            <span className="text-text-secondary">Real Results.</span>
          </h2>
          <div className="absolute top-0 right-0 font-display text-[120px] md:text-[160px] font-extrabold text-white/[0.02] leading-none pointer-events-none select-none">
            02
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentIndex(0);
              }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-acid-cyan text-bg-base' 
                  : 'bg-bg-raised border border-bg-stroke text-text-secondary hover:border-acid-cyan/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Slider */}
        <div className="relative group">
          <AnimatePresence mode="wait">
            <motion.div
              key={filteredProjects[currentIndex]?.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-bg-stroke group/img">
                <img 
                  src={filteredProjects[currentIndex]?.image} 
                  alt={filteredProjects[currentIndex]?.name}
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 to-transparent opacity-60" />
              </div>

              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-acid-cyan/10 border border-acid-cyan/20 text-acid-cyan text-[10px] font-bold uppercase tracking-widest mb-4">
                  {filteredProjects[currentIndex]?.category}
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6">
                  {filteredProjects[currentIndex]?.name}
                </h3>
                
                <div className="space-y-4 mb-8">
                  <p className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Key Features:</p>
                  <ul className="space-y-3">
                    {filteredProjects[currentIndex]?.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-text-secondary">
                        <span className="text-acid-cyan mt-1">✦</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-bg-stroke flex flex-wrap items-center justify-between gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-text-muted uppercase font-mono tracking-widest">Tech Stack</span>
                    <span className="text-sm font-mono text-acid-cyan">{filteredProjects[currentIndex]?.stack}</span>
                  </div>
                  <Link 
                    to={`/projects/${filteredProjects[currentIndex]?.slug}`}
                    onClick={() => {
                      trackCTAClick('View Details', `home_project_${filteredProjects[currentIndex]?.name}`);
                    }}
                    className="px-6 py-3 bg-bg-raised border border-bg-stroke rounded-xl text-text-primary hover:border-acid-cyan transition-all flex items-center gap-2 group/btn"
                  >
                    View Details <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-end gap-4 mt-12">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-bg-stroke flex items-center justify-center text-text-secondary hover:border-acid-cyan hover:text-acid-cyan transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-bg-stroke flex items-center justify-center text-text-secondary hover:border-acid-cyan hover:text-acid-cyan transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
