"use client";

type Props = {
  trend: "up" | "flat";
};

export default function MiniChart({ trend }: Props) {
  const strokeColor =
    trend === "up" ? "#1FA971" : "#9CA3AF"; // verde EFTE / cinza

  return (
    <div className="w-full h-12 mt-2 flex items-center">
      <svg
        viewBox="0 0 100 30"
        className="w-full h-full"
        fill="none"
        stroke={strokeColor}
        strokeWidth="2.8"
        preserveAspectRatio="none"
      >
        <polyline
          points={
            trend === "up"
              ? "0,22 10,20 20,18 30,19 40,15 50,13 60,14 70,10 80,8 90,6 100,4"
              : "0,15 20,15 40,15 60,15 80,15 100,15"
          }
        />
      </svg>
    </div>
  );
}
