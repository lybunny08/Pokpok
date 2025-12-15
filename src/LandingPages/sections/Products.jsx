import React from 'react';

function Products() {
  return (
    <div className='flex flex-col gap-[24px] '>
      <h2 className='text-[24px]'>Featured</h2>
      <div className='h-full grid grid-cols-4 gap-[16px] '>
        <div className='flex flex-col gap-[8px] '>
          <div className='h-[350px] w-full rounded-sm bg-[#bababa] '></div>
          <span>Hair hydrator</span>
          <span className='uppercase text-[12px] '>Hair</span>
        </div>
        <div className='flex flex-col gap-[8px] '>
          <div className='h-[350px] w-full rounded-sm bg-[#bababa] '></div>
          <span>Eye Serum</span>
          <span className='uppercase text-[12px] '>Body</span>
        </div>
        <div className='flex flex-col gap-[8px] '>
          <div className='h-[350px] w-full rounded-sm bg-[#bababa] '></div>
          <span>Face Toner</span>
          <span className='uppercase text-[12px] '>Skin</span>
        </div>
        <div className='flex flex-col gap-[8px] '>
          <div className='h-[350px] w-full rounded-sm bg-[#bababa] '></div>
          <span>Eye Repair</span>
          <span className='uppercase text-[12px] '>Body</span>
        </div>
      </div>
    </div>
  );
}

export default Products;