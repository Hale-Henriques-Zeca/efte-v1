"use client";

import { useAccount } from "wagmi";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WalletReferralGrid() {
  const { address, isConnected } = useAccount();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const referralLink = useMemo(() => {
    if (!address) return "";
    return `https://efte.edenkingdom.org/web3-sale?ref=${address}`;
  }, [address]);

  const copy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const blocks = [
    {
      title: "Infraestrutura, não esquema",
      text: `A EdenKingDom Financial Tools empire (EFTE) é uma infraestrutura financeira Web3.
Sem fundos centralizados, sem promessas falsas.
O valor nasce do uso real da E-Coin e dos serviços do ecossistema.`
    },
    {
      title: "Torna-te um Edenita",
      text: `Constrói liberdade financeira através de liderança, comunidade
e tecnologia Web3. Aqui, quem lidera participa no crescimento do ecossistema.`
    },
    {
      title: "Valor contínuo",
      text: `Enquanto a comunidade utiliza a E-Coin para trading, serviços
e pagamentos, o ecossistema cresce — e tu cresces com ele.`
    },
    {
      title: "Líder, não vendedor",
      text: `Tu lideras pessoas e comunidades.
A EFTE executa tecnologia, liquidez, trading e infraestrutura on-chain.`
    },
    {
      title: "Não precisas ser trader",
      text: `Não precisas ensinar trading.
Apenas lidere e construa comunidades — o sistema faz o resto.`
    },
    {
      title: "Constrói o teu Reino",
      text: `Não é apenas um link de convite.
É a construção de um ecossistema soberano baseado em Web3 e confiança.`
    }
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
      {blocks.map((item, i) => (
        <div
          key={i}
          className="p-5 rounded-xl bg-black/60 border border-white/10 hover:border-[#0B5ED7]/40 transition"
        >
          <h3 className="text-1xl md:text-1xl font-semibold text-[var(--blue)] mb-2">
            {item.title}
          </h3>

          <p className="text-gray-400 mb-4 whitespace-pre-line">
            {item.text}
          </p>

          {isConnected && (
            <p className="text-xs text-gray-300 mb-3 break-all">
              <strong className="text-[#0B5ED7]">
                {referralLink}
              </strong>
            </p>
          )}

         {/* botão copiar estilo Eden */}
<button
  disabled={!isConnected}
  onClick={() => {
    if (!isConnected) return;
    copy(`${item.title}\n\n${item.text}\n\n${referralLink}`, i);
  }}
  className="relative"
>
  <motion.div
    whileTap={{ scale: 0.95 }}
    whileHover={{ scale: isConnected ? 1.05 : 1 }}
    animate={
      copiedIndex === i
        ? {
            boxShadow:
              "0 0 0px rgba(212,175,55,0), 0 0 18px rgba(212,175,55,0.7)",
            scale: [1, 1.08, 1],
          }
        : {}
    }
    transition={{ duration: 0.3 }}
    className={`relative overflow-hidden rounded-full border px-4 py-1.5 text-xs font-semibold backdrop-blur-md transition
      ${
        isConnected
          ? "border-[#D4AF37]/40 text-[#D4AF37] bg-black/40 hover:border-[#D4AF37]"
          : "border-gray-700 text-gray-600 bg-black/20 cursor-not-allowed"
      }`}
  >
    <AnimatePresence>
      {copiedIndex === i && (
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
      {copiedIndex === i ? "Copiado ✓" : "Copiar texto"}
    </span>
  </motion.div>
</button>

        </div>
      ))}
    </div>
  );
}



