'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { projects } from '@/lib/projects-data';
import { ArrowLeft, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { trackProjectView, trackCTAClick } from '@/utils/analytics';

interface ProjectDetailContentProps {
  slug: string;
}

export const ProjectDetailContent = ({ slug }: ProjectDetailContentProps) => {
  const [showPreviewMessage, setShowPreviewMessage] = useState(false);
  const project = projects.find(p => p.slug === slug);

  React.useEffect(() => {
    if (project) {
      trackProjectView(project.name);
    }
  }, [project]);

  const handlePreviewClick = () => {
    setShowPreviewMessage(true);
    window.setTimeout(() => setShowPreviewMessage(false), 3000);
  };

  if (!project) {
    notFound();
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <Link href="/projects" className="inline-flex items-center gap-2 text-text-secondary hover:text-acid-cyan transition-colors mb-12 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
        </Link>

        <div className="mb-16">
          <span className="text-xs font-mono text-acid-cyan uppercase tracking-[0.2em] block mb-4">
            Case Study — {project.category}
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary mb-8">
            {project.name}
          </h1>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-bg-raised border border-bg-stroke text-text-muted text-xs font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="aspect-video rounded-3xl overflow-hidden border border-bg-stroke mb-24 shadow-2xl">
          <img src={project.image} alt={project.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>

        <div className="grid lg:grid-cols-3 gap-16 mb-24">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="font-display text-3xl font-bold text-text-primary mb-6">Overview</h2>
              <p className="text-xl text-text-secondary leading-relaxed">
                {project.longDesc}
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold text-text-primary mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-text-secondary">
                    <CheckCircle2 size={20} className="text-jade shrink-0 mt-1" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 bg-bg-surface border border-bg-stroke rounded-3xl">
              <h2 className="font-display text-3xl font-bold text-text-primary mb-6">The Outcome</h2>
              <p className="text-lg text-text-secondary leading-relaxed italic">
                "{project.outcome}"
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-8 bg-bg-surface border border-bg-stroke rounded-3xl">
              <h3 className="text-xs font-mono text-text-muted uppercase tracking-widest mb-6">Project Details</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Client</p>
                  <p className="text-text-primary font-bold">{project.client || 'Confidential'}</p>
                </div>
                <div>
                  <p className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Category</p>
                  <p className="text-text-primary font-bold">{project.category}</p>
                </div>
                <div>
                  <p className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Technologies</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.stack.map(tech => (
                      <span key={tech} className="text-[11px] font-mono text-acid-cyan">#{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              {project?.livePreview ? (
                <a
                  href={project.livePreview}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full mt-10 inline-flex py-4 bg-bg-raised border border-bg-stroke rounded-xl text-text-primary font-bold hover:border-acid-cyan transition-all items-center justify-center gap-2"
                >
                  Live Preview <ExternalLink size={18} />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={handlePreviewClick}
                  className="w-full mt-10 py-4 bg-bg-raised border border-bg-stroke rounded-xl text-text-primary font-bold hover:border-acid-cyan transition-all flex items-center justify-center gap-2"
                >
                  Live Preview <ExternalLink size={18} />
                </button>
              )}
              {showPreviewMessage && (
                <div className="mt-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-200">
                  Live preview is not available for this project. The restaurant website preview is available, and for any other demo or project details please contact us or WhatsApp Shoaib.
                </div>
              )}
            </div>

            <div className="p-8 bg-bg-surface border border-bg-stroke rounded-3xl text-center">
              <h4 className="font-display text-xl font-bold text-text-primary mb-4">Interested in a similar solution?</h4>
              <Link 
                href="/contact" 
                onClick={() => trackCTAClick('Let\'s Talk', `project_detail_${project.slug}`)}
                className="inline-flex items-center gap-2 text-acid-cyan font-bold hover:gap-4 transition-all"
              >
                Let's Talk <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-12 border-t border-bg-stroke">
          <Link href="/projects" className="text-text-secondary hover:text-acid-cyan transition-colors flex items-center gap-2">
            <ArrowLeft size={18} /> Previous Project
          </Link>
          <Link href="/projects" className="text-text-secondary hover:text-acid-cyan transition-colors flex items-center gap-2">
            Next Project <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
