
import React, { useRef, useEffect } from "react";

interface RotatingProductProps {
  imageSrc: string;
  size?: number;
  speed?: number;
}

export function RotatingProduct({ 
  imageSrc, 
  size = 300, 
  speed = 0.02 
}: RotatingProductProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    let angle = 0;
    let requestId: number;
    let isHovering = false;
    
    const cube = container.querySelector('.cube') as HTMLElement;
    
    const animate = () => {
      if (cube) {
        angle += isHovering ? speed * 0.2 : speed;
        cube.style.transform = `rotateY(${angle}rad)`;
      }
      requestId = requestAnimationFrame(animate);
    };
    
    const handleMouseEnter = () => {
      isHovering = true;
    };
    
    const handleMouseLeave = () => {
      isHovering = false;
    };
    
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    requestId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(requestId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [speed]);

  return (
    <div 
      ref={containerRef}
      className="perspective-container"
      style={{ 
        perspective: '1000px', 
        width: `${size}px`, 
        height: `${size}px`,
        margin: '0 auto'
      }}
    >
      <div 
        className="cube relative" 
        style={{ 
          width: '100%', 
          height: '100%', 
          transformStyle: 'preserve-3d' 
        }}
      >
        {/* Front face */}
        <div
          className="absolute w-full h-full"
          style={{
            transform: 'translateZ(150px)',
          }}
        >
          <img 
            src={imageSrc} 
            alt="Product" 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Back face */}
        <div
          className="absolute w-full h-full"
          style={{
            transform: 'rotateY(180deg) translateZ(150px)',
          }}
        >
          <img 
            src={imageSrc} 
            alt="Product" 
            className="w-full h-full object-contain" 
          />
        </div>

        {/* Shadow beneath */}
        <div
          className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-8 w-3/4 h-4 rounded-full bg-black/20 blur-md"
        />
      </div>
    </div>
  );
}
