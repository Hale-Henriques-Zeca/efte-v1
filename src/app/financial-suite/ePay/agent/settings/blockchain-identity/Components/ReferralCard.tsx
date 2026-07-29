'use client';

import { useState } from 'react';
import { FaUsers, FaCopy, FaCheck } from 'react-icons/fa';

export default function ReferralCard() {
  const [copied, setCopied] = useState(false);
  const refLink = "https://edenkingdom.org/pay/ref/agent-0482";

  const handleCopy = () => {
    navigator.clipboard.writeText(refLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 w-full">
      <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
        <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400">
          <FaUsers className="text-lg" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-white">Link de Indicação de Promotor (1%)</h2>
          <p className="text-xs text-slate-400">Receba 1% de comissão permanente sobre novos agentes recrutados</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 flex items-center justify-between gap-2">
          <code className="text-xs font-mono text-slate-300 truncate">{refLink}</code>
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap"
          >
            {copied ? <FaCheck /> : <FaCopy />}
            {copied ? 'Copiado!' : 'Copiar'}
          </button>
        </div>

        <div className="flex justify-between items-center text-[11px] text-slate-400 px-1">
          <span>Agentes Subordinados: <strong className="text-white">12</strong></span>
          <span>Comissão Acumulada: <strong className="text-emerald-400">1.450 eDollar</strong></span>
        </div>
      </div>
    </div>
  );
}