import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-start'}`}>
      {subtitle && (
        <div className={`flex items-center gap-2 mb-4 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
          <div className="h-[1px] w-8 bg-brand-primary"></div>
          <span className="text-brand-primary text-xs font-bold tracking-[0.2em] uppercase font-display">
            {subtitle}
          </span>
          <div className="h-[1px] w-8 bg-brand-primary"></div>
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-6 leading-tight font-display transition-colors duration-300">
        {title}
      </h2>
      <div className={`h-1 w-20 bg-gradient-to-r from-brand-primary to-brand-secondary ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};