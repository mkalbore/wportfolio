//Multiple Photo Component

"use client";

import React, { useState } from "react";
import Image from "next/image";

interface MultiplePhotoCarouselProps {
	photos: Array<any>;
	imageurl: any;
	imageurl2: any;
	// ^ ^ ^ ^ Jeba..... TS nie pozwala ustawić imageurl = type: string z jakegoś powodu WTF ? ..
	alt: string;
	opisZdjecia: string;
	opisalbumu: string;
	tytul: string;
	dodatek: boolean;
	dodatekImageurl: string;
}

export default function MultiplePhotoCarousel({
	photos,
	imageurl,
	imageurl2,
	alt,
	opisZdjecia,
	opisalbumu,
	tytul,
	dodatek,
	dodatekImageurl,
}: MultiplePhotoCarouselProps) {
	const [isZoomed, setIsZoomed] = useState(false);
	const [zoomedIndex, setZoomedIndex] = useState(-1);
	// Funkcja obsługująca kliknięcie na zdjęcie
	const handleImageClick = (index: number) => {
		setIsZoomed(!isZoomed);
		setZoomedIndex(index);
	};
	//////////////////
	// CONTENTFUL ////
	//////////////////

	//

	return (
		<section id='zdjęcia' className='relative z-10'>
			{dodatek && (
				<div className='absolute bottom-4 md:bottom-0 left-60 md:left-24 w-1/4 md:w-full h-2/12 flex justify-end'>
					{/* //Dodatek // Krokodyl */}
					<Image
						src={dodatekImageurl}
						alt={"Krokodyl Fotograf"}
						className='h-full'
					/>
				</div>
			)}
			<div className='default-box p-8'>
				<div className='flex justify-center center pb-10 align-middle items-center content-center '>
					{photos.map((photo, index) => (
						<div key={index} onClick={() => handleImageClick(index)}>
							{isZoomed && (
								<div
									className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50'
									onClick={() => handleImageClick(index)}
								/>
							)}
						</div>
					))}
					{/* Poprzednie wydarzenie */}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						height='48'
						viewBox='0 -960 960 960'
						width='48'
						id={"poprzedni_slide"}
						className='fill-[#000072] opacity-20 hover:opacity-100 hover:scale-105 active:scale-110 transition duration-300 ease-out cursor-pointer select-none'>
						<path d='m481.435-325.391 47.739-47.979-72.565-72.565H635.5v-68.13H456.609l72.565-72.565-47.739-47.979L326.826-480l154.609 154.609Zm-1.402 251.37q-83.468 0-157.541-31.879t-129.393-87.199q-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878ZM480-142.153q141.043 0 239.446-98.752Q817.848-339.656 817.848-480q0-141.043-98.402-239.446-98.403-98.402-239.566-98.402-140.163 0-238.945 98.402-98.783 98.403-98.783 239.566 0 140.163 98.752 238.945Q339.656-142.152 480-142.152ZM480-480Z' />
					</svg>

					<div className='flex-row'>
						<h4 className='text-base opacity-50'>{opisalbumu}</h4>
						<h2 className='text-xl'>{tytul}</h2>
					</div>
					{/* Następne wydarzenie */}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						height='48'
						viewBox='0 -960 960 960'
						width='48'
						id={"nastepny_slide"}
						className='rotate-180 fill-[#000072] opacity-20 hover:opacity-100 hover:scale-105 active:scale-110 transition duration-300 ease-out cursor-pointer select-none'>
						<path d='m481.435-325.391 47.739-47.979-72.565-72.565H635.5v-68.13H456.609l72.565-72.565-47.739-47.979L326.826-480l154.609 154.609Zm-1.402 251.37q-83.468 0-157.541-31.879t-129.393-87.199q-55.32-55.32-87.199-129.36-31.878-74.04-31.878-157.508 0-84.468 31.878-158.541 31.879-74.073 87.161-128.906 55.283-54.832 129.341-86.818 74.057-31.986 157.545-31.986 84.488 0 158.589 31.968 74.102 31.967 128.916 86.768 54.815 54.801 86.79 128.883Q886.218-564.516 886.218-480q0 83.501-31.986 157.57-31.986 74.069-86.818 129.36-54.833 55.291-128.873 87.17-74.04 31.878-158.508 31.878ZM480-142.153q141.043 0 239.446-98.752Q817.848-339.656 817.848-480q0-141.043-98.402-239.446-98.403-98.402-239.566-98.402-140.163 0-238.945 98.402-98.783 98.403-98.783 239.566 0 140.163 98.752 238.945Q339.656-142.152 480-142.152ZM480-480Z' />
					</svg>
				</div>
				<div className='grid grid-rows-3 grid-cols-2 gap-4'>
					{photos.map((photo, index) => (
						<div className='flex-row' key={index}>
							<div
								className={`${
									isZoomed && zoomedIndex === index
										? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
										: ""
								}`}>
								<Image
									id='carouselPhoto'
									src={index % 2 === 0 ? imageurl : imageurl2} // Przykład wyboru zdjęcia w zależności od indeksu
									alt={alt}
									width={isZoomed && zoomedIndex === index ? 1100 : 250}
									height={isZoomed && zoomedIndex === index ? 800 : 180}
									placeholder='empty'
									className={`shrink-0 ${
										isZoomed && zoomedIndex === index
											? "cursor-zoom-out"
											: "cursor-pointer"
									}`}
									onClick={() => handleImageClick(index)}
								/>
							</div>
							<p className='text-base opacity-50'>{opisZdjecia}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
