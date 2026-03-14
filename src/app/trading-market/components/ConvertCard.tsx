import { RefreshCcw } from "lucide-react";

export default function ConvertCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#062B1E] to-[#020617] p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-emerald-400 mb-4">
        EFTE Convert
      </h3>

      <p className="text-gray-300 text-sm mb-6 leading-relaxed">
        Conversão instantânea entre ativos com preço fechado e
        spread controlado. Ideal para iniciantes.
      </p>

      <ul className="text-sm text-gray-400 space-y-2 mb-8">
        <li>• Sem order book</li>
        <li>• Preço na live</li>
        <li>• Execução imediata</li>
        <li>• Interface simplificada</li>
      </ul>

      <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 transition px-6 py-3 font-semibold">
        <RefreshCcw className="w-5 h-5" />
        Converter Ativos
      </button>
    </div>
  );
}
