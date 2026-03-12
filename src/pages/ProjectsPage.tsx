import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { projects } from '../data';
import { ArrowRight, Code2, Layers } from 'lucide-react';
import { SEO } from '../components/SEO';

const categories = ['All', 'Web', 'Mobile', 'AI & Bots', 'Portals', 'Desktop'];

export const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category.includes(activeCategory) || p.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <SEO 
        title="Our Projects | Portfolio of Digital Excellence"
        description="Explore our portfolio of successful projects across web development, mobile apps, AI solutions, and enterprise portals. See how we deliver value."
        canonical="https://devtimize.com/projects/"
        projectListSchema={true}
        breadcrumbs={[
          { name: 'Home', url: 'https://devtimize.com/' },
          { name: 'Projects', url: 'https://devtimize.com/projects/' }
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="mb-16">
          <span className="font-mono text-[11px] text-acid-cyan tracking-[0.25em] uppercase block mb-4">
            Our Portfolio
          </span>
          <h1 className="font-display text-3xl sm:text-5xl md:text-7xl font-bold text-text-primary mb-6">
            Selected <span className="gradient-text">Works.</span>
          </h1>
          <div className="flex flex-wrap gap-3 mt-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
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
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-bg-surface border border-bg-stroke rounded-3xl overflow-hidden hover:border-acid-cyan/20 transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Link to={`/projects/${project.slug}`} className="px-6 py-3 bg-white text-bg-base font-bold rounded-xl flex items-center gap-2">
                      View Case Study <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[10px] font-mono text-acid-cyan uppercase tracking-widest mb-1 block">
                        {project.category}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-text-primary">
                        {project.name}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      {project.stack.slice(0, 2).map((tech, idx) => (
                        <span key={idx} className="p-2 rounded-lg bg-bg-raised border border-bg-stroke text-text-muted">
                          {tech === 'Python' ? <Code2 size={16} /> : <Layers size={16} />}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-text-secondary mb-6 line-clamp-2">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, idx) => (
                      <span key={idx} className="text-[11px] font-mono text-text-muted">
                        #{tech.replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
