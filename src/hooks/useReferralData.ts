"use client";
import { useEffect, useState } from "react";

export function useReferralData(address?: string) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (!address) return;

    // depois aqui ligaremos ao contrato
    setData({
      directs: 35,
      total: 1592.63,
      today: 217.45,
      available: 483.5,
      claimed: 1109.95,
      liquidity: 0.219,
      records: [
        { date: "26/04/2024", addr: address, commission: 108.72, status: "Disponível" },
        { date: "26/04/2024", addr: address, commission: 83.50, status: "Pendente" },
        { date: "26/04/2024", addr: address, commission: 21.96, status: "Sacado" }
      ]
    });

  }, [address]);

  return data;
}
