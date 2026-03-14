"use client";

import { motion } from "framer-motion";
import { useAccount, useDisconnect, useChainId, useSwitchChain } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";
import { useEffect, useState } from "react";
import { parseUnits, formatUnits } from "viem";
import { useTradingWallet } from "@/contexts/TradingWalletContext";
import { useWriteContract, useWaitForTransactionReceipt, useReadContract } from "wagmi";
import { erc20Abi } from "@/lib/abis/erc20Abi";
import { publicClient } from "@/lib/publicClient";
import { ecoinPrimarySaleAbi as primarySaleAbi } from "@/lib/abis/ecoinPrimarySaleAbi";
import { ecoinSecondaryMarketAbi as secondaryMarketAbi } from "@/lib/abis/ecoinSecondaryMarketAbi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Web3OrderPanel() {

  /* CONTRACTS */
  const PRIMARY_SALE = process.env.NEXT_PUBLIC_PRIMARY_SALE_ADDRESS as `0x${string}`;
  const SECONDARY_MARKET = process.env.NEXT_PUBLIC_SECONDARY_MARKET_ADDRESS as `0x${string}`;
  const ECOIN = process.env.NEXT_PUBLIC_ECOIN_TESTNET as `0x${string}`;
  const EUSD = process.env.NEXT_PUBLIC_EUSD_TESTNET as `0x${string}`;

  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const chainId = useChainId();
  const { switchChainAsync } = useSwitchChain();

  const allowedChainIds = [bscTestnet.id, bsc.id];
  const isWrongNetwork = isConnected && !allowedChainIds.includes(chainId);

  const { price, feeBP, balances } = useTradingWallet();

  const [mode, setMode] = useState<"buy" | "sell">("buy");
  const [amount, setAmount] = useState("");

  const amountBN = amount ? parseUnits(amount, 18) : 0n;

  /* allowance */
  const allowanceRead = useReadContract({
    chainId,
    address: EUSD,
    abi: erc20Abi,
    functionName: "allowance",
    args: address ? [address, PRIMARY_SALE] : undefined,
    query: { enabled: !!address },
  });

  const allowance = (allowanceRead.data ?? 0n) as bigint;

  const { writeContractAsync } = useWriteContract();
  const [txHash, setTxHash] = useState<`0x${string}` | null>(null);
  const { isLoading, isSuccess } = useWaitForTransactionReceipt({
    hash: txHash ?? undefined,
  });

  /* BUY */
  async function handleBuy() {
    if (!amountBN || !address) return;

    const allowanceOnchain = await publicClient.readContract({
      address: EUSD,
      abi: erc20Abi,
      functionName: "allowance",
      args: [address, PRIMARY_SALE],
    }) as bigint;

    if (allowanceOnchain < amountBN) {
      const approveHash = await writeContractAsync({
        chainId,
        account: address,
        address: EUSD,
        abi: erc20Abi,
        functionName: "approve",
        args: [PRIMARY_SALE, amountBN],
      });
      await publicClient.waitForTransactionReceipt({ hash: approveHash });
    }

    const buyHash = await writeContractAsync({
      chainId,
      account: address,
      address: PRIMARY_SALE,
      abi: primarySaleAbi,
      functionName: "buy",
      args: [amountBN],
    });

    setTxHash(buyHash);
  }

  /* SELL */
  async function handleSell() {
    if (!amountBN || !address) return;

    const approveHash = await writeContractAsync({
      chainId,
      account: address,
      address: ECOIN,
      abi: erc20Abi,
      functionName: "approve",
      args: [SECONDARY_MARKET, amountBN],
    });

    await publicClient.waitForTransactionReceipt({ hash: approveHash });

    const sellHash = await writeContractAsync({
      chainId,
      account: address,
      address: SECONDARY_MARKET,
      abi: secondaryMarketAbi,
      functionName: "sell",
      args: [amountBN],
    });

    setTxHash(sellHash);
  }

  /* preview */
  let preview: any = {};
  if (amountBN > 0n && price > 0n) {
    if (mode === "buy") {
      const gross = (amountBN * 10n ** 18n) / price;
      const fee = (gross * BigInt(feeBP)) / 10_000n;
      preview.net = gross - fee;
      preview.fee = fee;
    } else {
      const fee = (amountBN * BigInt(feeBP)) / 10_000n;
      const stable = ((amountBN - fee) * price) / 10n ** 18n;
      preview.net = stable;
      preview.fee = fee;
    }
  }

  return (
    <div className="h-full flex flex-col gap-4 text-sm">

      {!isConnected && (
        <ConnectButton label="Connect Wallet" />
      )}

      {isWrongNetwork && (
        <div className="text-yellow-400 text-center">
          Rede incorreta
          <div className="flex gap-2 mt-2 justify-center">
            <button onClick={()=>switchChainAsync({chainId:bsc.id})} className="px-3 py-1 bg-gray-700 rounded">BSC</button>
            <button onClick={()=>switchChainAsync({chainId:bscTestnet.id})} className="px-3 py-1 bg-gray-700 rounded">Testnet</button>
          </div>
        </div>
      )}

      {isConnected && !isWrongNetwork && (
        <>
          <div className="flex rounded-lg overflow-hidden border border-gray-700">
            <button onClick={()=>setMode("buy")} className={`flex-1 py-2 ${mode==="buy"?"bg-green-600":""}`}>BUY</button>
            <button onClick={()=>setMode("sell")} className={`flex-1 py-2 ${mode==="sell"?"bg-red-600":""}`}>SELL</button>
          </div>

          <input
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            className="bg-[#0b0e11] border border-gray-700 rounded-lg p-3"
          />

          {preview.net && (
            <div className="text-xs text-gray-400 space-y-1">
              <div>Fee: {formatUnits(preview.fee,18)}</div>
              <div className="text-white font-bold">Receive: {formatUnits(preview.net,18)}</div>
            </div>
          )}

          <button
            onClick={mode==="buy"?handleBuy:handleSell}
            disabled={!amountBN || isLoading}
            className={`py-3 rounded-lg font-bold ${mode==="buy"?"bg-green-600":"bg-red-600"}`}
          >
            {isLoading ? "Confirmando..." : mode==="buy"?"Comprar":"Vender"}
          </button>

          {isSuccess && <div className="text-green-400 text-center">Transação confirmada</div>}

          {balances && (
            <div className="text-xs text-gray-400">
              <div>ECOIN: {Number(balances.ecoin)/1e18}</div>
              <div>EUSD: {Number(balances.eusd)/1e18}</div>
            </div>
          )}

          <button onClick={()=>disconnect()} className="text-xs text-red-400 mt-4">
            Disconnect
          </button>
        </>
      )}

    </div>
  );
}
