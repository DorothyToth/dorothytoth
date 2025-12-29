/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,

  /**
   * Rewrites https://nextjs.org/docs/app/api-reference/config/next-config-js/rewrites
   * because to support PR previews we need a multi-zone deployment
   * https://nextjs.org/docs/pages/guides/multi-zones
   */
  async rewrites() {
    return [
      {
        source: '/pr-preview/pr-26',
        destination: `https://dorothytoth.com/pr-preview/pr-26/:path+`,
      },
    ]
  },

  /**
   * Enable static exports.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
