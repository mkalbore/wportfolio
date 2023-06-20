"use client";

import { useState } from "react";

import Image from "next/image";

const TestComponent = () => {
	const [hoveredStates, setHoveredStates] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
	]);

	const handleMouseEnter = (index: number) => {
		const updatedStates = [...hoveredStates];
		updatedStates[index] = true;
		setHoveredStates(updatedStates);
	};

	const handleMouseLeave = (index: number) => {
		const updatedStates = [...hoveredStates];
		updatedStates[index] = false;
		setHoveredStates(updatedStates);
	};

	const codingVideo = "coding-video-compressed.mp4";
	const illustrationVideo = "illustration-video.mp4";

	return (
		<div className='grid grid-cols-1 space-y-1 md:space-y-2 max-w-lg lg:max-w-4xl mx-auto text-lg md:text-4xl px-4'>
			<div
				className={`relative rounded-t-xl ${
					hoveredStates[0]
						? "video-bg transition-all ease-out duration-700"
						: "bg-primary-light dark:bg-secondary-dark"
				}`}
				onMouseEnter={() => handleMouseEnter(0)}
				onMouseLeave={() => handleMouseLeave(0)}>
				{hoveredStates[0] ? (
					<video
						height={104}
						width={104}
						loop
						autoPlay
						className='items-center content-center flex mx-auto transition-all ease-out duration-300'>
						<source src={illustrationVideo} type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				) : null}

				<h2 className='px-10 md:px-40 py-6 md:py-8 hover:scale-105 hover:drop-shadow-2xl transition-all ease-out duration-300 justify-center items-center flex text-center'>
					UI / UX Design
				</h2>
			</div>

			<div
				className={`relative ${
					hoveredStates[1]
						? "video-bg transition-all ease-out duration-700"
						: "bg-primary-light dark:bg-secondary-dark"
				}`}
				onMouseEnter={() => handleMouseEnter(1)}
				onMouseLeave={() => handleMouseLeave(1)}>
				{hoveredStates[1] ? (
					<video
						height={104}
						width={104}
						loop
						autoPlay
						className='items-center content-center flex mx-auto transition-all ease-out duration-300'>
						<source src={codingVideo} type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				) : null}

				<h2 className='px-10 md:px-40 py-6 md:py-8 hover:scale-105 hover:drop-shadow-2xl transition-all ease-out duration-300 justify-center items-center flex text-center'>
					Logo Branding
				</h2>
			</div>

			<div
				className={`relative ${
					hoveredStates[2]
						? "video-bg transition-all ease-out duration-700"
						: "bg-primary-light dark:bg-secondary-dark"
				}`}
				onMouseEnter={() => handleMouseEnter(2)}
				onMouseLeave={() => handleMouseLeave(2)}>
				{hoveredStates[2] ? (
					<video
						height={104}
						width={104}
						loop
						autoPlay
						className='items-center content-center flex mx-auto transition-all ease-out duration-300'>
						<source src={illustrationVideo} type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				) : null}

				<h2 className='px-10 md:px-40 py-6 md:py-8 hover:scale-105 hover:drop-shadow-2xl transition-all ease-out duration-300 justify-center items-center flex text-center'>
					Photo Manipulation
				</h2>
			</div>

			<div
				className={`relative ${
					hoveredStates[3]
						? "video-bg transition-all ease-out duration-700"
						: "bg-primary-light dark:bg-secondary-dark"
				}`}
				onMouseEnter={() => handleMouseEnter(3)}
				onMouseLeave={() => handleMouseLeave(3)}>
				{hoveredStates[3] ? (
					<video
						height={104}
						width={104}
						loop
						autoPlay
						className='items-center content-center flex mx-auto transition-all ease-out duration-300'>
						<source src={codingVideo} type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				) : null}

				<h2 className='px-10 md:px-40 py-6 md:py-8 hover:scale-105 hover:drop-shadow-2xl transition-all ease-out duration-300 justify-center items-center flex text-center'>
					Website Design
				</h2>
			</div>

			<div
				className={`relative ${
					hoveredStates[4]
						? "video-bg transition-all ease-out duration-700"
						: "bg-primary-light dark:bg-secondary-dark"
				}`}
				onMouseEnter={() => handleMouseEnter(4)}
				onMouseLeave={() => handleMouseLeave(4)}>
				{hoveredStates[4] ? (
					<video
						height={104}
						width={104}
						loop
						autoPlay
						className='items-center content-center flex mx-auto transition-all ease-out duration-300'>
						<source src={illustrationVideo} type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				) : null}

				<h2 className='px-10 md:px-40 py-6 md:py-8 hover:scale-105 hover:drop-shadow-2xl transition-all ease-out duration-300 justify-center items-center flex text-center'>
					Illustration
				</h2>
			</div>

			<div
				className={`relative ${
					hoveredStates[5]
						? "video-bg transition-all ease-out duration-700"
						: "bg-primary-light dark:bg-secondary-dark"
				}`}
				onMouseEnter={() => handleMouseEnter(5)}
				onMouseLeave={() => handleMouseLeave(5)}>
				{hoveredStates[5] ? (
					<video
						height={104}
						width={104}
						loop
						autoPlay
						className='items-center content-center flex mx-auto transition-all ease-out duration-300'>
						<source src={codingVideo} type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				) : null}

				<h2 className='px-10 md:px-40 py-6 md:py-8 hover:scale-105 hover:drop-shadow-2xl transition-all ease-out duration-300 justify-center items-center flex text-center'>
					Branding
				</h2>
			</div>

			<div
				className={`relative rounded-b-xl ${
					hoveredStates[6]
						? "video-bg transition-all ease-out duration-700"
						: "bg-primary-light dark:bg-secondary-dark "
				}`}
				onMouseEnter={() => handleMouseEnter(6)}
				onMouseLeave={() => handleMouseLeave(6)}>
				{hoveredStates[6] ? (
					<video
						height={104}
						width={104}
						loop
						autoPlay
						className='items-center content-center flex mx-auto transition-all ease-out duration-300'>
						<source src={codingVideo} type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				) : null}

				<h2 className='px-10 md:px-40 py-6 md:py-8 hover:scale-105 hover:drop-shadow-2xl transition-all ease-out duration-300 justify-center items-center flex text-center'>
					Software Development
				</h2>
			</div>
		</div>
	);
};

export default TestComponent;
