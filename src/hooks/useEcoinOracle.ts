"use client";

import { useReadContract, useWatchContractEvent } from "wagmi";
import { priceEngineAbi } from "@/lib/abis/priceEngineAbi";
import { formatUnits } from "viem";
import { useState, useEffect } from "react";

const PRICE_ENGINE =
  process.env.NEXT_PUBLIC_PRICE_ENGINE_GLOBAL as `0x${string}`;

export function useEcoinOracle() {
  const [price, setPrice] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);

  /* ================= READ INITIAL PRICE ================= */

  const { data, refetch } = useReadContract({
    address: PRICE_ENGINE,
    abi: priceEngineAbi,
    functionName: "ecoinPriceUSDT",
  });

  const pausedRead = useReadContract({
    address: PRICE_ENGINE,
    abi: priceEngineAbi,
    functionName: "paused",
  });

  /* ================= INITIAL SYNC ================= */

  useEffect(() => {
    if (data) setPrice(Number(formatUnits(data as bigint, 18)));
  }, [data]);

  useEffect(() => {
    if (pausedRead.data !== undefined) setPaused(pausedRead.data as boolean);
  }, [pausedRead.data]);

  /* ================= REALTIME EVENT ================= */

  useWatchContractEvent({
    address: PRICE_ENGINE,
    abi: [
      {
        type: "event",
        name: "PriceUpdated",
        inputs: [
          { name: "oldPrice", type: "uint256", indexed: false },
          { name: "newPrice", type: "uint256", indexed: false },
        ],
      },
    ],
    eventName: "PriceUpdated",
    onLogs(logs) {
      const newPrice = logs[0].args.newPrice as bigint;
      setPrice(Number(formatUnits(newPrice, 18)));
    },
  });

  return { price, paused };
}


