import "./globals.css";
import Providers from "./providers";
import { Toaster } from "./components/ui/toaster";

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
		<html
			lang='en'
			className='scroll-smooth dark'
			style={{ scrollBehavior: "smooth" }}>
			<head>
				<link rel='icon' href='/favicon.ico' sizes='any' />
				<link
					rel='icon'
					href='/icon?<generated>'
					type='image/<generated>'
					sizes='<generated>'
				/>
			</head>
			<body className='bg-gradient-to-b from-primary-light to-secondary-light dark:bg-gradient-to-b dark:from-secondary-dark dark:to-primary-dark text-font-light-mode dark:text-font-dark-mode text-3xl font-extralight drop-shadow-lg scroll-smooth overflow-x-hidden '>
				<Providers>{children}</Providers>
				<Toaster />
			</body>
		</html>
	);
}
