'use client';

import React from 'react';

export const TicketHistory: React.FC = () => {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-4 md:col-span-2">
      <h3 className="text-sm font-bold uppercase tracking-wider text-red-400 border-b border-slate-800/80 pb-2 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-red-500" />
        Histórico de Tickets & Soluções
      </h3>
      
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-slate-950/60 rounded-xl border border-slate-800 gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-200">#TK-80291 - Dúvida sobre limite de liquidação Off-Chain</span>
            </div>
            <p className="text-[10px] text-slate-500 mt-0.5">Criado em: 28/07/2026 • Categoria: Financeiro</p>
          </div>
          <span className="self-start sm:self-center px-2.5 py-1 text-[10px] font-bold uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Resolvido
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-slate-950/60 rounded-xl border border-slate-800 gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-200">#TK-80144 - Atualização de documento de residência</span>
            </div>
            <p className="text-[10px] text-slate-500 mt-0.5">Criado em: 20/07/2026 • Categoria: KYC</p>
          </div>
          <span className="self-start sm:self-center px-2.5 py-1 text-[10px] font-bold uppercase rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
            Em Análise
          </span>
        </div>
      </div>
    </div>
  );
};

export default TicketHistory;