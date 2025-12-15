import React from 'react';

function Journale() {
  return (
    <div className='flex flex-col gap-[24px] '>
      <h4 className='text-[24px] '>From journale</h4>
      <div className='grid grid-cols-3 gap-[16px] '>
        <div className='h-[460px] w-full rounded-sm bg-[#bababa] '></div>
        <div className='h-[460px] w-full rounded-sm bg-[#bababa] '></div>
        <div className='h-[460px] w-full rounded-sm bg-[#bababa] '></div>
      </div>
    </div>
  );
}

export default Journale;