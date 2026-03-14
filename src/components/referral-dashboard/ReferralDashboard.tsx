"use client";

import { useAccount } from "wagmi";
import { useState } from "react";
import { FiltersBar } from "./FiltersBar";
import { CommissionTable } from "./CommissionTable";
import { ClaimPanel } from "./ClaimPanel";
import { LiquidityPanel } from "./LiquidityPanel";
import { useReferral } from "@/hooks/useReferral";

export default function ReferralDashboard() {
  const { address, isConnected } = useAccount();
  const { records } = useReferral(); // 🔗 vem do contrato + events indexer
  const [query, setQuery] = useState("");

  if (!isConnected || !address) return null;

  const filtered = records?.filter((r:any)=>
    r.addr.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mt-20">

      {/* SALDOS REAIS */}
      <LiquidityPanel />

      <div className="grid lg:grid-cols-3 gap-6">

        {/* HISTORICO */}
        <div className="lg:col-span-2 space-y-6">
          <FiltersBar setQuery={setQuery}/>
          <CommissionTable records={filtered || []}/>
        </div>

        {/* CLAIM REAL */}
        <ClaimPanel/>

      </div>
    </div>
  );
}
