"use client";

import ChartArea from "@/app/trading/components/chartArea";
import MarketStats from "@/app/trading/components/marketStats";
import Tabs from "@/app/trading/components/tabs";
import TopBar from "@/app/trading/components/topBar";

export default function MarketTerminal() {
  return (
    <div className="space-y-4">

      {/* PAR */}
      <TopBar />

      {/* TABS */}
      <Tabs />

      {/* CHART */}
      <div className="rounded-xl overflow-hidden border border-white/10">
        <ChartArea />
      </div>

      {/* STATS */}
      <MarketStats />
    </div>
  );
}
