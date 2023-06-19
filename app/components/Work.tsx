import React from "react";
import Link from "next/link";
import Image from "next/image";

import besethome from "../../public/BesetHome.png";
import boiskomentalne from "../../public/BoiskoMentalne.png";
import ftw from "../../public/ftw_1.png";
import oknopast from "../../public/oknopast_1.png";
import trix from "../../public/trix.png";
import parafia from "../../public/parafia2V2.png";

export default function Work() {
	return (
		<div className='text-center mx-auto mb-60 grayscale hover:grayscale-0 transition-all ease-in-out duration-300 max-w-lg lg:max-w-4xl justify-center content-center flex flex-col'>
			<h1 className='my-4 2xl:my-6 2xl:text-4xl'>Check some of my Work</h1>

			<div className='flex place-items-center justify-center hover:shadow-[#ffffff] hover:scale-105 hover:animate-pulse hover:drop-shadow-2xl transition-all ease-out duration-300 gap-4 mx-auto content-center translate-x-24 rounded-xl'>
				<Link href='/projects'>
					<Image
						src={oknopast}
						alt={"oknopast.pl"}
						className='rounded-xl shadow-lg border border-[#ffffff, 10] w-[150px] h-[93.75px] lg:w-[200px] lg:h-[125px] z-60 translate-x-0'
					/>
				</Link>

				<Link href={"/projects"}>
					<Image
						src={ftw}
						alt={""}
						className='rounded-xl shadow-lg border border-[#ffffff, 10] w-[150px] h-[93.75px] lg:w-[200px] lg:h-[125px] z-40 -translate-x-12'
					/>
				</Link>

				<Link href={"/projects"}>
					<Image
						src={trix}
						alt={""}
						className='rounded-xl shadow-lg bg-neutral-900 border border-[#ffffff, 10] w-[150px] h-[93.75px] lg:w-[200px] lg:h-[125px] z-30 -translate-x-24'
					/>
				</Link>

				<Link href={"/projects"}>
					<Image
						src={besethome}
						alt={""}
						className='rounded-xl shadow-lg border border-[#ffffff, 10] w-[150px] h-[93.75px] lg:w-[200px] lg:h-[125px] z-10 -translate-x-48'
					/>
				</Link>

				<Link href={"/projects"}>
					<Image
						src={parafia}
						alt={""}
						className='rounded-xl shadow-lg border border-[#ffffff, 10] w-[150px] h-[93.75px] lg:w-[200px] lg:h-[125px] z-0 -translate-x-60'
					/>
				</Link>
			</div>
		</div>
	);
}
