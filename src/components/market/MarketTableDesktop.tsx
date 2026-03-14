"use client";

import { topCoins } from "./mockData";
import MiniChart from "./MiniChart";

export default function MarketTableDesktop() {
  return (
    <div className="hidden md:block overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
      <table className="w-full text-sm text-left text-gray-300">
        <thead className="text-xs uppercase text-gray-400 border-b border-white/10">
          <tr>
            <th className="px-4 py-3">#</th>
            <th className="px-4 py-3">Coin</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">24H Change</th>
            <th className="px-4 py-3">24H Chart</th>
            <th className="px-4 py-3">Market Cap</th>
            <th className="px-4 py-3">24H Volume</th>
            <th className="px-4 py-3 text-right">Trade</th>
          </tr>
        </thead>

        <tbody>
          {topCoins.map((coin) => (
            <tr
              key={coin.symbol}
              className="border-b border-white/5 hover:bg-white/5 transition"
            >
              <td className="px-4 py-3">{coin.rank}</td>

              <td className="px-4 py-3 font-medium text-white">
                {coin.name}
                <span className="ml-2 text-xs text-gray-400">
                  {coin.symbol}
                </span>
              </td>

              <td className="px-4 py-3">{coin.price}</td>

              <td className="px-4 py-3 text-emerald-400">
                {coin.change24h}
              </td>

              <td className="px-4 py-3">
                <MiniChart trend={coin.chart} />
              </td>

              <td className="px-4 py-3">{coin.marketCap}</td>

              <td className="px-4 py-3">{coin.volume24h}</td>

              <td className="px-4 py-3 text-right">
                <button className="text-blue-400 hover:underline">
                  Trade
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
