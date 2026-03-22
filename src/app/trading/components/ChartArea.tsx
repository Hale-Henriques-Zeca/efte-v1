"use client";

import { useMarketStore } from "@/store/marketStore";
import { useEffect, useRef } from "react";
import {
  createChart,
  ColorType,
  CandlestickSeries,
} from "lightweight-charts";

export default function ChartArea() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<any>(null);
  const seriesRef = useRef<any>(null);

  // 🔴 STORE — SEMPRE NO TOPO
  const candles = useMarketStore((s) => s.candles);

  /* ---------------- CREATE CHART (RUN ONCE) ---------------- */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chart = createChart(container, {
      width: container.clientWidth,
      height: 520,
      layout: {
        background: { type: ColorType.Solid, color: "#0b0e14" },
        textColor: "#d1d4dc",
      },
      grid: {
        vertLines: { color: "rgba(255,255,255,0.05)" },
        horzLines: { color: "rgba(255,255,255,0.05)" },
      },
      rightPriceScale: { borderColor: "rgba(255,255,255,0.1)" },
      timeScale: { borderColor: "rgba(255,255,255,0.1)" },
    });

    chartRef.current = chart;

    seriesRef.current = chart.addSeries(CandlestickSeries, {
      upColor: "#22c55e",
      downColor: "#ef4444",
      borderUpColor: "#22c55e",
      borderDownColor: "#ef4444",
      wickUpColor: "#22c55e",
      wickDownColor: "#ef4444",
    });

    chart.timeScale().fitContent();

    const resizeObserver = new ResizeObserver(() => {
      if (!containerRef.current || !chartRef.current) return;
      chartRef.current.applyOptions({
        width: containerRef.current.clientWidth,
      });
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      chart.remove();
    };
  }, []);

  /* ---------------- UPDATE CANDLES (REALTIME) ---------------- */
  useEffect(() => {
    if (!seriesRef.current || candles.length === 0) return;

    const formatted = candles.map((c) => ({
      time: Math.floor(c.time / 1000),
      open: c.open,
      high: c.high,
      low: c.low,
      close: c.close,
    }));

    seriesRef.current.setData(formatted);
  }, [candles]);

  return (
    <div className="w-full h-full p-4">
      <div
        ref={containerRef}
        className="w-full h-[520px] rounded-xl border border-white/10"
      />
    </div>
  );
}
