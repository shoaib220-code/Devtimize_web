import React from 'react';
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { Services } from '../components/Services';
import { Stats } from '../components/Stats';
import { Projects } from '../components/Projects';
import { Team } from '../components/Team';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO 
        title="Devtimize — Web · Mobile · Desktop · AI Development Studio | Pakistan"
        description="Devtimize builds production-grade web apps, mobile apps, AI chatbots, trading bots, and automation. Python, Flutter, React, .NET. Free quote in 24h."
        canonical="https://devtimize.com/"
        faqSchema={true}
        reviewSchema={true}
      />
      <Hero />
      <Marquee />
      <Services />
      <Stats />
      <Projects />
      <Team />
      <Testimonials />
      <Contact />
    </motion.div>
  );
};
