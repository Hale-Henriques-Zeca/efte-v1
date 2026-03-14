// src/app/trading-market/types.ts

export type QuoteAsset = {
  symbol: string;      // Ex: "USDT"
  name?: string;       // Ex: "Tether"
  decimals?: number;   // Ex: 18
};

export type MarketPair = {
  id: string;          // Ex: "E-Coin_USDT"
  base: QuoteAsset;    // Ex: BTC
  quote: QuoteAsset;   // Ex: USDT
  status?: "active" | "paused" | "delisted";
};

export type MarketTicker = {
  pairId: string;      // Ex: "E-coin_USDT"
  last: number;        // Preço atual
  change24hPct: number;// Ex: +2.35 (%)
  high24h: number;
  low24h: number;
  volume24h: number;   // Volume em base ou quote (você decide depois)
  liquidityScore?: number; // 0..100 (opcional)
  volatilityScore?: number;// 0..100 (opcional)
};

export type MarketSentiment = {
  pairId?: string;          // opcional (sentimento pode ser global)
  score: number;            // 0..100
  label: "bearish" | "neutral" | "bullish";
  source: "EFTE_AI";        // fixa para evitar redes sociais
  updatedAtISO: string;     // timestamp
};

export type HeatmapCell = {
  pairId: string;
  value: number;            // Ex: change24hPct ou outra métrica
  intensity: number;        // 0..1 para UI
};

export type GainersLosers = {
  gainers: MarketTicker[];
  losers: MarketTicker[];
};

export type MarketOverview = {
  totalVolume24hUSD: number;
  avgLiquidityLabel: "Low" | "Medium" | "High";
  volatilityLabel: "Low" | "Moderate" | "High";
  top: GainersLosers;
  sentiment: MarketSentiment;
  heatmap?: HeatmapCell[];
};
