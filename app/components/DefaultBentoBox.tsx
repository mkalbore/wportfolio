"use client";
import React, { useState, useRef } from "react";
import { Slider } from "../components/ui/slider";

import {
	motion,
	useScroll,
	useTransform,
	useMotionValue,
	useVelocity,
	useSpring,
} from "framer-motion";

type Props = {
	title: string;
	text: string;
	slider: boolean;
	pingpong: boolean;
};

export default function DefaultBentoBox({
	title,
	text,
	slider,
	pingpong,
}: Props) {
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

	const fadeRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: fadeRef,
		offset: ["0 1", "1.33 1"],
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

	// PING PONG LoGIC //

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const pink = (saturation: number) => `hsl(327, ${saturation}%, 50%)`;
	// Smooth x and y separately
	const SmoothX = useSpring(x, { damping: 50, stiffness: 400 });
	const SmoothY = useSpring(y, { damping: 50, stiffness: 400 });

	// Create motion values from the smoothed output of x and y
	const VelocityX = useVelocity(SmoothX);
	const VelocityY = useVelocity(SmoothY);

	// Calculate the combined velocity manually

	// Transform the velocity of x and y into scale motion values
	const scale = useTransform([VelocityX, VelocityY], ([vx, vy]) => {
		// check if vx and vy are numbers
		if (typeof vx === "number" && typeof vy === "number") {
			return 1 + Math.sqrt(vx * vx + vy * vy) / 3000;
		} else {
			// return a default value if not
			return 1;
		}
	});
	/**
	 * Transform the velocity of x into a range of background color intensities
	 */
	const backgroundColor = useTransform([VelocityX, VelocityY], ([vx, vy]) => {
		// check if vx and vy are numbers
		if (typeof vx === "number" && typeof vy === "number") {
			const saturation = Math.min(
				100,
				(Math.sqrt(vx * vx + vy * vy) / 2000) * 100
			);
			return pink(saturation);
		} else {
			// return a default value if not
			return pink(0);
		}
	});

	return (
		<section className='flex flex-col justify-center items-center max-w-5xl mx-auto'>
			<motion.div
				className='flex flex-col gap-1 justify-center items-center border border-secondary-dark dark:border-secondary-light rounded-3xl p-14 my-20 max-w-5xl mx-auto mix-blend-multiply'
				ref={fadeRef}
				style={{
					scale: scaleProgress,
					opacity: opacityProgress,
				}}>
				{slider ? (
					<h1 className={`pb-5 font-normal text-${getTitleFontSize()}`}>
						{title}
					</h1>
				) : (
					<h1 className='pb-5 font-normal text-2xl lg:text-3xl '>{title}</h1>
				)}

				<p className={`py-5 text-base md:text-xl xl:text-2xl font-normal`}>
					{text}
				</p>
				{slider && (
					<div className='flex justify-center items-center w-2/4 pt-5'>
						<Slider
							defaultValue={[10]}
							max={100}
							step={1}
							onValueChange={handleSliderChange}
						/>
					</div>
				)}
			</motion.div>
			{pingpong && (
				<motion.div
					drag
					dragElastic={1}
					dragConstraints={fadeRef}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					transition={{ type: "spring", stiffness: 400, damping: 10 }}
					style={{ x, y, scale, backgroundColor }}
					className=' flex flex-col absolute justify-center items-center mx-auto rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 bg-primary-light dark:bg-secondary-dark h-12 w-12 z-10 shadow-lg shadow-pink-500 cursor-pointer mix-blend-multiply'></motion.div>
			)}
		</section>
	);
}
