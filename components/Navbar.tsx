import React, { useState, useEffect } from 'react';
import { Menu, X, Anchor, Globe, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { language, setLanguage, t, dir } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ['home', 'about', 'services', 'logistics', 'contact'];
      const scrollPosition = window.scrollY + 100;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if user is at the bottom of the page
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        setActiveSection('contact');
        return;
      }

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    
    handleScroll(); // Call once on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLangChange = (lang: Language) => {
    setLanguage(lang);
    setLangMenuOpen(false);
    setIsOpen(false);
  };

  const getLangLabel = (code: string) => {
    if (code === 'en') return 'English';
    if (code === 'ar') return 'العربية';
    if (code === 'ur') return 'اردو';
    return code.toUpperCase();
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      dir={dir}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src={`${import.meta.env.BASE_URL}images/logo.png`} 
              alt="East Seas Logo" 
              className="h-8 w-auto"
            />
            <div className={`font-bold text-2xl tracking-tight ${isScrolled ? 'text-brand-blue' : 'text-white'}`}>
              {t('company_name')}
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              
              return (
                <a 
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold uppercase tracking-wide transition-all relative ${
                    isActive
                      ? isScrolled 
                        ? 'text-brand-blue' 
                        : 'text-white'
                      : isScrolled 
                        ? 'text-slate-600 hover:text-brand-blue' 
                        : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {t(item.labelKey)}
                  {isActive && (
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 ${
                      isScrolled ? 'bg-brand-blue' : 'bg-white'
                    }`}></span>
                  )}
                </a>
              );
            })}
            
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-wide transition-colors px-3 py-1 rounded border ${
                    isScrolled 
                    ? 'border-slate-300 text-slate-600 hover:border-brand-blue hover:text-brand-blue' 
                    : 'border-white/30 text-white hover:bg-white/10'
                }`}
              >
                <Globe size={16} />
                <span>{getLangLabel(language)}</span>
                <ChevronDown size={14} />
              </button>

              {langMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 border border-slate-100 overflow-hidden rtl:right-auto rtl:left-0 text-start">
                  <button onClick={() => handleLangChange('en')} className="w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-blue text-left rtl:text-right">English</button>
                  <button onClick={() => handleLangChange('ar')} className="w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-blue text-right font-arabic">العربية</button>
                  <button onClick={() => handleLangChange('ur')} className="w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-blue text-right font-urdu">اردو</button>
                </div>
              )}
            </div>

            <a 
              href="#contact" 
              className="bg-brand-accent hover:bg-sky-400 text-white px-5 py-2 rounded-full font-medium transition-colors"
            >
              {t('nav.quote')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             {/* Mobile Lang Toggle */}
             <button 
                onClick={() => setLanguage(language === 'en' ? 'ar' : (language === 'ar' ? 'ur' : 'en'))}
                className={`flex items-center gap-1 text-xs font-bold uppercase p-1 rounded ${isScrolled ? 'text-brand-blue border border-brand-blue' : 'text-white border border-white/50'}`}
              >
                {language.toUpperCase()}
              </button>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={isScrolled ? 'text-slate-800' : 'text-white'}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col py-4">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-6 py-3 font-medium border-l-4 transition-all ${
                    isActive
                      ? 'border-brand-blue text-brand-blue bg-slate-50'
                      : 'border-transparent text-slate-700 hover:bg-slate-50 hover:text-brand-blue'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.labelKey)}
                </a>
              );
            })}
            <div className="border-t border-slate-100 mt-2 pt-2">
              <p className="px-6 py-2 text-xs text-slate-400 uppercase font-semibold">Switch Language</p>
              <button onClick={() => handleLangChange('en')} className="w-full px-6 py-2 text-start text-sm text-slate-700 hover:bg-slate-50">English</button>
              <button onClick={() => handleLangChange('ar')} className="w-full px-6 py-2 text-start text-sm text-slate-700 hover:bg-slate-50 font-arabic">العربية</button>
              <button onClick={() => handleLangChange('ur')} className="w-full px-6 py-2 text-start text-sm text-slate-700 hover:bg-slate-50 font-urdu">اردو</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
