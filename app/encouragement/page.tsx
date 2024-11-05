// Next JS Components
import Head from "next/head";

import React from "react";
import Encouragement from "../components/Fun/Encouragement";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function Home() {
	return (
		<div className='space-y-4' id='encouragement_page'>
			<Head>
				<title>Quint - Software Developer</title>
				<meta property='quint' content='Quint' key='title' />
			</Head>

			<div className='h-screen w-screen flex flex-col justify-center items-center '>
				<Encouragement />
			</div>
			<footer className='snap-center' id='footer'>
				<Footer />
			</footer>
		</div>
	);
}
