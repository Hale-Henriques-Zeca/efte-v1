"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function BullVsBearPage() {
  return (
    <main className="w-full">

      {/* ================= HERO ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        className="relative w-full overflow-hidden py-24 px-6"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#22C55E]/25 via-transparent to-[#EF4444]/25 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto text-center text-gray-200 space-y-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#FACC15]">
            Qual é o melhor momento para investir em criptomoedas?
          </h1>
          <p className="italic text-gray-400">
            Bull Market vs Bear Market — educação financeira real na EdenKingDom Financial Tools Empire (EFTE)
          </p>
        </div>
      </motion.section>

      {/* ================= INTRO ================= */}
      <motion.section variants={fadeUp} className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-gray-300 space-y-6">
          <p>
            No mercado financeiro e cripto, <strong>tempo e estratégia</strong> são mais importantes
            do que sorte. Saber identificar se o mercado está em
            <strong> Bull Market</strong> ou <strong>Bear Market </strong>
            é essencial para investir com consciência.
          </p>

          <p>
            A <strong>EdenKingDom Financial Tools Empire (EFTE)</strong> existe para educar,
            não para incentivar apostas ou decisões emocionais.
          </p>
        </div>
      </motion.section>

      {/* ================= CARD — BEAR MARKET ================= */}
      <motion.section variants={fadeUp} className="py-16 px-6">
        <div className="max-w-5xl mx-auto bg-black/40 border border-red-500/30 rounded-xl p-6 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-red-400">
            🐻 O que é um mercado em baixa?
          </h2>

          <p className="text-gray-300">
            Um <strong>Bear Market</strong> é caracterizado por quedas prolongadas
            de preço (normalmente acima de 20%), medo generalizado e pessimismo.
          </p>

          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Quedas fortes e prolongadas</li>
            <li>Notícias negativas dominam o mercado</li>
            <li>Investidores vendem por medo</li>
            <li>Liquidez diminui</li>
          </ul>

          <p className="italic text-gray-400">
           Os mercados baixistas não são o fim — são períodos de preparação.
          </p>
        </div>
      </motion.section>

      {/* ================= CARD — BULL MARKET ================= */}
      <motion.section variants={fadeUp} className="py-16 px-6">
        <div className="max-w-5xl mx-auto bg-black/40 border border-green-500/30 rounded-xl p-6 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-green-400">
            🐂 O que é um mercado em alta?
          </h2>

          <p className="text-gray-300">
            Um <strong>Bull Market</strong> é marcado por crescimento contínuo,
            otimismo, entrada de novos investidores e forte valorização.
          </p>

          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Preços em alta consistente</li>
            <li>Volume elevado de negociação</li>
            <li>Maior adoção e cobertura mediática</li>
            <li>Confiança no mercado</li>
          </ul>

          <p className="italic text-gray-400">
            Os mercados de touros ou em altas, recompensaram quem se preparou antes.
          </p>
        </div>
      </motion.section>

      {/* ================= CARD — QUANDO INVESTIR ================= */}
      <motion.section variants={fadeUp} className="py-16 px-6">
        <div className="max-w-5xl mx-auto bg-black/40 border border-white/10 rounded-xl p-6 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
           ⏱️ Então… qual é o melhor momento para investir?
          </h2>

          <div className="space-y-4 text-gray-300">
            <p>
              👉 <strong>Bear Market</strong>:
              fase ideal para acumulação consciente,
              estudo e posicionamento estratégico.
            </p>

            <p>
              👉 <strong>Bull Market</strong>:
              fase de gestão de risco, realização de lucros
              e decisões racionais (não emocionais).
            </p>

            <p>
              Estratégias responsáveis incluem:
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>Dollar-Cost Averaging (DCA)</li>
              <li>Gestão de risco</li>
              <li>Visão de longo prazo</li>
              <li>Evitar FOMO e hype</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ================= CARD — VISÃO EBC ================= */}
      <motion.section variants={fadeUp} className="py-16 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#3B82F6]/15 to-[#020617]/40 border border-white/10 rounded-xl p-6 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#FACC15]">
            🏛️ A Visão da EFTE
          </h2>

          <p className="text-gray-300">
            A <strong>EdenKingDom Financial Tools Empire (EFTE)</strong> não promove apostas,
            promessas de lucro rápido ou ilusões financeiras.
          </p>

          <p className="text-gray-300">
            Promovemos <strong>educação </strong>,
            <strong> transparência </strong> e
            <strong> decisões conscientes </strong>
            no mercado cripto.
          </p>
        </div>
      </motion.section>

      {/* ================= ASSINATURA ================= */}
      <motion.section variants={fadeUp} className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center bg-black/40 border border-white/10 rounded-xl p-8 space-y-4">
          <p className="text-gray-400 italic">
            “O melhor momento para investir não é quando todos falam —
            é quando você entende.”
          </p>

          <p className="text-[#FACC15] font-semibold">
            — EdenKingDom Financial Tools Empire (EFTE)
          </p>

          <p className="text-gray-500 text-sm">
            Educação financeira · Mercado cripto · Consciência institucional
          </p>
        </div>
      </motion.section>

    </main>
  );
}
