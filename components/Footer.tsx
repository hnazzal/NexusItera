
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Linkedin, Twitter, Mail, ArrowUpRight, Github, Code, Terminal, ChevronRight } from 'lucide-react';
import { PageRoute } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-deep border-t border-brand-border pt-20 pb-8 relative overflow-hidden transition-colors">
      {/* Matrix / Grid Floor Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <div className="absolute bottom-0 left-0 w-full h-[300px] bg-[linear-gradient(to_right,var(--primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--primary)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)_translateY(100px)] origin-bottom opacity-20"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8">
                 <Logo className="w-full h-full text-brand-primary" withText={false} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl text-brand-text leading-none">
                  Nexus<span className="text-brand-primary">Itera</span>
                </span>
                <span className="text-[10px] text-brand-muted tracking-[0.25em] uppercase font-medium mt-0.5">Tech</span>
              </div>
            </div>
            <p className="text-brand-muted text-base leading-relaxed mb-8 max-w-sm font-light">
              {t('footer.desc')}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-primary hover:bg-brand-primary/10 hover:border-brand-primary transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-primary hover:bg-brand-primary/10 hover:border-brand-primary transition-all duration-300">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-primary hover:bg-brand-primary/10 hover:border-brand-primary transition-all duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-2">
            <h3 className="text-brand-text font-bold mb-6 font-display tracking-wide">{t('footer.company')}</h3>
            <ul className="space-y-4">
              <li><NavLink to={PageRoute.ABOUT} className="text-brand-muted hover:text-brand-primary text-sm transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /> {t('nav.about')}</NavLink></li>
              <li><NavLink to={PageRoute.SERVICES} className="text-brand-muted hover:text-brand-primary text-sm transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /> {t('nav.services')}</NavLink></li>
              <li><NavLink to={PageRoute.CONTACT} className="text-brand-muted hover:text-brand-primary text-sm transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /> {t('nav.contact')}</NavLink></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-brand-text font-bold mb-6 font-display tracking-wide">Ecosystem</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-between text-brand-muted text-sm group cursor-pointer hover:text-brand-text">
                <span>Knowledge Distiller</span>
                <span className="text-[10px] uppercase bg-green-500/10 text-green-500 px-2 py-0.5 rounded border border-green-500/20">Live</span>
              </li>
              <li className="flex items-center justify-between text-brand-muted text-sm group cursor-pointer hover:text-brand-text">
                <span>Invoice Nexus</span>
                <span className="text-[10px] uppercase bg-brand-secondary/10 text-brand-secondary px-2 py-0.5 rounded border border-brand-secondary/20">API</span>
              </li>
              <li className="flex items-center justify-between text-brand-muted text-sm group cursor-pointer hover:text-brand-text">
                <span>Itera Plan</span>
                <ArrowUpRight className="w-3 h-3 opacity-50" />
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
             <h3 className="text-brand-text font-bold mb-6 font-display tracking-wide">Contact</h3>
             <div className="p-4 bg-brand-surface rounded-xl border border-brand-border">
                <p className="text-xs text-brand-muted uppercase mb-2">Support</p>
                <a href="mailto:hello@nexusitera.tech" className="text-brand-text font-bold text-sm hover:text-brand-primary transition-colors block mb-1">hello@nexusitera.tech</a>
                <p className="text-brand-muted text-xs mt-4">Response time: &lt; 24h</p>
             </div>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-muted text-xs font-mono">
             SYSTEM STATUS: <span className="text-green-500">OPERATIONAL</span> | v3.0.0
          </p>
          <div className="flex items-center gap-6">
             <span className="text-brand-muted text-xs hover:text-brand-text cursor-pointer transition-colors">Privacy Protocol</span>
             <span className="text-brand-muted text-xs hover:text-brand-text cursor-pointer transition-colors">Terms of Service</span>
             <span className="text-brand-muted text-xs font-mono">© 2024 NexusItera Tech</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
