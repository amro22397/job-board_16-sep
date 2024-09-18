/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        return config;
      },
    experimental: {
        esmExternals: "loose", // <-- add this
       serverComponentsExternalPackages: ["mongoose"] 
    },    
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            }
        ]
    }
};

export default nextConfig;
