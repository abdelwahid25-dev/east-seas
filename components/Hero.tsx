import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" dir={dir}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.jpg`} 
          alt="Logistics Port" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-dark/70 rtl:bg-gradient-to-l"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center md:text-start">
        <div className="max-w-3xl">
          <div className="inline-block bg-brand-accent/20 border border-brand-accent/30 backdrop-blur-sm rounded-full px-4 py-1 mb-6">
            <span className="text-brand-accent font-medium text-sm tracking-wider uppercase">
              {t('hero.tagline')}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero.title_prefix')} <span className="text-brand-accent">{t('hero.title_suffix')}</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-slate-200 mb-2 font-light">
            {t('hero.subtitle')}
          </h2>
          <h2 className={`text-xl md:text-3xl text-white font-arabic mb-8 ${dir === 'ltr' ? 'dir-rtl' : ''}`}>
            {t('hero.arabic_name')}
          </h2>

          <p className="text-slate-300 text-lg mb-10 max-w-xl leading-relaxed">
             {t('hero.description')}
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#services" 
              className="group bg-white text-brand-blue px-8 py-4 rounded font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
            >
              {t('hero.cta_primary')}
              <ArrowIcon size={20} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="border border-white/30 text-white px-8 py-4 rounded font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              {t('hero.cta_secondary')}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
