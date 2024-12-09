import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
	},
	serverExternalPackages: ['pino', 'pino-pretty'],
};

export default nextConfig;
