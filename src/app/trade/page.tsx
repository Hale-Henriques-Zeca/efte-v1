"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaMobileAlt, FaGlobe, FaChartLine } from "react-icons/fa";
import LiquidityProofPanel from "@/components/liquidity/LiquidityProofPanel";

import { useReadContract } from "wagmi";
import { formatUnits } from "viem";

import { erc20Abi } from "@/lib/abis/erc20Abi";




/* ===== CONTRACTS ===== */
const PRIMARY_SALE = "0x00C6A53c583CbEC68EAa83563A9021F6F527eea3";
const SECONDARY_MARKET = "0xeA46eb35545b72536FA928627080e7DCc90B9768";

/* ===== TOKENS ===== */
const ECOIN = "0xDf69235019cc416dd5Be75dfc0eDc922aB4b5964";
const EUSD = "0xf6B07aa2FfB7A52B6f7cD7508598Ccaf224c6F1B";
const USDT = process.env.NEXT_PUBLIC_USDT_TESTNET as `0x${string}`;



  
export default function TradeHub() {

  /* ================= BUY SIDE =================
     Quanto o sistema pode vender ao usuário
  */
  const ecoinLiquidity = useReadContract({
    address: ECOIN,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [PRIMARY_SALE],
  });

  /* ================= SELL SIDE =================
     Quanto o sistema pode pagar ao usuário
  */
  const eusdReserve = useReadContract({
    address: EUSD,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [SECONDARY_MARKET],
  });

  const usdtReserve = useReadContract({
    address: USDT,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [SECONDARY_MARKET],
  });

  const buyLiquidity = ecoinLiquidity.data
    ? Number(formatUnits(ecoinLiquidity.data as bigint, 18)).toLocaleString()
    : "...";

  const sellReserveEusd = eusdReserve.data
    ? Number(formatUnits(eusdReserve.data as bigint, 18)).toLocaleString()
    : "...";

  const sellReserveUsdt = usdtReserve.data
    ? Number(formatUnits(usdtReserve.data as bigint, 18)).toLocaleString()
    : "...";

  const portals = [
    {
      title: "Edenits House",
      desc: "Interface mobile amigável para interação rápida no metaverso",
      href: "/web3-sale",
      icon: <FaMobileAlt />,
      color: "from-amber-400 via-orange-500 to-yellow-300",
      glow: "rgba(255,170,60,0.6)"
    },
    {
      title: "EdenKingDom Verse",
      desc: "Ambiente geral do metaverso para interação universal",
      href: "/web3-sale-v2",
      icon: <FaGlobe />,
      color: "from-blue-400 via-cyan-300 to-indigo-400",
      glow: "rgba(80,180,255,0.6)"
    },
    {
      title: "Professional Exchange",
      desc: "Trading on-chain profissional em tempo real",
      href: "/trade/ECOIN-EUSD",
      icon: <FaChartLine />,
      color: "from-emerald-400 via-green-300 to-teal-300",
      glow: "rgba(80,255,170,0.6)"
    }
  ];

  return (
   
  <div className="relative w-full overflow-hidden text-white">

    {/* 🌌 BACKGROUND GLOBAL */}
    <div className="fixed inset-0 -z-20">
      <img
        src="/cosmos-bg.jpg"
        className="w-full h-full object-cover opacity-90"
        alt="Cosmic Background"
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>

    {/* ================= HERO ================= */}
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold
        bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400
        bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,200,120,0.7)]"
      >
        Bem Vindo a EdenKingDom Vesre - OnChain Trading Portals
      </motion.h1>

      <p className="text-gray-300 mt-6 max-w-2xl">
        Escolha abaixo, em qual universo deseja acessar.
        Cada portal conecta você a um ambiente diferente dentro do ecossistema EdenKingDom Verse.
      </p>
    </section>

    {/* ================= LIQUIDITY SECTION ================= */}
    <section className="py-28 border-y border-white/5 backdrop-blur-sm">

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#D4AF37]">
            EdenKingDom Verse Disponível para Negociação OnChain - Status da Liquidez
          </h2>
          <p className="text-gray-400 mt-3">
            Dados verificados diretamente na blockchain em tempo real
          </p>
        </div>

        {/* PANELS */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* SELL TO USERS */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="rounded-3xl backdrop-blur-xl bg-white/5 border border-[#1E9B4B]/30 p-8 text-center"
          >
            <p className="text-gray-400 mb-2">E-Coin disponível para compra (Buy)</p>
            <p className="text-4xl font-bold text-[#1E9B4B] mb-4">
              {buyLiquidity} E-Coin
            </p>

            <Link
              href={`https://testnet.bscscan.com/address/${PRIMARY_SALE}`}
              target="_blank"
              className="inline-block px-6 py-2 rounded-xl bg-[#1E9B4B] text-white hover:brightness-110"
            >
              Ver contrato
            </Link>
          </motion.div>

          {/* BUY FROM USERS */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="rounded-3xl backdrop-blur-xl bg-white/5 border border-[#fc0000]/30 p-8 text-center"
          >
            <p className="text-gray-400 mb-2">Reservas para venda (Sell)</p>

            <div className="space-y-2 mb-4">
              <p className="text-3xl font-bold text-[#fc0000]">
                {sellReserveEusd} E-USD
              </p>
              <p className="text-2xl font-semibold text-[#fc0000]/80">
                {sellReserveUsdt} USDT
              </p>
            </div>

            <Link
              href={`https://testnet.bscscan.com/address/${SECONDARY_MARKET}`}
              target="_blank"
              className="inline-block px-6 py-2 rounded-xl bg-[#fc0000] text-white hover:brightness-110"
            >
              Ver contrato
            </Link>
          </motion.div>

        </div>
      </div>
    </section>

    {/* ================= PORTALS ================= */}
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {portals.map((portal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.2 }}
              whileHover={{ scale: 1.07 }}
              className="relative group"
            >
              <motion.div
                className="absolute -inset-1 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition"
                style={{
                  background: `radial-gradient(circle, ${portal.glow}, transparent 70%)`
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 h-full flex flex-col">

                <div className="text-4xl mb-4 text-white/90">
                  {portal.icon}
                </div>

                <h2 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${portal.color} bg-clip-text text-transparent`}>
                  {portal.title}
                </h2>

                <p className="text-gray-300 text-sm mb-6 flex-1">
                  {portal.desc}
                </p>

                <Link href={portal.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`text-center py-3 rounded-xl font-semibold
                    bg-gradient-to-r ${portal.color} text-black
                    shadow-lg hover:brightness-125 transition`}
                  >
                    Entrar no Portal
                  </motion.div>
                </Link>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>

    {/* SPACER FINAL (ANTI FOOTER COLLISION) */}
    <div className="h-32" />

  </div>
);
}