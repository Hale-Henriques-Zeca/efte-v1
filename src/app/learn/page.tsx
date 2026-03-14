"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Link from "next/link";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center text-center">

      {/* ================= HERO CINEMATOGRÁFICO ================= */}
      <section className="relative w-full overflow-hidden">

        {/* Fundo base */}
        <div
          className="absolute inset-0 -z-20"
          style={{
            background:
              "linear-gradient(135deg, #1C2D5A 0%, #0B0E14 100%)",
          }}
        />

        {/* Glow azul */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 20%, rgba(28,45,90,0.45), transparent 60%)",
          }}
        />

        {/* Glow verde (portal) */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, rgba(31,169,113,0.22), transparent 65%)",
          }}
        />

        {/* Conteúdo animado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-5xl mx-auto px-6 py-28 text-white"
        >

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center mb-6"
          >
            <img
              src="/logo-ebc.png"
              alt="EBC Logo"
              className="h-32 md:h-40"
            />
          </motion.div>

          {/* TÍTULO */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span style={{ color: "#1FA971" }}>
              EdenKingDom{" "}
            </span>
            
            Buy{" "}

            <span style={{ color: "#0B5ED7" }}>
               Crypto
            </span>
          </motion.h1>

          {/* SUBTÍTULO */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10"
          >
             <span style={{ color: "#0B5ED7" }}>
                O teu portal para a liberdade digital.
            </span>
           
            <br />
            Compra cripto com segurança institucional e acesso Web3 direto.
          </motion.p>

          {/* PAINEL INFORMATIVO */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mx-auto mb-10 max-w-3xl rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 text-sm text-gray-200"
          >
            ⚠️ A EBC CEX encontra-se em desenvolvimento contínuo.
            <br />
            <strong>Compra de E-Coin via Web3 já disponível. </strong>
            Funcionalidades avançadas serão ativadas progressivamente até Junho.
          </motion.div>

          {/* BOTÕES */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            
      <motion.div
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <Button variant="gold">
    <span style={{ color: "#1FA971" }}>
              Comprar E-Coin Com Cartão
            </span>
    
  </Button>
</motion.div>

<motion.div
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <Link href="/trade/market">
              <Button variant="primary">
                <span style={{ color: "#0B5ED7" }}>
                Ir para Trading
            </span>
                
              </Button>
            </Link>
</motion.div>
            

            <motion.div
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <Link href="/web3-sale">
  <Button variant="Green">
     <span style={{ color: "#D4AF37" }}>
                🏛️ Comprar E-Coin na Web3
            </span>
    
  </Button>
</Link>

</motion.div>

          </motion.div>

        </motion.div>
      </section>
      {/* ================= FIM HERO ================= */}


<Section variant="blue">
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full py-12 mt-8">

    
    
    {/* Feature 1 — Verde */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl border border-[var(--green)]/30
                 bg-[var(--panel)]
                 hover:bg-[var(--green)]/5
                 transition"
    >
      <h3 className="text-xl font-semibold mb-2 text-[var(--green)]">
  Fiat → Crypto
</h3>
<p className="text-[var(--text-muted)]">
  Compra e venda de criptoativos (E-Coin, E-Genesis e E-USD), diretamente a partir da sua conta bancária,
  cartões ou carteiras móveis e digitais. Processo simples, seguro e totalmente transparente.
</p>

    </motion.div>

    {/* Feature 2 — Azul */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl border border-[var(--blue)]/30
                 bg-[var(--panel)]
                 hover:bg-[var(--blue)]/5
                 transition"
    >
      <h3 className="text-xl font-semibold mb-2 text-[var(--blue)]">
        Trading Profissional
      </h3>
      <p className="text-[var(--text-muted)]">
        Ordens a mercado, limite e robôs HFT.
      </p>
    </motion.div>

    {/* Feature 3 — Dourado */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl border border-[var(--gold)]/40
                 bg-[var(--panel)]
                 hover:bg-[var(--gold)]/5
                 transition"
    >
      <h3 className="text-xl font-semibold mb-2 text-[var(--gold)]">
        Automação Inteligente
      </h3>
      <p className="text-[var(--text-muted)]">
        Bots algorítmicos com{" "}
        <strong className="text-[var(--blue)]">
          Portal Timing Score
        </strong>{" "}
        exclusivo EBC.
      </p>
    </motion.div>

  </div>
</Section>


{/* CTA */}
<Section variant="blue">
  
  <div className="py-24 text-center">
<h3 className="text-3xl font-semibold mb-6 text-[var(--blue)]">
        Comece hoje na EBC
      </h3>
 <motion.div
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <Link href="#">
  <Button variant="Green">
     <span style={{ color: "#1FA971" }}>
                Criar Conta / Iniciar Sessão 
            </span>
    
  </Button>
</Link>

</motion.div>

</div>
</Section>

    </main>
    
  );
}
