import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck, Clock, Star, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/dental-clinic/1920/1080"
          alt="Clinique Dentaire Moderne"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-mint/10 border border-mint/20 px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-mint rounded-full animate-pulse"></span>
            <span className="text-mint text-sm font-bold uppercase tracking-wider">Ouvert & Prêt à vous recevoir</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6"
          >
            Votre Sourire, <br />
            <span className="text-mint">Notre Expertise</span> <br />
            au Cœur de Forest.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80 mb-10 leading-relaxed"
          >
            Soins dentaires d'excellence à Bruxelles (1190). Une équipe d'experts dédiée à votre santé bucco-dentaire dans un environnement calme et moderne.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="bg-mint text-navy px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white transition-all shadow-xl shadow-mint/10"
            >
              Prendre Rendez-vous
              <ChevronRight size={20} />
            </a>
            <a
              href="#services"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center hover:bg-white/20 transition-all"
            >
              Nos Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8"
          >
            <div className="flex flex-col">
              <span className="text-mint font-bold text-2xl">25+</span>
              <span className="text-white/60 text-sm uppercase tracking-wide">Années d'Expérience</span>
            </div>
            <div className="flex flex-col">
              <span className="text-mint font-bold text-2xl">10k+</span>
              <span className="text-white/60 text-sm uppercase tracking-wide">Patients Heureux</span>
            </div>
            <div className="flex flex-col">
              <span className="text-mint font-bold text-2xl">4.9/5</span>
              <span className="text-white/60 text-sm uppercase tracking-wide">Avis Patients</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Urgency Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a
          href="tel:025384666"
          className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce"
        >
          <Phone size={30} />
        </a>
      </div>
    </section>
  );
}

