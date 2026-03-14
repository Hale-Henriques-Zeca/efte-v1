export default function OrdersHistory() {
  return (
    <div className="h-60 border-t border-white/10 p-4 text-xs">
      <h3 className="text-gray-400 mb-3">Open Orders</h3>

      <div className="grid grid-cols-4 text-gray-500">
        <span>Pair</span>
        <span>Side</span>
        <span>Price</span>
        <span>Amount</span>
      </div>

      <div className="mt-3 text-gray-400">
        No orders yet
      </div>
    </div>
  );
}
