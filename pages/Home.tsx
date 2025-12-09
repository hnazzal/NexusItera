import React from 'react';
import { ArrowRight, ChevronRight, Quote, Bot, Sparkles, BrainCircuit, Rocket, CheckCircle2, Send, Mail, MapPin, Database, Zap, Globe, Layers, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SectionTitle } from '../components/SectionTitle';
import { SERVICES_DATA, PRODUCTS_DATA, TESTIMONIALS_DATA, AI_CAPABILITIES } from '../constants';
import { PageRoute } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { SEO } from '../components/SEO';
import { LazyImage } from '../components/LazyImage';

const Home: React.FC = () => {
  const { t, language, dir } = useLanguage();
  const services = SERVICES_DATA[language];
  const products = PRODUCTS_DATA[language];
  const testimonials = TESTIMONIALS_DATA[language];
  const aiCaps = AI_CAPABILITIES[language];

  const ArrowIcon = dir === 'rtl' ? (props: any) => <ArrowRight {...props} style={{ transform: 'rotate(180deg)' }} /> : ArrowRight;

  return (
    <div className="flex flex-col overflow-hidden bg-brand-deep transition-colors duration-500">
      <SEO title="Home" description={t('hero.subtext')} />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Dynamic 3D Grid Floor */}
        <div className="absolute inset-0 perspective-[500px]">
           <div className="absolute bottom-[-20%] left-[-50%] w-[200%] h-[100%] bg-[linear-gradient(to_right,rgba(0,163,204,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,163,204,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(0,163,204,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,163,204,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [transform:rotateX(60deg)] animate-grid-move opacity-50 dark:opacity-30"></div>
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[150px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-[150px] animate-pulse-slow animation-delay-2000"></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-brand-primary/40 rounded-full blur-[1px] animate-float"
              style={{
                  width: Math.random() * 4 + 2 + 'px',
                  height: Math.random() * 4 + 2 + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animationDuration: Math.random() * 10 + 5 + 's',
                  animationDelay: Math.random() * 5 + 's',
                  opacity: Math.random() * 0.5 + 0.2
              }}
            ></div>
        ))}

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center mt-[-50px]">
          <RevealOnScroll>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-brand-text mb-8 leading-[1.1] font-display tracking-tight drop-shadow-sm dark:drop-shadow-2xl">
              {t('hero.headline')}
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-muted max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              {t('hero.subtext')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to={PageRoute.PRODUCTS}>
                <Button variant="neon" size="lg" className="px-12 py-5 text-lg rounded-full">
                   {t('hero.initialize')}
                </Button>
              </Link>
              <Link to={PageRoute.CONTACT}>
                <Button variant="outline" size="lg" className="px-12 py-5 text-lg rounded-full hover:bg-brand-surface border-brand-border">
                   {t('hero.explore')}
                </Button>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION / WHY US */}
      <section className="py-20 bg-brand-surface border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4">
           <SectionTitle title={t('whyUs.title')} subtitle={t('whyUs.subtitle')} />
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((num) => (
                  <RevealOnScroll key={num} delay={num * 100}>
                    <div className="p-6 rounded-2xl bg-brand-deep border border-brand-border hover:border-brand-primary/50 transition-all text-center h-full">
                        <div className="w-12 h-12 mx-auto bg-brand-surface rounded-full flex items-center justify-center mb-4 text-brand-primary font-bold border border-brand-border">
                            {num}
                        </div>
                        <h3 className="text-lg font-bold text-brand-text mb-2 font-display">
                            {t(`whyUs.p${num}_title`)}
                        </h3>
                        <p className="text-sm text-brand-muted leading-relaxed">
                            {t(`whyUs.p${num}_desc`)}
                        </p>
                    </div>
                  </RevealOnScroll>
              ))}
           </div>
        </div>
      </section>

      {/* 3. AI CAPABILITIES */}
      <section className="py-32 bg-brand-deep relative overflow-hidden transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <SectionTitle title={t('sections.coreCap')} subtitle={t('sections.ourExpertise')} />
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <RevealOnScroll>
                 <div className="space-y-12">
                     <p className="text-xl text-brand-text leading-relaxed font-light">
                        {t('sections.aboutText')}
                     </p>
                     
                     <div className="space-y-6">
                        {aiCaps.map((cap, idx) => (
                           <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-surface transition-colors border border-transparent hover:border-brand-primary/20 group">
                              <div className="p-3 rounded-lg bg-brand-surface border border-brand-border group-hover:border-brand-primary/50 group-hover:bg-brand-primary/10 transition-all">
                                 <cap.icon className="w-6 h-6 text-brand-primary" />
                              </div>
                              <div>
                                 <h4 className="text-brand-text font-bold text-lg mb-1">{cap.title}</h4>
                                 <p className="text-sm text-brand-muted">{cap.desc}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                 </div>
              </RevealOnScroll>

              <RevealOnScroll delay={200}>
                 {/* Visual Representation */}
                 <div className="relative h-[400px] w-full bg-brand-surface/50 rounded-3xl border border-brand-border backdrop-blur-sm p-8 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,163,204,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,163,204,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                    <div className="relative z-10 w-full h-full flex flex-col justify-center items-center gap-8">
                        <div className="flex gap-12">
                           <div className="flex flex-col items-center gap-2 animate-float">
                               <div className="w-16 h-16 rounded-2xl bg-brand-deep border border-brand-border flex items-center justify-center">
                                  <Database className="w-8 h-8 text-brand-primary" />
                               </div>
                               <span className="text-xs font-mono text-brand-muted">RAW DATA</span>
                           </div>
                           <div className="flex flex-col items-center gap-2 animate-float" style={{animationDelay: '1s'}}>
                               <div className="w-16 h-16 rounded-2xl bg-brand-deep border border-brand-border flex items-center justify-center">
                                  <Globe className="w-8 h-8 text-brand-text" />
                               </div>
                               <span className="text-xs font-mono text-brand-muted">WEB</span>
                           </div>
                        </div>

                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary p-[2px] animate-pulse-slow shadow-lg dark:shadow-[0_0_50px_rgba(161,91,255,0.3)] z-10">
                            <div className="w-full h-full rounded-full bg-brand-deep flex items-center justify-center">
                                <BrainCircuit className="w-10 h-10 text-brand-text" />
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <div className="w-20 h-12 rounded-xl bg-brand-surface border border-brand-secondary/50 flex items-center justify-center shadow-lg">
                                <Zap className="w-6 h-6 text-brand-secondary fill-current" />
                            </div>
                            <span className="text-sm font-bold text-brand-text">INTELLIGENT ACTION</span>
                        </div>
                    </div>
                 </div>
              </RevealOnScroll>
           </div>
        </div>
      </section>

      {/* 4. PRODUCTS */}
      <section className="py-32 bg-brand-deep relative border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <RevealOnScroll>
              <SectionTitle title={t('sections.propProducts')} subtitle={t('sections.accelEvol') + ' ' + t('sections.evol')} />
           </RevealOnScroll>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {products.map((product, idx) => (
                 <RevealOnScroll key={product.id} delay={idx * 150}>
                    <div className="relative group rounded-3xl bg-brand-surface border border-brand-border hover:border-brand-secondary/50 transition-all duration-500 overflow-hidden hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(161,91,255,0.1)] h-full">
                       <div className="p-8 relative z-10 flex flex-col h-full">
                          <div className="flex justify-between items-start mb-6">
                             <div className="p-3 bg-brand-deep border border-brand-border rounded-xl group-hover:scale-110 transition-transform duration-500">
                                <product.icon className={`w-6 h-6 ${idx === 0 ? 'text-brand-primary' : 'text-brand-secondary'}`} />
                             </div>
                             <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted border border-brand-border px-2 py-1 rounded-md">{product.price}</span>
                          </div>

                          <h3 className="text-2xl font-bold text-brand-text mb-1 font-display">{product.name}</h3>
                          <p className="text-xs font-bold text-brand-primary uppercase tracking-wide mb-4">{product.tagline}</p>
                          
                          <p className="text-brand-muted mb-6 leading-relaxed text-sm flex-grow">
                             {product.description}
                          </p>

                          <div className="border-t border-brand-border pt-4 flex flex-wrap gap-2">
                             {product.features.map((f, i) => (
                                 <span key={i} className="text-[10px] bg-brand-deep px-2 py-1 rounded text-brand-muted border border-brand-border">{f}</span>
                             ))}
                          </div>
                       </div>
                    </div>
                 </RevealOnScroll>
              ))}
           </div>
        </div>
      </section>

      {/* 5. SERVICES */}
      <section className="py-24 bg-brand-surface">
         <div className="max-w-7xl mx-auto px-4">
            <SectionTitle title={t('sections.intCap')} subtitle={t('sections.coreCap')} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service, idx) => (
                    <RevealOnScroll key={service.id} delay={idx * 100}>
                        <div className="p-8 bg-brand-deep rounded-2xl border border-brand-border hover:border-brand-primary/50 transition-all group h-full">
                            <service.icon className="w-10 h-10 text-brand-muted group-hover:text-brand-primary mb-6 transition-colors" />
                            <h3 className="text-xl font-bold text-brand-text mb-3 font-display">{service.title}</h3>
                            <p className="text-brand-muted text-sm leading-relaxed">{service.description}</p>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
         </div>
      </section>

      {/* 6. CONTACT CTA */}
      <section className="py-32 relative overflow-hidden bg-brand-deep">
         <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <RevealOnScroll>
               <h2 className="text-4xl md:text-6xl font-bold text-brand-text mb-8 font-display tracking-tight">
                  {t('sections.contactSub')}
               </h2>
               <p className="text-xl text-brand-muted mb-12 font-light max-w-2xl mx-auto">
                  {t('sections.readyToStart')}
               </p>
               <Link to={PageRoute.CONTACT}>
                  <Button variant="neon" size="lg" className="px-16 py-6 text-xl rounded-full dark:shadow-[0_0_40px_rgba(0,163,204,0.4)]">
                     {t('sections.contactTitle')}
                  </Button>
               </Link>
            </RevealOnScroll>
         </div>
      </section>
    </div>
  );
};

export default Home;