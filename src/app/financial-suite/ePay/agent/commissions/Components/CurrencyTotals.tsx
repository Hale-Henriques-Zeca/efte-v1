'use client';

import React from 'react';

export const CurrencyTotals: React.FC = () => {
  return (
    <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-5 space-y-3">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
          Totais por Ativo do Ecossistema
        </h3>
        <span className="text-[10px] text-slate-500 font-mono">Real-time</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* eDollar */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 flex flex-col">
          <span className="text-[10px] font-bold text-slate-400">Total em eDollar</span>
          <span className="text-lg font-extrabold text-emerald-400 font-mono mt-1">$ 3,250.00</span>
          <span className="text-[10px] text-slate-500">eUSD</span>
        </div>

        {/* eCoin */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 flex flex-col">
          <span className="text-[10px] font-bold text-slate-400">Total em eCoin</span>
          <span className="text-lg font-extrabold text-amber-400 font-mono mt-1">14,850.00</span>
          <span className="text-[10px] text-slate-500">eCOIN</span>
        </div>

        {/* BNB */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 flex flex-col">
          <span className="text-[10px] font-bold text-slate-400">Total em BNB</span>
          <span className="text-lg font-extrabold text-red-400 font-mono mt-1">2.45 BNB</span>
          <span className="text-[10px] text-slate-500">Gas & Liquidez</span>
        </div>
      </div>
    </div>
  );
};

export default CurrencyTotals;