"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function CriptoBancosReflexaoPage() {
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
          <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/25 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center text-gray-200 space-y-6">
          <p className="text-sm text-gray-400">
            EdenKingDom Learn · Educação Financeira Digital
          </p>

          <h1 className="text-3xl sm:text-5xl font-extrabold">
            💭 Cripto, Bancos e Liberdade Financeira
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto">
            Bitcoin, E-Coin e o verdadeiro papel dos bancos
            na nova economia digital.
          </p>
        </div>
      </motion.section>

      {/* SECTION — QUESTÕES DE REFLEXÃO SOBRE DINHEIRO DIGITAL | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌌 Fundo cinematográfico reflexivo */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-questoes-reflexao-dinheiro-digital-bg.jpg')]
                 bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/15 via-transparent to-[#3B82F6]/15 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-gray-200 space-y-12">
    {/* Título */}
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6]">
        💭 Questões de Reflexão sobre Dinheiro Digital, Bitcoin e E-Coin
      </h2>
      <p className="text-gray-400 mt-3">
        Educação financeira, responsabilidade e valor real
      </p>
    </div>

    {/* Questão 1 */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E]">
        1️⃣ De onde vem o dinheiro em cripto?
      </h3>
      <p className="text-gray-300 leading-relaxed">
        O dinheiro em criptomoedas <strong>não surge do nada</strong>.
        Ele é resultado direto de um processo legítimo de
        <strong> criação de valor</strong>, que pode ocorrer de várias formas:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>💱 Compra direta em exchanges com moeda fiduciária (USD, MZN, etc.)</li>
        <li>⛏️ Mineração (Bitcoin): validação de blocos com gasto de energia</li>
        <li>🪙 Staking (E-Coin, Ethereum, etc.): bloqueio de fundos para manter a rede</li>
        <li>🛒 Pagamento por serviços ou vendas realizadas em cripto</li>
        <li>🎁 Recompensas institucionais (airdrops, programas oficiais)</li>
      </ul>
      <p className="text-gray-400 italic">
        💡 Nenhum criptoativo nasce sem investimento, energia ou troca de valor real.
      </p>
    </div>

    {/* Questão 2 */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        2️⃣ Criptomoedas podem ser “achadas no chão”?
      </h3>
      <p className="text-gray-300 leading-relaxed">
        A resposta é <strong>não</strong>.
        Criptomoedas não existem fisicamente e cada unidade é
        <strong>registrada e rastreável na blockchain</strong>.
      </p>
      <p className="text-gray-300 leading-relaxed">
        Ninguém “deixa cair” Bitcoin ou E-Coin —
        mas pode <strong>perder o acesso à carteira</strong>
        ao esquecer a chave privada ou frase de recuperação.
      </p>
      <p className="text-gray-400 italic">
        “Em cripto, a responsabilidade e a segurança são pessoais e invioláveis.”
      </p>
    </div>

    {/* Questão 3 */}
    <div className="border-l-4 border-[#F59E0B]/70 pl-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#F59E0B]">
        3️⃣ As formas de adquirir Bitcoin ou E-Coin são legais?
      </h3>
      <p className="text-gray-300 leading-relaxed">
        <strong>Sim</strong>, desde que realizadas dentro de
        <strong> canais legítimos e transparentes</strong>, como:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>🏦 Plataformas reguladas (Binance, Coinbase, Kraken, OKX, Bitget)</li>
        <li>📜 Smart contracts auditados (caso da E-Coin)</li>
        <li>🤝 Trocas P2P registradas e rastreáveis</li>
        <li>📈 Programas de staking e mineração validados</li>
      </ul>
      <p className="text-gray-400 italic">
        Essas práticas são reconhecidas internacionalmente,
        desde que não envolvam lavagem de dinheiro, evasão fiscal ou golpes.
      </p>
    </div>

    {/* Conclusão */}
    <div className="text-center text-gray-400 italic">
      Educação financeira é a base da liberdade digital.
      Entender de onde vem o valor é o primeiro passo para usá-lo com consciência.
    </div>
  </div>
</motion.section>

{/* SECTION — PERCEPÇÃO PÚBLICA SOBRE CRIPTOMOEDAS | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌌 Fundo cinematográfico */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-percepcao-publica-cripto-reflexao-bg.jpg')]
                 bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/15 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-12">
    {/* Título */}
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        🧠 O que as pessoas geralmente pensam sobre essas questões?
      </h2>
      <p className="text-gray-400 mt-3">
        As percepções variam muito conforme o nível de informação
      </p>
    </div>

    {/* Tabela de percepções */}
    <div className="overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full text-sm sm:text-base">
        <thead className="bg-white/5 text-[#FACC15]">
          <tr>
            <th className="px-4 py-3 text-left">Tipo de pessoa</th>
            <th className="px-4 py-3 text-left">Pensamento comum</th>
            <th className="px-4 py-3 text-left">Explicação real</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          <tr>
            <td className="px-4 py-3 font-semibold">Céticos</td>
            <td className="px-4 py-3">“Cripto é dinheiro do nada.”</td>
            <td className="px-4 py-3 text-gray-300">
              Ignoram que há liquidez, energia, capital e valor real por trás do processo.
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-semibold">Curiosos</td>
            <td className="px-4 py-3">“Quero entender, mas é complexo.”</td>
            <td className="px-4 py-3 text-gray-300">
              Falta educação financeira digital e comunicação clara.
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-semibold">Investidores</td>
            <td className="px-4 py-3">“É o futuro inevitável.”</td>
            <td className="px-4 py-3 text-gray-300">
              Entendem a tecnologia, o valor descentralizado e o potencial econômico.
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-semibold">Desinformados</td>
            <td className="px-4 py-3">“É fraude ou lavagem.”</td>
            <td className="px-4 py-3 text-gray-300">
              Julgam sem conhecer a natureza técnica e a rastreabilidade da blockchain.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Nota de verdade */}
    <p className="text-center text-[#22C55E] font-semibold">
      ✔️ A verdade é que a blockchain é a tecnologia mais auditável e rastreável do planeta.
    </p>

    {/* Perguntas frequentes */}
    <div className="space-y-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        ❓ As perguntas que o público mais faz sobre Bitcoin e E-Coin
      </h3>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>“Como posso começar?”</li>
        <li>“É seguro?”</li>
        <li>“Posso perder meu dinheiro?”</li>
        <li>“É legal no meu país?”</li>
        <li>“Qual a diferença entre Bitcoin e E-Coin?”</li>
        <li>“Posso transformar E-Coin em dinheiro real?”</li>
      </ul>

      <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
        <p className="font-semibold text-[#FACC15]">📌 Respostas resumidas:</p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Sim, comprando de forma legítima e guardando na sua própria carteira.</li>
          <li>Sim, desde que proteja suas chaves privadas.</li>
          <li>Sim, se for descuidado ou cair em esquemas falsos.</li>
          <li>Sim, é legal na maioria dos países com regulamentação parcial.</li>
          <li>Bitcoin é descentralizado e deflacionário; E-Coin não apenas é corporativa, sustentável e com liquidez institucional mas tambem é descentralizado e deflacionário.</li>
        </ul>
      </div>
    </div>
  </div>
</motion.section>

{/* SECTION — O QUE GOVERNOS E INSTITUIÇÕES PENSAM | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌆 Fundo institucional */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-governos-instituicoes-cripto-visao-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/15 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-12">
    {/* Título */}
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        🏛️ O que os governos e instituições pensam?
      </h2>
      <p className="text-gray-400 mt-3">
        As instituições veem a criptoeconomia sob três prismas principais
      </p>
    </div>

    {/* Tabela institucional */}
    <div className="overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full text-sm sm:text-base">
        <thead className="bg-white/5 text-[#FACC15]">
          <tr>
            <th className="px-4 py-3 text-left">Perspectiva</th>
            <th className="px-4 py-3 text-left">Posição</th>
            <th className="px-4 py-3 text-left">Exemplo</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          <tr>
            <td className="px-4 py-3 font-semibold">Banco Central</td>
            <td className="px-4 py-3">
              Cautela. Vê risco de perda de controlo monetário.
            </td>
            <td className="px-4 py-3 text-gray-300">
              Banco de Moçambique ainda não regula transações externas em cripto.
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-semibold">Governos</td>
            <td className="px-4 py-3">
              Interesse crescente em tributação e rastreio.
            </td>
            <td className="px-4 py-3 text-gray-300">
              EUA, UE e Brasil já regulam parcialmente.
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-semibold">Empresas Privadas</td>
            <td className="px-4 py-3">
              Adoção acelerada.
            </td>
            <td className="px-4 py-3 text-gray-300">
              Tesla, PayPal, VISA e bancos digitais já operam com cripto.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Resultado */}
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
      <p className="text-[#22C55E] font-semibold">
        ✔️ As criptomoedas não são inimigas dos governos, mas novas ferramentas
        de política monetária descentralizada.
      </p>
      <p className="text-gray-300 mt-2">
        Quando bem reguladas, geram inclusão, inovação e receita fiscal.
      </p>
    </div>

    {/* Percepção estratégica */}
    <div className="space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        🔍 Percepções sobre Bitcoin, E-Coin, E-USD e E-Genesis
      </h3>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li><strong>Bitcoin</strong> é a semente da liberdade financeira.</li>
        <li>
          <strong>E-Coin</strong> é a evolução — uma moeda corporativa com liquidez
          real, integração institucional e utilidade prática.
        </li>
        <li><strong>E-USD</strong> é ponte entre estabilidade e adoção — um ativo digital indexado ao dólar para transações seguras, previsíveis e escaláveis.</li>
        <li>
          <strong>E-Genesis</strong> é o futuro estatal — o elo entre cripto e economia
          global, servindo como estabilização institucional da EdenKingDom.
        </li>
      </ul>
    </div>

    {/* Conclusão */}
    <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#3B82F6]/10 border border-white/10 rounded-xl p-6">
      <h3 className="text-xl font-bold text-[#FACC15] mb-3">
        🏁 Conclusão Geral
      </h3>
      <p className="text-gray-300 leading-relaxed">
        O dinheiro não é papel nem número — é energia de confiança.
        <br />
        As criptomoedas transferem essa energia para um ambiente mais livre,
        justo e transparente.
        <br />
        <strong className="text-white">
          Bitcoin abriu o caminho.  
          E-Coin, E-USD e E-Genesis pavimentam a estrada da próxima civilização financeira.
        </strong>
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION — CRIPTOMOEDAS: AMEAÇA OU SOLUÇÃO | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌍 Fundo estratégico */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-cripto-solucao-transformacao-economica-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-12">

    {/* Título */}
    <div className="text-center space-y-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        ⚖️ As Criptomoedas São uma Ameaça ou uma Solução?
      </h2>
      <p className="text-gray-400 max-w-3xl mx-auto">
        Não são uma ameaça — são um sintoma de uma transformação econômica inevitável.
      </p>
    </div>

    {/* Bloco 1 */}
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
      <p className="leading-relaxed">
        As criptomoedas surgem quando o sistema financeiro convencional deixa de
        atender as necessidades reais do cidadão e não acompanha a velocidade
        da globalização.
      </p>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Limites cambiais severos (ex: teto de USD em países emergentes)</li>
        <li>Comércio eletrônico internacional inacessível</li>
        <li>Moedas nacionais sem liquidez externa</li>
      </ul>

      <p className="text-[#22C55E] font-semibold">
        👉 Nesse contexto, as criptomoedas tornam-se a única ponte entre o cidadão
        e a economia mundial.
      </p>
    </div>

    {/* Bloco 2 */}
    <div className="space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        💡 O Verdadeiro Problema: Falta de Liquidez e Produção Nacional
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Um país que não produz bens com valor de exportação — como automóveis,
        tecnologia, energia ou produtos industriais — não consegue gerar entrada
        consistente de divisas estrangeiras.
      </p>

      <div className="bg-black/40 border border-white/10 rounded-xl p-5 space-y-2">
        <p>❌ Sem exportação → sem entrada de moeda estrangeira</p>
        <p>❌ Sem moeda estrangeira → sem liquidez internacional</p>
        <p>❌ Sem liquidez → bancos limitados a operações internas</p>
      </div>

      <p className="text-gray-300">
        Isso impede o cidadão de comprar cursos internacionais, importar
        mercadorias, pagar fornecedores externos ou participar da economia digital.
      </p>

      <p className="text-[#FACC15] font-semibold">
        As criptomoedas — especialmente tokens corporativos como a E-Coin —
        preenchem esse vazio ao circular globalmente, fora do câmbio tradicional.
      </p>
    </div>

    {/* Bloco 3 */}
    <div className="space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E]">
        🌐 O Papel da E-Coin e da EdenKingDom na Nova Era Comercial
      </h3>

      <p className="text-gray-300 leading-relaxed">
        A EdenKingDom Corporation integra produção real com liquidez digital.
        Enquanto o sistema bancário tradicional trava, a EdenKingDom:
      </p>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Cria ativos produtivos locais (indústria, energia, infraestrutura)</li>
        <li>Gera valor interno real</li>
        <li>Converte esse valor em liquidez digital via E-Coin, E-USD e E-Genesis</li>
        <li>Devolve autonomia monetária e poder de compra global</li>
      </ul>

      <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#3B82F6]/10 border border-white/10 rounded-xl p-6">
        <p className="font-semibold text-white">
          ⚙️ Em termos simples:
        </p>
        <p className="text-gray-300 mt-2">
          O país deixa de ser um consumidor dependente e torna-se um
          produtor industrial e digital conectado ao mundo.
        </p>
      </div>
    </div>

  </div>
</motion.section>

{/* SECTION — CRIPTOMOEDAS REFORMAM OS BANCOS | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🏦 Fundo institucional */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-cripto-reforma-bancaria-futuro-liquidez-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-12">

    {/* Título */}
    <div className="text-center space-y-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        🪙 As Criptomoedas Não Enfraquecem os Bancos — Reformam-nos
      </h2>
      <p className="text-gray-400 max-w-3xl mx-auto">
        O verdadeiro desafio não é a cripto — é a estagnação institucional.
      </p>
    </div>

    {/* Bloco 4 */}
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
      <p className="leading-relaxed">
        A ideia de que as criptomoedas são uma ameaça aos bancos é equivocada.
        Elas não destroem o sistema financeiro — elas exigem que ele evolua.
      </p>

      <p className="text-gray-300">
        Um banco central moderno deveria:
      </p>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Integrar blockchain e stablecoins reguladas</li>
        <li>Permitir o uso de cripto para importações e exportações</li>
        <li>Atuar como fiscalizador e educador — não como bloqueador</li>
      </ul>

      <p className="text-[#22C55E] font-semibold">
        A E-Genesis é um modelo híbrido: stablecoin com paridade garantida e
        lastro corporativo e produtivo, coexistindo com moedas fiduciárias.
      </p>
    </div>

    {/* Bloco 5 */}
    <div className="space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        🧠 O Caso de Moçambique: Uma Economia à Espera de Modernização
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Limitar o gasto externo a USD 500 é como tentar conter o oceano com um balde.
        Isso não protege a economia — sufoca-a.
      </p>

      <div className="bg-black/40 border border-white/10 rounded-xl p-5 space-y-2">
        <p>❌ Jovens e empreendedores ficam presos financeiramente</p>
        <p>❌ Comércio digital internacional torna-se inviável</p>
        <p>❌ O país perde competitividade global</p>
      </div>

      <p className="text-gray-300">
        Para avançar, o país precisa de:
      </p>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Industrialização local (EdenKingDom Motors, Build+, Fibers)</li>
        <li>Digitalização monetária (E-Coin, E-Pay, E-Genesis)</li>
        <li>Reforma bancária tecnológica</li>
        <li>Inclusão da blockchain nas políticas nacionais</li>
      </ul>
    </div>

    {/* Bloco 6 */}
    <div className="space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E]">
        🔮 Conclusão: O Futuro da Liquidez Global
      </h3>

      <p className="text-gray-300 leading-relaxed">
        O Bitcoin abriu o caminho.
        Moedas corporativas funcionais como a E-Coin representam o próximo passo:
        a ponte entre economias locais e o sistema financeiro global.
      </p>

      <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#3B82F6]/10 border border-white/10 rounded-xl p-6">
        <p className="font-semibold text-white">
          ⚠️ A verdadeira ameaça não são as criptomoedas,
        </p>
        <p className="text-gray-300 mt-2">
          mas a resistência à inovação.
          Quem não se adapta à economia digital torna-se economicamente invisível.
        </p>
      </div>
    </div>

  </div>
</motion.section>

{/* SECTION — UTILIDADE DOS BANCOS NA ERA DIGITAL | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🏦 Fundo reflexivo */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-utilidade-bancos-era-digital-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-12">

    {/* Título */}
    <div className="text-center space-y-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        🏦 A Grande Questão: Qual é a Utilidade dos Bancos na Era Digital?
      </h2>
      <p className="text-gray-400 max-w-4xl mx-auto">
        Quando a tecnologia avança, mas o sistema financeiro permanece preso ao século passado,
        a pergunta deixa de ser teórica — torna-se urgente.
      </p>
    </div>

    {/* Questionamento central */}
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
      <p className="leading-relaxed">
        É legítimo perguntar: qual é a verdadeira utilidade dos bancos,
        se em pleno século XXI ainda exigem presença física para autorizar
        transferências simples e bloqueiam a liberdade financeira dos cidadãos?
      </p>

      <p className="text-gray-300">
        Em Moçambique, por exemplo, para transferir valores relativamente modestos,
        o cidadão é obrigado a enfrentar balcões, formulários, assinaturas
        e justificações extensas — um processo burocrático, invasivo e, muitas vezes, humilhante.
      </p>
    </div>

    {/* Burocracia e desconfiança */}
    <div className="space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#EF4444]">
        💰 Burocracia e Desconfiança Sistémica
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Em vez de confiança, valores elevados em conta despertam suspeita.
        Bloqueios, investigações desnecessárias, retenções indevidas
        e processos opacos tornam-se comuns.
      </p>

      <div className="bg-black/40 border border-white/10 rounded-xl p-5 space-y-2">
        <p>❌ Subornos e bloqueios arbitrários</p>
        <p>❌ Retenção indevida de fundos</p>
        <p>❌ Inversão do princípio de presunção de inocência</p>
      </div>

      <p className="text-gray-300">
        Parece que, em certos contextos, prosperar é crime.
        A estrutura não admite riqueza limpa fora do círculo político dominante.
      </p>
    </div>

    {/* Exemplo real */}
    <div className="space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        📺 Exemplo Real e Reflexão Social
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Casos públicos ilustram essa fragilidade institucional:
        cidadãos e figuras públicas enfrentam entraves para utilizar
        recursos legítimos destinados a projetos e pagamentos reais.
      </p>

      <p className="text-gray-300">
        Isso revela insegurança jurídica e operacional —
        algo incompatível com uma economia que pretende ser moderna e competitiva.
      </p>
    </div>

    {/* Conclusão */}
    <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#3B82F6]/10 border border-white/10 rounded-xl p-6 space-y-3">
      <p className="font-semibold text-white">
        ⚠️ O ponto mais grave:
      </p>
      <p className="text-gray-300">
        O sistema bancário, que deveria proteger,
        passou a punir.
      </p>
      <p className="text-gray-300 italic">
        Liberdade financeira não é ameaça — é direito.
      </p>
    </div>

  </div>
</motion.section>

{/* SECTION — O NOVO CENÁRIO GLOBAL | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌍 Fundo cinematográfico global */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-novo-cenario-global-bancos-vs-economia-digital-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-12">

    {/* Título */}
    <div className="text-center space-y-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        🌍 O Novo Cenário Global
      </h2>
      <p className="text-gray-400 max-w-4xl mx-auto">
        Enquanto alguns sistemas permanecem presos ao passado,
        o mundo financeiro já entrou definitivamente na era digital.
      </p>
    </div>

    {/* Avanço global */}
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
      <p className="leading-relaxed">
        Em países como Japão, China, Malásia, Estados Unidos
        e nações da União Europeia, criptomoedas e pagamentos digitais
        são meios legais, funcionais e integrados há anos.
      </p>

      <p className="text-gray-300">
        Qualquer cidadão pode comprar, vender, investir e pagar
        por produtos ou serviços sem depender de autorizações físicas,
        limites cambiais absurdos ou burocracias humilhantes.
      </p>

      <p className="text-gray-300">
        Encomendas internacionais são feitas em minutos,
        e os produtos chegam à porta do cliente —
        algo ainda impensável em economias onde o digital engatinha.
      </p>
    </div>

    {/* Falta de produção */}
    <div className="space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#EF4444]">
        🏭 Falta de Produção e Retrocesso Sistémico
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Muitos países africanos, incluindo Moçambique,
        não possuem uma base industrial diversificada.
        O PIB depende quase exclusivamente de recursos naturais brutos,
        sem transformação local nem valor agregado.
      </p>

      <div className="bg-black/40 border border-white/10 rounded-xl p-5 space-y-2">
        <p>❌ Compramos quase tudo do exterior</p>
        <p>❌ Dependemos de moedas estrangeiras</p>
        <p>❌ Perdemos liquidez interna</p>
        <p>❌ Bancos bloqueiam em vez de facilitar</p>
      </div>

      <p className="text-gray-300">
        O resultado é um sistema financeiro parado no tempo,
        com práticas quase feudais em plena era da
        inteligência artificial e blockchain.
      </p>
    </div>

    {/* Conclusão */}
    <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#3B82F6]/10 border border-white/10 rounded-xl p-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E]">
        💡 Conclusão
      </h3>

      <p className="text-gray-300 leading-relaxed">
        O problema não é a existência dos bancos —
        é o modelo ultrapassado com que operam.
      </p>

      <p className="text-gray-300">
        A pergunta já não é se precisamos dos bancos,
        mas se os bancos ainda servem às pessoas
        ou apenas a si mesmos.
      </p>

      <p className="font-semibold text-white">
        Na nova era digital, quem não se adapta será substituído.
      </p>

      <p className="text-gray-400 italic">
        Bloquear o avanço financeiro de um povo
        é bloquear o desenvolvimento de uma nação.
      </p>
    </div>

  </div>
</motion.section>

    </main>
  );
}
