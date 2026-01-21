/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // No basePath needed when using custom domain (boviness.com)
  // basePath: '/bovine',
  // assetPrefix: '/bovine/',
  trailingSlash: true,
};

export default nextConfig;
