import { create } from "zustand";

export type Trade = {
  price: number;
  amount: number;
  time: number;
  side: "buy" | "sell";
};

export type Candle = {
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  time: number;
};

type MarketState = {
  trades: Trade[];
  candles: Candle[];
  addTrade: (trade: Trade) => void;
};

export const useMarketStore = create<MarketState>((set, get) => ({
  trades: [],
  candles: [],

  addTrade: (trade) => {
    const trades = [...get().trades, trade];

    // timeframe 5s (depois podes mudar pra 1m)
    const bucket = Math.floor(trade.time / 5000) * 5000;

    let candles = [...get().candles];
    let candle = candles[candles.length - 1];

    if (!candle || candle.time !== bucket) {
      candle = {
        open: trade.price,
        high: trade.price,
        low: trade.price,
        close: trade.price,
        volume: trade.amount,
        time: bucket,
      };
      candles.push(candle);
    } else {
      candle.high = Math.max(candle.high, trade.price);
      candle.low = Math.min(candle.low, trade.price);
      candle.close = trade.price;
      candle.volume += trade.amount;
    }

    set({ trades, candles });
  },
}));
