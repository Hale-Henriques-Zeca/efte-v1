"use client";

import { useEffect, useRef } from "react";

export default function TradingChart() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      new (window as any).TradingView.widget({
        autosize: true,
        symbol: "BINANCE:BTCUSDT",
        interval: "15",
        theme: "dark",
        container_id: ref.current,
      });
    };
    document.body.appendChild(script);
  }, []);

  return <div ref={ref} className="flex-1" />;
}
