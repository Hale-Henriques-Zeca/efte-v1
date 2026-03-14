"use client";

import LearnCard from "./LearnCard";
import "@/styles/learn-carousel.css";

export default function LearnCarousel() {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-bold text-gray-900">
            És novo no mundo de apostas de preços de moedas digitais (Criptomoedas) no mercado financeiro?
            <br />
            <span className="text-blue-600">
              Aprenda o essencial
            </span>
          </h2>

          <p className="max-w-md mt-6 md:mt-0 text-gray-600">
            Guias práticos, fundamentos e explicações claras
            para iniciantes e utilizadores experientes.
          </p>
        </div>

        {/* Carousel */}
        <div className="learn-carousel-container">
          <div className="learn-carousel-track">

            {/* ===== GRUPO 1 ===== */}
           
            <div className="learn-carousel-item">
  <LearnCard
    title="Cripto vs Apostas: a diferença real"
    description="Por que mercado financeiro, cripto e E-Coin não são jogos
    e não podem ser comparados a apostas."
    image="/crypto-vs-betting.png"
    href="/learn/crypto-vs-betting"
  />
</div>

<div className="learn-carousel-item">
  <LearnCard
    title="Sistema Global de Pagamentos — E-Pay"
    description="O sistema global da EdenKingDom que conecta
    pessoas, moedas, bancos e criptomoedas
    sem fronteiras financeiras."
    image="/epay-global.png"
    href="/learn/e-pay"
  />
</div>

<div className="learn-carousel-item">
  <LearnCard
    title="Qual é o melhor momento para investir em criptomoedas?"
    description="Bull market vs Bear market explicado de forma clara.
    Estratégia, risco, timing e como investir com consciência
    no mercado cripto."
    image="/bull-vs-bear.png"
    href="/learn/bull-vs-bear"
  />
</div>

 <div className="learn-carousel-item">
              <LearnCard
                title="Cripto pode substituir um banco?"
                description="Carteiras, autocustódia e o conceito real
                de ser o seu próprio banco."
                image="/crypto-bank.png"
                href="/learn/crypto-vs-bank"
              />
            </div>

<div className="learn-carousel-item">
  <LearnCard
    title="O que é Staking?"
    description="Aprenda como funciona o staking, como gerar rendimentos
    com E-Coin e por que este modelo é sustentável, transparente e on-chain."
    image="/staking-ecoin.png"
    href="/learn/staking"
  />
</div>


            <div className="learn-carousel-item">
              <LearnCard
                title="USDT: o dólar digital da economia cripto"
                description="Entenda como o USDT funciona, porque é estável
                e como é usado globalmente no ecossistema cripto."
                image="/usdt.png"
                href="/learn/usdt"
              />
            </div>



<div className="learn-carousel-item">
  <LearnCard
    title="Trabalho, Riqueza e Civilização"
    description="Uma reflexão profunda sobre dignidade humana,
    trabalho, tecnologia e o papel da E-Coin
    na nova civilização económica."
    image="/trabalho-riqueza-civilizacao.png"
    href="/learn/trabalho-riqueza-civilizacao"
  />
</div>


<div className="learn-carousel-item">
  <LearnCard
    title="A Evolução do Dinheiro: do Escambo à E-Coin"
    description="A jornada completa do dinheiro: escambo, ouro, papel, cartões,
    criptomoedas e a ascensão da EdenKingDom Coin (E-Coin)."
    image="/evolution-money.png"
    href="/learn/evolution-of-money"
  />
</div> 


            <div className="learn-carousel-item">
              <LearnCard
                title="EdenKingDom USD (E-USD): stablecoin institucional"
                description="Stablecoin BEP-20 com supply fixo, sem owner
                e sem mint/burn pós-deploy."
                image="/eusd.png"
                href="/learn/eusd"
              />
            </div>

            <div className="learn-carousel-item">
              <LearnCard
                title="Cripto pode substituir um banco?"
                description="Carteiras, autocustódia e o conceito real
                de ser o seu próprio banco."
                image="/crypto-bank.png"
                href="/learn/crypto-vs-bank"
              />
            </div>

            {/* ===== GRUPO 2 (CÓPIA EXATA) ===== */}

             <div className="learn-carousel-item">
  <LearnCard
    title="Cripto vs Apostas: a diferença real"
    description="Por que mercado financeiro, cripto e E-Coin não são jogos
    e não podem ser comparados a apostas."
    image="/crypto-vs-betting.png"
    href="/learn/crypto-vs-betting"
  />
</div>

<div className="learn-carousel-item">
  <LearnCard
    title="Sistema Global de Pagamentos — E-Pay"
    description="O sistema global da EdenKingDom que conecta
    pessoas, moedas, bancos e criptomoedas
    sem fronteiras financeiras."
    image="/epay-global.png"
    href="/learn/e-pay"
  />
</div>

 <div className="learn-carousel-item">
              <LearnCard
                title="Cripto pode substituir um banco?"
                description="Carteiras, autocustódia e o conceito real
                de ser o seu próprio banco."
                image="/crypto-bank.png"
                href="/learn/crypto-vs-bank"
              />
            </div>

<div className="learn-carousel-item">
  <LearnCard
    title="O que é Staking?"
    description="Aprenda como funciona o staking, como gerar rendimentos
    com E-Coin e por que este modelo é sustentável, transparente e on-chain."
    image="/staking-ecoin.png"
    href="/learn/staking"
  />
</div>


            <div className="learn-carousel-item">
              <LearnCard
                title="USDT: o dólar digital da economia cripto"
                description="Entenda como o USDT funciona, porque é estável
                e como é usado globalmente no ecossistema cripto."
                image="/usdt.png"
                href="/learn/usdt"
              />
            </div>

<div className="learn-carousel-item">
  <LearnCard
    title="Qual é o melhor momento para investir em criptomoedas?"
    description="Bull market vs Bear market explicado de forma clara.
    Estratégia, risco, timing e como investir com consciência
    no mercado cripto."
    image="/bull-vs-bear.png"
    href="/learn/bull-vs-bear"
  />
</div>


<div className="learn-carousel-item">
  <LearnCard
    title="Trabalho, Riqueza e Civilização"
    description="Uma reflexão profunda sobre dignidade humana,
    trabalho, tecnologia e o papel da E-Coin
    na nova civilização económica."
    image="/trabalho-riqueza-civilizacao.png"
    href="/learn/trabalho-riqueza-civilizacao"
  />
</div>


<div className="learn-carousel-item">
  <LearnCard
    title="A Evolução do Dinheiro: do Escambo à E-Coin"
    description="A jornada completa do dinheiro: escambo, ouro, papel, cartões,
    criptomoedas e a ascensão da EdenKingDom Coin (E-Coin)."
    image="/evolution-money.png"
    href="/learn/evolution-of-money"
  />
</div> 


            <div className="learn-carousel-item">
              <LearnCard
                title="EdenKingDom USD (E-USD): stablecoin institucional"
                description="Stablecoin BEP-20 com supply fixo, sem owner
                e sem mint/burn pós-deploy."
                image="/eusd.png"
                href="/learn/eusd"
              />
            </div>

            <div className="learn-carousel-item">
              <LearnCard
                title="Cripto pode substituir um banco?"
                description="Carteiras, autocustódia e o conceito real
                de ser o seu próprio banco."
                image="/crypto-bank.png"
                href="/learn/crypto-vs-bank"
              />
            </div>

          </div>
        </div>

        {/* Hint */}
        <div className="mt-6 text-sm text-gray-500">
          Movimento contínuo · Pausa ao passar o mouse ou tocar
        </div>

      </div>
    </section>
  );
}
