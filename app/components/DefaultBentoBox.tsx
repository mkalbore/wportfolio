import React from "react";

type Props = {
	title: string;
	text: string;
};

export default function DefaultBentoBox({ title, text }: Props) {
	return (
		<section className='flex flex-col gap-10 justify-center items-center border border-secondary-dark dark:border-secondary-light rounded-3xl p-14 my-20 max-w-5xl mx-auto'>
			<h1 className='font-normal'>{title}</h1>
			<p className={`text-base md:text-xl xl:text-2xl font-normal `}>{text}</p>
		</section>
	);
}
