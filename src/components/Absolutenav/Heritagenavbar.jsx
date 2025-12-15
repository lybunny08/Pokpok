import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function HeritageNavBar() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation en cascade avec rotation subtile
      itemsRef.current.forEach((item, index) => {
        if (item) { // Vérification pour éviter les erreurs
          gsap.fromTo(item,
            {
              opacity: 0,
              y: -10,
              rotationX: -10,
              scale: 0.97,
            },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              scale: 1,
              duration: 0.6,
              delay: 0.06 * index, // Délai progressif
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const items = [
    { title: "Le raphia" },
    { title: "Magnifier l'heritage" },
    { title: "Notre savoir-faire" },
  ];

  return (
    <div ref={containerRef} className='grid grid-cols-3 gap-[8px]'>
      {items.map((item, index) => (
        <div
          key={index}
          ref={el => {
            if (el) itemsRef.current[index] = el;
          }}
          className='flex flex-col gap-[8px] cursor-pointer group opacity-0'
        >
          <div className='w-full h-[180px] rounded-lg bg-black/40 '></div>
          <p className='text-black group-hover:text-gray-700 transition-colors duration-300'>
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default HeritageNavBar;