import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { SERVICES_DATA } from '../constants';
import { Check, Cpu } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { PageRoute } from '../types';
import { useLanguage } from '../context/LanguageContext';

const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const services = SERVICES_DATA[language];

  return (
    <div className="py-24 bg-brand-deep relative transition-colors duration-300">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(17,34,64,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(17,34,64,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(17,34,64,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(17,34,64,0.3)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title={t('sections.intCap')} 
          subtitle={t('sections.ourExpertise')} 
        />
        
        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col md:flex-row gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              
              <div className="flex-1 w-full">
                <div className="relative group">
                   <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                   <div className="bg-brand-surface border border-brand-surfaceLight rounded-lg p-1 shadow-2xl">
                      <div className="bg-brand-deep/80 backdrop-blur-sm rounded-md p-12 md:p-16 h-full flex items-center justify-center relative overflow-hidden">
                         {/* Tech Pattern */}
                         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                         <service.icon className="w-40 h-40 text-brand-surfaceLight absolute -bottom-10 rtl:-left-10 ltr:-right-10 stroke-1" />
                         <service.icon className="w-24 h-24 text-brand-primary relative z-10 drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
                      </div>
                   </div>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 text-brand-primary text-sm font-bold tracking-widest uppercase mb-2">
                   <Cpu className="w-4 h-4" />
                   <span>{t('sections.serviceNode')} 0{index + 1}</span>
                </div>
                <h3 className="text-4xl font-bold text-brand-text font-display transition-colors">{service.title}</h3>
                <p className="text-brand-muted text-lg leading-relaxed font-light">{service.description}</p>
                
                <div className="bg-brand-surface/50 rounded-lg p-6 border border-brand-surfaceLight backdrop-blur-sm shadow-md">
                  <h4 className="text-brand-text font-semibold mb-4 text-sm uppercase tracking-wide transition-colors">{t('sections.techStack')}</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-brand-text text-sm transition-colors">
                        <div className="p-1 bg-brand-primary/10 rounded-full">
                           <Check className="w-3 h-3 text-brand-primary" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 relative rounded-2xl overflow-hidden border border-brand-primary/30 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-surface to-brand-deep"></div>
          <div className="relative z-10 p-12 text-center">
            <h2 className="text-3xl font-bold text-brand-text mb-4 font-display transition-colors">{t('sections.sysArch')}</h2>
            <p className="text-brand-muted mb-8 max-w-2xl mx-auto">
              {t('sections.auditText')}
            </p>
            <Link to={PageRoute.CONTACT}>
              <Button variant="glow">{t('sections.reqAudit')}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;