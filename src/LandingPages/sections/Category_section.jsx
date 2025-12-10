import React from 'react';

function CategrySection() {
  return (
    <div className='flex flex-col gap-[24px] '>
			<h4>Shop by Category</h4>
      <div className='grid grid-cols-3 gap-[16px] '>
				<div className='h-[460px] w-full rounded-sm bg-[#bababa] '></div>
				<div className='h-[460px] w-full rounded-sm bg-[#bababa] '></div>
				<div className='h-[460px] w-full rounded-sm bg-[#bababa] '></div>
			</div>
    </div>
  );
}

export default CategrySection;