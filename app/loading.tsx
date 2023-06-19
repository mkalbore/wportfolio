export default function Loading() {
	// You can add any UI inside Loading, including a Skeleton.
	return (
		<div className='flex bg-primary-light/10 mx-auto justify-center '>
			<span className='animate-spin px-2'>🌀</span>{" "}
			<span className='animate-pulse text-3xl md:text-4xl'>Loading...</span>
		</div>
	);
}
