"use client";

import { motion } from "framer-motion";
import { marketStats } from "./mockData";

export default function MarketStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
      {marketStats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 text-center"
        >
          <p className="text-xs text-gray-400">{stat.label}</p>
          <p className="text-lg font-semibold text-white">{stat.value}</p>
          {stat.change && (
            <p className="text-xs text-green-400">{stat.change}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
