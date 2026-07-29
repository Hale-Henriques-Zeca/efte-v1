'use client';

import React from 'react';

export const MonthlyCommissionCard: React.FC = () => {
  return (
    <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-4 hover:border-emerald-500/40 transition-all duration-200">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Este Mês
        </span>
        <span className="w-2 h-2 rounded-full bg-emerald-400" />
      </div>
      <div className="text-xl md:text-2xl font-black text-slate-100 font-mono">
        $ 4,890.00
      </div>
      <div className="flex items-center gap-1 mt-2 text-[11px] text-emerald-400 font-semibold">
        <span>↑ +15.3%</span>
        <span className="text-slate-500 font-normal">meta atingida</span>
      </div>
    </div>
  );
};

export default MonthlyCommissionCard;