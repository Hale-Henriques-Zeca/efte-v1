import { useAccount, useWalletClient } from "wagmi";
import { publicClient } from "@/lib/publicClient";
import { referralAbi } from "@/lib/abis/referralAbi";
import { CONTRACTS } from "@/lib/contracts";
import { isAddress } from "viem";

export function useReferral() {
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();

   /* ===================== BIND ===================== */
  async function bindInviter(upline: string): Promise<void> {
    if (!walletClient || !address) {
      throw new Error("Wallet not connected");
    }

    if (!isAddress(upline)) {
      throw new Error("Invalid inviter address");
    }

    await walletClient.writeContract({
      address: CONTRACTS.REFERRAL,
      abi: referralAbi,
      functionName: "bindInviter",
      args: [upline],
    });
  }

  /* ===================== READ ===================== */
  async function getInviter(): Promise<string | null> {
    if (!address) return null;

    return publicClient.readContract({
      address: CONTRACTS.REFERRAL,
      abi: referralAbi,
      functionName: "inviterOf",
      args: [address],
    }) as Promise<string>;
  }

  async function getPendingRewards(): Promise<bigint> {
    if (!address) return 0n;

    return publicClient.readContract({
      address: CONTRACTS.REFERRAL,
      abi: referralAbi,
      functionName: "pendingRewards",
      args: [address],
    }) as Promise<bigint>;
  }


  /* ===================== CLAIM ===================== */
  async function claimRewards(): Promise<void> {
    if (!walletClient || !address) {
      throw new Error("Wallet not connected");
    }

    await walletClient.writeContract({
      address: CONTRACTS.REFERRAL,
      abi: referralAbi,
      functionName: "claim",
      args: [],
    });
  }

  return {
    bindInviter,        // ✅ AGORA EXISTE
    getInviter,
    getPendingRewards,
    claimRewards,
  };
}
