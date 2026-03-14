import { NetworkProvider } from "@/contexts/NetworkContext";
import { TradingWalletProvider } from "@/contexts/TradingWalletContext";
import Web3Gateway from "@/components/hero/Web3Hero";

export default function Web3SalePage() {
  return (
    <NetworkProvider>
      <TradingWalletProvider>
        <Web3Gateway />
      </TradingWalletProvider>
    </NetworkProvider>
  );
}
