"use client";

import { topCoins } from "./mockData";
import MiniChart from "./MiniChart";

export default function MarketCardsMobile() {
  return (
    <div className="md:hidden space-y-4">
      {topCoins.map((coin) => (
        <div
          key={coin.symbol}
          className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4"
        >
          <div className="flex justify-between items-center mb-2">
            <div>
              <p className="text-white font-semibold">
                {coin.name}
                <span className="ml-2 text-xs text-gray-400">
                  {coin.symbol}
                </span>
              </p>
              <p className="text-sm text-gray-400">{coin.price}</p>
            </div>

            <p className="text-sm text-emerald-400">
              {coin.change24h}
            </p>
          </div>

          <div className="my-3">
  <MiniChart trend={coin.chart} />
</div>


          <div className="mt-3 text-xs text-gray-400 flex justify-between">
            <span>Cap: {coin.marketCap}</span>
            <span>Vol: {coin.volume24h}</span>
          </div>

          <button className="mt-3 w-full text-sm text-blue-400 border border-blue-400/30 rounded-lg py-1">
            Trade
          </button>
        </div>
      ))}
    </div>
  );
}
