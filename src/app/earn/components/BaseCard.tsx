// src/app/earn/components/BaseCard.tsx
export default function BaseCard({ title, color, children }: {
  title: string;
  color?: "emerald" | "green" | "blue" | "teal" | "yellow" | "indigo" | "purple";
  children: React.ReactNode;
}) {
  const colorMap = {
    emerald: "text-emerald-400",
    green: "text-green-400",
    blue: "text-blue-400",
    teal: "text-teal-400",
    yellow: "text-yellow-400",
    indigo: "text-indigo-400",
    purple: "text-purple-400",
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-8 shadow-xl">
      <h3 className={`text-2xl font-bold mb-4 ${colorMap[color ?? "emerald"]}`}>
        {title}
      </h3>
      <p className="text-sm text-gray-300 leading-relaxed">
        {children}
      </p>
    </div>
  );
}
