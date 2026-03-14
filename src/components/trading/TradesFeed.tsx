export default function TradesFeed() {
  return (
    <div className="flex-1 p-3 overflow-y-auto">
      <h3 className="text-xs text-gray-400 mb-2">Recent Trades</h3>

      <div className="space-y-1 text-xs">
        <div className="text-green-400">0.01231 BUY</div>
        <div className="text-red-400">0.01229 SELL</div>
        <div className="text-green-400">0.01233 BUY</div>
        <div className="text-red-400">0.01228 SELL</div>
      </div>
    </div>
  );
}
