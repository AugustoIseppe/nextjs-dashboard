/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https:',
                domain: 'images.unsplash.com',
            },
            {
                protocol: 'https:',
                domain: 'plus.unsplash.com',
            },
        ]
    }
};

export default nextConfig;
