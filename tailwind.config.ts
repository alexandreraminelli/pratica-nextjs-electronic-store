import type { Config } from "tailwindcss"

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        /** Cor do background. */
        background: "var(--background)",
        /** Cor que fornece contraste ao background. */
        foreground: "var(--foreground)",

        /** Cores do style guide. */
        color: {
          "14": "var(--color14)",
          "17": "var(--color17)",
          "22": "var(--color22)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config
