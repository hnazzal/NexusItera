
import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { PRODUCTS_DATA } from '../constants';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { PageRoute } from '../types';
import { Check, ArrowRight, Box } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { WhatIfDemo } from '../components/WhatIfDemo';
import { SEO } from '../components/SEO';
import { RevealOnScroll } from '../components/RevealOnScroll';

const Products: React.FC = () => {
  const { t, language, dir } = useLanguage();
  const products = PRODUCTS_DATA[language];

  const ArrowIcon = dir === 'rtl' ? (props: any) => <ArrowRight {...props} style={{ transform: 'rotate(180deg)' }} /> : ArrowRight;

  return (
    <div className="bg-[#0F172A] min-h-screen transition-colors duration-300">
      <SEO 
        title={t('nav.products')} 
        description={t('sections.toolsFor')}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
         {/* Tech background elements */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#6D28D9]/5 rounded-full blur-[120px] z-0 pointer-events-none animate-pulse-slow"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E293B] border border-[#6D28D9]/30 text-[#6D28D9] text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(109,40,217,0.2)]">
                <Box className="w-4 h-4" />
                <span>{t('sections.saasEco')}</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight font-display transition-colors">
                {t('sections.toolsFor')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#FACC15] animate-text-shimmer bg-[length:200%_auto]">{t('sections.accelEvol')}</span><br/> {t('sections.evol')}
              </h1>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 font-light">
                {t('sections.prodSub')}
              </p>
            </RevealOnScroll>
         </div>
      </section>

      {/* AI Simulation Section */}
      <section className="mb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <RevealOnScroll>
              <WhatIfDemo />
           </RevealOnScroll>
        </div>
      </section>

      {/* Product Grid */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <RevealOnScroll key={product.id} delay={index * 100}>
                <div className="group bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-white/5 rounded-xl p-8 hover:border-[#3B82F6]/50 transition-all duration-300 relative overflow-hidden flex flex-col h-full hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transform hover:-translate-y-2 hover:scale-[1.01]">
                  
                  {/* Hover Shine Effect */}
                  <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 transition-all duration-1000 group-hover:animate-shine"></div>

                  {/* Status Badge */}
                  <div className="absolute top-6 ltr:right-6 rtl:left-6 z-10">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full border shadow-sm ${
                        product.status === 'Live' || product.status === 'متاح' ? 'bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20 shadow-[#10B981]/20' : 
                        product.status === 'Beta' || product.status === 'تجريبي' ? 'bg-[#F472B6]/10 text-[#F472B6] border-[#F472B6]/20 shadow-[#F472B6]/20' : 
                        'bg-[#1E293B] text-slate-400 border-white/10'
                    }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          product.status === 'Live' || product.status === 'متاح' ? 'bg-[#10B981] animate-pulse' : 
                          product.status === 'Beta' || product.status === 'تجريبي' ? 'bg-[#F472B6] animate-pulse' : 
                          'bg-slate-400'
                        }`}></span>
                        {product.status}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="mb-8 relative z-10">
                    <div className="w-16 h-16 rounded-lg bg-[#0F172A] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#3B82F6] group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <product.icon className={`w-8 h-8 transition-colors ${
                             index === 0 ? 'text-[#3B82F6]' : 
                             index === 1 ? 'text-[#F472B6]' : 
                             'text-[#FACC15]'
                        }`} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2 font-display transition-colors">{product.name}</h3>
                    <p className={`font-mono font-bold text-sm ${
                         index === 0 ? 'text-[#3B82F6]' : 
                         index === 1 ? 'text-[#F472B6]' : 
                         'text-[#FACC15]'
                    }`}>{product.tagline}</p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 mb-8 flex-grow font-light leading-relaxed relative z-10">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8 bg-[#020617]/50 p-6 rounded-lg border border-white/5 relative z-10">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#3B82F6] shrink-0 mt-1" />
                        <span className="text-slate-300 text-sm transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/10 relative z-10">
                    <div>
                      {product.price && (
                        <p className="text-slate-500 text-xs">{t('sections.startAt')} <span className="text-white font-bold text-base font-display ms-1 transition-colors">{product.price}</span></p>
                      )}
                    </div>
                    <Link to={PageRoute.CONTACT}>
                      <Button variant="outline" size="sm" className="text-slate-300 border-white/10 group-hover:text-white group-hover:border-[#3B82F6] flex items-center hover:bg-[#3B82F6]">
                          {t('sections.details')} <ArrowIcon className="w-4 h-4 ms-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
             <RevealOnScroll delay={200}>
              <div className="bg-[#1E293B] border border-white/10 p-12 rounded-xl relative overflow-hidden shadow-2xl group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#6D28D9]/10 rounded-full blur-[80px] group-hover:bg-[#6D28D9]/20 transition-colors duration-500"></div>
                  <div className="relative z-10">
                      <h2 className="text-3xl font-bold text-white mb-4 font-display transition-colors">{t('sections.customEngine')}</h2>
                      <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                      {t('sections.customSub')}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to={PageRoute.SERVICES}>
                          <Button variant="secondary" className="bg-slate-700 text-white hover:bg-slate-600">{t('sections.exploreServices')}</Button>
                      </Link>
                      <Link to={PageRoute.CONTACT}>
                          <Button variant="glow" className="text-[#3B82F6] border-[#3B82F6] hover:bg-[#3B82F6] hover:text-white">{t('sections.contactSales')}</Button>
                      </Link>
                      </div>
                  </div>
              </div>
             </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
