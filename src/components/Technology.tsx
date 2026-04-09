import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Zap, Eye, ShieldCheck } from 'lucide-react';

const techs = [
  {
    title: 'Radiographie Numérique',
    description: 'Réduction de 90% de l\'exposition aux rayons X et diagnostic instantané.',
    icon: Zap,
  },
  {
    title: 'Empreinte Optique 3D',
    description: 'Plus besoin de pâte désagréable. Précision millimétrique pour vos couronnes.',
    icon: Eye,
  },
  {
    title: 'Laser Dentaire',
    description: 'Traitements plus rapides, moins de saignements et cicatrisation accélérée.',
    icon: Cpu,
  },
  {
    title: 'Stérilisation de Classe B',
    description: 'Protocoles hospitaliers pour une sécurité sanitaire absolue.',
    icon: ShieldCheck,
  },
];

export default function Technology() {
  return (
    <section id="tech" className="py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-mint font-bold uppercase tracking-[0.2em] text-sm"
            >
              Innovation & Équipement
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold mt-4 mb-8"
            >
              La Technologie au Service de votre Santé
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/70 mb-12 leading-relaxed"
            >
              Nous investissons continuellement dans les dernières avancées technologiques pour rendre vos visites plus courtes, plus confortables et plus efficaces.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {techs.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-mint">
                    <tech.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{tech.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="rounded-[2.5rem] overflow-hidden border-8 border-white/5 shadow-2xl">
              <img
                src="https://picsum.photos/seed/dental-tech/800/800"
                alt="Technologie Dentaire"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-mint/10 rounded-full blur-[100px] -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
