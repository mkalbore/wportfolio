

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

const inter = Inter({ subsets: ["latin"] });
// Wyciete
// flex min-h-screen flex-col items-center space-y-10
export default function Home() {
	return (
		<div className='overflow-y-scroll snap-y snap-mandatory space-y-4'>
			<Head>
				<title>Quint - Software Developer</title>
				<meta property='quint' content='Quint' key='title' />
			</Head>

			<nav className='sticky top-0 z-50'>
				<Navbar />
			</nav>

			<h1 className='text-6xl text-center text-[#fffcbf]'>Pojects Page</h1>

			<section>
				<Project />
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
