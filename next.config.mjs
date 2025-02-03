/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  transpilePackages: ["react-intersection-observer"],
  experimental: {
    serverComponentsExternalPackages: ["openai"], // Ensure OpenAI package works
  },
};



export default nextConfig;
