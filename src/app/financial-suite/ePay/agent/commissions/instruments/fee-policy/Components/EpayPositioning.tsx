'use client';

import React from 'react';

export const EpayPositioning: React.FC = () => {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-4">
      <div className="flex items-center gap-2 border-b border-slate-800/80 pb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">
          Posicionamento da ePay & Equilíbrio do Ecossistema
        </h3>
      </div>

      <p className="text-xs text-slate-300 leading-relaxed">
        Embora a infraestrutura do ePay Agent possua custos operacionais diferentes dos equipamentos físicos de Crypto ATM, a <strong className="text-emerald-400">EdenKingDom</strong> opta por não competir através da redução extrema de taxas.
      </p>

      <div className="space-y-2 text-xs text-slate-400">
        <p className="font-semibold text-slate-200">A taxa padrão de 10% garante:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
          <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-slate-300">
            ✓ Serviço acessível e transparente aos clientes
          </div>
          <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-emerald-400 font-semibold">
            ✓ Sustentabilidade da receita da rede de Agentes
          </div>
          <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-amber-400 font-semibold">
            ✓ Concorrência saudável com Crypto ATMs
          </div>
          <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-slate-300">
            ✓ Reconhecimento do investimento no setor físico
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpayPositioning;