import React from 'react';
import journal1 from '../../assets/journal1.avif'
import journal2 from '../../assets/journal2.png'
import journal3 from '../../assets/journal3.avif'

function Journale() {
  return (
    <div className='flex flex-col gap-[24px] '>
      <h4 className='text-[24px] '>From journale</h4>
      <div className='grid grid-cols-3 gap-[16px] '>
        <div className='flex flex-col gap-[8px]'>
					<div className='h-[300px] w-full rounded-sm bg-[#bababa] bg-center overflow-hidden '>
						<img src={journal1} alt="" />
					</div>
					<div>Skincare</div>
					<span>The Transformative Power of Going All Natural</span>
					<span className='text-[12px] pt-[8px] '>Read more</span>
				</div>
        <div className='flex flex-col gap-[8px]'>
					<div className='h-[300px] w-full rounded-sm bg-[#bababa] bg-center overflow-hidden '>
						<img src={journal2} alt="" />
					</div>
					<div>Skincare</div>
					<span>Simple Steps for an All-Natural Skincare Routine</span>
					<span className='text-[12px] pt-[8px] '>Read more</span>
				</div>
        <div className='flex flex-col gap-[8px]'>
					<div className='h-[300px] w-full rounded-sm bg-[#bababa] bg-center overflow-hidden '>
						<img src={journal3} alt="" />
					</div>
					<div>Skincare</div>
					<span>The Power of Plant-Based Ingredients in Skincare</span>
					<span className='text-[12px] pt-[8px] '>Read more</span>
				</div>
      </div>
    </div>
  );
}

export default Journale;