import TopBar from "../components/TopBar";
import OrderBook from "../components/OrderBook";
import ChartArea from "../components/ChartArea";
import TradePanel from "../components/TradePanel";


export default function TradingDesktop() {
  return (
    <div className="h-screen bg-[#0b0e14] text-white flex flex-col">
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        <div className="w-[320px] border-r border-white/10">
          <OrderBook />
        </div>

        <div className="flex-1">
          <ChartArea />
        </div>

        <div className="w-[360px] border-l border-white/10">
          <TradePanel />
        </div>
      </div>
    </div>
  );
}
