export const tradingFeeCollectorAbi = [
  {
    "inputs": [
      { "internalType": "address", "name": "user", "type": "address" },
      { "internalType": "uint256", "name": "feeAmount", "type": "uint256" }
    ],
    "name": "collectFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;
