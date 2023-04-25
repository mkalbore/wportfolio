import React from "react";

type Props = {};

export default function Hero({}: Props) {
	return (
		<div className=' w-screen h-screen justify-center text-center px-4 space-y-2 '>
			<h1 className='2xl:text-4xl'>Hero</h1>
			<p className='text-base text-justify mx-auto shrink-0 md:max-w-screen-sm items-center 2xl:text-2xl'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet omnis
				corporis alias, distinctio quod eligendi, sapiente temporibus doloribus
				neque dolorum laudantium, laboriosam praesentium quo nihil. Repellat
				voluptatum sit nam sed! Lorem ipsum dolor sit amet, consectetur
				adipisicing elit. Eveniet omnis corporis alias, distinctio quod
				eligendi, sapiente temporibus doloribus neque dolorum laudantium,
				laboriosam praesentium quo nihil. Repellat voluptatum sit nam sed! Lorem
				ipsum dolor sit amet, consectetur adipisicing elit. Eveniet omnis
				corporis alias, distinctio quod eligendi, sapiente temporibus doloribus
				neque dolorum laudantium, laboriosam praesentium quo nihil. Repellat
				voluptatum sit nam sed! Lorem ipsum dolor sit amet, consectetur
				adipisicing elit. Eveniet omnis corporis alias, distinctio quod
				eligendi, sapiente temporibus doloribus neque dolorum laudantium,
				laboriosam praesentium quo nihil. Repellat voluptatum sit nam sed!{" "}
			</p>
			<h2 className='2xl:text-3xl'>Aditional text</h2>
		</div>
	);
}
