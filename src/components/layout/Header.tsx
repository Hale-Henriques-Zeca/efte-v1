"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useEffect, useState } from "react";


function shortAddress(addr?: string) {
  if (!addr) return "";
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
}

export default function Header() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  

  const injectedConnector = connectors.find(
    (c) => c.id === "injected"
  );

  return (
    <header
      className="fixed top-0 z-50 w-full backdrop-blur-md border-b border-black/10"
      style={{ backgroundColor: "rgba(255,255,255,0.85)" }}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo-ebc.png" alt="EBC" className="h-8 w-auto" />
          <span className="font-semibold text-[#1C2D5A]">EFTE</span>
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1C2D5A]">
          <Link href="/">Home</Link>
          <Link href="/trade/market">P2P</Link>
          <Link href="/trade">Abrir Terminal de Trading OnChain</Link>
        </nav>

        {/* WALLET */}
        <div className="flex items-center gap-3">
          {isConnected ? (
            <>
              <span
                className="text-sm font-semibold"
                style={{ color: "#1FA971" }}
              >
                {shortAddress(address)}
              </span> 
              

      
            </>
          ) : (
            <Button
              variant="gold"
              onClick={() =>
                injectedConnector &&
                connect({ connector: injectedConnector })
              }
            >
              {isPending ? "Conectando..." : "Conectar Wallet"}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
