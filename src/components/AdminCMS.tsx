import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, LayoutDashboard, FileText, Image as ImageIcon, Bell, Save, LogOut, CheckCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export default function AdminCMS() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Simulated CMS State
  const [cmsData, setCmsData] = useState({
    heroTitle: 'Votre Sourire, Notre Expertise au Cœur de Forest.',
    aboutText: 'Fondée par le Dr. Sabiri, notre clinique est devenue une référence à Forest pour la qualité de ses soins et son approche humaine.',
    emergencyBanner: false,
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'SABIRI' && password === 'SAB1190') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Identifiants incorrects. Veuillez réessayer.');
    }
  };

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  if (!isLoggedIn) {
    return (
      <section id="login" className="py-24 bg-soft-gray min-h-[60vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 rounded-[2.5rem] shadow-2xl w-full max-w-md border border-gray-100"
        >
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center text-navy mx-auto mb-4">
              <Lock size={32} />
            </div>
            <h2 className="text-3xl font-display font-bold text-navy">Accès CMS</h2>
            <p className="text-gray-500 mt-2">Connectez-vous pour modifier le site</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-navy uppercase tracking-wider">Identifiant</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-mint focus:ring-2 focus:ring-mint/20 outline-none transition-all"
                placeholder="SABIRI"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-navy uppercase tracking-wider">Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-mint focus:ring-2 focus:ring-mint/20 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            {error && <p className="text-red-500 text-sm font-medium text-center">{error}</p>}

            <button
              type="submit"
              className="w-full bg-navy text-white py-5 rounded-2xl font-bold text-lg hover:bg-mint hover:text-navy transition-all shadow-xl shadow-navy/10"
            >
              Se Connecter
            </button>
          </form>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-soft-gray min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-mint rounded-2xl flex items-center justify-center text-navy">
              <LayoutDashboard size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-navy">Dashboard CMS</h2>
              <p className="text-gray-500">Bienvenue, Dr. Sabiri</p>
            </div>
          </div>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors font-bold uppercase tracking-wider text-sm"
          >
            <LogOut size={18} />
            Déconnexion
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-1 space-y-4">
            {[
              { id: 'content', name: 'Contenu Textuel', icon: FileText },
              { id: 'media', name: 'Médiathèque', icon: ImageIcon },
              { id: 'emergency', name: 'Module Urgence', icon: Bell },
            ].map((tab) => (
              <button
                key={tab.id}
                className="w-full flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all text-left group"
              >
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:text-mint transition-colors">
                  <tab.icon size={20} />
                </div>
                <span className="font-bold text-navy">{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Main Editor Area */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-navy mb-8 flex items-center gap-3">
                <FileText size={24} className="text-mint" />
                Éditeur de Contenu
              </h3>

              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-navy uppercase tracking-wider">Titre Principal (Hero)</label>
                  <input
                    type="text"
                    value={cmsData.heroTitle}
                    onChange={(e) => setCmsData({ ...cmsData, heroTitle: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-mint outline-none transition-all font-medium"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-navy uppercase tracking-wider">Texte "À Propos"</label>
                  <textarea
                    rows={5}
                    value={cmsData.aboutText}
                    onChange={(e) => setCmsData({ ...cmsData, aboutText: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-mint outline-none transition-all font-medium resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center justify-between p-6 bg-red-50 rounded-2xl border border-red-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500">
                      <Bell size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-red-900">Bannière d'Urgence</h4>
                      <p className="text-red-700/70 text-sm">Affiche une alerte sur tout le site</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setCmsData({ ...cmsData, emergencyBanner: !cmsData.emergencyBanner })}
                    className={cn(
                      "w-14 h-8 rounded-full transition-all relative",
                      cmsData.emergencyBanner ? "bg-red-500" : "bg-gray-300"
                    )}
                  >
                    <div className={cn(
                      "absolute top-1 w-6 h-6 bg-white rounded-full transition-all",
                      cmsData.emergencyBanner ? "left-7" : "left-1"
                    )}></div>
                  </button>
                </div>

                <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
                  <p className="text-sm text-gray-400 italic">Dernière modification : Aujourd'hui à 14:20</p>
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="bg-navy text-white px-10 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-mint hover:text-navy transition-all shadow-lg disabled:opacity-50"
                  >
                    {isSaving ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Save size={20} />
                    )}
                    Enregistrer les modifications
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3"
          >
            <CheckCircle size={24} />
            <span className="font-bold">Modifications enregistrées avec succès !</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

