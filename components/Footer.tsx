import React from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { PageRoute } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-deep border-t border-brand-surfaceLight pt-20 pb-10 relative overflow-hidden transition-colors duration-300">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(17,34,64,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(17,34,64,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(17,34,64,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(17,34,64,0.3)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20">
                 <Logo className="w-full h-full" withText={false} />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display font-bold text-2xl tracking-tight text-brand-text leading-none transition-colors">
                    NEXUS<span className="text-brand-secondary dark:text-brand-primary transition-colors">ITERA</span>
                </span>
                <span className="text-[10px] text-brand-muted tracking-[0.25em] uppercase leading-none mt-2 font-medium">
                  Intelligent Systems
                </span>
              </div>
            </div>
            <p className="text-brand-muted text-sm leading-relaxed mb-6 font-light">
              {t('footer.desc')}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-brand-muted hover:text-brand-secondary dark:hover:text-brand-primary transition-colors hover:scale-110 transform duration-200"><Linkedin size={20} /></a>
              <a href="#" className="text-brand-muted hover:text-brand-secondary dark:hover:text-brand-primary transition-colors hover:scale-110 transform duration-200"><Twitter size={20} /></a>
              <a href="#" className="text-brand-muted hover:text-brand-secondary dark:hover:text-brand-primary transition-colors hover:scale-110 transform duration-200"><Github size={20} /></a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-brand-text font-display font-bold mb-6 tracking-wide transition-colors">{t('footer.company')}</h3>
            <ul className="space-y-3">
              <li><NavLink to={PageRoute.ABOUT} className="text-brand-muted hover:text-brand-secondary dark:hover:text-brand-primary text-sm transition-colors">{t('nav.about')}</NavLink></li>
              <li><NavLink to={PageRoute.SERVICES} className="text-brand-muted hover:text-brand-secondary dark:hover:text-brand-primary text-sm transition-colors">{t('nav.services')}</NavLink></li>
              <li><NavLink to={PageRoute.PRODUCTS} className="text-brand-muted hover:text-brand-secondary dark:hover:text-brand-primary text-sm transition-colors">{t('nav.products')}</NavLink></li>
              <li><NavLink to={PageRoute.PORTFOLIO} className="text-brand-muted hover:text-brand-secondary dark:hover:text-brand-primary text-sm transition-colors">{t('nav.portfolio')}</NavLink></li>
              <li><NavLink to={PageRoute.CONTACT} className="text-brand-muted hover:text-brand-secondary dark:hover:text-brand-primary text-sm transition-colors">{t('nav.contact')}</NavLink></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-brand-text font-display font-bold mb-6 tracking-wide transition-colors">{t('footer.expertise')}</h3>
            <ul className="space-y-3">
              <li className="text-brand-muted text-sm">{t('form.web')}</li>
              <li className="text-brand-muted text-sm">{t('form.consulting')}</li>
              <li className="text-brand-muted text-sm">{t('form.mobile')}</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-brand-text font-display font-bold mb-6 tracking-wide transition-colors">{t('nav.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group cursor-pointer">
                <MapPin className="h-5 w-5 text-brand-secondary dark:text-brand-primary shrink-0 transition-colors" />
                <span className="text-brand-muted text-sm group-hover:text-brand-text transition-colors">101 Tech Plaza, Silicon Valley,<br />San Francisco, CA 94000</span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <Mail className="h-5 w-5 text-brand-secondary dark:text-brand-primary shrink-0 transition-colors" />
                <span className="text-brand-muted text-sm group-hover:text-brand-text transition-colors">hello@nexusitera.com</span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <Phone className="h-5 w-5 text-brand-secondary dark:text-brand-primary shrink-0 transition-colors" />
                <span className="text-brand-muted text-sm group-hover:text-brand-text transition-colors">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-surfaceLight pt-8 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors">
          <p className="text-brand-muted/60 text-xs">{t('footer.rights')}</p>
          <div className="flex gap-6">
            <a href="#" className="text-brand-muted/60 hover:text-brand-secondary dark:hover:text-brand-primary text-xs transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="text-brand-muted/60 hover:text-brand-secondary dark:hover:text-brand-primary text-xs transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};