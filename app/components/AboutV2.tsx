import Image from "next/image";
import React from "react";

import quintLogoLight from "../../public/quint_logo_light.svg";
import quintLogoDark from "../../public/quint_logo_dark.svg";

export default function AboutV2() {
	return (
		<section className='flex flex-col gap-10 justify-center items-center rounded-3xl p-14 my-20 max-w-5xl mx-auto'>
			<Image
				src={quintLogoLight}
				className='w-96 transition ease-in-out delay-100 hover:-translate-y-1 hover:drop-shadow-2xl duration-150 hidden dark:flex'
				alt={"Logo of the company Quint"}
			/>

			<Image
				src={quintLogoDark}
				className='w-96 transition ease-in-out delay-100 hover:-translate-y-1 hover:drop-shadow-2xl duration-150 dark:hidden flex'
				alt={"Logo of the company Quint"}
			/>
			<div className='flex flex-col gap-20 justify-center items-center rounded-3xl p-14 my-20 max-w-5xl mx-auto'>
				<h1 className='max-w-xs justify-center items-center flex flex-col align-middle text-center'>
					Welcome to <span className='font-normal text-4xl my-10'>Quint</span>{" "}
					Where Innovation Meets Design Excellence
				</h1>
				<p>
					Established nearly a year ago,{" "}
					<span className='font-normal'>Quint</span> is a dynamic and
					forward-thinking company dedicated to providing cutting-edge solutions
					in the digital realm.{" "}
				</p>
				<p>
					Specializing in software development and creative design, we take
					pride in crafting exceptional{" "}
					<span className='font-normal underline underline-offset-4 select-all hover:underline-offset-[6px] hover:decoration-teal-500'>
						Internet websites
					</span>
					,{" "}
					<span className='font-normal underline underline-offset-4 select-all hover:underline-offset-[6px] hover:decoration-teal-500'>
						logos
					</span>
					,{" "}
					<span className='font-normal underline underline-offset-4 select-all hover:underline-offset-[6px] hover:decoration-teal-500'>
						logotypes
					</span>
					,{" "}
					<span className='font-normal underline underline-offset-4 select-all hover:underline-offset-[6px] hover:decoration-teal-500'>
						advertising banners
					</span>{" "}
					and more.
				</p>
				<p>
					At <span className='font-normal'>Quint</span>, we understand the
					pivotal role that a strong online presence and captivating visuals
					play in today&apos;s competitive business landscape.{" "}
				</p>
				<p>
					Our team of seasoned professionals combines technical expertise with
					artistic flair to deliver bespoke solutions tailored to meet your
					unique needs.
				</p>
			</div>
		</section>
	);
}
