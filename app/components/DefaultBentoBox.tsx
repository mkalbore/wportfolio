"use client";
import React, { useState } from "react";
import { Slider } from "../components/ui/slider";

type Props = {
	title: string;
	text: string;
	slider: boolean;
};

export default function DefaultBentoBox({ title, text, slider }: Props) {
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

	return (
		<section className='flex flex-col gap-10 justify-center items-center border border-secondary-dark dark:border-secondary-light rounded-3xl p-14 my-20 max-w-5xl mx-auto'>
			<h1 className={`font-normal text-${getTitleFontSize()}`}>{title}</h1>
			<p className={`text-base md:text-xl xl:text-2xl font-normal`}>{text}</p>
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
		</section>
	);
}
