import { CalendarCheck } from "lucide-react";

export default function EventBetsCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#2A2A0A] to-[#020617] p-8">
      <h3 className="text-2xl font-bold text-yellow-400 mb-4">
        Event-Based Bets
      </h3>

      <p className="text-sm text-gray-300 mb-6">
        Aposta em eventos reais do mercado — não apenas preço.
      </p>

      <ul className="text-sm text-gray-400 space-y-2 mb-8">
        <li>• Ruptura de níveis</li>
        <li>• Indicadores técnicos</li>
        <li>• Regras claras e auditáveis</li>
        <li>• Sem manipulação</li>
      </ul>

      <button className="w-full rounded-xl bg-yellow-500 hover:bg-yellow-600 px-6 py-3 font-semibold text-black">
        Ver Eventos
      </button>
    </div>
  );
}
