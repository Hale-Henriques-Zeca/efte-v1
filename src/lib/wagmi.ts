import { createConfig, http } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";
import { injected, walletConnect } from "wagmi/connectors";

export const wagmiConfig = createConfig({
  chains: [bsc, bscTestnet], // ✅ AQUI ESTÁ A CHAVE
  connectors: [
    injected(),

    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
      showQrModal: true,
      metadata: {
        name: "EBC Exchange",
        description: "Web3 Gateway Oficial da EBC",
        url: "https://ebc.edenkingdom.org",
        icons: ["https://ebc.edenkingdom.org/logo-ebc.png"],
      },
    }),
  ],
  transports: {
    [bsc.id]: http(),
    [bscTestnet.id]: http(),
  },
});
