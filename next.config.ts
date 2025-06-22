import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		unoptimized: true,
	},
	output: "export",
	typescript: {
		ignoreBuildErrors: true,
	},
};

export default nextConfig;
