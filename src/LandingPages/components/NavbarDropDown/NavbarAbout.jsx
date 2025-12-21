import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import environment from '../../../assets/about/Environment.png'
import ingredient from '../../../assets/about/Ingredient.png'
import values from '../../../assets/about/Values.png'
import company from '../../../assets/about/Company.webp'

function NavBarAbout() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation en cascade avec rotation subtile
      itemsRef.current.forEach((item, index) => {
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
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className='grid grid-cols-4 gap-[8px]'>
      {[
        { title: "Company" , image: company },
        { title: "Values" , image: values },
        { title: "Ingredients" , image: ingredient},
        { title: "Environment" , image: environment },
      ].map((item, index) => (
        <div
          key={index}
          ref={el => itemsRef.current[index] = el}
          className='flex flex-col gap-[8px] cursor-pointer group opacity-0' // Initial hidden
        >
          <div className='w-full h-[240px] rounded-lg'
          style={{
            backgroundImage: `url(${item.image}) `,
            backgroundPosition:'center',
            backgroundSize: 'cover',
            backgroundRepeat : 'no-repeat'
          }}></div>
          <p className='text-black text-[14px] font-medium '>
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default NavBarAbout;