"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsStars } from "react-icons/bs";
import { FaTelegramPlane, FaWhatsapp, FaQrcode, FaUsers } from "react-icons/fa";
import { WalletReferralGrid } from "@/components/WalletReferralGrid";
import { useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import ConnectWalletButton from "@/components/ConnectWalletButton";
import Button from "@/components/ui/Button";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import EMarketingPage from "@/components/EMarketingPage";
import ReferralDashboard from "@/components/referral-dashboard/ReferralDashboard";





export default function EquipesPage() {

const { address, isConnected } = useAccount();
 const [copiedLink, setCopiedLink] = useState(false);

  const referralLink = useMemo(() => {
    if (!address) return "";
    return `https://efte.edenkingdom.org/web3-sale?ref=${address}`;
  }, [address]);

  const copyLink = async (text: string) => {
  await navigator.clipboard.writeText(text);
  setCopiedLink(true);
  setTimeout(() => setCopiedLink(false), 2000);
};


 
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  

 
const [copiedWallet, setCopiedWallet] = useState(false);

const copyWallet = async () => {
  if (!address) return;
  await navigator.clipboard.writeText(address);
  setCopiedWallet(true);
  setTimeout(() => setCopiedWallet(false), 2000);
};

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* 🌌 Cinematic Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#05070D] via-[#0B5ED7] to-[#020617]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.22),transparent_65%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-5xl px-6 py-24 text-white"
      >
        {/* Title */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs tracking-widest bg-black/60 border border-[#0B5ED7]/30 text-[#0B5ED7]">
            LIDERANÇA & COMUNIDADES
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight">
            EdenKingDom Financia Tools Empire (EFTE) — Liderança & Sistema de Referências
          </h1>
          <p className="mt-6 text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Bem-vindo ao <strong>EdenKingDom Verse Web3</strong>. Um ecossistema digital soberano
            criado para devolver ao indivíduo o controlo sobre o seu valor, os seus ativos
            e o seu futuro financeiro.
          </p>
        </div>

        {/* Manifesto */}
        <div className="bg-black/40 border border-white/10 rounded-2xl p-8 mb-14">
          <p className="text-gray-300 leading-relaxed">
            Aqui nasce a terra dos <strong>Edenitas</strong> — uma comunidade global onde
            os <strong>E‑Coiners</strong> se unem para desenvolver, proteger e expandir o seu
            potencial económico através de tecnologias Web3, blockchain e finanças descentralizadas.
          </p>
          <ul className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
            <li className="flex items-center gap-2"><BsStars className="text-[#D4AF37]"/> Confiança codificada</li>
            <li className="flex items-center gap-2"><BsStars className="text-[#D4AF37]"/> Transparência estrutural</li>
            <li className="flex items-center gap-2"><BsStars className="text-[#D4AF37]"/> Liberdade como infraestrutura</li>
          </ul>
        </div>

        {/* Fees & Referral */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="bg-black/40 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">💰 Fees & Referências</h2>
            <p className="text-gray-300 mb-4"><strong>Trading Fee:</strong> 0.30% (apenas compra e venda)</p>
            <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
              <li>❌ Não se aplica a staking</li>
              <li>❌ Não se aplica a transferências</li>
              <li>❌ Não se aplica a recompensas</li>
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-black/60 border border-[#D4AF37]/30">
              <p className="text-sm text-gray-300">Sistema de Referência (30%)</p>
              <p className="text-sm text-gray-400 mt-2">
                Aplicado <strong>apenas</strong> sobre a trading fee (0.30%).
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Exemplo: Compra $100 → Fee $0.30 → Referral $0.09 → Treasury $0.21
              </p>
            </div>
          </div>

          <div className="bg-black/40 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">🔗 Referral Link — Como funciona</h2>
            <p className="text-gray-300 mb-4">
              ❌ O link referral <strong>não</strong> faz bind automático.<br />
              ✅ Ele apenas preenche o campo do upline.
            </p>
            <div className="text-sm text-gray-400 space-y-2">
              <p>1. Usuário entra por link referral</p>
              <p>2. Campo upline vem pré‑preenchido</p>
              <p>3. Usuário clica <strong>Salvar Upline</strong></p>
              <p>4. <code>bindInviter()</code> é executado on‑chain</p>
              <p>5. Apenas uma vez, irreversível</p>
            </div>
            <div className="mt-4 text-xs text-gray-500">
              Exemplo: https://ebc.edenkingdom.org/web3-sale?ref=0xABC123...
            </div>
          </div>
        </div>

        {/* Leader Tools */}
        <div className="bg-black/40 border border-white/10 rounded-2xl p-8 mb-14">
          <h2 className="text-2xl font-semibold mb-6">🧩 Ferramentas de Líder</h2>

          {/* Connect Wallet for Referral */}
<div className="bg-black/40 border border-[#D4AF37]/30 rounded-2xl p-8 mb-14 text-center">
  <h2 className="text-2xl md:text-2xl font-semibold text-[var(--blue)] mb-4">
    🔐 Conecte a sua Carteira DEX
     
  </h2>


  <p className="text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
    Para que o seu <strong>link de referências Web3</strong> apareça,
    conecte a sua carteira descentralizada da rede
    <strong> BNB Smart Chain (BEP-20)</strong>.
    <br />
    Carteiras suportadas incluem:
    <span className="text-gray-400">
      {" "}MetaMask, Trust Wallet, SafePal, TokenPocket, OKX, Binance Wallet, entre outras.
    </span>
  </p>

  {/* Connect Wallet Button */}
  <div className="flex justify-center mb-6">
  <div
    className="px-8 py-3 rounded-full font-semibold
               bg-gradient-to-r from-[#D4AF37] to-[#3B82F6]
               text-black hover:opacity-90 transition
               flex items-center justify-center"
  >
    <ConnectWalletButton />
  </div>
</div>




 {/* Wallet Address Placeholder */}
<div className="mt-4">
  <p className="text-sm text-gray-400 mb-2">
    Endereço da carteira conectada (BNB Smart Chain):
  </p>

  {isConnected ? (
    <div className="flex flex-col items-center gap-4">

      <div className="flex flex-col sm:flex-row items-center gap-3 rounded-2xl
        border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-md">

        <code className="text-xs sm:text-sm text-[#0B5ED7] font-mono break-all">
          {address}
        </code>

        <button onClick={copyWallet} className="relative">
          <motion.div
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            animate={
              copiedWallet
                ? {
                    boxShadow:
                      "0 0 0px rgba(11,94,215,0), 0 0 18px rgba(11,94,215,0.7)",
                    scale: [1, 1.08, 1],
                  }
                : {}
            }
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative overflow-hidden rounded-full border
            border-[#0B5ED7]/40 px-4 py-1.5 text-xs font-semibold
            text-[#0B5ED7] bg-black/40 backdrop-blur-md
            hover:border-[#0B5ED7] transition-all"
          >
            <AnimatePresence>
              {copiedWallet && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1.6 }}
                  exit={{ opacity: 0, scale: 2 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 rounded-full
                  bg-gradient-to-r from-[#0B5ED7]/40 via-[#D4AF37]/30 to-[#B11226]/30
                  blur-md"
                />
              )}
            </AnimatePresence>

            <span className="relative z-10 flex items-center gap-1">
              {copiedWallet ? "Copiado" : "Copiar endereço"}
            </span>
          </motion.div>
        </button>

      </div>
    </div>
  ) : (
    <div className="text-xs text-gray-500">
      Conecte a carteira para Copiar o seu endereço.
    </div>
  )}
</div>



  

{/* Separador entre Endereço da carteira conectada e REFERRAL LINK CARD */}
<div className="relative z-10 mt-14 mb-10 flex items-center gap-4">
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
  <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#D4AF37]/80">
  O seu link Web3.
  </span>
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
  </div>

{/* REFERRAL LINK CARD */}
<div className="p-5 rounded-xl bg-black/60 border border-white/10 hover:border-[#0B5ED7]/40 transition flex flex-col gap-4 items-center text-center">

  {isConnected ? (
    <p className="text-xs text-gray-300 break-all">
      <strong className="text-[#0B5ED7] font-mono">
        {referralLink}
      </strong>
    </p>
  ) : (
    <p className="text-xs text-gray-500">
      Conecte a carteira para gerar o seu link Web3.
    </p>
  )}

  <button
    disabled={!isConnected}
    onClick={() => isConnected && copyLink(referralLink)}
    className="relative"
  >
    <motion.div
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: isConnected ? 1.05 : 1 }}
      animate={
        copiedLink
          ? {
              boxShadow:
                "0 0 0px rgba(212,175,55,0), 0 0 18px rgba(212,175,55,0.7)",
              scale: [1, 1.08, 1],
            }
          : {}
      }
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-full border px-4 py-1.5 text-xs font-semibold backdrop-blur-md transition
        ${
          isConnected
            ? "border-[#D4AF37]/40 text-[#D4AF37] bg-black/40 hover:border-[#D4AF37]"
            : "border-gray-700 text-gray-600 bg-black/20 cursor-not-allowed"
        }`}
    >
      <AnimatePresence>
        {copiedLink && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1.6 }}
            exit={{ opacity: 0, scale: 2 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 rounded-full
            bg-gradient-to-r from-[#D4AF37]/40 via-[#0B5FFF]/30 to-[#B11226]/30 blur-md"
          />
        )}
      </AnimatePresence>

      <span className="relative z-10 flex items-center gap-1">
        {copiedLink ? (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="3"
              strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Copiado
          </>
        ) : (
          "Copiar link"
        )}
      </span>

    </motion.div>
  </button>
</div>


{/* Separador entre link web3 e Feramentas de liderança ainda em desenvolvimento */}
<div className="relative z-10 mt-14 mb-10 flex items-center gap-4">
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
  <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#D4AF37]/80">
   Feramentas de liderança ainda em desenvolvimento
  </span>
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
  </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div className="p-4 rounded-xl bg-black/60 border border-white/10">
              <FaUsers className="text-[#D4AF37] mb-2" />
              Copiar endereço & link referral ✅
            </div>
            <div className="p-4 rounded-xl bg-black/60 border border-white/10">
              <FaTelegramPlane className="text-[#D4AF37] mb-2" />
              Telegram referral (em desenvolvimento)
            </div>
            <div className="p-4 rounded-xl bg-black/60 border border-white/10">
              <FaWhatsapp className="text-[#D4AF37] mb-2" />
              WhatsApp referral (em desenvolvimento)
            </div>
            <div className="p-4 rounded-xl bg-black/60 border border-white/10">
              <FaQrcode className="text-[#D4AF37] mb-2" />
              QR Code de convite (em breve)
            </div>
            <div className="p-4 rounded-xl bg-black/60 border border-white/10">
              Streams & ClassMeets para líderes
            </div>
            <div className="p-4 rounded-xl bg-black/60 border border-white/10">
              Painel de performance por equipe
            </div>

          </div>
          <ReferralDashboard />
        </div> {/* wallet tools grid */}

</div> {/* END Leader Tools */}
      
{/* 🔗 Conteúdos Promocionais Web3 (Referral Copy) */}
<div className="bg-black/40 border border-white/10 rounded-2xl p-8 mb-14">
  <h2 className="text-3xl md:text-4xl font-semibold text-[var(--blue)] mb-4">
    📣 Conteúdos Oficiais para Líderes & Comunidades
  </h2>

  <p className="text-sm text-gray-400 mb-8">
    Conecte a sua carteira DEX (MetaMask, Trust Wallet, SafePal, OKX, Binance Wallet, etc.)
    para que o seu <strong>link de referência Web3</strong> apareça automaticamente.
  </p>

  {/* WALLET */}
  <WalletReferralGrid />

  
</div>

        {/* Conclusion */}
        <div className="text-center">

          {/* Future Leadership & Services */}
<div className="bg-black/40 border border-white/10 rounded-2xl p-8 mb-14">
  <h2 className="text-2xl md:text-2xl font-semibold text-[var(--blue)] mb-4 text-center">
    🚀 O Futuro da Liderança na EFTE
  </h2>

  <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto text-center">
    A liderança no <strong>EdenKingDom Verse Web3</strong> está apenas a começar.
    Novos níveis de liderança, benefícios e serviços estão em desenvolvimento
    para expandir as oportunidades dentro da Exchange EFTE.
  </p>

  <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-300">
    <li className="bg-black/60 border border-white/10 rounded-xl p-4">
      📈 Trading a mercado e limite
    </li>
    <li className="bg-black/60 border border-white/10 rounded-xl p-4">
      🤖 Bots de trading com Inteligência Artificial — Arbitragem interna de E-Coin (milissegundos) e P2P trading
    </li>
    <li className="bg-black/60 border border-white/10 rounded-xl p-4">
      ⚡ E-Coin BuyBack & SellBack Smart Pool
    </li>
    <li className="bg-black/60 border border-white/10 rounded-xl p-4">
      🧠 Serviços avançados para líderes e comunidades
    </li>
    <li className="bg-black/60 border border-white/10 rounded-xl p-4">
      🏛️ Mais participação em fees de trading
    </li>
    <li className="bg-black/60 border border-white/10 rounded-xl p-4">
      🌍 Expansão institucional da Exchange EFTE
    </li>
  </ul>

{/* SEPARADOR ENTRE ENGINE e SMART POOL */}
<div className="relative z-10 mt-14 mb-10 flex items-center gap-4">
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
  <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#D4AF37]/80">
    E-Marketing
  </span>
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
</div> 

  <EMarketingPage />
</div>



          <h2 className="text-2xl md:text-2xl font-semibold text-[var(--blue)] mb-4 text-center">🏁 Conclusão</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            A EFTE não é uma exchange comum. É um <strong> Sistema de Liquidez On‑Chain </strong>
            com execução direta, fees previsíveis, referências saudáveis e arquitetura pronta
            para auditoria e institucionalização.
          </p>
          <Link
            href="/trade"
            className="inline-block mt-8 px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-[#D4AF37] to-[#3B82F6] text-black"
          >
            Ir à Casa dos Edenitas
          </Link>
        </div>

           
      </motion.div>
    </section>
  );
}

