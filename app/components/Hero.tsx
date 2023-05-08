///////// H E R O // C O M P O N E N T ///////
import React from "react";
import Typing from "./Typing";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
	return (
		<div className=' w-screen h-screen justify-center text-center pt-2 md:pt-4 xl:pt-8 2xl:pt-20 px-4 space-y-2 2xl:space-y-8'>
			<div className='md:text-6xl 2xl:text-8xl font-thin pt-4 text-white/75 space-y-2 2xl:space-y-8'>
				<div className=''>
					<span className='hover:text-white hover:px-1 hover:text-2xl md:hover:text-5xl 2xl:hover:text-7xl md:active:text-transparent transition-all ease-out duration-500'>
						M
					</span>
					<span className='hover:text-white hover:px-1 hover:text-2xl md:hover:text-5xl 2xl:hover:text-7xl md:active:text-transparent transition-all ease-out duration-500'>
						A
					</span>
					<span className='hover:text-white hover:px-1 hover:text-2xl md:hover:text-5xl 2xl:hover:text-7xl md:active:text-transparent transition-all ease-out duration-500'>
						K
					</span>
					<span className='hover:text-white hover:px-1 hover:text-2xl md:hover:text-5xl 2xl:hover:text-7xl md:active:text-transparent transition-all ease-out duration-500'>
						E
					</span>
					<span className='hover:text-white hover:px-1 hover:text-2xl md:hover:text-5xl 2xl:hover:text-7xl md:active:text-transparent transition-all ease-out duration-500'>
						S{" "}
					</span>

					<span className='hover:text-white hover:px-1 hover:text-2xl md:hover:text-5xl 2xl:hover:text-7xl md:active:text-transparent transition-all ease-out duration-500'>
						Y
					</span>
					<span className='hover:text-white hover:px-1 hover:text-2xl md:hover:text-5xl 2xl:hover:text-7xl md:active:text-transparent transition-all ease-out duration-500'>
						O
					</span>
					<span className='hover:text-white hover:px-1 hover:text-2xl md:hover:text-5xl 2xl:hover:text-7xl md:active:text-transparent transition-all ease-out duration-500'>
						U
					</span>
					<span className='hover:text-white hover:px-1 hover:text-2xl md:hover:text-5xl 2xl:hover:text-7xl md:active:text-transparent transition-all ease-out duration-500'>
						R{" "}
					</span>

					<span className='hover:text-white hover:px-1 hover:text-2xl md:hover:text-5xl 2xl:hover:text-7xl md:active:text-transparent transition-all ease-out duration-500'>
						I
					</span>
					<span className='hover:text-white hover:px-1 hover:text-2xl md:hover:text-5xl 2xl:hover:text-7xl md:active:text-transparent transition-all ease-out duration-500'>
						D
					</span>
					<span className='hover:text-white hover:px-1 hover:text-2xl md:hover:text-5xl 2xl:hover:text-7xl md:active:text-transparent transition-all ease-out duration-500'>
						E
					</span>
					<span className='hover:text-white hover:px-1 hover:text-2xl md:hover:text-5xl 2xl:hover:text-7xl md:active:text-transparent transition-all ease-out duration-500'>
						A
					</span>
					<span className='hover:text-white hover:px-1 hover:text-2xl md:hover:text-5xl 2xl:hover:text-7xl md:active:text-transparent transition-all ease-out duration-500'>
						S{" "}
					</span>
				</div>

				<Link
					className='flex px-10 pb-4 pt-2 text-transparent items-center justify-center w-max mx-auto
					md:text-5xl 2xl:text-7xl
						bg-clip-text bg-white/75
							rounded-full border border-transparent hover:border-[rgba(255,255,255,0.2)]
					shadow-lg shadow-black/10 hover:bg-white delay-100 transition-all ease-in-out duration-600'
					href={"#contact"}>
					COME
				</Link>
				<div className='flex items-center justify-center'>
					<div className='group '>
						<h1 className='group-hover:pl-48 group-hover:lg:pl-72 group-hover:xl:pl-[600px] transition-all ease-out duration-[2000ms]'>
							<span className='hover:text-white hover:px-1 transition-all ease-out duration-500'>
								T
							</span>
							<span className='hover:text-white hover:px-1 transition-all ease-out duration-500'>
								R
							</span>
						</h1>
					</div>
					<div className='group '>
						<h1 className='group-hover:pr-48 group-hover:lg:pr-72 group-hover:xl:pr-[600px] transition-all ease-out duration-[2000ms]'>
							<span className='hover:text-white hover:px-1 transition-all ease-out duration-500'>
								U
							</span>
							<span className='hover:text-white hover:px-1 transition-all ease-out duration-500'>
								E
							</span>
						</h1>
					</div>
				</div>
			</div>

			{/* <p className='text-base text-justify mx-auto shrink-0 md:max-w-screen-sm items-center 2xl:text-2xl'>
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
			</p> */}
			<div className='py-10'>
				<Typing />
			</div>
		</div>
	);
}
