// next.config.ts
import { rewrites as routeRewrites, redirects as routeRedirects } from './routes.config';

import { NextConfig } from 'next'; // optional type import

const nextConfig: NextConfig = {
    async rewrites() {
        return routeRewrites;
    },
    async redirects() {
        return routeRedirects;
    },
};

export default nextConfig;
