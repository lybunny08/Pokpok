import React from 'react';

function HeritageNavBar() {
	return (
		<div className='grid grid-cols-3 gap-[8px] '>
			<div className='flex flex-col gap-[8px] cursor-pointer hover:opacity-80 transition-opacity'>
				<div className='w-full h-[180px] rounded-lg bg-black/40'></div>
				<p className='text-black'>Le raphia</p>
			</div><div className='flex flex-col gap-[8px] cursor-pointer hover:opacity-80 transition-opacity'>
				<div className='w-full h-[180px] rounded-lg bg-black/40'></div>
				<p className='text-black'>Magnifier l'heritage</p>
			</div><div className='flex flex-col gap-[8px] cursor-pointer hover:opacity-80 transition-opacity'>
				<div className='w-full h-[180px] rounded-lg bg-black/40'></div>
				<p className='text-black'>Notre savoir-faire</p>
			</div>
		</div>
	);
}

export default HeritageNavBar;