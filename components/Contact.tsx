'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Facebook, Send, Calendar, ArrowRight } from 'lucide-react';
import { trackFormSubmit, trackWhatsAppClick } from '../utils/analytics';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('Web App');
  const [description, setDescription] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const packageParam = params.get('package');

    if (packageParam) {
      setSelectedPackage(packageParam);
      setProjectType('AI Receptionist');
      setDescription((current) =>
        current.trim()
          ? current
          : `I'm interested in the ${packageParam} package. Please send pricing details and next steps.`
      );
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !description.trim()) {
      setStatusMessage('Please fill in required fields: Name, Email, Project Description.');
      return;
    }

    setIsSending(true);
    setStatusMessage('Sending your quote request...');

    try {
      const payload = {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        projectType,
        selectedPackage,
        description: description.trim(),
      };

      console.log('📤 Sending contact form with payload:', payload);

      const response = await fetch('/api/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('📬 API Response Status:', response.status, response.statusText);

      const responseData = await response.json();
      console.log('📬 API Response Data:', responseData);

      if (!response.ok) {
        const errorMessage = responseData.error || `Server error: ${response.status}`;
        console.error('❌ Email API Error:', errorMessage);
        throw new Error(errorMessage);
      }

      console.log('✅ Email sent successfully:', responseData);
      trackFormSubmit('home_contact_form');
      setStatusMessage('Thank you! Quote request sent successfully. Check your email for confirmation.');
      setName('');
      setEmail('');
      setPhone('');
      setProjectType('Web App');
      setSelectedPackage('');
      setDescription('');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error('❌ Email send failed:', {
        error: errorMessage,
        errorType: error instanceof Error ? error.constructor.name : typeof error,
        fullError: error,
      });
      
      // Show specific error messages
      if (errorMessage.includes('network') || errorMessage.includes('fetch')) {
        setStatusMessage('Network error. Please check your connection and try again.');
      } else if (errorMessage.includes('email')) {
        setStatusMessage('Email service error. Please try again later.');
      } else {
        setStatusMessage(`Error: ${errorMessage || 'Something went wrong. Please try again later.'}`);
      }
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="relative mb-20">
          <span className="font-mono text-[11px] text-acid-cyan tracking-[0.25em] uppercase block mb-4">
            05 — Contact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-text-primary">
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
              onSubmit={handleSubmit}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-text-muted uppercase tracking-widest">Full Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-bg-surface border border-bg-stroke rounded-xl px-5 py-4 text-text-primary outline-none focus:border-acid-cyan transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-text-muted uppercase tracking-widest">Email Address *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-bg-surface border border-bg-stroke rounded-xl px-5 py-4 text-text-primary outline-none focus:border-acid-cyan transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-text-muted uppercase tracking-widest">WhatsApp / Phone</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-bg-surface border border-bg-stroke rounded-xl px-5 py-4 text-text-primary outline-none focus:border-acid-cyan transition-all"
                    placeholder="+92 300 0000000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-text-muted uppercase tracking-widest">Project Type</label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-bg-surface border border-bg-stroke rounded-xl px-5 py-4 text-text-primary outline-none focus:border-acid-cyan transition-all appearance-none"
                  >
                    <option>Web App</option>
                    <option>Mobile App</option>
                    <option>Desktop Software</option>
                    <option>AI / Chatbot</option>
                    <option>Trading Bot</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {selectedPackage && (
                <div className="rounded-2xl border border-acid-cyan/20 bg-acid-cyan/5 p-4 text-sm text-text-primary">
                  Selected package: <strong>{selectedPackage}</strong>. This will be included in your quote request.
                </div>
              )}
              <div className="space-y-2">
                <label className="text-xs font-mono text-text-muted uppercase tracking-widest">Project Description *</label>
                <textarea
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-bg-surface border border-bg-stroke rounded-xl px-5 py-4 text-text-primary outline-none focus:border-acid-cyan transition-all resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-5 bg-ember text-white font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-3 group disabled:opacity-50"
              >
                {isSending ? 'Sending...' : 'Send Message'}
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              {statusMessage && <p className="text-sm text-text-secondary">{statusMessage}</p>}
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
                href="https://wa.me/923104745649?text=Hi%20Shoaib%2C%20I%20would%20like%20to%20book%20a%2015-minute%20call%20about%20an%20AI%20receptionist%20package."
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => trackWhatsAppClick('home_contact_section')}
                className="inline-flex items-center gap-2 text-acid-cyan font-bold hover:gap-4 transition-all"
              >
                Schedule Now <ArrowRight size={20} />
              </a>
            </div>

            <div className="flex items-center gap-6">
              <a href="https://www.instagram.com/devtimize/" className="p-3 rounded-full bg-bg-surface border border-bg-stroke text-text-muted hover:text-acid-cyan hover:border-acid-cyan transition-all"><Instagram size={20} /></a>
              <a href="https://www.facebook.com/p/Devtimize-61579934221770/" className="p-3 rounded-full bg-bg-surface border border-bg-stroke text-text-muted hover:text-acid-cyan hover:border-acid-cyan transition-all"><Facebook size={20} /></a>
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
