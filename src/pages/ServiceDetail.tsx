import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { services } from '../data';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

export const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="text-4xl font-display font-bold mb-4">Service Not Found</h1>
        <Link to="/services" className="text-acid-cyan hover:underline">Back to Services</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <SEO 
        title={`${service.title} | Devtimize`}
        description={service.metaDescription}
        canonical={`https://devtimize.com/services/${service.slug}/`}
        serviceSchema={{
          name: service.title,
          description: service.desc,
          url: `https://devtimize.com/services/${service.slug}/`,
          minPrice: service.minPrice,
          maxPrice: service.maxPrice
        }}
        breadcrumbs={[
          { name: 'Home', url: 'https://devtimize.com/' },
          { name: 'Services', url: 'https://devtimize.com/services/' },
          { name: service.title, url: `https://devtimize.com/services/${service.slug}/` }
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <Link to="/services" className="inline-flex items-center gap-2 text-text-secondary hover:text-acid-cyan transition-colors mb-12 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Services
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <div className="p-4 w-fit rounded-2xl bg-bg-raised border border-bg-stroke text-acid-cyan mb-8">
              {service.icon}
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary mb-8">
              {service.title}
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-10">
              {service.longDesc}
            </p>
            <div className="flex flex-wrap gap-3">
              {service.stack.map((tech, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-bg-raised border border-bg-stroke text-text-primary text-sm font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-bg-surface border border-bg-stroke rounded-3xl p-10">
            <h2 className="font-display text-2xl font-bold text-text-primary mb-8">Core Features</h2>
            <ul className="space-y-6">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-4 text-text-secondary">
                  <CheckCircle2 size={24} className="text-jade shrink-0 mt-0.5" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-12 text-center">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {service.process.map((p, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl font-display font-black text-white/[0.03] absolute -top-8 -left-4 group-hover:text-acid-cyan/5 transition-colors">
                  0{i + 1}
                </div>
                <div className="p-8 bg-bg-surface border border-bg-stroke rounded-2xl relative z-10 h-full">
                  <h3 className="font-display text-xl font-bold text-text-primary mb-4">{p.step}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-grad-brand rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Ready to start your {service.title} project?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Let's discuss your requirements and build something extraordinary together.</p>
            <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-bg-base font-bold rounded-xl hover:gap-5 transition-all">
              Get a Free Quote <ArrowRight size={20} />
            </Link>
          </div>
          <div className="absolute top-0 right-0 p-12 opacity-10">
            {service.icon}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
