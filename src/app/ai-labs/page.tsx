"use client";

import { motion } from "framer-motion";
import AIHub from "./components/AIHub";
import AISignalsCard from "./components/AISignalsCard";
import SyntheticAICard from "./components/SyntheticAICard";
import GovernanceCard from "./components/GovernanceCard";



export default function AILabsPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#020617] via-[#0A1A3D] to-[#020617] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-24">

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold">
            <span className="text-indigo-400">AI</span>{" "}
            <span className="text-gray-200">& Governance</span>
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto">
            Inteligência, Automação Inteligente, laboratórios estratégicos e governação
            do ecossistema EFTE.
          </p>
        </motion.div>


        <AIHub />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AISignalsCard />
          <SyntheticAICard />
          <GovernanceCard />
        </div>



      </div>
    </main>
  );
}
