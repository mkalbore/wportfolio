"use client";

import React from "react";
import TypingAnimator from "react-typing-animator";

function Typing() {
	const textArray = [
		"From code to design, I make your website shine!",
		"Pixels and code, I make your website explode!",
		"Don't be a dope, let me build your website and you'll have hope!",
		"With code and sass, your website will be a blast!",
		"No need to fear, I'll make your website clear!",
		"With my design and code, your website will be a treasure trove!",
		"Let's not be tardy, I'll make your website party!",
		"From start to end, I'll make your website a true friend!",
		"Your website will be so fly, your competitors will say bye-bye!",
		"Let me code your site with glee, and watch your online presence go wee!",
	];

	function ScreenSizeCheck() {
		if (window.screen.width >= 1024 && window.screen.height >= 768) {
			// Resolution is 1024x768 or above
			return (
				<TypingAnimator
					textArray={textArray}
					cursorColor='#ffffff'
					textColor='#ffffff'
					fontSize='48px'
					typingSpeed={60}
					delaySpeed={2000}
				/>
			);
		} else {
			return (
				<TypingAnimator
					textArray={textArray}
					cursorColor='#ffffff'
					textColor='#ffffff'
					fontSize='18px'
					typingSpeed={60}
					delaySpeed={2000}
				/>
			);
		}
	}

	return ScreenSizeCheck();
}

export default Typing;
