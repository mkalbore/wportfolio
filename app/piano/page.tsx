// Next JS Components
import Head from "next/head";

import React from "react";
import Piano from "../components/Fun/Piano";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function Home() {
	return (
		<div className='space-y-4' id='piano_page'>
			<Head>
				<title>Quint - Software Developer</title>
				<meta property='quint' content='Quint' key='title' />
			</Head>

			<nav className='sticky top-0 z-50'>
				<Navbar />
			</nav>

			<div className='h-screen w-screen flex flex-col justify-center items-center '>
				<h1 className='text-2xl lg:text-6xl text-center'>Piano App</h1>
				<Piano />
			</div>
			<footer className='snap-center' id='footer'>
				<Footer />
			</footer>
		</div>
	);
}
