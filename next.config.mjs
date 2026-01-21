/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment under /bovine/
  basePath: '/bovine',
  assetPrefix: '/bovine/',
  trailingSlash: true,
};

export default nextConfig;
