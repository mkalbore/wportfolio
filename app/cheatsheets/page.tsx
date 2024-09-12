/////////////// P R O J E C T S // P A G E /////////////////

// Next JS Components
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

// Font Settings
import { Inter } from "next/font/google";

// My Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

import milanote from "../../public/milanote.png";
import CheatSheetSidebar from "../components/CheatSheetSidebar";
import logo from "@/public/logo.png";

// Wyciete
// flex min-h-screen flex-col items-center space-y-10

export default function Home() {
	return (
		<div className='space-y-4'>
			<Head>
				<title>Quint - Software Developer</title>
				<meta property='quint' content='Quint' key='title' />
			</Head>
			<nav className='sticky top-0 z-50'>
				<Navbar />
			</nav>
			{/* --=- --=- --=- --=- --=- to DELETE --=-  --=- --=- --=- --=- --=- --=-  --=-  --=- --=- --=- --=-  --=-  --=- --=- --=- --=-*/}

			{/* --=- --=- --=- --=- --=-  --=-  --=- --=- --=- --=- --=- --=-  --=-  --=- --=- --=- --=-  --=-  --=- --=- --=- --=-*/}

			<section className='grid grid-cols-8 pr-6'>
				<CheatSheetSidebar classNameBonus='pr-6' />
				{/* CONTENTS */}
				{/* */}
				{/* CONTENTS */}
				<div className='flex flex-col lg:flex-row col-span-7 items-center justify-center rounded-2xl gap-2 lg:gap-8 bg-secondary-light dark:bg-secondary-dark border border-secondary-dark dark:border-secondary-light z-10'>
					<div className='w-full h-full bg-opacity-50 flex flex-col items-center justify-center rounded-2xl p-2 lg:p-8 gap-2 lg:gap-6'>
						<div className='col-span-7 flex flex-col items-center justify-center py-10'>
							<h1 className='flex py-4 text-2xl lg:text-4xl items-center justify-center text-center text-font-light-mode dark:text-font-dark-mode select-none '>
								⬅️ Check the list on the right
							</h1>
							<h1 className='flex py-4 text-2xl lg:text-4xl items-center justify-center text-center text-font-light-mode dark:text-font-dark-mode select-none '>
								There is plan to put everything here ( surely one day 😅 )
							</h1>
							<h1 className='flex flex-col lg:flex-row gap-2 text-2xl lg:text-4xl items-center justify-center text-center text-font-light-mode dark:text-font-dark-mode select-none'>
								Also check external app
								<span
									itemRef='https://milanote.com/'
									className='font-normal underline underline-offset-4 select-all hover:underline-offset-4 hover:decoration-teal-500'>
									Milanote.com
								</span>
							</h1>

							<div className='grid grid-cols-1 gap-6 place-items-center items-center justify-center '>
								<Link
									href={"https://app.milanote.com/1K3Ikj1KWQxRdl?p=eiF68EKyW4g"}
									className='group self-center rounded-full p-1 hover:bg-secondary-light dark:hover:bg-secondary-dark duration-600 transition-all duration-700 ease-in-out '
									rel='noopener noreferrer'
									target='_blank'>
									<Image
										src={milanote}
										alt={""}
										width={100}
										height={100}
										className='group-hover:scale-95 cursor-pointer'></Image>
								</Link>
								<Link
									href={
										"https://app.milanote.com/1K3Ikj1KWQxRdl?p=eiF68EKyW4g"
									}>
									<h1 className='flex justify-center hover:scale-95 cursor-pointer'>
										Check it
									</h1>
								</Link>
							</div>
						</div>
					</div>

					<div className='w-full h-full flex flex-col items-center justify-center rounded-2xl p-2 lg:p-8 gap-2 lg:gap-6 bg-secondary-light dark:bg-secondary-dark shadow-2xl z-20'>
						<Image src={logo} alt={""} className='w-fit h-fit'></Image>
					</div>
				</div>
			</section>
			<section className='snap-center' id='project'></section>
			<section className='snap-center' id='contact'>
				<Contact />
			</section>
			<footer className='snap-center z-50' id='footer'>
				<Footer></Footer>
			</footer>
		</div>
	);
}
