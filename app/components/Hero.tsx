///////// H E R O // C O M P O N E N T ///////
import React from "react";
import Typing from "./Typing";

type Props = {};

export default function Hero({}: Props) {
	return (
		<div className=' w-screen h-screen justify-center text-center px-4 space-y-2 '>
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
			<div className='py-10'>
				<Typing />
			clear</div>
		</div>
	);
}
