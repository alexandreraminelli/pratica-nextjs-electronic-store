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
          "03": "var(--color03)",
          "14": "var(--color14)",
          "17": "var(--color17)",
          "22": "var(--color22)",
        },
        /** Cores escuras que não mudam com o tema. */
        dark: {
          "03": "var(--dark03)",
        },
        /** Cores claras que não mudam com o tema. */
        light: {
          "14": "var(--light14)",
          "17": "var(--light17)",
        },
      },
      /** Tamanhos personalizados de tela. */
      screens: {
        xs: "328px",
      },
    },
  },
  plugins: [],
} satisfies Config
