/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		images: { domains: ["simpleicons.org", "localhost"] }, // Add your domain here
		urlImports: ["https://simpleicons.org/"],
	},
};

module.exports = nextConfig;
