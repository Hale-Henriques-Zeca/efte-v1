"use client";

import { motion } from "framer-motion";
import {
  FaUniversity,
  FaCreditCard,
  FaApplePay,
  FaGooglePay,
  FaPaypal,
  FaMobileAlt,
  FaExchangeAlt,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";

export default function pay() {
  const methods = [
    {
      icon: <FaUniversity />,
      title: "Bank Transfer",
      desc: "Transferência bancária local e internacional (onde disponível).",
    },
    {
      icon: <FaCreditCard />,
      title: "Credit / Debit Card",
      desc: "Visa / Mastercard via parceiros compatíveis (KYC pode ser exigido).",
    },
    {
      icon: <FaApplePay />,
      title: "Apple Pay",
      desc: "Disponível em regiões suportadas por gateways regulados.",
    },
    {
      icon: <FaGooglePay />,
      title: "Google Pay",
      desc: "Disponível em regiões suportadas por gateways regulados.",
    },
    {
      icon: <FaPaypal />,
      title: "PayPal",
      desc: "Disponível via parceiros compatíveis (varia por país).",
    },
    {
      icon: <FaExchangeAlt />,
      title: "P2P (USDT → E-Coin)",
      desc: "Compra USDT via P2P e faz swap para E-Coin on-chain.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Money",
      desc: "Métodos locais (ex: M-Pesa / e-Mola / mKesh) via integração E-Pay.",
    },
  ];

  const comingSoon = [
    "Integração bancária direta via E-Pay (mais países)",
    "POS & QR Payments (pagamentos presenciais)",
    "Cartões virtuais E-Pay",
    "APIs públicas para parceiros e comerciantes",
  ];

  return (
    <section className="relative mt-24 rounded-3xl border border-white/10 bg-gradient-to-b from-[#001f1a] via-[#020617] to-black p-8 overflow-hidden">
      {/* Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#00FF9C]/20 blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00FF9C]/20 bg-[#00FF9C]/5 text-[#00FF9C] text-sm font-medium">
            <BsStars className="text-[#FFD700]" />
            Métodos de Compra • Fiat & Digital
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            <span className="text-[#00FF9C]">E-Pay </span>
            <span className="text-white">Payments Gateway</span>
          </h2>

          <p className="text-gray-300 mt-3 max-w-3xl mx-auto">
            Utilize métodos locais, globais ou digitais. Quando necessário,
            a conversão Fiat → Cripto ocorre via parceiros regulados ou P2P,
            com a troca final sempre realizada on-chain dentro do ecossistema
            EdenKingDom.
          </p>
        </motion.div>

        {/* E-Pay destaque */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 rounded-2xl border border-[#00FF9C]/40 bg-gradient-to-r from-[#00FF9C]/10 via-[#007BFF]/10 to-[#FFD700]/10 p-6 shadow-lg backdrop-blur-md"
        >
          <h3 className="text-2xl font-bold flex items-center gap-2 text-[#00FF9C]">
            <FaCheckCircle />
            E-Pay — Método Oficial EdenKingDom
          </h3>

          <p className="text-gray-200 mt-3 max-w-3xl">
            E-Pay é o sistema financeiro digital da EdenKingDom, permitindo
            pagamentos locais, conversões seguras e acesso direto ao ecossistema
            E-Coin, com integração total entre carteiras, swaps e tesourarias.
          </p>

          {/* Botões */}
          <div className="mt-6 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#00FF9C] to-[#007BFF] text-black hover:opacity-90 transition">
              Comprar via E-Pay
            </button>

            <button className="px-6 py-3 rounded-xl font-semibold border border-[#FFD700]/40 text-[#FFD700] hover:bg-[#FFD700]/10 transition">
              Ver Guia por País
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-3 text-gray-300 text-sm mt-6">
            <div>• Métodos locais e internacionais</div>
            <div>• Conversão Fiat → Cripto integrada</div>
            <div>• Integração direta com Swap E-Coin</div>
            <div>• Infraestrutura institucional segura</div>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {methods.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-[#00FF9C]/40 hover:shadow-[#00FF9C]/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-xl border border-white/10 bg-black/40 flex items-center justify-center text-[#00FF9C] text-xl">
                  {m.icon}
                </div>
                <h4 className="text-lg font-semibold text-white tracking-wide">
                  {m.title}
                </h4>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Em breve */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-[#FFD700]/30 bg-[#FFD700]/5 p-6"
        >
          <div className="flex items-center gap-2 text-[#FFD700] font-semibold text-lg">
            <FaClock />
            Métodos em implementação (em breve)
          </div>

          <div className="grid md:grid-cols-2 gap-2 mt-4 text-sm text-gray-300">
            {comingSoon.map((t) => (
              <div key={t} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#FFD700] inline-block" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Aviso */}
        <p className="mt-8 text-xs text-center text-gray-500 max-w-4xl mx-auto">
          A EdenKingDom não processa pagamentos fiat diretamente no blockchain.
          Conversões podem ocorrer via parceiros regulados, gateways licenciados
          ou plataformas P2P verificadas dentro da estrutura E-Pay.
        </p>
      </div>
    </section>
  );
}
