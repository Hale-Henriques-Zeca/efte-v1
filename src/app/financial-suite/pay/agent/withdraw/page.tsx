import WithdrawForm from './Components/WithdrawForm/WithdrawForm';

export default function WithdrawPage() {
  return (
    <div className="max-w-2xl mx-auto p-4 md:p-6 space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-extrabold text-white tracking-wide">
          LEVANTAMENTO ePay
        </h1>
        <p className="text-slate-400 text-sm">
          Solicite o levantamento dos seus fundos através de um agente ePay credenciado.
        </p>
      </div>

      <WithdrawForm />
    </div>
  );
}