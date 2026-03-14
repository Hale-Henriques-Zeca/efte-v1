"use client";

import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { formatUnits } from "viem";
import { tradingFeeCollectorAbi } from "@/lib/abis/tradingFeeCollectorAbi";
import { ecoinPrimarySaleAbi } from "@/lib/abis/ecoinPrimarySaleAbi";
import { ecoinSecondaryMarketAbi } from "@/lib/abis/ecoinSecondaryMarketAbi";
import { parseUnits } from "viem";
import { erc20Abi } from "@/lib/abis/erc20Abi";
import { useEffect, useState } from "react";
import { usePublicClient } from "wagmi";



const ECOIN =
  process.env.NEXT_PUBLIC_ECOIN_TESTNET as `0x${string}`;

const EUSD =
  process.env.NEXT_PUBLIC_EUSD_TESTNET as `0x${string}`;

const FEE_COLLECTOR =
  process.env.NEXT_PUBLIC_FEE_COLLECTOR_ADDRESS as `0x${string}`;

const PRIMARY_SALE =
  process.env.NEXT_PUBLIC_PRIMARY_SALE_ADDRESS as `0x${string}`;

const SECONDARY_MARKET =
  process.env.NEXT_PUBLIC_SECONDARY_MARKET_ADDRESS as `0x${string}`;

  
export default function TRADINGONCHAINAdminPanel() {
  const { address, isConnected } = useAccount();
  const { writeContractAsync } = useWriteContract();

  /* ---------------- READS ---------------- */

  const feeBP = useReadContract({
    abi: ecoinPrimarySaleAbi,
    address: PRIMARY_SALE,
    functionName: "FEE_BP",
  });

  const referralPercent = useReadContract({
    abi: tradingFeeCollectorAbi,
    address: FEE_COLLECTOR,
    functionName: "REF_PERCENT",
  });

  const primaryPaused = useReadContract({
    abi: ecoinPrimarySaleAbi,
    address: PRIMARY_SALE,
    functionName: "paused",
  });

  const secondaryPaused = useReadContract({
    abi: ecoinSecondaryMarketAbi,
    address: SECONDARY_MARKET,
    functionName: "paused",
  });

  const feeCollectorPaused = useReadContract({
    abi: tradingFeeCollectorAbi,
    address: FEE_COLLECTOR,
    functionName: "paused",
  });

  /* ---------------- GUARD ---------------- */

  if (!isConnected) {
    return (
      <div className="border border-red-500 p-4 rounded-xl">
        Conecte a wallet admin.
      </div>
    );
  }

  /* ---------------- ACTIONS ---------------- */

  async function togglePause(
    target: "primary" | "secondary" | "collector",
    paused: boolean
  ) {
    const map = {
      primary: {
        abi: ecoinPrimarySaleAbi,
        address: PRIMARY_SALE,
      },
      secondary: {
        abi: ecoinSecondaryMarketAbi,
        address: SECONDARY_MARKET,
      },
      collector: {
        abi: tradingFeeCollectorAbi,
        address: FEE_COLLECTOR,
      },
    };

    const fn = paused ? "unpause" : "pause";

    await writeContractAsync({
      abi: map[target].abi,
      address: map[target].address,
      functionName: fn,
      account: address!,
    });
  }

  const publicClient = usePublicClient();


  /* ---------------- Depositar ECOIN no Primary ---------------- */

  async function depositEcoin(amount: string) {
  const value = parseUnits(amount, 18);

  const approveTx = await writeContractAsync({
    address: ECOIN,
    abi: erc20Abi,
    functionName: "approve",
    args: [PRIMARY_SALE, value],
  });

  await publicClient.waitForTransactionReceipt({ hash: approveTx });

  await writeContractAsync({
    address: PRIMARY_SALE,
    abi: ecoinPrimarySaleAbi,
    functionName: "addEcoinLiquidity",
    args: [value],
  });
}



/* ---------------- Depositar EUSD no Secondary ---------------- */

async function depositEusd(amount: string) {
  const value = parseUnits(amount, 18);

  const approveTx = await writeContractAsync({
    address: EUSD,
    abi: erc20Abi,
    functionName: "approve",
    args: [SECONDARY_MARKET, value],
  });

  await publicClient.waitForTransactionReceipt({ hash: approveTx });

  await writeContractAsync({
    address: SECONDARY_MARKET,
    abi: ecoinSecondaryMarketAbi,
    functionName: "addStableLiquidity",
    args: [value],
  });
}



/* ---------------- WITHDRAW FUNCTIONS ---------------- */

/* ---------------- Retirar ECOIN ---------------- */

async function withdrawEcoin(amount: string) {
  await writeContractAsync({
    address: PRIMARY_SALE,
    abi: ecoinPrimarySaleAbi,
    functionName: "withdrawEcoin",
    args: [parseUnits(amount, 18), address!],
  });
}

/* ---------------- Retirar EUSD ---------------- */

async function withdrawEusd(amount: string) {
  await writeContractAsync({
    address: SECONDARY_MARKET,
    abi: ecoinSecondaryMarketAbi,
    functionName: "withdrawStable",
    args: [parseUnits(amount, 18), address!],
  });
}


const [depositAmount, setDepositAmount] = useState("");
const [withdrawAmount, setWithdrawAmount] = useState("");
const [asset, setAsset] = useState<"ECOIN" | "EUSD">("ECOIN");

  /* ---------------- UI ---------------- */

  return (
    <div className="mt-12 p-6 rounded-2xl border border-red-500 bg-black/50 space-y-4">
      <h3 className="text-red-400 font-semibold text-lg">
        🛠 Trading On-Chain — Admin Panel
      </h3>

      <div className="text-sm text-gray-300 space-y-1">
        <div>
          Trading Fee:{" "}
          <b>{Number(feeBP.data ?? 0n) / 100}%</b>
        </div>

        <div>
          Referral Cut:{" "}
          <b>{referralPercent.data?.toString()}%</b>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <button
          onClick={() =>
            togglePause("primary", !!primaryPaused.data)
          }
          className="w-full py-2 rounded-lg bg-gray-700"
        >
          {primaryPaused.data ? "Unpause Primary Sale" : "Pause Primary Sale"}
        </button>

        <button
          onClick={() =>
            togglePause("secondary", !!secondaryPaused.data)
          }
          className="w-full py-2 rounded-lg bg-gray-700"
        >
          {secondaryPaused.data
            ? "Unpause Secondary Market"
            : "Pause Secondary Market"}
        </button>

        <button
          onClick={() =>
            togglePause("collector", !!feeCollectorPaused.data)
          }
          className="w-full py-2 rounded-lg bg-gray-700"
        >
          {feeCollectorPaused.data
            ? "Unpause Fee Collector"
            : "Pause Fee Collector"}
        </button>

        <div className="space-y-3 border-t border-red-500/30 pt-4">

  <div className="space-y-3 border-t border-red-500/30 pt-4">

  <select
    value={asset}
    onChange={(e) => setAsset(e.target.value as any)}
    className="w-full bg-black/40 p-2 rounded"
  >
    <option value="ECOIN">ECOIN</option>
    <option value="EUSD">EUSD</option>
  </select>

  <input
    placeholder="Amount to deposit"
    value={depositAmount}
    onChange={(e) => setDepositAmount(e.target.value)}
    className="w-full bg-black/40 p-2 rounded"
  />

  <button
    onClick={() =>
      asset === "ECOIN"
        ? depositEcoin(depositAmount)
        : depositEusd(depositAmount)
    }
    className="w-full py-2 bg-green-700 rounded"
  >
    Deposit
  </button>

  <input
    placeholder="Amount to withdraw"
    value={withdrawAmount}
    onChange={(e) => setWithdrawAmount(e.target.value)}
    className="w-full bg-black/40 p-2 rounded"
  />

  <button
    onClick={() =>
      asset === "ECOIN"
        ? withdrawEcoin(withdrawAmount)
        : withdrawEusd(withdrawAmount)
    }
    className="w-full py-2 bg-orange-700 rounded"
  >
    Withdraw
  </button>

</div>


</div>

      </div>
    </div>
  );
}
