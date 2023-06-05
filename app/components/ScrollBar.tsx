import React from "react";

import { allItems } from "./Project";
import Link from "next/link";

type Props = {};

export default function ScrollBar({}: Props) {
	return (
		<div className='flex flex-col p-4 space-x-4 w-full mx-auto justify-center items-center'>
			<div className='flex space-x-4'>
				{" "}
				<div className='group/item mx-4 self-end '>
					<div className='bg-white opacity-30 h-4 w-[4px] rounded-full group/hover:opacity-100 active:h-6 transition-all duration-300'></div>
				</div>
				<div className='self-end bg-white opacity-30 h-4 w-[4px] rounded-full hover:opacity-100 active:h-6 transition-all duration-300'></div>
				<div className='self-end bg-white opacity-30 h-4 w-[4px] rounded-full hover:opacity-100 active:h-6 transition-all duration-300'></div>
				<div className='self-end bg-white opacity-30 h-4 w-[4px] rounded-full hover:opacity-100 active:h-6 transition-all duration-300'></div>
				<div className='self-end bg-white opacity-30 h-4 w-[4px] rounded-full hover:opacity-100 active:h-6 transition-all duration-300'></div>
			</div>
			<h3 className='text-lg'>--- ScrollBar ---</h3>
		</div>
	);
}
