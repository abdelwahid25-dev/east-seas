import React from 'react';
import { CORE_VALUES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

export const About: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-32 bg-white" dir={dir}>
      <div className="container mx-auto px-4 md:px-8">
        
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
            <img 
              src={`${import.meta.env.BASE_URL}images/about.jpg`} 
              alt="Team Meeting" 
              className="relative rounded-xl shadow-2xl w-full object-cover aspect-square"
            />
          </div>
        </div>

        {/* Vision Mission Values Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {CORE_VALUES.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow group">
                <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center mb-6 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{t(value.titleKey)}</h4>
                <p className="text-slate-600">{t(value.descKey)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
