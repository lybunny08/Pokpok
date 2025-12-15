import React from 'react';
import Newsletters from '../../components/NewsLetters';

function Footer() {
  return (
    <div className='flex flex-col gap-[32px] '>
      <div className='flex flex-col items-center justify-center '>
        <span>Suivez nous</span>
        <span className='text-[24px] '>@Pokpok</span>
      </div>
      <div className='grid grid-cols-5 gap-[16px] '>
        <div className='h-[180px] w-full rounded-sm bg-[#bababa] '></div>
				<div className='h-[180px] w-full rounded-sm bg-[#bababa] '></div>
				<div className='h-[180px] w-full rounded-sm bg-[#bababa] '></div>
        <div className='h-[180px] w-full rounded-sm bg-[#bababa] '></div>
				<div className='h-[180px] w-full rounded-sm bg-[#bababa] '></div>
      </div>
      <Newsletters />
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col'>
            <span className=''>Pokpok</span>
            <span>The next wave of natural skincare.</span>
          </div>
          <span>©2025 Pokpok</span>
        </div>

        <div className='flex flex-col gap-[80px] '>
          <div className='flex flex-row gap-[32px] pr-[40px] '>
            <div className='flex flex-col gap-[16px]'>
              <span className='uppercase text-[12px] '>Shop</span>
              <div className='flex flex-col gap-[8px]'>
                <span className='text-[12px] '>All Products</span>
                <span className='text-[12px] '>Body</span>
                <span className='text-[12px] '>Skin</span>
                <span className='text-[12px] '>Hair</span>
                <span className='text-[12px] '>Kits</span>
              </div>
            </div>
            <div className='flex flex-col gap-[16px]'>
              <span className='uppercase text-[12px] '>Company</span>
              <div className='flex flex-col gap-[8px]'>
                <span className='text-[12px] '>About us</span>
                <span className='text-[12px] '>values</span>
                <span className='text-[12px] '>Ingredients</span>
                <span className='text-[12px] '>Environement</span>
                <span className='text-[12px] '>Journal</span>
              </div>
            </div>
            <div className='flex flex-col gap-[16px]'>
              <span className='uppercase text-[12px] '>Legal</span>
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