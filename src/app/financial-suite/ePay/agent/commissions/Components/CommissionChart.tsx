'use client';

import React from 'react';

export const CommissionChart: React.FC = () => {
  return (
    <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-5 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div>
          <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider">
            Desempenho de Rendimentos
          </h3>
          <p className="text-xs text-slate-400">Volume diário de comissões acumuladas em USD</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
            Últimos 7 dias
          </span>
        </div>
      </div>

      {/* Simulação de Histograma Visual via CSS/Tailwind */}
      <div className="h-44 w-full flex items-end justify-between gap-2 pt-6 px-2">
        {[
          { day: 'Seg', val: '40%', amount: '$120' },
          { day: 'Ter', val: '65%', amount: '$195' },
          { day: 'Qua', val: '50%', amount: '$150' },
          { day: 'Qui', val: '85%', amount: '$255' },
          { day: 'Sex', val: '70%', amount: '$210' },
          { day: 'Sáb', val: '95%', amount: '$285' },
          { day: 'Dom', val: '48%', amount: '$145' },
        ].map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
            <span className="opacity-0 group-hover:opacity-100 text-[10px] text-emerald-400 font-mono transition-all">
              {item.amount}
            </span>
            <div
              style={{ height: item.val }}
              className="w-full bg-gradient-to-t from-emerald-600/30 via-amber-400/50 to-emerald-400 rounded-t-md group-hover:brightness-125 transition-all duration-300"
            />
            <span className="text-[10px] font-semibold text-slate-400">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommissionChart;