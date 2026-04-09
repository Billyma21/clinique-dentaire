import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'À Propos', href: '#about' },
    { name: 'Technologie', href: '#tech' },
    { name: 'Avis', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-mint rounded-lg flex items-center justify-center">
            <span className="text-navy font-bold text-xl">S</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-display font-bold text-lg leading-none">SABIRI</span>
            <span className="text-mint text-[10px] tracking-[0.2em] font-medium uppercase">Clinique Dentaire</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-mint transition-colors text-sm font-medium uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:025384666"
            className="flex items-center gap-2 text-white hover:text-mint transition-colors"
          >
            <Phone size={18} className="text-mint" />
            <span className="font-bold">02 538 46 66</span>
          </a>
          <a
            href="#contact"
            className="bg-mint text-navy px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-white transition-all shadow-lg hover:shadow-mint/20"
          >
            Prendre RDV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-navy border-t border-white/10 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/10" />
              <a
                href="tel:025384666"
                className="flex items-center gap-3 text-mint text-xl font-bold"
              >
                <Phone size={24} />
                02 538 46 66
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-mint text-navy text-center py-4 rounded-xl font-bold text-lg uppercase"
              >
                Prendre RDV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
