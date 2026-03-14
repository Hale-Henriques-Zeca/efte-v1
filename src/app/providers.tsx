"use client";

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { wagmiConfig } from "@/lib/wagmi";
import { TradingWalletProvider } from "@/contexts/TradingWalletContext";

import "@rainbow-me/rainbowkit/styles.css";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>

          {/* ⭐ AQUI ESTÁ O QUE FALTA */}
          <TradingWalletProvider>
            {children}
          </TradingWalletProvider>

        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
