"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "../ui/Button";
import { useAccount, useConnect } from "wagmi";
import LanguageSelector from "@/components/language/components/dropdown/LanguageSelector";

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


  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const lang = localStorage.getItem("EKD_LANG") || "en";
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLangChange = (lang: string) => {
    localStorage.setItem("EKD_LANG", lang);
  };

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
          <Link href="/financial-suite/ePay/agent">ePay Agent</Link>
          <Link href="/eCoinCloudWallet">eCoin Wallet</Link>
          <Link href="/equipes">Team Leader</Link>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          {/* LANGUAGE */}
          <div className="border-l border-white/10 pl-3">
              <LanguageSelector onLangChange={handleLangChange} />
            </div>

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

            <Link href="/financial-suite/ePay/agent" onClick={() => setOpen(false)}>
              ePay Agent
            </Link>

            <Link href="/eCoinCloudWallet" onClick={() => setOpen(false)}>
              eCoin Wallet
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