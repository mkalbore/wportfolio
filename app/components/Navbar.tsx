import Link from "next/link";
import Image from "next/image";
import logoLight from "../../public/quint_logo_light.svg";
import logoDark from "../../public/quint_logo_dark.svg";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "../components/ui/alert-dialog";

import Burgermenu from "./Burgermenu";
import ThemeSwitcher from "./ThemeSwitcher";

type Props = {};

export default function Navbar({}: Props) {
	return (
		<section className='relative dark:bg-primary-dark bg-primary-light flex items-center justify-between px-4 py-4 md:py-8 md:px-8 top-0 '>
			<div className='hidden lg:flex lg:justify-between text-xl w-screen mx-4 text-font-light-mode dark:text-font-dark-mode space-x-10 items-center'>
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
						className='transition ease-out duration-600 hover:opacity-70 hover:scale-95 scroll-smooth'
						href={"/#about"}>
						About
					</Link>
					<li>|</li>

					<Link
						className='transition ease-out duration-600 hover:opacity-70 hover:scale-95'
						href={"/#services"}>
						Services
					</Link>
					<li>|</li>
					<Link
						className='transition ease-out duration-600 hover:opacity-70 hover:scale-95'
						href={"/#contact"}>
						Contact
					</Link>
					<li>|</li>
					<Link
						className='transition ease-out duration-600 hover:opacity-70 hover:scale-95'
						href={"/team"}>
						Our Team
					</Link>
					<li>|</li>
					<Link
						className='transition ease-out duration-600 hover:opacity-70 hover:scale-95'
						href={"/projects"}>
						Projects
					</Link>
					<li>|</li>
					<Link
						className='transition ease-out duration-600 hover:opacity-70 hover:scale-95'
						href={"/cheatsheets"}>
						Dev Cheat Sheets
					</Link>
				</ul>

				<ul className='flex space-x-5 text-center items-center'>
					{/* <Link
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
					<li>|</li> */}
					<div className='transition ease-out duration-600 hover:font-normal hover:scale-105 flex items-center justify-center'>
						{/* Aler Dialog | ui.shadcn.com  */}
						<AlertDialog>
							<AlertDialogTrigger>EN</AlertDialogTrigger>
							<AlertDialogContent>
								<AlertDialogHeader>
									<AlertDialogTitle>
										The page is in English by default.
									</AlertDialogTitle>
									<AlertDialogDescription>
										If there are any spelling mistakes, I apologize. If you have
										any questions/observations, please write to me.
									</AlertDialogDescription>
								</AlertDialogHeader>
								<AlertDialogFooter>
									{/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
									<AlertDialogAction>Continue</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					</div>
					<li>|</li>
					<div className='transition ease-out duration-600 hover:font-normal'>
						{/* Aler Dialog | ui.shadcn.com  */}
						<AlertDialog>
							<AlertDialogTrigger>PL</AlertDialogTrigger>
							<AlertDialogContent>
								<AlertDialogHeader>
									<AlertDialogTitle>
										Przepraszamy, ale strona nie posiada obecnie tłumaczenia na
										język polski.
									</AlertDialogTitle>
									<AlertDialogDescription>
										Strona zostanie wkrótce przetłumaczona na język Polski. Na
										razie proszę użyj innego tłumaczenia, np. Tłumacza Google.
									</AlertDialogDescription>
								</AlertDialogHeader>
								<AlertDialogFooter>
									{/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
									<AlertDialogAction>Kontynuuj</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					</div>
					<li>|</li>
					<div className='transition ease-out duration-600 hover:font-normal'>
						{/* Aler Dialog | ui.shadcn.com  */}
						<AlertDialog>
							<AlertDialogTrigger>CZ</AlertDialogTrigger>
							<AlertDialogContent>
								<AlertDialogHeader>
									<AlertDialogTitle>
										Je nám líto, ale stránka momentálně nemá překlad do češtiny.
									</AlertDialogTitle>
									<AlertDialogDescription>
										Web bude brzy přeložen do češtiny. Prozatím prosím
										používejte jiný překlad, např. Google Translator.
									</AlertDialogDescription>
								</AlertDialogHeader>
								<AlertDialogFooter>
									{/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
									<AlertDialogAction>Pokračovat</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					</div>
					<li>|</li>
					<ThemeSwitcher />
				</ul>
			</div>
			<div className='flex lg:hidden w-screen mx-4'>
				{" "}
				<Burgermenu />{" "}
			</div>
		</section>
	);
}
