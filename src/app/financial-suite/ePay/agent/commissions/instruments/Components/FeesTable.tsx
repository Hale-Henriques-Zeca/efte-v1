'use client';

import React from 'react';

export const FeesTable: React.FC = () => {
  const fees = [
    { operation: 'Depósito (Fiat/Crypto)', fee: '10%', desc: 'Taxa operacional global', color: 'text-amber-400' },
    { operation: 'Levantamento', fee: '10%', desc: 'Processamento On-Chain / Fiat', color: 'text-amber-400' },
    { operation: 'Transferência entre Usuários', fee: '5%', desc: 'Transferência instantânea p2p', color: 'text-amber-400' },
    { operation: 'Swap de Criptomoedas', fee: '1%', desc: 'Conversão interna eDollar / eCoin / BNB', color: 'text-emerald-400' },
    { operation: 'Weekly Salary (Salário Semanal)', fee: '1%', desc: 'Benefício direto de membro na rede ePay agent', color: 'text-emerald-400 font-bold' },
  ];

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 border-b border-slate-800/80 pb-2 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-amber-400" />
        Tabela de Taxas Operacionais
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              <th className="py-3 px-3">Operação</th>
              <th className="py-3 px-3">Taxa ePay</th>
              <th className="py-3 px-3">Observação</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-xs">
            {fees.map((item, index) => (
              <tr key={index} className="hover:bg-slate-800/40 transition">
                <td className="py-3 px-3 font-medium text-slate-200">{item.operation}</td>
                <td className={`py-3 px-3 font-mono font-bold ${item.color}`}>{item.fee}</td>
                <td className="py-3 px-3 text-slate-400 text-[11px]">{item.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeesTable;