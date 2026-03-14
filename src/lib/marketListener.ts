import { publicClient } from "@/lib/publicClient";
import { useMarketStore } from "@/store/marketStore";
import { parseUnits } from "viem";
import { primarySaleAbi } from "@/lib/abis/ecoinPrimarySaleAbi";
import { secondaryMarketAbi } from "@/lib/abis/ecoinSecondaryMarketAbi";

const PRIMARY = process.env.NEXT_PUBLIC_PRIMARY_SALE_ADDRESS as `0x${string}`;
const SECONDARY = process.env.NEXT_PUBLIC_SECONDARY_MARKET_ADDRESS as `0x${string}`;

export function startMarketListener() {
  const addTrade = useMarketStore.getState().addTrade;

  // BUY EVENTS
  publicClient.watchContractEvent({
    address: PRIMARY,
    abi: primarySaleAbi,
    eventName: "Bought",
    onLogs: (logs) => {
      logs.forEach((log: any) => {
        const amount = Number(log.args.amount) / 1e18;
        const price = Number(log.args.price) / 1e18;

        addTrade({
          price,
          amount,
          side: "buy",
          time: Date.now(),
        });
      });
    },
  });

  // SELL EVENTS
  publicClient.watchContractEvent({
    address: SECONDARY,
    abi: secondaryMarketAbi,
    eventName: "Sold",
    onLogs: (logs) => {
      logs.forEach((log: any) => {
        const amount = Number(log.args.amount) / 1e18;
        const price = Number(log.args.price) / 1e18;

        addTrade({
          price,
          amount,
          side: "sell",
          time: Date.now(),
        });
      });
    },
  });
}
