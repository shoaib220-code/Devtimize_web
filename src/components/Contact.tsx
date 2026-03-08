import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Facebook, Send, Calendar, ArrowRight } from 'lucide-react';
import { trackFormSubmit, trackCTAClick } from '../utils/analytics';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative mb-20">
          <span className="font-mono text-[11px] text-acid-cyan tracking-[0.25em] uppercase block mb-4">
            05 — Contact
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-text-primary">
            Let's Build Something<br />
            <span className="text-text-secondary">Worth Launching.</span>
          </h2>
          <div className="absolute top-0 right-0 font-display text-[120px] md:text-[160px] font-extrabold text-white/[0.02] leading-none pointer-events-none select-none">
            05
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <form 
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                trackFormSubmit('home_contact_form');
                // Handle form submission
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-text-muted uppercase tracking-widest">Full Name *</label>
                  <input type="text" className="w-full bg-bg-surface border border-bg-stroke rounded-xl px-5 py-4 text-text-primary outline-none focus:border-acid-cyan transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-text-muted uppercase tracking-widest">Email Address *</label>
                  <input type="email" className="w-full bg-bg-surface border border-bg-stroke rounded-xl px-5 py-4 text-text-primary outline-none focus:border-acid-cyan transition-all" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-text-muted uppercase tracking-widest">WhatsApp / Phone</label>
                  <input type="text" className="w-full bg-bg-surface border border-bg-stroke rounded-xl px-5 py-4 text-text-primary outline-none focus:border-acid-cyan transition-all" placeholder="+92 300 0000000" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-text-muted uppercase tracking-widest">Project Type</label>
                  <select className="w-full bg-bg-surface border border-bg-stroke rounded-xl px-5 py-4 text-text-primary outline-none focus:border-acid-cyan transition-all appearance-none">
                    <option>Web App</option>
                    <option>Mobile App</option>
                    <option>Desktop Software</option>
                    <option>AI / Chatbot</option>
                    <option>Trading Bot</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-text-muted uppercase tracking-widest">Project Description *</label>
                <textarea rows={4} className="w-full bg-bg-surface border border-bg-stroke rounded-xl px-5 py-4 text-text-primary outline-none focus:border-acid-cyan transition-all resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <button className="w-full py-5 bg-ember text-white font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-3 group">
                Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-bg-surface border border-bg-stroke text-acid-cyan">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-1">Email Us</p>
                  <a href="mailto:devtimize@gmail.com" className="text-xl font-display font-bold text-text-primary hover:text-acid-cyan transition-colors">devtimize@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-bg-surface border border-bg-stroke text-acid-cyan">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-1">Call Us</p>
                  <div className="space-y-1">
                    <a href="tel:+923104745649" className="block text-xl font-display font-bold text-text-primary hover:text-acid-cyan transition-colors">Shoaib: +923104745649</a>
                    <a href="tel:+923026160466" className="block text-xl font-display font-bold text-text-primary hover:text-acid-cyan transition-colors">Hamza: +923026160466</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-bg-surface border border-bg-stroke relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Calendar size={80} />
              </div>
              <h4 className="font-display text-2xl font-bold text-text-primary mb-2">Book a Free Call</h4>
              <p className="text-text-secondary text-sm mb-6 max-w-[240px]">Schedule a 15-min discovery call to discuss your project requirements.</p>
              <a 
                href="#" 
                onClick={() => trackCTAClick('Schedule Now', 'home_contact_section')}
                className="inline-flex items-center gap-2 text-acid-cyan font-bold hover:gap-4 transition-all"
              >
                Schedule Now <ArrowRight size={20} />
              </a>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="p-3 rounded-full bg-bg-surface border border-bg-stroke text-text-muted hover:text-acid-cyan hover:border-acid-cyan transition-all"><Instagram size={20} /></a>
              <a href="#" className="p-3 rounded-full bg-bg-surface border border-bg-stroke text-text-muted hover:text-acid-cyan hover:border-acid-cyan transition-all"><Facebook size={20} /></a>
              <div className="h-[1px] flex-1 bg-bg-stroke" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-jade rounded-full animate-pulse" />
                <span className="text-xs font-mono text-jade uppercase tracking-widest">Available Now</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
