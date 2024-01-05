"use client";
import React, { useState, useEffect } from "react";

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

	return (
		<div className='flex flex-col justify-center items-center  mx-auto'>
			<div className='flex justify-center relative max-w-md border border-secondary-dark dark:border-secondary-light rounded-3xl '>
				<Image
					src={visuals_cube}
					alt={""}
					className={`absolute z-40 w-3/4 drop-shadow-2xl hover:cursor-pointer active:scale-125 delay-100 transition-colors ease-in-out duration-600  ${
						isUp ? "moveUp" : "moveDown"
					}`}
				/>
				<Image
					src={visuals_background}
					alt={""}
					className='group absolute z-30 rounded-3xl'
				/>
				<Image
					src={visuals_background}
					alt={""}
					className='relative z-20 rounded-3xl blur-xl'
				/>
			</div>
		</div>
	);
}
