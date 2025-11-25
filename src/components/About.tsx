import React from 'react';
import { CORE_VALUES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

export const About: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-32 bg-white" dir={dir}>
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Top Section: Corporate Profile */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 md:order-1">
            <h2 className="text-brand-accent font-bold uppercase tracking-wider text-sm mb-3">
              {t('about.section_label')}
            </h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6 font-arabic text-start">
              {t('about.title_ar')}
            </h3>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              {t('about.title_en')}
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              {t('about.desc_1')}
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              {t('about.desc_2')}
            </p>
            <div className="flex gap-4">
              <div className="bg-slate-100 p-4 rounded-lg text-center min-w-[100px]">
                <span className="block text-3xl font-bold text-brand-blue">10+</span>
                <span className="text-xs text-slate-500 uppercase font-semibold">{t('about.stats_exp')}</span>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg text-center min-w-[100px]">
                <span className="block text-3xl font-bold text-brand-blue">15K+</span>
                <span className="text-xs text-slate-500 uppercase font-semibold">{t('about.stats_network')}</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className={`absolute -inset-4 bg-brand-accent/10 rounded-xl transform ${dir === 'rtl' ? '-rotate-3' : 'rotate-3'}`}></div>
            {/* Image: Professional Team Meeting */}
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1784&auto=format&fit=crop" 
              alt="Professional Logistics Team" 
              className="relative rounded-xl shadow-2xl w-full object-cover aspect-square"
            />
          </div>
        </div>

        {/* Bottom Section: Values/Vision/Mission with PDF Image (Hands/Plant) */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Values Cards */}
          <div className="lg:col-span-7 grid md:grid-cols-1 gap-6">
             {CORE_VALUES.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-300 group flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-14 h-14 shrink-0 bg-white rounded-full shadow-sm flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <Icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{t(value.titleKey)}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{t(value.descKey)}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Side Image: Growth/Care (Matches PDF Page 4) */}
          <div className="lg:col-span-5 h-full min-h-[400px]">
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1888&auto=format&fit=crop" 
                alt="Growth and Integrity" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-medium italic opacity-90">"{t('about.values.values_desc')}"</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};