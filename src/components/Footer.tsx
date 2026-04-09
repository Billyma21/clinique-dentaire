import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-mint rounded-lg flex items-center justify-center">
                <span className="text-navy font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-display font-bold text-lg leading-none">SABIRI</span>
                <span className="text-mint text-[10px] tracking-[0.2em] font-medium uppercase">Clinique Dentaire</span>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed">
              Votre partenaire de confiance pour une santé bucco-dentaire optimale à Forest. Expertise, technologie et douceur depuis 1997.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-mint hover:text-navy transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Liens Rapides</h4>
            <ul className="space-y-4 text-white/60">
              {['Accueil', 'Nos Services', 'À Propos', 'Technologie', 'Avis Patients'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-mint transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-white/60">
              {['Implantologie', 'Esthétique Dentaire', 'Orthodontie', 'Urgences', 'Soins Enfants'].map((item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-mint transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex gap-3">
                <MapPin size={20} className="text-mint shrink-0" />
                <span>Avenue Wielemans Ceuppens, 1190 Forest</span>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="text-mint shrink-0" />
                <span>02 538 46 66</span>
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="text-mint shrink-0" />
                <span>contact@clinique-sabiri.be</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Clinique Dentaire Sabiri. COPYRIGHT et protection d'auteur : ce site a été créé intégralement par MAAYOUD.B. Tous droits réservés.
          </p>
          <div className="flex gap-8 text-white/40 text-sm">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
            <a href="/admin" className="hover:text-white transition-colors">Admin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
