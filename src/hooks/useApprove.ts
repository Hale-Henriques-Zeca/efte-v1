"use client";

import { useWriteContract } from "wagmi";
import { erc20Abi, parseUnits } from "viem";

export function useApprove() {
  const { writeContractAsync } = useWriteContract();

  async function approve(
    token: `0x${string}`,
    spender: `0x${string}`,
    amount: bigint
  ) {
    return writeContractAsync({
      address: token,
      abi: erc20Abi,
      functionName: "approve",
      args: [spender, amount],
    });
  }

  return { approve };
}
