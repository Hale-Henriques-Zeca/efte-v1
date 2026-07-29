'use client';

interface AgentSelectorProps {
  value: string;
  onChange: (val: string) => void;
}

const MOCK_AGENTS = [
  { id: '630033', name: 'Leader Hale', location: 'Nhamatanda', rating: '★★★★★', online: true },
  { id: '102030', name: 'Agente Central Beira', location: 'Beira', rating: '★★★★☆', online: true },
];

export default function AgentSelector({ value, onChange }: AgentSelectorProps) {
  const selectedAgent = MOCK_AGENTS.find((a) => a.id === value);

  return (
    <div className="space-y-2">
      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
        Agente ePay (ID)
      </label>
      <input
        type="text"
        placeholder="Digite o ID do Agente (Ex: Leader Hale)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white font-medium focus:outline-none focus:border-rose-500"
      />

      {selectedAgent && (
        <div className="bg-slate-950/60 border border-rose-500/30 rounded-xl p-3 flex items-center justify-between text-xs">
          <div>
            <span className="font-bold text-rose-400">{selectedAgent.name}</span>
            <span className="text-slate-400 ml-2">({selectedAgent.location})</span>
            <div className="text-amber-400 text-[10px]">{selectedAgent.rating}</div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold">
            Online
          </span>
        </div>
      )}
    </div>
  );
}