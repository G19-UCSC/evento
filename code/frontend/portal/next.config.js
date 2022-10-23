/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig
