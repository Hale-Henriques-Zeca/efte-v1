"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaTelegramPlane,
  FaTelegram,
  FaWhatsapp,
  FaTwitter,
  FaDiscord,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0B0E14] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-10 md:grid-cols-4">

        {/* BRAND */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">EFTE</h3>
          <p className="text-sm opacity-70">
            O teu portal para a liberdade digital.
            <br />
            Compra cripto com segurança institucional e acesso Web3 direto.
          </p>
        </div>

        {/* PLATAFORMA */}
        <div>
          <h4 className="text-sm font-semibold mb-3 text-white">Plataforma</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/trade/market">AI Trading Bot Terminal</Link></li>
            <li><Link href="/trade">Trade OnChain</Link></li>
            <li><Link href="/equipes">Team Leader</Link></li>
          </ul>
        </div>

        {/* E-COIN SOCIAL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="text-sm font-semibold mb-3 text-[#D4AF37]">
            E-Coin Comunidade
          </h4>

          <div className="flex gap-4 text-2xl text-[#D4AF37]">
            <a href="https://t.me/ecoin2026" target="_blank"><FaTelegramPlane /></a>
            <a href="https://x.com/CoinE28810" target="_blank"><FaTwitter /></a>
            <a href="https://discord.com" target="_blank"><FaDiscord /></a>
            <a href="https://t.me/ecoin2025" target="_blank"><FaTelegram /></a>
            <a href="https://chat.whatsapp.com/G1F6USX5NrrLKikm7yiXXQ" target="_blank"><FaWhatsapp /></a>
          </div>
        </motion.div>

        {/* REDES SOCIAIS DO CEO */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
    Redes sociais do CEO
  </h3>
    <div className="flex gap-5 text-4xl">
                
                <a href="https://instagram.com/athelstanatanas" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-[#D4AF37] transition" />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-[#D4AF37] transition" />
                </a>
  
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="text-[#D4AF37] transition" /> 
                </a>    
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                  <FaTiktok className="text-[#D4AF37] transition" /> 
                </a>        
              
  </div>
</motion.div>

        {/* REDES SOCIAIS DA EDENKINGDOM */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
    Redes sociais da EdenKingDom
  </h3>

  <div className="flex flex-wrap gap-3">
    <a
      href="https://whatsapp.com/channel/0029VbBhPltJpe8j9HOdF501"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#D4AF37]/10 border border-[#D4AF37]/40 rounded-full px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37]/20 hover:shadow-[0_0_10px_#D4AF37aa] transition-all"
    >
      📢 Canal WhatsApp EKD Oficial
    </a>

    <div className="flex gap-2 text-2xl">
                <a href="https://t.me/EdenKingDom" target="_blank" rel="noopener noreferrer">
                  <FaTelegramPlane className="text-[#D4AF37] transition" />
                </a>
                <a href="https://instagram.com/edenkingdom.corp" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-[#D4AF37] transition" />
                </a>
                <a href="https://x.com/EdenkingdomCorp" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-[#D4AF37] transition" />
                </a>
                
                <a href="https://youtube.com/channel/UCA7ndIm6iUhybDU72KxcLKg" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="text-[#D4AF37] transition" />
                </a>

                <a href="https://discord.gg/HkNkSkBJ" target="_blank" rel="noopener noreferrer">
                  <FaDiscord className="text-[#D4AF37] transition" />
                </a>
                <a href="https://t.me/EKDCorp" target="_blank" rel="noopener noreferrer">
                            <FaTelegram className="text-[#D4AF37] transition" />
                          </a>
                <a href="https://chat.whatsapp.com/G1F6USX5NrrLKikm7yiXXQ" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="text-[#D4AF37] transition" /> 
                </a> 
                <a href="https://discord.com/users/1443996675638300834" target="_blank" rel="noopener noreferrer">
                  <FaDiscord className="text-[#D4AF37] transition" /> 
                </a>  
                <a href="https://facebook.com/share/p/17mv9drSUK" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="text-[#D4AF37] transition" /> 
                </a>    
                <a href="https://tiktok.com/@edenkingdomcorp2025" target="_blank" rel="noopener noreferrer">
                  <FaTiktok className="text-[#D4AF37] transition" /> 
                </a>        
              </div>
  </div>
</motion.div>

        {/* LEGAL */}
        <div>
          <h4 className="text-sm font-semibold mb-3 text-white">
            Legal & Status
          </h4>
          <p className="text-sm opacity-70">
            Plataforma em desenvolvimento contínuo.
            <br />
            Compra on-chain via Web3 já disponível.
          </p>
        </div>


      </div>

      

      {/* EXTRA COMMUNITY */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center gap-3 pb-6 text-[#D4AF37]"
      >
        <p className="text-sm text-gray-400">
          Conecte-se à comunidade global EFTE
        </p>

        <div className="flex gap-5 text-2xl">
          <a href="https://t.me/EdenKingDomBuyCrypto" target="_blank"><FaTelegramPlane /></a>
          <a href="https://t.me/edenkingdomexchange" target="_blank"><FaTelegram /></a>
          <a href="https://chat.whatsapp.com/Ge733s4ekK7IQrOWluwZlq" target="_blank"><FaWhatsapp /></a>
        </div>

        <BsStars className="text-3xl animate-pulse" />
      </motion.div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 py-4 text-center text-xs opacity-60">
        Since © 2025 – {new Date().getFullYear()} EdenKingDom Corporation — EFTE
      </div>
    </footer>
  );
}