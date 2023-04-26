import React from "react";
import Image from "next/image";
import Link from "next/link";

const allItems = [
	{
		id: "besethome",
		src: "/../public/BesetHome.png",
		link: "http://www.google.com",
		title: "Beset Exclusive Club",
		type: "Website",
		info: ", which is modern and stylish night club.",
		description:
			"The website features a clean and easy-to-navigate design, and includes information about the parish's history, events, and religious services.",
	},

	{
		id: "ftw",
		src: "/../public/ftw_1.png",
		link: "http://ftwpasternak.de/",
		title: "FTW - Pasternak",
		type: "Website",
		info: " is a German company that produces and markets windows, doors, shutters, pergolas, and more.",
		description:
			"I developed their website, which features a responsive design that looks great on any device. The website includes a product catalog, photo galleries, and a contact form to help customers easily get in touch with the company.",
	},

	{
		id: "trix",
		src: "/../public/trix.png",
		link: "http://trix-autogaz.pl/",
		title: "Trix Autogaz",
		type: "Website, Logo",
		info: " is a family-owned business with over 20 years of experience in LPG installations and service.",
		description:
			"I created their website and logo, which features a modern and clean design that reflects the company's commitment to quality and reliability. I continue to run and administer the website for them, ensuring that it remains up-to-date and fully functional.",
	},

	{
		id: "oknopast",
		src: "/../public/oknopast_1.png",
		link: "https://oknopast.pl/",
		title: "Oknopast",
		type: "Website",
		info: "  is a manufacturer of front doors, windows, and winter gardens.",
		description:
			"I developed their website, which features a user-friendly interface, stunning visuals, and informative content that showcases the company's products and services.",
	},

	{
		id: "boiskomentalne",
		src: "/../public/BoiskoMentalne.png",
		link: "http://www.google.com",
		title: "BoiskoMentalne",
		type: "Logo",
		info: " Lorem ipsum, Lorem lorem loreom, and lorem",
		description: "Descriptiopn boisko mentalne . bllabl alb alb al b",
	},

	{
		id: "parafia",
		src: "/../public/parafia2V2.png",
		link: "http://www.google.com",
		title: "Parafia Lubrza",
		type: "Website",
		info: ", which is serves as an online hub for the parish's community.",
		description:
			"The website features a clean and easy-to-navigate design, and includes information about the parish's history, events, and religious services.",
	},
];

type Props = {};

export default function Project({}: Props) {
	return (
		<div className='snap-x snap-mandatory w-full space-x-5 overflow-x-scroll p-10'>
			<Card />
		</div>
	);
}

function Card({}: Props) {
	return (
		<article className='flex flex-row flex-shrink-0 w-[600px] md:w-[900px] xl:w-[1200px]'>
			{allItems.map(allItems => (
				<>
					<div className=''>
						<h1 className='font-normal'>{allItems.title}</h1>
						<h2 className=''>{allItems.type}</h2>
					</div>

					<div className='flex text-center '>
						<div className='rounded-xl shadow-lg border border-[#ffffff, 10] w-[350px] h-fit md:w-[400px] md:h-fit lg:w-[600px] lg:h-fit hover:shadow-[#000000] hover:scale-110 hover:rotate-360 hover:animate-pulse hover:drop-shadow-2xl  transition-all ease-out duration-300'>
							<Link href={allItems.link}>
								<Image src={allItems.src} alt={""} width={600} height={400} />
							</Link>
						</div>
						<div className='space-y-4'>
							<p>
								{" "}
								<span className='font-normal'>{allItems.title}</span>{" "}
								{allItems.info}
							</p>

							<div>
								<div>
									<h3 className='font-normal pb-10'>Used Technologies:</h3>
									<Image src={""} alt={""} />
								</div>
								<p>{allItems.description}</p>
							</div>
						</div>
					</div>
				</>
			))}
		</article>
	);
}
