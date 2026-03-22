import ChartArea from "../components/chartArea";
import TradePanel from "../components/tradePanel";
import MarketStats from "../components/marketStats";

export default function TradingMobile() {
  return (
    <div className="min-h-screen bg-[#0b0e14] text-white flex flex-col">
      <MarketStats />
      <ChartArea />
      <TradePanel />
    </div>
  );
}
