import React from "react";

import Image from "next/image";

export default function AnimatedScrollingBar() {
	return (
		<section className='relative flex overflow-x-hidden py-4 bg-[rgb(217,217,217)] border-font-light-mode dark:border-font-dark-mode border-[1px]  dark:text-font-dark-mode text-font-light-mode dark:bg-secondary-dark'>
			<div className='flex justify-evenly w-full animate-marquee text-sm md:text-lg xl:text-xl 3xl:text-2xl'>
				<p className='hidden 2xl:flex drop-shadow-lg'>Responsive Design</p>
				<p className='hidden 2xl:flex drop-shadow-lg'>
					Cross-Browser Compatibility
				</p>
				<p className='hidden  2xl:flex drop-shadow-lg'>
					Web Performance Optimization
				</p>
				<p className='hidden xl:flex drop-shadow-lg'>UI</p>
				<p className='hidden xl:flex drop-shadow-lg'>UX</p>
				<p className='hidden lg:flex drop-shadow-lg'>Graphic Design</p>
				<p className='hidden lg:flex drop-shadow-lg'>Prototyping</p>
				<p className='hidden lg:flex drop-shadow-lg'>Aesthetics</p>
				<p className='drop-shadow-lg'>Visual Hierarchy</p>
				<p className='drop-shadow-lg'>Creativity</p>
				<p className='drop-shadow-lg'>Usability</p>
			</div>

			<div className='absolute flex justify-evenly w-full animate-marquee2 text-sm md:text-lg xl:text-xl 3xl:text-2xl'>
				<p className='hidden 2xl:flex drop-shadow-lg'>Responsive Design</p>
				<p className='hidden 2xl:flex drop-shadow-lg'>
					Cross-Browser Compatibility
				</p>
				<p className='hidden 2xl:flex drop-shadow-lg'>
					Web Performance Optimization
				</p>
				<p className='hidden xl:flex drop-shadow-lg'>UI</p>
				<p className='hidden xl:flex drop-shadow-lg'>UX</p>
				<p className='hidden lg:flex drop-shadow-lg'>Graphic Design</p>
				<p className='hidden lg:flex drop-shadow-lg'>Prototyping</p>
				<p className='hidden lg:flex drop-shadow-lg'>Aesthetics</p>
				<p className='drop-shadow-lg'>Visual Hierarchy</p>
				<p className='drop-shadow-lg'>Creativity</p>
				<p className='drop-shadow-lg'>Usability</p>
			</div>
		</section>
	);
}
