"use client";

import TopNavbar from "./TopNavbar";
import PairInfoBar from "./PairInfoBar";
import TradingChart from "./TradingChart";
import OrderBook from "./OrderBook";
import TradesFeed from "./TradesFeed";
import OrdersHistory from "./OrdersHistory";
import PortfolioPanel from "./PortfolioPanel";
import Web3OrderPanel from "./Web3OrderPanel";
import ThemeSwitcher from "./ThemeSwitcher";

export default function TradeLayout() {
  return (
    <div className="w-full h-screen flex flex-col bg-[#0b0e11] text-white">

      <TopNavbar />

      <PairInfoBar />

      <div className="grid grid-cols-12 flex-1 overflow-hidden">

        {/* LEFT ORDER PANEL */}
        <div className="col-span-3 border-r border-white/10">
          <Web3OrderPanel />
        </div>

        {/* CENTER CHART */}
        <div className="col-span-6 flex flex-col">
          <TradingChart />
          <OrdersHistory />
        </div>

        {/* RIGHT BOOK */}
        <div className="col-span-3 border-l border-white/10 flex flex-col">
          <OrderBook />
          <TradesFeed />
        </div>

      </div>

      <PortfolioPanel />

      <ThemeSwitcher />

    </div>
  );
}
