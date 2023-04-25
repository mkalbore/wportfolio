/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		// images: { domains: ["https://simpleicons.org/"] },
		urlImports: ["https://simpleicons.org/"],
	},
};

module.exports = nextConfig;
