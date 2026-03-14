"use client";

import { motion } from "framer-motion";
import { PiggyBank, ShieldCheck, TrendingUp } from "lucide-react";

export default function EarnHub() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#062B1E] via-[#041C2C] to-[#020617] p-10 shadow-2xl"
    >
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-400">
            EFTE Earn & Yield Hub
          </h2>
          <p className="text-gray-300 text-sm mt-2 max-w-2xl">
            Produtos de rendimento passivo estruturados, sustentáveis
            e integrados à infraestrutura financeira da EFTE.
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          Rendimento com gestão de risco
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <HubStat
          icon={<TrendingUp className="w-7 h-7 text-green-400" />}
          title="APY Dinâmico e flexível"
          value="3% – 18%"
          note="Baseado em utilização real"
        />
        <HubStat
          icon={<PiggyBank className="w-7 h-7 text-emerald-400" />}
          title="Capital Protegido"
          value="Vaults"
          note="Separação por risco"
        />
        <HubStat
          icon={<ShieldCheck className="w-7 h-7 text-yellow-400" />}
          title="Insurance Pool"
          value="Ativo"
          note="Proteção sistémica"
        />
      </div>

      {/* EXPLANATION */}
      <div className="rounded-2xl bg-black/40 border border-white/10 p-6 text-sm text-gray-300 leading-relaxed">
        <p className="mb-2">
          🔹 Os produtos <strong>Earn</strong> utilizam taxas, liquidez
          e operações internas da EFTE.
        </p>
        <p className="mb-2">
          🔹 <strong>Staking</strong> e <strong>Vault Savings</strong>
          priorizam previsibilidade e segurança.
        </p>
        <p>
          🔹 <strong>Dual Products</strong> oferecem maior retorno
          com condições de mercado bem definidas.
        </p>
      </div>
    </motion.section>
  );
}

/* =========================
   Subcomponente interno
========================= */

function HubStat({
  icon,
  title,
  value,
  note,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex items-center gap-4">
      <div className="p-3 rounded-xl bg-black/50">{icon}</div>
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <p className="text-xl font-bold text-white">{value}</p>
        <p className="text-xs text-gray-500">{note}</p>
      </div>
    </div>
  );
}
