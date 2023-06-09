"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { join } from "path";

import { allItems } from "./Project";
type Props = {};

export default function ScrollBar({}: Props) {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const handleGroupClick = (index: number) => {
		setActiveIndex(index);
		const selectedItemId = allItems[index].id;
		const encodedItemId = encodeURIComponent(selectedItemId);
	};

	return (
		<div className='flex flex-col p-4 space-x-4 w-full mx-auto justify-center items-center select-none'>
			<div className='flex space-x-4'>
				{" "}
				{allItems.map((item, index) => (
					<div
						key={item.id}
						className={`group px-4 cursor-pointer self-end ${
							activeIndex === index ? "opacity-100" : "opacity-30"
						} hover:opacity-100 transition-all duration-300`}
						onClick={() => handleGroupClick(index)}>
						<h3
							className='bg-white w-[4px] rounded-full group-active:h-6 transition-all duration-300'
							style={{ height: activeIndex === index ? "24px" : "16px" }}></h3>
					</div>
				))}
			</div>
			<h3 className='text-lg'>--- ScrollBar ---</h3>
		</div>
	);
}
