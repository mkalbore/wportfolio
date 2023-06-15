"use client";

import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import Project, { allItems } from "./Project";

export default function NewCarousel() {
	// items initiation
	const slides = allItems;

	// Logic for Scrollbar//
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const handleGroupClick = (slideIndex: number) => {
		setActiveIndex(slideIndex);
		const selectedItemId = allItems[slideIndex].id;
		const encodedItemId = encodeURIComponent(selectedItemId);
	};

	// Logic for Carousel, changing the slides//
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex: React.SetStateAction<number>) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<div>
			<div className='flex flex-row space-x-6 lg:space-x-12 '>
				<div
					className='min-w-fit mx-auto overscroll-contain'
					key={slides[currentIndex].id}>
					<div className='text-left lg:text-left lg:text-4xl mb-4 mx-auto'>
						<h1 className='font-normal'>{slides[currentIndex].title}</h1>
						<h2 className=''>{slides[currentIndex].type}</h2>
					</div>

					<div className='lg:flex text-center space-y-2 mx-auto items-center justify-center lg:justify-start snap-center scroll-px-12'>
						<div className='rounded-xl shadow-lg border border-[#ffffff, 10] shrink-0 w-[350px] h-fit md:w-[400px] md:h-fit lg:w-[600px] lg:h-fit hover:shadow-[#000000] hover:scale-105 hover:rotate-360 hover:animate-pulse hover:drop-shadow-2xl  transition-all ease-out duration-300'>
							<Link href={slides[currentIndex].link}>
								<Image
									src={slides[currentIndex].src}
									alt={slides[currentIndex].title}
									width={600}
									height={400}
									className='rounded-xl'
								/>
							</Link>
						</div>
						<div className='ml-9 text-left space-y-4 text-lg lg:text-2xl lg:w-1/3'>
							<p>
								<span className='font-normal'>
									{slides[currentIndex].title}
								</span>
								{slides[currentIndex].info}
							</p>

							<div>
								<div>
									<h3 className='font-normal pb-1 lg:pb-4'>
										Used Technologies:
									</h3>
									<div className='dark:fill-primary-light fill-primary-dark'>
										{slides[currentIndex].technologies}
									</div>
								</div>
								<p className='pb-1 lg:pt-4'>
									{slides[currentIndex].description}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* ////////// */}
			{/* MENU */}
			{/* ////////// */}

			{/* Left Arrow */}
			{/* <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
				<div
					className='bg-green-500 w-[10px] rounded-full h-4 group-active:h-6 transition-all duration-300'
					onClick={prevSlide}>
					&larr; sad
				</div>
			</div> */}
			{/* Right Arrow */}
			{/* <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
				<div
					className='bg-green-500 w-[10px] rounded-full h-4 group-active:h-6 transition-all duration-300'
					onClick={nextSlide}>
					&rarr;
				</div>
			</div> */}

			{/* Scroll Bar ON Bottom */}
			<div className='flex top-4 justify-center py-2 select-none'>
				{slides.map((index, slideIndex) => (
					<div
						key={slideIndex}
						onClick={() => {
							handleGroupClick(slideIndex);
							goToSlide(slideIndex);
						}}
						className={`group px-4 cursor-pointer self-end ${
							activeIndex === slideIndex ? "opacity-100" : "opacity-30"
						} hover:opacity-100 transition-all duration-300`}>
						<h3
							className='bg-font-light-mode dark:bg-font-dark-mode w-[4px] rounded-full h-4 group-active:h-6 group-hover:h-6 transition-all duration-300'
							style={{
								height: activeIndex === slideIndex ? "24px" : "16px",
							}}></h3>
					</div>
				))}
			</div>
		</div>
	);
}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
/// OLD CODE ///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
{
	/* <article className='flex flex-row space-x-6 lg:space-x-12 '>
				{allItems.map(allItems => (
					<div
						className='min-w-fit mx-auto overscroll-contain'
						key={allItems.id}>
						<div className='text-left lg:text-left lg:text-4xl mb-4 mx-auto'>
							<h1 className='font-normal'>{allItems.title}</h1>
							<h2 className=''>{allItems.type}</h2>
						</div>

						<div className='lg:flex text-center space-y-2 mx-auto items-center justify-center lg:justify-start snap-center scroll-px-12'>
							<div className='rounded-xl shadow-lg border border-[#ffffff, 10] shrink-0 w-[350px] h-fit md:w-[400px] md:h-fit lg:w-[600px] lg:h-fit hover:shadow-[#000000] hover:scale-105 hover:rotate-360 hover:animate-pulse hover:drop-shadow-2xl  transition-all ease-out duration-300'>
								<Link href={allItems.link}>
									<Image
										src={allItems.src}
										alt={allItems.title}
										width={600}
										height={400}
									/>
								</Link>
							</div>
							<div className='ml-9 text-left space-y-4 text-lg lg:text-2xl lg:w-1/3'>
								<p>
									{" "}
									<span className='font-normal '>{allItems.title}</span>
									{""}
									{allItems.info}
								</p>

								<div>
									<div>
										<h3 className='font-normal pb-1 lg:pb-4 '>
											Used Technologies:
										</h3>
										<div className=''>{allItems.technologies}</div>
									</div>
									<p className='pb-1 lg:pt-4'>{allItems.description}</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</article> */
}
