import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { DetailedServices } from './components/DetailedServices';
import { Footer } from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <DetailedServices />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
