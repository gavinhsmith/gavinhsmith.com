/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  basePath: "",
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
