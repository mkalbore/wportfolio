import Link from "next/link";
import Image from "next/image";
import logoLight from "../../public/logo.png";
import logoDark from "../../public/logodark.png";

import Burgermenu from "./Burgermenu";
import Custommenu from "./Burgermenu";
import ThemeSwitcher from "./ThemeSwitcher";

type Props = {};

export default function Navbar({}: Props) {
	return (
		<div className='dark:bg-primary-dark bg-primary-light flex items-center max-w-screen justify-between px-4 py-4 md:py-8 md:px-8 top-0 '>
			<div className='hidden md:flex md:justify-between text-xl w-screen mx-4 text-font-light-mode dark:text-font-dark-mode space-x-10 items-center'>
				<Link href={"/"}>
					<>
						<Image
							src={logoLight}
							className='w-12 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-125 duration-150 hidden dark:flex'
							alt={"Logo of the company Quint"}
						/>
						<Image
							src={logoDark}
							className='w-12 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-125 duration-150 dark:hidden flex'
							alt={"Logo of the company Quint"}
						/>
					</>
				</Link>

				<ul className='flex space-x-10 text-center items-center'>
					<Link
						className='transition ease-out duration-600 hover:font-normal scroll-smooth'
						href={"#about"}>
						About
					</Link>
					<li>|</li>
					<Link
						className='transition ease-out duration-600 hover:font-normal'
						href={"/projects"}>
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
					<li>|</li>
					<Link
						className='transition ease-out duration-600 hover:font-normal'
						href={"/secret"}>
						Secret
					</Link>
				</ul>

				<ul className='flex space-x-5 text-center items-center'>
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
					<li>|</li>
					<ThemeSwitcher />
				</ul>
			</div>
			<div className='flex md:hidden w-screen mx-4'>
				{" "}
				<Burgermenu />{" "}
			</div>
		</div>
	);
}
