import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		unoptimized: true,
	},
	output: "export",
	typescript: {
		ignoreBuildErrors: true,
	},
};

export default nextConfig;
