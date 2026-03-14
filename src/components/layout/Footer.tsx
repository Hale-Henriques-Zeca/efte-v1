import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="w-full border-t border-black/10"
      style={{ backgroundColor: "#0B0E14", color: "#E5E7EB" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">
            EFTE 
          </h3>
          <p className="text-sm opacity-70">
             O teu portal para a liberdade digital.
            <br />
            Compra cripto com segurança institucional e acesso Web3 direto.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="text-sm font-semibold mb-3 text-white">
            Plataforma
          </h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
             <Link href="/trade/market">P2P Trading Terminal</Link>
            </li>
            <li>
              <Link href="/trade">Abrir Terminal de Trading OnChain</Link>
            </li>
          </ul>
        </div>

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

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-4 text-center text-xs opacity-60">
        © {new Date().getFullYear()} EdenKingDom Corporation — EFTE
      </div>
    </footer>
  );
}
