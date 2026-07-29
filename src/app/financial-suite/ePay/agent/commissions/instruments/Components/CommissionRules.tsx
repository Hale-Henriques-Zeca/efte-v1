'use client';

import React from 'react';

export const CommissionRules: React.FC = () => {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-6 md:col-span-2">
      <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800/80 pb-2 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        Regras de Distribuição de Comissões e Pools
      </h3>

      {/* Fluxo Visual de Divisão de 5% */}
      <div className="space-y-3">
        <p className="text-xs font-semibold text-slate-300">
          Divisão Transparente da Taxa Operacional (10% Total):
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
          <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl">
            <span className="text-[10px] text-slate-500 uppercase font-bold block">Operação Inicial</span>
            <span className="text-sm font-black text-slate-100">Compra / Operação</span>
            <span className="text-xs font-bold text-amber-400 block mt-1">Taxa Total: 10%</span>
          </div>

          <div className="p-3 bg-slate-950/80 border border-emerald-500/30 rounded-xl">
            <span className="text-[10px] text-emerald-400 uppercase font-bold block">Participação Agente</span>
            <span className="text-base font-black text-emerald-400">5%</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Retido diretamente ao Agente</span>
          </div>

          <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Plataforma ePay</span>
            <span className="text-base font-black text-slate-200">3.4999%</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Reserva e Infraestrutura</span>
          </div>

          <div className="p-3 bg-slate-950/80 border border-amber-500/30 rounded-xl">
            <span className="text-[10px] text-amber-400 uppercase font-bold block">Promotor / Referral</span>
            <span className="text-base font-black text-amber-400">1%</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Redistribuição Multi-nível (3 Native levels)</span>
          </div>

          <div className="p-3 bg-slate-950/80 border border-emerald-500/30 rounded-xl">
            <span className="text-[10px] text-emerald-400 uppercase font-bold block">Global Development Empower</span>
            <span className="text-base font-black text-emerald-400">0.5%</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">EdenKingDom Fundation</span>
          </div>

          <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">ePay Agent prize Pool</span>
            <span className="text-base font-black text-slate-200">0.0001%</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Acumulo em staking para o salário semanal dos agentes ePay</span>
          </div>

        </div>
      </div>

      {/* Regras dos Pools */}
      <div className="pt-2 space-y-3">
        <p className="text-xs font-semibold text-slate-300">Regras da ePay Agent prize Pool:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 bg-slate-950/50 border border-slate-800 rounded-xl space-y-1">
            <span className="font-bold text-emerald-400 block"> ⚡Staking eCoin for weekly salary</span>
            <p className="text-slate-400 text-[11px]">
              O agente da ePay e obrigação de ou fazer staking de eCoin ou eDollar de qualquer valor/quantia mesmo que seja centavos para a activacao da sua contra agente e qualificar-se para o salario semanal (O pool eCoin recebe 0.00007% de cada transação com os agentes a cada instante). 
            </p>
          </div>

          <div className="p-3.5 bg-slate-950/50 border border-slate-800 rounded-xl space-y-1">
            <span className="font-bold text-amber-400 block">🔹 Staking edollar for weekly salary</span>
            <p className="text-slate-400 text-[11px]">
              O agente da ePay e obrigação de ou fazer staking de eDollar ou eCoin de qualquer valor/quantia mesmo que seja centavos para a activacao da sua contra agente e qualificar-se para o salario semanal (O pool eDollar recebe 0.00003% de cada transação com os agentes a cada instante). 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommissionRules;