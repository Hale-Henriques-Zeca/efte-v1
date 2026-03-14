"use client";

import { motion } from "framer-motion";
import FuturesCard from "./components/FuturesCard";
import MarginTradingCard from "./components/MarginTradingCard";
import RiskNotice from "./components/RiskNotice";

export default function DerivativesPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#020617] via-[#1A0202] to-[#020617] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="text-red-500">Derivatives</span>{" "}
            <span className="text-gray-200">& Leverage</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Infraestrutura avançada de negociação alavancada da
            <span className="text-red-400 font-semibold"> EFTE</span>, projetada
            para controle de risco, transparência e sustentabilidade.
          </p>
        </motion.div>

        {/* RISK NOTICE */}
        <RiskNotice />

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <FuturesCard />
          <MarginTradingCard />
        </div>

      </div>
    </main>
  );
}
