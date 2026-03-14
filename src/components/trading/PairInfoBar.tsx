"use client";

export default function PairInfoBar() {
  return (
    <div className="h-12 flex items-center justify-between px-6 border-b border-white/10 bg-[#0e131a] text-sm">

      <div className="flex items-center gap-4">
        <span className="text-white font-semibold">ECOIN / EUSD</span>
        <span className="text-green-400">+2.14%</span>
      </div>

      <div className="flex items-center gap-6 text-gray-400">
        <span>24h High: 0.0134</span>
        <span>24h Low: 0.0098</span>
        <span>Volume: 1.24M</span>
      </div>

    </div>
  );
}
