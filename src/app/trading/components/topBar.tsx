"use client";

import { useEcoinOracle } from "@/hooks/useEcoinOracle";
import { useEffect, useState } from "react";

export default function TopBar() {
  const { price, paused } = useEcoinOracle();

  const [lastPrice, setLastPrice] = useState<number>(0);
  const [trend, setTrend] = useState<"up" | "down" | "flat">("flat");

  useEffect(() => {
    if (!lastPrice) {
      setLastPrice(price);
      return;
    }

    if (price > lastPrice) setTrend("up");
    else if (price < lastPrice) setTrend("down");

    setLastPrice(price);
  }, [price]);

  return (
    <div className="h-14 flex items-center justify-between px-4 border-b border-white/10 backdrop-blur-xl">

      <div className="flex items-center gap-4">
        <span className="font-semibold tracking-wide">
          E-COIN / USDT
        </span>

        <span
          className={`text-sm font-semibold transition-colors duration-300 ${
            trend === "up"
              ? "text-green-400"
              : trend === "down"
              ? "text-red-400"
              : "text-yellow"
          }`}
        >
          {price.toFixed(6)}
        </span>

        {paused && (
          <span className="text-yellow-400 text-xs">
            ENGINE PAUSED
          </span>
        )}
      </div>

      <div className="text-xs text-white/60">
        Global Price Engine
      </div>
    </div>
  );
}
