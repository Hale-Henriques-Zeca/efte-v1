'use client';

import React from 'react';

export const ExchangeRatesTable: React.FC = () => {
  const rates = [
    { name: 'EdenKinDom USD (eDollar)', symbol: 'E-USD', usd: '1.00 USD', local: '63.00 MT', status: 'Agora', badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
    { name: 'EdenKingDom Coin (eCoin)', symbol: 'E-Coin', usd: '0.10 USD', local: '6.30 MT', status: 'Agora', badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
    { name: 'Binance Coin (BNB)', symbol: 'BNB', usd: '800.00 USD', local: '50 400.00 MT', status: 'Agora', badgeColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' },
  ];

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800/80 pb-2 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        Cotações de Ativos em Tempo Real
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              <th className="py-3 px-3">Moeda</th>
              <th className="py-3 px-3">Preço USD</th>
              <th className="py-3 px-3">Preço Local (MZN)</th>
              <th className="py-3 px-3 text-right">Atualização</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-xs">
            {rates.map((rate, index) => (
              <tr key={index} className="hover:bg-slate-800/40 transition">
                <td className="py-3 px-3 font-bold text-slate-100 flex items-center gap-2">
                  <span className={`px-2 py-0.5 text-[10px] rounded-md border font-mono ${rate.badgeColor}`}>
                    {rate.symbol}
                  </span>
                  {rate.name}
                </td>
                <td className="py-3 px-3 text-slate-200 font-mono">{rate.usd}</td>
                <td className="py-3 px-3 text-emerald-400 font-mono font-semibold">{rate.local}</td>
                <td className="py-3 px-3 text-right">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {rate.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExchangeRatesTable;