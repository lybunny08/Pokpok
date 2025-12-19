import React from 'react';
import Newsletters from '../../components/NewsLetters';
import body from '../../../assets/body.webp'
import men from '../../../assets/men.webp'
import apply from '../../../assets/Apply.webp'
import shower from '../../../assets/Wet_portrait.png'
import women from '../../../assets/women.webp'


function Footer() {
  const images = [body, men, apply, shower, women];

  return (
    <div className='flex flex-col gap-[32px] '>
      <div className='flex flex-col items-center justify-center '>
        <span>Follow us</span>
        <span className='text-[24px] '>@Elyanne</span>
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-5 gap-[16px] '>
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`gallery-${idx}`}
            className={`h-[140px] lg:h-[220px] w-full rounded-sm object-cover ${idx >= 4 ? 'hidden md:flex' : ''}`}
          />
        ))}
      </div>

      <Newsletters />
      <div className='flex flex-col lg:flex-row gap-[24px] lg:gap-0 justify-between'>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col'>
            <span className=''>Elyanne</span>
            <span>The next wave of natural skincare.</span>
          </div>
          <span>©2025 Elyanne</span>
        </div>

        <div className='flex flex-col gap-[80px] '>
          <div className='flex flex-col lg:flex-row gap-[32px] pr-[40px] '>
            <div className='flex flex-col gap-[16px]'>
              <span className='uppercase text-[12px] font-medium '>Shop</span>
              <div className='flex flex-col gap-[8px]'>
                <span className='text-[12px] '>All Products</span>
                <span className='text-[12px] '>Body</span>
                <span className='text-[12px] '>Skin</span>
                <span className='text-[12px] '>Hair</span>
                <span className='text-[12px] '>Kits</span>
              </div>
            </div>
            <div className='flex flex-col gap-[16px]'>
              <span className='uppercase text-[12px] font-medium '>Company</span>
              <div className='flex flex-col gap-[8px]'>
                <span className='text-[12px] '>About us</span>
                <span className='text-[12px] '>values</span>
                <span className='text-[12px] '>Ingredients</span>
                <span className='text-[12px] '>Environement</span>
                <span className='text-[12px] '>Journal</span>
              </div>
            </div>
            <div className='flex flex-col gap-[16px]'>
              <span className='uppercase text-[12px] font-medium'>Legal</span>
              <div className='flex flex-col gap-[8px]'>
                <span className='text-[12px] '>Terms of Service</span>
                <span className='text-[12px] '>Return Poilicy</span>
                <span className='text-[12px] '>Privacy Policy</span>
              </div>
            </div>
          </div>
          <div>all different form to pay</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;