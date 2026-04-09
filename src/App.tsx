import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Technology from './components/Technology';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminCMS from './components/AdminCMS';

export default function App() {
  // Simple routing for demo purposes
  const isPath = (path: string) => window.location.pathname === path;

  if (isPath('/admin')) {
    return (
      <div className="min-h-screen bg-soft-gray font-sans selection:bg-mint/30 selection:text-navy">
        <AdminCMS />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-mint/30 selection:text-navy">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Technology />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
