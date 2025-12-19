import React from 'react';
import promotion from '../../../assets/Promotion.png';
import ButtonComponents from '../ui/ButtonComponents';

function Promotion() {
  return (
    <div className="relative w-full h-[80vh] rounded-lg overflow-hidden lg:mb-[40px]">
      {/* Image de fond */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${promotion})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/60 lg:bg-gradient-to-r lg:from-black/60 lg:via-black/40 lg:to-transparent" />
      
      {/* Contenu par-dessus l'overlay */}
      <div className="relative flex items-center px-[16px] lg:px-[52px] w-full h-full text-white z-10">
        <div className='flex flex-col h-full py-[24px] lg:flex-row w-full lg:items-center justify-between'>
          {/* Sur mobile: order-2 (deuxième), Sur desktop: order-1 (premier) */}
          <div className='flex flex-col items-start order-2 lg:order-1'>
            <span className='font-bold text-[32px] lg:text-[40px]'>Summer sale</span>
            <span className='text-[14px] lg:text-[16px] pb-[16px] text-white/70 font-medium max-w-md'>
              50% Off Everything for a limited time only
            </span>
            <ButtonComponents text="Shop sale" />
          </div>
          
          {/* Sur mobile: order-1 (premier), Sur desktop: order-2 (deuxième) */}
          <span className='text-[32px] lg:text-[48px] font-bold text-center order-1 lg:order-2 mb-8 lg:mb-0 drop-shadow-lg'>
            Time's Up
          </span>
        </div>
      </div>
    </div>
  );
}

export default Promotion;