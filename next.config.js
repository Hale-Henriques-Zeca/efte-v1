const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Alias para src
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },

  // Evita que o build falhe se houver erros TypeScript
  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
  ignoreDuringBuilds: true,
},
  // Remove header de "Powered by Next.js"
  poweredByHeader: false,

  // Ativa React Strict Mode
  reactStrictMode: true,

  // Configuração de imagens externas
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
    unoptimized: false,
  },

  // Experimental se precisar de recursos novos
  experimental: {
    serverActions: {},
  },
};

module.exports = nextConfig;