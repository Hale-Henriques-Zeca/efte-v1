export type LeverageTier = {
  level: number;          // Ex: 1x, 5x, 10x
  maxPositionUSD: number;
  requiresKYCLevel: number;
};

export type FuturesPosition = {
  pair: string;
  side: "long" | "short";
  leverage: number;
  entryPrice: number;
  markPrice: number;
  liquidationPrice: number;
  pnl: number;
};

export type FundingRate = {
  pair: string;
  ratePct: number;
  nextFundingISO: string;
};

export type MarginLoan = {
  asset: string;
  borrowedAmount: number;
  interestRatePct: number;
  mode: "isolated" | "cross";
};
