export type EarnProduct = {
  id: string;
  type: "EARN" | "STAKING" | "DUAL" | "VAULT" | "INSURANCE" | "DONATION";
  apyRangePct: [number, number];
  lockDays?: number;
};
