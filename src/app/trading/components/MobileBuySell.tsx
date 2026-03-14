export default function MobileBuySell() {
  return (
    <div className="p-4 border-b border-white/10">
      <div className="flex gap-2 mb-3">
        <button className="flex-1 bg-green-500 text-black py-2 rounded">
          Buy
        </button>
        <button className="flex-1 bg-red-500 text-black py-2 rounded">
          Sell
        </button>
      </div>

      <input
        className="w-full bg-[#0f172a] p-2 rounded border border-white/10 mb-2"
        placeholder="Price"
      />
      <input
        className="w-full bg-[#0f172a] p-2 rounded border border-white/10 mb-2"
        placeholder="Amount"
      />

      <button className="w-full bg-green-500 text-black py-2 rounded font-semibold">
        Buy E-Coin
      </button>
    </div>
  );
}
