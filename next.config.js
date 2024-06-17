/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "lh3.googleusercontent.com"
        ]
    }
}

const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public",
    register: true,
    skipWaiting: true,
    extendDefaultRuntimeCaching: true,
    fallbacks: {
        document: "/~offline",
    },
    workboxOptions: {
        runtimeCaching: [
            {
                urlPattern: /^https:\/\/el-corchazo-admin\.vercel\.app\/rest\/.*/i,
                handler: 'NetworkFirst',
                options: {
                    cacheName: 'api-cache',
                    expiration: {
                        maxEntries: 50,
                        maxAgeSeconds: 24 * 60 * 60,  // 1 day
                    },
                    networkTimeoutSeconds: 10,
                },
            },
        ],
    },
});

module.exports = withPWA(nextConfig);
