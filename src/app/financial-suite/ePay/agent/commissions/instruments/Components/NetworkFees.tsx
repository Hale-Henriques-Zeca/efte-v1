'use client';

import React from 'react';

export const NetworkFees: React.FC = () => {
  const networkData = [
    { asset: 'BNB Gas', fee: '0.00002 BNB', network: 'BSC (Binance Smart Chain) Network', status: 'Rápido', color: 'text-amber-400' },
    { asset: 'eCoin Gas Utility', fee: '0.001 E-Coin', network: 'BSC (Binance Smart Chain) Network', status: 'Rápido', color: 'text-amber-400' },
    { asset: 'eDollar (BEP-20)', fee: '0.15 E-USD', network: 'BSC (Binance Smart Chain) Network', status: 'Rápido', color: 'text-amber-400' },
  ];

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-wider text-red-400 border-b border-slate-800/80 pb-2 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-red-500" />
        Taxas de Rede On-Chain (Gas Fees)
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              <th className="py-3 px-3">Ativo / Gas</th>
              <th className="py-3 px-3">Rede</th>
              <th className="py-3 px-3 text-right">Estado da Rede</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-xs">
            {networkData.map((item, index) => (
              <tr key={index} className="hover:bg-slate-800/40 transition">
                <td className="py-3 px-3 font-bold text-slate-100">
                  <div>{item.asset}</div>
                  <span className="text-[10px] text-slate-500 font-mono">{item.fee}</span>
                </td>
                <td className="py-3 px-3 text-slate-300 font-mono">{item.network}</td>
                <td className="py-3 px-3 text-right">
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full border bg-emerald-500/10 border-emerald-500/20 ${item.color}`}>
                    {item.status}
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

export default NetworkFees;