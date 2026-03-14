"use client";

import { useWriteContract } from "wagmi";
import { ecoinPrimarySaleAbi } from "@/lib/abis/ecoinPrimarySaleAbi";

export function useBuyEcoin(primarySale: `0x${string}`) {
  const { writeContractAsync } = useWriteContract();

  async function buy(amount: bigint) {
    return writeContractAsync({
      address: primarySale,
      abi: ecoinPrimarySaleAbi,
      functionName: "buy",
      args: [amount],
    });
  }

  return { buy };
}
