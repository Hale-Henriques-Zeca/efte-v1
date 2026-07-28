// app/financial-suite/pay/agent/deposit/page.tsx
import DepositForm from './Components/DepositForm/DepositForm';

export default function AgentDepositPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8 flex justify-center items-center">
      <div className="w-full max-w-2xl">
        <div className="mb-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-emerald-500">Depósito via Agente ePay</h1>
          <p className="text-slate-400 text-sm mt-1">Converte moeda local em ativos digitais instantaneamente.</p>
        </div>
        <DepositForm />
      </div>
    </div>
  );
}