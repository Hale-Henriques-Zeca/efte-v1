"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function EvolutionOfMoneyPage() {
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
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/95 via-black/95 to-black" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center text-gray-200 space-y-6">
          <p className="text-sm text-gray-400">
            EdenKingDom Learn · Conteúdo Educativo Oficial
          </p>

          <h1 className="text-3xl sm:text-5xl font-extrabold">
            💰 A Evolução do Dinheiro
            <br />
            <span className="text-[#D4AF37]">
              Do Escambo à Era da E-Coin
            </span>
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto">
            A história do dinheiro é a história da confiança, da tecnologia
            e da organização da civilização humana.
          </p>
        </div>
      </motion.section>

      {/* SECTION 10 — A EVOLUÇÃO DO DINHEIRO */}
      <motion.section
        variants={fadeUp}
        className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
      >
        {/* 🌄 Fundo inspirado na imagem */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
          <div
            className="absolute inset-0 bg-[url('/images/evolution-bg.jpg')] bg-cover bg-center opacity-25"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
        </div>

        {/* Conteúdo principal */}
        <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] mb-6 text-center">
            💰 A Evolução do Dinheiro —{" "}
            <span className="text-white">
              Da Troca Direta à Era da Moeda EdenKingDom (E-Coin)
            </span>
          </h2>

          {/* 1️⃣ Troca Direta */}
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">
              🌿 1. As Origens — Troca Direta (Escambo) – 6.000 a.C.
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-300">
              Nos estágios iniciais da civilização, os humanos realizavam trocas
              diretas de bens e serviços: animais, plantações, ferramentas e
              tecidos. Esse sistema, conhecido como{" "}
              <strong>escambo</strong>, exigia que ambas as partes desejassem
              exatamente o que a outra oferecia — tornando o comércio lento e
              ineficiente.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-gray-400">
              Além disso, a posse de bens como animais e terras era usada como
              forma de reserva de valor, embora ainda sem um meio de troca
              universal.
            </p>
            <p className="text-xs text-gray-500">👉 (Fonte: Credit Karma)</p>
          </div>

          {/* 2️⃣ Mercadorias-Moeda */}
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">
              🪙 2. Mercadorias-Moeda (Commodity Money) – 3.000 a.C.
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-300">
              Com o tempo, surgiram formas intermediárias: conchas, sal, grãos e
              peles. Esses bens tinham valor porque eram úteis ou raros. Logo,
              os metais — ouro, prata e bronze — tornaram-se preferidos pela
              durabilidade, divisibilidade e aceitação social.
            </p>
            <p className="text-xs text-gray-500">👉 (Fonte: Medium)</p>
          </div>

          {/* 3️⃣ Moedas Metálicas */}
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">
              ⚖️ 3. As Primeiras Moedas Metálicas – 630 a.C.
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-300">
              No Reino da Lídia (atual Turquia) e na China, foram cunhadas as
              primeiras moedas padronizadas. Elas trouxeram facilidade de
              transporte, autenticação e confiança pública — marcando o
              nascimento do dinheiro como o conhecemos hoje.
            </p>
            <p className="text-xs text-gray-500">👉 (Fonte: Investopedia)</p>
          </div>
        </div>
      </motion.section>

{/* SECTION 6 — O PAPEL COMO MOEDA ATÉ A ERA DOS CARTÕES */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo inspirado na imagem */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
          <div
            className="absolute inset-0 bg-[url('/images/evolution-part2-bg.jpg')] bg-cover bg-center opacity-25"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
        </div>

  {/* 📜 Conteúdo principal */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-8">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] mb-6 text-center">
      PARTE II — DO PAPEL COMO MOEDA À ERA DOS CARTÕES (1020 d.C – 1966)
    </h2>

    <div className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
      <p>
        <span className="text-[#D4AF37] font-semibold">📜 4. O Papel como Moeda – 1020 d.C.</span><br />
        A China foi pioneira na introdução das notas de papel, que substituíram as moedas nas transações de grande valor.
        As notas facilitavam o comércio de longa distância e reduziram a dependência de metais preciosos.<br />
        👉 <span className="italic text-gray-400">(Fonte: Credit Karma)</span>
      </p>

      <p>
        <span className="text-[#D4AF37] font-semibold">🏦 5. O Surgimento dos Bancos – 1100–1200 d.C.</span><br />
        Durante a Idade Média, nasceram os primeiros bancos e sistemas de crédito na Europa.
        Eles guardavam metais preciosos, registravam depósitos e emprestavam valores.
        Foi o início da confiança institucional e do conceito de moeda fiduciária — baseada não no valor intrínseco,
        mas na confiança no emissor.<br />
        👉 <span className="italic text-gray-400">(Fonte: Investopedia)</span>
      </p>

      <p>
        <span className="text-[#D4AF37] font-semibold">🪙 6. O Padrão-Ouro – 1860</span><br />
        A Europa adotou o <span className="font-semibold">Gold Standard</span>, que ligava o valor das moedas às reservas de ouro.
        O sistema garantiu estabilidade e confiança internacional durante o século XIX.
        Contudo, também limitou a flexibilidade dos governos em tempos de crise.
      </p>

      <p>
        <span className="text-[#D4AF37] font-semibold">💳 7. A Era dos Cartões e Pagamentos Eletrónicos – 1950s – 1966</span><br />
        Nos Estados Unidos, surgem os primeiros cartões de crédito e débito.
        Com eles, o dinheiro físico começou a perder protagonismo.
        As transações tornaram-se mais rápidas e seguras, dando origem à era dos pagamentos digitais
        e transferências bancárias globais.<br />
        👉 <span className="italic text-gray-400">(Fonte: Credit Karma)</span>
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 7 — O DINHEIRO ELETRÔNICO, CRIPTOMOEDAS E E-COIN */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo inspirado na imagem */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/evolution-part3-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* 📜 Conteúdo principal */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
      PARTE III — DO DINHEIRO ELETRÔNICO À E-COIN (SÉCULO XXI – 2025)
    </h2>

    {/* 8️⃣ Dinheiro Eletrônico */}
    <div className="space-y-3">
      <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">
        🌐 8. O Dinheiro Eletrônico e as Carteiras Digitais – Século XXI
      </h3>
      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
        Com o avanço da internet e dos dispositivos móveis, o dinheiro transformou-se em bits e dados.
        Surgiram carteiras digitais (<em>wallets</em>), pagamentos instantâneos e o conceito de uma sociedade sem dinheiro físico.
        Governos e bancos criaram as <strong>CBDCs</strong> (Moedas Digitais de Bancos Centrais) e <em>stablecoins</em> lastreadas em ativos reais.
      </p>
      <p className="text-xs text-gray-500">👉 (Fonte: Wikipedia)</p>
    </div>

    {/* 9️⃣ Revolução das Criptomoedas */}
    <div className="space-y-3">
      <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">
        🚀 9. 2009 – A Revolução das Criptomoedas
      </h3>
      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
        O nascimento do <strong>Bitcoin</strong> marcou a maior ruptura da história monetária.
        Uma moeda descentralizada, transparente e imutável, operando sem bancos ou governos, movida por <em>blockchain</em>.
        O Bitcoin provou que é possível confiar no código em vez de instituições.
      </p>
      <p className="text-xs text-gray-500">👉 (Fonte: Wise)</p>
    </div>

    {/* 🔟 E-Coin */}
    <div className="space-y-3">
      <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">
        👑 10. 2025 — EdenKingDom Coin (E-Coin): A Moeda Corporativa da Nova Era
      </h3>
      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
        A história entra agora em uma nova etapa: <strong>a Era da E-Coin</strong>.<br />
        Lançada em 2025 pela <span className="text-[#D4AF37] font-semibold">EdenKingDom Corporation</span>,
        a E-Coin simboliza a fusão entre tecnologia, economia e propósito social.
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed ml-4">
        <li>
          💠 <strong>Moeda corporativa global</strong> com base real em múltiplos setores
          (educação, saúde, energia, construção, transporte e marketplace).
        </li>
        <li>🛡️ 100 % auditável <em>on-chain</em>, sem manipulação humana.</li>
        <li>💰 <strong>Staking diário automático</strong>, recompensas proporcionais e transparentes.</li>
        <li>🌐 Liquidez real sustentada por atividades produtivas.</li>
        <li>
          ♻️ Estabilidade sustentável, combinando <em>blockchain</em>, governança e utilidade prática.
        </li>
      </ul>

      <p className="text-sm sm:text-base italic text-gray-400">
        “A E-Coin não é apenas uma moeda — é o elo entre o valor real e o valor digital.”
        <br />
        <span className="text-[#D4AF37]">EdenKingDom Corporation</span> – Construída desde o Gênesis, projetada para a Eternidade.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 8 — CONCLUSÃO DA EVOLUÇÃO DO DINHEIRO */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-20 sm:py-28 px-6 rounded-3xl mt-16 text-center"
>
  {/* 🌄 Fundo inspirado na imagem */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/evolution-conclusion-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* 📜 Conteúdo principal */}
  <div className="max-w-4xl mx-auto text-gray-200 space-y-8">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] mb-6">
      🌍 Conclusão — Do Escambo à Economia Digital
    </h2>

    <p className="text-lg sm:text-xl leading-relaxed text-white/90 font-light">
      A trajetória do dinheiro é uma jornada de confiança, inovação e transformação:
    </p>

    <div className="text-base sm:text-lg leading-relaxed text-gray-300 space-y-2">
      <p>💱 Do escambo e das terras ao ouro e papel.</p>
      <p>💰 Das notas aos cartões.</p>
      <p>🌐 Do eletrônico ao blockchain.</p>
      <p>👑 E, finalmente, à <span className="text-[#D4AF37] font-semibold">E-Coin</span>, que une valor real, utilidade corporativa e transparência global.</p>
    </div>

    {/* ✨ Frase final */}
    <h3 className="text-xl sm:text-2xl mt-10 font-bold text-[#D4AF37] italic">
      “E-Coin — A nova era da economia do Éden.”
    </h3>

    {/* Linha decorativa */}
    <div className="h-px w-2/2 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37]/150 to-transparent mt-8" />
  </div>
</motion.section>


    </main>
  );
}
