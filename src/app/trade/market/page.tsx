import OrderBook from "./OrderBook";
import Chart from "./Chart";
import MarketOrder from "./MarketOrder";
import HFTBot from "./HFTBot";
import TimingScore from "./TimingScore";

export default function MarketTrade() {
  return (
    <main
      className="min-h-screen pt-18 grid grid-cols-12 gap-4 p-4"
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
      }}
    >
      {/* ORDER BOOK */}
      <div className="col-span-3 space-y-4">
        <OrderBook />
      </div>

      {/* CHART */}
      <div className="col-span-6">
        <Chart />
      </div>

      {/* RIGHT PANEL */}
      <div className="col-span-3 space-y-4">
        <TimingScore />
        <MarketOrder />
        <HFTBot />
      </div>
    </main>
  );
}
