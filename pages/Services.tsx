import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { SERVICES_DATA } from '../constants';
import { Check, Zap, ArrowRight, Activity, Layers, Code } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { PageRoute } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { RevealOnScroll } from '../components/RevealOnScroll';

const Services: React.FC = () => {
  const { t, language, dir } = useLanguage();
  const services = SERVICES_DATA[language];

  const ArrowIcon = dir === 'rtl' ? (props: any) => <ArrowRight {...props} style={{ transform: 'rotate(180deg)' }} /> : ArrowRight;

  return (
    <div className="bg-brand-deep relative transition-colors duration-500 min-h-screen overflow-hidden py-24">
      <SEO 
        title={t('nav.services')} 
        description={t('sections.intCap')}
      />

      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(var(--secondary-alpha)_1px,transparent_1px),linear-gradient(90deg,var(--secondary-alpha)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20"></div>
      
      {/* Animated Floating Orbs */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] animate-float pointer-events-none"></div>
      <div className="absolute bottom-40 right-10 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[140px] animate-float-delayed pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-surface border border-brand-border text-brand-secondary text-xs font-bold tracking-widest uppercase mb-6 shadow-sm dark:shadow-[0_0_20px_rgba(109,40,217,0.3)]">
                <Layers className="w-4 h-4" />
                <span>{t('sections.ourExpertise')}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-brand-text mb-6 font-display transition-colors drop-shadow-sm">
                {t('sections.intCap')}
            </h1>
            <p className="text-xl text-brand-muted max-w-3xl mx-auto font-light leading-relaxed">
                {t('hero.subtext')}
            </p>
          </div>
        </RevealOnScroll>
        
        {/* Vibrant Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <RevealOnScroll key={service.id} delay={index * 100}>
              <div className="group relative h-full">
                {/* Glow Effect behind card - Dark Mode Only */}
                <div className="hidden dark:block absolute inset-0 bg-gradient-to-r from-brand-secondary/20 to-brand-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative h-full bg-brand-surface border border-brand-border rounded-3xl p-8 transition-all duration-300 transform group-hover:scale-[1.03] group-hover:border-brand-primary/50 group-hover:shadow-xl dark:group-hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden">
                    
                    {/* Top Shine */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Icon Area */}
                    <div className="w-20 h-20 rounded-2xl bg-brand-deep border border-brand-border flex items-center justify-center mb-8 group-hover:border-brand-primary group-hover:shadow-md dark:group-hover:shadow-[0_0_20px_rgba(0,163,204,0.3)] transition-all duration-300 relative z-10">
                      <service.icon className="w-10 h-10 text-brand-primary transition-colors duration-300" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-brand-text mb-4 font-display transition-colors group-hover:text-brand-primary">
                      {service.title}
                    </h3>
                    
                    <p className="text-brand-muted mb-8 text-base font-light leading-relaxed flex-grow group-hover:text-brand-text/80 transition-colors">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="mb-8 space-y-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-brand-muted group-hover:text-brand-text transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-primary group-hover:bg-brand-secondary transition-colors"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <div className="mt-auto">
                      <Link to={PageRoute.CONTACT} className="block">
                        <Button 
                            variant="glow" 
                            className="w-full justify-between group/btn bg-brand-deep/50 hover:bg-brand-primary hover:text-white hover:border-brand-primary border-brand-border text-brand-text"
                        >
                          {t('sections.requestDemo')}
                          <ArrowIcon className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <RevealOnScroll delay={200}>
          <div className="mt-32 relative rounded-3xl overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-primary z-0 opacity-20"></div>
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
             
             <div className="relative z-10 p-12 md:p-20 text-center border border-brand-border rounded-3xl backdrop-blur-md bg-brand-surface/30">
                <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-6 font-display">
                  {t('sections.exploreSystems')}
                </h2>
                <p className="text-lg text-brand-muted mb-10 max-w-2xl mx-auto">
                  {t('sections.systemsSub')}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link to={PageRoute.PRODUCTS}>
                    <Button variant="primary" size="lg" className="px-10 py-4 shadow-xl">
                      {t('nav.products')} <Activity className="w-4 h-4 ms-2" />
                    </Button>
                  </Link>
                  <Link to={PageRoute.CONTACT}>
                    <Button variant="outline" size="lg" className="px-10 py-4 text-brand-text border-brand-border hover:bg-brand-surfaceLight">
                      {t('sections.reqAudit')}
                    </Button>
                  </Link>
                </div>
             </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default Services;