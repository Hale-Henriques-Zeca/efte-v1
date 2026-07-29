'use client';

import React, { useState } from 'react';

export const CurrencyCalculator: React.FC = () => {
  const [amount, setAmount] = useState<number>(100);
  const [currency, setCurrency] = useState<string>('eDollar');

  const feeRate = 0.1; // 10%
  const feeAmount = amount * feeRate;
  const receiveAmount = amount - feeAmount;

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800/80 pb-2 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        Simulador / Calculadora de Taxas
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">
            Introduza o valor:
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 font-mono text-sm focus:outline-none focus:border-emerald-500/50"
            placeholder="100"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">
            Selecionar Moeda:
          </label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-emerald-500/50 cursor-pointer"
          >
            <option value="eDollar">eDollar (E-USD)</option>
            <option value="eCoin">eCoin (E-COin)</option>
            <option value="MZN">Metical (MZN)</option>
          </select>
        </div>

        {/* Resultado Simulação */}
        <div className="p-4 bg-slate-950/90 border border-slate-800 rounded-xl space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400">Taxa Estimada (10%):</span>
            <span className="text-red-400 font-mono font-bold">-{feeAmount.toFixed(10)} {currency}</span>
          </div>

          <div className="border-t border-slate-800/80 pt-2 flex justify-between items-center text-sm">
            <span className="font-bold text-slate-200">Valor Líquido a Receber:</span>
            <span className="text-emerald-400 font-mono font-black text-base">{receiveAmount.toFixed(10)} {currency}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyCalculator;