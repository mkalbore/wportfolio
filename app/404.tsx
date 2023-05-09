export default function Custom404() {
	return (
		<div className='bg-[#444444] w-full h-screen flex flex-col space-y-6 justify-center items-center'>
			<h1 className='drop-shadow-4xl pt-20 text-6xl text-center content-center '>
				😕 Ups nie znaleziono strony{" "}
			</h1>
			<a
				className='w-fit border-2 border-white btn btn-ghost normal-case text-2xl text-center content-center bg-[#444444] text-white'
				href='/'>
				❮-- Powrót do strony głównej
			</a>
		</div>
	);
}
