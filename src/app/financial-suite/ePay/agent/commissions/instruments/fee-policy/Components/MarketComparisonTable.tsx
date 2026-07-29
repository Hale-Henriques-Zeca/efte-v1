'use client';

import React from 'react';

export const MarketComparisonTable: React.FC = () => {
  const benchmarks = [
    { source: 'CoinFlip', buy: 'Até 21,9%', sell: '4,99%', note: 'Um dos maiores operadores globais' },
    { source: 'Athena Bitcoin', buy: '5% – 25%', sell: 'Cerca de 5%', note: 'Presença forte nas Américas' },
    { source: 'RockItCoin', buy: 'Cerca de 18,7%', sell: 'Cerca de 16,3%', note: 'Acresce taxa fixa adicional' },
    { source: 'Binance Academy (Estudo)', buy: '7% – 25%', sell: '7% – 25%', note: 'Média de mercado levantada' },
    { source: 'ePay Agent (EdenKingDom)', buy: '10% Fixo', sell: '10% Fixo', note: 'Transparente, sem custos ocultos' },
  ];

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-4 md:col-span-2">
      <div className="flex items-center gap-2 border-b border-slate-800/80 pb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
        <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
          Comparativo de Mercado Global de Crypto ATMs vs. ePay
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              <th className="py-3 px-3">Operador / Fonte</th>
              <th className="py-3 px-3">Taxa de Compra</th>
              <th className="py-3 px-3">Taxa de Venda</th>
              <th className="py-3 px-3">Observação de Mercado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-xs">
            {benchmarks.map((row, idx) => (
              <tr
                key={idx}
                className={row.source.includes('ePay') ? 'bg-emerald-500/10 font-bold border-l-2 border-emerald-500' : 'hover:bg-slate-800/40'}
              >
                <td className="py-3 px-3 text-slate-200">{row.source}</td>
                <td className="py-3 px-3 font-mono text-amber-400">{row.buy}</td>
                <td className="py-3 px-3 font-mono text-amber-400">{row.sell}</td>
                <td className="py-3 px-3 text-slate-400 text-[11px]">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketComparisonTable;