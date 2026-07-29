'use client';

import { useState } from 'react';
import { MdVerified } from 'react-icons/md'; // Selo estilo Instagram/Twitter oficial
import { FaShieldAlt } from 'react-icons/fa';

export default function LicensesCard() {
  const [paymentCurrency, setPaymentCurrency] = useState<'USDT' | 'eDollar'>('eDollar');

  const licenses = [
    { 
      title: 'Licença de Operador Financeiro ePay', 
      status: 'Ativa', 
      id: 'EPAY-AG-2026-9942', 
      verified: true 
    },
    { 
      title: 'Certificado de Conformidade Smart Contract', 
      status: 'Auditado', 
      id: 'BSC-AUDIT-PASSED', 
      verified: true 
    },
    { 
      title: 'Selo de Agente Verificado (Selo Azul)', 
      status: 'Não Verificado', 
      id: 'VERIFY-EPAY-REQ', 
      verified: false 
    },
  ];

  const VERIFICATION_PRICE = {
    USDT: 10,
    eDollar: 10,
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            Licenças & Certificações
          </h2>
          <p className="text-xs text-slate-400">
            Gerencie suas credenciais e status de verificação da conta de agente.
          </p>
        </div>
        <div className="flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/30 px-3 py-1.5 rounded-xl text-sky-400 text-xs font-bold">
          <MdVerified className="text-sky-400 text-base" />
          <span>Selo ePay Official</span>
        </div>
      </div>

      {/* Lista de Licenças */}
      <div className="space-y-3">
        {licenses.map((lic, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-slate-950/60 border border-slate-800 rounded-xl p-3.5 text-xs transition hover:border-slate-700"
          >
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5">
                <p className="font-semibold text-slate-200">{lic.title}</p>
                {lic.verified && (
                  <MdVerified className="text-sky-400 text-sm" title="Verificado" />
                )}
              </div>
              <p className="text-[10px] font-mono text-slate-500">ID: {lic.id}</p>
            </div>

            <span
              className={`px-2.5 py-1 rounded-md font-bold text-[10px] ${
                lic.verified
                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                  : 'bg-amber-500/10 border border-amber-500/30 text-amber-400'
              }`}
            >
              {lic.status}
            </span>
          </div>
        ))}
      </div>

      {/* Caixa de Ação: Solicitar Verificação Paga */}
      <div className="bg-gradient-to-r from-blue-950/40 via-slate-950 to-slate-950 border border-blue-500/30 rounded-xl p-4 space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <FaShieldAlt className="text-sky-400" />
              Obter Badge de Agente Verificado
            </h3>
            <p className="text-xs text-slate-400">
              Aumente a confiança dos clientes obtendo o selo de verificação prioritário na rede ePay.
            </p>
          </div>
        </div>

        {/* Seleção de Moeda para Pagamento */}
        <div className="flex items-center justify-between bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 font-medium">Taxa de Verificação:</span>
          
          <div className="flex items-center gap-2">
            {(['eDollar', 'USDT'] as const).map((currency) => (
              <button
                key={currency}
                type="button"
                onClick={() => setPaymentCurrency(currency)}
                className={`px-3 py-1 rounded-md text-xs font-bold transition ${
                  paymentCurrency === currency
                    ? 'bg-sky-500 text-white shadow-md'
                    : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {VERIFICATION_PRICE[currency]} {currency}
              </button>
            ))}
          </div>
        </div>

        {/* Botão de Ação */}
        <button
          onClick={() => {
            alert(
              `Solicitação iniciada! O valor de ${VERIFICATION_PRICE[paymentCurrency]} ${paymentCurrency} será processado para a verificação do selo.`
            );
          }}
          className="w-full py-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition flex items-center justify-center gap-2"
        >
          <MdVerified className="text-base" />
          <span>Verificar Conta Agora ({VERIFICATION_PRICE[paymentCurrency]} {paymentCurrency})</span>
        </button>
      </div>
    </div>
  );
}