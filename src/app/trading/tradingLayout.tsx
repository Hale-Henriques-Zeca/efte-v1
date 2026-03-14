"use client";

import { useEffect, useState } from "react";
import TradingMobile from "./mobile/TradingMobile";
import TradingDesktop from "./desktop/TradingDesktop";

export default function TradingLayout() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile ? <TradingMobile /> : <TradingDesktop />;
}
