import React from 'react';

function AboutNavBar() {
	return (
		<div className='grid grid-cols-5 gap-[8px]' >
			<div className='flex flex-col gap-[8px] cursor-pointer hover:opacity-80 transition-opacity'>
				<div className='w-full h-[180px] rounded-lg bg-black/40'></div>
				<p className='text-black'>Notre histoire</p>
			</div>
			<div className='flex flex-col gap-[8px] cursor-pointer hover:opacity-80 transition-opacity'>
				<div className='w-full h-[180px] rounded-lg bg-black/40'></div>
				<p className='text-black'>Manifesto</p>
			</div>
			<div className='flex flex-col gap-[8px] cursor-pointer hover:opacity-80 transition-opacity'>
				<div className='w-full h-[180px] rounded-lg bg-black/40'></div>
				<p className='text-black'>Nos valeurs</p>
			</div>
			<div className='flex flex-col gap-[8px] cursor-pointer hover:opacity-80 transition-opacity'>
				<div className='w-full h-[180px] rounded-lg bg-black/40'></div>
				<p className='text-black'>Nos fondatrices</p>
			</div>
			<div className='flex flex-col gap-[8px] cursor-pointer hover:opacity-80 transition-opacity'>
				<div className='w-full h-[180px] rounded-lg bg-black/40'></div>
				<p className='text-black'>Nos addresses</p>
			</div>
		</div>
	);
}

export default AboutNavBar;