
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Sparkles, Sun, Moon } from 'lucide-react';
import { PageRoute } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: t('nav.home'), path: PageRoute.HOME },
    { name: t('nav.about'), path: PageRoute.ABOUT },
    { name: t('nav.services'), path: PageRoute.SERVICES },
    { name: t('nav.products'), path: PageRoute.PRODUCTS },
    { name: t('nav.contact'), path: PageRoute.CONTACT },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-brand-deep/80 backdrop-blur-xl border-brand-border py-3 shadow-lg' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to={PageRoute.HOME} className="flex items-center gap-3 group">
              <div className="w-10 h-10 relative">
                 <div className="absolute inset-0 bg-brand-primary/20 blur-lg rounded-full group-hover:bg-brand-primary/40 transition-all duration-500"></div>
                 <Logo className="w-full h-full text-brand-primary relative z-10" withText={false} />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display font-bold text-xl tracking-tight text-brand-text leading-none group-hover:text-brand-primary transition-colors duration-300">
                  Nexus<span className="text-brand-primary group-hover:text-brand-text">Itera</span>
                </span>
                <span className="text-[10px] text-brand-muted tracking-[0.25em] uppercase font-medium mt-0.5">Tech</span>
              </div>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-all duration-300 relative group py-1 ${
                    isActive 
                      ? 'text-brand-primary' 
                      : 'text-brand-muted hover:text-brand-text'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    {isActive && <span className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-brand-secondary rounded-full animate-pulse"></span>}
                  </>
                )}
              </NavLink>
            ))}
            
            <div className="flex items-center gap-2 border-s border-brand-border ps-6">
                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full text-brand-muted hover:text-brand-primary hover:bg-brand-surfaceLight transition-all"
                  aria-label="Toggle Theme"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>

                {/* Language Toggle */}
                <button 
                  onClick={toggleLanguage}
                  className="text-brand-muted hover:text-brand-primary transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:bg-brand-surfaceLight px-2 py-1 rounded-md"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'AR' : 'EN'}</span>
                </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
             <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-brand-muted hover:text-brand-primary transition-all"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
             <button 
              onClick={toggleLanguage}
              className="text-brand-muted font-bold text-xs"
            >
              {language === 'en' ? 'AR' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-text hover:text-brand-primary transition-colors p-2 rounded-md hover:bg-brand-surfaceLight"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-brand-surface/95 backdrop-blur-2xl border-b border-brand-border transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}`}>
        <div className="px-4 pt-4 pb-8 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-4 rounded-xl text-base font-medium flex justify-between items-center ${
                  isActive 
                    ? 'bg-brand-primary/10 text-brand-primary border border-brand-primary/20' 
                    : 'text-brand-muted hover:text-brand-text hover:bg-brand-surfaceLight border border-transparent'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              <Sparkles className="w-4 h-4 opacity-50" />
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
