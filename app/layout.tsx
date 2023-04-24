import "./globals.css";

export const metadata = {
	title: "Quint - Software Developer",
	description: "Idepedent Software Developer",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className='bg-[#444444] text-3xl font-extralight drop-shadow-lg scroll-smooth '>
				{children}
			</body>
		</html>
	);
}
