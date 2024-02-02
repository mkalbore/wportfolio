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

/////////////////////
import man from "../../public/manipulation/man.png";
import man_manipulation_1 from "../../public/manipulation/man_mani_1.jpeg";
import man_manipulation_2 from "../../public/manipulation/man_mani_2.jpeg";
import man_manipulation_3 from "../../public/manipulation/man_mani_3.jpeg";
import man_manipulation_4 from "../../public/manipulation/man_mani_4.png";
import man_manipulation_5 from "../../public/manipulation/man_mani_5.jpeg";

import woman from "../../public/manipulation/woman.png";
import woman_manipulation_1 from "../../public/manipulation/woman_mani_1.jpeg";
import woman_manipulation_2 from "../../public/manipulation/woman_mani_2.jpeg";
import woman_manipulation_3 from "../../public/manipulation/woman_mani_3.jpeg";

import image1 from "../../public/matthew-fassnacht-gLtxrJ8UQIY-unsplash.jpg";

/////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ItemClass.t
export class ItemClass {
	items: {
		title: string;
		description: string;
		photoSrc: string | any;
		link: string;
	}[];

	constructor() {
		this.items = [
			{
				title: "Unchanged Photo of Man",
				description: "Typical Photo of a Man",
				photoSrc: man,
				link: "",
			},
			{
				title: "Photomanipulation example",
				description: "Photomanipulation example of a Man",
				photoSrc: man_manipulation_1,
				link: "",
			},
			{
				title: "Photomanipulation example",
				description: "Photomanipulation example of a Man",
				photoSrc: man_manipulation_2,
				link: "",
			},
			{
				title: "Photomanipulation example",
				description: "Photomanipulation example of a Man",
				photoSrc: man_manipulation_3,
				link: "",
			},
			{
				title: "Photomanipulation example",
				description: "Photomanipulation example of a Man",
				photoSrc: man_manipulation_4,
				link: "",
			},
			{
				title: "Photomanipulation example",
				description: "Photomanipulation example of a Man",
				photoSrc: man_manipulation_5,
				link: "",
			},
			{
				title: "Unchanged Photo of Woman",
				description: "Typical Photo of a Woman",
				photoSrc: woman,
				link: "",
			},
			{
				title: "Photomanipulation example",
				description: "Photomanipulation example of a Woman",
				photoSrc: woman_manipulation_1,
				link: "",
			},
			{
				title: "Photomanipulation example",
				description: "Photomanipulation example of a Woman",
				photoSrc: woman_manipulation_2,
				link: "",
			},
			{
				title: "Photomanipulation example",
				description: "Photomanipulation example of a Woman",
				photoSrc: woman_manipulation_3,
				link: "",
			},

			// Add more items as needed
		];
	}
}

const itemClassInstance = new ItemClass();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type Props = {
	category: string;
	linksareavailable: boolean;
};

export default function AccordionServicesPhotoManipulation({
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
		<div
			className='justify-center text-center text-lg md:text-4xl px-4'
			id='photo_manipulations'>
			<div className='grid grid-cols-1 space-y-1 md:space-y-2 max-w-lg lg:max-w-5xl mx-auto'>
				<Accordion type='multiple' className='space-y-1 md:space-y-2 pt-2'>
					<AccordionItem
						value='item-6'
						className='flex flex-col gap-1 justify-center items-center px-2 bg-primary-light dark:bg-secondary-dark hover:drop-shadow-2xl hover:bg-third-dark/50 hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300'>
						<AccordionTrigger>{category}</AccordionTrigger>
						{itemClassInstance.items.map((item, index) => (
							<AccordionContent key={1}>
								<div
									key={index}
									className={`grid  gap-4 p-1 hover:drop-shadow-2xl  hover:bg-third-dark/50 hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300 rounded-lg${
										isZoomed && zoomedIndex === index
											? "grid-cols-1 lg:grid-cols-1 p-4"
											: "grid-cols-1 lg:grid-cols-3"
									}`}>
									<Image
										src={item.photoSrc} // 'default' is used because of how webpack handles imports
										alt={`Photo for ${item.title}`}
										width={isZoomed && zoomedIndex === index ? 1100 : 350}
										height={isZoomed && zoomedIndex === index ? 800 : 180}
										onClick={() => handleImageClick(index)}
										placeholder="blur"
										className={`rounded-lg shrink-0 hover:scale-95 hover:opacity-80 transition-all ease-out duration-300 ${
											isZoomed && zoomedIndex === index
												? "cursor-zoom-out "
												: "cursor-zoom-in"
										}`}></Image>

									{linksareavailable ? (
										<Link
											href={item.link}
											rel='noopener noreferrer'
											target='_blank'
											className='text-lg h-16 px-4 py-2 text-transparent items-center justify-center
										bg-clip-text bg-font-light-mode/75 dark:text-font-dark-mode/75
											rounded-full border border-transparent hover:border-secondary-dark dark:hover:border-secondary-light
									shadow-lg shadow-black/10 hover:text-font-light-mode hover:dark:text-font-dark-mode delay-100 transition-all ease-in-out duration-600'>
											<h2 className='flex flex-col gap-2 mx-auto text-lg font-normal '>
												{item.title}
											</h2>
											LINK
										</Link>
									) : (
										<h2 className='flex flex-col gap-2 text-lg font-normal mx-auto'>
											{item.title}
											{/* <ToastWithTitle /> */}
										</h2>
									)}

									<p className='text-left'>{item.description} </p>
								</div>
							</AccordionContent>
						))}
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}
