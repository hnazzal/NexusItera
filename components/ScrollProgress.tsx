
import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[60] pointer-events-none bg-transparent">
      <div 
        className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-100 ease-out shadow-[0_0_10px_rgba(0,163,204,0.5)]"
        style={{ width: `${scrollProgress * 100}%` }}
      ></div>
    </div>
  );
};