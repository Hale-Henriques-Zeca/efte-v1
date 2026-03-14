"use client";

import { motion } from "framer-motion";
import { useReadContract } from "wagmi";
import { formatUnits } from "viem";
import Link from "next/link";
import { erc20Abi } from "@/lib/abis/erc20Abi";

/* ===== CONTRACTS ===== */
const PRIMARY_SALE = "0x00C6A53c583CbEC68EAa83563A9021F6F527eea3";
const SECONDARY_MARKET = "0xeA46eb35545b72536FA928627080e7DCc90B9768";

/* ===== TOKENS ===== */
const ECOIN = "0xDf69235019cc416dd5Be75dfc0eDc922aB4b5964";
const EUSD = "0xf6B07aa2FfB7A52B6f7cD7508598Ccaf224c6F1B";
const USDT = process.env.NEXT_PUBLIC_USDT_TESTNET as `0x${string}`;

export default function LiquidityProofPanel() {

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

  return (
    <div className="w-full max-w-6xl mt-24 space-y-10">

      {/* TITLE */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#D4AF37]">
          On-Chain Liquidity Transparency
        </h2>
        <p className="text-gray-400 mt-3">
          Dados verificados diretamente na blockchain em tempo real
        </p>
      </div>

      {/* PANELS */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* SELL TO USERS (Protocol selling E-Coin) */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="rounded-3xl backdrop-blur-xl bg-white/5 border border-[#1E9B4B]/30 p-8 text-center"
        >
          <p className="text-gray-400 mb-2">E-Coin disponível para compra</p>
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

        {/* BUY FROM USERS (Protocol buying E-Coin) */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="rounded-3xl backdrop-blur-xl bg-white/5 border border-[#fc0000]/30 p-8 text-center"
        >
          <p className="text-gray-400 mb-2">Reservas para venda</p>

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
  );
}
