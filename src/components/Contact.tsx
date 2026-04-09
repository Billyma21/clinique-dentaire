import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, ParkingCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-mint font-bold uppercase tracking-[0.2em] text-sm"
            >
              Contact & Accès
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-navy mt-4 mb-8"
            >
              Prêt à retrouver votre Sourire ?
            </motion.h2>

            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-mint/10 rounded-2xl flex items-center justify-center text-mint">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-lg mb-1">Notre Adresse</h4>
                  <p className="text-gray-600">Avenue Wielemans Ceuppens, 1190 Forest, Bruxelles</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-mint/10 rounded-2xl flex items-center justify-center text-mint">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-lg mb-1">Téléphone</h4>
                  <p className="text-gray-600">02 538 46 66</p>
                  <p className="text-red-500 font-medium text-sm mt-1">Urgences : Appel direct recommandé</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-mint/10 rounded-2xl flex items-center justify-center text-mint">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-lg mb-1">Horaires d'Ouverture</h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-gray-600">
                    <span>Lundi - Vendredi</span>
                    <span className="font-medium">09:00 - 18:00</span>
                    <span>Samedi</span>
                    <span className="font-medium">09:00 - 13:00</span>
                    <span>Dimanche</span>
                    <span className="text-red-400">Fermé</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-mint/10 rounded-2xl flex items-center justify-center text-mint">
                  <ParkingCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-lg mb-1">Accès & Parking</h4>
                  <p className="text-gray-600">Parking facile dans l'avenue. Accessible via Tram 82, 97 et Bus 52.</p>
                </div>
              </div>
            </div>

            {/* Simulated Map Placeholder */}
            <div className="rounded-3xl overflow-hidden h-64 bg-gray-100 relative border border-gray-200 shadow-inner">
              <img
                src="https://picsum.photos/seed/forest-map/800/400"
                alt="Carte de Forest"
                className="w-full h-full object-cover opacity-50 grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white px-6 py-3 rounded-full shadow-xl flex items-center gap-3 border border-mint/20">
                  <div className="w-3 h-3 bg-mint rounded-full animate-ping"></div>
                  <span className="font-bold text-navy">Clinique Dentaire Sabiri</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 bg-soft-gray p-10 rounded-[2.5rem] border border-gray-200"
          >
            <h3 className="text-2xl font-display font-bold text-navy mb-8">Envoyez-nous un Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy uppercase tracking-wider">Nom Complet</label>
                  <input
                    type="text"
                    placeholder="Jean Dupont"
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-mint focus:ring-2 focus:ring-mint/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy uppercase tracking-wider">Téléphone</label>
                  <input
                    type="tel"
                    placeholder="04XX XX XX XX"
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-mint focus:ring-2 focus:ring-mint/20 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-navy uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  placeholder="jean@email.com"
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-mint focus:ring-2 focus:ring-mint/20 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-navy uppercase tracking-wider">Type de Soin</label>
                <select className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-mint focus:ring-2 focus:ring-mint/20 outline-none transition-all appearance-none">
                  <option>Contrôle Annuel</option>
                  <option>Urgence Dentaire</option>
                  <option>Implantologie</option>
                  <option>Esthétique / Blanchiment</option>
                  <option>Autre</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-navy uppercase tracking-wider">Message</label>
                <textarea
                  rows={4}
                  placeholder="Comment pouvons-nous vous aider ?"
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-mint focus:ring-2 focus:ring-mint/20 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-navy text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-mint hover:text-navy transition-all shadow-xl shadow-navy/10"
              >
                Envoyer la demande
                <Send size={20} />
              </button>
              <p className="text-center text-xs text-gray-400 mt-4">
                En envoyant ce formulaire, vous acceptez notre politique de confidentialité.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
