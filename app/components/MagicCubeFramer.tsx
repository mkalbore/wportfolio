/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect, useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";
import "../globals.css";

import visuals_cube from "../../public/visuals/visuals_cube.png";
import visuals_background from "../../public/visuals/visuals_background_.png";

export default function MagicCubeFramer() {
	const [isUp, setIsUp] = useState(true);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setIsUp(prevIsUp => !prevIsUp);
		}, 4000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	const ref = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "2 1"],
	});
	const scaleProgress = useTransform(
		scrollYProgress,
		[0, 1],
		["-200px", "0px"]
	);

	return (
		<div className='flex flex-col justify-center items-center  mx-auto'>
			<div className='flex justify-center relative max-w-xs lg:max-w-md border border-secondary-dark dark:border-secondary-light rounded-3xl '>
				<motion.div
					className='flex justify-center absolute max-w-md w-72 lg:w-96 h-auto z-40'
					ref={ref}
					style={{
						opacity: scaleProgress,
						y: scaleProgress,
					}}>
					<Image
						src={visuals_cube}
						alt={""}
						className=' w-3/4 drop-shadow-2xl'
					/>
				</motion.div>

				<Image
					src={visuals_background}
					alt={""}
					className='z-10 rounded-3xl '
				/>
			</div>
		</div>
	);
}
