"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Link from "next/link";
import LearnSection from "@/components/learn/LearnSection";
import MarketOverview from "@/components/market/MarketOverview";
import LearnCarousel from "@/components/learn/LearnCarousel";
import FinancialSuite from "@/app/financial-suite/page";
import TradingMarketPage from "@/app/trading-market/page";
import DerivativesPage from "@/app/derivatives/page";
import BetMarketsPage from "@/app/bet-markets/page";
import EarnPage from "@/app/earn/page";
import AILabsPage from "@/app/ai-labs/page";
import HeroButtons from "@/components/HeroButtons";
import {
  AlertTriangle,
  LineChart,
  Scale,
  HeartHandshake,
  Globe,
  ExternalLink
} from "lucide-react";




export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center text-center">

      {/* ================= HERO CINEMATOGRÁFICO ================= */}
      <section className="relative w-full overflow-hidden">

        {/* Fundo base */}
        <div
          className="absolute inset-0 -z-20"
          style={{
            background:
              "linear-gradient(135deg, #1C2D5A 0%, #0B0E14 100%)",
          }}
        />

        {/* Glow azul */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 20%, rgba(28,45,90,0.45), transparent 60%)",
          }}
        />

        {/* Glow verde (portal) */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, rgba(31,169,113,0.22), transparent 65%)",
          }}
        />

        {/* Conteúdo animado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-5xl mx-auto px-6 py-28 text-white"
        >

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center mb-6"
          >
            <img
              src="/logo-ebc.png"
              alt="EBC Logo"
              className="h-32 md:h-40"
            />
          </motion.div>

          {/* TÍTULO */}
<motion.h1
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="text-4xl md:text-6xl font-extrabold text-center mb-8"
>
  <span style={{ color: "#1FA971" }}>EdenKingDom </span>
  <span style={{ color: "#D4AF37" }}>Financial </span>
  <span style={{ color: "#FFFFFF" }}>Tools </span>
  <span style={{ color: "#0B5ED7" }}>Empire</span>
</motion.h1>


          {/* SUBTÍTULO */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10"
          >
             <span style={{ color: "#0B5ED7" }}>
                O teu portal para a liberdade digital.
            </span>
           
            <br />
            Compra cripto com segurança institucional e acesso Web3 direto.
          </motion.p>

          
          </motion.div>

     {/* PAINEL INFORMATIVO */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8 }}
  className="mx-auto mb-10 max-w-3xl rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 text-sm text-gray-200 space-y-4 shadow-lg"
>

  {/* STATUS */}
  <div className="flex gap-3 items-start">
    <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
    <div>
      <span className="font-semibold text-white">EFTE Exchange</span> encontra-se em desenvolvimento contínuo.
      <br />
      <span className="text-emerald-400 font-medium">
        Trading on-chain (Compra & Venda de E-Coin via Web3) já disponível.
      </span>
      <br />
      Funcionalidades avançadas serão ativadas progressivamente até Junho.
      <span className="font-medium text-white"> Criar Conta / Iniciar Sessão</span> na fase 2.
    </div>
  </div>

  {/* SHAREHOLDERS */}
  <div className="flex gap-3 items-start border-t border-white/10 pt-4">
    <LineChart className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
    <div>
      <div className="font-semibold text-white">Acionistas & Participação</div>
      Entenda a nossa política para acionistas em:
      <br />
      <a
        href="https://eshare.edenkingdom.org"
        target="_blank"
        className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 hover:underline"
      >
        eshare.edenkingdom.org <ExternalLink size={14} />
      </a>
    </div>
  </div>

  {/* LEGAL */}
  <div className="flex gap-3 items-start border-t border-white/10 pt-4">
    <Scale className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" />
    <div>
      <div className="font-semibold text-white">Estrutura Jurídica & Organizacional</div>
      Conheça o posicionamento jurídico da EdenKingdom em:
      <br />
      <a
        href="https://elaw.edenkingdom.org"
        target="_blank"
        className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 hover:underline"
      >
        elaw.edenkingdom.org <ExternalLink size={14} />
      </a>
    </div>
  </div>

  {/* SOCIAL */}
  <div className="flex gap-3 items-start border-t border-white/10 pt-4">
    <HeartHandshake className="w-5 h-5 text-rose-400 mt-0.5 shrink-0" />
    <div>
      <div className="font-semibold text-white">Projeto Social</div>
      Doe e salve vidas em:
      <br />
      <a
        href="https://esocial.edenkingdom.org"
        target="_blank"
        className="inline-flex items-center gap-1 text-rose-400 hover:text-rose-300 hover:underline"
      >
        esocial.edenkingdom.org <ExternalLink size={14} />
      </a>
    </div>
  </div>

  {/* ORGANIZATION */}
  <div className="flex gap-3 items-start border-t border-white/10 pt-4">
    <Globe className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
    <div>
      <div className="font-semibold text-white">Organização Oficial</div>
      Política, manifesto, visão e missão oficial em:
      <br />
      <a
        href="https://edenkingdom.org"
        target="_blank"
        className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 hover:underline"
      >
        edenkingdom.org <ExternalLink size={14} />
      </a>
    </div>
  </div>

</motion.div>
        <HeroButtons />

        
      </section>
      {/* ================= FIM HERO ================= */}


  

{/* ==================== EFTE FINANCIAL SUITE ==================== */}
<FinancialSuite />
{/* ================== FIM EFTE FINANCIAL SUITE ================== */}

<MarketOverview />

{/* ================== EFTE TRADING & MARKET HUB ================== */}
<TradingMarketPage />
{/* ================ FIM EFTE TRADING & MARKET HUB =============== */}

{/* ================= EFTE DERIVATIVES & LEVERAGE ================= */}
<DerivativesPage />
{/* =============== FIM EFTE DERIVATIVES & LEVERAGE =============== */}

{/* ================== EFTE BET MARKETS ================== */}
<BetMarketsPage />
{/* ================ FIM EFTE BET MARKETS ================ */}

<Section variant="blue">
  {/* 🔑 LIDERANÇA & COMUNIDADES */}
  <div className="flex flex-col items-center text-center max-w-3xl mx-auto mt-4 mb-12 px-4">
    
    <span className="text-xs tracking-widest uppercase text-[var(--gold)] mb-2">
      EdenKingDom Verse Web3
    </span>

    <h2 className="text-3xl md:text-4xl font-semibold text-[var(--blue)] mb-4">
      Liderança & Comunidades
    </h2>

    <p className="text-[var(--text-muted)] max-w-2xl mb-6">
      O centro oficial para líderes, treinadores e comunidades Edenitas.
      Aprenda como o sistema de referências funciona de forma segura,
      sustentável e totalmente on-chain.
    </p>

    <a
      href="/equipes"
      className="inline-flex items-center gap-2 px-8 py-3 rounded-full
                 bg-gradient-to-r from-[var(--gold)] to-[var(--blue)]
                 text-black font-semibold
                 hover:opacity-90 transition shadow-lg"
    >
      Aceder ao Painel de Líderes →
    </a>
  </div>


  
</Section>

{/* ================== EFTE EARN & YIELD ================== */}
<EarnPage />
{/* ================ FIM EFTE EARN & YIELD ================ */}

{/* ================= EFTE AI, LABS & GOVERNANCE ================= */}
<AILabsPage />


{/* =============== FIM EFTE AI, LABS & GOVERNANCE =============== */}


{/* ================= LEARN CAROUSEL ================= */}
<LearnCarousel />
{/* ================= FIM LEARN CAROUSEL ================= */}


{/* CTA */}
<Section variant="blue">
  
  <div className="py-24 text-center">
<h3 className="text-3xl font-semibold mb-6 text-[var(--blue)]">
        Comece hoje na EFTE
      </h3>
 <motion.div
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <Link href="#">
  <Button variant="Green">
     <span style={{ color: "#1FA971" }}>
                Criar Conta / Iniciar Sessão 
            </span>
    
  </Button>
</Link>

</motion.div>

</div>
</Section>

    </main>
    
  );
}
