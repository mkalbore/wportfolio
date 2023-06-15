import "./globals.css";
import Providers from "./providers";
import ThemeSwitcher from "./components/ThemeSwitcher";

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
			<body className='bg-secondary-light dark:bg-secondary-dark text-font-light-mode dark:text-font-dark-mode text-3xl font-extralight drop-shadow-lg scroll-smooth overflow-x-hidden'>
				<Providers>
					{/* <ThemeSwitcher /> */}
					{children}
				</Providers>
			</body>
		</html>
	);
}
