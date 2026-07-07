'use client';

import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-bg-base border-t border-bg-stroke pt-20 pb-10 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <Link href="/" className="font-display text-2xl font-bold tracking-tighter gradient-text">
              DEVTIMIZE
            </Link>
            <p className="text-text-secondary max-w-sm leading-relaxed">
              Product engineering studio. Building modern web, mobile, desktop, and AI solutions for clients who value quality and speed.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/devtimize/" className="text-sm font-medium text-text-muted hover:text-acid-cyan transition-colors">Instagram</a>
              <a href="https://www.facebook.com/p/Devtimize-61579934221770/" className="text-sm font-medium text-text-muted hover:text-acid-cyan transition-colors">Facebook</a>
              <a href="https://pk.linkedin.com/in/shoaib-liaqat-0755363a0" className="text-sm font-medium text-text-muted hover:text-acid-cyan transition-colors">LinkedIn</a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-text-primary mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><Link href="/services/web-development" className="hover:text-acid-cyan transition-colors">Web Development</Link></li>
              <li><Link href="/services/mobile-desktop" className="hover:text-acid-cyan transition-colors">Mobile & Desktop</Link></li>
              <li><Link href="/services/ai-automation" className="hover:text-acid-cyan transition-colors">AI & Automation</Link></li>
              <li><Link href="/services/apis-integrations" className="hover:text-acid-cyan transition-colors">APIs & Integrations</Link></li>
              <li><Link href="/services/cloud-devops" className="hover:text-acid-cyan transition-colors">Cloud & DevOps</Link></li>
              <li><Link href="/services/maintenance" className="hover:text-acid-cyan transition-colors">Maintenance</Link></li>
              <li><Link href="/ai-receptionist" className="hover:text-acid-cyan transition-colors">AI Receptionist</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-text-primary mb-6">Industries</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><Link href="/industries/hvac-websites" className="hover:text-acid-cyan transition-colors">HVAC</Link></li>
              <li><Link href="/industries/dentist-websites" className="hover:text-acid-cyan transition-colors">Dentists</Link></li>
              <li><Link href="/industries/lawyer-websites" className="hover:text-acid-cyan transition-colors">Lawyers</Link></li>
              <li><Link href="/industries/medspa-websites" className="hover:text-acid-cyan transition-colors">Medspas</Link></li>
              <li><Link href="/industries/roofing-websites" className="hover:text-acid-cyan transition-colors">Roofing</Link></li>
              <li><Link href="/industries/plumber-websites" className="hover:text-acid-cyan transition-colors">Plumbers</Link></li>
              <li><Link href="/industries/restaurant-websites" className="hover:text-acid-cyan transition-colors">Restaurants</Link></li>
              <li><Link href="/industries/real-estate-websites" className="hover:text-acid-cyan transition-colors">Real Estate</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-text-primary mb-6">Links</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><Link href="/projects" className="hover:text-acid-cyan transition-colors">Projects</Link></li>
              <li><Link href="/blog" className="hover:text-acid-cyan transition-colors">Blog</Link></li>
              <li><Link href="/team" className="hover:text-acid-cyan transition-colors">Team</Link></li>
              <li><Link href="/testimonials" className="hover:text-acid-cyan transition-colors">Testimonials</Link></li>
              <li><Link href="/about" className="hover:text-acid-cyan transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-acid-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-bg-stroke flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs font-mono text-text-muted">
            © 2026 Shoaib & Hamza Tech Solutions. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-mono text-text-muted">
            <a href="mailto:devtimize@gmail.com" className="hover:text-acid-cyan transition-colors">devtimize@gmail.com</a>
            <span>Shoaib:+923104745649</span>
            <span>Hamza: +923026160466</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
