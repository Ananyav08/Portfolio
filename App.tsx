
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Quote from './components/Quote';
import HireMe from './components/HireMe';
import Footer from './components/Footer';
import GeminiChat from './components/GeminiChat';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('HOME');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['HOME', 'PORTFOLIO', 'ABOUT', 'HIRE_ME'];
      const current = sections.find(id => {
        const element = document.getElementById(id.toLowerCase().replace('_', '-'));
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -200 && rect.top <= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#E63946] selection:text-white">
      <Header activeSection={activeSection} />
      
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="portfolio" className="py-20 lg:py-32">
          <Work />
        </section>
        
        <section id="about" className="py-20 lg:py-32 bg-white/30">
          <About />
        </section>
        
        <Quote />
        
        <section id="hire-me" className="py-20 lg:py-32">
          <HireMe />
        </section>
      </main>

      <Footer />
      <GeminiChat />
    </div>
  );
};

export default App;
