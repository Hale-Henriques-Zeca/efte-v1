'use client';

import React from 'react';

export const DailyCommissionCard: React.FC = () => {
  return (
    <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-4 hover:border-emerald-500/40 transition-all duration-200">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Comissão Hoje
        </span>
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      </div>
      <div className="text-xl md:text-2xl font-black text-slate-100 font-mono">
        $ 145.80
      </div>
      <div className="flex items-center gap-1 mt-2 text-[11px] text-emerald-400 font-semibold">
        <span>↑ +12.4%</span>
        <span className="text-slate-500 font-normal">vs ontem</span>
      </div>
    </div>
  );
};

export default DailyCommissionCard;