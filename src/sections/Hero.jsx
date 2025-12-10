import Bg from '../assets/Bg.jpeg';
import Pokpok from '../assets/ppk.mp4';
import HeroVideo from '../components/Video';
import Bla from '../assets/bla.png'

function Hero() {
	return (
		<div
			className='flex bg-black h-screen px-[30px] relative'
			style={{
				backgroundImage: `url(${Bla})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}
		>
			{/* <video
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 w-full h-full object-cover z-0"
				src={Pokpok}
			/> */}
			<div
				className="absolute z-10 inset-0 bg-black"
				style={{ opacity: 0.4,}}
			></div>
			<div className='flex flex-row w-full justify-between items-end py-[24px] relative z-20'>
				<div className='flex flex-col gap-[24px] items-start'>
					<h1 className='font-playfair text-[30px] leading-[34px] w-[520px] whitef5 ' style={{ letterSpacing: '0.4px' }}>
						L'élégance prend racine dans l'artisanat. <br />Découvrez des pièces uniques, façonnées à la main au cœur de Madagascar.
					</h1>
					<button className='bg-white gap-[16px] py-[5px] pl-[24px] pr-[5px]'>
						<span className='text-[14px] text-black' style={{ letterSpacing: '0.4px' }}>Découvrir la collection </span>
						<div className='w-[42px] h-[42px] flex items-center justify-center rounded-full bg-black '>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="size-4">
								<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
							</svg>
						</div>
					</button>
				</div>
				{/* <HeroVideo /> */}
			</div>
		</div>
	);
}

export default Hero;