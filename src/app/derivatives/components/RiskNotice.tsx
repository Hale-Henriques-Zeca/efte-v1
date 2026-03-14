import { AlertTriangle } from "lucide-react";

export default function RiskNotice() {
  return (
    <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6 flex gap-4">
      <AlertTriangle className="w-6 h-6 text-red-400 mt-1" />
      <div className="text-sm text-gray-300 leading-relaxed">
        <p className="font-semibold text-red-400 mb-1">
          Aviso de Risco — Produtos Alavancados
        </p>
        <p>
          Futures e Margin Trading envolvem risco elevado. A EFTE aplica limites
          progressivos, proteção contra over-leverage e mecanismos automáticos
          de redução de exposição para proteger o ecossistema.
        </p>
      </div>
    </div>
  );
}
