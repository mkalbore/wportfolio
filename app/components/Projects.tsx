import React from "react";
import Image from "next/image";

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
			<h1 className='my-4'>Some of my projects</h1>

			<div className='place-items-center grid grid-cols-1 space-y-4 md:grid-cols-2 lg:grid-cols-3'>
				<Image
					src={oknopast}
					alt={""}
					className='rounded-xl shadow-lg border border-[#ffffff, 10] w-[350px] h-[218.75px] md:w-[400px] md:h-[250px]'
				/>
				<Image
					src={ftw}
					alt={""}
					className='rounded-xl shadow-lg border border-[#ffffff, 10] w-[350px] h-[218.75px] md:w-[400px] md:h-[250px]'
				/>
				<Image
					src={trix}
					alt={""}
					className='rounded-xl shadow-lg border border-[#ffffff, 10] w-[350px] h-[218.75px] md:w-[400px] md:h-[250px]'
				/>
				<Image
					src={boiskomentalne}
					alt={""}
					className='rounded-xl shadow-lg border border-[#ffffff, 10] w-[350px] h-[218.75px] md:w-[400px] md:h-[250px]'
				/>
				<Image
					src={besethome}
					alt={""}
					className='rounded-xl shadow-lg border border-[#ffffff, 10] w-[350px] h-[218.75px] md:w-[400px] md:h-[250px]'
				/>
				<Image
					src={parafia}
					alt={""}
					className='rounded-xl shadow-lg border border-[#ffffff, 10] w-[350px] h-[218.75px] md:w-[400px] md:h-[250px]'
				/>
			</div>
		</div>
	);
}
