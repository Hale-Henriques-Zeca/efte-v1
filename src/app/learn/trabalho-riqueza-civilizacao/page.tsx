"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function TrabalhoRiquezaCivilizacaoPage() {
  return (
    <main className="w-full">

     {/* SECTION — REFLEXÃO FINAL: TRABALHO, RIQUEZA E CIVILIZAÇÃO | EKD */}
     <motion.section
       variants={fadeUp}
       className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
     >
       {/* 🌍 Fundo cinematográfico reflexivo */}
       <div className="absolute inset-0 -z-10">
         <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
         <div
           className="absolute inset-0 bg-[url('/images/ekd-reflexao-final-trabalho-riqueza-civilizacao-bg.jpg')]
                      bg-cover bg-center opacity-35"
           aria-hidden="true"
         />
         <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/20 blur-3xl" />
       </div>
     
       {/* Conteúdo */}
       <div className="max-w-6xl mx-auto text-gray-200 space-y-14">
     
         {/* Título */}
         <div className="text-center space-y-4">
           <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
             💬 Reflexão Final — Trabalho, Riqueza e Civilização na Era da E-Coin
           </h2>
           <p className="text-gray-400 max-w-4xl mx-auto">
             A economia digital não elimina o trabalho — redefine o valor do ser humano.
           </p>
         </div>
     
         {/* Questão central */}
         <div className="border-l-4 border-[#EF4444]/70 pl-6 space-y-4">
           <h3 className="text-xl sm:text-2xl font-bold text-[#EF4444]">
             ⚖️ A Questão Central
           </h3>
     
           <p className="text-gray-300 leading-relaxed">
             Surge uma pergunta inevitável:
             <strong> “Se as pessoas tiverem dinheiro e suas necessidades básicas resolvidas,
             quem irá trabalhar?”</strong>
           </p>
     
           <p className="text-gray-300">
             A resposta é clara:
             <strong> a E-Coin não cria preguiça, cria consciência</strong>.
             A abundância não elimina o trabalho — transforma o tipo de trabalho.
           </p>
     
           <p className="text-gray-300">
             O que muda não é o esforço humano,
             mas o seu <strong>nível de qualificação, dignidade e valorização</strong>.
           </p>
         </div>
     
         {/* Problema atual */}
         <div className="space-y-4">
           <h3 className="text-xl sm:text-2xl font-bold text-[#F97316]">
             👷‍♂️ O Problema Atual: A Mão de Obra Barata
           </h3>
     
           <p className="text-gray-300 leading-relaxed">
             O sofrimento atual não vem da tecnologia,
             mas da ausência de empregos dignos.
             A pobreza força milhões a aceitar qualquer trabalho,
             mesmo sendo altamente qualificados.
           </p>
     
           <p className="text-gray-300">
             Em Moçambique — e em muitos países —
             um licenciado trabalha como técnico N4,
             símbolo de uma <strong>exploração estrutural da mão de obra</strong>.
           </p>
     
           <p className="text-gray-300">
             A corrupção sistémica agrava o problema,
             chegando ao absurdo de <strong>se pagar para conseguir emprego</strong>.
             Este é o verdadeiro inimigo do trabalho digno —
             não a revolução digital.
           </p>
         </div>
     
         {/* Solução */}
         <div className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-4">
           <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E]">
             🪙 A Solução: Estabilização e Justiça Económica
           </h3>
     
           <p className="text-gray-300 leading-relaxed">
             A <strong>E-Coin</strong> surge para estabilizar a economia popular
             e alinhar salários com o custo real da vida global.
           </p>
     
           <p className="text-gray-300">
             Hoje, quase tudo é precificado em moeda estrangeira,
             enquanto os salários permanecem baixos.
             Isso é <strong>escravidão moderna</strong> — e precisa acabar.
           </p>
     
           <ul className="list-disc list-inside text-gray-300 space-y-2">
             <li>Trabalho digno e qualificado</li>
             <li>Salários justos e compatíveis com a realidade global</li>
             <li>Mecanização de tarefas pesadas e perigosas</li>
           </ul>
         </div>
     
         {/* Civilização da eficiência */}
         <div className="space-y-4">
           <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
             🤖 A Civilização da Eficiência
           </h3>
     
           <p className="text-gray-300 leading-relaxed">
             No futuro próximo, a tecnologia assumirá as tarefas mais duras,
             enquanto o ser humano evolui para funções técnicas,
             intelectuais e criativas.
           </p>
     
           <div className="bg-black/40 border border-white/10 rounded-xl p-5 space-y-2">
             <p>🚰 Infraestruturas com máquinas inteligentes</p>
             <p>⚡ Energia gerida por robótica de precisão</p>
             <p>🌾 Agricultura automatizada e sustentável</p>
             <p>🧹 Limpeza urbana com veículos inteligentes</p>
           </div>
     
           <p className="text-gray-300">
             O resultado será a redução do desemprego estrutural
             e o nascimento de uma sociedade altamente qualificada.
           </p>
         </div>
     
         {/* Fecho */}
         <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#3B82F6]/10
                         border border-white/10 rounded-xl p-6 space-y-4 text-center">
           <p className="font-semibold text-white text-lg">
             A E-Coin não ameaça o trabalho.
             Ela resgata a dignidade do ser humano.
           </p>
     
           <p className="text-gray-400 italic">
             Se não evoluirmos, criaremos uma geração de talentos frustrados.
             Se evoluirmos, construiremos uma nova civilização.
           </p>
         </div>
     
       </div>
     </motion.section>
     
     {/* SECTION — ALERTA CIVILIZACIONAL & CONCLUSÃO FINAL | EKD */}
     <motion.section
       variants={fadeUp}
       className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
     >
       {/* 🌆 Fundo cinematográfico final */}
       <div className="absolute inset-0 -z-10">
         <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
         <div
           className="absolute inset-0 bg-[url('/images/ekd-alerta-civilizacional-conclusao-final-bg.jpg')]
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
             🏙 O Alerta Civilizacional
           </h2>
           <p className="text-gray-400 italic">
             “A civilização começa hoje, comigo e contigo.”
           </p>
         </div>
     
         {/* Alerta */}
         <div className="border-l-4 border-[#EF4444]/70 pl-6 space-y-4">
           <p className="text-gray-300 leading-relaxed">
             Se não facilitarmos o progresso agora,
             seremos nós mesmos as vítimas da estagnação.
           </p>
     
           <p className="text-gray-300">
             Enquanto em países como o Japão a honestidade social é regra,
             em outras nações o caos moral nasce da desigualdade,
             da exclusão e da falta de dignidade económica.
           </p>
     
           <p className="text-gray-300 font-semibold">
             A EdenKingDom Corporation não quer apenas criar riqueza —
             quer criar <strong>civilização</strong>.
           </p>
     
           <p className="text-gray-400 italic">
             “Estamos a dar o nosso passo largo — falta o teu.”
           </p>
         </div>
     
         {/* Verdade sobre a E-Coin */}
         <div className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-4">
           <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E]">
             💎 A Verdade sobre a E-Coin
           </h3>
     
           <p className="text-gray-300">
             Nunca afirmamos que a <strong>E-Coin</strong> é gratuita.
             Ela não é airdrop, nem promessa vazia.
           </p>
     
           <p className="text-gray-300">
             Para possuir E-Coin, é necessário primeiro possuir
             <strong> valor real</strong>.
             Cada E-Coin representa capital legítimo
             dentro do ecossistema EdenKingDom.
           </p>
     
           <ul className="list-disc list-inside text-gray-300 space-y-2">
             <li>O investimento inicial cria liquidez</li>
             <li>O staking garante crescimento e recompensas</li>
             <li>As comissões são pagas exclusivamente em E-Coin</li>
             <li>Comunidades e líderes impulsionam a expansão global</li>
           </ul>
     
           <p className="text-gray-300">
             Essa estrutura gera <strong>estabilidade,
             valorização contínua e crescimento sustentável</strong>.
           </p>
         </div>
     
         {/* Chamado à humanidade */}
         <div className="space-y-4">
           <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
             🌍 Chamado à Humanidade
           </h3>
     
           <p className="text-gray-300 leading-relaxed">
             A EdenKingDom Corporation não nasceu para substituir governos —
             nasceu para <strong>reerguer civilizações</strong>.
           </p>
     
           <p className="text-gray-300">
             Com o avanço da E-Coin, cada país participante verá
             aumento real de produtividade, emprego e desenvolvimento social.
           </p>
     
           <blockquote className="border-l-4 border-[#D4AF37]/70 pl-4 italic text-gray-400">
             “Se o mundo quer progresso, nós já estamos nele.<br />
             Se o mundo quer justiça, nós somos o modelo.<br />
             Se o mundo quer civilização, nós somos o início.”
             <br />
             <span className="text-sm">
               — Dr. Athelstan Pateron Atanas,
               CEO Global & Fundador Sénior
             </span>
           </blockquote>
         </div>
     
         {/* Conclusão final */}
         <div className="bg-gradient-to-r from-[#D4AF37]/15 to-[#3B82F6]/15
                         border border-white/10 rounded-xl p-8 space-y-4 text-center">
           <p className="text-white text-lg font-semibold">
             A E-Coin não é uma fuga do trabalho —
             é a redenção do trabalhador.
           </p>
     
           <p className="text-gray-300">
             Ela devolve dignidade, autonomia
             e o direito de viver de acordo
             com o valor que se produz.
           </p>
     
           <p className="text-gray-400 italic">
             A pobreza não é destino — é sistema.
             E nós viemos para mudá-lo.
           </p>
     
           <p className="font-bold text-[#FACC15]">
             Somos a EdenKingDom Corporation.<br />
             A civilização começa hoje, contigo.<br />
             Estamos prontos — e o futuro já começou.
           </p>
         </div>
     
       </div>
     </motion.section>
     
     {/* SECTION — TESTEMUNHO DE LIDERANÇA & ORIGEM DO PROPÓSITO | EKD */}
     <motion.section
       variants={fadeUp}
       className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
     >
       {/* 🧾 Fundo cinematográfico histórico */}
       <div className="absolute inset-0 -z-10">
         <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
         <div
           className="absolute inset-0 bg-[url('/images/ekd-testemunho-lideranca-origem-proposito-bg.jpg')]
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
             🧾 Testemunho de Liderança e Origem do Propósito
           </h2>
           <p className="text-gray-400">
             A história por trás da E-Coin e da E-Pay
           </p>
         </div>
     
         {/* Introdução */}
         <div className="border-l-4 border-[#EF4444]/70 pl-6 space-y-4">
           <p className="text-gray-300 leading-relaxed">
             Nós, a <strong>EdenKingDom Corporation</strong>,
             já possuímos uma base massiva de ativos digitais
             estruturados, garantidos e preparados para liquidez global.
           </p>
     
           <p className="text-gray-300">
             Ainda assim, há quem nos acuse, sem estudo ou compreensão,
             de práticas ilegítimas.
           </p>
     
           <p className="text-gray-400 italic">
             Antes de julgar, estudem.
             Antes de acusar, compreendam a história.
           </p>
         </div>
     
         {/* Origem da revolução */}
         <div className="space-y-6">
           <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
             🕰️ O Início da Revolução — 2009 e o Nascimento do Bitcoin
           </h3>
     
           <p className="text-gray-300 leading-relaxed">
             O ano de 2009 marcou o início da maior revolução financeira
             desde a criação do sistema bancário moderno:
             o nascimento do <strong>Bitcoin (BTC)</strong>,
             a primeira moeda digital descentralizada do mundo.
           </p>
         </div>
     
         {/* Eventos cruciais */}
         <div className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-6">
           <h4 className="text-lg sm:text-xl font-bold text-[#22C55E]">
             📜 Eventos Cruciais
           </h4>
     
           <div className="space-y-4">
             <p className="text-gray-300">
               <strong>⛏️ Mineração do Bloco Gênesis</strong><br />
               Em 3 de janeiro de 2009, Satoshi Nakamoto minerou
               o primeiro bloco do Bitcoin — o Bloco Gênesis —
               dando origem ao sistema financeiro descentralizado.
             </p>
     
             <p className="text-gray-300">
               <strong>📰 Mensagem Cravada na História</strong><br />
               “The Times 03/Jan/2009 Chancellor on brink of second bailout for banks.”
             </p>
     
             <p className="text-gray-400 italic">
               Uma crítica direta à corrupção bancária
               e à impressão descontrolada de dinheiro
               durante a crise financeira de 2008.
             </p>
     
             <p className="text-gray-300">
               <strong>🔗 Primeira Transação da História</strong><br />
               Em 12 de janeiro de 2009,
               ocorreu a primeira transação peer-to-peer
               entre Satoshi Nakamoto e Hal Finney.
             </p>
           </div>
         </div>
     
         {/* Legado */}
         <div className="bg-gradient-to-r from-[#D4AF37]/15 to-[#3B82F6]/15
                         border border-white/10 rounded-xl p-6 space-y-4">
           <h4 className="text-lg sm:text-xl font-bold text-[#FACC15]">
             🌱 O Legado de 2009
           </h4>
     
           <p className="text-gray-300 leading-relaxed">
             Nascia ali o conceito de dinheiro sem bancos,
             sem governos e sem intermediários.
           </p>
     
           <p className="text-gray-300">
             Um sistema baseado em <strong>blockchain</strong> —
             um livro-razão público, imutável e transparente.
           </p>
     
           <p className="text-gray-400 italic">
             Era o nascimento de uma nova confiança digital.
           </p>
         </div>
     
       </div>
     </motion.section>
     
     {/* SECTION — O ESPÍRITO DA E-COIN: PROVA DE VALOR | EKD */}
     <motion.section
       variants={fadeUp}
       className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
     >
       {/* 💠 Fundo cinematográfico conceitual */}
       <div className="absolute inset-0 -z-10">
         <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
         <div
           className="absolute inset-0 bg-[url('/images/ekd-espirito-ecoin-prova-de-valor-bg.jpg')]
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
             💠 O Espírito da E-Coin
           </h2>
           <p className="text-gray-400 italic">
             Prova de valor, não de fala
           </p>
         </div>
     
         {/* Prova de valor */}
         <div className="border-l-4 border-[#22C55E]/70 pl-6 space-y-4">
           <p className="text-gray-300 leading-relaxed">
             A <strong>E-Coin</strong> nasce no mesmo espírito do Bitcoin,
             mas com uma evolução clara e responsável.
           </p>
     
           <p className="text-gray-300">
             Enquanto o Bitcoin é <strong>Proof of Work</strong>,
             a E-Coin é <strong>Proof of Stake</strong> e
             <strong> Proof of Finance</strong>.
           </p>
     
           <p className="text-gray-400 italic">
             “Quem possui E-Coin é porque realmente investiu nela.”
           </p>
         </div>
     
         {/* Liquidez real */}
         <div className="space-y-4">
           <p className="text-gray-300 leading-relaxed">
             Assim como para ter saldo no M-Pesa, Paypal, Cash App, Pix, Mercado Pago, stripe, etc é necessário depositar,
             para ter E-Coin é preciso converter dinheiro fiduciário
             (MZN, USD, Rand, Real, etc.) e fazer staking.
           </p>
     
           <p className="text-gray-300">
             Nada é imaginário.
             Tudo é <strong>liquidez real, convertida e rastreável</strong>.
           </p>
     
           <p className="text-gray-300">
             Na E-Coin, o valor nasce da
             <strong> confiança, transparência e mérito</strong>,
             não da especulação vazia.
           </p>
         </div>
     
         {/* Energia financeira */}
         <div className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-4">
           <p className="text-gray-300 leading-relaxed">
             No Bitcoin, o minerador investe energia elétrica.
           </p>
     
           <p className="text-gray-300">
             Na E-Coin, o participante investe
             <strong> energia financeira real</strong> —
             liquidez que dá vida à rede,
             sustenta o ecossistema
             e garante crescimento equilibrado.
           </p>
         </div>
     
         {/* União de nações */}
         <div className="space-y-4">
           <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
             💱 Porque a E-Coin Une Nações
           </h3>
     
           <p className="text-gray-300 leading-relaxed">
             O sistema E-Coin conecta países e continentes
             sem exigir que bancos centrais exportem liquidez.
           </p>
     
           <p className="text-gray-400 italic">
             “A liquidez volta a circular pelo mundo
             e não se perde nas fronteiras políticas.”
           </p>
     
           <p className="text-gray-300">
             Cada transação E-Coin é uma ponte entre economias —
             África, Europa, América e Ásia —
             com a blockchain a executar automaticamente
             o que antes exigia meses de burocracia.
           </p>
         </div>
     
         {/* Experiência pessoal */}
         <div className="bg-gradient-to-r from-[#D4AF37]/15 to-[#3B82F6]/15
                         border border-white/10 rounded-xl p-6 space-y-4">
           <h3 className="text-xl sm:text-2xl font-bold text-[#FACC15]">
             🧭 Experiência Pessoal — Da Dificuldade à Criação
           </h3>
     
           <p className="text-gray-300 leading-relaxed">
             A motivação da E-Coin não veio da teoria,
             mas da vida real.
           </p>
     
           <p className="text-gray-300">
             Durante anos, eu,
             <strong>Athelstan Pateron Atanas</strong>,
             vivi a frustração de não conseguir levantar
             dinheiro ganho com trabalho honesto.
           </p>
     
           <p className="text-gray-300">
             Pagamentos internacionais demoravam meses
             ou simplesmente não chegavam.
             Bancos recusavam, sistemas travavam,
             e a dignidade era posta em causa.
           </p>
     
           <p className="text-gray-400 italic">
             Chegou-se ao absurdo de enviar dinheiro físico em voos
             para contornar bloqueios bancários.
             Isso é desumano, retrógrado e insustentável.
           </p>
         </div>
     
       </div>
     </motion.section>

    </main>
  );
}
