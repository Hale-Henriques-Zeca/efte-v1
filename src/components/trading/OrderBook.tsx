export default function OrderBook() {
  return (
    <div className="flex-1 p-3 border-b border-white/10">
      <h3 className="text-sm text-gray-400 mb-2">Order Book</h3>
      <div className="text-xs space-y-1">
        <div className="text-red-400">129,276.49</div>
        <div className="text-red-400">125,783.89</div>
        <div className="text-green-400">118,076.37</div>
        <div className="text-green-400">114,618.59</div>
      </div>
    </div>
  );
}
