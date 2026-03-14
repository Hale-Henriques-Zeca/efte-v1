"use client";

import { useWriteContract } from "wagmi";
import { ecoinSecondaryMarketAbi } from "@/lib/abis/ecoinSecondaryMarketAbi";

export function useSellEcoin(secondaryMarket: `0x${string}`) {
  const { writeContractAsync } = useWriteContract();

  async function sell(amount: bigint) {
    return writeContractAsync({
      address: secondaryMarket,
      abi: ecoinSecondaryMarketAbi,
      functionName: "sell",
      args: [amount],
    });
  }

  return { sell };
}
