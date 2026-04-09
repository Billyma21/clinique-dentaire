import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Jean-Pierre D.",
    role: "Patient depuis 5 ans",
    text: "Une clinique exceptionnelle. Le Dr. Sabiri est d'une douceur incroyable, moi qui avais une peur bleue du dentiste, je viens maintenant sereinement.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    role: "Soins esthétiques",
    text: "Résultat magnifique pour mon blanchiment. L'équipe est professionnelle, ponctuelle et le cabinet est d'une propreté irréprochable.",
    rating: 5,
  },
  {
    name: "Marc L.",
    role: "Implantologie",
    text: "Pose d'implants sans aucune douleur. Le suivi post-opératoire est excellent. Je recommande vivement cette clinique à Forest.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-soft-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-mint font-bold uppercase tracking-[0.2em] text-sm"
          >
            Témoignages
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-navy mt-4 mb-6"
          >
            Ce que nos Patients disent
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all relative group"
            >
              <Quote className="absolute top-6 right-8 text-mint/10 group-hover:text-mint/20 transition-colors" size={60} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-mint text-mint" />
                ))}
              </div>

              <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center text-navy font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-navy">{review.name}</h4>
                  <p className="text-gray-400 text-sm">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-navy font-bold hover:text-mint transition-colors"
          >
            Voir tous les avis
            <Star size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
