import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const points = [
    "Plus de 25 ans d'expérience à Forest",
    "Équipements de pointe et hygiène rigoureuse",
    "Approche douce pour les patients anxieux",
    "Équipe multilingue et accueillante",
  ];

  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/dentist-team/800/1000"
                alt="Dr. Sabiri et son équipe"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-mint/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-navy/5 rounded-full blur-3xl z-0"></div>
            
            <div className="absolute bottom-10 -right-8 z-20 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-mint/20 rounded-full flex items-center justify-center text-mint">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-navy font-bold text-lg">Certifié ISO</p>
                  <p className="text-gray-500 text-sm">Normes d'hygiène strictes</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="text-mint font-bold uppercase tracking-[0.2em] text-sm">À Propos de la Clinique</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mt-4 mb-8">
              Une Tradition d'Excellence depuis 1997
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Fondée par le Dr. Sabiri, notre clinique est devenue une référence à Forest pour la qualité de ses soins et son approche humaine. Nous croyons que chaque patient mérite une attention personnalisée et des solutions durables.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Notre philosophie repose sur trois piliers : l'éthique professionnelle, l'innovation technologique et le confort absolu du patient. Que ce soit pour un simple contrôle ou une réhabilitation complexe, nous vous accompagnons à chaque étape.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {points.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle2 className="text-mint shrink-0" size={20} />
                  <span className="text-navy font-medium">{point}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block bg-navy text-white px-10 py-4 rounded-full font-bold hover:bg-mint hover:text-navy transition-all shadow-lg"
            >
              Découvrir notre équipe
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
