'use client';

import React from 'react';
import Link from 'next/link';
import {
  ExchangeRatesTable,
  FeesTable,
  CommissionRules,
  CurrencyCalculator,
  NetworkFees,
  PriceHistory,
  FAQ,
} from './Components';

export default function InstrumentsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-6 lg:p-8 relative overflow-hidden w-full">
      {/* 🌟 Glows Ambientais ePay */}
      <div className="absolute -top-24 -right-20 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-10 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Container Principal */}
      <div className="w-full space-y-6 bg-slate-900/90 border border-slate-800/90 rounded-3xl p-6 md:p-8 shadow-2xl relative z-10 backdrop-blur-xl">
        
        {/* Cabeçalho */}
        <div className="border-b border-slate-800/80 pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 ml-1">
                ePay Agent Financial Center
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-400 to-red-500">
              INSTRUMENTOS FINANCEIROS
            </h1>

            <p className="text-slate-400 text-sm mt-1.5">
              Consulte taxas operacionais, cotações em tempo real, simulações de comissão e regras da plataforma ePay.
            </p>
          </div>

          {/* Botão Secundário de Acesso Rápido no Cabeçalho */}
          <Link
            href="/financial-suite/ePay/agent/commissions/instruments/fee-policy"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold text-slate-200 hover:text-white transition-all duration-200 shrink-0 self-start md:self-auto"
          >
            <span>📜 Política Institucional de Taxas</span>
            <span className="text-emerald-400 font-mono font-bold">10%</span>
          </Link>
        </div>

        {/* 🚀 Banner / Card de Destaque da Política de Taxas (fee-policy) */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-emerald-500/30 rounded-2xl p-5 md:p-6 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg">
          <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-emerald-500/10 to-transparent pointer-events-none" />
          
          <div className="space-y-1.5 max-w-2xl relative z-10">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                EdenKingDom Policy
              </span>
              <span className="text-xs text-amber-400 font-semibold">
                Transparência & Ética de Mercado
              </span>
            </div>

            <h2 className="text-base md:text-lg font-bold text-slate-100">
              Política de Posicionamento das Taxas dos Agentes ePay (10%)
            </h2>

            <p className="text-xs text-slate-400 leading-relaxed">
              Entenda como a EdenKingDom evoluiu a taxa da rede (1% → 5% → 10%), a fundamentação técnica em comparação com Crypto ATMs e o compromisso de concorrência leal.
            </p>
          </div>

          <Link
            href="/financial-suite/ePay/agent/commissions/instruments/fee-policy"
            className="relative z-10 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200 shrink-0"
          >
            <span>Ver Documento Completo</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>

        {/* Grade de Instrumentos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          <ExchangeRatesTable />
          <FeesTable />
          <CommissionRules />
          <CurrencyCalculator />
          <NetworkFees />
          <PriceHistory />
          <FAQ />
        </div>

      </div>
    </div>
  );
}