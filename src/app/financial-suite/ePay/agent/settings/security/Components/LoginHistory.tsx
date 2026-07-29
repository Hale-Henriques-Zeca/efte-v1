'use client';

import React from 'react';

export const LoginHistory: React.FC = () => {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-wider text-red-400 border-b border-slate-800/80 pb-2 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-red-500" />
        Histórico Recente de Acessos
      </h3>
      <div className="space-y-2 text-xs">
        <div className="flex justify-between items-center p-2.5 bg-slate-950/60 rounded-xl border border-slate-800">
          <div>
            <p className="font-semibold text-slate-200">Maputo, Moçambique (IP: 197.218.xx.xx)</p>
            <p className="text-[10px] text-slate-500">29 de Julho de 2026, 20:45</p>
          </div>
          <span className="text-[10px] text-emerald-400 font-bold">Sucesso</span>
        </div>
      </div>
    </div>
  );
};

export default LoginHistory;