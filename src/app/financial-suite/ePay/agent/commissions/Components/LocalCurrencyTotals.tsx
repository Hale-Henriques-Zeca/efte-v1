'use client';

import React from 'react';

export const LocalCurrencyTotals: React.FC = () => {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
      <div>
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Total Moeda Local (MZN)
        </span>
        <div className="text-lg font-black text-amber-400 font-mono mt-0.5">
          312.980,00 MT
        </div>
      </div>
      <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xs">
        MZN
      </div>
    </div>
  );
};

export default LocalCurrencyTotals;