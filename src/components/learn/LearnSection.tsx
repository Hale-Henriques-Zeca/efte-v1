"use client";

import LearnCard from "./LearnCard";
import { motion } from "framer-motion";



export default function LearnSection() {
  return (
    <section className="w-full bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-center md:justify-between"
        >
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
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <LearnCard
            title="USDT: o dólar digital da economia cripto"
            description="Entenda como o USDT funciona, porque é estável
            e como é usado globalmente no ecossistema de moedas digitais."
            image="/usdt.png"
            href="/learn/usdt"
          /> 
          
          <LearnCard
  title="EdenKingDom USD (E-USD): a stablecoin institucional da EdenKingDom"
  description="Conheça a E-USD, uma stablecoin BEP-20 com supply fixo, sem owner
  e sem mint/burn pós-deploy, criada para estabilidade, auditoria e uso institucional."
  image="/eusd.png"
  href="/learn/eusd"
/>


          <LearnCard
            title="As moedas digitais (Criptomoedas) pode substituir um banco?"
            description="Carteiras, autocustódia, pagamentos e
            o conceito real de ‘seja o seu próprio banco’."
            image="/learn/crypto-bank.jpg"
            href="/learn/crypto-vs-bank"
          />

          <LearnCard
            title="Qual é o melhor momento para apostar?"
            description="Volatilidade, ciclos de mercado e
            estratégias racionais para apostar em moedas digitais (Criptomoedas) em alta."
            image="/learn/best-time.jpg"
            href="/learn/best-time"
          />
        </div>
      </div>
    </section>
  );
}
