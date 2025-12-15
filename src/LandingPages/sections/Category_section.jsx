import React from 'react';

function CategrySection() {
  return (
    <div className='flex flex-col gap-[24px] '>
			<h4 className='text-[24px]'>Shop by Category</h4>
      <div className='grid grid-cols-3 gap-[16px] '>
				<div className='flex items-end px-[16px] pb-[16px] h-[460px] w-full rounded-lg bg-[#bababa] '>
          <div className='flex py-[8px] items-center justify-center w-full border border-black rounded-xl text-[14px] '>Body</div>
        </div>
				<div className='flex items-end px-[16px] pb-[16px] h-[460px] w-full rounded-lg bg-[#bababa] '>
          <div className='flex py-[8px] items-center justify-center w-full border border-black rounded-xl text-[14px] '>Skin</div>
        </div>
				<div className='flex items-end px-[16px] pb-[16px] h-[460px] w-full rounded-lg bg-[#bababa] '>
          <div className='flex py-[8px] items-center justify-center w-full border border-black rounded-xl text-[14px] '>Hair</div>
        </div>
			</div>
    </div>
  );
}

export default CategrySection;