export default function Tabs() {
  return (
    <div className="flex gap-4 px-4 text-sm border-b border-white/10">
      {["Chart", "Order Book", "Depth", "Trades"].map(tab => (
        <button
          key={tab}
          className="py-2 text-white/70 hover:text-white"
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
