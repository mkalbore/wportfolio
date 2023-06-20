import React from "react";
import Link from "next/link";
import Image from "next/image";

import Github from "https://simpleicons.org/icons/github.svg";

type Props = {};

export default function Contact({}: Props) {
	return (
		<div className='max-w-screen-md h-screen justify-center text-center flex flex-col space-y-10 mb-20 mx-auto'>
			<h2 className='text-2xl md:text-3xl xl:text-4xl my-10 px-2'>
				Are <span className='font-normal'>You</span> interested in working with
				me or just want to ask something ?
			</h2>
			<div>
				<h2 className=''>Email me:</h2>
				<h2 className='font-normal underline select-all'>
					quint.biuro@gmail.com
				</h2>
			</div>
			<div>
				<h2 className=''>Call me:</h2>
				<h2 className='font-normal select-all'>696 36 13 13</h2>
			</div>
			<div>
				<h2 className='font-normal'>Find me on web:</h2>
				{/* Social Icons */}
				<div className='flex flex-row w-auto h-10 lg:h-14 space-x-4 md:space-x-10 my-10  lg:my-12 dark:fill-secondary-dark relative justify-center'>
					<Link href='https://github.com/mkalbore'>
						<svg
							className='w-[40px] h-[40px] lg:h-[60px] lg:w-[60px] dark:fill-[rgba(255,255,255,0.5)] dark:hover:fill-[rgba(255,255,255,1)] hover:fill-secondary-dark active:scale-105 transition-all ease-out duration-300 cursor-pointer'
							role='img'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>GitHub</title>

							<path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
						</svg>
					</Link>

					<Link href={"https://twitter.com/MarekKwinta_"}>
						<svg
							className='w-[40px] h-[40px] lg:h-[60px] lg:w-[60px] dark:fill-[rgba(255,255,255,0.5)] dark:hover:fill-[rgba(255,255,255,1)] hover:fill-secondary-dark active:scale-105 transition-all ease-out duration-300 cursor-pointer'
							role='img'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>Twitter</title>
							<path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
						</svg>
					</Link>

					<Link href={"https://www.linkedin.com/in/marek-kwinta-989b97231/"}>
						<svg
							className='w-[40px] h-[40px] lg:h-[60px] lg:w-[60px] dark:fill-[rgba(255,255,255,0.5)] dark:hover:fill-[rgba(255,255,255,1)] hover:fill-secondary-dark active:scale-105 transition-all ease-out duration-300 cursor-pointer'
							role='img'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>LinkedIn</title>
							<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
						</svg>
					</Link>

					<Link href={""}>
						<svg
							className='w-[40px] h-[40px] lg:h-[60px] lg:w-[60px] dark:fill-[rgba(255,255,255,0.5)] dark:hover:fill-[rgba(255,255,255,1)] hover:fill-secondary-dark active:scale-105 transition-all ease-out duration-300 cursor-pointer'
							role='img'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>Facebook</title>
							<path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
						</svg>
					</Link>

					<Link href={"https://dribbble.com/Albore"}>
						<svg
							className='w-[40px] h-[40px] lg:h-[60px] lg:w-[60px] dark:fill-[rgba(255,255,255,0.5)] dark:hover:fill-[rgba(255,255,255,1)] hover:fill-secondary-dark active:scale-105 transition-all ease-out duration-300 cursor-pointer'
							role='img'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>Dribbble</title>
							<path d='M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z' />
						</svg>
					</Link>
				</div>
			</div>
		</div>
	);
}
