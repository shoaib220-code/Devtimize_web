import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { services } from '../data';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

export const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <SEO 
        title="Our Services | Expert Software Engineering"
        description="Explore our range of services including Web Development, Mobile Apps, AI Integration, and Cloud Infrastructure. Tailored solutions for your business."
        canonical="https://devtimize.com/services/"
        breadcrumbs={[
          { name: 'Home', url: 'https://devtimize.com/' },
          { name: 'Services', url: 'https://devtimize.com/services/' }
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="mb-20">
          <span className="font-mono text-[11px] text-acid-cyan tracking-[0.25em] uppercase block mb-4">
            Our Expertise
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary mb-6">
            Specialized <span className="gradient-text">Services.</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
            We offer a comprehensive suite of digital services designed to help your business thrive in the modern era. From AI to Cloud, we've got you covered.
          </p>
        </div>

        <div className="grid gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group grid lg:grid-cols-2 gap-12 p-8 md:p-12 bg-bg-surface border border-bg-stroke rounded-3xl hover:border-acid-cyan/20 transition-all duration-500"
            >
              <div>
                <div className="p-4 w-fit rounded-2xl bg-bg-raised border border-bg-stroke text-acid-cyan mb-8 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.stack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-acid-cyan/5 border border-acid-cyan/10 text-acid-cyan text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link to={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-acid-cyan font-bold hover:gap-4 transition-all">
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>

              <div className="bg-bg-raised/50 rounded-2xl p-8 border border-bg-stroke">
                <h3 className="font-display text-xl font-bold text-text-primary mb-6">What we deliver:</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-text-secondary">
                      <CheckCircle2 size={20} className="text-jade shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
