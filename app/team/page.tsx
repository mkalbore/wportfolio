/////////////// P R O J E C T S // P A G E /////////////////

// Next JS Components
import Head from "next/head";

// Font Settings

// My Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import NewCarousel from "../components/NewCarousel";
import About from "../components/About";

// Wyciete
// flex min-h-screen flex-col items-center space-y-10
export default function Home() {
	return (
		<div className='space-y-4' id='team_page'>
			<Head>
				<title>Quint - Software Developer</title>
				<meta property='quint' content='Quint' key='title' />
			</Head>

			<nav className='sticky top-0 z-50'>
				<Navbar />
			</nav>

			<h1 className='text-2xl lg:text-6xl text-center pb-20'>Our Team</h1>

			<section className='snap-start' id='about'>
				<About />
			</section>

			<section className='snap-center' id='contact'>
				<Contact />
			</section>

			<footer className='snap-center' id='footer'>
				<Footer />
			</footer>
		</div>
	);
}

/////////////// P R O J E C T S // P A G E /////////////////
