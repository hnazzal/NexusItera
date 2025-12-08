
import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over clickable elements
      const isClickable = target.closest('button, a, input, textarea, select, [role="button"]');
      setIsHovering(!!isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousemove', updateHoverState);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousemove', updateHoverState);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          body {
            cursor: none;
          }
        }
      `}</style>
      <div 
        className="fixed top-0 left-0 pointer-events-none z-[100] hidden md:block mix-blend-difference"
        style={{ 
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        {/* Main Dot */}
        <div 
          className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary transition-all duration-150 ease-out ${
            isHovering ? 'w-2 h-2' : 'w-2 h-2'
          }`}
        ></div>

        {/* Following Ring */}
        <div 
          className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-primary/80 transition-all duration-300 ease-out ${
            isHovering ? 'w-12 h-12 bg-brand-primary/10 border-brand-secondary' : 'w-8 h-8'
          } ${isClicking ? 'scale-75' : 'scale-100'}`}
        ></div>
      </div>
    </>
  );
};
