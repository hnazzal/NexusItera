import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { PRODUCTS_DATA } from '../constants';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { PageRoute } from '../types';
import { Check, ArrowRight, Zap, Box } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Products: React.FC = () => {
  const { t, language, dir } = useLanguage();
  const products = PRODUCTS_DATA[language];

  const ArrowIcon = dir === 'rtl' ? (props: any) => <ArrowRight {...props} style={{ transform: 'rotate(180deg)' }} /> : ArrowRight;

  return (
    <div className="bg-brand-deep min-h-screen transition-colors duration-300">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
         {/* Tech background elements */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-primary/5 rounded-full blur-[120px] z-0 pointer-events-none"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-surface border border-brand-primary/30 text-brand-primary text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <Box className="w-4 h-4" />
              <span>{t('sections.saasEco')}</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-brand-text mb-6 leading-tight font-display transition-colors">
              {t('sections.toolsFor')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">{t('sections.accelEvol')}</span><br/> {t('sections.evol')}
            </h1>
            <p className="text-lg text-brand-muted max-w-2xl mx-auto mb-10 font-light">
              {t('sections.prodSub')}
            </p>
         </div>
      </section>

      {/* Product Grid */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group bg-brand-surface border border-brand-surfaceLight rounded-xl p-8 hover:border-brand-primary transition-all duration-300 relative overflow-hidden flex flex-col h-full hover:shadow-[0_0_30px_rgba(10,26,47,0.2)] dark:hover:shadow-[0_0_30px_rgba(10,26,47,0.5)]">
                
                {/* Status Badge */}
                <div className="absolute top-6 ltr:right-6 rtl:left-6">
                   <span className={`inline-block px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-sm border ${
                      product.status === 'Live' || product.status === 'متاح' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 
                      product.status === 'Beta' || product.status === 'تجريبي' ? 'bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20' : 
                      'bg-brand-deep text-brand-muted border-brand-surfaceLight'
                   }`}>
                      {product.status}
                   </span>
                </div>

                {/* Icon & Title */}
                <div className="mb-8">
                   <div className="w-16 h-16 rounded-lg bg-brand-deep border border-brand-surfaceLight flex items-center justify-center mb-6 group-hover:border-brand-primary transition-colors duration-300">
                      <product.icon className="w-8 h-8 text-brand-primary" />
                   </div>
                   <h3 className="text-3xl font-bold text-brand-text mb-2 font-display transition-colors">{product.name}</h3>
                   {/* Updated Tagline Color */}
                   <p className="text-brand-secondary dark:text-brand-primary font-mono font-bold text-sm">{product.tagline}</p>
                </div>

                {/* Description */}
                <p className="text-brand-muted mb-8 flex-grow font-light leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8 bg-brand-deep/50 p-6 rounded-lg border border-brand-surfaceLight/50">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                       <Check className="w-4 h-4 text-brand-secondary shrink-0 mt-1" />
                       <span className="text-brand-text text-sm transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-6 border-t border-brand-surfaceLight">
                   <div>
                     {product.price && (
                       <p className="text-brand-muted text-xs">{t('sections.startAt')} <span className="text-brand-text font-bold text-base font-display ms-1 transition-colors">{product.price}</span></p>
                     )}
                   </div>
                   <Link to={PageRoute.CONTACT}>
                     <Button variant="outline" size="sm" className="group-hover:text-brand-primary group-hover:border-brand-primary flex items-center">
                        {t('sections.details')} <ArrowIcon className="w-4 h-4 ms-2" />
                     </Button>
                   </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
             <div className="bg-brand-surface border border-brand-surfaceLight p-12 rounded-xl relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-[80px]"></div>
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
                        <Button variant="glow">{t('sections.contactSales')}</Button>
                    </Link>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;