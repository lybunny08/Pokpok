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
    </div>
  );
}

export default Footer;