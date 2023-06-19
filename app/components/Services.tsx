import React from "react";

type Props = {};

export default function Services({}: Props) {
	return (
		<div className='h-screen justify-center text-center mb-20 text-lg md:text-4xl px-4'>
			<h1 className='mb-8'>
				What i serve for <span className='font-normal'>Your Business</span>
			</h1>
			<div className='grid grid-cols-1 space-y-1 md:space-y-2 max-w-lg lg:max-w-4xl mx-auto'>
				<h2 className='px-10 md:px-40 py-6 md:py-8  bg-primary-light dark:bg-secondary-dark rounded-t-xl hover:scale-105  hover:drop-shadow-2xl hover:bg-[rgba(68,68,68,0.5)] transition-all ease-out duration-300'>
					UI / UX Design
				</h2>
				<h2 className='px-10 md:px-40 py-6 md:py-8  bg-primary-light dark:bg-secondary-dark hover:scale-105  hover:drop-shadow-2xl hover:bg-[rgba(68,68,68,0.5)] transition-all ease-out duration-300'>
					Logo Branding
				</h2>
				<h2 className='px-10 md:px-40 py-6 md:py-8  bg-primary-light dark:bg-secondary-dark hover:scale-105  hover:drop-shadow-2xl hover:bg-[rgba(68,68,68,0.5)] transition-all ease-out duration-300'>
					Photo Manipulation
				</h2>
				<h2 className='px-10 md:px-40 py-6 md:py-8  bg-primary-light dark:bg-secondary-dark hover:scale-105  hover:drop-shadow-2xl hover:bg-[rgba(68,68,68,0.5)] transition-all ease-out duration-300'>
					Website Design
				</h2>
				<h2 className='px-10 md:px-40 py-6 md:py-8  bg-primary-light dark:bg-secondary-dark hover:scale-105  hover:drop-shadow-2xl hover:bg-[rgba(68,68,68,0.5)] transition-all ease-out duration-300'>
					Illustration
				</h2>
				<h2 className='px-10 md:px-40 py-6 md:py-8  bg-primary-light dark:bg-secondary-dark hover:scale-105  hover:drop-shadow-2xl hover:bg-[rgba(68,68,68,0.5)] transition-all ease-out duration-300'>
					Branding
				</h2>
				<h2 className='px-10 md:px-40 py-6 md:py-8  bg-primary-light dark:bg-secondary-dark rounded-b-xl hover:scale-105  hover:drop-shadow-2xl hover:bg-[rgba(68,68,68,0.5)] transition-all ease-out duration-300'>
					Software Development
				</h2>
			</div>
		</div>
	);
}
