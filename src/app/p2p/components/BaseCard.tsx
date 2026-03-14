import React from "react";

const colorMap = {
  emerald: "text-emerald-400",
  blue: "text-blue-400",
  purple: "text-purple-400",
  yellow: "text-yellow-400",
  red: "text-red-400",
};

export default function BaseCard({
  title,
  color = "emerald",
  children,
}: {
  title: string;
  color?: keyof typeof colorMap;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-8 shadow-xl">
      <h3 className={`text-2xl font-extrabold mb-4 ${colorMap[color]}`}>
        {title}
      </h3>
      <div className="text-sm text-gray-300 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
