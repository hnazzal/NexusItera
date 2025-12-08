import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glow' | 'neon';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-display tracking-wider font-semibold transition-all duration-300 rounded-lg relative overflow-hidden group disabled:opacity-50 z-10";
  
  const variants = {
    // Primary: Gradient that looks good in both. 
    // Dark: Cyan->Blue. Light: RoyalBlue->Purple
    primary: "bg-gradient-to-r from-brand-primary to-brand-secondary text-white dark:text-brand-deep shadow-md hover:shadow-lg dark:shadow-[0_0_20px_rgba(0,163,204,0.4)] dark:hover:shadow-[0_0_35px_rgba(0,163,204,0.6)] hover:scale-105 border border-transparent",
    
    // Secondary: Surface background
    secondary: "bg-brand-surface border border-brand-border text-brand-text hover:border-brand-primary/50 hover:bg-brand-surfaceLight hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]",
    
    // Outline
    outline: "border border-brand-border text-brand-text hover:border-brand-primary hover:text-brand-primary bg-transparent backdrop-blur-sm",
    
    // Glow variant
    glow: "bg-transparent border border-brand-primary/50 text-brand-primary shadow-sm dark:shadow-[0_0_10px_rgba(0,163,204,0.2)] hover:bg-brand-primary hover:text-white dark:hover:text-brand-deep hover:shadow-md dark:hover:shadow-[0_0_25px_rgba(0,163,204,0.6)]",
    
    // High Contrast Neon
    neon: "bg-brand-primary text-white dark:text-brand-deep font-bold border border-brand-primary shadow-lg dark:shadow-[0_0_15px_rgba(0,163,204,0.8)] hover:bg-brand-surface hover:text-brand-primary dark:hover:text-brand-deep dark:hover:bg-white dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.8)]"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {/* Shine effect */}
      {(variant === 'primary' || variant === 'neon') && (
         <div className="absolute top-0 ltr:-left-[100%] rtl:-right-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 group-hover:animate-shine transition-all duration-700 pointer-events-none"></div>
      )}
    </button>
  );
};