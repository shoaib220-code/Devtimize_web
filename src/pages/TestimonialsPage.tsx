import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { SEO } from '../components/SEO';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, TechFlow',
    content: 'Devtimize transformed our legacy systems into a modern, high-performance cloud ecosystem. Their attention to detail and technical expertise is unmatched.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager, InnovateX',
    content: 'The AI chatbot they built for us has been a game-changer. It handles 40% of our support queries autonomously, allowing our team to focus on complex tasks.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Founder, Bloom Digital',
    content: 'Working with Shoaib and Hamza was a breeze. They understood our vision perfectly and delivered a mobile app that our users absolutely love.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=elena'
  },
  {
    name: 'David Smith',
    role: 'Director, Global Logistics',
    content: 'The vendor portal they developed has streamlined our entire supply chain communication. A truly professional team that delivers real results.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=david'
  },
  {
    name: 'Jessica Wu',
    role: 'Marketing Head, Retail Plus',
    content: 'Our e-commerce sales have increased by 30% since the new site launch. The user experience is flawless across all devices.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=jessica'
  },
  {
    name: 'Robert Taylor',
    role: 'Operations Manager, Swift Deliveries',
    content: 'The inventory management system is fast, reliable, and exactly what we needed. Their post-launch support has also been exceptional.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=robert'
  }
];

export const TestimonialsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <SEO 
        title="Client Testimonials | What Our Partners Say"
        description="Read reviews and success stories from our clients. See how Devtimize has helped businesses transform their digital landscape."
        canonical="https://devtimize.com/testimonials/"
        breadcrumbs={[
          { name: 'Home', url: 'https://devtimize.com/' },
          { name: 'Testimonials', url: 'https://devtimize.com/testimonials/' }
        ]}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
          <span className="font-mono text-[11px] text-acid-cyan tracking-[0.25em] uppercase block mb-4">
            Client Success
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary mb-6">
            What They <span className="gradient-text">Say.</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            We measure our success by the success of our clients. Here is what some of them have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-bg-surface border border-bg-stroke rounded-3xl hover:border-acid-cyan/20 transition-all duration-500 flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} size={16} className="fill-acid-cyan text-acid-cyan" />
                ))}
              </div>
              <div className="relative mb-8">
                <Quote size={40} className="text-acid-cyan/10 absolute -top-4 -left-4" />
                <p className="text-text-secondary leading-relaxed relative z-10 italic">
                  "{t.content}"
                </p>
              </div>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-bg-stroke">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary">{t.name}</h4>
                  <p className="text-xs text-text-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h2 className="font-display text-3xl font-bold text-text-primary mb-8">Ready to be our next success story?</h2>
          <button className="px-10 py-4 bg-grad-brand text-white font-bold rounded-xl hover:scale-105 transition-transform">
            Start Your Project
          </button>
        </div>
      </div>
    </motion.div>
  );
};
