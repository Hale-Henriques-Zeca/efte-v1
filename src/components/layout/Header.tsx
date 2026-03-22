"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "../ui/Button";
import { useAccount, useConnect } from "wagmi";

function shortAddress(addr?: string) {
  if (!addr) return "";
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
}

export default function Header() {
  const [open, setOpen] = useState(false);

  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();

  const injectedConnector = connectors.find(
    (c) => c.id === "injected"
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-black/10">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo-ebc.png" alt="EBC" className="h-8 w-auto" />
          <span className="font-semibold text-[#1C2D5A]">EFTE</span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1C2D5A]">
          <Link href="/">Home</Link>
          <Link href="/trade/market">AI Trading Bot</Link>
          <Link href="/trade">Trade OnChain</Link>
          <Link href="/equipes">Team Leader</Link>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          {/* WALLET */}
          {isConnected ? (
            <span className="text-sm font-semibold text-green-600">
              {shortAddress(address)}
            </span>
          ) : (
            <Button
              variant="gold"
              onClick={() =>
                injectedConnector &&
                connect({ connector: injectedConnector })
              }
            >
              {isPending ? "Conectando..." : "Conectar"}
            </Button>
          )}

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-white border-t flex flex-col items-center py-6 gap-5 md:hidden z-50">

            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/trade/market" onClick={() => setOpen(false)}>
              AI Trading Bot
            </Link>

            <Link href="/trade" onClick={() => setOpen(false)}>
              Trade OnChain
            </Link>

            <Link href="/equipes" onClick={() => setOpen(false)}>
              Team Leader
            </Link>

          </div>
        )}
      </nav>
    </header>
  );
}