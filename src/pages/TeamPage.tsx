import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';
import { SEO } from '../components/SEO';

const team = [
  {
    name: 'Shoaib Liaqat',
    role: 'Founder & CEO',
    image: '/images/team/shoaib.png',
    bio: 'Expert in Python, AI, and scalable web architectures. Shoaib leads the technical vision at Devtimize, ensuring every line of code meets enterprise standards.',
    skills: ['Python', 'AI/ML', 'React', 'System Design'],
    social: { github: '#', linkedin: '#', twitter: '#' }
  },
  {
    name: 'Hamza Amin',
    role: 'Co-founder',
<<<<<<< HEAD
    image: '/images/team/hamza.png',
=======
    image: 'https://picsum.photos/seed/hamza/400/400',
>>>>>>> 2b70879c8c30a332d2c1835c581d77b31660ddb4
    bio: 'Specialist in mobile ecosystems and frontend excellence. Hamza focuses on creating intuitive user experiences that bridge the gap between complex logic and human interaction.',
    skills: ['Flutter', 'React Native', 'UI/UX', 'Node.js'],
    social: { github: '#', linkedin: '#', twitter: '#' }
  }
];

export const TeamPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <SEO 
        title="Our Team | The Minds Behind Devtimize"
        description="Meet the founders of Devtimize, Shoaib Liaqat and Hamza Amin. A team of passionate engineers dedicated to building the future of digital experiences."
        canonical="https://devtimize.com/team/"
        personSchema={true}
        breadcrumbs={[
          { name: 'Home', url: 'https://devtimize.com/' },
          { name: 'Team', url: 'https://devtimize.com/team/' }
        ]}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
          <span className="font-mono text-[11px] text-acid-cyan tracking-[0.25em] uppercase block mb-4">
            The Minds Behind
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary mb-6">
            Meet the <span className="gradient-text">Founders.</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            We are a team of passionate engineers dedicated to building the future of digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-bg-surface border border-bg-stroke rounded-3xl p-8 md:p-12 hover:border-acid-cyan/20 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-40 h-40 rounded-2xl overflow-hidden border-2 border-bg-stroke group-hover:border-acid-cyan/30 transition-colors shrink-0">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h2 className="font-display text-3xl font-bold text-text-primary mb-2">{member.name}</h2>
                  <p className="text-acid-cyan font-mono text-sm mb-4">{member.role}</p>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {member.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 rounded-full bg-bg-raised border border-bg-stroke text-text-muted text-[10px] uppercase tracking-wider">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={member.social.github} className="text-text-muted hover:text-acid-cyan transition-colors"><Github size={20} /></a>
                    <a href={member.social.linkedin} className="text-text-muted hover:text-acid-cyan transition-colors"><Linkedin size={20} /></a>
                    <a href={member.social.twitter} className="text-text-muted hover:text-acid-cyan transition-colors"><Twitter size={20} /></a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-bg-surface border border-bg-stroke rounded-3xl text-center">
          <h3 className="font-display text-3xl font-bold text-text-primary mb-6">Join our journey</h3>
          <p className="text-text-secondary mb-10 max-w-xl mx-auto">We are always looking for talented individuals and exciting partnerships. Let's build something great together.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:devtimize@gmail.com" className="flex items-center gap-2 text-text-primary hover:text-acid-cyan transition-colors">
              <Mail size={20} /> devtimize@gmail.com
            </a>
            <button className="flex items-center gap-2 text-text-primary hover:text-acid-cyan transition-colors">
              <ExternalLink size={20} /> Careers
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
