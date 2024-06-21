/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: '/blog',
    transpilePackages: ["@repo/ui"],
    output:'standalone'
};

export default nextConfig;
