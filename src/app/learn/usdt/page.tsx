"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function USDTPage() {
  return (
    <main className="w-full">

      {/* ================= HERO ================= */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="relative w-full py-28 px-6 overflow-hidden"
      >
        {/* Fundo cinematográfico */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2a]/95 via-black/95 to-black" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/25 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center text-gray-200 space-y-6">
          <p className="text-sm text-gray-400">
            EdenKingDom Financial Tools Empire (EFTE) · Conteúdo Educativo Oficial
          </p>

          <h1 className="text-3xl sm:text-5xl font-extrabold">
            O que é USDT
            <br />
            <span className="text-[#3B82F6]">
              e por que fazer câmbio com ele em 2026?
            </span>
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto">
            A stablecoin que conecta o sistema financeiro tradicional
            ao universo cripto com estabilidade, liquidez e eficiência global.
          </p>
        </div>
      </motion.section>

      {/* ================= INTRO ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative py-24 px-6"
      >
        <div className="max-w-4xl mx-auto text-gray-700 space-y-6">
          <p>
            Provavelmente você já ouviu falar do <strong>USDT</strong>, a criptomoeda
            conhecida por sua estabilidade e paridade com o dólar americano.
          </p>

          <p>
            Por ser atrelado ao USD (1:1), o USDT tornou-se uma das principais
            ferramentas para câmbio institucional, remessas internacionais,
            proteção cambial e liquidação financeira global.
          </p>
        </div>
      </motion.section>

      {/* ================= O QUE É USDT ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative py-24 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white" />

        <div className="max-w-5xl mx-auto space-y-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2D5A]">
            Afinal, o que é Tether (USDT)?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            O <strong>USDT (Tether)</strong> é uma <strong>stablecoin</strong>,
            criada para manter paridade com o dólar americano.
            Cada unidade de USDT busca equivaler a <strong>1 USD</strong>.
          </p>

          <p className="text-gray-700 leading-relaxed">
            A proposta do USDT é unir a estabilidade das moedas fiduciárias
            com a eficiência da tecnologia blockchain,
            oferecendo previsibilidade e liquidez global.
          </p>
        </div>
      </motion.section>

      {/* ================= USDT NA EFTE ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative py-24 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#f5f9ff] to-white" />

        <div className="max-w-5xl mx-auto space-y-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2D5A]">
            Como a Corretora EFTE utiliza o USDT
          </h2>

          <p className="text-gray-700">
            A <strong>EFTE</strong> atua de forma estratégica e segura
            na intermediação de operações com USDT,
            oferecendo uma alternativa moderna e eficiente
            para câmbio internacional.
          </p>

          <div className="border-l-4 border-[#3B82F6] bg-blue-50 p-6 rounded-xl">
            <h3 className="font-semibold mb-2 text-[#1C2D5A]">
              Conformidade com Bancos Centrais
            </h3>
            <p className="text-gray-700">
              A EFTE acompanha continuamente as diretrizes regulatórias
              de Bancos Centrais a nível global,
              garantindo transparência, segurança e conformidade.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ================= VALOR & SEGURANÇA ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative py-24 px-6"
      >
        <div className="max-w-5xl mx-auto space-y-12">

          <div>
            <h2 className="text-2xl font-bold text-[#1C2D5A] mb-3">
              Quanto vale 1 USDT?
            </h2>
            <p className="text-gray-700">
              Em condições normais de mercado, <strong>1 USDT ≈ 1 USD</strong>.
              Pequenas variações podem ocorrer,
              mas a paridade com o dólar é o objetivo central.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1C2D5A] mb-3">
              USDT é seguro?
            </h2>
            <p className="text-gray-700">
              O USDT opera sobre blockchains públicas,
              com transações rastreáveis, liquidez global
              e ampla aceitação institucional.
            </p>
          </div>

        </div>
      </motion.section>

      {/* ================= BENEFÍCIOS ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative py-24 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0a2a] to-black" />

        <div className="max-w-5xl mx-auto text-gray-200 space-y-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3B82F6]">
            Por que usar USDT no câmbio?
          </h2>

          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>Isenção de IOF</li>
            <li>Ausência de taxa SWIFT</li>
            <li>Liquidação no mesmo dia (D+0)</li>
            <li>Estabilidade de preço</li>
            <li>Mais controle e previsibilidade financeira</li>
          </ul>
        </div>
      </motion.section>

      {/* ================= CTA FINAL ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative py-28 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#3B82F6]/20 via-black to-black" />

        <div className="max-w-4xl mx-auto text-center text-gray-200 space-y-6">
          <h2 className="text-3xl font-bold">
            Faça câmbio com USDT na EFTE
          </h2>

          <p className="text-gray-300">
            Liquidação rápida, custos reduzidos
            e segurança institucional.
          </p>

          <a
            href="#"
            className="inline-block px-8 py-4 rounded-xl bg-[#3B82F6] text-white font-semibold hover:opacity-90 transition"
          >
            Fale conosco
          </a>
        </div>
      </motion.section>

    </main>
  );
}
