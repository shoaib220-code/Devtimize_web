import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Facebook, Send, Calendar, MapPin, Clock, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
/*
  Brevo (formerly Sendinblue) integration notes:
  - Create an API key in your Brevo dashboard.
  - For security do NOT expose the key in frontend code; instead
    send form data to a backend endpoint which then calls Brevo.
  - Example serverless route (Netlify, Vercel, etc.):
      POST /api/quote
      body: { name,email,phone,projectType,budget,timeline,description }
    and have it make a request to
      POST https://api.brevo.com/v3/smtp/email
    with headers Authorization: Bearer <BREVO_API_KEY> and a template.
*/

export const ContactPage = () => {
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Web Development',
    budget: '$150 - $500',
    timeline: 'ASAP',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // POST to your backend endpoint which will forward to Brevo
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error('Network response was not ok');

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'Web Development',
        budget: '$150 - $500',
        timeline: 'ASAP',
        description: ''
      });
    } catch (error) {
      console.error('Quote send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <SEO 
        title="Contact Devtimize | Start Your Project"
        description="Ready to bring your idea to life? Contact Devtimize for a free consultation. We specialize in web, mobile, and AI solutions."
        canonical="https://devtimize.com/contact/"
        breadcrumbs={[
          { name: 'Home', url: 'https://devtimize.com/' },
          { name: 'Contact', url: 'https://devtimize.com/contact/' }
        ]}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <span className="font-mono text-[11px] text-acid-cyan tracking-[0.25em] uppercase block mb-4">
            Get In Touch
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-text-primary mb-6">
            Let's Start a <span className="gradient-text">Project.</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
            Ready to bring your idea to life? Fill out the form below or reach out directly. We typically respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="bg-bg-surface border border-bg-stroke rounded-3xl p-8 md:p-12">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-jade/10 border border-jade/20 rounded-xl flex items-center gap-3">
                  <CheckCircle className="text-jade" size={20} />
                  <div>
                    <p className="font-semibold text-jade">Message Sent!</p>
                    <p className="text-sm text-jade/80">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3">
                  <AlertCircle className="text-red-500" size={20} />
                  <div>
                    <p className="font-semibold text-red-500">Failed to send message</p>
                    <p className="text-sm text-red-500/80">Please try again or email us directly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-mono text-text-muted uppercase tracking-widest">Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-bg-raised border border-bg-stroke rounded-xl px-5 py-4 text-text-primary outline-none focus:border-acid-cyan transition-all" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-mono text-text-muted uppercase tracking-widest">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-bg-raised border border-bg-stroke rounded-xl px-5 py-4 text-text-primary outline-none focus:border-acid-cyan transition-all" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-mono text-text-muted uppercase tracking-widest">WhatsApp / Phone</label>
                    <input 
                      type="text" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-bg-raised border border-bg-stroke rounded-xl px-5 py-4 text-text-primary outline-none focus:border-acid-cyan transition-all" 
                      placeholder="+92 300 0000000" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-mono text-text-muted uppercase tracking-widest">Project Type</label>
                    <select 
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full bg-bg-raised border border-bg-stroke rounded-xl px-5 py-4 text-text-primary outline-none focus:border-acid-cyan transition-all appearance-none"
                    >
                      <option>Web Development</option>
                      <option>Mobile App</option>
                      <option>Desktop Software</option>
                      <option>AI / Chatbot</option>
                      <option>Trading Bot</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-mono text-text-muted uppercase tracking-widest">Budget Range</label>
                    <select 
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-bg-raised border border-bg-stroke rounded-xl px-5 py-4 text-text-primary outline-none focus:border-acid-cyan transition-all appearance-none"
                    >
                      <option>$150 - $500</option>
                      <option>$500 - $2,000</option>
                      <option>$2,000 - $5,000</option>
                      <option>$5,000+</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-mono text-text-muted uppercase tracking-widest">Timeline</label>
                    <select 
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full bg-bg-raised border border-bg-stroke rounded-xl px-5 py-4 text-text-primary outline-none focus:border-acid-cyan transition-all appearance-none"
                    >
                      <option>ASAP</option>
                      <option>1 Month</option>
                      <option>2-3 Months</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-mono text-text-muted uppercase tracking-widest">Project Description *</label>
                  <textarea 
                    rows={6} 
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-bg-raised border border-bg-stroke rounded-xl px-5 py-4 text-text-primary outline-none focus:border-acid-cyan transition-all resize-none" 
                    placeholder="Tell us about your project goals and requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-ember text-white font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} 
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-10">
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
                    <a href="tel:03016672356" className="block text-xl font-display font-bold text-text-primary hover:text-acid-cyan transition-colors">Shoaib:+923104745649</a>
                    <a href="tel:+923026160466" className="block text-xl font-display font-bold text-text-primary hover:text-acid-cyan transition-colors">Hamza: +923026160466</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-bg-surface border border-bg-stroke text-acid-cyan">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-1">Response Time</p>
                  <p className="text-xl font-display font-bold text-text-primary">Within 24 Hours</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-grad-brand relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Calendar size={80} />
              </div>
              <h4 className="font-display text-2xl font-bold text-white mb-2">Book a Discovery Call</h4>
              <p className="text-white/80 text-sm mb-6">Schedule a free 15-minute consultation with our founders.</p>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-bg-base rounded-xl font-bold hover:gap-4 transition-all">
                Schedule Now <ArrowRight size={20} />
              </a>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="p-3 rounded-full bg-bg-surface border border-bg-stroke text-text-muted hover:text-acid-cyan hover:border-acid-cyan transition-all"><Instagram size={20} /></a>
              <a href="#" className="p-3 rounded-full bg-bg-surface border border-bg-stroke text-text-muted hover:text-acid-cyan hover:border-acid-cyan transition-all"><Facebook size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
