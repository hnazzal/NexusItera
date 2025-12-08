
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { AlertTriangle, Home } from 'lucide-react';
import { PageRoute } from '../types';
import { useLanguage } from '../context/LanguageContext';

const NotFound: React.FC = () => {
  const { t, language } = useLanguage();

  const title = language === 'en' ? 'Signal Lost' : 'فقدان الإشارة';
  const subtitle = language === 'en' ? '404 - System Node Not Found' : '404 - لم يتم العثور على عقدة النظام';
  const desc = language === 'en' 
    ? "The trajectory you are attempting to follow does not exist in our current neural map." 
    : "المسار الذي تحاول اتباعه غير موجود في خريطتنا العصبية الحالية.";
  const cta = language === 'en' ? 'Return to Base' : 'العودة للقاعدة';

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-brand-deep relative overflow-hidden">
      {/* Background Glitch Effect */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[100px] animate-pulse"></div>

      <div className="relative z-10 text-center max-w-lg px-4">
        <div className="w-24 h-24 bg-brand-surface border border-brand-primary/30 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(0,163,204,0.2)]">
            <AlertTriangle className="w-12 h-12 text-brand-secondary animate-pulse" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-brand-text mb-4 font-display tracking-tight">
          {title}
        </h1>
        
        <div className="inline-block px-3 py-1 bg-brand-secondary/10 border border-brand-secondary/30 rounded text-brand-secondary font-mono text-sm mb-6">
            {subtitle}
        </div>
        
        <p className="text-brand-muted text-lg mb-10 leading-relaxed font-light">
          {desc}
        </p>
        
        <Link to={PageRoute.HOME}>
          <Button variant="glow" size="lg" className="group">
             <Home className="w-4 h-4 ltr:mr-2 rtl:ml-2 group-hover:scale-110 transition-transform" /> {cta}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;