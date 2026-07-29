'use client';

import React, { useState } from 'react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Como é calculada a taxa operacional de 10%?',
      a: 'A taxa de 10% é aplicada sobre o valor bruto das transações (Depósitos, Levantamentos, Transferências). Metade deste valor (5%) é creditada diretamente à conta de comissões do agente processador.',
    },
    {
      q: 'Porque varia a cotação das criptomoedas na plataforma?',
      a: 'As cotações do eDollar, eCoin e BNB acompanham paridades do mercado com moedas estáveis como (USDT) e seja em casas de câmbios como Binance (livros de ofertas de câmbios) e liquidez em pools descentralizados On-Chain.',
    },
    {
      q: 'Como funciona o câmbio de Moeda Local (MZN) para eDollar?',
      a: 'O câmbio é feito em tempo real com base no valor fixado do eDollar sobre o câmbio actual na live da Moeda Local do país em que o agente opera EX:(1 E-USD = 63.00 MZN), garantindo paridade e conversão direta e instantânea.',
    },
  ];

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-4 md:col-span-2">
      <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 border-b border-slate-800/80 pb-2 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-amber-400" />
        Perguntas Frequentes (FAQ)
      </h3>

      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border border-slate-800 rounded-xl bg-slate-950/60 overflow-hidden transition"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full text-left p-4 text-xs font-bold text-slate-200 flex justify-between items-center hover:bg-slate-800/40"
            >
              <span>{faq.q}</span>
              <span className="text-amber-400 text-sm font-bold">
                {openIndex === idx ? '−' : '+'}
              </span>
            </button>
            {openIndex === idx && (
              <div className="px-4 pb-4 text-xs text-slate-400 border-t border-slate-800/60 pt-3 leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;