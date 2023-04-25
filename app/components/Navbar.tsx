import Link from "next/link";
import Image from "next/image";
import logoPic from "../../public/logo.png";
import Burgermenu from "./Burgermenu";
import Custommenu from "./Burgermenu";

type Props = {};

export default function Navbar({}: Props) {
	return (
		<div className='bg-[#141414] flex align-top min-h-fit w-full font-extralight justify-between relative py-4 md:py-12 top-0 '>
			<div className='hidden md:flex md:justify-between text-xl w-full mx-8 text-white space-x-10'>
				<Link href={"/"}>
					<>
						<Image
							src={logoPic}
							className='w-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300'
							alt={"Logo of the company Quint"}
						/>
					</>
				</Link>

				<ul className='flex space-x-10 align text-center '>
					<Link
						className='transition ease-out duration-600 hover:font-normal'
						href={"#about"}>
						About
					</Link>
					<li>|</li>
					<Link
						className='transition ease-out duration-600 hover:font-normal'
						href={"#projects"}>
						Projects
					</Link>
					<li>|</li>
					<Link
						className='transition ease-out duration-600 hover:font-normal'
						href={"#services"}>
						Services
					</Link>
					<li>|</li>
					<Link
						className='transition ease-out duration-600 hover:font-normal'
						href={"#contact"}>
						Contact
					</Link>
				</ul>

				<ul className='flex space-x-10 text-center '>
					<Link
						className='transition ease-out duration-600 hover:font-normal'
						href={""}>
						EN
					</Link>
					<li>|</li>
					<Link
						className='transition ease-out duration-600 hover:font-normal'
						href={""}>
						PL
					</Link>
					<li>|</li>
					<Link
						className='transition ease-out duration-600 hover:font-normal'
						href={""}>
						CZ
					</Link>
				</ul>
			</div>
			<div className='flex md:hidden w-full mx-4'>
				{" "}
				<Burgermenu />{" "}
			</div>
		</div>
	);
}
