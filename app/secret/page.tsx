/////////////// P R O J E C T S // P A G E /////////////////

// Next JS Components
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

// Font Settings
import { Inter } from "next/font/google";

// My Components
import Navbar from ".././components/Navbar";
import Footer from ".././components/Footer";
import Contact from ".././components/Contact";
import Project from "../components/Project";
import ScrollBar from "../components/ScrollBar";
import NewCarousel from "../components/NewCarousel";

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
			<h1 className='text-2xl lg:text-6xl text-center text-font-light-mode dark:text-font-dark-mode select-none'>
				Sooo, you want to know a{" "}
				<span className='underline hover:underline-offset-8 hover:font-normal transition-all duration-700 ease-in-out'>
					secret
				</span>{" "}
				<span className=''>
					{" "}
					<Link
						className='rounded-lg px-3 py-1 hover:bg-secondary-light dark:hover:bg-secondary-dark transition ease-out duration-600 hover:font-normal'
						href={"https://app.milanote.com/1K3Ikj1KWQxRdl?p=eiF68EKyW4g"}
						rel='noopener noreferrer'
						target='_blank'>
						?
					</Link>{" "}
				</span>
			</h1>

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
