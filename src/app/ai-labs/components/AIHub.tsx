"use client";

import { motion } from "framer-motion";
import { Brain, Network, Settings } from "lucide-react";

export default function AIHub() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0A1A3D] via-[#1A0F3D] to-[#020617] p-10 shadow-2xl"
    >
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-400">
            EFTE AI, Labs & Governance Hub
          </h2>
          <p className="text-gray-300 text-sm mt-2 max-w-2xl">
            Inteligência artificial, laboratórios estratégicos
            e governação do ecossistema EFTE.
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Brain className="w-5 h-5 text-indigo-400" />
          IA explicável & auditável
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <HubStat
          icon={<Brain className="w-7 h-7 text-indigo-400" />}
          title="AI Signals"
          value="Probabilísticos"
          note="Sem copy trading"
        />
        <HubStat
          icon={<Network className="w-7 h-7 text-blue-400" />}
          title="Strategy Labs"
          value="Marketplace"
          note="Histórico validado"
        />
        <HubStat
          icon={<Settings className="w-7 h-7 text-emerald-400" />}
          title="Governance"
          value="Ativa"
          note="Fees & limites"
        />
      </div>

      {/* EXPLANATION */}
      <div className="rounded-2xl bg-black/40 border border-white/10 p-6 text-sm text-gray-300 leading-relaxed">
        <p className="mb-2">
          🔹 A <strong>IA da EFTE</strong> não executa trades,
          ela publica cenários e probabilidades.
        </p>
        <p className="mb-2">
          🔹 Estratégias são disponibilizadas com
          <strong> métricas reais e auditáveis</strong>.
        </p>
        <p>
          🔹 A <strong>Governance</strong> define regras do sistema:
          taxas, mercados, limites e proteção do ecossistema.
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
