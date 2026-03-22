"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import CardContent from "@/components/ui/CardContent";
import Button from "@/components/ui/Button";
import Link from "next/link";
import {
  Wallet,
  ShieldCheck,
  CreditCard,
  Banknote,
  BarChart3,
  SmartphoneNfc,
} from "lucide-react";

export default function FinancialSuite() {
  const modules = [
    {
      name: "E-Pay",
      desc: "Sistema de pagamentos instantâneos fiat e crypto com liquidação global e integração POS.",
      icon: <CreditCard className="w-10 h-10 text-yellow-500" />,
      href: "/financial-suite/pay",
    },
    {
      name: "E-Vault",
      desc: "Cofre digital e físico para gestão de fundos, reservas e segurança multiassinatura.",
      icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
      href: "/financial-suite/vault",
    },
    {
      name: "E-TokenPad",
      desc: "Carteira interna multi-ativo com histórico, transferências e sincronização blockchain.",
      icon: <Wallet className="w-10 h-10 text-green-500" />,
      href: "/financial-suite/wallet",
    },
    {
      name: "E-Treasury",
      desc: "Gestão institucional do tesouro, reservas, liquidez e movimentações automatizadas.",
      icon: <Banknote className="w-10 h-10 text-emerald-500" />,
      href: "/financial-suite/treasury",
    },
    {
      name: "E-POS",
      desc: "Ponto de venda físico e digital com split automático, QR e integração com E-Pay.",
      icon: <SmartphoneNfc className="w-10 h-10 text-red-500" />,
      href: "/financial-suite/pos",
    },
    {
      name: "E-Ledger",
      desc: "Livro contábil interno com reconciliação automática e relatórios financeiros diários.",
      icon: <BarChart3 className="w-10 h-10 text-gray-500" />,
      href: "/financial-suite/ledger",
    },
  ];

  return (
    <main className="min-h-screen relative w-full py-24 px-6 bg-gradient-to-b from-[#0B5ED7] via-[#1E9B4B] to-[#020617] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1
          className="text-3xl md:text-6xl font-extrabold text-center mb-6 bg-gradient-to-r from-[#D4AF37] to-[#ffffff] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          EdenKingDom Financial Suite
        </motion.h1>
        <p className="text-center text-lg md:text-xl text-gray-200 mb-12">
          A infraestrutura financeira soberana da EdenKingDom — pagamentos,
          cofres, tesouro, liquidez e contabilidade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <motion.div
  key={i}
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: i * 0.1 }}
  className="flex"
>
  <Card
    className="flex flex-col justify-between w-full bg-gradient-to-b from-[#1a1a1a] via-[#0e0e0e] to-[#000000] border border-[#D4AF37]/30 rounded-2xl shadow-[0_0_25px_rgba(212,175,55,0.15)] hover:shadow-[0_0_35px_rgba(248,224,125,0.25)] transition-all duration-500 transform hover:-translate-y-1 backdrop-blur-xl overflow-visible"
  >
    <CardContent className="flex flex-col justify-between items-center text-center p-8 space-y-6 h-full">
      {/* Ícone */}
      <div className="text-5xl text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]">
        {mod.icon}
      </div>

      {/* Título */}
      <h2 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-[#D4AF37] to-[#F8E07D] bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(248,224,125,0.3)]">
        {mod.name}
      </h2>

      {/* Descrição */}
      <p className="text-[#EDE7C6] text-sm leading-relaxed max-w-xs drop-shadow-[0_0_4px_rgba(248,224,125,0.3)]">
        {mod.desc}
      </p>

      {/* Botão */}
      <div className="pt-2">
        <Button
          variant="gold"
          className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#F8E07D] to-[#D4AF37] text-[#1a1a1a] hover:scale-105 hover:brightness-110 transition-all duration-300 shadow-[0_0_25px_rgba(248,224,125,0.45)] hover:shadow-[0_0_45px_rgba(248,224,125,0.8)] border border-[#F8E07D]/40"
          onClick={() => (window.location.href = mod.href)}
        >
          <span className="drop-shadow-[0_0_3px_rgba(0,0,0,0.6)]">Acessar</span>
        </Button>
      </div>
    </CardContent>
  </Card>
</motion.div>

          ))}
        </div>
      </div>
    </main>
  );
}
