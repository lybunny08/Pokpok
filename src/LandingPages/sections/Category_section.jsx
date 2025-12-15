import React from 'react';
import Skin from '../../assets/skin.jpg'
import Hair from '../../assets/hair.avif'
import Body from '../../assets/body.avif'

function CategrySection() {
  return (
    <div className='flex flex-col gap-[24px] '>
			<h4 className='text-[24px]'>Shop by Category</h4>
      <div className='grid grid-cols-3 gap-[16px] '>
				<div className='flex items-end px-[16px] pb-[16px] h-[510px] w-full rounded-lg bg-[#bababa] '
          style={{
            backgroundImage: `url(${Body})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
          <div className='flex py-[8px] items-center justify-center w-full border border-white rounded-full text-white font-medium text-[14px] '>Body</div>
        </div>
				<div className='flex items-end px-[16px] pb-[16px] h-[510px] w-full rounded-lg bg-[#bababa] '
        style={{
            backgroundImage: `url(${Skin})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
          <div className='flex py-[8px] items-center justify-center w-full border border-white rounded-full text-white font-medium text-[14px] '>Skin</div>
        </div>
				<div className='flex items-end px-[16px] pb-[16px] h-[510px] w-full rounded-lg bg-[#bababa] '
        style={{
            backgroundImage: `url(${Hair})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
          <div className='flex py-[8px] items-center justify-center w-full border border-white rounded-full text-white font-medium text-[14px] '>Hair</div>
        </div>
			</div>
    </div>
  );
}

export default CategrySection;