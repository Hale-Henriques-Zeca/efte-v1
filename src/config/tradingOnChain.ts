import { bsc, bscTestnet } from "wagmi/chains";

export type NetworkKey = "testnet" | "mainnet";

export const NETWORKS = {
  testnet: {
    key: "testnet" as const,
    label: "BSC Testnet",
    chain: bscTestnet,
    contracts: {
  ECOIN: "0xDf69235019cc416dd5Be75dfc0eDc922aB4b5964",
  EUSD: "0xf6B07aa2FfB7A52B6f7cD7508598Ccaf224c6F1B",
  USDT: "COLOCA_O_USDT_TESTNET",

  PRICE_ENGINE_GLOBAL: "0x7Ac899eE2FDf5533Af1a1C0C2907d21536c87fDc",

  PRIMARY_SALE: "0x00C6A53c583CbEC68EAa83563A9021F6F527eea3",
  SECONDARY_MARKET: "0xeA46eb35545b72536FA928627080e7DCc90B9768",
  FEE_COLLECTOR: "0x18168d7978ecE599Aeaab46018C1F06132F4d375",
  REFERRAL: "0x145C226268Be10BE22b50DbFAE0f52c71535eA80",
    },
  },

  mainnet: {
    key: "mainnet" as const,
    label: "BSC Mainnet",
    chain: bsc,
    contracts: {
      PRICE_ENGINE: process.env.NEXT_PUBLIC_PRICE_ENGINE_MAINNET as `0x${string}`,
      ECOIN: process.env.NEXT_PUBLIC_ECOIN_MAINNET as `0x${string}`,
      EUSD: process.env.NEXT_PUBLIC_EUSD_MAINNET as `0x${string}`,
      USDT: process.env.NEXT_PUBLIC_USDT_MAINNET as `0x${string}`,
      PRIMARY_SALE: process.env.NEXT_PUBLIC_PRIMARY_SALE_MAINNET as `0x${string}`,
      SECONDARY_MARKET: process.env.NEXT_PUBLIC_SECONDARY_MARKET_MAINNET as `0x${string}`,
      FEE_COLLECTOR: process.env.NEXT_PUBLIC_FEE_COLLECTOR_MAINNET as `0x${string}`,
      REFERRAL: process.env.NEXT_PUBLIC_REFERRAL_MAINNET as `0x${string}`,
    },
  },
} as const;


