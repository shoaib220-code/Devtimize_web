import React from 'react';
import { motion } from 'motion/react';
import { Globe, Smartphone, Bot, Cpu, Cloud, Settings, ArrowUpRight } from 'lucide-react';
import { trackServiceView } from '../utils/analytics';
import { Link } from 'react-router-dom';

export const Services = () => {
  const services = [
    {
      icon: <Globe className="text-acid-cyan" size={32} />,
      title: 'Web Development',
      slug: 'web-development',
      desc: 'Custom websites, portals, dashboards, and e-commerce solutions.',
      stack: 'React · Laravel · Flask · .NET'
    },
    {
      icon: <Smartphone className="text-acid-cyan" size={32} />,
      title: 'Mobile & Desktop',
      slug: 'mobile-desktop',
      desc: 'Flutter (iOS/Android), WPF & Tkinter desktop applications.',
      stack: 'Flutter · WPF · Tkinter'
    },
    {
      icon: <Bot className="text-acid-cyan" size={32} />,
      title: 'AI & Automation',
      slug: 'ai-automation',
      desc: 'Chatbots, RAG assistants, trading bots, ML, and emotion AI.',
      stack: 'Python · LangChain · TensorFlow'
    },
    {
      icon: <Cpu className="text-acid-cyan" size={32} />,
      title: 'APIs & Integrations',
      slug: 'apis-integrations',
      desc: 'REST APIs, third-party services, payments, and OneSignal.',
      stack: 'REST · GraphQL · OneSignal'
    },
    {
      icon: <Cloud className="text-acid-cyan" size={32} />,
      title: 'Cloud & DevOps',
      slug: 'cloud-devops',
      desc: 'Deployment, CI/CD pipelines, server setup, and hosting.',
      stack: 'AWS · Docker · CI/CD'
    },
    {
      icon: <Settings className="text-acid-cyan" size={32} />,
      title: 'Maintenance & Support',
      slug: 'maintenance',
      desc: 'Bug fixes, updates, and new features added anytime.',
      stack: 'Ongoing · Retainers · Updates'
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative mb-20">
          <span className="font-mono text-[11px] text-acid-cyan tracking-[0.25em] uppercase block mb-4">
            01 — Our Services
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-text-primary">
            Full-Stack Solutions,<br />
            <span className="text-text-secondary">Start to Finish.</span>
          </h2>
          <div className="absolute top-0 right-0 font-display text-[120px] md:text-[160px] font-extrabold text-white/[0.02] leading-none pointer-events-none select-none">
            01
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Link
              key={i}
              to={`/services/${service.slug}`}
              onClick={() => trackServiceView(service.title)}
              className="group relative p-10 bg-bg-surface border border-bg-stroke rounded-2xl hover:border-acid-cyan/20 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-grad-brand opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="mb-8 p-3 w-fit rounded-xl bg-bg-raised border border-bg-stroke group-hover:border-acid-cyan/30 transition-colors">
                {service.icon}
              </div>

              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display text-2xl font-bold text-text-primary group-hover:text-acid-cyan transition-colors">
                  {service.title}
                </h3>
                <ArrowUpRight className="text-text-muted group-hover:text-acid-cyan transition-colors" size={20} />
              </div>

              <p className="text-text-secondary leading-relaxed mb-8">
                {service.desc}
              </p>

              <div className="pt-6 border-t border-bg-stroke">
                <span className="font-mono text-xs text-acid-cyan/60 uppercase tracking-wider">
                  {service.stack}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
