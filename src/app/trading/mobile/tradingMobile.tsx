import ChartArea from "../components/ChartArea";
import TradePanel from "../components/TradePanel";
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
