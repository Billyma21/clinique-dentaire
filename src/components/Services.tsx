import React from 'react';
import { motion } from 'motion/react';
import { Shield, Activity, Sparkles, Smile, AlertCircle, Heart } from 'lucide-react';

const services = [
  {
    title: 'Soins Conservateurs',
    description: 'Traitements des caries, détartrage et prévention pour maintenir vos dents naturelles en parfaite santé.',
    icon: Shield,
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    title: 'Implantologie',
    description: 'Remplacement de dents manquantes par des implants de haute qualité pour retrouver confort et esthétique.',
    icon: Activity,
    color: 'bg-mint/10 text-mint',
  },
  {
    title: 'Esthétique Dentaire',
    description: 'Blanchiment professionnel, facettes et corrections pour un sourire éclatant et harmonieux.',
    icon: Sparkles,
    color: 'bg-purple-500/10 text-purple-500',
  },
  {
    title: 'Orthodontie',
    description: 'Alignement des dents pour enfants et adultes avec les techniques les plus modernes et discrètes.',
    icon: Smile,
    color: 'bg-orange-500/10 text-orange-500',
  },
  {
    title: 'Urgences Dentaires',
    description: 'Prise en charge rapide pour soulager vos douleurs et traiter les traumatismes dentaires imprévus.',
    icon: AlertCircle,
    color: 'bg-red-500/10 text-red-500',
    highlight: true,
  },
  {
    title: 'Parodontologie',
    description: 'Soin des gencives et traitement des maladies parodontales pour assurer la solidité de votre dentition.',
    icon: Heart,
    color: 'bg-pink-500/10 text-pink-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-mint font-bold uppercase tracking-[0.2em] text-sm"
          >
            Nos Expertises
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-navy mt-4 mb-6"
          >
            Des Soins Complets pour Toute la Famille
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Nous utilisons les dernières technologies pour vous offrir des traitements précis, durables et indolores dans un cadre serein.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all border border-gray-100 group",
                service.highlight && "border-red-100 bg-red-50/30"
              )}
            >
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", service.color)}>
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold text-navy mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href="#contact"
                className={cn(
                  "inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider transition-colors",
                  service.highlight ? "text-red-500 hover:text-red-600" : "text-mint hover:text-navy"
                )}
              >
                En savoir plus
                <ChevronRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { cn } from '@/src/lib/utils';
import { ChevronRight } from 'lucide-react';
