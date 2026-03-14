"use client";

import { useReadContract } from "wagmi";
import { erc20Abi } from "viem";

export function useAllowance(
  token: `0x${string}`,
  owner?: `0x${string}`,
  spender?: `0x${string}`
) {
  return useReadContract({
    address: token,
    abi: erc20Abi,
    functionName: "allowance",
    args: owner && spender ? [owner, spender] : undefined,
    query: {
      enabled: !!owner && !!spender,
    },
  });
}
