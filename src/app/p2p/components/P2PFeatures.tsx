import { Users, ShieldCheck, Headphones } from "lucide-react";

export default function P2PFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto my-20">
      <Feature
        icon={<Users className="w-8 h-8 text-emerald-400" />}
        title="Direct P2P Trading"
        desc="Negociação direta entre utilizadores, sem intermediários ocultos."
      />
      <Feature
        icon={<ShieldCheck className="w-8 h-8 text-blue-400" />}
        title="Escrow & Custody"
        desc="Cripto bloqueado em custódia inteligente até a conclusão da transação."
      />
      <Feature
        icon={<Headphones className="w-8 h-8 text-purple-400" />}
        title="24×7 Dispute Support"
        desc="Sistema de resolução de disputas com suporte humano contínuo."
      />
    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 w-14 h-14 rounded-xl bg-black/40 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-semibold text-lg text-white">{title}</h3>
      <p className="text-gray-400 text-sm mt-2">{desc}</p>
    </div>
  );
}
