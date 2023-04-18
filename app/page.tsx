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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className='flex min-h-screen flex-col items-center justify-between p-24'>
			<Head>
				<title>Quint - Software Developer</title>
				<meta property='quint' content='Quint' key='title' />
			</Head>

			<nav>
				<Navbar></Navbar>
			</nav>

			<section>
				<Hero />
			</section>

			<section>
				<About />
			</section>

			<section>
				<Projects />
			</section>

			<section>
				<Services />
			</section>

			<section>
				<Contact />
			</section>

			<footer>
				<Footer></Footer>
			</footer>
		</div>
	);
}
