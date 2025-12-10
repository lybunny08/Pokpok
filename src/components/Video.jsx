import video from '../assets/ppk.mp4';

function HeroVideo() {
	return (
		<div className='h-[120px] w-[200px] flex items-end justify-end overflow-hidden rounded-md border-1 border-white '>
			<video src={video}
				autoPlay
				loop
				muted
				playsInline
				className='w-full h-full object-cover'  alt="" />
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
				<path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
			</svg>
		</div>
	);
}

export default HeroVideo;