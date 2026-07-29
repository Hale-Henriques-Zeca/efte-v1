'use client';

import React from 'react';
import Link from 'next/link';
import {
  Breadcrumb,
  SummaryCards,
  FilterBar,
  CommissionHistory,
  QuickActions,
  CommissionChart,
  CommissionMobileMenu,
} from './Components';

export default function CommissionsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-6 lg:p-8 relative overflow-hidden w-full">
      {/* 🌟 Glows Ambientais ePay */}
      <div className="absolute -top-24 -right-20 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-10 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Container Principal */}
      <div className="w-full space-y-6 bg-slate-900/90 border border-slate-800/90 rounded-3xl p-6 md:p-8 shadow-2xl relative z-10 backdrop-blur-xl">
        
        {/* Cabeçalho */}
        <div className="border-b border-slate-800/80 pb-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <Breadcrumb />
              <div className="flex items-center gap-2 my-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 ml-1">
                  ePay Agent Portal
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-400 to-red-500">
                PAINEL DE COMISSÕES
              </h1>
            </div>

            {/* Ações Desktop & Menu Mobile (☰) */}
            <div className="flex items-center gap-3">
              {/* Botões Visíveis Apenas em Desktop */}
              <div className="hidden md:flex items-center gap-2">
                <Link
                  href="/financial-suite/ePay/agent/commissions/instruments/fee-policy"
                  className="px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-all flex items-center gap-1.5"
                >
                  <span>📜 Política 10%</span>
                </Link>

                <Link
                  href="/financial-suite/ePay/agent/commissions/instruments"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all flex items-center gap-2"
                >
                  <span>📊 Instrumentos</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

              {/* Botão de Menu Mobile (☰) */}
              <CommissionMobileMenu />
            </div>
          </div>

          <p className="text-slate-400 text-sm mt-2">
            Acompanhe em tempo real seus rendimentos, histórico de transações e regras de repasse ePay.
          </p>
        </div>

        {/* Banner Responsivo de Acesso Direto aos Instrumentos (Especial para Mobile) */}
        <div className="md:hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-emerald-500/30 rounded-2xl p-4 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-[10px] font-bold uppercase text-amber-400">Taxa Padrão 10%</span>
            <h3 className="text-xs font-bold text-slate-200">Instrumentos & Cotações</h3>
          </div>
          <Link
            href="/financial-suite/ePay/agent/commissions/instruments"
            className="px-3 py-2 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold"
          >
            Acessar
          </Link>
        </div>

        {/* Resumo de Comissões (Cards) */}
        <SummaryCards />

        {/* Gráfico de Desempenho e Ações Rápidas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          <div className="lg:col-span-2">
            <CommissionChart />
          </div>
          <div>
            <QuickActions />
          </div>
        </div>

        {/* Filtros e Tabela de Histórico */}
        <div className="space-y-4">
          <FilterBar />
          <CommissionHistory />
        </div>

      </div>
    </div>
  );
}