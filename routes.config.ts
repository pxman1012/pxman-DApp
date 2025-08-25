// routes.config.ts
import { Rewrite, Redirect } from 'next/dist/lib/load-custom-routes';

export const rewrites: Rewrite[] = [
    {
        source: '/wallet',
        destination: '/',
    },
];

export const redirects: Redirect[] = [
    {
        source: '/',
        destination: '/wallet',
        permanent: false, // hoặc true nếu muốn 308
    },
];
