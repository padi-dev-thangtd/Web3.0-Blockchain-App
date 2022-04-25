/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'pytalent_admin.com',
      'admin.pytalent.com',
      'dev-admin.pytalent.com',
    ],
  },
  reactStrictMode: true,
  swcMinify: false,
  env: {
    APP_DOMAIN: process.env.NEXT_APP_DOMAIN,
  },
  // experimental: {
  //   optimizeCss: true,
  //   concurrentFeatures: true,
  //   runtime: "edge",
  //   serverComponents: true,
  // },
};

module.exports = nextConfig;
