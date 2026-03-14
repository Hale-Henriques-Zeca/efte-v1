"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function StakingPage() {
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
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/95 via-black/95 to-black" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#22C55E]/30 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center text-gray-200 space-y-6">
          <p className="text-sm text-gray-400">
            EdenKingDom Learn · Conteúdo Educativo Oficial
          </p>

          <h1 className="text-3xl sm:text-5xl font-extrabold">
            🔒 O que é Staking?
            <br />
            <span className="text-[#22C55E]">
              Como a E-Coin gera rendimento real
            </span>
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto">
            Staking é o mecanismo que permite aos detentores de E-Coin
            participarem do ecossistema e receberem recompensas
            proporcionais, automáticas e auditáveis.
          </p>
        </div>
      </motion.section>

      {/* ================= O QUE É STAKING ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative py-24 px-6"
      >
        <div className="max-w-4xl mx-auto text-gray-700 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2D5A]">
            O que é staking?
          </h2>

          <p>
            <strong>Staking</strong> é o ato de bloquear temporariamente
            as suas <strong>E-Coins</strong> em contratos inteligentes
            para ajudar a sustentar o ecossistema.
          </p>

          <p>
            Em troca, o utilizador recebe <strong>recompensas diárias</strong>,
            provenientes de fundos reais — não de inflação,
            nem de empréstimos, nem de novos participantes.
          </p>
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
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white" />

        <div className="max-w-5xl mx-auto space-y-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2D5A]">
            Benefícios do staking da E-Coin
          </h2>

          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>Rendimentos proporcionais e automáticos;</li>
            <li>Execução 100% via smart contracts;</li>
            <li>Sem empréstimo dos ativos;</li>
            <li>Sem promessas de retorno fixo;</li>
            <li>Transparência total on-chain;</li>
            <li>Modelo sustentável e anti-pirâmide.</li>
          </ul>
        </div>
      </motion.section>

      {/* ================= EPOCHS ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative py-28 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#020617] via-black to-black" />

        <div className="max-w-5xl mx-auto text-gray-200 space-y-12">
          <h2 className="text-3xl font-extrabold text-[#3B82F6] text-center">
            🧮 Epochs Diários e Distribuição
          </h2>

          <div className="bg-black/50 border border-[#3B82F6]/30 rounded-2xl p-8 backdrop-blur-sm text-center">
            <p className="font-mono text-lg sm:text-xl bg-white text-black rounded-xl inline-block p-4">
              Recompensa = (Stake do Usuário ÷ Stake Total) × Pool do Dia
            </p>
          </div>

          <p className="text-gray-400 text-center italic">
            “O contrato distribui apenas o que existe no pool.
            Se não há fundos, não há pagamento.”
          </p>
        </div>
      </motion.section>

      {/* ================= ORIGEM DOS FUNDOS ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative py-28 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black to-black" />

        <div className="max-w-5xl mx-auto text-gray-200 space-y-10">
          <h2 className="text-3xl font-extrabold text-[#D4AF37] text-center">
            💎 Origem dos Fundos do Staking
          </h2>

          <ul className="list-disc list-inside text-gray-300 space-y-3">
            <li>Percentual das compras na pré-venda;</li>
            <li>Lucros reais da EdenKingDom Corporation;</li>
            <li>Reservas estratégicas de estabilização.</li>
          </ul>

          <p className="text-gray-400 italic text-center">
            “Não existe criação artificial de dinheiro.
            Cada E-Coin distribuída tem origem real.”
          </p>
        </div>
      </motion.section>

      {/* ================= APR DINÂMICO ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative py-28 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#020617] via-black to-black" />

        <div className="max-w-5xl mx-auto text-gray-200 space-y-10">
          <h2 className="text-3xl font-extrabold text-[#22C55E] text-center">
            🔄 Por que o APR muda?
          </h2>

          <ul className="list-disc list-inside text-gray-300 space-y-3">
            <li>Depende do tamanho real do pool diário;</li>
            <li>Depende do total em staking;</li>
            <li>Garante equilíbrio e sustentabilidade;</li>
            <li>Evita inflação e esquemas de pirâmide.</li>
          </ul>

          <p className="text-gray-400 italic text-center">
            “Na E-Coin, o rendimento reflete a realidade —
            não promessas artificiais.”
          </p>
        </div>
      </motion.section>

      {/* ================= CONCLUSÃO ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative py-32 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black to-black" />

        <div className="max-w-4xl mx-auto text-center text-gray-200 space-y-6">
          <h2 className="text-3xl font-extrabold text-[#D4AF37]">
            Staking não é juros — é participação
          </h2>

          <p className="text-gray-300">
            O staking da E-Coin representa um modelo económico
            baseado em valor real, governança transparente
            e crescimento sustentável.
          </p>

          <h3 className="italic text-[#D4AF37] text-xl">
            “Staking é compromisso com o ecossistema —
            não especulação.”
          </h3>
        </div>
      </motion.section>

    </main>
  );
}
