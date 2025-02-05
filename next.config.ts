import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    /** Domínios externos para obter imagens. */
    remotePatterns: [
      { hostname: "cdsassets.apple.com" }, // Apple
    ],
  },
}

export default nextConfig
