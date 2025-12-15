import React from 'react';

function Testimonials() {
    return (
      <div className='flex flex-col gap-[32px] justify-center items-center'>
        <span className='text-[32px]'>Testimonials</span>
        <div className='flex flex-row gap-[100px] '>
          <div className='w-[400px] bg-[#bababa] h-[250px] rounded-lg '></div>
          <div className='w-[400px] bg-[#bababa] h-[250px] rounded-lg '></div>
          <div className='w-[400px] bg-[#bababa] h-[250px] rounded-lg '></div>
        </div>
      </div>
    );
}

export default Testimonials;