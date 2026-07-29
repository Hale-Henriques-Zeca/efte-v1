// app/financial-suite/pay/agent/deposit/Components/DepositForm/DepositForm.tsx
'use client';

import { useState } from 'react';
import CountrySelector from './Components/CountrySelector';
import CurrencySelector from './Components/CurrencySelector';
import AgentSelector from './Components/AgentSelector';
import PreviewCard from './Components/PreviewCard';
import ReviewDialog from './Components/ReviewDialog';

export default function DepositForm() {
  const [country, setCountry] = useState('MZ');
  const [currency, setCurrency] = useState('eDollar'); // eDollar, eCoin, BNB
  const [agentId, setAgentId] = useState('');
  const [localAmount, setLocalAmount] = useState<number | ''>('');
  const [isOpenReview, setIsOpenReview] = useState(false);

  // Taxa de câmbio estática (Exemplo: 1 USD = 63 MT)
  const RATE_USD_MT = 63; 
  
  const usdValue = localAmount ? Number(localAmount) / RATE_USD_MT : 0;
  const cryptoValue = usdValue; // Proporção 1:1 para eDollar (ajustar para eCoin se necessário)

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-6">
      {/* Seletores Topo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CountrySelector value={country} onChange={setCountry} />
        <CurrencySelector value={currency} onChange={setCurrency} />
      </div>

      <AgentSelector value={agentId} onChange={setAgentId} />

      {/* Input Live do Valor Local */}
      <div>
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
          Valor em Moeda Local (Meticais - MT)
        </label>
        <div className="relative">
          <input
            type="number"
            placeholder="Ex: 630"
            value={localAmount}
            onChange={(e) => setLocalAmount(e.target.value ? Number(e.target.value) : '')}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xl font-bold text-emerald-400 focus:outline-none focus:border-emerald-500"
          />
          <span className="absolute right-4 top-3.5 text-slate-500 font-bold">MT</span>
        </div>
      </div>

      {/* Cartão de Previsualização Live das 3 Moedas */}
      <PreviewCard 
        localAmount={Number(localAmount) || 0}
        usdAmount={usdValue}
        cryptoAmount={cryptoValue}
        cryptoSymbol={currency}
      />

      {/* Botão de Submissão */}
      <button
        disabled={!localAmount || !agentId}
        onClick={() => setIsOpenReview(true)}
        className="w-full py-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold rounded-xl transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Confirmar Depósito no Agente
      </button>

      {/* Modal de Confirmação */}
      <ReviewDialog
        isOpen={isOpenReview}
        onClose={() => setIsOpenReview(false)}
        data={{ country, currency, agentId, localAmount: Number(localAmount), usdValue, cryptoValue }}
      />
    </div>
  );
}