import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Zap, Network, Code2, Globe, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SectionTitle } from '../components/SectionTitle';
import { SERVICES_DATA, PROJECTS_DATA, COMPANY_TAGLINE, PRODUCTS_DATA } from '../constants';
import { PageRoute } from '../types';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { t, language, dir } = useLanguage();
  const services = SERVICES_DATA[language];
  const products = PRODUCTS_DATA[language];
  const projects = PROJECTS_DATA[language];
  const tagline = COMPANY_TAGLINE[language];

  const ArrowIcon = dir === 'rtl' ? (props: any) => <ArrowRight {...props} style={{ transform: 'rotate(180deg)' }} /> : ArrowRight;
  const ChevronIcon = dir === 'rtl' ? (props: any) => <ChevronRight {...props} style={{ transform: 'rotate(180deg)' }} /> : ChevronRight;


  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Background Gradients & Grids */}
        <div className="absolute inset-0 bg-brand-deep z-0 transition-colors duration-500">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent"></div>
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-secondary/50 to-transparent"></div>
          
          {/* Radial Orbs */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-surfaceLight rounded-full blur-[120px] opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[100px] opacity-20"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0" 
            style={{ 
              backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.05) 1px, transparent 1px)', 
              backgroundSize: '50px 50px',
              maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
            }}>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-surface border border-brand-primary/20 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                </span>
                <span className="text-brand-primary text-xs font-semibold tracking-wider uppercase">{t('hero.systemOnline')}</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-brand-text leading-[1.1] tracking-tight font-display transition-colors duration-300">
                {t('hero.headline')}
              </h1>
              
              <p className="text-lg text-brand-muted max-w-xl leading-relaxed font-light">
                {t('hero.subtext')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to={PageRoute.CONTACT}>
                  <Button variant="glow" size="lg" className="w-full sm:w-auto flex items-center gap-2">
                     {t('hero.initialize')} <ArrowIcon className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to={PageRoute.PORTFOLIO}>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">{t('hero.explore')}</Button>
                </Link>
              </div>

              <div className="pt-8 border-t border-brand-surfaceLight/50 flex items-center gap-12">
                <div>
                  <p className="text-4xl font-bold text-brand-text font-display transition-colors">98<span className="text-brand-primary text-xl">%</span></p>
                  <p className="text-brand-muted text-xs uppercase tracking-wider">{t('hero.efficiency')}</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-brand-text font-display transition-colors">50<span className="text-brand-primary text-xl">+</span></p>
                  <p className="text-brand-muted text-xs uppercase tracking-wider">{t('hero.cores')}</p>
                </div>
              </div>
            </div>

            {/* Futuristic Visual */}
            <div className="hidden lg:block relative" dir="ltr">
               <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl blur opacity-30"></div>
               <div className="relative rounded-2xl overflow-hidden border border-brand-surfaceLight bg-brand-deep/80 backdrop-blur-xl p-6 shadow-2xl">
                  {/* Mock Interface - Kept LTR for code look */}
                  <div className="flex items-center justify-between mb-6 border-b border-brand-surfaceLight pb-4">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                     </div>
                     <div className="font-mono text-xs text-brand-primary opacity-70">NEXUS_KERNEL_V4.2.0</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                     <div className="bg-brand-surfaceLight/30 p-4 rounded border border-brand-primary/10">
                        <div className="flex justify-between items-center mb-2">
                           <Network className="w-5 h-5 text-brand-primary" />
                           <span className="text-xs text-brand-muted">{t('hero.nodes')}</span>
                        </div>
                        <div className="text-2xl font-display text-brand-text transition-colors">1,024</div>
                        <div className="h-1 w-full bg-brand-deep mt-2 rounded overflow-hidden">
                           <div className="h-full bg-brand-primary w-[70%]"></div>
                        </div>
                     </div>
                     <div className="bg-brand-surfaceLight/30 p-4 rounded border border-brand-primary/10">
                        <div className="flex justify-between items-center mb-2">
                           <Cpu className="w-5 h-5 text-brand-secondary" />
                           <span className="text-xs text-brand-muted">{t('hero.compute')}</span>
                        </div>
                        <div className="text-2xl font-display text-brand-text transition-colors">99.9%</div>
                         <div className="h-1 w-full bg-brand-deep mt-2 rounded overflow-hidden">
                           <div className="h-full bg-brand-secondary w-[95%]"></div>
                        </div>
                     </div>
                  </div>
                  
                  <div className="font-mono text-sm space-y-2 text-brand-muted p-4 bg-black/40 dark:bg-black/40 bg-gray-900/10 rounded border border-brand-surfaceLight/50">
                    <div className="flex">
                      <span className="text-brand-primary mr-2">root@nexus:~#</span>
                      <span className="typing-effect">{t('hero.typing1')}</span>
                    </div>
                    <div className="flex">
                      <span className="text-brand-primary mr-2">root@nexus:~#</span>
                      <span className="text-brand-secondary">{t('hero.typing2')}</span>
                    </div>
                    <div className="flex">
                      <span className="text-brand-primary mr-2">root@nexus:~#</span>
                      <span className="text-green-400">{t('hero.typing3')}</span>
                    </div>
                  </div>
               </div>
               
               {/* Floating elements */}
               <div className="absolute -right-10 -bottom-10 p-4 bg-brand-surface border border-brand-primary/20 rounded-xl shadow-2xl backdrop-blur-md animate-bounce delay-700">
                  <Globe className="w-8 h-8 text-brand-primary" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-brand-dark relative border-t border-brand-surfaceLight/30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t('sections.coreCap')} subtitle={t('sections.engineering')} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, index) => (
              <div key={index} className="group p-8 rounded-sm bg-brand-surface border border-brand-surfaceLight hover:border-brand-primary transition-all duration-300 relative overflow-hidden shadow-lg hover:shadow-xl">
                <div className="absolute top-0 ltr:left-0 rtl:right-0 w-1 h-0 bg-brand-primary group-hover:h-full transition-all duration-300"></div>
                <div className="w-14 h-14 rounded-sm bg-brand-surfaceLight flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-brand-deep transition-colors text-brand-primary">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-3 font-display transition-colors">{service.title}</h3>
                <p className="text-brand-muted mb-6 line-clamp-3 text-sm">{service.description}</p>
                <Link to={PageRoute.SERVICES} className="inline-flex items-center text-brand-primary text-sm font-bold uppercase tracking-wider hover:text-brand-text transition-colors">
                  {t('hero.explore')} <ChevronIcon className="w-4 h-4 ms-1 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-deep relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle title={t('sections.nexusAdv')} align="left" subtitle={t('sections.evolution')} />
              <div className="space-y-6">
                {[
                  "Secure-by-design architecture.",
                  "Agile iteration with continuous deployment.",
                  "Top 1% engineering talent.",
                  "Scalable infrastructure for hyper-growth."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-brand-surface/50 border border-transparent hover:border-brand-primary/30 transition-all">
                    <div className="mt-1">
                      <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                    </div>
                    <p className="text-lg text-brand-text font-light transition-colors">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link to={PageRoute.ABOUT}>
                  <Button variant="secondary">{t('sections.decode')}</Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-brand-primary blur-[80px] opacity-10"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 translate-y-8">
                  <img src="https://picsum.photos/600/800?random=20" alt="Team meeting" className="rounded-lg border border-brand-surfaceLight grayscale hover:grayscale-0 transition-all duration-500 shadow-xl" />
                  <div className="p-4 bg-brand-surface border border-brand-surfaceLight rounded-lg">
                    <Code2 className="w-8 h-8 text-brand-secondary mb-2" />
                    <p className="text-xs text-brand-muted uppercase tracking-widest">{t('sections.cleanCode')}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-brand-surface border border-brand-surfaceLight rounded-lg text-end">
                    <Zap className="w-8 h-8 text-brand-primary mb-2 ms-auto" />
                    <p className="text-xs text-brand-muted uppercase tracking-widest">{t('sections.highVelocity')}</p>
                  </div>
                  <img src="https://picsum.photos/600/800?random=21" alt="Coding" className="rounded-lg border border-brand-surfaceLight grayscale hover:grayscale-0 transition-all duration-500 shadow-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-brand-dark border-t border-brand-surfaceLight/30 transition-colors duration-300">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
               <div className="max-w-2xl">
                 <div className="flex items-center gap-2 mb-4">
                    <div className="h-[1px] w-8 bg-brand-secondary"></div>
                    <span className="text-brand-secondary text-xs font-bold tracking-[0.2em] uppercase font-display">
                      {t('sections.saasEco')}
                    </span>
                 </div>
                 <h2 className="text-3xl md:text-5xl font-bold text-brand-text leading-tight font-display transition-colors">{t('sections.propProducts')}</h2>
               </div>
               <Link to={PageRoute.PRODUCTS} className="hidden md:block">
                  <Button variant="outline">{t('sections.accessProducts')}</Button>
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {products.slice(0, 3).map((product) => (
                  <div key={product.id} className="bg-brand-surface rounded-xl p-8 border border-brand-surfaceLight hover:border-brand-secondary/50 transition-all hover:-translate-y-1 group shadow-lg">
                     <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-brand-deep rounded-lg border border-brand-surfaceLight group-hover:border-brand-secondary transition-colors">
                           <product.icon className="w-6 h-6 text-brand-secondary" />
                        </div>
                        <span className="text-[10px] font-mono text-brand-primary px-2 py-1 rounded border border-brand-primary/20 bg-brand-primary/5">{product.status}</span>
                     </div>
                     <h3 className="text-xl font-bold text-brand-text mb-2 font-display transition-colors">{product.name}</h3>
                     {/* Updated Tagline Color here */}
                     <p className="text-brand-secondary dark:text-brand-primary font-medium text-sm mb-6">{product.tagline}</p>
                     <div className="text-sm font-medium text-brand-secondary flex items-center">
                        <Link to={PageRoute.PRODUCTS} className="flex items-center hover:text-brand-text transition-colors">
                           {t('sections.viewSpecs')} <ArrowIcon className="w-4 h-4 ms-1" />
                        </Link>
                     </div>
                  </div>
               ))}
            </div>
             <div className="mt-8 text-center md:hidden">
               <Link to={PageRoute.PRODUCTS}>
                  <Button variant="outline">{t('sections.accessProducts')}</Button>
               </Link>
             </div>
         </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-24 bg-brand-deep transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <SectionTitle title={t('sections.selectedDeployments')} subtitle={t('sections.caseStudies')} />
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.slice(0, 2).map((project) => (
                <div key={project.id} className="group relative overflow-hidden rounded-xl border border-brand-surfaceLight bg-brand-surface shadow-lg">
                   <div className="aspect-video overflow-hidden">
                     <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                     <div className="absolute inset-0 bg-brand-deep/50 mix-blend-multiply group-hover:bg-transparent transition-all"></div>
                   </div>
                   <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-brand-deep via-brand-deep/90 to-transparent">
                      <span className="text-brand-primary text-xs font-bold uppercase tracking-wider mb-2 block">{project.category}</span>
                      <h3 className="text-2xl font-bold text-white mb-2 font-display">{project.title}</h3>
                      <Link to={PageRoute.PORTFOLIO} className="text-sm text-brand-muted group-hover:text-white inline-flex items-center">
                        {t('sections.viewCaseStudy')} <ChevronIcon className="w-4 h-4 ms-1" />
                      </Link>
                   </div>
                </div>
              ))}
           </div>
           <div className="mt-12 text-center">
             <Link to={PageRoute.PORTFOLIO}>
               <Button variant="outline">{t('sections.viewAll')}</Button>
             </Link>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-brand-dark transition-colors duration-300">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-6 font-display transition-colors">{t('sections.ready')}</h2>
          <p className="text-xl text-brand-muted mb-10 font-light">
            {t('sections.connect')}
          </p>
          <Link to={PageRoute.CONTACT}>
            <Button variant="glow" size="lg">
              {t('sections.consultation')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;