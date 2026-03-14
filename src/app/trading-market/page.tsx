"use client";

import { motion } from "framer-motion";
import MarketHub from "./components/MarketHub";
import SpotTradingCard from "./components/SpotTradingCard";
import ConvertCard from "./components/ConvertCard";

export default function TradingMarketPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#020617] via-[#041C2C] to-[#020617] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="text-emerald-400">Trading</span>{" "}
            <span className="text-blue-400">& Market</span>{" "}
            <span className="text-gray-200">Infrastructure</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            O núcleo de observação, análise e execução de mercado da
            <span className="text-emerald-400 font-semibold"> EFTE</span>.
            Aqui o valor é analisado, precificado e preparado para negociação.
          </p>
        </motion.div>

        {/* MARKET HUB */}
        <MarketHub />

        {/* TRADING OPTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SpotTradingCard />
          <ConvertCard />
        </div>

      </div>
    </main>
  );
}
