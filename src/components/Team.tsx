import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Phone } from 'lucide-react';

export const Team = () => {
  const founders = [
    {
      name: 'Shoaib Liaqat',
      role: 'FOUNDER & CEO',
      edu: 'BSCS · Baba Guru Nanak University',
      skills: 'Flutter · MERN · Flask · .NET · Cloud · React · Mobile',
      phone: '03016672356',
      image: '/images/team/shoaib.png'
    },
    {
      name: 'Hamza Amin',
      role: 'CO-FOUNDER',
      edu: 'BSCS · Islamic University Islamabad',
      skills: 'Python · Chatbots · RAG · Trading Bots · Automation · ML',
      phone: '+923026160466',
      image: 'https://picsum.photos/seed/hamza/400/400'
    }
  ];

  return (
    <section id="team" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative mb-20">
          <span className="font-mono text-[11px] text-acid-cyan tracking-[0.25em] uppercase block mb-4">
            03 — The Team
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-text-primary">
            Hands-On Founders<br />
            <span className="text-text-secondary">Who Ship.</span>
          </h2>
          <div className="absolute top-0 right-0 font-display text-[120px] md:text-[160px] font-extrabold text-white/[0.02] leading-none pointer-events-none select-none">
            03
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {founders.map((founder, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group bg-bg-surface border border-bg-stroke rounded-2xl p-8 lg:p-12 hover:border-acid-cyan/20 transition-all duration-500"
            >
              <div className="aspect-square w-full max-w-[300px] mx-auto mb-10 rounded-xl overflow-hidden border border-acid-cyan/10 group-hover:border-acid-cyan/30 transition-colors">
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full h-full object-cover saturate-[0.8] group-hover:saturate-[1.1] transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="text-center">
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-text-primary mb-2">
                  {founder.name}
                </h3>
                <p className="font-mono text-[10px] text-acid-cyan tracking-[0.2em] uppercase mb-4">
                  {founder.role}
                </p>
                <p className="text-sm text-text-secondary mb-8">
                  {founder.edu}
                </p>

                <div className="h-[1px] w-full bg-bg-stroke mb-8" />

                <p className="text-sm text-text-secondary leading-relaxed mb-10">
                  {founder.skills}
                </p>

                <div className="flex items-center justify-center gap-6">
                  <a href="#" className="text-text-muted hover:text-acid-cyan transition-colors"><Github size={20} /></a>
                  <a href="#" className="text-text-muted hover:text-acid-cyan transition-colors"><Linkedin size={20} /></a>
                  <a href={`tel:${founder.phone}`} className="text-text-muted hover:text-acid-cyan transition-colors flex items-center gap-2 text-xs font-mono">
                    <Phone size={16} /> {founder.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h4 className="font-display text-2xl md:text-4xl text-text-secondary max-w-3xl mx-auto leading-tight">
            "Two CS graduates building software<br />
            <span className="text-text-primary">the world actually uses."</span>
          </h4>
        </div>
      </div>
    </section>
  );
};
