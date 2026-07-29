'use client';

import React from 'react';

export const USDTotals: React.FC = () => {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
      <div>
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Total USD (Fiat Base)
        </span>
        <div className="text-lg font-black text-emerald-400 font-mono mt-0.5">
          $ 4,890.31
        </div>
      </div>
      <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">
        USD
      </div>
    </div>
  );
};

export default USDTotals;