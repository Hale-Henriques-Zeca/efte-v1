export default function OrderBook() {
  return (
    <div className="h-full flex flex-col text-xs">
      <div className="p-2 font-semibold border-b border-white/10">
        Order Book
      </div>

      <div className="flex-1 overflow-y-auto">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="flex justify-between px-2 py-0.5 text-red-400"
          >
            <span>96,14{i}</span>
            <span>{(Math.random() * 2).toFixed(4)}</span>
          </div>
        ))}

        <div className="my-2 border-t border-white/10" />

        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="flex justify-between px-2 py-0.5 text-green-400"
          >
            <span>96,12{i}</span>
            <span>{(Math.random() * 3).toFixed(4)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
