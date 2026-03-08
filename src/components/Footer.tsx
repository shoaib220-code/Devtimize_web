import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-bg-base border-t border-bg-stroke pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <Link to="/" className="font-display text-2xl font-bold tracking-tighter gradient-text">
              DEVTIMIZE
            </Link>
            <p className="text-text-secondary max-w-sm leading-relaxed">
              Product engineering studio. Building modern web, mobile, desktop, and AI solutions for clients who value quality and speed.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-sm font-medium text-text-muted hover:text-acid-cyan transition-colors">Instagram</a>
              <a href="#" className="text-sm font-medium text-text-muted hover:text-acid-cyan transition-colors">Facebook</a>
              <a href="#" className="text-sm font-medium text-text-muted hover:text-acid-cyan transition-colors">LinkedIn</a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-text-primary mb-6">Stack</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li>Python · Flask · .NET</li>
              <li>Flutter · PHP · Laravel</li>
              <li>React · MERN · AI</li>
              <li>ASP.NET Core · Bots</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-text-primary mb-6">Links</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><Link to="/services" className="hover:text-acid-cyan transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-acid-cyan transition-colors">Projects</Link></li>
              <li><Link to="/blog" className="hover:text-acid-cyan transition-colors">Blog</Link></li>
              <li><Link to="/team" className="hover:text-acid-cyan transition-colors">Team</Link></li>
              <li><Link to="/testimonials" className="hover:text-acid-cyan transition-colors">Testimonials</Link></li>
              <li><Link to="/about" className="hover:text-acid-cyan transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-acid-cyan transition-colors">Contact</Link></li>
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
