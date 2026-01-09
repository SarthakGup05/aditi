/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
         {
        protocol: "https",
        hostname: "purepng.com",
      },

      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      
    ],
  },
};

module.exports = nextConfig;
