import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <footer id="contact" className="bg-brand-dark text-white pt-20 pb-10" dir={dir}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12 text-start">
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">East Seas</h3>
            <h3 className="text-lg font-arabic mb-6 text-slate-400">{t('hero.arabic_name')}</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              {t('footer.desc')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-bold mb-6 text-white">{t('footer.links_title')}</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-400 hover:text-brand-accent transition-colors">{t('nav.home')}</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-brand-accent transition-colors">{t('nav.about')}</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-brand-accent transition-colors">{t('nav.services')}</a></li>
              <li><a href="#logistics" className="text-slate-400 hover:text-brand-accent transition-colors">{t('nav.logistics')}</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-white">{t('footer.contact_title')}</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <MapPin className="text-brand-accent flex-shrink-0" />
                <div>
                  <h5 className="font-semibold mb-1">{t('footer.address_label')}</h5>
                  <p className="text-slate-400 text-sm">{t('footer.address_val')}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Phone className="text-brand-accent flex-shrink-0" />
                <div>
                  <h5 className="font-semibold mb-1">{t('footer.phone_label')}</h5>
                  <p className="text-slate-400 text-sm">+966 13 800 0000<br/>+966 50 000 0000</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-brand-accent flex-shrink-0" />
                <div>
                  <h5 className="font-semibold mb-1">{t('footer.email_label')}</h5>
                  <p className="text-slate-400 text-sm">info@eastseas.com<br/>support@eastseas.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};
