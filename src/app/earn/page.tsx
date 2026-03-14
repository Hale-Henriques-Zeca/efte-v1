"use client";

import { motion } from "framer-motion";
import EarnHub from "./components/EarnHub";
import EarnCard from "./components/EarnCard";
import StakingCard from "./components/StakingCard";
import DualProductsCard from "./components/DualProductsCard";
import VaultSavingsCard from "./components/VaultSavingsCard";
import InsurancePoolCard from "./components/InsurancePoolCard";
import DonationPoolCard from "./components/DonationPoolCard";

export default function EarnPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#020617] via-[#062B1E] to-[#020617] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-24">

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold">
            <span className="text-emerald-400">Earn</span>{" "}
            <span className="text-gray-200">& Structured Yield</span>
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto">
            Produtos de rendimento passivo da EFTE — staking, vaults,
            produtos estruturados e pools de proteção.
          </p>
        </motion.div>

        <EarnHub />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <EarnCard />
          <StakingCard />
          <DualProductsCard />
          <VaultSavingsCard />
          <InsurancePoolCard />
           <DonationPoolCard />
        </div>

      </div>
    </main>
  );
}
