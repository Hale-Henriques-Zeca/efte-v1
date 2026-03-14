import { TrendingUp } from "lucide-react";

export default function FuturesCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#1A0202] to-[#020617] p-8 shadow-xl">
      <h3 className="text-2xl font-bold text-red-400 mb-4">
        EFTE Perpetual Futures
      </h3>

      <p className="text-gray-300 text-sm mb-6 leading-relaxed">
        Contratos perpétuos com alavancagem controlada, funding rate transparente
        e mecanismos avançados de proteção.
      </p>

      <ul className="text-sm text-gray-400 space-y-2 mb-8">
        <li>• Perpetual Futures (sem expiração)</li>
        <li>• Alavancagem progressiva por perfil</li>
        <li>• Funding rate visível em tempo real</li>
        <li>• Auto-deleveraging justo</li>
        <li>• Proteção contra liquidação em cascata</li>
      </ul>

      <button className="w-full rounded-xl bg-red-500 hover:bg-red-600 transition px-6 py-3 font-semibold">
        Acessar Futures
      </button>
    </div>
  );
}
