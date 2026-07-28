'use client';

import { useState } from 'react';
import {
  CountrySelector,
  CurrencySelector,
  AgentSelector,
  PreviewCard,
  ReviewDialog,
} from './Components';

export default function WithdrawForm() {
  const [country, setCountry] = useState('MZ');
  const [currency, setCurrency] = useState('eDollar'); // eDollar, eCoin, BNB
  const [agentId, setAgentId] = useState('');
  const [cryptoAmount, setCryptoAmount] = useState<number | ''>('');
  const [isOpenReview, setIsOpenReview] = useState(false);

  // Taxa de câmbio estática (1 USD = 63 MT)
  const RATE_USD_MT = 63;

  // No levantamento, o usuário insere a quantidade de Cripto/Token
  const numericCrypto = Number(cryptoAmount) || 0;
  const usdValue = numericCrypto; // Proporção 1:1 para eDollar (ajustar conforme cotação do eCoin/BNB)
  const localAmount = usdValue * RATE_USD_MT;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-6">
      {/* Seletores Topo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CountrySelector value={country} onChange={setCountry} />
        <CurrencySelector value={currency} onChange={setCurrency} />
      </div>

      <AgentSelector value={agentId} onChange={setAgentId} />

      {/* Input de Valor em Cripto/Token */}
      <div>
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
          Valor a Levantar ({currency})
        </label>
        <div className="relative">
          <input
            type="number"
            placeholder="Ex: 10"
            value={cryptoAmount}
            onChange={(e) => setCryptoAmount(e.target.value ? Number(e.target.value) : '')}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xl font-bold text-rose-400 focus:outline-none focus:border-rose-500"
          />
          <span className="absolute right-4 top-3.5 text-slate-500 font-bold">{currency}</span>
        </div>
      </div>

      {/* Cartão de Previsualização Live (Cripto -> USD -> Moeda Local) */}
      <PreviewCard
        cryptoAmount={numericCrypto}
        usdAmount={usdValue}
        localAmount={localAmount}
        cryptoSymbol={currency}
      />

      {/* Botão de Submissão */}
      <button
        disabled={!cryptoAmount || !agentId}
        onClick={() => setIsOpenReview(true)}
        className="w-full py-4 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold rounded-xl transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Revisar Levantamento
      </button>

      {/* Modal de Confirmação */}
      <ReviewDialog
        isOpen={isOpenReview}
        onClose={() => setIsOpenReview(false)}
        data={{
          country,
          currency,
          agentId,
          cryptoAmount: numericCrypto,
          usdValue,
          localAmount,
        }}
      />
    </div>
  );
}