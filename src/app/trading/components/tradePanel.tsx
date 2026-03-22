export default function TradePanel() {
  return (
    <div className="h-full p-4 flex flex-col gap-3 text-sm">
      <div className="flex gap-2">
        <button className="flex-1 bg-green-500 text-black py-2 rounded">
          Buy
        </button>
        <button className="flex-1 bg-red-500 text-black py-2 rounded">
          Sell
        </button>
      </div>

      <input
        className="bg-[#0f172a] p-2 rounded border border-white/10"
        placeholder="Price"
      />
      <input
        className="bg-[#0f172a] p-2 rounded border border-white/10"
        placeholder="Amount"
      />

      <button className="mt-auto bg-green-500 text-black py-2 rounded font-semibold">
        Place Order
      </button>
    </div>
  );
}
