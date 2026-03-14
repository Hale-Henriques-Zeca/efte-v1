import { Brain } from "lucide-react";

export default function AIPredictionCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0A1A3D] to-[#020617] p-8">
      <h3 className="text-2xl font-bold text-indigo-400 mb-4">
        AI Prediction Markets
      </h3>

      <p className="text-sm text-gray-300 mb-6">
        A EFTE-AI publica cenários. O mercado decide se concorda ou não.
      </p>

      <ul className="text-sm text-gray-400 space-y-2 mb-8">
        <li>• Probabilidades calculadas por IA</li>
        <li>• Usuários apostam contra ou a favor</li>
        <li>• IA não ganha, apenas sugere</li>
        <li>• Total transparência</li>
      </ul>

      <button className="w-full rounded-xl bg-indigo-500 hover:bg-indigo-600 px-6 py-3 font-semibold">
        Ver Previsões
      </button>
    </div>
  );
}
