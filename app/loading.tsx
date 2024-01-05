export default function Loading() {
	// You can add any UI inside Loading, including a Skeleton.
	return (
		<div className='flex flex-col mx-auto gap-4 justify-center h-screen'>
			<span className='flex justify-center items-center mx-auto animate-spin px-2'>
				🌀
			</span>{" "}
			<span className='flex justify-center items-center mx-auto animate-pulse text-3xl md:text-4xl'>
				Loading...
			</span>
			<div className='absolute -z-50 mx-auto justify-center blur-sm bg-primary-light/10  dark:bg-slate-950/80'></div>
		</div>
	);
}
