"use client";

import { useAccount, useReadContract } from "wagmi";
import { formatUnits } from "viem";
import { referralAbi } from "@/lib/abis/referralAbi";

const REFERRAL_ADDRESS = "0x145C226268Be10BE22b50DbFAE0f52c71535eA80";

export function useOnchainReferral() {
  const { address } = useAccount();

  const { data: pendingRaw, refetch } = useReadContract({
    address: REFERRAL_ADDRESS,
    abi: referralAbi,
    functionName: "pendingRewards",
    args: address ? [address] : undefined,
    query: { enabled: !!address },
  });

  const pending = pendingRaw
    ? Number(formatUnits(pendingRaw as bigint, 18))
    : 0;

  return {
    pending,
    pendingRaw,
    refetch,
  };
}


