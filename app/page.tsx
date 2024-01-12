////////////////////////////////////////// H O M E // P A G E //////////////////////////////

import Head from "next/head";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import Hero from "./components/Hero";
import Work from "./components/Work";
import TestComponent from "./components/TestComponent";
import MultiplePhotoCarousel from "./components/MultiplePhotoCarousel";
import AccordionServices from "./components/AccordionServices";
import DefaultBentoBox from "./components/DefaultBentoBox";
import AboutV2 from "./components/AboutV2";

//////////////////////////////////////////////////////////////////////////////////////////

import illu_1 from "../public/illu1.jpg";
import illu_2 from "../public/illu2.png";

import AccordionServicesIllustrations from "./components/AccordionServicesIllustrations";
import AccordionServicesWebsites from "./components/AccordionServicesWebsites";
import AccordionServicesUiUx from "./components/AccordionServicesUiUx";
import AccordionServicesSoftwareDevelopment from "./components/AccordionServicesSoftwareDevelopment";
import AccordionServicesPhotoManipulation from "./components/AccordionServicesPhotoManipulation";
import AccordionServicesLogo from "./components/AccordionServicesLogo";
import MagicCube from "./components/MagicCube";
import TestComnponent from "./components/ui/testcomnponent";
import Certifications from "./components/Certifications";
import AnimatedScrollingBar from "./components/AnimatedScrollingBar";
import MagicCubeFramer from "./components/MagicCubeFramer";

// Wyciete
// flex min-h-screen flex-col items-center space-y-10
export default function Home() {
	return (
		<main className='relative space-y-4'>
			<Head>
				<title>Quint - Software Developer</title>
				<meta property='quint' content='Quint' key='title' />
			</Head>
			<nav className='sticky top-0 z-50' id='navbar'>
				<Navbar />
			</nav>

			<section className='snap-center' id='hero'>
				<Hero />
				{/* <TestComnponent /> */}
				<AnimatedScrollingBar />
			</section>

			<section className='snap-center' id='about'>
				<AboutV2 />
				<DefaultBentoBox
					key={""}
					title='Innovative Software Solutions'
					text='Our experienced developers are committed to creating powerful and intuitive software that elevates your business operations to new heights. From user-friendly interfaces to robust backend systems, we strive for excellence in every line of code.'
					slider={false}
					pingpong={false}
				/>

				<DefaultBentoBox
					key={""}
					title='Striking Visual Identity'
					text="Your brand is more than just a logo it's an experience. Our design team excels in crafting compelling logos, logotypes, and advertising banners that not only reflect your brand essence but also leave a lasting impression on your audience."
					slider={false}
					pingpong={false}
				/>
				<MagicCube />

				{/* Kosztka ruszajaca sie gora dol po scrollu */}
				{/* <MagicCubeFramer /> */}

				<DefaultBentoBox
					key={""}
					title='Responsive Websites'
					text={`In the era of digital dominance, your website is often the first interaction a potential customer has with your brand. Quint specializes in creating responsive and visually appealing websites that engage visitors and drive conversions.`}
					slider={true}
					pingpong={false}
				/>

				<DefaultBentoBox
					key={""}
					title='Tailored Solutions'
					text="We understand that every business is unique. That's why we take a personalized approach to every project, ensuring that our solutions align seamlessly with your goals, values, and target audience."
					slider={false}
					pingpong={true}
				/>
			</section>
			<section className='snap-center' id='projects'>
				{/* Check some of my Work section */}
				{/* <Work /> */}
			</section>

			<section className='snap-center' id='services'>
				<h1 className='justify-center text-center mb-8 text-lg md:text-4xl px-4'>
					What
					<span className='font-light'>&nbsp;have we created&nbsp;</span>
					<br />
					<span className='font-light'>and&nbsp;</span>
					<br />
					what we can create
					<br />
					for&nbsp;
					<span className='font-normal hover:underline hover:text-red-900 transition-all duration-150 ease-in-out cursor-not-allowed select-none'>
						YOU
					</span>
				</h1>

				<AccordionServicesWebsites
					category={"Website"}
					linksareavailable={true}
				/>
				<AccordionServicesUiUx category={"UI / UX"} linksareavailable={false} />
				<AccordionServicesSoftwareDevelopment
					category={"Software Development"}
					linksareavailable={false}
				/>
				<AccordionServicesLogo
					category={"Logo / Brandig"}
					linksareavailable={false}
				/>
				<AccordionServicesPhotoManipulation
					category={"Photo Manipulation"}
					linksareavailable={false}
				/>
				<AccordionServicesIllustrations
					category={"Illustrations"}
					linksareavailable={false}
				/>

				{/* Becouse of const elements = Array.from({ length: images.length }, (_, index) => index); you dont need to spefcify element to show them in " elements={[]} " */}
				{/* <TestComponent /> */}
			</section>

			<section className='snap-center' id='certification'>
				<Certifications title='' text='Certificates ' slider={false} />
			</section>

			<section className='snap-center' id='contact'>
				<Contact />
			</section>

			<footer className='snap-center' id='footer'>
				<Footer />
			</footer>
		</main>
	);
}

//////////////////////////////// H O M E // P A G E ///////////////////////////////////
