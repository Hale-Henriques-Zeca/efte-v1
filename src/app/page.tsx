"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Button from "../components/ui/Button";
import Section from "../components/ui/Section";
import MarketOverview from "../components/market/MarketOverview";
import LearnCarousel from "../components/learn/LearnCarousel";
import FinancialSuite from "../app/financial-suite/page";
import TradingMarketPage from "../app/trading-market/page";
import DerivativesPage from "../app/derivatives/page";
import BetMarketsPage from "../app/bet-markets/page";
import EarnPage from "../app/earn/page";
import AILabsPage from "../app/ai-labs/page";
import HeroButtons from "../components/HeroButtons";
import {
  AlertTriangle,
  LineChart,
  Scale,
  HeartHandshake,
  Globe,
  ExternalLink,
  Compass,
  X,
  ChevronRight,
  Menu,
} from "lucide-react";

// Componente para Divisores de Seção com iluminação estilizada
const SectionDivider = ({ label, id }: { label: string; id?: string }) => (
  <div id={id} className="relative z-10 my-12 flex items-center gap-4 w-full max-w-6xl mx-auto px-6 scroll-mt-28">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
    <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#D4AF37]/80 font-medium text-center">
      {label}
    </span>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
  </div>
);

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center text-center relative overflow-x-hidden">
      {/* ================= HERO CINEMATOGRÁFICO ================= */}
      <div id="hero" className="w-full scroll-mt-28">
        <section className="relative w-full overflow-hidden">
          {/* Fundo base */}
          <div
            className="absolute inset-0 -z-20"
            style={{
              background: "linear-gradient(135deg, #1C2D5A 0%, #0B0E14 100%)",
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
      </div>
      {/* ================= FIM HERO ================= */}

      {/* ==================== EFTE FINANCIAL SUITE ==================== */}
      <div id="financial-suite" className="w-full scroll-mt-28">
       
        <FinancialSuite />
      </div>

      {/* ==================== MARKET OVERVIEW ==================== */}
      <div id="market-overview" className="w-full scroll-mt-28">
       
        <MarketOverview />
      </div>

      {/* ================== EFTE TRADING & MARKET HUB ================== */}
      <div id="trading-market" className="w-full scroll-mt-28">
       
        <TradingMarketPage />
      </div>

      {/* ================= EFTE DERIVATIVES & LEVERAGE ================= */}
      <div id="derivatives" className="w-full scroll-mt-28">
       
        <DerivativesPage />
      </div>

      {/* ================== EFTE BET MARKETS ================== */}
      <div id="bet-markets" className="w-full scroll-mt-28">
        
        <BetMarketsPage />
      </div>

      {/* ================== LIDERANÇA & COMUNIDADES ================== */}
      <div id="leadership" className="w-full scroll-mt-28">
        <Section variant="blue">
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
      </div>

      {/* ================== EFTE EARN & YIELD ================== */}
      <div id="earn-yield" className="w-full scroll-mt-28">
        
        <EarnPage />
      </div>

      {/* ================= EFTE AI, LABS & GOVERNANCE ================= */}
      <div id="ai-labs" className="w-full scroll-mt-28">
       
        <AILabsPage />
      </div>

      {/* ================= LEARN CAROUSEL ================= */}
      <div id="learn-carousel" className="w-full scroll-mt-28">
        
        <LearnCarousel />
      </div>

      {/* ================= CTA ================= */}
      <div id="cta" className="w-full scroll-mt-28">
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
      </div>

      {/* Renderização condicional no lado do cliente para evitar incompatibilidade de hidratação */}
      {isClient && <FloatingDashboardMenu />}
    </main>
  );
}

{/* ================= FLOATING DASHBOARD MENU ================= */}
function FloatingDashboardMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Início (Hero)", target: "hero" },
    { label: "Financial Suite", target: "financial-suite" },
    { label: "Market Overview", target: "market-overview" },
    { label: "Trading & Market Hub", target: "trading-market" },
    { label: "Derivatives & Leverage", target: "derivatives" },
    { label: "Bet Markets", target: "bet-markets" },
    { label: "Liderança & Comunidades", target: "leadership" },
    { label: "Earn & Yield", target: "earn-yield" },
    { label: "AI, Labs & Governance", target: "ai-labs" },
    { label: "Aprenda / Learn Carousel", target: "learn-carousel" },
    { label: "Comece Hoje (CTA)", target: "cta" },
  ];

  const handleScrollTo = (id: string) => {
    const targetEl = document.getElementById(id);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            className="fixed inset-x-4 bottom-24 md:bottom-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 md:max-w-md bg-[#0d0d0f] border border-[#D4AF37]/30 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
          >
            <div className="p-4 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <Compass className="animate-spin-slow" size={18} />
                <span className="text-xs font-black uppercase tracking-widest text-white">
                  Navegação Rápida
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl bg-white/5 text-white/60 hover:text-white transition"
              >
                <X size={16} />
              </button>
            </div>
            <div className="max-h-[50vh] md:max-h-[400px] overflow-y-auto p-2 space-y-1 no-scrollbar text-left">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleScrollTo(item.target)}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-black/40 hover:bg-[#D4AF37]/10 border border-white/5 hover:border-[#D4AF37]/20 text-left transition-all group"
                >
                  <span className="text-xs font-medium text-white/80 group-hover:text-[#D4AF37] transition">
                    {item.label}
                  </span>
                  <ChevronRight
                    size={14}
                    className="text-white/30 group-hover:text-[#D4AF37] group-hover:translate-x-0.5 transition"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        drag
        dragMomentum={false}
        dragConstraints={
          typeof window !== "undefined"
            ? {
                left: 10,
                right: window.innerWidth - 70,
                top: 10,
                bottom: window.innerHeight - 70,
              }
            : { left: 0, right: 0, top: 0, bottom: 0 }
        }
        whileDrag={{ scale: 1.1 }}
        initial={{ x: 0, y: 0 }}
        className="fixed bottom-6 right-6 z-50 cursor-grab active:cursor-grabbing touch-none"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#f3d065] text-black shadow-[0_4px_20px_rgba(212,175,55,0.4)] border border-[#D4AF37] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>
    </>
  );
}