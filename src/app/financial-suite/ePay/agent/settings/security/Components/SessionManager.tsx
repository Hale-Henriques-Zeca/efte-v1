'use client';

import React from 'react';

export const SessionManager: React.FC = () => {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 border-b border-slate-800/80 pb-2 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-amber-400" />
        Sessões Ativas
      </h3>
      <div className="space-y-2">
        <div className="flex justify-between items-center p-3 bg-slate-950/60 rounded-xl border border-slate-800">
          <div>
            <p className="text-xs font-semibold text-slate-200">Chrome no Windows • Maputo, MZ</p>
            <p className="text-[10px] text-emerald-400">Esta sessão (Atual)</p>
          </div>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>
      </div>
      <button className="w-full py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 font-bold text-xs rounded-xl transition">
        Encerrar Todas as Outras Sessões
      </button>
    </div>
  );
};

export default SessionManager;