"use client";

import { trendingSections } from "./mockData";

export default function MarketTrending() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-14">
      {trendingSections.map((section, i) => (
        <div
          key={i}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
        >
          <h4 className="text-lg font-semibold text-white">
            {section.title}
          </h4>
          <p className="text-sm text-gray-400 mb-4">
            {section.subtitle}
          </p>

          <div className="space-y-3">
            {section.coins.map((coin, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={coin.icon}
                    alt={coin.symbol}
                    className="w-7 h-7 rounded-full"
                  />
                  <div>
                    <p className="text-white text-sm font-medium">
                      {coin.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {coin.symbol}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-sm text-white">
                    {coin.price}
                  </p>
                  <p
                    className={`text-xs ${
                      coin.change.startsWith("+")
                        ? "text-emerald-400"
                        : "text-gray-400"
                    }`}
                  >
                    {coin.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
