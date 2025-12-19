import React from 'react';
import promotion from '../../../assets/Promotion.png'
import ButtonComponents from '../ui/ButtonComponents';

function Promotion() {
  return (
    <div
      className="flex items-center px-[52px] lg:mb-[40px] w-full h-[80vh] rounded-lg text-white "
      style={{
        backgroundImage: `url(${promotion})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className='flex flex-row w-full items-center justify-between'>
				<div className='flex flex-col items-start'>
					<span className='font-bold text-[32px] '>Summer sale</span>
					<span className='text-[14px] pb-[16px] text-white/50 font-medium '>50% Off Everything for a limited time only</span>
					<ButtonComponents text="Shop sale" />
				</div>
				<span className='text-[32px] font-medium '>Time's Up</span>
			</div>
    </div>
  );
}

export default Promotion;