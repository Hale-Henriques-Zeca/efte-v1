"use client";
export function StatsCards({ data }: any) {
  if (!data) return null;

  const Card = ({ title, value, sub }: any) => (
    <div className="rounded-xl border border-efte-gold/20 bg-black/40 p-6">
      <p className="text-sm text-gray-400">{title}</p>
      <p className="text-2xl font-bold text-efte-gold">{value}</p>
      {sub && <p className="text-efte-green text-sm">{sub}</p>}
    </div>
  );

  return (
    <div className="grid md:grid-cols-4 gap-4 mb-8">
      <Card title="Referidos Diretos" value={data.directs} />
      <Card title="Total em Comissões" value={`$${data.total}`} sub={`+${data.today} hoje`} />
      <Card title="Saque Disponível" value={`$${data.available}`} />
      <Card title="Total Já Sacado" value={`$${data.claimed}`} />
    </div>
  );
}
