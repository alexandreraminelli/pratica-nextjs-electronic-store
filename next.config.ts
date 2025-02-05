import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    /** Domínios externos para obter imagens. */
    remotePatterns: [
      { hostname: "cdsassets.apple.com" }, // Apple
      { hostname: "www.apple.com" }, // Apple
      { hostname: "samsungbrshop.vtexassets.com" }, // Samsung
      { hostname: "lh3.googleusercontent.com" }, // Google
      { hostname: "m.media-amazon.com" }, // Amazon
      { hostname: "www.oneplus.com" }, // One Plus
    ],
  },
}

export default nextConfig
