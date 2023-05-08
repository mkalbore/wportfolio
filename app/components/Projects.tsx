import React from "react";
import Image from "next/image";
import Link from "next/link";

import besethome from "../../public/BesetHome.png";
import boiskomentalne from "../../public/BoiskoMentalne.png";
import ftw from "../../public/ftw_1.png";
import oknopast from "../../public/oknopast_1.png";
import trix from "../../public/trix.png";
import parafia from "../../public/parafia2V2.png";

type Props = {};

export default function Projects({}: Props) {
	return (
		<div className='text-center mx-auto mb-60'>
			<h1 className='my-4 2xl:my-6 2xl:text-4xl'>Some of my projects</h1>

			<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 place-items-center justify-center  '>
				<Link href='/projects'>
					<Image
						src={oknopast}
						alt={"oknopast.pl"}
						className='rounded-xl shadow-lg border border-[#ffffff, 10] w-[350px] h-[218.75px] md:w-[400px] md:h-[250px] lg:w-[600px] lg:h-[375px] hover:shadow-[#ffffff] hover:scale-105 hover:animate-pulse hover:drop-shadow-2xl transition-all ease-out duration-300'
					/>
				</Link>

				<Link href={"/projects"}>
					<Image
						src={ftw}
						alt={""}
						className='rounded-xl shadow-lg border border-[#ffffff, 10] w-[350px] h-[218.75px] md:w-[400px] md:h-[250px]  lg:w-[600px] lg:h-[375px] hover:shadow-[#ffffff] hover:scale-105 hover:animate-pulse hover:drop-shadow-2xl  transition-all ease-out duration-300'
					/>
				</Link>

				<Link href={"/projects"}>
					<Image
						src={trix}
						alt={""}
						className='rounded-xl shadow-lg border border-[#ffffff, 10] w-[350px] h-[218.75px] md:w-[400px] md:h-[250px]  lg:w-[600px] lg:h-[375px] hover:shadow-[#ffffff] hover:scale-105 hover:animate-pulse hover:drop-shadow-2xl  transition-all ease-out duration-300'
					/>
				</Link>

				<Link href={"/projects"}>
					<Image
						src={boiskomentalne}
						alt={""}
						className='rounded-xl shadow-lg border border-[#ffffff, 10] w-[350px] h-[218.75px] md:w-[400px] md:h-[250px]  lg:w-[600px] lg:h-[375px] hover:shadow-[#ffffff] hover:scale-105 hover:animate-pulse hover:drop-shadow-2xl  transition-all ease-out duration-300'
					/>
				</Link>

				<Link href={"/projects"}>
					<Image
						src={besethome}
						alt={""}
						className='rounded-xl shadow-lg border border-[#ffffff, 10] w-[350px] h-[218.75px] md:w-[400px] md:h-[250px]  lg:w-[600px] lg:h-[375px] hover:shadow-[#ffffff] hover:scale-105 hover:animate-pulse hover:drop-shadow-2xl  transition-all ease-out duration-300'
					/>
				</Link>

				<Link href={"/projects"}>
					<Image
						src={parafia}
						alt={""}
						className='rounded-xl shadow-lg border border-[#ffffff, 10] w-[350px] h-[218.75px] md:w-[400px] md:h-[250px]  lg:w-[600px] lg:h-[375px] hover:shadow-[#ffffff] hover:scale-105 hover:animate-pulse hover:drop-shadow-2xl  transition-all ease-out duration-300'
					/>
				</Link>
			</div>
		</div>
	);
}
