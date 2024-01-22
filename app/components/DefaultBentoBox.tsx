"use client";
import React, { useState, useRef } from "react";
import { Slider } from "../components/ui/slider";
import { Switch } from "../components/ui/switch";

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
	lightBulb: boolean;
};

export default function DefaultBentoBox({
	title,
	text,
	slider,
	pingpong,
	lightBulb,
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

	const pink = (saturation: number) => `hsl(357, ${saturation}%, 50%)`;
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

	/** LIGHT BULB Logic
	 */
	const [isLightBulbOn, setLightBulbOn] = useState(false);
	const bulbRef = useRef<HTMLDivElement>(null);

	const lightBulbVariants = {
		on: {
			opacity: 1,
			filter:
				"blur(.5px) drop-shadow(0px 0px 20px rgb(230 199 46 / 1)) drop-shadow(0px 0px 30px rgb(230 199 146 / 1)) drop-shadow(0px 0px 30px rgb(230 199 46 / 1))",
			transition: {
				ease: "easeIn",
				delay: 0.2,
				duration: 1.2,
			},
		},
		off: {
			opacity: 0.2,
			filter:
				"blur(.0px) drop-shadow(0px 0px 20px rgb(230 199 46 / 0)) drop-shadow(0px 0px 30px rgb(230 199 146 / 0)) drop-shadow(0px 0px 30px rgb(230 199 46 / 0))",
		},
	};

	/** RETURN*/
	return (
		<section className='flex flex-col justify-center items-center max-w-5xl mx-auto'>
			<motion.div
				className='flex flex-col gap-1 justify-center items-center border border-secondary-dark dark:border-secondary-light rounded-3xl p-14 my-20 max-w-5xl mx-auto mix-blend-multiply '
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

				<p
					className={`py-5 text-base md:text-xl xl:text-2xl font-normal drop-shadow-2xl`}>
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
					className=' flex flex-col absolute justify-center items-center mx-auto rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 bg-primary-light dark:bg-secondary-dark h-10 w-10 lg:h-14 lg:w-14 z-10 shadow-lg shadow-pink-500 cursor-pointer mix-blend-multiply text-xs'>
					Grab
				</motion.div>
			)}

			{lightBulb && (
				<div className='flex flex-col justify-center items-center gap-2'>
					<motion.div
						animate={isLightBulbOn ? "on" : "off"}
						variants={lightBulbVariants}
						className={`relative  drop-shadow-xl drop-shadow-yellow-600/50 gap-4`}>
						<svg
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
							className={`dark:stroke-font-dark-mode stroke-font-light-mode stroke-[.75] fill-none active:drop-shadow-xl w-24 lg:w-32`}>
							<path
								d='M14.5 19.5H9.5M14.5 19.5C14.5 18.7865 14.5 18.4297 14.5381 18.193C14.6609 17.4296 14.6824 17.3815 15.1692 16.7807C15.3201 16.5945 15.8805 16.0927 17.0012 15.0892C18.5349 13.7159 19.5 11.7206 19.5 9.5C19.5 8.62341 19.3496 7.78195 19.0732 7M14.5 19.5C14.5 20.4346 14.5 20.9019 14.299 21.25C14.1674 21.478 13.978 21.6674 13.75 21.799C13.4019 22 12.9346 22 12 22C11.0654 22 10.5981 22 10.25 21.799C10.022 21.6674 9.83261 21.478 9.70096 21.25C9.5 20.9019 9.5 20.4346 9.5 19.5M9.5 19.5C9.5 18.7865 9.5 18.4297 9.46192 18.193C9.3391 17.4296 9.31762 17.3815 8.83082 16.7807C8.67987 16.5945 8.11945 16.0927 6.99876 15.0892C5.4651 13.7159 4.5 11.7206 4.5 9.5C4.5 5.35786 7.85786 2 12 2C13.3637 2 14.6423 2.36394 15.7442 3'
								stroke-linecap='round'
							/>
							<path
								d='M12.7857 8.5L10.6428 11.5H13.6428L11.5 14.5'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</motion.div>
					<button
						onClick={() => setLightBulbOn(isLightBulbOn => !isLightBulbOn)}
						className='dark:stroke-font-dark-mode stroke-font-light-mode cursor-pointer active:scale-95 active:drop-shadow-xl'>
						<Switch />
					</button>
				</div>
			)}
		</section>
	);
}
