'use client';

import React, { useState } from 'react';

export const PriceHistory: React.FC = () => {
  const [filter, setFilter] = useState<'today' | 'week' | 'month' | 'year'>('week');

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-4 md:col-span-2">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800/80 pb-3 gap-2">
        <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          Histórico de Cotações & Desempenho
        </h3>

        {/* Filtros de tempo */}
        <div className="flex gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 self-start sm:self-auto">
          {(['today', 'week', 'month', 'year'] as const).map((period) => (
            <button
              key={period}
              onClick={() => setFilter(period)}
              className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase transition ${
                filter === period
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {period === 'today' ? 'Hoje' : period === 'week' ? 'Semana' : period === 'month' ? 'Mês' : 'Ano'}
            </button>
          ))}
        </div>
      </div>

      {/* Placeholder Gráfico Visual ePay */}
      <div className="h-44 bg-slate-950/80 border border-slate-800 rounded-xl flex items-end justify-between p-4 gap-2 relative overflow-hidden">
        <div className="absolute top-3 left-4 text-[10px] font-mono text-slate-500">
          Variação eDollar / eCoin vs MZN ({filter.toUpperCase()})
        </div>

        {/* Barras simuladas */}
        <div className="w-full bg-emerald-500/20 hover:bg-emerald-500/40 rounded-t h-[40%] transition" />
        <div className="w-full bg-emerald-500/30 hover:bg-emerald-500/50 rounded-t h-[65%] transition" />
        <div className="w-full bg-emerald-500/25 hover:bg-emerald-500/45 rounded-t h-[50%] transition" />
        <div className="w-full bg-amber-500/40 hover:bg-amber-500/60 rounded-t h-[80%] transition" />
        <div className="w-full bg-emerald-500/50 hover:bg-emerald-500/70 rounded-t h-[90%] transition" />
        <div className="w-full bg-emerald-500 text-emerald-400 font-bold rounded-t h-[100%] transition" />
      </div>
    </div>
  );
};

export default PriceHistory;