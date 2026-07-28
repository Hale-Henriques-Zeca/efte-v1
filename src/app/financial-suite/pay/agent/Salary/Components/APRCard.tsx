// app/financial-suite/pay/agent/Salary/Components/APRCard.tsx
interface Props {
  poolName: string;
  apr: string;
  color: string;
}

export default function APRCard({ poolName, apr, color }: Props) {
  return (
    <div className={`bg-slate-900 border-l-4 ${color} border-y border-r border-slate-800 p-5 rounded-xl`}>
      <span className="text-xs text-slate-400 font-semibold">{poolName}</span>
      <div className="text-3xl font-black text-white mt-1">{apr} <span className="text-xs text-slate-400 font-normal">/ semana</span></div>
    </div>
  );
}