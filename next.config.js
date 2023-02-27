const withExportImages = require('next-export-optimize-images');

/** @type {import('next').NextConfig} */
const nextConfig = withExportImages({
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
});

module.exports = nextConfig
