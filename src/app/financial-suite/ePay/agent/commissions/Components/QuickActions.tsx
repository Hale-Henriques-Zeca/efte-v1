'use client';

import React from 'react';
import Link from 'next/link';

export const QuickActions: React.FC = () => {
  return (
    <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-5 space-y-4 h-full flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider mb-1">
          Ações Rápidas
        </h3>
        <p className="text-xs text-slate-400">Operações e navegação financeira</p>
      </div>

      <div className="space-y-3">
        {/* Botão de Acesso por Cima da Page para Instrumentos */}
        <Link
          href="/financial-suite/ePay/agent/commissions/instruments"
          className="w-full flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/20 transition-all"
        >
          <div className="flex items-center gap-2">
            <span>📊</span>
            <span>Painel de Instrumentos</span>
          </div>
          <span>→</span>
        </Link>

        {/* Botão Exportar */}
        <button className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-bold text-xs transition-all">
          <div className="flex items-center gap-2">
            <span>📥</span>
            <span>Exportar Relatório (CSV/PDF)</span>
          </div>
          <span className="text-[10px] text-amber-400 font-mono">10% Fee</span>
        </button>
      </div>

      <div className="pt-3 border-t border-slate-800/80 text-center">
        <span className="text-[10px] text-slate-500">ePay Agent Financial Operations</span>
      </div>
    </div>
  );
};

export default QuickActions;