import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function AboutNavBar() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation en cascade avec rotation subtile
      itemsRef.current.forEach((item, index) => {
        gsap.fromTo(item,
          {
            opacity: 0,
            y: -5,
            rotationX: -10,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            scale: 1,
            duration: 0.3,
            delay: 0.06 * index, // Délai progressif
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className='grid grid-cols-5 gap-[8px]'>
      {[
        { title: "Notre histoire" },
        { title: "Manifesto" },
        { title: "Nos valeurs" },
        { title: "Nos fondatrices" },
        { title: "Nos addresses" },
      ].map((item, index) => (
        <div
          key={index}
          ref={el => itemsRef.current[index] = el}
          className='flex flex-col gap-[8px] cursor-pointer group opacity-0' // Initial hidden
        >
          <div className='w-full h-[180px] rounded-lg bg-black/40'></div>
          <p className='text-black group-hover:text-gray-700 transition-colors duration-300'>
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AboutNavBar;