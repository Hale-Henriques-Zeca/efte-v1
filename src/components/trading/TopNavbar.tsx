"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function TopNavbar() {
  return (
    <div className="h-14 px-6 flex items-center justify-between border-b border-white/10 bg-[#0b0e11]">

      {/* LEFT */}
      <div className="flex items-center gap-6">
        <span className="font-bold text-lg text-[#1FA971]">EFTE</span>
        <span className="text-sm text-gray-400">Trade</span>
        <span className="text-sm text-gray-400">Markets</span>
        <span className="text-sm text-gray-400">Wallet</span>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <ConnectButton />
      </div>

    </div>
  );
}
