import React from 'react';

function NewProduct() {
  return (
    <div className='flex flex-row ml-[-45px] gap-[90px] items-center  '>
      <div className='w-[650px] h-[500px] bg-[#bababa] rounded-lg  '></div>
			<div className='flex flex-col gap-[8px] '>
          <div className='h-[350px] w-[250px] rounded-sm bg-[#bababa] '></div>
          <span>Eye Serum</span>
          <span className='uppercase text-[12px] '>Body</span>
        </div>
    </div>
  );
}

export default NewProduct;