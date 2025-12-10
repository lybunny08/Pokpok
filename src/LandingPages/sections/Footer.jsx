import React from 'react';

function Footer() {
  return (
    <div className='flex flex-col gap-[32px] '>
      <div className='flex flex-col items-center justify-center '>
        <span>Follows us</span>
        <span className='text-[24px] '>@Pokpok</span>
      </div>
      <div className='grid grid-cols-6 gap-[16px] '>
        <div className='h-[100px] w-full rounded-sm bg-[#bababa] '></div>
				<div className='h-[100px] w-full rounded-sm bg-[#bababa] '></div>
				<div className='h-[100px] w-full rounded-sm bg-[#bababa] '></div>
        <div className='h-[100px] w-full rounded-sm bg-[#bababa] '></div>
				<div className='h-[100px] w-full rounded-sm bg-[#bababa] '></div>
				<div className='h-[100px] w-full rounded-sm bg-[#bababa] '></div>
      </div>
    </div>
  );
}

export default Footer;