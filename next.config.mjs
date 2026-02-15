/** @type {import('next').NextConfig} */
const nextConfig = {
  
  typescript: {
    ignoreBuildErrors: true,
  },
   output: "export",
    basePath: "/Towkeyshouse",
    assetPrefix: "/Towkeyshouse",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
