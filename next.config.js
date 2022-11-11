/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/",
  images: {
    unoptimized: true,
    path: "/"
  }
}

module.exports = nextConfig
