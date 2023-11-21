import React from "react";
import Image from "next/image";

import design1 from "../../public/design-1.webp";

import besethome from "../../public/BesetHome.png";
import boiskomentalne from "../../public/BoiskoMentalne.png";
import ftw from "../../public/ftw_1.png";
import oknopast from "../../public/oknopast_1.png";
import trix from "../../public/trix.png";
import parafia from "../../public/parafialubrzawebsite.png";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../components/ui/accordion";
import Link from "next/link";

type Props = {};

export default function Services({}: Props) {
	return (
		<div className='justify-center text-center mb-20 text-lg md:text-4xl px-4'>
			<h1 className='mb-8'>
				What
				<span className='font-light'>&nbsp;I have created&nbsp;</span>
				<br />
				<span className='font-light'>and&nbsp;</span>
				<br />I can create for&nbsp;
				<span className='font-normal hover:underline hover:text-red-900 transition-all duration-150 ease-in-out cursor-not-allowed select-none'>
					YOU
				</span>
			</h1>

			<div className='grid grid-cols-1 space-y-1 md:space-y-2 max-w-lg lg:max-w-4xl mx-auto'>
				<Accordion type='multiple' className='space-y-1 md:space-y-2 pt-4'>
					<AccordionItem
						value='item-1'
						className='flex flex-col gap-1 justify-center items-center px-2 bg-primary-light dark:bg-secondary-dark hover:drop-shadow-2xl hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300 rounded-t-xl'>
						<AccordionTrigger>Website Design</AccordionTrigger>
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
								<Link href={"http://ftwpasternak.de/"}>
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
								<Link href={"http://trix-autogaz.pl/"}>
									<Image
										src={trix}
										alt={"trix-autogaz.pl"}
										className='rounded-lg hover:scale-95 hover:opacity-80 transition-all ease-out duration-300'></Image>
								</Link>

								<h2 className='text-lg font-normal'>TRIX</h2>
								<p className='text-left'>
									I created their website and logo, which features a modern and
									clean design that reflects the company&apos;s commitment to quality
									and reliability. I continue to run and administer the website
									for them, ensuring that it remains up-to-date and fully
									functional.
								</p>
							</div>{" "}
						</AccordionContent>
					</AccordionItem>
					<AccordionItem
						value='item-2'
						className='flex flex-col gap-1 justify-center items-center px-2 bg-primary-light dark:bg-secondary-dark hover:drop-shadow-2xl hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300'>
						<AccordionTrigger>UI / UX Design</AccordionTrigger>
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
						<AccordionContent>Software 1</AccordionContent>
						<AccordionContent>Software 2</AccordionContent>
						<AccordionContent>Software 3</AccordionContent>
					</AccordionItem>
					<AccordionItem
						value='item-4'
						className='flex flex-col gap-1 justify-center items-center px-2 bg-primary-light dark:bg-secondary-dark hover:drop-shadow-2xl hover:bg-[rgba(68,68,68,0.5)] hover:dark:bg-secondary-dark/50 transition-all ease-out duration-300'>
						<AccordionTrigger>Logo / Branding</AccordionTrigger>
						<AccordionContent>Logo 1</AccordionContent>
						<AccordionContent>Logo 2</AccordionContent>
						<AccordionContent>Logo 3</AccordionContent>
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
						<AccordionContent>Illustration 1</AccordionContent>
						<AccordionContent>Illustration 2</AccordionContent>
						<AccordionContent>Illustration 3</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}
