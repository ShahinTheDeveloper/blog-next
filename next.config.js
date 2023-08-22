/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "build", // Custom build directory name
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "X-Frame-Options",
                        value: "DENY",
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
