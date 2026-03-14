"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Activity,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function BetMarketHub() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#120A24] via-[#1A0F3D] to-[#020617] p-10 shadow-2xl"
    >
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-400">
            EFTE Bet Markets Hub
          </h2>
          <p className="text-gray-300 text-sm mt-2 max-w-2xl">
            Mercados de previsão baseados em eventos reais do mercado cripto.
            Aqui não existe gambling cego — existe lógica, regras e liquidez
            partilhada.
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <ShieldCheck className="w-5 h-5 text-purple-400" />
          Mercado auditável & transparente
        </div>
      </div>

      {/* STATS / CONCEITOS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <HubStat
          icon={<TrendingUp className="w-7 h-7 text-emerald-400" />}
          title="Eventos Ativos"
          value="24"
          note="Mercados abertos"
        />
        <HubStat
          icon={<Layers className="w-7 h-7 text-blue-400" />}
          title="Pools de Liquidez"
          value="$3.8M"
          note="UP / DOWN / RANGE"
        />
        <HubStat
          icon={<Activity className="w-7 h-7 text-yellow-400" />}
          title="Volatilidade Média"
          value="Moderada"
          note="Baseada em oráculos"
        />
        <HubStat
          icon={<ShieldCheck className="w-7 h-7 text-purple-400" />}
          title="House Edge"
          value="1–3%"
          note="Treasury & Insurance"
        />
      </div>

      {/* EXPLAINER */}
      <div className="rounded-2xl bg-black/40 border border-white/10 p-6 text-sm text-gray-300 leading-relaxed">
        <p className="mb-2">
          🔹 <strong>Bet Markets</strong> não usam order books.
          Cada mercado cria pools de liquidez dedicados por evento.
        </p>
        <p className="mb-2">
          🔹 Os resultados são resolvidos por <strong>oráculos de preço reais</strong>,
          com snapshot temporal no encerramento.
        </p>
        <p>
          🔹 Os ganhos vêm do <strong>pool do evento</strong>, não da casa.
          A EFTE apenas aplica uma taxa mínima para sustentabilidade do sistema.
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
