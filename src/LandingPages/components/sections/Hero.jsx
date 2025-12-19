import Herobg from '../../../assets/herobg1.png'
import ButtonComponents from '../ui/ButtonComponents';
function Hero() {
	return (
		<div
			className='flex bg-black h-screen mx-[-30px] px-[30px] relative'
			style={{
				backgroundImage: `url(${Herobg})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div
				className="absolute z-10 inset-0 bg-black"
				style={{ opacity: 0.4,}}
			></div>
			<div className='flex flex-row w-full justify-between items-end py-[40px] relative z-20'>
				<div className='flex flex-col gap-[24px] items-start'>
					<div className='space-y-2'>
						<span className='text-white'>Mosturezed & Protect</span>
						<h1 className='text-[40px] leading-[50px] w-[520px] whitef5 ' style={{ letterSpacing: '0.4px' }}>
							Introduction the <br /> new Body Lotion
						</h1>
					</div>
					<ButtonComponents text="Shop now" />
				</div>
			</div>
		</div>
	);
}

export default Hero;