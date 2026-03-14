"use client";

import { useEffect, useState } from "react";
import { useReferral } from "@/hooks/useReferral";
import { useTradingWallet } from "@/contexts/TradingWalletContext";

export default function ReferralDashboard() {
  const { address, isConnected } = useTradingWallet();
  const { getInviter, getPendingRewards, claimRewards } = useReferral();

  const [inviter, setInviter] = useState<string | null>(null);
  const [pending, setPending] = useState<bigint>(0n);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isConnected) return;

    getInviter().then(setInviter);
    getPendingRewards().then(setPending);
  }, [isConnected]);

  if (!isConnected) {
    return (
      <p className="text-sm text-gray-400">
        Connect wallet to view referral rewards.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-400">
        <p>
          <strong>Your address:</strong><br />
          {address}
        </p>

        <p className="mt-2">
          <strong>Invited by:</strong><br />
          {inviter && inviter !== "0x0000000000000000000000000000000000000000"
            ? inviter
            : "No inviter bound"}
        </p>
      </div>

      <div className="bg-black/40 border border-[#00FF9C]/20 rounded-xl p-4">
        <p className="text-sm text-gray-400">Pending Rewards</p>
        <p className="text-xl font-bold text-[#00FF9C]">
          {(Number(pending) / 1e18).toFixed(6)} E-COIN
        </p>
      </div>

      <button
        disabled={pending === 0n || loading}
        onClick={async () => {
          try {
            setLoading(true);
            await claimRewards();
            setPending(0n);
          } finally {
            setLoading(false);
          }
        }}
        className={`w-full py-2 rounded-xl font-semibold transition ${
          pending === 0n
            ? "bg-gray-600 text-gray-300"
            : "bg-gradient-to-r from-[#00FF9C] to-[#00C3FF] text-black"
        }`}
      >
        {loading ? "Claiming..." : "Claim Rewards"}
      </button>
    </div>
  );
}
