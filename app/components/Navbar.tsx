import Link from "next/link";
import Image from "next/image";
import logoPic from "../../public/logo.png";

type Props = {};

export default function Navbar({}: Props) {
	return (
		<div className='bg-[#141414] font-extralight w-screen relative p-14 align-middle '>
			<div className='flex justify-center text-xl text-white space-x-10 '>
				<Image
					src={logoPic}
					className='w-12 justify-start relative'
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

				<ul className='flex justify-end space-x-10 text-center relative'>
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
		</div>
	);
}
