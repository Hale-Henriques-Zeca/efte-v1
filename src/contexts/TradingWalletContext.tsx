"use client";

import { createContext, useContext, ReactNode, useMemo } from "react";
import { useBalance, useAccount, useReadContract, useChainId } from "wagmi";
import { erc20Abi } from "viem";
import { priceEngineAbi } from "@/lib/abis/priceEngineAbi";
import { NETWORKS, type NetworkKey } from "@/config/tradingOnChain";



type TradingWalletState = {
  address?: string;
  isConnected: boolean;

  networkKey: NetworkKey;
  networkLabel: string;

  balances: {
  bnb: bigint;
  ecoin: bigint;
  eusd: bigint;
  usdt: bigint;
};


  price: bigint; // ecoinPriceUSDT (1e18)
  feeBP: number;

  refresh: () => void;
};


const TradingWalletContext = createContext<TradingWalletState | null>(null);

export function TradingWalletProvider({ children }: { children: ReactNode }) {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();

  const active = useMemo(() => {
    return chainId === NETWORKS.mainnet.chain.id
      ? NETWORKS.mainnet
      : NETWORKS.testnet;
  }, [chainId]);

  const ecoin = useReadContract({
    address: active.contracts.ECOIN,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: { enabled: !!address },
  });

  const eusd = useReadContract({
    address: active.contracts.EUSD,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: { enabled: !!address },
  });

  const usdt = useReadContract({
    address: active.contracts.USDT,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: { enabled: !!address },
  });

  const price = useReadContract({
    address: active.contracts.PRICE_ENGINE_GLOBAL,
    abi: priceEngineAbi,
    functionName: "ecoinPriceUSDT",
  });

  const bnb = useBalance({
  address,
  query: { enabled: !!address },
});

  function refresh() {
  bnb.refetch();
  ecoin.refetch();
  eusd.refetch();
  usdt.refetch();
  price.refetch();
}


  return (
    <TradingWalletContext.Provider
      value={{
        address,
        isConnected,
        networkKey: active.key,
        networkLabel: active.label,
        balances: {
  bnb: bnb.data?.value ?? 0n,
  ecoin: ecoin.data ?? 0n,
  eusd: eusd.data ?? 0n,
  usdt: usdt.data ?? 0n,
},

        price: price.data ?? 0n,
        feeBP: 30,
        refresh,
      }}
    >
      {children}
    </TradingWalletContext.Provider>
  );
}

export function useTradingWallet() {
  const ctx = useContext(TradingWalletContext);
  if (!ctx) {
    throw new Error("useTradingWallet must be used inside TradingWalletProvider");
  }
  return ctx;
}
