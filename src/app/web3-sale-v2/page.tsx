import { NetworkProvider } from "@/contexts/NetworkContext";
import { TradingWalletProvider } from "@/contexts/TradingWalletContext";
import Web3GatewayV2 from "@/components/hero/Web3HeroV2";


export default function Web3SalePageV2() {
return (
<NetworkProvider>
<TradingWalletProvider>
<Web3GatewayV2 />
</TradingWalletProvider>
</NetworkProvider>
);
}