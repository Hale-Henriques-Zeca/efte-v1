"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function EPayPage() {
  return (
    <main className="w-full">

      {/* ================= HERO — E-PAY ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        className="relative w-full overflow-hidden py-24 px-6"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/25 via-transparent to-[#D4AF37]/25 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto text-gray-200 space-y-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#FACC15]">
            🌐 Sistema Global de Pagamentos — E-Pay
          </h1>
          <p className="italic text-gray-400">
            “O sistema circulatório da nova economia da EdenKingDom”
          </p>
        </div>
      </motion.section>

      {/* ================= O QUE É O E-PAY ================= */}
      <motion.section variants={fadeUp} className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-gray-300 space-y-6">
          <p>
            O <strong>E-Pay</strong> é o sistema global de pagamentos da
            <strong> EdenKingDom Corporation</strong>, inspirado no PayPal,
            PIX e sistemas bancários modernos, mas com
            <strong> liquidez própria</strong>,
            integração cripto e autonomia financeira.
          </p>

          <p>
            Permite enviar, receber e converter valores
            <strong> instantaneamente</strong>,
            sem depender de bancos centrais,
            fronteiras ou moedas locais fracas.
          </p>
        </div>
      </motion.section>

      {/* ================= CARTEIRA E-PAY ================= */}
      <motion.section variants={fadeUp} className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-black/40 border border-white/10 rounded-xl p-6 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
            💳 Carteira E-Pay
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Cartões Visa e sistemas locais</li>
            <li>M-Pesa, e-Mola, mCash, MTN Money</li>
            <li>PIX, Mercado Pago, Paytm, Alipay, WeChat</li>
            <li>Gateways globais e fintechs regionais</li>
          </ul>

          <p>
            Suporta ativos digitais:
            <strong> E-Coin, E-Genesis, E-USD</strong> e moedas fiduciárias.
          </p>

          <p className="italic text-gray-400">
            Liquidez própria, independente de bancos centrais.
          </p>
        </div>
      </motion.section>

      {/* ================= MOTIVAÇÃO REAL ================= */}
      <motion.section variants={fadeUp} className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-gray-300 space-y-6 border-l-4 border-[#D4AF37]/70 pl-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#D4AF37]">
            💬 Porque o E-Pay nasceu
          </h2>

          <p>
            O E-Pay não nasceu de teoria.
            Nasceu da experiência real de
            <strong> não conseguir receber pagamentos legítimos</strong>
            devido a bloqueios bancários,
            falta de liquidez e exclusão digital.
          </p>

          <p className="italic text-gray-400">
            “Trabalhar online era permitido. Receber era incerto.”
          </p>
        </div>
      </motion.section>

      {/* ================= A SOLUÇÃO ================= */}
      <motion.section variants={fadeUp} className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#22C55E]">
              💡 E-Pay como Ponte Global
            </h2>

            <p className="text-gray-300">
              O E-Pay liga cidadãos, empresas,
              universidades e governos
              a um fluxo financeiro global,
              transparente e descentralizado.
            </p>

            <p className="text-gray-300">
              A blockchain substitui a burocracia.
              A tecnologia devolve autonomia.
            </p>
          </div>
        </div>
      </motion.section>

{/* SECTION — SISTEMA GLOBAL DE PAGAMENTOS | E-PAY */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌐 Fundo tecnológico global */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-epay-sistema-global-pagamentos-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/25 via-transparent to-[#D4AF37]/25 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-16">

    {/* Cabeçalho */}
    <div className="text-center space-y-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        🌐 Sistema Global de Pagamentos — E-PAY
      </h2>
      <p className="text-gray-400 italic">
        “O novo PayPal da Era Digital da EdenKingDom”
      </p>
    </div>

    {/* Descrição */}
    <div className="space-y-4">
      <p className="text-gray-300 leading-relaxed">
        O <strong>E-PAY</strong> é o sistema global de pagamentos da
        <strong> EdenKingDom Corporation</strong>,
        inspirado no modelo do PayPal e do PIX brasileiro,
        porém com <strong>liquidez própria</strong>,
        autonomia monetária e integração total
        com carteiras digitais e APIs bancárias globais.
      </p>

      <p className="text-gray-300">
        Este sistema permite enviar e receber dinheiro
        <strong> instantaneamente</strong> em qualquer parte do mundo,
        superando as limitações impostas
        pelos bancos centrais tradicionais.
      </p>
    </div>

    {/* Carteira E-Pay */}
    <div className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        💳 Carteira E-PAY
      </h3>

      <ul className="list-disc list-inside space-y-2 text-gray-300">
        <li>Recarga via Visa, cartões locais, e-wallets e mobile money</li>
        <li>M-Pesa, e-Mola, mCash, Ponto24, SIMO Rede</li>
        <li>Stripe, WeChat Pay, MTN Money</li>
        <li>O Pay, Alipay, WeChat, PIX, MercadoPago</li>
        <li>Klarna, Revolut e outros gateways globais</li>
      </ul>

      <p className="text-gray-300">
        Suporta criptomoedas como
        <strong> E-Coin, E-Genesis, E-USD </strong>
        e moedas fiduciárias.
      </p>

      <p className="text-gray-400 italic">
        Opera com liquidez entendida própria,
        independente de reservas de bancos centrais.
      </p>
    </div>

    {/* Diagrama de APIs */}
    <div className="space-y-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#FACC15]">
        ⚙️ Diagrama E-Bridge — Conectores Globais (APIs)
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full border border-white/10 rounded-xl overflow-hidden">
          <thead className="bg-white/10">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
                Tipo de Connector
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
                API / Sistema
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
                Região Principal
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
                Função Principal
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/10 bg-black/40">
            <tr>
              <td className="px-4 py-3">💳Pagamentos Universais</td>
              <td className="px-4 py-3">VisaNet API</td>
              <td className="px-4 py-3">Global</td>
              <td className="px-4 py-3">Processamento de cartões Visa</td>
            </tr>
            <tr>
              <td className="px-4 py-3">💳Pagamentos Universais</td>
              <td className="px-4 py-3">Mastercard Developer API</td>
              <td className="px-4 py-3">Global</td>
              <td className="px-4 py-3">Processamento de cartões Mastercard</td>
            </tr>
            <tr>
              <td className="px-4 py-3">💰Pagamentos Digitais</td>
              <td className="px-4 py-3">PayPal REST API</td>
              <td className="px-4 py-3">Global</td>
              <td className="px-4 py-3">Transferências e-commerce e pessoais</td>
            </tr>
            <tr>
              <td className="px-4 py-3">📱Pagamentos Móveis</td>
              <td className="px-4 py-3">Google Pay JS API</td>
              <td className="px-4 py-3">Global</td>
              <td className="px-4 py-3">Pagamentos Android e Web</td>
            </tr>
            <tr>
              <td className="px-4 py-3">🍎Pagamentos Móveis</td>
              <td className="px-4 py-3">Apple Pay Merchant ID</td>
              <td className="px-4 py-3">Global</td>
              <td className="px-4 py-3">Pagamentos iOS e dispositivos Apple</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</motion.section>

{/* SECTION — TABELA ÚNICA | SISTEMAS DE PAGAMENTO GLOBAIS */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌍 Fundo global */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-epay-global-payment-systems-bg.jpg')]
                 bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/20 via-transparent to-[#D4AF37]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-10">

    {/* Cabeçalho */}
    <div className="text-center space-y-3">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        🌐 Tabela Única — Sistemas de Pagamento Globais Integrados ao E-Pay
      </h2>
      <p className="text-gray-400 italic">
        EdenKingDom Corporation — Infraestrutura Financeira Global
      </p>
    </div>

    {/* Tabela */}
    <div className="overflow-x-auto">
      <table className="w-full border border-white/10 rounded-xl overflow-hidden bg-black/40">
        <thead className="bg-white/10">
          <tr>
            <th className="px-4 py-4 text-left text-sm font-semibold text-gray-300">
              🌍 Continente / Região
            </th>
            <th className="px-4 py-4 text-left text-sm font-semibold text-gray-300">
              💳 Sistemas de Pagamento Integrados
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-white/10 text-sm sm:text-base">

          <tr>
            <td className="px-4 py-4 font-semibold">🌐 Global / Universal</td>
            <td className="px-4 py-4 text-gray-300">
              VisaNet API · Mastercard Developer API · PayPal REST API ·
              Google Pay JS API · Apple Pay Merchant ID ·
              E-Genesis (Stablecoin) · E-Coin · USDT · BNB
            </td>
          </tr>

          <tr>
            <td className="px-4 py-4 font-semibold">🌍 África</td>
            <td className="px-4 py-4 text-gray-300">
              M-Pesa · MTN Mobile Money · Orange Money ·
              Chipper Cash · OPay · Mukuru ·
              Ponto24 · SIMO Rede · e-Mola · mCash
            </td>
          </tr>

          <tr>
            <td className="px-4 py-4 font-semibold">🌏 Ásia / Pacífico</td>
            <td className="px-4 py-4 text-gray-300">
              Alipay · WeChat Pay · GCash · OVO · Touch ’n Go ·
              eWallet · GrabPay · Paytm · MoMo Wallet
            </td>
          </tr>

          <tr>
            <td className="px-4 py-4 font-semibold">🇪🇺 Europa</td>
            <td className="px-4 py-4 text-gray-300">
              iDEAL · Bancontact · Swish · Wero · Revolut · Klarna
            </td>
          </tr>

          <tr>
            <td className="px-4 py-4 font-semibold">🌎 América Latina</td>
            <td className="px-4 py-4 text-gray-300">
              PIX · Mercado Pago · RecargaPay · AstroPay ·
              Nubank Pay · PagSeguro · StoneCo ·
              Ualá · PicPay · Cielo · Yape
            </td>
          </tr>

          <tr>
            <td className="px-4 py-4 font-semibold">🇺🇸 América do Norte</td>
            <td className="px-4 py-4 text-gray-300">
              Cash App · PayPal · Stripe
            </td>
          </tr>

        </tbody>
      </table>
    </div>

    {/* Nota final */}
    <p className="text-center text-gray-400 italic">
      “O E-Pay conecta continentes, moedas e pessoas — sem fronteiras bancárias.”
    </p>

  </div>
</motion.section>

<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
      {/* 🌍 Fundo cinematográfico testemunhal */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-motivacoes-pessoais-fundamentos-epay-ecoin-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

      {/* 🔹 CONTEÚDO */}
      <div className="max-w-5xl mx-auto text-left text-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-6">
          💬 20. Motivações Pessoais e Fundamentos Econômicos
        </h2>

<h2 className="text-1xl sm:text-2xl font-bold text-[#D4AF37] mb-6">
          A origem real da E-Pay e da EdenKingDom Coin (E-Coin)
        </h2>

        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          A criação da <span className="text-white font-semibold"> E-Pay </span> e da{" "}
          <span className="text-white font-semibold">E-Coin</span> não nasceu de teoria
          académica nem de especulação financeira. Ela nasceu da{" "}
          <span className="text-white font-semibold"> experiência real </span>, vivida
          durante anos dentro de um sistema financeiro que falha com o cidadão moderno,
          especialmente em economias emergentes.
        </p>

        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Durante anos de prestação de serviços digitais e projetos internacionais,
          pagamentos legítimos demoravam semanas, meses — ou simplesmente não chegavam —
          devido à falta estrutural de liquidez, barreiras cambiais e exclusão das moedas
          locais das grandes cestas monetárias globais.
        </p>

        <div className="border-l-4 border-[#D4AF37] pl-6 my-8 text-gray-300">
          <p className="italic">
            “Trabalhar online era permitido. Receber o pagamento era um privilégio
            incerto.”
          </p>
        </div>

        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          A insegurança cibernética, bloqueios arbitrários, burocracia excessiva e a
          dependência de intermediários estrangeiros tornaram evidente que o problema não
          era individual, mas <span className="text-white font-semibold"> sistémico </span>.
        </p>

        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Foi nesse contexto que surgiu a decisão inevitável: criar um sistema onde o
          valor circula livremente, de forma transparente, auditável e global. Assim
          nasceram a <span className="text-white font-semibold"> E-Pay </span> — como
          infraestrutura de pagamentos globais — e a{" "}
          <span className="text-white font-semibold"> E-Coin </span> — como unidade de valor
          corporativa com liquidez real.
        </p>

        <div className="mt-10 text-[#D4AF37] font-semibold text-lg">
          “Quando o sistema falha com o cidadão, inovar deixa de ser opção —
          torna-se obrigação.”
        </div>

        {/* Introdução */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Tudo isto surge em resposta direta às
        <strong> limitações pessoais e estruturais </strong>
        que enfrentei durante vários anos de atuação neste ramo,
        enquanto ainda estudava.
      </p>

      <p className="text-gray-300 leading-relaxed">
        A vida nunca foi fácil —
        especialmente ao tentar receber pagamentos por serviços
        prestados via internet e não conseguir levantá-los,
        devido às restrições do sistema financeiro tradicional
        do meu país.
      </p>
    </div>

    {/* Dificuldades enfrentadas */}
    <div className="bg-black/40 border border-red-500/20 rounded-xl p-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-red-400">
        ⚠️ As Dificuldades Enfrentadas
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Um simples saque via <strong> Visa </strong> podia demorar
        um mês inteiro — ou nunca cair —
        devido à falta de reservas de liquidez
        e à não participação da moeda fiduciária local
        nas grandes cestas monetárias internacionais
        como <strong> USD, EURO, RAND e REAL </strong>.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Essa exclusão faz com que,
        mesmo na vizinha <strong> África do Sul </strong>,
        bancos como o <strong> Standard Bank </strong>
        ou o <strong> Millennium BIM </strong>
        dificultem transações simples com Moçambique.
      </p>
    </div>

    {/* Insegurança cibernética */}
    <div className="bg-gradient-to-r from-[#3B82F6]/15 to-[#020617]/40
                    border border-white/10 rounded-xl p-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        🔐 Insegurança Cibernética e Confiança Pública
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Outro obstáculo crítico é a
        <strong> insegurança cibernética</strong>,
        que fragiliza tanto as operações bancárias
        quanto a confiança pública no sistema financeiro.
      </p>

      <p className="text-gray-400 italic">
        Quando o sistema falha em proteger e servir,
        torna-se inevitável criar algo novo.
      </p>
    </div>

    {/* Conclusão */}
    <div className="text-center mt-12 space-y-4">
      <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold">
        Foi nesse contexto que nasceram a E-Pay e a E-Coin
      </p>
      <p className="text-gray-400 italic">
        Não como teoria, mas como resposta prática
        a um problema real vivido todos os dias.
      </p>
    </div>

      </div>
    </motion.section>

{/* SECTION — A BATALHA DIGITAL E O ISOLAMENTO TECNOLÓGICO | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌐 Fundo cinematográfico tecnológico */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-batalha-digital-isolamento-tecnologico-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-16">

    {/* Título */}
    <div className="text-center space-y-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        🧠 A Batalha Digital e o Isolamento Tecnológico
      </h2>
      <p className="text-gray-400 italic">
        Quando a tecnologia existe, mas o acesso é negado
      </p>
    </div>

    {/* Testemunho */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Enquanto eu enfrentava todas essas barreiras,
        via pessoas de outros países com acesso rápido,
        fluído e moderno às transações digitais.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Muitos recomendavam o uso de aplicações com
        <strong> Inteligência Artificial (AI)</strong>
        para gerir negócios, pagamentos e investimentos.
      </p>
    </div>

    {/* Bloqueios tecnológicos */}
    <div className="bg-black/40 border border-red-500/20 rounded-xl p-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Mas, ao instalar esses aplicativos,
        surgiam mensagens como:
      </p>

      <ul className="list-disc list-inside text-red-400 space-y-2">
        <li>“Os serviços não estão disponíveis no seu país.”</li>
        <li>“O seu dispositivo não é compatível.”</li>
      </ul>

      <p className="text-gray-300 leading-relaxed">
        E mesmo quando o aplicativo abria,
        o país não aparecia listado
        ou as funcionalidades eram severamente limitadas.
      </p>
    </div>

    {/* Diagnóstico */}
    <div className="space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Essas restrições tecnológicas são o reflexo direto
        de um sistema financeiro ainda
        <strong> fechado, defasado e excludente</strong>.
      </p>
    </div>

    {/* Inclusão financeira */}
    <div className="bg-gradient-to-r from-[#D4AF37]/15 to-[#020617]/40
                    border border-white/10 rounded-xl p-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37]">
        🌍 Um País Que Precisa de Acesso, Não de Barreiras
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Se tanto se fala em desenvolvimento sustentável,
        ele precisa começar pela
        <strong> inclusão financeira real</strong>.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Não se pode falar em progresso quando apenas o governo
        tem acesso a transações internacionais de alto valor,
        enquanto o cidadão comum fica de fora.
      </p>
    </div>

    {/* Contrassensos */}
    <div className="border-l-4 border-[#F97316]/70 pl-6 space-y-3">
      <p className="text-gray-300">É um contrassenso:</p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>M-Pesa, e-Mola e mCash funcionam quase só em Maputo;</li>
        <li>Abertura de conta mCash pode levar um mês inteiro;</li>
        <li>Sistema bancário universitário demora dias para confirmar propinas;</li>
        <li>Toda tentativa de modernização é travada por burocracia excessiva.</li>
      </ul>
    </div>

    {/* Conclusão */}
    <div className="text-center mt-12 space-y-4">
      <p className="text-[#FACC15] text-lg sm:text-xl font-semibold">
        O problema não é a falta de tecnologia —
      </p>
      <p className="text-gray-400 italic">
        é a negação sistemática do acesso a ela.
      </p>
    </div>

  </div>
</motion.section>

{/* SECTION — A SOLUÇÃO: E-PAY COMO PONTE GLOBAL | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌍 Fundo cinematográfico global */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-epay-ponte-global-solucao-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/25 via-transparent to-[#3B82F6]/25 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-16">

    {/* Título */}
    <div className="text-center space-y-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        💡 A Solução: E-Pay como Ponte Global
      </h2>
      <p className="text-gray-400 italic">
        Conectando cidadãos ao sistema financeiro global
      </p>
    </div>

    {/* Origem da solução */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Foi diante dessa realidade de bloqueios,
        exclusão tecnológica e limitações financeiras
        que nasceu a ideia do <strong>E-Pay</strong>,
        o sistema global de pagamentos da
        <strong> EdenKingDom Corporation</strong>.
      </p>

      <p className="text-gray-300 leading-relaxed">
        O E-Pay foi projetado para ligar o cidadão moçambicano —
        e qualquer cidadão do mundo —
        ao ecossistema digital e financeiro global.
      </p>
    </div>

    {/* Funcionamento */}
    <div className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Com o E-Pay, pagamentos, transferências e saques
        são realizados de forma
        <strong> instantânea, segura e transparente</strong>,
        sem depender de bancos centrais
        ou redes financeiras fechadas.
      </p>

      <p className="text-gray-300">
        A blockchain substitui a burocracia,
        e a tecnologia devolve autonomia ao cidadão.
      </p>
    </div>

    {/* Integração global */}
    <div className="space-y-4">
      <p className="text-gray-300 leading-relaxed">
        O E-Pay integra-se a
        <strong> universidades, empresas, governos
        e instituições internacionais</strong>,
        democratizando o acesso financeiro
        e conectando continentes em tempo real.
      </p>

      <p className="text-gray-300">
        África, Ásia, Europa e Américas
        passam a operar num mesmo fluxo digital,
        sem barreiras artificiais.
      </p>
    </div>

    {/* Valor das criptomoedas */}
    <div className="bg-gradient-to-r from-[#3B82F6]/15 to-[#020617]/40
                    border border-white/10 rounded-xl p-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        🪙 A Verdade sobre o Valor das Criptomoedas
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Assim como o Bitcoin surgiu em 2008–2009
        em resposta à crise financeira global,
        a <strong>E-Coin</strong> nasce como resposta
        à crise de liquidez e exclusão digital.
      </p>

      <p className="text-gray-300">
        Nem o Bitcoin nem a E-Coin são
        “dinheiro imaginário”.
        Ambos representam
        <strong> liquidez real</strong>,
        baseada em confiança digital
        e capital humano.
      </p>
    </div>

    {/* Reflexão soberania */}
    <div className="border-l-4 border-[#F97316]/70 pl-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Se o Banco de Moçambique criasse hoje
        uma criptomoeda,
        muitos entenderiam mal —
        achariam tratar-se de “dinheiro inventado”.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Mas, na verdade,
        trata-se de um instrumento moderno
        de <strong>soberania financeira</strong>,
        capaz de permitir que um país
        opere, troque e prospere
        além das fronteiras.
      </p>
    </div>

    {/* Assinatura */}
    <div className="text-center mt-12 space-y-3">
      <p className="text-gray-400 italic">
        “Reflitam nisto.”
      </p>
      <p className="text-[#FACC15] font-semibold">
        — Dr. Athelstan Pateron Atanas  
        <span className="block text-gray-400 font-normal">
          CEO Global & Fundador Sénior — EdenKingDom Corporation
        </span>
      </p>
    </div>

  </div>
</motion.section>

{/* SECTION — SESSÃO CRIPTO INTEGRADA & CONCLUSÃO E-PAY | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌐 Fundo cinematográfico de integração global */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-epay-sessao-cripto-integrada-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/25 via-transparent to-[#3B82F6]/25 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-16">

    {/* Título */}
    <div className="text-center space-y-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        🪙 Sessão Cripto Integrada
      </h2>
      <p className="text-gray-400 italic">
        Estabilidade, interoperabilidade e liquidez global
      </p>
    </div>

    {/* Integração de ativos */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Para garantir a <strong>estabilidade do ecossistema</strong>,
        o sistema <strong>E-Pay</strong> integra múltiplas camadas
        de ativos digitais e financeiros:
      </p>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          <strong>E-Coin</strong> → Criptomoeda oficial da EdenKingDom,
          com função de utilidade, governança e crescimento.
        </li>
        <li>
          <strong>E-Genesis (3-in-1)</strong> → Stablecoin institucional
          responsável por estabilizar o ecossistema.
        </li>
        <li>
          <strong>USDT e BNB compatíveis</strong> →
          Liquidez externa e interoperabilidade global.
        </li>
      </ul>
    </div>

    {/* Resumo */}
    <div className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        🧠 Resumo Estratégico
      </h3>

      <p className="text-gray-300 leading-relaxed">
        O <strong>E-Pay (EdenKingDom)</strong> é o primeiro sistema
        global híbrido que une
        <strong> infraestrutura bancária tradicional,
        blockchain, fintechs regionais e APIs globais</strong>,
        operando sob a rede <strong>E-Bridge</strong>.
      </p>

      <p className="text-gray-300">
        Pagamentos, remessas, compras e investimentos
        fluem sem fronteiras,
        conectando África, Ásia, Europa e Américas
        numa única malha financeira descentralizada.
      </p>

      <p className="text-gray-400 italic">
        “O E-Pay não é um novo PayPal —
        é o sistema circulatório da nova economia mundial.”
      </p>
    </div>

    {/* Conclusão */}
    <div className="bg-gradient-to-r from-[#3B82F6]/15 to-[#020617]/40
                    border border-white/10 rounded-xl p-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#FACC15]">
        🌐 Conclusão
      </h3>

      <p className="text-gray-300 leading-relaxed">
        O que a EdenKingDom faz não é fantasia
        nem especulação —
        é uma <strong>resposta concreta
        a necessidades reais</strong>.
      </p>

      <p className="text-gray-300">
        Criamos o <strong>E-Pay</strong> e a <strong>E-Coin</strong>
        para que nenhum jovem, empreendedor ou estudante —
        em Moçambique ou em qualquer país —
        precise esperar meses por um saque
        ou veja o seu esforço bloqueado
        por sistemas que não o reconhecem.
      </p>
    </div>

    {/* Ponte universal */}
    <div className="border-l-4 border-[#F97316]/70 pl-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        O E-Pay não é apenas um sistema de pagamentos —
        é uma <strong>ponte económica universal</strong>
        que une:
      </p>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Bancos tradicionais</li>
        <li>Criptomoedas</li>
        <li>Fintechs regionais</li>
        <li>Governos e cidadãos</li>
      </ul>
    </div>

    {/* Assinatura */}
    <div className="text-center mt-12 space-y-3">
      <p className="text-gray-400 italic">
        “A E-Coin nasce do sacrifício e da experiência.  
        O E-Pay nasce da vontade de libertar o mundo
        das suas próprias fronteiras financeiras.”
      </p>

      <p className="text-[#FACC15] font-semibold">
        — Dr. Athelstan Pateron Atanas  
        <span className="block text-gray-400 font-normal">
          CEO Global & Fundador Sénior — EdenKingDom Corporation
        </span>
      </p>
    </div>

  </div>
</motion.section>

      {/* ================= CONCLUSÃO ================= */}
      <motion.section variants={fadeUp} className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#3B82F6]/15 to-[#020617]/40 border border-white/10 rounded-xl p-8 space-y-6 text-center">
          <p className="text-gray-300">
            O <strong>E-Pay</strong> não é fantasia,
            nem especulação —
            é uma resposta concreta
            a necessidades reais.
          </p>

          <p className="text-gray-400 italic">
            “O E-Pay é a ponte.
            A E-Coin é o valor.
            Juntos, libertam economias.”
          </p>

          <p className="text-[#FACC15] font-semibold">
            — Dr. Athelstan Pateron Atanas  
            <span className="block text-gray-400 font-normal">
              CEO Global & Fundador Sénior — EdenKingDom Corporation
            </span>
          </p>
        </div>
      </motion.section>

    </main>
  );
}
