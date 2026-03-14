import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        /* ============================
           EBC — CORES OFICIAIS
        ============================ */

        ebc: {
          blue: "#0B5ED7",     // Azul principal (marca)
          green: "#1E9B4B",    // Verde principal (ação / conversão)
          gold: "#D4AF37",     // Gold E-Coin (premium)
          white: "#FDFDFD",    // Branco institucional
        },

        /* ============================
           FUNDOS & UI
        ============================ */

        background: {
          DEFAULT: "#FDFDFD",
          panel: "#FFFFFF",
        },

        /* ============================
           TEXTO
        ============================ */

        text: {
          DEFAULT: "#0B1F3B",
          muted: "#64748B",
        },

        /* ============================
           BORDAS
        ============================ */

        borderColor: {
          DEFAULT: "rgba(11, 94, 215, 0.15)",
        },
      },

      boxShadow: {
        soft: "0 10px 30px rgba(11, 94, 215, 0.08)",
        green: "0 10px 30px rgba(30, 155, 75, 0.15)",
        gold: "0 10px 30px rgba(212, 175, 55, 0.25)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },

  theme: {
  extend: {
    colors: {
      Gold: "#D4AF37",
    },
  },
},

  plugins: [],
};

export default config;
