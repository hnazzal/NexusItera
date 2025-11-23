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
  const baseStyles = "inline-flex items-center justify-center font-display tracking-wide uppercase font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#020408] disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-primary text-brand-deep hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] border border-brand-primary",
    secondary: "bg-brand-surfaceLight text-brand-primary border border-brand-surfaceLight hover:border-brand-primary hover:text-white",
    outline: "border border-brand-muted/30 hover:border-brand-primary text-brand-muted hover:text-brand-primary bg-transparent",
    // Glow variant: Purple in Light Mode (Readable), Cyan in Dark Mode (Glowing)
    glow: "bg-transparent border border-brand-secondary text-brand-secondary shadow-[0_0_10px_rgba(112,0,255,0.1)] hover:bg-brand-secondary hover:text-white hover:shadow-[0_0_20px_rgba(112,0,255,0.5)] dark:border-brand-primary dark:text-brand-primary dark:shadow-[0_0_10px_rgba(0,240,255,0.3)] dark:hover:bg-brand-primary dark:hover:text-brand-deep dark:hover:shadow-[0_0_25px_rgba(0,240,255,0.8)]"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs rounded-sm",
    md: "px-6 py-3 text-sm rounded-sm",
    lg: "px-8 py-4 text-base rounded-sm"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};