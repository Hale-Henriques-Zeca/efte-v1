import { Layers } from "lucide-react";

export default function MarginTradingCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#041C2C] to-[#020617] p-8 shadow-xl">
      <h3 className="text-2xl font-bold text-blue-400 mb-4">
        EFTE Margin Trading
      </h3>

      <p className="text-gray-300 text-sm mb-6 leading-relaxed">
        Negociação spot com empréstimo integrado, juros dinâmicos e controle
        total de exposição.
      </p>

      <ul className="text-sm text-gray-400 space-y-2 mb-8">
        <li>• Spot + Empréstimo</li>
        <li>• Juros dinâmicos por demanda</li>
        <li>• Modo Isolado e Cross</li>
        <li>• Limites baseados em KYC e histórico</li>
        <li>• Monitoramento de risco em tempo real</li>
      </ul>

      <button className="w-full rounded-xl bg-blue-500 hover:bg-blue-600 transition px-6 py-3 font-semibold">
        Acessar Margin Trading
      </button>
    </div>
  );
}
