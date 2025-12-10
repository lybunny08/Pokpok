import React from 'react';

function Products() {
  return (
    <div className='flex flex-col gap-[24px] '>
      <h2>Bestsellers</h2>
      <div className='h-full grid grid-cols-4 gap-[16px] '>
        <div className='h-[350px] w-full rounded-sm bg-[#bababa] '></div>
        <div className='h-[350px] w-full rounded-sm bg-[#bababa] '></div>
        <div className='h-[350px] w-full rounded-sm bg-[#bababa] '></div>
        <div className='h-[350px] w-full rounded-sm bg-[#bababa] '></div>
      </div>
    </div>
  );
}

export default Products;