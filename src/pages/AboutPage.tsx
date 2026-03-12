import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Twitter, Award, Code, Rocket, Users } from 'lucide-react';
import { SEO } from '../components/SEO';

export const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <SEO 
        title="About Devtimize | Our Story & Mission"
        description="Learn about Devtimize, a product engineering studio founded by Shoaib Liaqat and Hamza Amin. Discover our mission to build high-quality digital assets."
        canonical="https://devtimize.com/about/"
        personSchema={true}
        breadcrumbs={[
          { name: 'Home', url: 'https://devtimize.com/' },
          { name: 'About', url: 'https://devtimize.com/about/' }
        ]}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <span className="font-mono text-[11px] text-acid-cyan tracking-[0.25em] uppercase block mb-4">
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary mb-8">
              Engineering <span className="gradient-text">Excellence.</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Devtimize was founded by two computer science graduates with a shared vision: to bridge the gap between complex technology and practical business solutions. We don't just write code; we build digital assets that drive growth.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-4xl font-bold text-acid-cyan mb-2">2024</h3>
                <p className="text-sm text-text-muted uppercase tracking-widest">Established</p>
              </div>
              <div>
                <h3 className="font-display text-4xl font-bold text-acid-cyan mb-2">8+</h3>
                <p className="text-sm text-text-muted uppercase tracking-widest">Projects Shipped</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-bg-stroke">
              <img 
                src="/images/team/shoaib&hamza.png" 
                alt="Devtimize Office" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 p-8 bg-bg-surface border border-bg-stroke rounded-2xl shadow-2xl">
              <p className="font-display text-2xl font-bold text-text-primary italic">"We ship serious software for serious clients."</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-32">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-16 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Award className="text-acid-cyan" />, title: 'Quality First', desc: 'We never compromise on the integrity of our code. Every line is written with scalability and maintainability in mind.' },
              { icon: <Rocket className="text-acid-cyan" />, title: 'Rapid Delivery', desc: 'We understand that time-to-market is critical. Our agile process ensures fast iterations without sacrificing quality.' },
              { icon: <Users className="text-acid-cyan" />, title: 'Client Centric', desc: 'Your success is our success. We maintain transparent communication and provide ongoing support long after launch.' }
            ].map((value, i) => (
              <div key={i} className="p-10 bg-bg-surface border border-bg-stroke rounded-3xl hover:border-acid-cyan/20 transition-all">
                <div className="mb-6">{value.icon}</div>
                <h3 className="font-display text-2xl font-bold text-text-primary mb-4">{value.title}</h3>
                <p className="text-text-secondary leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Founders Detail */}
        <div id="team" className="mb-32">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-16 text-center">The Founders</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: 'Shoaib Liaqat',
                role: 'Founder & CEO',
                edu: 'BSCS · Baba Guru Nanak University',
                bio: 'Expert in mobile and web ecosystems. Shoaib leads the product engineering efforts, ensuring that every application is built on a solid foundation of modern architecture.',
                skills: ['Flutter', 'MERN', 'React', 'Flask', '.NET'],
                image: '/images/team/shoaib.png'
              },
              {
                name: 'Hamza Amin',
                role: 'Co-founder',
                edu: 'BSCS · Islamic University Islamabad',
                bio: 'Passionate about intelligent systems. Hamza focuses on AI integrations, RAG systems, and automated trading bots that push the boundaries of what software can do.',
                skills: ['Python', 'LangChain', 'TensorFlow', 'Chatbots', 'ML'],
                image: '/images/team/hamza.png'
              }
            ].map((founder, i) => (
              <div key={i} className="bg-bg-surface border border-bg-stroke rounded-3xl p-10 flex flex-col md:flex-row gap-10 items-center md:items-start">
                <div className="w-40 h-40 rounded-2xl overflow-hidden shrink-0 border border-bg-stroke">
                  <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-text-primary mb-1">{founder.name}</h3>
                  <p className="text-acid-cyan font-mono text-xs uppercase tracking-widest mb-4">{founder.role}</p>
                  <p className="text-sm text-text-muted mb-4">{founder.edu}</p>
                  <p className="text-text-secondary mb-6 leading-relaxed">{founder.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {founder.skills.map(skill => (
                      <span key={skill} className="px-2 py-1 bg-bg-raised border border-bg-stroke rounded text-[10px] text-text-secondary font-mono">{skill}</span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-text-muted hover:text-acid-cyan transition-colors"><Linkedin size={18} /></a>
                    <a href="#" className="text-text-muted hover:text-acid-cyan transition-colors"><Github size={18} /></a>
                    <a href="#" className="text-text-muted hover:text-acid-cyan transition-colors"><Mail size={18} /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
