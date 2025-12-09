import React from 'react';

interface LogoProps {
  className?: string;
  withText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10", withText = false }) => {
  return (
    <div className={`flex items-center gap-3 group/logo cursor-pointer select-none ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md transition-all duration-500 ease-out group-hover/logo:scale-105"
      >
        <defs>
          <linearGradient id="tech_gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00CCFF" /> {/* Light Neon Cyan */}
            <stop offset="50%" stopColor="#0088AA" /> {/* Deep Cyan */}
            <stop offset="100%" stopColor="#6A4CFF" /> {/* Accent Purple */}
          </linearGradient>
          
          <filter id="glow-tech" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Abstract Geometric 'N' Construction */}
        <g strokeLinecap="round" strokeLinejoin="round">
            {/* Left Vertical Pillar - Stability */}
            <path 
                d="M 32 75 L 32 25" 
                stroke="#0088AA" 
                strokeWidth="8"
                className="transition-all duration-300 group-hover/logo:stroke-[#00CCFF]"
            />

            {/* Diagonal Connector - The Nexus */}
            <path 
                d="M 32 25 L 68 75" 
                stroke="url(#tech_gradient)" 
                strokeWidth="8"
                filter="url(#glow-tech)"
                className="opacity-90"
            />

            {/* Right Vertical Pillar - Iteration */}
            <path 
                d="M 68 75 L 68 25" 
                stroke="#6A4CFF" 
                strokeWidth="8"
                className="transition-all duration-300 group-hover/logo:stroke-[#8066FF]"
            />
        </g>

        {/* Data Points / Nodes */}
        <circle cx="32" cy="25" r="3" fill="white" />
        <circle cx="68" cy="75" r="3" fill="white" />

        {/* Floating Particle Animation */}
        <circle r="2" fill="#00CCFF">
            <animateMotion 
                dur="3s" 
                repeatCount="indefinite"
                path="M 32 25 L 68 75"
                calcMode="linear"
            />
        </circle>
      </svg>
      
      {withText && (
        <div className="flex flex-col justify-center">
          <span className="font-display font-bold text-xl tracking-tight text-brand-text leading-none transition-colors duration-300">
            Nexus<span className="font-light text-brand-text">Itera</span>
          </span>
          <span className="text-[10px] text-transparent bg-clip-text bg-gradient-to-r from-[#00CCFF] to-[#6A4CFF] tracking-[0.25em] uppercase leading-none mt-1 font-bold">
            Tech
          </span>
        </div>
      )}
    </div>
  );
};