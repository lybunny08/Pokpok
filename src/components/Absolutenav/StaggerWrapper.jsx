import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function StaggerWrapper({ children, delay = 0.2, stagger = 0.15 }) {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Récupérer tous les enfants directs du container
      const childElements = Array.from(containerRef.current.children);
      
      if (childElements.length > 0) {
        // Initialiser comme invisibles
        gsap.set(childElements, {
          opacity: 0,
          y: 20,
        });

        // Animation en cascade
        gsap.to(childElements, {
          opacity: 1,
          y: 0,
          stagger: stagger,
          duration: 0.5,
          delay: delay,
          ease: "power2.out",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [delay, stagger]);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}

export default StaggerWrapper;