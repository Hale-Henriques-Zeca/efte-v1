"use client";

import { topCoins } from "./mockData";

export default function MarketTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
      <table className="w-full text-sm text-left text-gray-300">
        <thead className="text-xs uppercase text-gray-400 border-b border-white/10">
          <tr>
            <th className="px-4 py-3">#</th>
            <th className="px-4 py-3">Coin</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">24H</th>
          </tr>
        </thead>
        <tbody>
          {topCoins.map((coin) => (
            <tr key={coin.rank} className="border-b border-white/5 hover:bg-white/5">
              <td className="px-4 py-3">{coin.rank}</td>
              <td className="px-4 py-3 font-medium text-white">
                {coin.name} <span className="text-gray-400">{coin.symbol}</span>
              </td>
              <td className="px-4 py-3">{coin.price}</td>
              <td className="px-4 py-3 text-green-400">{coin.change}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
