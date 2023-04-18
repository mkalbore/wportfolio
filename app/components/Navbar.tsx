import Link from "next/link";
import Image from "next/image";
import logoPic from "../../public/logo.png";

type Props = {};

export default function Navbar({}: Props) {
	return (
		<div className='bg-gray-900 font-extralight w-screen relative py-14'>
			<div className='flex justify-center text-xl text-white space-x-10 '>
				<Image
					src={logoPic}
					className='w-12 '
					alt={"Logo of the company Quint"}
				/>
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

				<ul className='flex justify-self-end space-x-10 align text-center '>
					<Link
						className='transition ease-out duration-600 hover:font-normal'
						href={"#about"}>
						EN
					</Link>
					<li>|</li>
					<Link
						className='transition ease-out duration-600 hover:font-normal'
						href={"#projects"}>
						PL
					</Link>
					<li>|</li>
					<Link
						className='transition ease-out duration-600 hover:font-normal'
						href={"#services"}>
						CZ
					</Link>
				</ul>
			</div>
		</div>
	);
}
