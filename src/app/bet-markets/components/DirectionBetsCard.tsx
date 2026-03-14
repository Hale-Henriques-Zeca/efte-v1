import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function DirectionBetsCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#1F0A33] to-[#020617] p-8">
      <h3 className="text-2xl font-bold text-purple-400 mb-4">
        Price Direction Bets
      </h3>

      <p className="text-sm text-gray-300 mb-6">
        Participa na direção do preço — sem order book. Pools UP vs DOWN.
      </p>

      <ul className="text-sm text-gray-400 space-y-2 mb-8">
        <li>• ⬆ UP / ⬇ DOWN</li>
        <li>• Horizontes: 1m, 5m, 1h, 24h</li>
        <li>• Liquidez por evento</li>
        <li>• Risco definido no início</li>
      </ul>

      <button className="w-full rounded-xl bg-purple-500 hover:bg-purple-600 px-6 py-3 font-semibold">
        Explorar Direção
      </button>
    </div>
  );
}
