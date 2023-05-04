import React from "react";
import Image from "next/image";
import parrot from "../../public/parrot.png";

type Props = {};

export default function About({}: Props) {
	return (
		<div className='max-w-sm md:w-screen md:h-full 2xl:max-w-7xl justify-center text-center mx-auto mb-60'>
			<div className=' items-center justify-center'>
				<div className='flex flex-col space-x-4 lg:flex-row mx-auto justify-center shrink-0 w-fit'>
					<Image
						src={parrot}
						alt={"Avatar"}
						className='mx-auto px-10 lg:px-0 justify-center items-center lg:max-w-sm self-center rounded-xl shadow-lg border border-[#ffffff, 10] hover:hue-rotate-90 active:hue-rotate-180 transition-all ease-out duration-1000'
					/>

					<div className='text-justify items-center justify-center md:max-w-screen-md mt-4 px-10'>
						<h1 className='text-xl md:text-2xl xl:text-4xl'>
							Hi im <span className='font-normal'>Marek&sbquo;</span>
						</h1>
						<h3 className='text-base md:text-xl xl:text-2xl'>
							a 24-year-old web developer with a passion for creating beautiful
							and functional websites and applications.
						</h3>
						<h3 className='text-base md:text-xl xl:text-2xl'>
							I first started my programming journey in
							<span className='font-normal'> WordPress </span>
							around five years ago&sbquo; and since then&sbquo; I&apos;ve been
							constantly learning and expanding my skill set.
						</h3>
					</div>

					<div className=' grid grid-cols-3 shrink-0 m-4 fill-[rgba(255,255,255,0.5)] items-end place-items-center space-y-4 lg:space-x-2 lg:grid-cols-1 lg:grid-rows-7 lg:self-center '>
						<svg
							className='w-14 md:w-10 lg:w-16 hover:fill-[rgba(97,218,251,1)] hover:shadow-[#61dafb] hover:scale-110 hover:rotate-360 hover:animate-pulse hover:drop-shadow-2xl  transition-all ease-out duration-300'
							role='img'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>React</title>
							<path d='M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z' />
						</svg>
						<svg
							className='w-14 md:w-10 lg:w-16 hover:fill-[rgba(0,0,0,1)] hover:shadow-[#000000] hover:scale-110 hover:rotate-360 hover:animate-pulse hover:drop-shadow-2xl  transition-all ease-out duration-300'
							role='img'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>Next.js</title>
							<path d='M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z' />
						</svg>
						<svg
							className='w-14 md:w-10 lg:w-16 hover:fill-[rgb(247,223,30,1)] hover:shadow-[#f7df1e] hover:scale-110 hover:rotate-360 hover:animate-pulse hover:drop-shadow-2xl  transition-all ease-out duration-300'
							role='img'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>JavaScript</title>
							<path d='M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z' />
						</svg>

						<svg
							className='w-14 md:w-10 lg:w-16 hover:fill-[rgba(49,120,198,1)] hover:shadow-[#3178c6] hover:scale-110 hover:rotate-360 hover:animate-pulse hover:drop-shadow-2xl  transition-all ease-out duration-300'
							role='img'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>TypeScript</title>
							<path d='M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z' />
						</svg>

						<svg
							className='w-14 md:w-10 lg:w-16 hover:fill-[rgba(227,79,38,1)] hover:shadow-[#e34f26] hover:scale-110 hover:rotate-360 hover:animate-pulse hover:drop-shadow-2xl  transition-all ease-out duration-300'
							role='img'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>HTML5</title>
							<path d='M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z' />
						</svg>
						<svg
							className='w-14 md:w-10 lg:w-16 hover:fill-[rgba(21,114,182,1)] hover:shadow-[#1572b6] hover:scale-110 hover:rotate-360 hover:animate-pulse hover:drop-shadow-2xl  transition-all ease-out duration-300'
							role='img'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>CSS3</title>
							<path d='M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z' />
						</svg>
						<svg
							className='w-14 md:w-10 lg:w-16 hover:fill-[rgba(6,182,212,1)] hover:shadow-[#06b6d4] hover:scale-110 hover:rotate-360 hover:animate-pulse hover:drop-shadow-2xl  transition-all ease-out duration-300'
							role='img'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>Tailwind CSS</title>
							<path d='M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z' />
						</svg>
					</div>

					<div className=' grid grid-cols-4 shrink-0 m-4 fill-[rgba(255,255,255,0.5)] items-end place-items-center space-y-4 lg:space-x-2 lg:grid-cols-1 lg:grid-rows-7 lg:self-center '>
						<svg
							className='w-14 md:w-10 lg:w-16 hover:fill-[rgba(119,123,180,1)] hover:shadow-[#777bb4] hover:scale-110 hover:rotate-360 hover:animate-pulse hover:drop-shadow-2xl  transition-all ease-out duration-300'
							role='img'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>PHP</title>
							<path d='M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z' />
						</svg>
						<svg
							className='w-14 md:w-10 lg:w-16 hover:fill-[rgba(108,120,175,1)] hover:shadow-[#6c78af] hover:scale-110 hover:rotate-360 hover:animate-pulse hover:drop-shadow-2xl  transition-all ease-out duration-300'
							role='img'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>phpMyAdmin</title>
							<path d='M5.463 3.476C6.69 5.225 7.497 7.399 7.68 9.798a12.9 12.9 0 0 1-.672 5.254 4.29 4.29 0 0 1 2.969-1.523c.05-.004.099-.006.148-.008.08-.491.47-3.45-.977-6.68-1.068-2.386-3-3.16-3.685-3.365Zm1.777.037s2.406 1.066 3.326 5.547c.607 2.955.049 4.836-.402 5.773a7.347 7.347 0 0 1 4.506-1.994c.86-.065 1.695.02 2.482.233-.1-.741-.593-3.414-2.732-5.92-3.263-3.823-7.18-3.64-7.18-3.64Zm14.817 9.701-17.92 3.049a2.284 2.284 0 0 1 1.535 2.254 2.31 2.31 0 0 1-.106.61c.055-.027 2.689-1.275 6.342-2.034 3.238-.673 5.723-.36 6.285-.273a6.46 6.46 0 0 1 3.864-3.606zm-6.213 4.078c-2.318 0-4.641.495-6.614 1.166-2.868.976-2.951 1.348-5.55 1.043C1.844 19.286 0 18.386 0 18.386s2.406 1.97 4.914 2.127c1.986.125 3.505-.822 5.315-1.414 2.661-.871 4.511-.97 6.253-.975C19.361 18.116 24 19.353 24 19.353s-2.11-1.044-5.033-1.72a13.885 13.885 0 0 0-3.123-.34Z' />
						</svg>
						<svg
							className='w-14 md:w-10 lg:w-16 hover:fill-[rgba(33,117,155,1)] hover:shadow-[#21759b] hover:scale-110 hover:rotate-360 hover:animate-pulse hover:drop-shadow-2xl  transition-all ease-out duration-300'
							role='img'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<title>WordPress</title>
							<path d='M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0' />
						</svg>
						<svg
							className='w-14 md:w-10 lg:w-16 hover:fill-[rgba(242,242,242,1)] hover:shadow-[#f2f2f2] hover:scale-110 hover:rotate-360 hover:animate-pulse hover:drop-shadow-2xl  transition-all ease-out duration-300'
							role='img'
							version='1.0'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 512.000000 512.000000'
							preserveAspectRatio='xMidYMid meet'>
							<title>SEO</title>
							<g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'>
								<path
									d='M3347 3764 c-170 -38 -311 -111 -432 -226 -136 -128 -217 -265 -267
                    -447 -30 -109 -30 -323 1 -436 88 -330 331 -569 671 -662 50 -14 100 -18 215
                    -17 133 1 160 4 240 28 96 29 233 97 295 146 l39 31 156 -147 c116 -109 158
                    -155 162 -177 3 -17 22 -46 42 -66 83 -82 448 -418 471 -434 53 -36 135 -13
                    164 47 41 86 44 82 -457 545 -29 27 -61 46 -82 50 -26 5 -70 39 -189 149
                    l-155 144 38 51 c116 157 172 327 172 527 1 120 -11 197 -46 301 -97 283 -332
                    501 -634 585 -83 23 -318 28 -404 8z m347 -244 c104 -26 207 -83 284 -155 144
                    -134 214 -292 215 -485 1 -120 -14 -181 -70 -299 -85 -177 -260 -316 -449
                    -356 -305 -65 -611 83 -744 360 -111 231 -86 489 68 695 85 113 234 212 367
                    244 89 21 237 20 329 -4z'
								/>
								<path
									d='M525 3680 c-161 -16 -284 -69 -375 -160 -168 -168 -170 -428 -6 -591
                    72 -71 135 -108 306 -179 165 -69 201 -90 236 -136 33 -43 37 -115 8 -165 -62
                    -108 -328 -119 -555 -23 -34 14 -63 23 -65 21 -3 -2 -18 -60 -34 -128 -17 -68
                    -33 -132 -36 -141 -4 -13 5 -22 33 -34 182 -78 454 -99 646 -50 117 30 182 64
                    259 134 97 90 146 222 135 362 -8 90 -21 130 -70 202 -68 101 -142 150 -368
                    243 -70 28 -149 66 -177 84 -142 91 -89 247 91 270 82 10 208 -5 302 -37 l85
                    -28 11 40 c6 23 23 86 38 141 20 69 25 102 17 107 -6 3 -40 16 -76 27 -110 36
                    -283 54 -405 41z'
								/>
								<path
									d='M1320 2875 l0 -785 505 0 506 0 -3 143 -3 142 -322 3 -323 2 0 185 0
                    185 288 2 287 3 3 143 3 142 -291 0 -290 0 0 165 0 165 305 0 305 0 0 145 0
                    145 -485 0 -485 0 0 -785z'
								/>
							</g>
						</svg>
					</div>
				</div>
			</div>
			<div className='items-start justify-center space-y-4 my-4 lg:my-10'>
				<h3 className='text-xl md:text-2xl'>
					Currently, I&apos;m the leader and founder of
					<span className='font-normal'> Quint, </span> where I work to develop
					innovative solutions for everyone.
				</h3>
				<h3 className='text-xl md:text-2xl'>
					Over the past year, I&apos;m particularly interested in using
					cutting-edge technologies like
					<span className='font-normal'> React, Next.JS, </span> and
					<span className='font-normal'> TailwindCSS </span> to build responsive
					and intuitive user interfaces.
				</h3>
				<h3 className='text-xl md:text-2xl'>
					I&apos;m always eager to take on new challenges and am committed to
					delivering <span className='font-normal'> High-Quality </span> work
					that exceeds my clients expectations.
				</h3>
				<h3 className='text-xl md:text-2xl'>
					When I&apos;m not coding, you can find me
					<span className='text-green-600'>
						{" "}
						catching moments with my camera,{" "}
					</span>{" "}
					trying out new
					<span className='text-yellow-400'> AI “Things” </span> or spotting
					latest tech news.
				</h3>
				<h3 className='text-2xl'></h3>
			</div>
		</div>
	);
}
