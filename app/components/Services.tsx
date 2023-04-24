import React from "react";

type Props = {};

export default function Services({}: Props) {
	return (
		<div className='w-screen h-screen justify-center text-center mb-20 '>
			<h1 className='mb-8'>
				What we serve for <span className='font-normal'>Your Business</span>
			</h1>
			<div className='grid grid-cols-1 mx-8 md:mx-14 space-y-1 md:space-y-2'>
				<h2 className='px-10 md:px-40 py-6 md:py-8  bg-[#444444] rounded-t-xl'>
					UI / UX Design
				</h2>
				<h2 className='px-10 md:px-40 py-6 md:py-8  bg-[#444444]'>
					Logo Branding
				</h2>
				<h2 className='px-10 md:px-40 py-6 md:py-8  bg-[#444444]'>
					Photo Manipulation
				</h2>
				<h2 className='px-10 md:px-40 py-6 md:py-8  bg-[#444444]'>
					Website Design
				</h2>
				<h2 className='px-10 md:px-40 py-6 md:py-8  bg-[#444444]'>
					Illustration
				</h2>
				<h2 className='px-10 md:px-40 py-6 md:py-8  bg-[#444444]'>Branding</h2>
				<h2 className='px-10 md:px-40 py-6 md:py-8  bg-[#444444] rounded-b-xl'>
					Software Development
				</h2>
			</div>
		</div>
	);
}
