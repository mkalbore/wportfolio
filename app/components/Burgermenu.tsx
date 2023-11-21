import React from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
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

type Props = {};

export default function Burgermenu({}: Props) {
	return (
		<div className='group inline-block'>
			<button className='relative group'>
				<div className='relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 hover:ring-4 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md'>
					<div className='flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden'>
						<div className='bg-orange-500 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10'></div>
						<div className='bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75'></div>
						<div className='bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150'></div>

						<div className='absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12'>
							<div className='absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45'></div>
							<div className='absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45'></div>
						</div>
					</div>
				</div>
			</button>
			<div className='bg-primary-light dark:bg-primary-dark border rounded-md transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32 text-xl space-y-4 my-4 grid grid-cols-1 align-middle justify-center justify-items-center'>
				<Link
					className='rounded-sm px-3 py-1 hover:bg-[#444444] transition ease-out duration-600 hover:font-normal'
					href={"#about"}>
					About
				</Link>
				<Link
					className='rounded-sm px-3 py-1 hover:bg-[#444444] transition ease-out duration-600 hover:font-normal'
					href={"/projects"}>
					Projects
				</Link>
				<Link
					className='rounded-sm px-3 py-1 hover:bg-[#444444] transition ease-out duration-600 hover:font-normal'
					href={"#services"}>
					Services
				</Link>
				<Link
					className='rounded-sm px-3 py-1 hover:bg-[#444444] transition ease-out duration-600 hover:font-normal'
					href={"#contact"}>
					Contact
				</Link>
				<Link
					className='rounded-sm px-3 py-1 hover:bg-[#444444] transition ease-out duration-600 hover:font-normal'
					href={"/cheatsheets"}>
					Cheat Sheets
				</Link>
				<div className='transition ease-out duration-600 hover:font-normal'>
					{/* Aler Dialog | ui.shadcn.com  */}
					<AlertDialog>
						<AlertDialogTrigger> EN |&nbsp;</AlertDialogTrigger>
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

					<AlertDialog>
						<AlertDialogTrigger> PL |&nbsp;</AlertDialogTrigger>
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
					<AlertDialog>
						<AlertDialogTrigger> CZ </AlertDialogTrigger>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>
									Je nám líto, ale stránka momentálně nemá překlad do češtiny.
								</AlertDialogTitle>
								<AlertDialogDescription>
									Web bude brzy přeložen do češtiny. Prozatím prosím používejte
									jiný překlad, např. Google Translator.
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								{/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
								<AlertDialogAction>Pokračovat</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
				</div>

				<div className='rounded-sm px-3 py-1 hover:bg-[#444444] transition ease-out duration-600 hover:font-normal'>
					<ThemeSwitcher />
				</div>
			</div>
		</div>
	);
}

// export function Custommenu({}: Props) {
// 	return (
// 		<div className='group inline-block'>
// 			<button className='outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32'>
// 				<span className='pr-1 font-semibold flex-1'>Dropdown</span>
// 				<span>
// 					<svg
// 						className='fill-current h-4 w-4 transform group-hover:-rotate-180
// 									transition duration-150 ease-in-out'
// 						xmlns='http://www.w3.org/2000/svg'
// 						viewBox='0 0 20 20'>
// 						<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
// 					</svg>
// 				</span>
// 			</button>
// 			<ul
// 				className='bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute
// 							transition duration-150 ease-in-out origin-top min-w-32'>
// 				<li className='rounded-sm px-3 py-1 hover:bg-gray-100'>Programming</li>
// 				<li className='rounded-sm px-3 py-1 hover:bg-gray-100'>DevOps</li>
// 				<li className='rounded-sm relative px-3 py-1 hover:bg-gray-100'>
// 					<button className='w-full text-left flex items-center outline-none focus:outline-none'>
// 						<span className='pr-1 flex-1'>Langauges</span>
// 						<span className='mr-auto'>
// 							<svg
// 								className='fill-current h-4 w-4
// 											transition duration-150 ease-in-out'
// 								xmlns='http://www.w3.org/2000/svg'
// 								viewBox='0 0 20 20'>
// 								<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
// 							</svg>
// 						</span>
// 					</button>
// 					<ul
// 						className='bg-white border rounded-sm absolute top-0 right-0
// 									transition duration-150 ease-in-out origin-top-left
// 									min-w-32
// 									'>
// 						<li className='px-3 py-1 hover:bg-gray-100'>Javascript</li>
// 						<li className='rounded-sm relative px-3 py-1 hover:bg-gray-100'>
// 							<button className='w-full text-left flex items-center outline-none focus:outline-none'>
// 								<span className='pr-1 flex-1'>Python</span>
// 								<span className='mr-auto'>
// 									<svg
// 										className='fill-current h-4 w-4
// 											transition duration-150 ease-in-out'
// 										xmlns='http://www.w3.org/2000/svg'
// 										viewBox='0 0 20 20'>
// 										<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
// 									</svg>
// 								</span>
// 							</button>
// 							<ul
// 								className='bg-white border rounded-sm absolute top-0 right-0
// 												transition duration-150 ease-in-out origin-top-left
// 												min-w-32
// 												'>
// 								<li className='px-3 py-1 hover:bg-gray-100'>2.7</li>
// 								<li className='px-3 py-1 hover:bg-gray-100'>3+</li>
// 							</ul>
// 						</li>
// 						<li className='px-3 py-1 hover:bg-gray-100'>Go</li>
// 						<li className='px-3 py-1 hover:bg-gray-100'>Rust</li>
// 					</ul>
// 				</li>
// 				<li className='rounded-sm px-3 py-1 hover:bg-gray-100'>Testing</li>
// 			</ul>
// 		</div>

// 		//   <style>
// 		// 	/* since nested groupes are not supported we have to use
// 		// 	   regular css for the nested dropdowns
// 		// 	*/
// 		// 	li>ul                 { transform: translatex(100%) scale(0) }
// 		// 	li:hover>ul           { transform: translatex(101%) scale(1) }
// 		// 	li > button svg       { transform: rotate(-90deg) }
// 		// 	li:hover > button svg { transform: rotate(-270deg) }

// 		// 	/* Below styles fake what can be achieved with the tailwind config
// 		// 	   you need to add the group-hover variant to scale and define your custom
// 		// 	   min width style.
// 		// 		 See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html
// 		// 		 for implementation with config file
// 		// 	*/
// 		// 	.group:hover .group-hover\:scale-100 { transform: scale(1) }
// 		// 	.group:hover .group-hover\:-rotate-180 { transform: rotate(180deg) }
// 		// 	.scale-0 { transform: scale(0) }
// 		// 	.min-w-32 { min-width: 8rem }
// 		//   </style>
// 	);
// }
