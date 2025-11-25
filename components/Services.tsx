import React from 'react';
import { SERVICES_LIST } from '../constants';
import { ArrowUpRight, ArrowUpLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Services: React.FC = () => {
  const { t, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowUpLeft : ArrowUpRight;

  return (
    <section id="services" className="py-20 bg-slate-50" dir={dir}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-brand-accent font-bold uppercase tracking-wider text-sm mb-3">
            {t('services.section_label')}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('services.title_main')}
          </h3>
          <h3 className="text-2xl font-bold text-slate-900 mb-4 font-arabic">
            {t('services.title_sub')}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => {
            const Icon = service.icon;
            return (
              <a 
                key={service.id}
                href={`#${service.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-brand-blue/0 transition-colors z-10"></div>
                  <img 
                    src={`${import.meta.env.BASE_URL}${service.image}`} 
                    alt={t(service.titleKey)} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow text-start">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-slate-50 rounded-lg text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <Icon size={24} />
                    </div>
                    <ArrowIcon className="text-slate-300 group-hover:text-brand-accent transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{t(service.titleKey)}</h4>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-3">{t(service.descKey)}</p>
                  <span className="text-brand-blue font-semibold text-sm mt-auto flex items-center gap-1 group-hover:gap-2 transition-all">
                    {t('services.read_more')} <ArrowIcon size={16} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
