"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function CryptoVsBettingPage() {
  return (
    <main className="w-full">

      {/* HERO INTRO */}
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
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center text-gray-200 space-y-6">
          <p className="text-sm text-gray-400">
            EdenKingDom Buy Crypto · Conteúdo Educativo Oficial
          </p>

          <h1 className="text-3xl sm:text-5xl font-extrabold">
            Mercado Financeiro / Cripto / E-Coin
            <br />
            <span className="text-[#D4AF37]">
              vs Sistemas de Apostas
            </span>
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto">
            Comparar investimento e cripto com apostas é um erro conceitual.
            Eles são opostos em estrutura, lógica, risco, propósito e resultado.
          </p>
        </div>
      </motion.section>

      {/* SECTION 21 — COMPARAÇÃO MERCADO VS APOSTAS */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-vs-betting-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* Conteúdo principal */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 🔍 Título e Introdução */}
    <div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
        🔍 COMPARAÇÃO REAL ENTRE: O Mercado Financeiro / Cripto ou E-Coin <br /> vs <br /> Sistemas de Apostas (Betting / Aviator / Futebol)
      </h2>

      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
        A maior falha das pessoas é tentar comparar <strong>finanças</strong> com <strong>jogos de aposta</strong>,  
        mas na realidade eles são <span className="text-[#D4AF37] font-semibold">opostos em estrutura, lógica, risco, resultado e propósito</span>.
      </p>

      <p className="text-gray-400 mt-4 italic">
        A seguir está a explicação completa:
      </p>
    </div>

    {/* 💼 Mercado Financeiro / Cripto / E-Coin */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
        💼 Mercado Financeiro / Cripto / E-Coin
      </h3>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Baseado em <strong>análise, estrutura e utilidade real</strong>;</li>
        <li>Envolve <strong>planejamento, estudo e gestão de risco</strong>;</li>
        <li>O retorno é proporcional à <strong>inovação e adoção do projeto</strong>;</li>
        <li>A perda ocorre por má gestão, não por sorte ou azar;</li>
        <li>O sucesso é consequência de <strong>educação financeira e visão de longo prazo</strong>.</li>
      </ul>
      <p className="text-gray-400 mt-3 italic">
        “No mercado financeiro, o lucro nasce da estrutura — não do acaso.”
      </p>
    </div>

    {/* 🎰 Sistemas de Apostas */}
    <div className="border-l-4 border-red-500/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-3">
        🎰 Sistemas de Apostas (Betting / Aviator / Futebol)
      </h3>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Baseado em <strong>probabilidades e sorte momentânea</strong>;</li>
        <li>Não há criação de valor, apenas redistribuição de perdas e ganhos;</li>
        <li>O lucro de um vem da <strong>perda do outro</strong>;</li>
        <li>Não há utilidade, nem crescimento sustentável;</li>
        <li>Gera dependência psicológica e não riqueza real.</li>
      </ul>
      <p className="text-gray-400 mt-3 italic">
        “Nas apostas, o jogo é o produto — não existe valor, apenas risco.”
      </p>
    </div>

    {/* ⚖️ Conclusão Comparativa */}
    <div className="text-center mt-10">
      <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">
        ⚖️ Diferença Fundamental
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Enquanto o <strong>mercado financeiro</strong> e a <strong>E-Coin</strong> constroem valor através de <strong>estrutura, propósito e inovação</strong>,  
        os <strong>sistemas de aposta</strong> vivem de <strong>azar, vício e instabilidade</strong>.
      </p>
      <p className="text-yellow-400 font-semibold mt-4">
        💠 A E-Coin não é um jogo — é uma economia estruturada, viva e auditável.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 22 — DIFERENTES POR NATUREZA E PROPÓSITO */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-diferencas-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 🟦 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
      🟦 1. Diferentes por Natureza e Propósito
    </h2>

    {/* 🪙 Mercado Financeiro / Cripto */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
        🪙 Mercado Financeiro / Cripto
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Criado para <strong>transferência de valor, poupança, investimento, tecnologia, transações e economia real</strong>.  
        É um sistema que move nações, impulsiona empresas e sustenta a infraestrutura global.
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>Movimenta economias e países;</li>
        <li>É regulado ou semi-regulado;</li>
        <li>Baseado em <strong>oferta, demanda, liquidez e tecnologia</strong>;</li>
        <li>Tem <strong>segurança, utilidade, comunidade e fluxo econômico natural</strong>;</li>
        <li>Opera com <strong>mecanismos matemáticos e fundamentos reais</strong>.</li>
      </ul>

      <p className="text-gray-400 italic mt-3">
        “O mercado financeiro não é um jogo — é a base sobre a qual o mundo moderno opera.”
      </p>
    </div>

    {/* 🎰 Sistemas de Apostas */}
    <div className="border-l-4 border-red-500/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-3">
        🎰 Sistemas de Apostas (Betting, Aviator, Jogos)
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Criados com o propósito de <strong>entretenimento, emoção e risco imediato</strong>,  
        os sistemas de apostas não geram valor produtivo nem impacto econômico real.
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>Baseados em <strong>adrenalina e instinto</strong>, não em estratégia;</li>
        <li>Não produzem valor real nem desenvolvimento social;</li>
        <li>O sistema sempre vence no longo prazo;</li>
        <li>O usuário aposta <strong>contra</strong> a própria plataforma;</li>
        <li>Gera vício e dependência, não riqueza nem estabilidade.</li>
      </ul>

      <p className="text-gray-400 italic mt-3">
        “Nos jogos, o lucro é ilusão; a perda é estatística.”
      </p>
    </div>

    {/* 🧭 Conclusão */}
    <div className="text-center mt-10">
      <p className="text-gray-300 leading-relaxed">
        O <strong>Mercado Financeiro e Cripto</strong> existe para <strong>gerar valor, inovação e progresso</strong>.  
        As <strong>apostas</strong> existem apenas para <strong>entreter e consumir o risco</strong>.
      </p>
      <p className="text-[#D4AF37] font-semibold mt-4">
        💠 A E-Coin foi criada para o lado produtivo da história — não para o lado especulativo.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 23 — LÓGICA DO SISTEMA */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-logica-sistema-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 🟥 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
      🟥 2. Lógica do Sistema
    </h2>

    {/* 🪙 Mercado Financeiro / Cripto */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
        🪙 Mercado Financeiro / Cripto
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Funciona baseado em variáveis naturais e econômicas, que refletem o comportamento coletivo e o crescimento real dos mercados:
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>Oferta e procura;</li>
        <li>Volatilidade natural e orgânica;</li>
        <li>Liquidez de mercado;</li>
        <li>Análise técnica e fundamental;</li>
        <li>Tecnologia blockchain e transparência pública;</li>
        <li>Eventos econômicos e inovações reais;</li>
        <li>Crescimento e adoção global;</li>
      </ul>

      <p className="text-gray-400 italic mt-3">
        “O mercado é como um organismo vivo — ninguém controla diretamente, ele reage à realidade.”
      </p>
    </div>

    {/* 🎰 Betting (Apostas) */}
    <div className="border-l-4 border-red-500/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-3">
        🎰 Betting (Apostas)
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Funciona baseado em <strong>probabilidades artificiais</strong> e algoritmos pré-programados para manter a lucratividade da plataforma:
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>Probabilidade programada e previsível;</li>
        <li>Algoritmos criados para dar lucro à empresa;</li>
        <li>RTP (Return to Player) controlado e fixo;</li>
        <li>Casas de aposta limitam riscos e ganhos;</li>
        <li>“Odd makers” contratam matemáticos para controlar o resultado;</li>
        <li>O sistema define quando paga, quanto paga e quando recolhe tudo.</li>
      </ul>

      <p className="text-gray-400 italic mt-3">
        “Em apostas, nada é natural — tudo é calculado para que o jogador perca mais do que ganha.”
      </p>
    </div>

    {/* ⚖️ Conclusão Comparativa */}
    <div className="text-center mt-10">
      <p className="text-gray-300 leading-relaxed">
        O <strong>Mercado Financeiro e Cripto</strong> reage ao mundo real —  
        <strong>as apostas</strong> reagem apenas ao código que decide o seu destino.
      </p>
      <p className="text-[#D4AF37] font-semibold mt-4">
        💠 A E-Coin segue a lógica natural da economia — não o algoritmo da sorte.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 24 — POSSIBILIDADE DE CRESCIMENTO */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-crescimento-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 🟩 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
      🟩 3. Possibilidade de Crescimento
    </h2>

    {/* 🪙 Criptomoedas com utilidade real */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
        🪙 Criptomoedas com utilidade real
      </h3>
      <p className="text-gray-300 leading-relaxed">
        As criptomoedas com propósito e utilidade prática podem crescer de forma sustentável e orgânica, 
        baseadas em adoção, tecnologia e uso real na economia.
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>Podem subir organicamente;</li>
        <li>Valorizam conforme a adoção aumenta;</li>
        <li>Tornam-se meios de pagamento reais;</li>
        <li>São usadas por empresas e marketplaces;</li>
        <li>Movem economias e setores produtivos;</li>
        <li>Geram empregos, ecossistemas e inovação.</li>
      </ul>

      <p className="text-gray-300 mt-3">
        <strong>Exemplo:</strong> Bitcoin começou a US$ 0.0008 — hoje vale dezenas de milhares de dólares.  
        O crescimento foi o resultado de <span className="text-[#D4AF37] font-semibold">utilidade, confiança e adoção global</span>.
      </p>

      <p className="text-gray-400 italic mt-3">
        “Toda moeda com propósito real encontra o seu valor no tempo.”
      </p>
    </div>

    {/* 🎰 Apostas */}
    <div className="border-l-4 border-red-500/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-3">
        🎰 Apostas
      </h3>
      <p className="text-gray-300 leading-relaxed">
        No universo das apostas, não existe construção de valor, nem crescimento sustentável — apenas rotação de risco e perda acumulada.
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>Você nunca “investe” — você <strong>joga</strong>;</li>
        <li>Você nunca constrói patrimônio;</li>
        <li>Não existe valorização nem holding;</li>
        <li>Não há liquidez crescente nem utilidade real;</li>
        <li>A plataforma sempre ganha mais do que distribui.</li>
      </ul>

      <p className="text-gray-400 italic mt-3">
        “Em apostas, o crescimento é um mito — a roleta sempre volta ao zero.”
      </p>
    </div>

    {/* 🧭 Conclusão */}
    <div className="text-center mt-10">
      <p className="text-gray-300 leading-relaxed">
        Enquanto o <strong>mercado financeiro</strong> e as <strong>criptomoedas úteis</strong> constroem valor,  
        as <strong>apostas</strong> apenas reciclam perdas.
      </p>
      <p className="text-[#D4AF37] font-semibold mt-4">
        💠 A E-Coin representa o lado produtivo do crescimento real — onde o valor nasce do uso, e não do acaso.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 25 — RISCO: DIFERENTE NATUREZA */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-risco-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 🟨 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
      🟨 4. Risco: Diferente Natureza
    </h2>

    {/* 🪙 Cripto */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
        🪙 Cripto
      </h3>
      <p className="text-gray-300 leading-relaxed">
        O risco nas criptomoedas é calculado e mensurável, resultado direto de fatores de mercado reais, como volatilidade, oferta e liquidez.
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>Volatilidade natural do mercado;</li>
        <li>Oferta e demanda em constante ajuste;</li>
        <li>Volume e movimentação de investidores;</li>
        <li>Market makers e correções de preço;</li>
        <li>Eventos macroeconômicos e geopolíticos;</li>
        <li>Liquidez e profundidade de mercado;</li>
      </ul>

      <p className="text-gray-300 mt-3">
        Mesmo no pior cenário, ainda há <span className="text-[#D4AF37] font-semibold">valor residual</span>,  
        pois o ativo continua existindo, com base em utilidade, tecnologia e propriedade digital.
      </p>

      <p className="text-gray-400 italic mt-3">
        “No mundo cripto, o risco é o preço da oportunidade — não o fim do jogo.”
      </p>
    </div>

    {/* 🎰 Apostas */}
    <div className="border-l-4 border-red-500/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-3">
        🎰 Apostas
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Nas apostas, o risco é <strong>imediato e absoluto</strong>.  
        O jogador depende unicamente da sorte e do algoritmo que sempre favorece a casa.
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>Perda total em questão de segundos;</li>
        <li>Ausência total de valor residual;</li>
        <li>Sistema programado para prevalecer;</li>
        <li>Sem controle de perdas nem previsibilidade;</li>
        <li>Emoção e vício aumentam o risco psicológico.</li>
      </ul>

      <p className="text-gray-400 italic mt-3">
        “Nas apostas, o risco não é mensurado — é inevitável.”
      </p>
    </div>

    {/* ⚖️ Conclusão */}
    <div className="text-center mt-10">
      <p className="text-gray-300 leading-relaxed">
        O risco na <strong>E-Coin</strong> é fruto de mercado e análise.  
        O risco nas <strong>apostas</strong> é fruto de sorte e programação.
      </p>
      <p className="text-[#D4AF37] font-semibold mt-4">
        💠 A diferença está na natureza: uma constrói valor, a outra o consome.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 26 — TRANSPARÊNCIA */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-transparencia-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 🟧 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
      🟧 5. Transparência
    </h2>

    {/* 🪙 Blockchain */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
        🪙 Blockchain
      </h3>
      <p className="text-gray-300 leading-relaxed">
        A base da <strong>E-Coin</strong> é a transparência total.  
        Todas as transações e contratos são públicos e rastreáveis, garantindo confiança e integridade.
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>100% pública e imutável;</li>
        <li>Cada transação é rastreável e verificável;</li>
        <li>Smart contracts são auditáveis por qualquer pessoa;</li>
        <li>Código-fonte aberto e transparente;</li>
        <li>Liquidez e volume visíveis em tempo real.</li>
      </ul>

      <p className="text-gray-400 italic mt-3">
        “Na blockchain, a verdade não depende da confiança — ela é visível.”
      </p>
    </div>

    {/* 🎰 Aviator / Jogos / Betting */}
    <div className="border-l-4 border-red-500/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-3">
        🎰 Aviator / Jogos / Betting
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Em contraste, as plataformas de apostas funcionam em sistemas fechados e opacos,  
        onde o usuário nunca tem acesso ao funcionamento real do algoritmo.
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>Sistema fechado e centralizado;</li>
        <li>Código e dados ocultos do público;</li>
        <li>Algoritmos internos potencialmente manipuláveis;</li>
        <li>Resultados não auditáveis pelo usuário;</li>
        <li>Probabilidades escondidas e controladas pela empresa.</li>
      </ul>

      <p className="text-gray-400 italic mt-3">
        “Nas apostas, o que você não vê é exatamente o que te faz perder.”
      </p>
    </div>

    {/* ⚖️ Conclusão */}
    <div className="text-center mt-10">
      <p className="text-gray-300 leading-relaxed">
        A <strong>E-Coin</strong> opera com total transparência.  
        As <strong>apostas</strong> operam no escuro.
      </p>
      <p className="text-[#D4AF37] font-semibold mt-4">
        💠 A diferença é clara: confiança se constrói com transparência, não com sorte.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 27 — QUEM PERDE E QUEM GANHA */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-quemganha-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 🟪 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
      🟪 6. Quem Perde e Quem Ganha?
    </h2>

    {/* 🪙 Cripto */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
        🪙 Cripto
      </h3>
      <p className="text-gray-300 leading-relaxed">
        No ecossistema cripto, <strong>todos podem ganhar</strong> se o mercado cresce e se a adoção aumenta.  
        É um modelo de criação e partilha de valor, sustentado por tecnologia, comunidade e produtividade.
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>Traders — lucram com movimentações e volume;</li>
        <li>Holders — valorizam com o crescimento do ecossistema;</li>
        <li>Empresas — integram e ampliam utilidades;</li>
        <li>Desenvolvedores — constroem soluções e são recompensados;</li>
        <li>Governos — arrecadam e estimulam inovação;</li>
        <li>Países — atraem investimentos e progresso.</li>
      </ul>

      <p className="text-gray-400 italic mt-3">
        “A criptoeconomia é colaborativa: quanto mais cresce, mais todos ganham.”
      </p>
    </div>

    {/* 🎰 Apostas */}
    <div className="border-l-4 border-red-500/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-3">
        🎰 Apostas
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Nos jogos e apostas, o sistema é de <strong>redistribuição, não de criação</strong> de valor.  
        Para alguém ganhar, outro precisa perder — e quase sempre, o sistema é o maior ganhador.
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>Lucro de um vem da perda de outro;</li>
        <li>O sistema é programado para ganhar sempre mais;</li>
        <li>Não há criação de riqueza — apenas rotação de perdas;</li>
        <li>É um ecossistema sem produtividade nem propósito real.</li>
      </ul>

      <p className="text-gray-400 italic mt-3">
        “Nas apostas, a única constante é a vitória do sistema.”
      </p>
    </div>

    {/* ⚖️ Conclusão */}
    <div className="text-center mt-10">
      <p className="text-gray-300 leading-relaxed">
        A <strong>E-Coin</strong> constrói valor que se multiplica.  
        As <strong>apostas</strong> apenas giram valor que se esgota.
      </p>
      <p className="text-[#D4AF37] font-semibold mt-4">
        💠 Na E-Coin, o sucesso é coletivo. Nas apostas, o prejuízo é compartilhado.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 28 — BASE MATEMÁTICA */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-basematematica-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 🟫 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
      🟫 7. Base Matemática
    </h2>

    {/* 🪙 Cripto */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
        🪙 Cripto
      </h3>
      <p className="text-gray-300 leading-relaxed">
        O universo das criptomoedas é sustentado por <strong>matemática real e verificável</strong>,  
        baseada em princípios de descentralização, segurança e consenso global.
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>Probabilidades naturais do mercado;</li>
        <li>Modelos econômicos previsíveis e auditáveis;</li>
        <li>Adoção global e descentralizada;</li>
        <li>Algoritmos de consenso: Proof-of-Work e Proof-of-Stake;</li>
        <li>Funções criptográficas (hashing, validação e integridade de blocos).</li>
      </ul>

      <p className="text-gray-400 italic mt-3">
        “Na blockchain, a matemática é a lei — e o código é o juiz.”
      </p>
    </div>

    {/* 🎰 Betting */}
    <div className="border-l-4 border-red-500/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-3">
        🎰 Betting
      </h3>
      <p className="text-gray-300 leading-relaxed">
        As plataformas de apostas utilizam <strong>simulações matemáticas artificiais</strong>  
        criadas para controlar o risco e garantir lucro constante à empresa.
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>Probabilidades definidas pelo sistema, não pela realidade;</li>
        <li>Resultados simulados, não naturais;</li>
        <li>Controle total do risco pelo operador;</li>
        <li>Modelos fechados, sem auditoria pública;</li>
        <li>O lucro do sistema é matematicamente inevitável.</li>
      </ul>

      <p className="text-gray-400 italic mt-3">
        “Na aposta, a matemática não é imparcial — é programada para vencer o jogador.”
      </p>
    </div>

    {/* ⚖️ Conclusão */}
    <div className="text-center mt-10">
      <p className="text-gray-300 leading-relaxed">
        A <strong>E-Coin</strong> é guiada por algoritmos descentralizados e matematicamente justos.  
        As <strong>apostas</strong> são guiadas por cálculos ocultos e unilateralmente controlados.
      </p>
      <p className="text-[#D4AF37] font-semibold mt-4">
        💠 Uma é ciência aplicada; a outra, simulação lucrativa.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 29 — CONCLUSÃO FINAL */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2a]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-conclusao-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 🔵 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6] text-center mb-8">
      🔵 8. Conclusão Final — A Diferença é Enorme
    </h2>

    {/* 🪙 Mercado Financeiro / Cripto */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
        🪙 Mercado Financeiro / Cripto
      </h3>
      <p className="text-gray-300 leading-relaxed mb-4">
        O mercado financeiro e o universo cripto formam um ecossistema vivo que <strong>cria valor real</strong>,  
        impulsiona economias e constrói o futuro digital da humanidade.
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>✔ Cria valor;</li>
        <li>✔ Movimenta economias;</li>
        <li>✔ Produz riqueza;</li>
        <li>✔ Permite investimento;</li>
        <li>✔ Tem utilidade prática;</li>
        <li>✔ É regulado (ou caminha para isso);</li>
        <li>✔ Funciona com base na realidade global.</li>
      </ul>

      <p className="text-gray-300 mt-6 leading-relaxed">
        👉 É <span className="text-[#3B82F6] font-semibold">economia</span>.  
        É <span className="text-[#D4AF37] font-semibold">tecnologia</span>.  
        É <span className="text-[#22C55E] font-semibold">futuro</span>.  
        É <span className="text-white font-bold">investimento</span>.
      </p>

      <p className="text-gray-400 italic mt-4">
        “A E-Coin representa a união definitiva entre propósito, valor real e tecnologia.”  
      </p>
    </div>

    {/* ⚖️ Encerramento visual */}
    <div className="text-center mt-12">
      <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold mb-3">
        💠 E-Coin — A Moeda Corporativa da Nova Era Econômica Global
      </p>
      <p className="text-gray-400">
        Construída desde o Gênesis.  
        Projetada para a Eternidade.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 30 — CONCLUSÃO FINAL DE APOSTAS */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico vermelho-púrpura */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#2a0000]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-apostasfinal-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-[#7B1FA2]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 🎰 Apostas / Betting */}
    <div className="border-l-4 border-red-500/70 pl-6">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-red-500 mb-6">
        🎰 Apostas / Betting
      </h2>

      <ul className="list-disc list-inside text-gray-400 space-y-1">
        <li>❌ Não criam valor;</li>
        <li>❌ Não movimentam economia;</li>
        <li>❌ Não produzem riqueza;</li>
        <li>❌ Não têm utilidade real;</li>
        <li>❌ Jogas contra a própria plataforma;</li>
        <li>❌ Sistema programado para te fazer perder.</li>
      </ul>

      <p className="text-gray-300 mt-6 leading-relaxed">
        👉 É <span className="text-red-400 font-semibold">entretenimento</span>.  
        <br />
        ❌ <span className="text-white font-semibold">Não é investimento.</span>
      </p>
    </div>

    {/* 🟣 Mensagem do CEO */}
    <div className="border-t border-[#D4AF37]/30 pt-10 text-center">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-4">
        🟣 Mensagem Oficial do CEO — EdenKingDom Corporation
      </h3>
      <blockquote className="italic text-lg sm:text-xl text-gray-300 leading-relaxed">
        “Cripto é <span className='text-[#3B82F6] font-semibold'>tecnologia financeira</span>.<br/>
        Apostas são <span className='text-red-400 font-semibold'>entretenimento matemático</span>.<br/>
        <span className='text-[#D4AF37] font-semibold'>Uma cria riqueza</span>.<br/>
        <span className='text-white font-semibold'>A outra redistribui perda.</span>”
      </blockquote>
      <p className="text-sm text-gray-500 mt-4">
        — <span className="text-[#D4AF37] font-semibold">CEO da EdenKingDom Corporation</span>
      </p>
    </div>
  </div>
</motion.section>


    </main>
  );
}
