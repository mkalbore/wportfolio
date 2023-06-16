////////////////////////////////////////// H O M E // P A G E //////////////////////////////

import Image from "next/image";

import Head from "next/head";
import Link from "next/link";

import { Inter } from "next/font/google";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import Hero from "./components/Hero";
import Work from "./components/Work";

const inter = Inter({ subsets: ["latin"] });
//

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

			<section className='snap-center' id='hero'>
				<Hero />
			</section>

			<section className='snap-start' id='about'>
				<About />
			</section>

			<section className='snap-center' id='projects'>
				<Work />
			</section>

			<section className='snap-center' id='services'>
				<Services />
			</section>

			<section className='snap-center' id='contact'>
				<Contact />
			</section>

			<footer className='snap-center' id='footer'>
				<Footer></Footer>
			</footer>
		</div>
	);
}

//////////////////////////////// H O M E // P A G E ///////////////////////////////////
