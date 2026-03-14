"use client";

import { motion } from "framer-motion";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import Button from "@/components/ui/Button";
import { useChainId, useSwitchChain } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";
import { useBalance, useReadContract } from "wagmi";
import ReferralModalContent from "@/components/ReferralModalContent";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import TRADINGONCHAINAdminPanel from "@/components/TRADINGONCHAINAdminPanel";
import { useEffect, useState } from "react";
import {
  FaTelegramPlane,
  FaTelegram,
  FaWhatsapp,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import ConnectWalletButton from "@/components/ConnectWalletButton";
import { parseUnits, formatUnits } from "viem";
import { useTradingWallet } from "@/contexts/TradingWalletContext";
import { erc20Abi } from "@/lib/abis/erc20Abi";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { publicClient } from "@/lib/publicClient";
import { ecoinPrimarySaleAbi as primarySaleAbi } from "@/lib/abis/ecoinPrimarySaleAbi";
import { ecoinSecondaryMarketAbi as secondaryMarketAbi } from "@/lib/abis/ecoinSecondaryMarketAbi";
import { waitForTransactionReceipt, waitForBlock } from "viem/actions";
import MarketTerminal from "@/components/trading/MarketTerminal";
import { startMarketListener } from "@/lib/marketListener";




function shortAddress(addr?: string) {
  if (!addr) return "";
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
}

export default function Web3Gateway() {

  /* ===== CONTRACT ADDRESSES ===== */

const PRIMARY_SALE = process.env.NEXT_PUBLIC_PRIMARY_SALE_ADDRESS as `0x${string}`;
const SECONDARY_MARKET = process.env.NEXT_PUBLIC_SECONDARY_MARKET_ADDRESS as `0x${string}`;

const ECOIN = process.env.NEXT_PUBLIC_ECOIN_TESTNET as `0x${string}`;
const EUSD = process.env.NEXT_PUBLIC_EUSD_TESTNET as `0x${string}`;
const USDT = process.env.NEXT_PUBLIC_USDT_TESTNET as `0x${string}`;

  const [mode, setMode] = useState<"buy" | "sell">("buy");
  const [amount, setAmount] = useState("");          // ✅ AQUI
  const [mounted, setMounted] = useState(false);
  const { price, feeBP } = useTradingWallet();


  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  
const chainId = useChainId();
const { switchChainAsync } = useSwitchChain();
const { networkLabel, networkKey } = useTradingWallet();


// só aceita BSC Testnet ou Mainnet
const allowedChainIds = [bscTestnet.id, bsc.id];
const isWrongNetwork = isConnected && !allowedChainIds.includes(chainId);

const { balances, refresh } = useTradingWallet();

/* ===== ALLOWANCE ===== */

const allowanceRead = useReadContract({
  chainId,
  address: EUSD,
  abi: erc20Abi,
  functionName: "allowance",
  args: address ? [address, PRIMARY_SALE] : undefined,
  query: { enabled: !!address },
});

const allowance = (allowanceRead.data ?? 0n) as bigint;




const { writeContractAsync } = useWriteContract();
const [txHash, setTxHash] = useState<`0x${string}` | null>(null);
const [approving, setApproving] = useState(false);
const { isLoading, isSuccess } = useWaitForTransactionReceipt({
  hash: txHash ?? undefined,
});


async function handleBuyFlow() {
  if (!amountBN || amountBN === 0n || !address) return;

  try {
    setApproving(true);

    // checar allowance REAL direto da chain
    const allowanceOnchain = await publicClient.readContract({
      address: EUSD,
      abi: erc20Abi,
      functionName: "allowance",
      args: [address, PRIMARY_SALE],
    }) as bigint;

    // STEP 1 — APPROVE se necessário
    if (allowanceOnchain < amountBN) {
      const approveHash = await writeContractAsync({
        chainId,
        account: address,
        address: EUSD,
        abi: erc20Abi,
        functionName: "approve",
        args: [PRIMARY_SALE, amountBN],
      });

      await publicClient.waitForTransactionReceipt({ hash: approveHash });
    }

    // STEP 2 — BUY AUTOMÁTICO
    const buyHash = await writeContractAsync({
      chainId,
      account: address,
      address: PRIMARY_SALE,
      abi: primarySaleAbi,
      functionName: "buy",
      args: [amountBN],
    });

    setTxHash(buyHash);

  } catch (err) {
    console.error("BUY FLOW ERROR:", err);
  } finally {
    setApproving(false);
  }
}

async function debugBalance() {
  const balance = await publicClient.readContract({
    address: EUSD,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [address],
  });

  console.log("USER EUSD:", balance.toString());
}








async function handleSell() {
  if (!amountBN || amountBN === 0n || !address) return;

  try {
    const approveHash = await writeContractAsync({
      chainId,
      account: address, // 👈 AQUI
      address: ECOIN,
      abi: erc20Abi,
      functionName: "approve",
      args: [SECONDARY_MARKET, amountBN],
    });

    await publicClient.waitForTransactionReceipt({ hash: approveHash });

    const sellHash = await writeContractAsync({
      chainId,
      account: address, // 👈 AQUI
      address: SECONDARY_MARKET,
      abi: secondaryMarketAbi,
      functionName: "sell",
      args: [amountBN],
    });

    setTxHash(sellHash);

  } catch (e) {
    console.error("SELL failed:", e);
  }
}




/* 🔐 WALLET */
  const [panelOpen, setPanelOpen] = useState(false);

useEffect(() => {
startMarketListener();
}, []);

useEffect(() => {
  if (!isConnected) {
    setMode("buy");
    setAmount("");   // ✅ limpa o input
  }
}, [isConnected]);

   const [showModal, setShowModal] = useState(false);

   const TRADING_ON_CHAIN_OWNER =
  process.env.NEXT_PUBLIC_TRADING_ON_CHAIN_OWNER?.toLowerCase();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
   // quando a wallet conectar, abre o painel automaticamente
useEffect(() => {
  if (isConnected) {
    setPanelOpen(true);
  } else {
    setPanelOpen(false);
  }
}, [isConnected]);



  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isOwner =
  isConnected &&
  address &&
  TRADING_ON_CHAIN_OWNER &&
  address.toLowerCase() === TRADING_ON_CHAIN_OWNER;

 
  const amountBN = amount ? parseUnits(amount, 18) : 0n;
  const needsApproval = amountBN > 0n && allowance < amountBN;

let preview: {
  gross?: bigint;
  fee?: bigint;
  net?: bigint;
} = {};

if (amountBN > 0n && price > 0n) {
  if (mode === "buy") {
    const gross = (amountBN * 10n ** 18n) / price;
    const fee = (gross * BigInt(feeBP)) / 10_000n;
    const net = gross - fee;

    preview = { gross, fee, net };
  }

  if (mode === "sell") {
    const fee = (amountBN * BigInt(feeBP)) / 10_000n;
    const netEcoin = amountBN - fee;
    const stableOut = (netEcoin * price) / 10n ** 18n;

    preview = {
      gross: stableOut + fee,
      fee,
      net: stableOut,
    };
  }
}



  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-white">


{/* Background Image */}
<div className="absolute inset-0 -z-20">
<img
src="/edenverse/bg.jpg"
className="w-full h-full object-cover"
alt="EdenKingDom Verse"
/>
</div>


{/* Dark overlay */}
<div className="absolute inset-0 bg-black/60 -z-10" />

{/* MAIN METAVERSE GRID */}
<div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-10 px-6 items-center py-20">





{/* ================= BUY / SELL STATE ================= */}

{/* LEFT PANEL */}
<div className="
relative
bg-black/20
backdrop-blur-xl
border border-white/15
rounded-2xl
p-6
transition-all duration-500
hover:border-cyan-300/60
hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]
">

{isConnected && panelOpen && !isWrongNetwork && (
  <motion.div
    key="terminal"
    variants={fadeUp}
    initial="hidden"
    animate="visible"
    className="space-y-6"
  >
    <MarketTerminal />
  </motion.div>
)}

</div>



{/* CENTER PANEL */}
<div className="flex flex-col items-center justify-center text-center space-y-6">


<h1 className="text-6xl font-bold text-cyan-300 drop-shadow-[0_0_25px_rgba(34,211,238,0.8)]">
  EdenKingDom Verse
</h1>

<p className="text-xl text-cyan-100/80">
  Web3 Trading On-Chain Metaverse
</p>


{isConnected && (
  <p className="text-sm text-green-400">
    O sistema está conectado à carteira: {address?.slice(0,6)}…{address?.slice(-4)}
  </p>
)}

{/* 🔐 WALLET DESCONECTADA */}
{!isConnected && (
  <div className="space-y-6 text-center">

    <div className="text-sm tracking-widest text-[#D4AF37]">
      WEB3 ACCESS GATE
    </div>

    <h2 className="text-2xl font-bold text-white">
      Bem-vindo ao EdenKingDom Verse Web3
    </h2>

    <p className="text-sm text-gray-400 leading-relaxed">
      O seu portal para a liberdade digital.
      <br /><br />
      Uma nova terra onde os Edenitas se unem
      <br />
      e os E-Coiners constroem o seu futuro financeiro
      <br />
      com soberania, transparência
      <br />
      e tecnologia Web3.
    </p>

    <p className="text-xs text-gray-500">
      Trading On-Chain via Web3
    </p>

    <ConnectButton.Custom>
      {({ openConnectModal }) => (
        <button
          onClick={openConnectModal}
          className="w-full py-3 rounded-full font-bold
          bg-gradient-to-r from-[#D4AF37] to-[#3B82F6]"
        >
          Acessar a EdenKingDom Verse
        </button>
      )}
    </ConnectButton.Custom>

    <p className="text-xs text-gray-500">
      Conexão segura • Nenhuma permissão sem confirmação
    </p>
  </div>
)}
 
 {isOwner && (
  <div className="mt-12">
    <TRADINGONCHAINAdminPanel />
  </div>
)}

{/* INVITE */}
            <div className="text-center mt-16">
              <button
                onClick={() => setShowModal(true)}
                className="bg-gradient-to-r from-[#00FF9C] to-[#00C3FF] text-black font-bold py-3 px-10 rounded-full"
              >
                🎁 Convidar Amigos
              </button>
            </div>
      
            {showModal && (
              <div
                onClick={() => setShowModal(false)}
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="bg-[#0a0a0a] p-8 rounded-2xl border border-[#00FF9C]/30 w-[360px]"
                >
                  <h3 className="text-[#00FF9C] text-xl mb-4">
                    Referral System Dashboard
                  </h3>
      
                  <ReferralModalContent />

                </div>
              </div>
               
            )}
</div>

{/* ⛔ REDE ERRADA */}
{isConnected && isWrongNetwork && (
  <div className="space-y-4 text-center">
    <p className="text-sm text-yellow-400 font-semibold">
      Rede incorreta detectada
    </p>

    <p className="text-xs text-gray-400">
      Selecione uma rede suportada para continuar
    </p>

    <div className="flex gap-3 justify-center">
      <Button
        variant="secondary"
        onClick={async () => {
          await switchChainAsync({ chainId: bscTestnet.id });
        }}
      >
        BSC Testnet
      </Button>

      <Button
        variant="secondary"
        onClick={async () => {
          await switchChainAsync({ chainId: bsc.id });
        }}
      >
        BSC Mainnet
      </Button>
    </div>
  </div>
)}

{/* RIGHT PANEL */}
<div className="
relative
bg-black/20
backdrop-blur-xl
border border-white/15
rounded-2xl
p-6
transition-all duration-500
hover:border-cyan-300/60
hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]
">




{/* ✅ BUY / SELL OPERACIONAL */}
{isConnected && panelOpen && !isWrongNetwork && (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="visible"
    className="space-y-6 text-left"
  >

    <p className="text-sm text-green-400 font-semibold text-center">
  Sessão Ativa • {networkLabel}
</p>



    {/* BUY / SELL SWITCH */}
    <div className="flex rounded-full bg-black/50 border border-gray-700 overflow-hidden">
      <button
        onClick={() => setMode("buy")}
        className={`flex-1 py-2 font-bold ${
          mode === "buy"
            ? "bg-gradient-to-r from-[#22C55E] to-[#16A34A]"
            : "text-gray-400"
        }`}
      >
        BUY
      </button>
      <button
        onClick={() => setMode("sell")}
        className={`flex-1 py-2 font-bold ${
          mode === "sell"
            ? "bg-gradient-to-r from-[#EF4444] to-[#DC2626]"
            : "text-gray-400"
        }`}
      >
        SELL
      </button>
    </div>

    {/* AMOUNT */}
    <div className="bg-black/50 border border-gray-700 rounded-xl p-4">
      <label className="text-xs text-gray-300">
        {mode === "buy"
          ? "Amount to Pay (USDT / E-USD)"
          : "Amount to Sell (E-Coin)"}
      </label>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="0.00"
        className="w-full mt-2 bg-transparent outline-none text-2xl text-white"
      />
    </div>


{/* 🔍 PREVIEW */}
{preview.net !== undefined && (
  <div className="bg-black/40 border border-[#D4AF37]/30 rounded-xl p-4 space-y-2">
    <p className="text-xs text-gray-400">
      Preview da operação
    </p>

    <div className="flex justify-between text-sm">
      <span className="text-gray-400">Gross</span>
      <span className="text-white">
        {formatUnits(preview.gross!, 18)}
      </span>
    </div>

    <div className="flex justify-between text-sm">
      <span className="text-gray-400">Fee (0.30%)</span>
      <span className="text-red-400">
        {formatUnits(preview.fee!, 18)}
      </span>
    </div>

    <div className="flex justify-between text-sm font-semibold">
      <span className="text-gray-300">Net</span>
      <span className="text-[#D4AF37]">
        {formatUnits(preview.net!, 18)}
      </span>
    </div>
  </div>
)}

{isLoading && (
  <p className="text-xs text-yellow-400 text-center">
    ⛏️ Confirmando transação...
  </p>
)}

{isSuccess && (
  <p className="text-xs text-green-400 text-center">
    ✅ Transação confirmada!
  </p>
)}

    <button
  disabled={amountBN === 0n || approving || isLoading}
  onClick={mode === "buy" ? handleBuyFlow : handleSell}
  className={`w-full py-3 rounded-full font-bold ${
    mode === "buy"
      ? "bg-gradient-to-r from-[#22C55E] to-[#16A34A]"
      : "bg-gradient-to-r from-[#EF4444] to-[#DC2626]"
  }`}
>
  {approving
    ? "Processando..."
    : mode === "buy"
    ? "COMPRAR E-COIN"
    : "VENDER E-COIN"}
</button>





{/* Mini dashboard wallet */}
 {!isConnected ? (
  <ConnectButton label="Connect Wallet" showBalance={true} />
 
) : (
  <div className="flex items-center justify-between mt-2 gap-3 text-xs text-gray-400">
    <span className="text-sm text-gray-300">
      {address?.slice(0, 6)}…{address?.slice(-4)}
    </span>
    
  </div>
)}

{isConnected && balances && (
  <div className="text-sm text-gray-400 space-y-2 mt-4">
    <div>BNB: {Number(balances.bnb) / 1e18}</div>
    <div>E-Coin: {Number(balances.ecoin) / 1e18}</div>
    <div>E-USD: {Number(balances.eusd) / 1e18}</div>
    <div>USDT: {Number(balances.usdt) / 1e18}</div>
  </div>
)}



    {/* DISCONNECT */}
    <button
      onClick={() => {
        disconnect();
        setPanelOpen(false);
      }}
      className="w-full py-2.5 rounded-full font-semibold
      bg-gradient-to-r from-[#fc0000]"
    >
      Encerrar a EdenKingDom Verse
    </button>
    
  

    

          {/* 🌐 FOOTER */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.4 }}
 className="mt-12 flex flex-col items-center gap-3 text-[#D4AF37]"
>
  <p className="text-sm mb-3 text-gray-400">
    Conecte-se à comunidade EFTE
  </p>

  <div className="flex justify-center gap-5 text-2xl text-gray-300">
    <a href="https://t.me/EdenKingDomBuyCrypto" target="_blank"><FaTelegramPlane /></a>
    <a href="https://t.me/edenkingdomexchange" target="_blank"><FaTelegram /></a>
    <a href="https://chat.whatsapp.com/Ge733s4ekK7IQrOWluwZlq" target="_blank"><FaWhatsapp /></a>
  </div>

  <BsStars className="text-3xl mt-5 animate-pulse text-[#D4AF37]" />
</motion.div>

     </motion.div>
)}  
  
  </div>



</div>

    </section>
    
  );
}
