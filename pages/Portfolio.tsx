import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { PROJECTS_DATA } from '../constants';
import { ExternalLink, Terminal, ArrowUpRight } from 'lucide-react';
import { Button } from '../components/Button';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { LazyImage } from '../components/LazyImage';
import { RevealOnScroll } from '../components/RevealOnScroll';

const Portfolio: React.FC = () => {
  const { t, language, dir } = useLanguage();
  const projects = PROJECTS_DATA[language];

  return (
    <div className="bg-brand-deep min-h-screen transition-colors duration-300 relative overflow-hidden py-24">
      <SEO 
        title={t('nav.portfolio')} 
        description={t('sections.digEvol')} 
      />

      {/* Immersive Background Elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] animate-float pointer-events-none"></div>
      <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-[150px] animate-float-delayed pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(17,34,64,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(17,34,64,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-20">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-surface border border-brand-primary/30 text-brand-primary text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <Terminal className="w-4 h-4" />
                <span>{t('sections.selectedDeployments')}</span>
             </div>
             <SectionTitle 
               title={t('sections.digEvol')} 
               subtitle={t('sections.caseStudies')} 
             />
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.id} delay={index * 150}>
              <div className="group relative h-full bg-brand-surface/60 backdrop-blur-md rounded-2xl overflow-hidden border border-brand-surfaceLight hover:border-brand-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,240,255,0.15)] flex flex-col">
                
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 bg-brand-deep/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                  <LazyImage 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-transparent to-transparent opacity-90"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-20">
                     <span className="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-wider text-brand-deep bg-brand-primary rounded-sm">
                        {project.category}
                     </span>
                  </div>

                  {/* External Link Button Overlay */}
                  <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <Button size="sm" variant="glow" className="rounded-full w-12 h-12 flex items-center justify-center p-0 bg-brand-deep/80 backdrop-blur">
                      <ArrowUpRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 flex flex-col flex-grow relative overflow-hidden">
                  {/* Subtle shine effect */}
                  <div className="absolute top-0 -left-[100%] w-full h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent group-hover:animate-shine"></div>

                  <h3 className="text-3xl font-bold text-brand-text font-display mb-4 group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-brand-muted mb-8 leading-relaxed font-light text-base flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-brand-surfaceLight/50">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 bg-brand-surfaceLight/30 text-brand-text text-xs font-mono rounded-md border border-brand-surfaceLight flex items-center gap-1.5 hover:border-brand-secondary/50 transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary"></span>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;