import { ArrowLeftRight } from "lucide-react";

export default function SpotTradingCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#041C2C] to-[#020617] p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-blue-400 mb-4">
        EFTE Spot Trading
      </h3>

      <p className="text-gray-300 text-sm mb-6 leading-relaxed">
        Trading clássico com profundidade real de mercado, taxas transparentes
        e execução institucional.
      </p>

      <ul className="text-sm text-gray-400 space-y-2 mb-8">
        <li>• Market & Limit Orders</li>
        <li>• Stop-Limit e OCO</li>
        <li>• Order Book real</li>
        <li>• Slippage visível antes da execução</li>
      </ul>

      <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-500 hover:bg-blue-600 transition px-6 py-3 font-semibold">
        <ArrowLeftRight className="w-5 h-5" />
        Ir para Spot Trading
      </button>
    </div>
  );
}
