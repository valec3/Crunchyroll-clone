/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack5: true,
    images: {
        domains: ['cdn.sanity.io', 'pm1.aminoapps.com'],
    },
};

export default nextConfig;
