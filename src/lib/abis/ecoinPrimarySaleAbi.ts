export const ecoinPrimarySaleAbi = [
  {
    type: "function",
    name: "buy",
    stateMutability: "nonpayable",
    inputs: [{ name: "stableAmount", type: "uint256" }],
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
    name: "FEE_BP",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "uint256" }],
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

  {
  "inputs": [
    { "internalType": "address", "name": "spender", "type": "address" },
    { "internalType": "uint256", "name": "allowance", "type": "uint256" },
    { "internalType": "uint256", "name": "needed", "type": "uint256" }
  ],
  "name": "ERC20InsufficientAllowance",
  "type": "error"
},

] as const;
