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
    <div className="bg-brand-deep min-h-screen transition-colors duration-500">
      <SEO 
        title={t('nav.products')} 
        description={t('sections.toolsFor')}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
         {/* Tech background elements */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-secondary/5 rounded-full blur-[120px] z-0 pointer-events-none animate-pulse-slow"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-surface border border-brand-border text-brand-secondary text-xs font-bold tracking-widest uppercase mb-8 shadow-sm dark:shadow-[0_0_15px_rgba(109,40,217,0.2)]">
                <Box className="w-4 h-4" />
                <span>{t('sections.saasEco')}</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold text-brand-text mb-6 leading-tight font-display transition-colors">
                {t('sections.toolsFor')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent animate-text-shimmer bg-[length:200%_auto]">{t('sections.accelEvol')}</span><br/> {t('sections.evol')}
              </h1>
              <p className="text-lg text-brand-muted max-w-2xl mx-auto mb-10 font-light">
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
                <div className="group bg-brand-surface border border-brand-border rounded-xl p-8 hover:border-brand-primary/50 transition-all duration-300 relative overflow-hidden flex flex-col h-full hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transform hover:-translate-y-2 hover:scale-[1.01]">
                  
                  {/* Hover Shine Effect */}
                  <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 transition-all duration-1000 group-hover:animate-shine"></div>

                  {/* Status Badge */}
                  <div className="absolute top-6 ltr:right-6 rtl:left-6 z-10">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full border shadow-sm ${
                        product.status === 'Live' || product.status === 'متاح' ? 'bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20 shadow-[#10B981]/20' : 
                        product.status === 'Beta' || product.status === 'تجريبي' ? 'bg-[#F472B6]/10 text-[#F472B6] border-[#F472B6]/20 shadow-[#F472B6]/20' : 
                        'bg-brand-surfaceLight text-brand-muted border-brand-border'
                    }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          product.status === 'Live' || product.status === 'متاح' ? 'bg-[#10B981] animate-pulse' : 
                          product.status === 'Beta' || product.status === 'تجريبي' ? 'bg-[#F472B6] animate-pulse' : 
                          'bg-gray-400'
                        }`}></span>
                        {product.status}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="mb-8 relative z-10">
                    <div className="w-16 h-16 rounded-lg bg-brand-deep border border-brand-border flex items-center justify-center mb-6 group-hover:border-brand-primary group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <product.icon className={`w-8 h-8 transition-colors ${
                             index === 0 ? 'text-brand-primary' : 
                             index === 1 ? 'text-brand-accent' : 
                             'text-brand-secondary'
                        }`} />
                    </div>
                    <h3 className="text-3xl font-bold text-brand-text mb-2 font-display transition-colors">{product.name}</h3>
                    <p className={`font-mono font-bold text-sm ${
                         index === 0 ? 'text-brand-primary' : 
                         index === 1 ? 'text-brand-accent' : 
                         'text-brand-secondary'
                    }`}>{product.tagline}</p>
                  </div>

                  {/* Description */}
                  <p className="text-brand-muted mb-8 flex-grow font-light leading-relaxed relative z-10">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8 bg-brand-deep/30 p-6 rounded-lg border border-brand-border relative z-10">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-brand-primary shrink-0 mt-1" />
                        <span className="text-brand-text text-sm transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-6 border-t border-brand-border relative z-10">
                    <div>
                      {product.price && (
                        <p className="text-brand-muted text-xs">{t('sections.startAt')} <span className="text-brand-text font-bold text-base font-display ms-1 transition-colors">{product.price}</span></p>
                      )}
                    </div>
                    <Link to={PageRoute.CONTACT}>
                      <Button variant="outline" size="sm" className="text-brand-muted border-brand-border group-hover:text-white group-hover:border-brand-primary flex items-center hover:bg-brand-primary">
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
              <div className="bg-brand-surface border border-brand-border p-12 rounded-xl relative overflow-hidden shadow-2xl group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/10 rounded-full blur-[80px] group-hover:bg-brand-secondary/20 transition-colors duration-500"></div>
                  <div className="relative z-10">
                      <h2 className="text-3xl font-bold text-brand-text mb-4 font-display transition-colors">{t('sections.customEngine')}</h2>
                      <p className="text-brand-muted mb-8 max-w-2xl mx-auto">
                      {t('sections.customSub')}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to={PageRoute.SERVICES}>
                          <Button variant="secondary">{t('sections.exploreServices')}</Button>
                      </Link>
                      <Link to={PageRoute.CONTACT}>
                          <Button variant="glow" className="text-brand-primary border-brand-primary hover:bg-brand-primary hover:text-white">{t('sections.contactSales')}</Button>
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