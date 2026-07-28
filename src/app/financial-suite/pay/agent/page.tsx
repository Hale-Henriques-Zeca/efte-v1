// app/financial-suite/pay/agent/page.tsx
import Link from 'next/link';
import { 
  ArrowDownLeft, 
  ArrowUpRight, 
  ArrowRightLeft, 
  Coins, 
  Percent, 
  History, 
  User, 
  Map, 
  Star,
  UserPlus
} from 'lucide-react';

const agentActions = [
  { label: 'Abrir Conta Agente', href: '/financial-suite/pay/agent/register', icon: UserPlus, color: 'border-red-600 bg-red-950/20 text-red-500' },
  { label: 'Depósito (Comprar)', href: '/financial-suite/pay/agent/deposit', icon: ArrowDownLeft, color: 'border-emerald-600 bg-emerald-950/20 text-emerald-500' },
  { label: 'Levantamento (Vender)', href: '/financial-suite/pay/agent/withdraw', icon: ArrowUpRight, color: 'border-amber-600 bg-amber-950/20 text-amber-500' },
  { label: 'Transferir', href: '/financial-suite/pay/agent/transfer', icon: ArrowRightLeft, color: 'border-blue-600 bg-blue-950/20 text-blue-500' },
  { label: 'Weekly Pool', href: '/financial-suite/pay/agent/Salary', icon: Coins, color: 'border-purple-600 bg-purple-950/20 text-purple-500' },
  { label: 'Comissões', href: '/financial-suite/pay/agent/commissions', icon: Percent, color: 'border-emerald-500 bg-emerald-950/20 text-emerald-400' },
  { label: 'Histórico', href: '/financial-suite/pay/agent/history', icon: History, color: 'border-slate-600 bg-slate-900 text-slate-300' },
  { label: 'Perfil', href: '/financial-suite/pay/agent/profile', icon: User, color: 'border-amber-500 bg-amber-950/20 text-amber-400' },
  { label: 'Mapa de Agentes', href: '/financial-suite/pay/agent/map', icon: Map, color: 'border-green-600 bg-green-950/20 text-green-500' },
  { label: 'Reputação', href: '/financial-suite/pay/agent/reputation', icon: Star, color: 'border-yellow-500 bg-yellow-950/20 text-yellow-400' },
];

export default function AgentDashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-10">
      {/* Top Bar e Status */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-bold tracking-widest text-emerald-500 uppercase">Rede Presencial</span>
          <h1 className="text-3xl font-black">Painel do Agente ePay</h1>
        </div>
        <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl">
          <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-slate-300">Agente Ativo: <strong className="text-white">Leader Hale</strong></span>
        </div>
      </div>

      {/* Grid de Botões de Ação Prontos */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {agentActions.map((act, idx) => {
          const Icon = act.icon;
          return (
            <Link
              key={idx}
              href={act.href}
              className={`flex flex-col items-center justify-center p-6 rounded-2xl border ${act.color} hover:scale-105 transition-all duration-200 text-center gap-3 shadow-lg`}
            >
              <Icon className="w-8 h-8" />
              <span className="font-bold text-sm leading-snug">{act.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}