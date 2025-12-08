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
        className="w-full h-full drop-shadow-[0_0_10px_rgba(112,0,255,0.3)] transition-all duration-500 ease-out group-hover/logo:drop-shadow-[0_0_25px_rgba(0,163,204,0.6)] group-hover/logo:scale-105"
      >
        <defs>
          <linearGradient id="nexus_gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7000FF" /> {/* Cyber Purple */}
            <stop offset="50%" stopColor="#2563EB" /> {/* Deep Blue */}
            <stop offset="100%" stopColor="#00A3CC" /> {/* Deep Tech Cyan */}
          </linearGradient>
          <filter id="glow-node" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* The Orbit Ring - Connectivity */}
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          stroke="url(#nexus_gradient)" 
          strokeWidth="0.5" 
          opacity="0.2" 
          strokeDasharray="10 5" 
          className="origin-center animate-[spin_20s_linear_infinite] group-hover/logo:opacity-40"
        />

        {/* The Neural Flow Path (Abstract N) */}
        <path
          id="nexus-path"
          d="M 25 75 L 25 35 Q 25 20 40 30 L 60 70 Q 75 80 75 65 L 75 25"
          stroke="url(#nexus_gradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-500 ease-out group-hover/logo:stroke-[10px]"
        />

        {/* Active Data Packet Animation */}
        <circle r="2.5" fill="white" filter="url(#glow-node)">
          <animateMotion 
            dur="2.5s" 
            repeatCount="indefinite"
            keyPoints="0;1"
            keyTimes="0;1"
            calcMode="linear"
          >
            <mpath href="#nexus-path" />
          </animateMotion>
        </circle>

        {/* Input Node (Start) */}
        <circle 
          cx="25" 
          cy="75" 
          r="4" 
          fill="#7000FF" 
          className="transition-all duration-300 group-hover/logo:fill-white"
        />

        {/* Output Node (End/Itera) */}
        <g>
            <circle 
              cx="75" 
              cy="25" 
              r="5" 
              fill="#00A3CC" 
              className="transition-all duration-300 group-hover/logo:fill-white" 
            />
            {/* Pulsing AI Aura */}
            <circle 
              cx="75" 
              cy="25" 
              r="8" 
              stroke="#00A3CC" 
              strokeWidth="0.5" 
              className="opacity-50 animate-pulse" 
            />
        </g>
      </svg>
      
      {withText && (
        <div className="flex flex-col justify-center">
          <span className="font-display font-bold text-xl tracking-tight text-brand-text leading-none transition-colors duration-300">
            NEXUS<span className="text-brand-primary">ITERA</span>
          </span>
          <span className="text-[9px] text-brand-muted tracking-[0.3em] uppercase leading-none mt-1 font-medium group-hover/logo:text-brand-primary transition-colors">
            TECH
          </span>
        </div>
      )}
    </div>
  );
};