"use client";

import { motion } from "framer-motion";

export default function P2PHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-24"
    >
      {/* NAV-LIKE LABELS (inspirado, não copiado) */}
      <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400 mb-6">
        <span>Buy</span>
        <span>Sell</span>
        <span>P2P</span>
        <span>Create Offer</span>
        <span>Dashboard</span>
        <span>Wallet</span>
        <span className="text-emerald-400 font-semibold">New</span>
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
        <span className="text-emerald-400">EFTE</span>{" "}
        <span className="text-gray-200">P2P Trading</span>
      </h1>

      <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-10">
        Compra e venda de criptomoedas diretamente entre pessoas,
        com custódia segura, reputação pública e suporte local
        integrado pela EdenKingDom Financial Tools Empire.
      </p>

      <button className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 font-semibold text-black shadow-xl transition">
        Start P2P Trading
      </button>
    </motion.section>
  );
}
