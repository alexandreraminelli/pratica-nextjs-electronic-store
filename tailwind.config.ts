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

        // Cores de destaque
        red: {
          "01": "var(--red1)",
          "02": "var(--red2)",
        },
        purple: "var(--purple)",
        orange: {
          normal: "var(--orange)",
          light: "var(--orange-light)",
        },
        raisinblack: "var(--raisin-black)",

        /** Cores monocromáticas que variam com o tema. */
        color: {
          "1": "var(--color01)",
          "2": "var(--color02)",
          "3": "var(--color03)",
          "4": "var(--color04)",
          "5": "var(--color05)",
          "6": "var(--color06)",
          "7": "var(--color07)",
          "8": "var(--color08)",
          "9": "var(--color09)",
          "10": "var(--color10)",
          "11": "var(--color11)",
          "12": "var(--color12)",
          "13": "var(--color13)",
          "14": "var(--color14)",
          "15": "var(--color15)",
          "16": "var(--color16)",
          "17": "var(--color17)",
          "18": "var(--color18)",
          "19": "var(--color19)",
          "20": "var(--color20)",
          "21": "var(--color21)",
          "22": "var(--color22)",
          "23": "var(--color23)",
          "24": "var(--color24)",
          "25": "var(--color25)",
          "26": "var(--color26)",
          "27": "var(--color27)",
          "28": "var(--color28)",
          "29": "var(--color29)",
          "30": "var(--color30)",
          "31": "var(--color31)",
          "32": "var(--color32)",
          "33": "var(--color33)",
          "34": "var(--color34)",
          "35": "var(--color35)",
          "36": "var(--color36)",
          "37": "var(--color37)",
          "38": "var(--color38)",
          "39": "var(--color39)",
          "40": "var(--color40)",
          "41": "var(--color41)",
          "42": "var(--color42)",
          "43": "var(--color43)",
          "44": "var(--color44)",
          "45": "var(--color45)",
          "46": "var(--color46)",
          "47": "var(--color47)",
          "48": "var(--color48)",
        },
        /** Cores escuras que não mudam com o tema. */
        dark: {
          "1": "var(--dark01)",
          "3": "var(--dark03)",
          "5": "var(--dark05)",
          "10": "var(--dark10)",
          "12": "var(--dark12)",
          "17": "var(--dark17)",
          "27": "var(--dark27)",
          "28": "var(--dark28)",
          "38": "var(--dark38)",
          "40": "var(--dark40)",
          "41": "var(--dark41)",
          "42": "var(--dark42)",
          "43": "var(--dark43)",
          "44": "var(--dark44)",
          "45": "var(--dark45)",
          "46": "var(--dark46)",
        },
        /** Cores claras que não mudam com o tema. */
        light: {
          "2": "var(--light02)",
          "4": "var(--light04)",
          "6": "var(--light06)",
          "7": "var(--light07)",
          "8": "var(--light08)",
          "9": "var(--light09)",
          "11": "var(--light11)",
          "13": "var(--light13)",
          "14": "var(--light14)",
          "15": "var(--light15)",
          "16": "var(--light16)",
          "18": "var(--light18)",
          "19": "var(--light19)",
          "20": "var(--light20)",
          "21": "var(--light21)",
          "22": "var(--light22)",
          "23": "var(--light23)",
          "24": "var(--light24)",
          "25": "var(--light25)",
          "26": "var(--light26)",
          "29": "var(--light29)",
          "30": "var(--light30)",
          "31": "var(--light31)",
          "32": "var(--light32)",
          "33": "var(--light33)",
          "34": "var(--light34)",
          "35": "var(--light35)",
          "36": "var(--light36)",
          "37": "var(--light37)",
          "39": "var(--light39)",
          "47": "var(--light47)",
          "48": "var(--light48)",
        },
      },
      /** Tamanhos personalizados de tela. */
      screens: {
        xs: "328px",
      },
      /** Espaçamentos personalizados. */
      spacing: {
        // Container
        container: "var(--container-spacing)",
        "container-size": "var(--container)",

        "13": "3.25rem /* 52px */",
        "22": "5.5rem /* 88px */",
        "26": "6.5rem /* 104px */",
      },
      /** Altura da linha. */
      lineHeight: {
        "11": "3rem /* 48px */",
      },
      /** Imagens de background. */
      backgroundImage: {
        "bigSummerSale-mobile": "url('/banners/big-summer-sale/big-summer-sale-mobile.png')",
        "bigSummerSale-desktop": "url('/banners/big-summer-sale/big-summer-sale-desktop.png')",
      },
      /** Templates de colunas do grid layout. */
      gridTemplateColumns: {
        "auto-fit-40": "repeat(auto-fit, minmax(10rem /* 160px */, 1fr))",
        "auto-fit-42": "repeat(auto-fit, minmax(10.5rem /* 168px */, 1fr))",
        "auto-fit-54": "repeat(auto-fit, minmax(13.5rem /* 216px */, 1fr))",
      },
    },
  },
  plugins: [],
} satisfies Config
