import type { Config } from "tailwindcss"

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Cores do tema
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Cores secundárias
        charcoal: "#2E2E2E",
        white: {
          smoke: "#F5F5F5",
        },
        gray: {
          dim: "#656565",
          battleship: "#989898",
        },
      },
    },
  },
  plugins: [],
} satisfies Config
