"use client";
// Import the necessary dependencies
import React, { useState } from "react";
import Image from "next/image";

import Link from "next/link";
import { ToastWithTitle } from "./ToastWithTitle";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";

// Define a helper function for dynamic imports
// Function to import all files matching a pattern in a directory using Webpack's require.context
const importAll = (context: __WebpackModuleApi.RequireContext) =>
	context.keys().map(context);
// Using require.context to import all images in the specified directory
const images: string[] | any[] = importAll(
	require.context("../../public/images/", false, /\.(jpg|png|webp)$/)
);

// 'images' is an array containing all the imported image paths.
// Generate the elements array based on the number of images
const elements = Array.from({ length: images.length }, (_, index) => index);

const descriptions = [
	"A beautiful illustration showcasing nature and wildlife.",
	"An abstract and colorful representation of imagination.",
	"A minimalistic design capturing simplicity and elegance.",
	"A blal bla bla. And i want to say bye bye bye bbey.",
	// Add more descriptions as needed
];

const descriptionsSecond = [
	"Clean, modern and easy-to-navigate design, website provides all the information you need to immerse access in the vibrant atmosphere of club.",
	"German company that produces and markets windows, doors, shutters, pergolas, and more. The website includes a responsive design, product catalog, photo galleries, and a contact form to help customers easily get in touch with the company.",
	"Manufacturer of front doors, windows, and winter gardens. I developed their website, which features a user-friendly interface, stunning visuals, and informative content that showcases the company's products and services.",
	"Website, which is serves as an online hub for the parish's community. The website features a clean and easy-to-navigate design, and includes information about the parish's history, events, and religious services.",
	"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam earum asperiores sit eius! Corrupti, rerum nisi blanditiis voluptate numquam officiis eligendi quae omnis ut consectetur porro laborum sequi iure dicta!",
	// Add more descriptions as needed
];

type Props = {
	elements: Array<any>;
	category: string;
	descriptions: Array<string>;
	linksareavailable: boolean;
};

export default function AccordionServices({
	category,
	linksareavailable,
}: Props) {
	const [isZoomed, setIsZoomed] = useState(false);
	const [zoomedIndex, setZoomedIndex] = useState(-1);

	const handleImageClick = (index: number) => {
		// Check if the clicked image is already zoomed
		if (isZoomed && zoomedIndex === index) {
			// If yes, unzoom the clicked image
			setIsZoomed(false);
			setZoomedIndex(-1);
		} else {
			// If no, zoom the clicked image
			setZoomedIndex(index);
			setIsZoomed(true);
		}
	};

	//RETURN
	return (
		<div className='justify-center text-center text-lg md:text-4xl px-4'>
			<div className='grid grid-cols-1 space-y-1 md:space-y-2 max-w-lg lg:max-w-4xl mx-auto'>
				<Accordion type='multiple' className='space-y-1 md:space-y-2 pt-4'>
					<AccordionItem
						value='item-6'
						className='flex flex-col gap-1 justify-center items-center px-2 bg-primary-light dark:bg-secondary-dark hover:drop-shadow-2xl hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300 rounded-b-xl'>
						<AccordionTrigger>{category}</AccordionTrigger>
						{elements.map((index, key) => (
							<AccordionContent key={key}>
								<div
									key={index}
									className={`grid  gap-4 p-1 hover:drop-shadow-2xl  hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300 rounded-lg${
										isZoomed && zoomedIndex === index
											? "grid-cols-1 lg:grid-cols-1"
											: "grid-cols-1 lg:grid-cols-3"
									}`}>
									<Image
										src={images[index % images.length]} // 'default' is used because of how webpack handles imports
										alt={`Illustration ${index + 1}`}
										width={isZoomed && zoomedIndex === index ? 1100 : 350}
										height={isZoomed && zoomedIndex === index ? 800 : 180}
										onClick={() => handleImageClick(index)}
										className={`rounded-lg shrink-0 hover:scale-95 hover:opacity-80 transition-all ease-out duration-300 ${
											isZoomed && zoomedIndex === index
												? "cursor-zoom-out "
												: "cursor-zoom-in"
										}`}></Image>

									{linksareavailable ? (
										<Link
											href={""}
											rel='noopener noreferrer'
											target='_blank'
											className='text-lg h-16 px-4 py-2 text-transparent items-center justify-center
										bg-clip-text bg-font-light-mode/75 dark:text-font-dark-mode/75
											rounded-full border border-transparent hover:border-secondary-dark dark:hover:border-secondary-light
									shadow-lg shadow-black/10 hover:text-font-light-mode hover:dark:text-font-dark-mode delay-100 transition-all ease-in-out duration-600'>
											<h2 className='flex flex-col gap-2 mx-auto text-lg font-normal '>
												{category} {index + 1}
											</h2>
											LINK
										</Link>
									) : (
										<h2 className='flex flex-col gap-2 text-lg font-normal mx-auto'>
											{category} {index + 1}
											<ToastWithTitle />
										</h2>
									)}

									<p className='text-left'>
										{descriptions[index % descriptions.length]}{" "}
									</p>
								</div>
							</AccordionContent>
						))}
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}
