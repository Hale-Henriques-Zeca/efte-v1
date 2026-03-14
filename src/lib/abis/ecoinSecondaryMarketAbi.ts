export const ecoinSecondaryMarketAbi = [
  {
    type: "function",
    name: "sell",
    stateMutability: "nonpayable",
    inputs: [{ name: "ecoinAmount", type: "uint256" }],
    outputs: [],
  },
  {
    type: "function",
    name: "paused",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "bool" }],
  },
  {
    type: "function",
    name: "withdrawEcoin",
    stateMutability: "nonpayable",
    inputs: [
      { name: "amount", type: "uint256" },
      { name: "to", type: "address" },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "withdrawStable",
    stateMutability: "nonpayable",
    inputs: [
      { name: "amount", type: "uint256" },
      { name: "to", type: "address" },
    ],
    outputs: [],
  },
  {
  type: "function",
  name: "addEcoinLiquidity",
  stateMutability: "nonpayable",
  inputs: [{ name: "amount", type: "uint256" }],
  outputs: [],
},
{
  type: "function",
  name: "addStableLiquidity",
  stateMutability: "nonpayable",
  inputs: [{ name: "amount", type: "uint256" }],
  outputs: [],
},
{
  type: "function",
  name: "pause",
  stateMutability: "nonpayable",
  inputs: [],
  outputs: [],
},
{
  type: "function",
  name: "unpause",
  stateMutability: "nonpayable",
  inputs: [],
  outputs: [],
},
{
  type: "function",
  name: "setMaxTradePercent",
  stateMutability: "nonpayable",
  inputs: [{ name: "_percent", type: "uint256" }],
  outputs: [],
},

] as const;
