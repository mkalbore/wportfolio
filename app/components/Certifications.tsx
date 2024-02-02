"use client";
import React, { useState, useRef } from "react";
import { Slider } from "../components/ui/slider";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";

import certResponsiveWebDesign from "../../public/certifications/RespnsiveWebDesign.png";

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
				title: "Certifications",
				description: "Responsive Web Design",
				photoSrc: certResponsiveWebDesign,
				link: "",
			},

			// Add more items as needed
		];
	}
}

const itemClassInstance = new ItemClass();

type Props = {
	title: string;
	text: string;
	slider: boolean;
};

export default function Certifications({ title, text, slider }: Props) {
	const [sliderValue, setSliderValue] = useState<number[]>([33]);

	const handleSliderChange = (newValue: number[]) => {
		setSliderValue(newValue);
	};

	const getTitleFontSize = () => {
		// Customize the logic based on your requirements
		if (sliderValue[0] > 90) {
			return "4xl";
		} else {
			if (sliderValue[0] > 75) {
				return "4xl";
			} else {
				if (sliderValue[0] > 50) {
					return "2xl";
				} else {
					if (sliderValue[0] > 25) {
						return "xl";
					} else {
						return "lg";
					}
				}
			}
		}
	};

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

	const fadeRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: fadeRef,
		offset: ["0 1", "1.33 1"],
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

	return (
		<motion.section
			ref={fadeRef}
			style={{
				scale: scaleProgress,
				opacity: opacityProgress,
			}}>
			{" "}
			{itemClassInstance.items.map((item, index) => (
				<div
					key={index}
					className={`flex flex-col gap-10 justify-center items-center border border-secondary-dark dark:border-secondary-light rounded-3xl p-14 my-20 max-w-5xl mx-auto ${
						isZoomed && zoomedIndex === index
							? "grid-cols-1 lg:grid-cols-1"
							: "grid-cols-1 lg:grid-cols-3"
					}`}>
					<h1 className={`font-normal text-${getTitleFontSize()}`}>
						{item.title}
					</h1>
					<p className={`text-base md:text-xl xl:text-2xl font-normal`}>
						{item.description}
					</p>
					<Image
						src={certResponsiveWebDesign}
						alt={""}
						key={index}
						width={isZoomed && zoomedIndex === index ? 1100 : 350}
						height={isZoomed && zoomedIndex === index ? 800 : 180}
						onClick={() => handleImageClick(index)}
						placeholder="blur"
						className={`rounded-lg shrink-0 hover:scale-95 hover:opacity-80 transition-all ease-out duration-300 ${
							isZoomed && zoomedIndex === index
								? "cursor-zoom-out "
								: "cursor-zoom-in"
						}`}></Image>
					{slider && (
						<div className='flex justify-center items-center w-2/4 '>
							<Slider
								defaultValue={[10]}
								max={100}
								step={1}
								onValueChange={handleSliderChange}
							/>
						</div>
					)}
				</div>
			))}
		</motion.section>
	);
}
