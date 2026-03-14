// ==============================
// GLOBAL MARKET STATS
// ==============================
export const marketStats = [
  { label: "Market Cap", value: "$3.36T", change: "+1.56%" },
  { label: "24H Volume", value: "$75.5B" },
  { label: "E-Coin Dominance", value: "54.12%" },
  { label: "Coins", value: "28,217" },
  { label: "Fear & Greed", value: "40" },
];

// ==============================
// TOP COINS (TABLE + CARDS)
// ==============================
export const topCoins = [
  {
    rank: 1,
    symbol: "E-Coin",
    name: "EdenKingDom Coin",
    price: "$1091.71",
    change24h: "+6.20%",
    marketCap: "$1.82Q",
    volume24h: "$26.59T",
    chart: "up",
  },
  {
    rank: 2,
    symbol: "BTC",
    name: "Bitcoin",
    price: "$91,236.71",
    change24h: "+1.38%",
    marketCap: "$1.82T",
    volume24h: "$26.59B",
    chart: "up",
  },
  {
    rank: 3,
    symbol: "ETH",
    name: "Ethereum",
    price: "$3,139.50",
    change24h: "+1.15%",
    marketCap: "$378.82B",
    volume24h: "$12.64B",
    chart: "up",
  },
  {
    rank: 4,
    symbol: "USDT",
    name: "Tether",
    price: "$1.0005",
    change24h: "+0.15%",
    marketCap: "$187.17B",
    volume24h: "$62.87B",
    chart: "flat",
  },
  {
    rank: 5,
    symbol: "XRP",
    name: "XRP",
    price: "$2.1117",
    change24h: "+5.45%",
    marketCap: "$128.13B",
    volume24h: "$2.69B",
    chart: "up",
  },
  {
    rank: 6,
    symbol: "BNB",
    name: "BNB",
    price: "$887.91",
    change24h: "+1.38%",
    marketCap: "$122.25B",
    volume24h: "$1.65B",
    chart: "up",
  },
];

export const trendingSections = [
  {
    title: "Moedas Quentes",
    subtitle: "Tokens mais negociados",
    coins: [
      {
        name: "EdenKingDom Coin",
        symbol: "E-Coin",
        icon: "/coins/Ecoin.png",
        price: "$1091.71",
        change: "+6.20%",
      },
      {
        name: "Bitcoin",
        symbol: "BTC",
        icon: "/coins/Bitcoin-logo.png",
        price: "$91,236",
        change: "+1.38%",
      },
      {
        name: "Solana",
        symbol: "SOL",
        icon: "/coins/solana-logo.png",
        price: "$134.32",
        change: "+2.60%",
      },
    ],
  },
  {
    title: "Top Ganhadores",
    subtitle: "Maiores altas de hoje",
    coins: [
      {
        name: "EdenKingDom Coin",
        symbol: "E-Coin",
        icon: "/coins/Ecoin.png",
        price: "$1091.71",
        change: "+6.20%",
      },
      {
        name: "EdenKingDom Genesis",
        symbol: "E-Genesis",
        icon: "/coins/egenesis.png",
        price: "$0.84",
        change: "+4.10%",
      },
    ],
  },
  {
    title: "Listados na EFTE Exchange",
    subtitle: "Tokens do ecossistema EFE",
    coins: [
      {
        name: "EdenKingDom Coin",
        symbol: "E-Coin",
        icon: "/coins/Ecoin.png",
        price: "$1091.71",
        change: "+6.20%",
      },
      {
        name: "EdenKingDom USD",
        symbol: "E-USD",
        icon: "/coins/eusd.png",
        price: "$1.00",
        change: "0.00%",
      },
      {
        name: "EdenKingDom Genesis",
        symbol: "E-Genesis",
        icon: "/coins/egenesis.png",
        price: "$0.84",
        change: "+4.10%",
      },
    ],
  },
];
