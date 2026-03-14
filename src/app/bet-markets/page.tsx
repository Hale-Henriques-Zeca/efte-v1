"use client";

import { motion } from "framer-motion";
import BetMarketHub from "./components/BetMarketHub";
import DirectionBetsCard from "./components/DirectionBetsCard";
import RangeBetsCard from "./components/RangeBetsCard";
import EventBetsCard from "./components/EventBetsCard";
import AIPredictionCard from "./components/AIPredictionCard";
import BetArchitecture from "./components/BetArchitecture";

export default function BetMarketsPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#020617] via-[#2A0A3D] to-[#020617] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold">
            <span className="text-purple-400">EFTE</span>{" "}
            <span className="text-blue-400">Bet Markets</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            Mercados de previsão baseados em eventos reais do mercado cripto.
            <strong className="text-purple-300"> Não é gambling</strong>.
            É participação estratégica no preço e nos eventos.
          </p>
        </motion.div>

        {/* MARKET HUB */}
        <BetMarketHub />

        {/* BET TYPES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <DirectionBetsCard />
          <RangeBetsCard />
          <EventBetsCard />
          <AIPredictionCard />
        </div>

        {/* ARCHITECTURE */}
        <BetArchitecture />

      </div>
    </main>
  );
}
