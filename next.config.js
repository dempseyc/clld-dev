/** @type {import('next').NextConfig} */
const nextConfig = {
  // assetPrefix: process.env.NODE_ENV === "production" ? "/dev" : "",
  // assetPrefix: "/dev",
  // basePath: "/dev",
  reactStrictMode: true,
  swcMinify: true,
//   async redirects() {
//     return [
//       {
//         source: "/",
//         destination: "/home",
//         permanent: true,
//       },
//     ];
//   },
};

module.exports = nextConfig;
