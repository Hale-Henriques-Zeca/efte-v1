"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { NETWORKS } from "@/config/networks";

type NetworkKey = "testnet" | "mainnet";

type NetworkContextType = {
  network: NetworkKey;
  setNetwork: (n: NetworkKey) => void;
  config: typeof NETWORKS.testnet;
};

const NetworkContext = createContext<NetworkContextType | null>(null);

export function NetworkProvider({ children }: { children: ReactNode }) {
  const [network, setNetwork] = useState<NetworkKey>("testnet");

  const config = NETWORKS[network];

  return (
    <NetworkContext.Provider value={{ network, setNetwork, config }}>
      {children}
    </NetworkContext.Provider>
  );
}

export function useNetwork() {
  const ctx = useContext(NetworkContext);
  if (!ctx) {
    throw new Error("useNetwork must be used inside NetworkProvider");
  }
  return ctx;
}
