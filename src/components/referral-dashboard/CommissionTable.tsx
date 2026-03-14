"use client";
export function CommissionTable({ records }: any) {
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-black/60 text-gray-400">
          <tr>
            <th className="p-3 text-left">Data</th>
            <th className="p-3 text-left">Endereço</th>
            <th className="p-3 text-left">Comissão</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r: any, i: number) => (
            <tr key={i} className="border-t border-white/5">
              <td className="p-3">{r.date}</td>
              <td className="p-3 font-mono text-efte-blue">
                {r.addr.slice(0,6)}...{r.addr.slice(-4)}
              </td>
               <td className="p-3 text-efte-gold">{r.commission} E-Coin</td>
              <td className="p-3 text-efte-gold">${r.commission}</td>
              <td className="p-3">
                <span className={`px-2 py-1 rounded text-xs ${
                  r.status==="Disponível" ? "bg-efte-green/20 text-efte-green":
                  r.status==="Pendente" ? "bg-yellow-500/20 text-yellow-400":
                  "bg-gray-600/30 text-gray-300"
                }`}>
                  {r.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
