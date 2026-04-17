'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Team', href: '/team' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const industryLinks = [
    { name: 'HVAC', href: '/industries/hvac-websites' },
    { name: 'Dentists', href: '/industries/dentist-websites' },
    { name: 'Lawyers', href: '/industries/lawyer-websites' },
    { name: 'Medspas', href: '/industries/medspa-websites' },
    { name: 'Roofing', href: '/industries/roofing-websites' },
    { name: 'Plumbers', href: '/industries/plumber-websites' },
    { name: 'Restaurants', href: '/industries/restaurant-websites' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full h-[72px] z-[500] transition-all duration-300 ${
      isScrolled ? 'glass-nav border-b-acid-cyan/10' : 'bg-transparent border-b-transparent'
    }`}>
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="font-display text-xl font-bold tracking-tighter gradient-text">
          DEVTIMIZE
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href ? 'text-acid-cyan' : 'text-text-secondary hover:text-acid-cyan'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Industries Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsIndustriesOpen(true)}
            onMouseLeave={() => setIsIndustriesOpen(false)}
          >
            <button className="text-sm font-medium text-text-secondary hover:text-acid-cyan transition-colors">
              Industries
            </button>
            <AnimatePresence>
              {isIndustriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-bg-surface border border-bg-stroke rounded-xl shadow-lg z-40"
                >
                  <div className="py-2">
                    {industryLinks.map((link, i) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block px-4 py-2.5 text-sm text-text-secondary hover:text-acid-cyan hover:bg-bg-raised transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* AI Receptionist Link */}
          <Link
            href="/ai-receptionist"
            className={`text-sm font-medium transition-colors ${
              pathname === '/ai-receptionist' ? 'text-acid-cyan' : 'text-text-secondary hover:text-acid-cyan'
            }`}
          >
            AI Receptionist
          </Link>
        </div>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-ember text-white text-sm font-semibold rounded-full hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            Get a Quote <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[600] bg-bg-base flex flex-col p-8 pt-24"
          >
            <button
              className="absolute top-6 right-6 text-text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`font-display text-4xl font-bold transition-colors ${
                      pathname === link.href ? 'text-acid-cyan' : 'text-text-primary hover:text-acid-cyan'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Industries Dropdown */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <button
                  onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                  className="font-display text-4xl font-bold text-text-primary hover:text-acid-cyan transition-colors w-full text-left"
                >
                  Industries
                </button>
                <AnimatePresence>
                  {isIndustriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 space-y-4 ml-4"
                    >
                      {industryLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-lg text-text-secondary hover:text-acid-cyan transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Mobile AI Receptionist Link */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.1 }}
              >
                <Link
                  href="/ai-receptionist"
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-display text-4xl font-bold transition-colors ${
                    pathname === '/ai-receptionist' ? 'text-acid-cyan' : 'text-text-primary hover:text-acid-cyan'
                  }`}
                >
                  AI Receptionist
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 2) * 0.1 }}
              >
                <Link
                  href="/contact"
                  className="mt-4 block px-8 py-4 bg-ember text-white text-lg font-bold rounded-xl text-center"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
