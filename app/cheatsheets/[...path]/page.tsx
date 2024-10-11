/////////////// P R O J E C T S // P A G E /////////////////
"use client";

import React, { useState } from "react";

// Next JS Components
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

// Font Settings
import { Inter } from "next/font/google";

// My Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";

import CheatSheetSidebar from "../../components/CheatSheetSidebar";
import { links } from "@/lib/cheatSheetLinks";
import logo from "@/public/logo.png";

interface Item {
	id: string;
	url: string;
	description?: string;
	screenshot?: string;
}

// component that takes the path as a prop and fetches the corresponding items.
const ItemsList = ({
	path,
	setSelectedItem,
}: {
	path: string;
	setSelectedItem: (item: Item) => void;
}) => {
	// Log the path parameter to verify its value
	// console.log(`Received path: ${path}`);

	// Find the object with the given path
	const link = links.find(link => {
		// console.log(`Checking link path: ${link.path}, looking for: ${path}`);
		return link.path === path;
	});

	// Log the link object to verify it's being found correctly
	// console.log(`Link object for path "${path}":`, link);

	// Extract the items array, provide a default empty array if undefined
	let items = link?.items ?? [
		{ id: "one", url: "one-url", description: "Item One" },
		{ id: "two", url: "two-url", description: "Item Two" },
	];
	//Sorting items in links via alfabetical order
	items = items.sort((a, b) => a.id.localeCompare(b.id));

	// Log the items array to verify its contents
	// console.log(`Items for path "${path}":`, items);

	return (
		<div>
			<ul className='flex flex-col space-y-4'>
				{items.map(item => (
					<Link href={`/cheatsheets/${path}/#${item.id}`} key={item.id}>
						<div
							onClick={() => {
								setSelectedItem(item);
								const selectedItemElement = document.getElementById(item.id);
								if (selectedItemElement) {
									selectedItemElement.scrollIntoView({ behavior: "smooth" });
								}
							}}
							className='text-xl lg:text-3xl dark:bg-secondary-dark bg-primary-light border border-secondary-dark dark:border-secondary-light bg-cover bg-opacity-50 p-1 px-4 lg:px-8 lg:p-4 rounded-2xl transition ease-out duration-600 hover:opacity-70 hover:scale-95 scroll-smooth cursor-pointer shadow-xl'>
							<p>{item.id}</p>
							<p className='text-sm max-w-sm'>
								{item.description ?? "No description available"}
							</p>
						</div>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default function Page({ params }: { params: { path: string[] } }) {
	// Log the params to verify the path being passed
	// console.log(`Page params:`, params);

	const [selectedItem, setSelectedItem] = useState<Item | null>(null);
	const path = params.path[0]; // Extract the first element of the array

	return (
		<div className='space-y-4'>
			<Head>
				<title>Quint - Software Developer</title>
				<meta property='quint' content='Quint' key='title' />
			</Head>
			<nav className='sticky top-0 z-50'>
				<Navbar />
			</nav>

			<section className='grid grid-cols-8 pr-6 pt-20 lg:pt-0'>
				<CheatSheetSidebar classNameBonus='pr-6' />
				{/* CONTENTS */}
				{/* */}
				{/* CONTENTS */}
				<div className='flex flex-col lg:flex-row col-span-7 items-center justify-center rounded-2xl gap-2 lg:gap-8 bg-secondary-light dark:bg-secondary-dark border border-secondary-dark dark:border-secondary-light z-10 '>
					<div
						className='w-full h-full bg-opacity-50 flex flex-col items-center justify-center rounded-2xl p-2 lg:p-8 gap-2 lg:gap-6'
						id={path}>
						<h3 className='text-xl lg:text-3xl'>{path} Items</h3>
						<ItemsList path={path} setSelectedItem={setSelectedItem} />
					</div>

					<div
						id='content-section'
						className='w-full h-full flex flex-col items-center justify-center rounded-2xl p-2 lg:p-8 gap-2 lg:gap-6 bg-secondary-light dark:bg-secondary-dark shadow-2xl z-20 pt-8 lg:pt-2'>
						{selectedItem ? (
							<>
								<h3
									id={selectedItem?.id}
									className='text-xl lg:text-3xl scroll-smooth scroll-mt-36 '>
									{selectedItem.id}
								</h3>
								<Image
									src={selectedItem.screenshot ?? "logo.png"}
									width={800}
									height={600}
									alt={selectedItem.id}
									unoptimized={true}
									className='flex w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-xl'
								/>
								<Link
									href={selectedItem.url}
									scroll={false}
									target='_blank'
									rel='noopener noreferrer'
									className='bg-slate-900 bg-cover bg-opacity-50 p-2 px-8 lg:p-4 rounded-2xl transition ease-out duration-600 hover:opacity-70 hover:scale-95 scroll-smooth cursor-pointer'>
									{selectedItem.id} Link
								</Link>
							</>
						) : (
							<Image src={logo} alt={""} className='w-fit h-fit max-w-xs' />
						)}
					</div>
				</div>
			</section>

			<section className='snap-center' id='contact'>
				<Contact />
			</section>
			<footer className='snap-center z-50' id='footer'>
				<Footer></Footer>
			</footer>
		</div>
	);
}
