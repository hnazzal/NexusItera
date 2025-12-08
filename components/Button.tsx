
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glow';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-display tracking-wide uppercase font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-surface disabled:opacity-50 disabled:cursor-not-allowed rounded-full shadow-md relative overflow-hidden group";
  
  const variants = {
    // Requested Gradient: Royal Purple (#6D28D9) to Sky Blue (#3B82F6)
    primary: "bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] text-white border border-transparent hover:brightness-110 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:scale-105",
    
    // Surface background for secondary
    secondary: "bg-brand-surfaceLight text-brand-secondary border border-brand-surfaceLight hover:border-brand-primary hover:text-brand-primary hover:bg-brand-surface",
    
    // Outline with main text color
    outline: "border border-brand-muted/30 hover:border-brand-primary text-brand-text hover:text-brand-primary bg-transparent",
    
    // Glow variant
    glow: "bg-transparent border border-brand-primary text-brand-primary shadow-[0_0_10px_rgba(109,40,217,0.15)] hover:bg-brand-primary hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(109,40,217,0.5)]"
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
      {/* Shine effect for primary buttons */}
      {variant === 'primary' && (
        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-all duration-1000 group-hover:animate-shine pointer-events-none"></div>
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};
