// src/app/p2p/types.ts
// Tipos base do módulo P2P (EFTE)
// Mantém isto simples agora e expansível depois.

export type P2PSide = "buy" | "sell";
export type P2PStatus = "online" | "offline" | "busy";
export type P2PVerification = "none" | "basic" | "full";
export type P2PFiat = "MZN" | "USD" | "EUR" | "ZAR" | "BRL" |string;

export type P2PPaymentMethod =
  | "BankTransfer"
  | "M-Pesa"
  | "e-Mola"
  | "Card"
  | "Cash"
  | "PayPal"
  | "Revolut"
  | "Wise"
  | "Other";

export interface P2PAdvertiser {
  id: string;
  displayName: string;        // Nome público
  badge?: string;             // Ex: "Merchant", "Pro", "Verified"
  orders: number;             // Total de ordens
  completionRate: number;     // 0..100
  lastSeen?: string;          // Ex: "5 min ago" / ISO
  status: P2PStatus;
  verification: P2PVerification;
}

export interface P2POffer {
  id: string;
  side: P2PSide;              // buy/sell
  asset: string;              // USDT, BTC, ETH, ECOIN...
  fiat: P2PFiat;              // MZN, USD, EUR...
  unitPrice: number;          // preço por 1 unidade do asset na moeda fiat
  available: number;          // disponível do asset (ex: 105.21 USDT)
  minLimit: number;           // limite mínimo em fiat
  maxLimit: number;           // limite máximo em fiat
  paymentMethods: P2PPaymentMethod[];
  advertiser: P2PAdvertiser;
  feePercent?: number;        // Ex: 0 (Binance-style), 0.2, 1.0
  createdAt?: string;         // ISO
}

export interface P2PMarketStats {
  asset: string;              // USDT, BTC...
  fiat: P2PFiat;
  bestBuy?: number;           // melhor preço para comprar
  bestSell?: number;          // melhor preço para vender
  spread?: number;            // diferença % ou absoluto (opcional)
  volume24hFiat?: number;     // volume 24h na fiat
  offersCount?: number;       // número de anúncios
  updatedAt?: string;         // ISO
}
