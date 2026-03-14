"use client";

import { motion } from "framer-motion";
import MarketStats from "./MarketStats";
import { Activity, BarChart3, Droplet } from "lucide-react";

export default function MarketHub() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#061A2E] to-[#020617] p-10 shadow-xl"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-emerald-400">
          EFTE Markets
        </h2>
        <span className="text-sm text-gray-400">
          Dados em tempo real • EFTE Core
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <MarketStats
          icon={<BarChart3 className="w-8 h-8 text-blue-400" />}
          title="Volume Global"
          value="$1.42B"
        />
        <MarketStats
          icon={<Droplet className="w-8 h-8 text-emerald-400" />}
          title="Liquidez Média"
          value="Alta"
        />
        <MarketStats
          icon={<Activity className="w-8 h-8 text-yellow-400" />}
          title="Volatilidade"
          value="Moderada"
        />
      </div>

      <div className="text-gray-300 text-sm leading-relaxed">
        <p>
          O Market Hub da EFTE fornece uma visão institucional do mercado:
          volumes reais, liquidez disponível, volatilidade e sentimento
          calculado por IA — <strong>sem influência social</strong>.
        </p>
      </div>
    </motion.section>
  );
}
