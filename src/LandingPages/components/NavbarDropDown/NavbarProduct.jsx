import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Haircare from '../../../assets/Haircare.png'
import Skincare from '../../../assets/Skincare.png'
import Bodycare from '../../../assets/herobg.webp'
import Kits from '../../../assets/Kits.webp'

function NavBarProducts() {
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
    { title: "Body Care" , image : Bodycare},
    { title: "Skin Care" , image : Skincare},
    { title: "Hair Care" , image : Haircare},
     { title: "Kits" , image : Kits},
  ];

  return (
    <div ref={containerRef} className='grid grid-cols-4 gap-[8px]'>
      {items.map((item, index) => (
        <div
          key={index}
          ref={el => {
            if (el) itemsRef.current[index] = el;
          }}
          className='flex flex-col gap-[8px] cursor-pointer group opacity-0 '
        >
          <div className='w-full h-[240px] rounded-lg  overflow-hidden'
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}></div>
          <p className='text-black text-[14px] font-medium'>
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default NavBarProducts;