'use client';

import React from 'react';

export const MobileBar: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 border-t border-slate-800/90 backdrop-blur-xl px-4 py-2.5 flex items-center justify-around lg:hidden">
      <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-100">
        <span className="text-base">📊</span>
        <span className="text-[10px] font-bold">Dashboard</span>
      </button>

      <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-100">
        <span className="text-base">👤</span>
        <span className="text-[10px] font-bold">Agente</span>
      </button>

      <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-100">
        <span className="text-base">💸</span>
        <span className="text-[10px] font-bold">Transfer</span>
      </button>

      <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-100">
        <span className="text-base">📜</span>
        <span className="text-[10px] font-bold">Histórico</span>
      </button>

      <button className="flex flex-col items-center gap-1 text-emerald-400 font-bold">
        <span className="text-base">⚙️</span>
        <span className="text-[10px]">Definições</span>
      </button>
    </nav>
  );
};

export default MobileBar;