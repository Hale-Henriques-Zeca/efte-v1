import { SlidersHorizontal } from "lucide-react";

export default function RangeBetsCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0A2A3D] to-[#020617] p-8">
      <h3 className="text-2xl font-bold text-blue-400 mb-4">
        Price Range Bets
      </h3>

      <p className="text-sm text-gray-300 mb-6">
        O preço vai fechar dentro de um intervalo específico?
      </p>

      <ul className="text-sm text-gray-400 space-y-2 mb-8">
        <li>• Range definido (X → Y)</li>
        <li>• Odds dinâmicas</li>
        <li>• Liquidez compartilhada</li>
        <li>• Evento fechado no tempo</li>
      </ul>

      <button className="w-full rounded-xl bg-blue-500 hover:bg-blue-600 px-6 py-3 font-semibold">
        Explorar Ranges
      </button>
    </div>
  );
}
