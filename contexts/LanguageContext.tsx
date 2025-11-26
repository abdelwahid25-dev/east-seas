import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Language, Direction } from '../types';
import { translations } from '../translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: Direction;
  t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'ar';
  });
  const [dir, setDir] = useState<Direction>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'en' ? 'ltr' : 'rtl');
  });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setDir(language === 'en' ? 'ltr' : 'rtl');
    document.body.dir = language === 'en' ? 'ltr' : 'rtl';
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
    setIsReady(true);
  }, [language]);

  if (!isReady) {
    return null;
  }

  const t = (path: string) => {
    const keys = path.split('.');
    let current: any = translations[language];
    
    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation missing for key: ${path} in language: ${language}`);
        return path;
      }
      current = current[key];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
