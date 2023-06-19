"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher: React.FC = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const handleLightModeClick = () => {
		setTheme("light");
		// console.log("Your current theme is " + theme);
	};

	const handleDarkModeClick = () => {
		setTheme("dark");
		// console.log("Your current theme is " + theme);
	};

	return (
		<div className=''>
			<button className='transition ease-out duration-600 hover:font-normal flex align-baseline'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					className='w-6 h-6 dark:hidden inline-flex hover:fill-secondary-dark hover:scale-105 transition-all ease-in-out duration-600 '
					onClick={handleDarkModeClick}>
					<path d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z' />
				</svg>{" "}
			</button>
			<button className='transition ease-out duration-600 hover:font-normal flex align-baseline'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					className='w-6 h-6 hidden dark:inline-flex hover:fill-secondary-light hover:scale-105  transition-all ease-in-out duration-600 '
					onClick={handleLightModeClick}>
					<path d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z' />
				</svg>
			</button>
		</div>
	);
};
export default ThemeSwitcher;
