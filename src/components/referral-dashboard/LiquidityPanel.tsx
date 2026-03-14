"use client";

import { useAccount, useBalance, useReadContract } from "wagmi";
import { formatUnits } from "viem";
import { motion } from "framer-motion";

const ECOIN_ADDRESS = "0xDf69235019cc416dd5Be75dfc0eDc922aB4b5964"; // contrato E-Coin

const erc20Abi = [
  {
    constant: true,
    inputs: [{ name: "owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    type: "function",
    stateMutability: "view",
  },
];

export function LiquidityPanel() {
  const { address, isConnected } = useAccount();

  // 🔹 BNB balance
  const { data: bnbBalance } = useBalance({
    address,
  });

  // 🔹 E-Coin balance
  const { data: ecoinBalance } = useReadContract({
    address: ECOIN_ADDRESS,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });

  if (!isConnected) return null;

  return (
    <div className="bg-black/40 border border-[#D4AF37]/20 rounded-2xl p-6 mb-8 backdrop-blur-md">

      <p className="text-gray-400 text-sm mb-4">
        Saldo da Carteira (BNB Smart Chain)
      </p>

      <div className="grid sm:grid-cols-2 gap-4">

        {/* BNB */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-xl bg-black/60 border border-[#0B5ED7]/40 p-4"
        >
          <p className="text-xs text-gray-400">BNB (Taxa de rede)</p>
          <p className="text-xl font-bold text-[#0B5ED7]">
            {bnbBalance ? Number(bnbBalance.formatted).toFixed(4) : "0.0000"} BNB
          </p>
        </motion.div>

        {/* E-Coin */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-xl bg-black/60 border border-[#D4AF37]/40 p-4"
        >
          <p className="text-xs text-gray-400">E-Coin</p>
          <p className="text-xl font-bold text-[#D4AF37]">
            {ecoinBalance
              ? Number(formatUnits(ecoinBalance as bigint, 18)).toFixed(8)
              : "0.00"} E-Coin
          </p>
        </motion.div>

      </div>

      <p className="text-xs text-gray-500 mt-4">
        O saldo atualiza automaticamente após receber ou sacar comissões.
      </p>
    </div>
  );
}
