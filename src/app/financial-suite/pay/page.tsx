// app/financial-suite/pay/page.tsx
import Link from 'next/link';
import {
  Users,
  LayoutDashboard,
  Banknote,
  QrCode,
  MapPin,
  Fingerprint,
  ShieldCheck,
  ChartColumn,
} from "lucide-react";

const payModules = [
  {
    title: 'Personal Dashboard',
    desc: 'Visão geral do teu saldo, carteira e histórico de transações.',
    href: '/financial-suite/pay/dashboard',
    icon: LayoutDashboard,
    badge: 'Conta',
    color: 'from-amber-500 to-yellow-600',
  },
  {
    title: 'Agente ePay',
    desc: 'Rede presencial de depósitos, levantamentos e comissões.',
    href: '/financial-suite/pay/agent',
    icon: Users,
    badge: 'Popular',
    color: 'from-emerald-600 to-green-700',
  },
  {
    title: 'Crypto ATM',
    desc: 'Terminais automáticos de conversão de ativos digitais.',
    href: '/financial-suite/pay/atm',
    badge: 'Em Breve',
    icon: Banknote,
    color: 'from-red-600 to-red-700',
  },
  {
    title: 'Merchant Pay',
    desc: 'Pagamentos instantâneos com QR Code em comerciantes.',
    href: '/financial-suite/pay/merchant',
    badge: 'Em Breve',
    icon: QrCode,
    color: 'from-amber-600 to-yellow-500',
  },
  {
    title: 'Encontrar Agente',
    desc: 'Localiza agentes ePay mais próximos de ti em tempo real.',
    href: '/financial-suite/pay/agent/map',
    badge: 'Mapa',
    icon: MapPin,
    color: 'from-emerald-500 to-green-600',
  },
  {
    title: 'Blockchain Identity',
    desc: 'A tua identidade financeira imutável on-chain (NFT ID).',
    href: '/financial-suite/pay/identity',
    badge: 'Web3 ID',
    icon: Fingerprint,
    color: 'from-red-500 to-amber-600',
  },
  {
    title: 'KYC Center',
    desc: 'Verificação de conta on-chain e base de dados.',
    href: '/financial-suite/pay/kyc',
    badge: 'Segurança',
    icon: ShieldCheck,
    color: 'from-emerald-700 to-teal-700',
  },
  {
    title: 'Analytics',
    desc: 'Estatísticas e métricas do ecossistema ePay.',
    href: '/financial-suite/pay/analytics',
    badge: 'Métricas',
    icon: ChartColumn,
    color: 'from-amber-700 to-red-700',
  },
];

export default function PayMainPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-10">
      {/* Header com as cores da marca */}
      <div className="max-w-7xl mx-auto mb-10 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
          <span className="w-4 h-8 bg-red-600 rounded-sm"></span>
          <span className="w-4 h-8 bg-amber-500 rounded-sm"></span>
          <span className="w-4 h-8 bg-emerald-600 rounded-sm"></span>
          <h1 className="text-4xl font-extrabold tracking-tight ml-2">
            ePay <span className="text-amber-500">Suite</span>
          </h1>
        </div>
        <p className="text-slate-400 text-lg">
          A infraestrutura financeira descentralizada que conecta o dinheiro físico à Blockchain.
        </p>
      </div>

      {/* Grid de Cartões */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {payModules.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Link
              key={idx}
              href={item.href}
              className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-amber-400 border border-slate-700">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 flex items-center text-sm font-semibold text-emerald-500 group-hover:translate-x-1 transition-transform">
                Aceder módulo &rarr;
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}