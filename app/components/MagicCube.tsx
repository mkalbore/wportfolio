"use client";
import React, { useState, useEffect, useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";
import "../globals.css";

import visuals_cube from "../../public/visuals/visuals_cube.png";
import visuals_background from "../../public/visuals/visuals_background_.png";

export default function MagicCube() {
	const [isUp, setIsUp] = useState(true);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setIsUp(prevIsUp => !prevIsUp);
		}, 4000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	const fadeRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: fadeRef,
		offset: ["0 1", "1.33 1"],
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

	return (
		<>
			<motion.div
				className='flex flex-col justify-center items-center mx-auto max-w-xs lg:max-w-md'
				ref={fadeRef}
				style={{
					scale: scaleProgress,
					opacity: opacityProgress,
				}}>
				<div className='flex justify-center relative max-w-xs lg:max-w-md border border-secondary-dark dark:border-secondary-light rounded-3xl '>
					<Image
						src={visuals_cube}
						alt={""}
						placeholder="blur"
						className={`absolute z-40 w-3/4 drop-shadow-2xl   ${
							isUp ? "moveUp" : "moveDown"
						}`}
					/>
					<Image
						src={visuals_background}
						alt={""}
						placeholder="blur"
						className='group absolute z-30 rounded-3xl'
					/>
					<Image
						src={visuals_background}
						alt={""}
						placeholder="blur"
						className='relative z-20 rounded-3xl blur-xl'
					/>
				</div>
			</motion.div>
		</>
	);
}
