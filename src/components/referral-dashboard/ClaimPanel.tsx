"use client";

import { useMemo, useState } from "react";
import { useAccount, useBalance, useWriteContract } from "wagmi";
import { formatUnits } from "viem";
import { referralAbi } from "@/lib/abis/referralAbi";
import { useOnchainReferral } from "@/hooks/useOnchainReferral";

const REFERRAL_ADDRESS = "0xaEF4bA192B5F1A5C796596a522b8E50544b6850D";
const GAS_REQUIRED = 0.0006;

export function ClaimPanel() {
  const { address } = useAccount();
  const { pending, pendingRaw, refetch } = useOnchainReferral();
  const { writeContractAsync } = useWriteContract();
  const [loading, setLoading] = useState(false);

  const { data: bnb } = useBalance({ address });

  const bnbValue = bnb ? Number(bnb.formatted) : 0;

  const canClaim = useMemo(() => {
    return pending > 0 && bnbValue >= GAS_REQUIRED;
  }, [pending, bnbValue]);

  async function claim() {
    if (!canClaim) return;

    try {
      setLoading(true);

      await writeContractAsync({
        address: REFERRAL_ADDRESS,
        abi: referralAbi,
        functionName: "claim",
      });

      await refetch();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-black/40 border border-[#D4AF37]/20 rounded-xl p-6 space-y-4">

      <p className="text-gray-400">Ganhos disponíveis para saque</p>

      {/* E-Coin grande */}
      <p className="text-4xl font-bold text-[#D4AF37] tracking-wide">
        E-Coin {pending.toFixed(8)} 
      </p>

      {/* USD menor */}
      <p className="text-lg text-gray-400">
        ≈ ${(pending * 1).toFixed(2)}
      </p>

      {/* Gas status */}
      {!canClaim && (
        <div className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg p-3">
          Saldo BNB insuficiente para taxa de rede.
          <br />
          Necessário pelo menos <strong>{GAS_REQUIRED} BNB</strong>
        </div>
      )}

      {canClaim && (
        <div className="text-xs text-[#1E9B4B] bg-[#1E9B4B]/10 border border-[#1E9B4B]/20 rounded-lg p-3">
          Taxa de rede detectada — saque disponível.
        </div>
      )}

      <button
        onClick={claim}
        disabled={!canClaim || loading}
        className={`
          mt-2 w-full py-3 rounded-xl font-semibold transition-all
          ${canClaim
            ? "bg-[#D4AF37] text-black hover:brightness-110 active:scale-[0.98]"
            : "bg-gray-700/50 text-gray-400 cursor-not-allowed"}
        `}
      >
        {loading ? "Confirmando..." : "Sacar Agora"}
      </button>
    </div>
  );
}
