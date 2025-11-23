import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { PageRoute } from '../types';
import { Button } from './Button';
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: t('nav.home'), path: PageRoute.HOME },
    { name: t('nav.services'), path: PageRoute.SERVICES },
    { name: t('nav.products'), path: PageRoute.PRODUCTS },
    { name: t('nav.portfolio'), path: PageRoute.PORTFOLIO },
    { name: t('nav.about'), path: PageRoute.ABOUT },
    { name: t('nav.contact'), path: PageRoute.CONTACT },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-deep/80 backdrop-blur-md border-b border-brand-surfaceLight py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to={PageRoute.HOME} className="flex items-center gap-4 group">
              <div className="w-24 h-24 transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                 <Logo className="w-full h-full" withText={false} />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display font-bold text-3xl tracking-tight text-brand-text leading-none transition-colors">
                  NEXUS<span className="text-brand-secondary dark:text-brand-primary transition-colors">ITERA</span>
                </span>
                <span className="text-xs text-brand-muted tracking-[0.25em] uppercase leading-none mt-2 font-medium">
                  Intelligent Systems
                </span>
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
                  `text-sm tracking-wide transition-all duration-200 hover:text-brand-secondary dark:hover:text-brand-primary ${
                    isActive 
                      ? 'text-brand-secondary dark:text-brand-primary font-bold dark:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]' 
                      : 'text-brand-text font-medium'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            <div className="flex items-center gap-2 border-s border-brand-muted/20 ps-4">
                <button 
                onClick={toggleTheme}
                className="p-2 text-brand-muted hover:text-brand-secondary dark:hover:text-brand-primary transition-colors rounded-full hover:bg-brand-surfaceLight/50"
                aria-label="Toggle Theme"
                >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>

                <button 
                onClick={toggleLanguage}
                className="p-2 text-brand-muted hover:text-brand-text transition-colors flex items-center gap-1 text-sm font-medium"
                >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'عربي' : 'EN'}</span>
                </button>
            </div>

            <NavLink to={PageRoute.CONTACT}>
               <Button variant="glow" size="sm">{t('nav.startProject')}</Button>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="text-brand-muted hover:text-brand-text transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
             <button 
              onClick={toggleLanguage}
              className="text-brand-muted hover:text-brand-text transition-colors"
            >
              <span className="font-bold">{language === 'en' ? 'عربي' : 'EN'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-text hover:text-brand-secondary dark:hover:text-brand-primary focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-brand-deep border-b border-brand-surfaceLight transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 shadow-2xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-3 py-4 rounded-sm text-base font-medium font-display ${
                  isActive 
                    ? 'bg-brand-surfaceLight text-brand-secondary dark:text-brand-primary border-s-2 border-brand-secondary dark:border-brand-primary' 
                    : 'text-brand-muted hover:text-brand-text hover:bg-brand-surfaceLight'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};