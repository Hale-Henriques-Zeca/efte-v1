export type AISignal = {
  asset: string;
  probabilityPct: number;
  scenario: "bullish" | "neutral" | "bearish";
};

export type GovernanceRule = {
  key: string;
  value: number | string;
  scope: "fees" | "markets" | "limits";
};
