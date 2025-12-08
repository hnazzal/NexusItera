
import React from 'react';
import { ArrowRight, ChevronRight, Quote, Globe, Cpu, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SectionTitle } from '../components/SectionTitle';
import { SERVICES_DATA, PRODUCTS_DATA, TESTIMONIALS_DATA } from '../constants';
import { PageRoute } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from '../components/Logo';
import { SEO } from '../components/SEO';
import { RevealOnScroll } from '../components/RevealOnScroll';

const Home: React.FC = () => {
  const { t, language, dir } = useLanguage();
  const services = SERVICES_DATA[language];
  const products = PRODUCTS_DATA[language];
  const testimonials = TESTIMONIALS_DATA[language];

  const ArrowIcon = dir === 'rtl' ? (props: any) => <ArrowRight {...props} style={{ transform: 'rotate(180deg)' }} /> : ArrowRight;
  const ChevronIcon = dir === 'rtl' ? (props: any) => <ChevronRight {...props} style={{ transform: 'rotate(180deg)' }} /> : ChevronRight;

  return (
    <div className="flex flex-col">
      <SEO 
        title={t('nav.home')}
        description={t('hero.subtext')}
      />

      {/* Hero Section with Requested Dark-to-Purple Gradient */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-[linear-gradient(135deg,#0F172A,#6D28D9)] text-white">
        {/* Abstract Shapes/Background Pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          {/* Floating shapes - Enhanced */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#3B82F6]/20 rounded-full blur-[80px] animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F472B6]/20 rounded-full blur-[100px] animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up space-y-8">
            {/* Logo Mark */}
            <div className="flex justify-center mb-8">
               <div className="w-24 h-24 lg:w-32 lg:h-32 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                    <Logo className="w-full h-full text-white" withText={false} />
               </div>
            </div>

            {/* System Online Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3B82F6]"></span>
                </span>
                <span className="text-white text-xs font-bold tracking-[0.2em] uppercase font-mono">{t('hero.systemOnline')}</span>
            </div>
            
            {/* Main Headline - Large, White, Futuristic */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight font-display drop-shadow-2xl">
              Innovative Software <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#FACC15] animate-text-shimmer bg-[length:200%_auto]">Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed font-light">
              {t('hero.subtext')}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link to={PageRoute.CONTACT}>
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-full sm:w-auto px-10 py-5 text-lg shadow-[0_0_30px_rgba(59,130,246,0.4)]"
                >
                   {t('hero.initialize')} <ArrowIcon className="w-5 h-5 ms-2" />
                </Button>
              </Link>
              <Link to={PageRoute.PRODUCTS}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto px-10 py-5 text-lg border-white/30 text-white hover:bg-white/10 hover:border-white hover:text-white"
                >
                  {t('hero.explore')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
           <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-current rounded-full"></div>
           </div>
        </div>
      </section>

      {/* Main Solutions Showcase */}
      <section className="py-32 bg-[#0F172A] relative z-10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-20">
                <span className="text-[#3B82F6] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">{t('sections.coreCap')}</span>
                <h2 className="text-4xl md:text-6xl font-bold text-white font-display">{t('sections.propProducts')}</h2>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {products.slice(0, 3).map((product, index) => (
                  <RevealOnScroll key={product.id} delay={index * 150}>
                    <div className="group relative h-full">
                      {/* Gradient Card Background */}
                      <div className="relative h-full bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-white/5 p-8 rounded-3xl hover:border-[#3B82F6]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-2 hover:scale-[1.02] flex flex-col">
                        
                        {/* Larger Icon with Contrasting Colors */}
                        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                            index === 0 ? 'bg-[#3B82F6]/10 text-[#3B82F6]' : 
                            index === 1 ? 'bg-[#F472B6]/10 text-[#F472B6]' : 
                            'bg-[#FACC15]/10 text-[#FACC15]'
                        }`}>
                          <product.icon className="w-10 h-10" />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2 font-display">{product.name}</h3>
                        <p className={`text-sm font-bold mb-6 font-mono ${
                            index === 0 ? 'text-[#3B82F6]' : 
                            index === 1 ? 'text-[#F472B6]' : 
                            'text-[#FACC15]'
                        }`}>{product.tagline}</p>
                        
                        <p className="text-slate-400 mb-8 leading-relaxed flex-grow">
                          {product.description.substring(0, 120)}...
                        </p>

                        <div className="mt-auto">
                           <Link to={PageRoute.PRODUCTS} className="inline-flex items-center text-white font-bold hover:text-[#3B82F6] transition-colors group/link">
                              {t('sections.viewSpecs')} 
                              <ArrowIcon className="w-4 h-4 ms-2 transition-transform group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1" />
                           </Link>
                        </div>
                      </div>
                    </div>
                  </RevealOnScroll>
               ))}
            </div>
         </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#020617] relative overflow-hidden">
        {/* Soft Background Blob */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#6D28D9]/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
               <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#6D28D9] rounded-3xl blur-2xl opacity-20 animate-pulse-slow"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                    alt="Future Tech" 
                    className="relative rounded-3xl shadow-2xl transition-all duration-700 hover:scale-[1.01] border border-white/10"
                  />
                  
                  {/* Floating Stats Card */}
                  <div className="absolute -bottom-10 -right-10 bg-[#1E293B] p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float-delayed hidden md:block border border-white/10">
                     <div className="flex items-center gap-4">
                        <div className="p-3 bg-[#3B82F6]/10 rounded-xl">
                           <Cpu className="w-8 h-8 text-[#3B82F6]" />
                        </div>
                        <div>
                           <div className="text-2xl font-bold text-white font-display">99.9%</div>
                           <div className="text-xs text-slate-400 uppercase tracking-wider">{t('hero.efficiency')}</div>
                        </div>
                     </div>
                  </div>
               </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-display leading-tight">
                 {t('sections.nexusAdv')}
              </h2>
              <div className="space-y-6">
                 {/* Feature 1 */}
                 <div className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[#FACC15]/10 flex items-center justify-center shrink-0 text-[#FACC15]">
                       <Zap className="w-6 h-6" />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-white mb-2">{t('sections.highVelocity')}</h3>
                       <p className="text-slate-400">{t('whyUs.automation')}</p>
                    </div>
                 </div>
                 {/* Feature 2 */}
                 <div className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[#6D28D9]/10 flex items-center justify-center shrink-0 text-[#6D28D9]">
                       <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-white mb-2">{t('sections.intCap')}</h3>
                       <p className="text-slate-400">{t('whyUs.aiReliance')}</p>
                    </div>
                 </div>
                 {/* Feature 3 */}
                 <div className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[#3B82F6]/10 flex items-center justify-center shrink-0 text-[#3B82F6]">
                       <Globe className="w-6 h-6" />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-white mb-2">{t('sections.saasEco')}</h3>
                       <p className="text-slate-400">{t('whyUs.scalability')}</p>
                    </div>
                 </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0F172A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
             <SectionTitle title={t('sections.testimonials')} subtitle={t('sections.trust')} />
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <RevealOnScroll key={testimonial.id} delay={index * 150}>
                <div className="bg-[#1E293B] p-8 rounded-2xl border border-white/5 shadow-lg hover:shadow-xl relative h-full transition-all duration-300 hover:-translate-y-1 group">
                  <div className="absolute top-0 ltr:left-0 rtl:right-0 w-full h-1 bg-gradient-to-r from-[#3B82F6] to-[#6D28D9] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <Quote className="w-10 h-10 text-white/10 absolute top-6 ltr:right-6 rtl:left-6" />
                  <p className="text-slate-300 italic mb-6 leading-relaxed relative z-10">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#6D28D9] flex items-center justify-center text-white font-bold font-display shadow-md">
                          {testimonial.client.charAt(0)}
                      </div>
                      <div>
                          <p className="text-white font-bold text-sm transition-colors">{testimonial.client}</p>
                          <p className="text-slate-400 text-xs uppercase tracking-wider">{testimonial.company}</p>
                      </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-r from-[#6D28D9] to-[#3B82F6]">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10 text-white">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-display tracking-tight text-white">{t('sections.ready')}</h2>
            <Link to={PageRoute.CONTACT}>
              <Button variant="glow" size="lg" className="px-12 py-4 text-lg bg-white text-[#6D28D9] hover:bg-white hover:text-[#3B82F6] border-none shadow-2xl">
                {t('sections.consultation')}
              </Button>
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Home;
