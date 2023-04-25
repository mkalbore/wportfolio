import React from "react";
import Image from "next/image";

type Props = {};

export default function Project({}: Props) {
	return (
		<div className=''>
			<Card />
		</div>
	);
}

function Card() {
	return (
		<div className='text-center'>
			<h1 className=' font-normal'>Tytul</h1>
			<h2>Rodzaj</h2>
			<div>
				<Image src={""} alt={""} />
				<div>
					<p>
						<span className='font-normal'>Oknopast</span> is a manufacturer of
						front doors, windows, and winter gardens.
					</p>
					<div>
						<h3 className='font-normal'>Used Technologies:</h3>
						<Image src={""} alt={""} />
					</div>
					<p>
						I developed their website, which features a user-friendly interface,
						stunning visuals, and informative content that showcases the
						company's products and services.
					</p>
				</div>
			</div>
		</div>
	);
}
