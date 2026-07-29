'use client';

import React from 'react';

export const LifetimeCommissionCard: React.FC = () => {
  return (
    <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-4 hover:border-red-500/40 transition-all duration-200">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Total Geral (Lifetime)
        </span>
        <span className="w-2 h-2 rounded-full bg-red-500" />
      </div>
      <div className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-400 to-red-500 font-mono">
        $ 38,420.15
      </div>
      <div className="flex items-center gap-1 mt-2 text-[11px] text-slate-400 font-semibold">
        <span>🌐 1.482 transações</span>
      </div>
    </div>
  );
};

export default LifetimeCommissionCard;