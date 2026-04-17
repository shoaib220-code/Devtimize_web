'use client';

import React from 'react';

export const Marquee = () => {
  const tech = [
    'Python', 'Flask', 'React', 'Flutter', '.NET', 'MERN', 'Laravel', 'Docker',
    'PostgreSQL', 'MongoDB', 'AWS', 'SQLite', 'TensorFlow', 'OneSignal', 'WPF', 'Tkinter'
  ];

  return (
    <div className="py-12 bg-bg-base border-y border-bg-stroke overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-xs font-mono text-text-muted uppercase tracking-[0.2em]">
          Trusted by clients across Pakistan and beyond
        </p>
      </div>
      
      <div className="flex flex-col gap-6">
        <div className="flex overflow-hidden group">
          <div className="flex gap-8 animate-marquee whitespace-nowrap py-2">
            {[...tech, ...tech].map((item, i) => (
              <div
                key={i}
                className="px-6 py-2 rounded-full bg-bg-surface border border-bg-stroke text-text-secondary text-sm font-medium hover:border-acid-cyan hover:text-acid-cyan transition-all cursor-default"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex overflow-hidden group">
          <div className="flex gap-8 animate-marquee-reverse whitespace-nowrap py-2">
            {[...tech, ...tech].reverse().map((item, i) => (
              <div
                key={i}
                className="px-6 py-2 rounded-full bg-bg-surface border border-bg-stroke text-text-secondary text-sm font-medium hover:border-acid-cyan hover:text-acid-cyan transition-all cursor-default"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>
    </div>
  );
};
