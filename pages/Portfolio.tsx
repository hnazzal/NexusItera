import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { PROJECTS_DATA } from '../constants';
import { ExternalLink, Terminal } from 'lucide-react';
import { Button } from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

const Portfolio: React.FC = () => {
  const { t, language } = useLanguage();
  const projects = PROJECTS_DATA[language];

  return (
    <div className="py-24 bg-brand-deep min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title={t('sections.digEvol')} 
          subtitle={t('sections.caseStudies')} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group bg-brand-surface rounded-xl overflow-hidden border border-brand-surfaceLight hover:border-brand-primary transition-all duration-500 hover:shadow-[0_0_30px_rgba(10,26,47,0.1)] dark:hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0 bg-brand-primary/20 mix-blend-overlay z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-brand-deep/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm z-20">
                  <Button size="sm" variant="glow" className="flex items-center">
                     <ExternalLink className="w-4 h-4 me-2" /> {t('sections.liveSys')}
                  </Button>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-brand-primary text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
                       // {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-brand-text font-display transition-colors">{project.title}</h3>
                  </div>
                </div>
                
                <p className="text-brand-muted mb-8 leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-brand-deep text-brand-primary text-xs font-mono rounded-sm border border-brand-surfaceLight flex items-center gap-1 transition-colors">
                      <Terminal className="w-3 h-3" /> {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;