import React from 'react';

interface LogoProps {
  className?: string;
  withText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10", withText = false }) => {
  return (
    <div className={`flex items-center gap-2 group/logo cursor-pointer ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_10px_rgba(0,240,255,0.3)] transition-all duration-500 ease-out group-hover/logo:drop-shadow-[0_0_25px_rgba(112,0,255,0.6)] group-hover/logo:scale-105"
      >
        <defs>
          <linearGradient id="logo_gradient_flow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="50%" stopColor="#2D6BFF" />
            <stop offset="100%" stopColor="#7000FF" />
          </linearGradient>
        </defs>

        {/* Background Orbit: Represents the ecosystem/world */}
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          stroke="url(#logo_gradient_flow)" 
          strokeWidth="0.5" 
          opacity="0.15" 
          strokeDasharray="4 4" 
          className="origin-center animate-[spin_10s_linear_infinite] transition-all duration-700 group-hover/logo:opacity-30"
        />
        
        {/* Secondary Inner Orbit: Reveals on hover for technical depth */}
        <circle 
          cx="50" 
          cy="50" 
          r="35" 
          stroke="url(#logo_gradient_flow)" 
          strokeWidth="0.25" 
          opacity="0" 
          strokeDasharray="2 2" 
          className="origin-center animate-[spin_15s_linear_infinite_reverse] transition-all duration-700 group-hover/logo:opacity-20"
        />

        {/* The Neural Flow N: A single continuous fluid line */}
        <path
          d="M 30 80 L 30 35 Q 30 20 45 30 L 55 70 Q 70 80 70 65 L 70 20"
          stroke="url(#logo_gradient_flow)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-500 ease-out group-hover/logo:stroke-[14px]"
        />

        {/* Input Node (Data Start) */}
        <circle 
          cx="30" 
          cy="80" 
          r="5" 
          fill="#00F0FF" 
          className="transition-all duration-300 ease-out group-hover/logo:r-6 group-hover/logo:fill-white"
        />

        {/* Output Node (AI Result) - With Pulsing Effect */}
        <g>
            <circle 
              cx="70" 
              cy="20" 
              r="6" 
              fill="#7000FF" 
              className="transition-all duration-300 ease-out group-hover/logo:r-7 group-hover/logo:fill-white" 
            />
            {/* Pulse Ring 1 */}
            <circle 
              cx="70" 
              cy="20" 
              r="12" 
              stroke="#7000FF" 
              strokeWidth="1.5" 
              className="opacity-50 animate-pulse transition-colors duration-300 group-hover/logo:stroke-[#00F0FF]" 
            />
            {/* Pulse Ring 2 (Ping) */}
            <circle 
              cx="70" 
              cy="20" 
              r="18" 
              stroke="#7000FF" 
              strokeWidth="0.5" 
              className="opacity-20 animate-ping transition-opacity duration-300 group-hover/logo:opacity-50" 
              style={{ animationDuration: '3s' }} 
            />
        </g>
      </svg>
      {withText && (
        <div className="flex flex-col justify-center">
          <span className="font-display font-bold text-xl tracking-tight text-brand-text leading-none transition-colors duration-300 group-hover/logo:text-brand-primary">
            NEXUS<span className="text-brand-primary transition-colors duration-300 group-hover/logo:text-brand-secondary">ITERA</span>
          </span>
          <span className="text-[10px] text-brand-muted tracking-[0.2em] uppercase leading-none mt-1 font-medium transition-colors duration-300 group-hover/logo:text-brand-text">
            Intelligent Systems
          </span>
        </div>
      )}
    </div>
  );
};
