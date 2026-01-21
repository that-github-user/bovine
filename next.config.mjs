/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment
  // Uncomment and set basePath if deploying to a subdirectory (e.g., /bovine)
  // basePath: '/bovine',
  trailingSlash: true,
};

export default nextConfig;
