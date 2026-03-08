import React from 'react';
import { motion } from 'motion/react';

export const Stats = () => {
  const stats = [
    { value: '8+', label: 'Projects Shipped' },
    { value: '4+', label: 'Verified Clients' },
    { value: '2', label: 'CS Graduates' },
    { value: '24h', label: 'Response Time' }
  ];

  return (
    <section className="py-20 bg-[#060A12] border-y border-bg-stroke">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="font-display text-5xl md:text-7xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-text-muted uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
