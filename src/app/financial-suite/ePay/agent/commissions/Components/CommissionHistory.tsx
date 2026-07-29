'use client';

import React from 'react';

const mockHistory = [
  { id: 'TX-9081', type: 'Depósito Agente', currency: 'MZN', amount: '12,500.00 MT', fee: '1,250.00 MT', feePercent: '10%', status: 'Concluído', time: '10:42' },
  { id: 'TX-9080', type: 'Saque eDollar', currency: 'eUSD', amount: '$ 450.00', fee: '$ 45.00', feePercent: '10%', status: 'Concluído', time: '09:15' },
  { id: 'TX-9079', type: 'Troca Crypto', currency: 'eCOIN', amount: '1,000.00 eCOIN', fee: '100.00 eCOIN', feePercent: '10%', status: 'Concluído', time: 'Ontem' },
];

export const CommissionHistory: React.FC = () => {
  return (
    <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-5 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider">
          Histórico de Comissões Recentes
        </h3>
        <span className="text-[11px] text-emerald-400 font-semibold cursor-pointer hover:underline">
          Ver todas (1.482) →
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-slate-900 text-slate-400 uppercase text-[10px] tracking-wider">
            <tr>
              <th className="p-3 rounded-l-xl">ID Transação</th>
              <th className="p-3">Tipo</th>
              <th className="p-3">Valor Base</th>
              <th className="p-3">Comissão (10%)</th>
              <th className="p-3">Status</th>
              <th className="p-3 rounded-r-xl">Horário</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {mockHistory.map((item) => (
              <tr key={item.id} className="hover:bg-slate-900/50 transition-all">
                <td className="p-3 font-mono font-bold text-slate-200">{item.id}</td>
                <td className="p-3">{item.type}</td>
                <td className="p-3 font-mono text-slate-300">{item.amount}</td>
                <td className="p-3 font-mono font-bold text-emerald-400">{item.fee}</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    {item.status}
                  </span>
                </td>
                <td className="p-3 text-slate-500 font-mono">{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommissionHistory;