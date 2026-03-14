export default function MobileChart() {
  return (
    <div className="p-3 border-b border-white/10">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold">BTC/USDT</span>
        <span className="text-green-400 text-sm">96,125.0</span>
      </div>

      <div className="h-[260px] rounded-lg border border-white/10 flex items-center justify-center text-white/40">
        Mobile Chart (TradingView)
      </div>

      <div className="flex justify-around text-xs text-white/60 mt-2">
        {["Chart", "Order Book", "Depth", "Trades"].map(tab => (
          <button key={tab}>{tab}</button>
        ))}
      </div>
    </div>
  );
}
