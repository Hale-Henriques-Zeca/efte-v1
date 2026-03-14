"use client";

import MarketStats from "./MarketStats";
import MarketTableDesktop from "./MarketTableDesktop";
import MarketCardsMobile from "./MarketCardsMobile";
import MarketTrending from "./MarketTrending";

export default function MarketOverview() {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden">

      {/* 🎬 FUNDO CINEMATOGRÁFICO (NÃO INTERATIVO) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Base escura */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#020617] to-black" />

        {/* Radial verde (atividade de mercado) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.18),transparent_55%)]" />

        {/* Radial dourado (valor / capital) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.14),transparent_60%)]" />

        {/* Glow vertical cinematográfico */}
        <div className="absolute inset-y-0 left-1/2 w-[60vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-30" />
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 max-w-7xl mx-auto text-left">

        {/* TÍTULO */}
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--gold)] mb-4">
          Visão Geral do Mercado financeiro e de Apostas em Criptoativos
        </h2>

        <p className="text-green-400 font-bold mb-6 max-w-3xl">
          Acompanhe preços de apostas, tendências e métricas globais do mercado financeiro
          diretamente dentro da EFTE Exchange.
        </p>

        {/* MÉTRICAS GLOBAIS */}
        <MarketStats />

        {/* LISTAGEM MOBILE (cards) */}
        <div className="mt-8">
          <MarketCardsMobile />
        </div>

        {/* LISTAGEM DESKTOP / TABLET (tabela) */}
        <div className="mt-8">
          <MarketTableDesktop />
        </div>

        {/* TRENDING / DESTAQUES */}
        <div className="mt-12">
          <MarketTrending />
        </div>

      </div>
    </section>
  );
}
