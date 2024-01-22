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

const inter = Inter({ subsets: ["latin"] });
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
			<h1 className='flex py-4 text-2xl lg:text-4xl items-center justify-center text-center text-font-light-mode dark:text-font-dark-mode select-none '>
				There is plan to put everything here ( surrely one day 😅 )
			</h1>
			<h1 className='flex flex-col lg:flex-row gap-2 text-2xl lg:text-4xl items-center justify-center text-center text-font-light-mode dark:text-font-dark-mode select-none'>
				Currently, the spreadsheet is on the external app
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
			</div>
			<h1 className='flex justify-center'>Check it</h1>

			<section className='snap-center' id='project'></section>
			<section className='snap-center' id='contact'>
				<Contact />
			</section>
			<footer className='snap-center' id='footer'>
				<Footer></Footer>
			</footer>
		</div>
	);
}
