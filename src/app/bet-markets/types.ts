export type BetSide = "UP" | "DOWN" | "IN_RANGE" | "OUT_RANGE" | "YES" | "NO";

export type BetMarket = {
  id: string;
  type: "DIRECTION" | "RANGE" | "EVENT" | "AI";
  asset: string;
  startsAtISO: string;
  endsAtISO: string;
  rules: string;
};

export type BetPool = {
  marketId: string;
  side: BetSide;
  liquidity: number;
};

export type UserBet = {
  marketId: string;
  side: BetSide;
  amount: number;
};

export type BetResult = {
  marketId: string;
  winningSide: BetSide;
  settledAtISO: string;
};
