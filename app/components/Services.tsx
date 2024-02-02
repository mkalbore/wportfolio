"use client";
import React, { useState } from "react";
import Image from "next/image";

import design1 from "../../public/design-1.webp";

import besethome from "../../public/BesetHome.png";
import boiskomentalne from "../../public/BoiskoMentalne.png";
import ftw from "../../public/ftw_1.png";
import oknopast from "../../public/oknopast_1.png";
import trix from "../../public/trix.png";
import parafia from "../../public/parafialubrzawebsite.png";
import asp from "../../public/asp.png";
import software from "../../public/software.jpg";

import illu_1 from "../../public/accordionimages/illu1.jpg";
import illu_2 from "../../public/accordionimages/illu2.png";
import illu_3 from "../../public/accordionimages/illu3.webp";
import illu_4 from "../../public/accordionimages/illu4.webp";

import website4 from "../../public/website4.png";
import website5 from "../../public/website5.png";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../components/ui/accordion";
import Link from "next/link";

type Props = {};

export default function Services({}: Props) {
	const [isZoomed, setIsZoomed] = useState(false);
	const [zoomedIndex, setZoomedIndex] = useState(-1);

	const handleImageClick = () => {
		setIsZoomed(!isZoomed);
	};

	return (
		<div className='justify-center text-center mb-20 text-lg md:text-4xl px-4'>
			<h1 className='mb-8'>
				What
				<span className='font-light'>&nbsp;have we created&nbsp;</span>
				<br />
				<span className='font-light'>and&nbsp;</span>
				<br />
				what we can create for&nbsp;
				<br />
				<span className='font-normal hover:underline hover:text-red-900 transition-all duration-150 ease-in-out cursor-not-allowed select-none'>
					YOU
				</span>
			</h1>

			<div className='grid grid-cols-1 space-y-1 md:space-y-2 max-w-lg lg:max-w-4xl mx-auto'>
				<Accordion type='multiple' className='space-y-1 md:space-y-2 pt-4'>
					<AccordionItem
						value='item-1'
						className='flex flex-col gap-1 justify-center items-center px-2 bg-primary-light dark:bg-secondary-dark hover:drop-shadow-2xl hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300 rounded-t-xl'>
						<AccordionTrigger>Website</AccordionTrigger>
						<AccordionContent>
							<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-1 hover:drop-shadow-2xl  hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300 rounded-lg'>
								<Link href={"/"}>
									<Image
										src={besethome}
										alt={"Beset Exclusive Club"}
										className='rounded-lg hover:scale-95 hover:opacity-80 transition-all ease-out duration-300'></Image>
								</Link>

								<h2 className='text-lg font-normal'>Beset Exclusive Club</h2>
								<p className='text-left'>
									Clean, modern and easy-to-navigate design, website provides
									all the information you need to immerse access in the vibrant
									atmosphere of club.
								</p>
							</div>{" "}
						</AccordionContent>

						<AccordionContent>
							<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-1 hover:drop-shadow-2xl  hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300 rounded-lg'>
								<Link
									href={"http://ftwpasternak.de/"}
									rel='noopener noreferrer'
									target='_blank'>
									<Image
										src={ftw}
										alt={"ftwpasternak.de"}
										className='rounded-lg hover:scale-95 hover:opacity-80 transition-all ease-out duration-300'></Image>
								</Link>

								<h2 className='text-lg font-normal'>FTW - Pasternak</h2>
								<p className='text-left'>
									German company that produces and markets windows, doors,
									shutters, pergolas, and more. The website includes a
									responsive design, product catalog, photo galleries, and a
									contact form to help customers easily get in touch with the
									company.
								</p>
							</div>{" "}
						</AccordionContent>

						<AccordionContent>
							<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-1 hover:drop-shadow-2xl  hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300 rounded-lg'>
								<Link
									href={"https://oknopast.pl/"}
									rel='noopener noreferrer'
									target='_blank'>
									<Image
										src={oknopast}
										alt={"oknopast.pl"}
										className='rounded-lg hover:scale-95 hover:opacity-80 transition-all ease-out duration-300'></Image>
								</Link>

								<h2 className='text-lg font-normal'>Oknopast</h2>
								<p className='text-left'>
									Manufacturer of front doors, windows, and winter gardens.
									<br />
									<br />I developed their website, which features a
									user-friendly interface, stunning visuals, and informative
									content that showcases the company&apos;s products and
									services.
								</p>
							</div>{" "}
						</AccordionContent>

						<AccordionContent>
							<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-1 hover:drop-shadow-2xl  hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300 rounded-lg'>
								<Link href={""} rel='noopener noreferrer' target='_blank'>
									<Image
										src={parafia}
										alt={"parafia lubrza"}
										className='rounded-lg hover:scale-95 hover:opacity-80 transition-all ease-out duration-300'></Image>
								</Link>

								<h2 className='text-lg font-normal'>Parafia Lubrza</h2>
								<p className='text-left'>
									Website, which is serves as an online hub for the
									parish&apos;s community.
									<br />
									<br />
									The website features a clean and easy-to-navigate design, and
									includes information about the parish&apos;s history, events,
									and religious services.
								</p>
							</div>{" "}
						</AccordionContent>
						<AccordionContent>
							<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-1 hover:drop-shadow-2xl  hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300 rounded-lg'>
								<Link href={""}>
									<Image
										src={website4}
										alt={"Website 4"}
										className='rounded-lg hover:scale-95 hover:opacity-80 transition-all ease-out duration-300'></Image>
								</Link>

								<h2 className='text-lg font-normal'>Website 4</h2>
								<p className='text-left'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Veniam earum asperiores sit eius! Corrupti, rerum nisi
									blanditiis voluptate numquam officiis eligendi quae omnis ut
									consectetur porro laborum sequi iure dicta!
								</p>
							</div>{" "}
						</AccordionContent>
						<AccordionContent>
							<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-1 hover:drop-shadow-2xl  hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300 rounded-lg'>
								<Link href={""}>
									<Image
										src={website5}
										alt={"Website 5"}
										className='rounded-lg hover:scale-95 hover:opacity-80 transition-all ease-out duration-300'></Image>
								</Link>

								<h2 className='text-lg font-normal'>Website 5</h2>
								<p className='text-left'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Veniam earum asperiores sit eius! Corrupti, rerum nisi
									blanditiis voluptate numquam officiis eligendi quae omnis ut
									consectetur porro laborum sequi iure dicta!
								</p>
							</div>{" "}
						</AccordionContent>
					</AccordionItem>
					<AccordionItem
						value='item-2'
						className='flex flex-col gap-1 justify-center items-center px-2 bg-primary-light dark:bg-secondary-dark hover:drop-shadow-2xl hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300'>
						<AccordionTrigger>UI / UX </AccordionTrigger>
						<AccordionContent>
							<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-1 hover:drop-shadow-2xl  hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300 rounded-lg'>
								<Link href={"/"}>
									<Image
										src={design1}
										alt={""}
										className='rounded-lg hover:scale-95 hover:opacity-80 transition-all ease-out duration-300'></Image>
								</Link>

								<h2 className='text-lg font-normal'>Design 1</h2>
								<p className='text-left'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Veniam earum asperiores sit eius! Corrupti, rerum nisi
									blanditiis voluptate numquam officiis eligendi quae omnis ut
									consectetur porro laborum sequi iure dicta!
								</p>
							</div>{" "}
						</AccordionContent>
						<AccordionContent>
							<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-1 hover:drop-shadow-2xl hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300 rounded-lg'>
								<Link href={"/"}>
									<Image
										src={design1}
										alt={""}
										className='rounded-lg hover:scale-95 transition-all ease-out duration-300'></Image>
								</Link>
								<h2 className='text-lg font-normal'>Design 2</h2>
								<p className='text-left'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Veniam earum asperiores sit eius! Corrupti, rerum nisi
									blanditiis voluptate numquam officiis eligendi quae omnis ut
									consectetur porro laborum sequi iure dicta!
								</p>
							</div>{" "}
						</AccordionContent>
						<AccordionContent>
							<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-1 hover:drop-shadow-2xl hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300 rounded-lg'>
								<Link href={"/"}>
									<Image
										src={design1}
										alt={""}
										className='rounded-lg hover:scale-95 transition-all ease-out duration-300'></Image>
								</Link>
								<h2 className='text-lg font-normal'>Design 3</h2>
								<p className='text-left'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Veniam earum asperiores sit eius! Corrupti, rerum nisi
									blanditiis voluptate numquam officiis eligendi quae omnis ut
									consectetur porro laborum sequi iure dicta!
								</p>
							</div>{" "}
						</AccordionContent>
					</AccordionItem>
					<AccordionItem
						value='item-3'
						className='flex flex-col gap-1 justify-center items-center px-2 bg-primary-light dark:bg-secondary-dark hover:drop-shadow-2xl hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300'>
						<AccordionTrigger>Software Development</AccordionTrigger>
						<AccordionContent>
							<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-1 hover:drop-shadow-2xl  hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300 rounded-lg'>
								<Link href={"/"}>
									<Image
										src={software}
										alt={"Boisko Mentalne"}
										className='rounded-lg hover:scale-95 hover:opacity-80 transition-all ease-out duration-300'></Image>
								</Link>

								<h2 className='text-lg font-normal'>Software 1</h2>
								<p className='text-left'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Veniam earum asperiores sit eius! Corrupti, rerum nisi
									blanditiis voluptate numquam officiis eligendi quae omnis ut
									consectetur porro laborum sequi iure dicta!
								</p>
							</div>{" "}
						</AccordionContent>
						<AccordionContent>
							<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-1 hover:drop-shadow-2xl  hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300 rounded-lg'>
								<Link href={"/"}>
									<Image
										src={software}
										alt={"Boisko Mentalne"}
										className='rounded-lg hover:scale-95 hover:opacity-80 transition-all ease-out duration-300'></Image>
								</Link>

								<h2 className='text-lg font-normal'>Software 2</h2>
								<p className='text-left'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Veniam earum asperiores sit eius! Corrupti, rerum nisi
									blanditiis voluptate numquam officiis eligendi quae omnis ut
									consectetur porro laborum sequi iure dicta!
								</p>
							</div>{" "}
						</AccordionContent>
						<AccordionContent>
							<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-1 hover:drop-shadow-2xl  hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300 rounded-lg'>
								<Link href={"/"}>
									<Image
										src={software}
										alt={"Boisko Mentalne"}
										className='rounded-lg hover:scale-95 hover:opacity-80 transition-all ease-out duration-300'></Image>
								</Link>

								<h2 className='text-lg font-normal'>Software 3</h2>
								<p className='text-left'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Veniam earum asperiores sit eius! Corrupti, rerum nisi
									blanditiis voluptate numquam officiis eligendi quae omnis ut
									consectetur porro laborum sequi iure dicta!
								</p>
							</div>{" "}
						</AccordionContent>
					</AccordionItem>
					<AccordionItem
						value='item-4'
						className='flex flex-col gap-1 justify-center items-center px-2 bg-primary-light dark:bg-secondary-dark hover:drop-shadow-2xl hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300'>
						<AccordionTrigger>Logo / Branding</AccordionTrigger>
						<AccordionContent>
							<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-1 hover:drop-shadow-2xl  hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300 rounded-lg'>
								<Link href={"/"}>
									<Image
										src={boiskomentalne}
										alt={"Boisko Mentalne"}
										className='rounded-lg hover:scale-95 hover:opacity-80 transition-all ease-out duration-300'></Image>
								</Link>

								<h2 className='text-lg font-normal'>Boisko Mentalne</h2>
								<p className='text-left'>
									Visionary project that combines two elements: soccer/football
									and mental development. A modern, minimalist logo while
									maintaining the general idea of the entire project.
								</p>
							</div>{" "}
						</AccordionContent>
						<AccordionContent>
							<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-1 hover:drop-shadow-2xl  hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300 rounded-lg'>
								<Link
									href={"http://trix-autogaz.pl/"}
									rel='noopener noreferrer'
									target='_blank'>
									<Image
										src={trix}
										alt={"trix-autogaz.pl"}
										className='rounded-lg hover:scale-95 hover:opacity-80 transition-all ease-out duration-300'></Image>
								</Link>

								<h2 className='text-lg font-normal'>TRIX</h2>
								<p className='text-left'>
									Logo, which features a modern and clean design that reflects
									the company&apos;s commitment to quality and reliability.
								</p>
							</div>{" "}
						</AccordionContent>
						<AccordionContent>
							<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-1 hover:drop-shadow-2xl  hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300 rounded-lg'>
								<Link href={""}>
									<Image
										src={asp}
										alt={"ASP"}
										className='rounded-lg hover:scale-95 hover:opacity-80 transition-all ease-out duration-300'></Image>
								</Link>

								<h2 className='text-lg font-normal'>ASP</h2>
								<p className='text-left'>
									ASP - Akademia Sportowa, local basketball team logo.{" "}
								</p>
							</div>{" "}
						</AccordionContent>
					</AccordionItem>
					<AccordionItem
						value='item-5'
						className='flex flex-col gap-1 justify-center items-center px-2 bg-primary-light dark:bg-secondary-dark hover:drop-shadow-2xl hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300'>
						<AccordionTrigger>Photo Manipulation</AccordionTrigger>
						<AccordionContent>Photo 1</AccordionContent>
						<AccordionContent>Photo 2</AccordionContent>
						<AccordionContent>Photo 3</AccordionContent>
					</AccordionItem>
					<AccordionItem
						value='item-6'
						className='flex flex-col gap-1 justify-center items-center px-2 bg-primary-light dark:bg-secondary-dark hover:drop-shadow-2xl hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300 rounded-b-xl'>
						<AccordionTrigger>Illustration</AccordionTrigger>
						<AccordionContent>
							<div
								className={`grid  gap-4 p-1 hover:drop-shadow-2xl  hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300 rounded-lg${
									isZoomed
										? "grid-cols-1 lg:grid-cols-1"
										: "grid-cols-1 lg:grid-cols-3"
								}`}>
								<Image
									src={illu_1}
									alt={"Illustration"}
									width={isZoomed ? 1100 : 350}
									height={isZoomed ? 800 : 180}
									onClick={() => handleImageClick()}
									placeholder="blur"
									className={`rounded-lg shrink-0 hover:scale-95 hover:opacity-80 transition-all ease-out duration-300 ${
										isZoomed ? "cursor-zoom-out " : "cursor-zoom-in"
									}`}></Image>
								<Link href={""}>
									<h2 className='text-lg font-normal'>
										Illustration 1
										<br />
										<br />
										<br />
										MORE
									</h2>
								</Link>

								<p className='text-left'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Veniam earum asperiores sit eius! Corrupti, rerum nisi
									blanditiis voluptate numquam officiis eligendi quae omnis ut
									consectetur porro laborum sequi iure dicta!{" "}
								</p>
							</div>
						</AccordionContent>
						<AccordionContent>
							<div
								className={`grid  gap-4 p-1 hover:drop-shadow-2xl  hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300 rounded-lg${
									isZoomed
										? "grid-cols-1 lg:grid-cols-1"
										: "grid-cols-1 lg:grid-cols-3"
								}`}>
								<Image
									src={illu_2}
									alt={"Illustration"}
									width={isZoomed ? 1100 : 350}
									height={isZoomed ? 800 : 180}
									onClick={() => handleImageClick()}
									className={`rounded-lg shrink-0 hover:scale-95 hover:opacity-80 transition-all ease-out duration-300 ${
										isZoomed ? "cursor-zoom-out " : "cursor-zoom-in"
									}`}></Image>
								<Link href={""}>
									<h2 className='text-lg font-normal'>
										Illustration 2
										<br />
										<br />
										<br />
										MORE
									</h2>
								</Link>

								<p className='text-left'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Veniam earum asperiores sit eius! Corrupti, rerum nisi
									blanditiis voluptate numquam officiis eligendi quae omnis ut
									consectetur porro laborum sequi iure dicta!{" "}
								</p>
							</div>
						</AccordionContent>
						<AccordionContent>
							<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-1 hover:drop-shadow-2xl  hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300 rounded-lg'>
								<Link href={""}>
									<Image
										src={illu_3}
										alt={"Illustration"}
										className='rounded-lg hover:scale-95 hover:opacity-80 transition-all ease-out duration-300'></Image>
								</Link>

								<h2 className='text-lg font-normal'>Illustration 3</h2>
								<p className='text-left'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Veniam earum asperiores sit eius! Corrupti, rerum nisi
									blanditiis voluptate numquam officiis eligendi quae omnis ut
									consectetur porro laborum sequi iure dicta!{" "}
								</p>
							</div>{" "}
						</AccordionContent>
						<AccordionContent>
							<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-1 hover:drop-shadow-2xl  hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300 rounded-lg'>
								<Link href={""}>
									<Image
										src={illu_4}
										alt={"Illustration"}
										className='rounded-lg hover:scale-95 hover:opacity-80 transition-all ease-out duration-300'></Image>
								</Link>

								<h2 className='text-lg font-normal'>Illustration 4</h2>
								<p className='text-left'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Veniam earum asperiores sit eius! Corrupti, rerum nisi
									blanditiis voluptate numquam officiis eligendi quae omnis ut
									consectetur porro laborum sequi iure dicta!{" "}
								</p>
							</div>{" "}
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}
