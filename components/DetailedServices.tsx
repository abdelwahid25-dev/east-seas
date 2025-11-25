import React from 'react';
import { SERVICES_LIST } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const DetailedServices: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <div id="logistics" className="bg-white" dir={dir}>
      {SERVICES_LIST.map((service, index) => {
        const isEven = index % 2 === 0;
        // In LTR: Even (Image Left, Text Right), Odd (Text Left, Image Right)
        // In RTL: Even (Image Right, Text Left), Odd (Text Right, Image Left) - handled via flexDirection logic or specific classes.
        // Tailwind's `md:flex-row-reverse` is based on source order.
        // We want source order: Image then Text.
        // LTR Even: Row (Img, Txt). Odd: Row-Reverse (Txt, Img).
        // RTL Even: Row (Img, Txt) -> Img is Right, Txt is Left visually? No, standard Flex row in RTL puts first item on right.
        // So standard logic works for RTL automatically if we trust flow.
        
        return (
          <section 
            key={service.id} 
            id={service.id} 
            className={`py-20 md:py-32 ${isEven ? 'bg-white' : 'bg-slate-50'}`}
          >
            <div className="container mx-auto px-4 md:px-8">
              <div className={`flex flex-col md:flex-row gap-12 md:gap-20 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={service.image} 
                      alt={t(service.titleKey)} 
                      className="w-full h-full object-cover aspect-[4/3]"
                    />
                    <div className="absolute bottom-0 left-0 right-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8">
                      {/* Usually arabic title was here, now unified title */}
                      <h3 className="text-white text-2xl font-bold font-arabic text-center">
                        {t(service.titleKey)}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 text-start">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-brand-light/10 text-brand-blue rounded-full">
                      <service.icon size={28} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">{t(service.titleKey)}</h2>
                  </div>
                  
                  <p className="text-slate-600 text-lg leading-relaxed mb-8 rtl:border-r-4 rtl:border-l-0 ltr:border-l-4 border-brand-accent rtl:pr-6 ltr:pl-6">
                    {t(service.descKey)}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(t(service.featuresKey) as string[]).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="text-brand-accent mt-1 flex-shrink-0" size={18} />
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};
