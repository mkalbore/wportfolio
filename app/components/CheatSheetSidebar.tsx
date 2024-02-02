"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	AnimatePresence,
	MotionValue,
	motion,
	useMotionValue,
	useTransform,
} from "framer-motion";

type Props = { classNameBonus: string };

// Cheatsheet links sa statycznie w lib/cheasheetlinks
import { links } from "@/lib/cheatSheetLinks";
import Page from "../cheatsheets/[...path]/page";

export default function CheatSheetSidebar({ classNameBonus }: Props) {
	//Sorting items in links via alfabetical order
	const cheatSheetsSortedLinks = links
		.slice()
		.sort((a, b) => a.name.localeCompare(b.name));

	const linksWithMotionValues = cheatSheetsSortedLinks.map(link => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const x = useMotionValue(0);
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const y = useMotionValue(0);
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const textX = useTransform(x, latest => latest * 0.5);
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const textY = useTransform(y, latest => latest * 0.5);

		return { link, x, y, textX, textY };
	});

	const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

	// == Magnetic Links ====

	const pathname = usePathname();
	const MotionLink = motion(Link);

	const mapRange = (
		inputLower: number,
		inputUpper: number,
		outputLower: number,
		outputUpper: number
	) => {
		const INPUT_RANGE = inputUpper - inputLower;
		const OUTPUT_RANGE = outputUpper - outputLower;

		return (value: number) =>
			outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
	};

	const setTransform = (
		item: HTMLElement & EventTarget,
		event: React.PointerEvent,
		x: MotionValue,
		y: MotionValue
	) => {
		const bounds = item.getBoundingClientRect();
		const relativeX = event.clientX - bounds.left;
		const relativeY = event.clientY - bounds.top;
		const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
		const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);

		// Instead of setting hooks directly here, update the values using `set`
		x.set(xRange * 10);
		y.set(yRange * 10);

		// If you need to log the values, you can do it outside the callback
		// console.log(xRange);
	};

	return (
		<nav className={classNameBonus}>
			{" "}
			<div
				id='cheatsheetsidebar'
				className='dark:bg-primary-dark bg-primary-light border border-secondary-dark dark:border-secondary-light w-full h-[90vh] hidden lg:flex lg:justify-evenly  flex-col text-base items-start px-4 py-4 ml-4 top-10 sticky rounded-2xl z-40'>
				<AnimatePresence>
					{linksWithMotionValues.map(({ link, x, y, textX, textY }) => (
						<motion.ul
							onPointerMove={event => {
								const item = event.currentTarget;
								setTransform(item, event, x, y);
							}}
							key={link.path}
							onPointerLeave={event => {
								x.set(0);
								y.set(0);
							}}
							style={{ x, y }}>
							<MotionLink
								className={cn(
									"font-medium relative rounded-md text-sm py-2 px-4 transition-all duration-500 ease-out hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-primary-dark dark:hover:text-primary-light",
									pathname === link.path
										? "dark:bg-primary-dark bg-primary-light"
										: ""
								)}
								href={`/cheatsheets/${link.path}`}
								scroll={false}>
								<motion.span
									style={{ x: textX, y: textY }}
									className='z-10 relative'>
									{link.name}
								</motion.span>
								{pathname === link.path ? (
									<motion.div
										transition={{ type: "spring" }}
										layoutId='underline'
										className='absolute w-full h-full rounded-md left-0 bottom-0 bg-yellow-200'></motion.div>
								) : null}
							</MotionLink>
						</motion.ul>
					))}
				</AnimatePresence>
			</div>
			{/* //Cheat sheets Burgermenu */}
			<div className='flex lg:hidden w-screen mx-4'>
				{" "}
				<div className='inline-block'>
					<button
						onClick={() =>
							setBurgerMenuOpen(isBurgerMenuOpen => !isBurgerMenuOpen)
						}
						className='relative'>
						{" "}
						<div className='relative flex overflow-hidden items-center justify-center rounded-2xl  w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 hover:ring-4 focus:ring-4 active:ring-4 ring-opacity-30 duration-200 shadow-md'>
							<div className='flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden'>
								<div
									className={`bg-lime-500 h-[2px] w-7 transform transition-all duration-300 origin-left ${
										isBurgerMenuOpen ? "translate-x-10" : "translate-x-0"
									} `}></div>
								<div
									className={`bg-font-light-mode dark:bg-font-dark-mode h-[2px] w-7 rounded transform transition-all duration-300 ${
										isBurgerMenuOpen ? "translate-x-10" : "translate-x-0"
									}  delay-75`}></div>
								<div
									className={`bg-font-light-mode dark:bg-font-dark-mode h-[2px] w-7 transform transition-all duration-300 origin-left ${
										isBurgerMenuOpen ? "translate-x-10" : "translate-x-0"
									}  delay-150`}></div>

								<div
									className={`absolute flex items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${
										isBurgerMenuOpen ? "translate-x-0 w-12" : "w-0"
									}`}>
									<div
										className={`absolute bg-font-light-mode dark:bg-font-dark-mode h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${
											isBurgerMenuOpen ? "rotate-45" : "rotate-0"
										}`}></div>
									<div
										className={`absolute bg-font-light-mode dark:bg-font-dark-mode h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${
											isBurgerMenuOpen ? "-rotate-45" : "rotate-0"
										}`}></div>
								</div>
							</div>
						</div>
					</button>
					<div
						className={`bg-primary-light dark:bg-primary-dark border border-secondary-dark dark:border-secondary-light rounded-md transform  ${
							isBurgerMenuOpen ? "scale-100" : "scale-0"
						} absolute transition duration-150 ease-in-out origin-top text-xl space-y-4 my-4 grid grid-cols-1 align-middle justify-center items-center`}>
						<div
							id='cheatsheetsidebar'
							className='w-40 lg:w-60 h-auto flex lg:justify-evenly flex-col gap-4 text-base items-start px-4 py-4 mx-4 top-10 sticky rounded-2xl z-40'>
							{linksWithMotionValues.map(({ link }) => (
								<Link
									key={link.path}
									className='items-center justify-center text-left text-font-light-mode dark:text-font-dark-mode transition ease-out duration-600 hover:opacity-70 hover:scale-95 scroll-smooth cursor-pointer'
									href={`/cheatsheets/${link.path}`}
									scroll={false}>
									{link.name}
								</Link>
							))}
						</div>
					</div>
				</div>{" "}
			</div>
		</nav>
	);
}
