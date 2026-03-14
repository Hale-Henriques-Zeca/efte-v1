import Panel from "@/components/ui/Panel";

export default function LimitOrder() {
  return (
    <Panel title="Limit Order">
      <div className="space-y-4">
        <input className="w-full rounded-md p-2" placeholder="Preço" />
        <input className="w-full rounded-md p-2" placeholder="Quantidade" />

        <button
          className="w-full rounded-md py-2 font-semibold text-white"
          style={{ backgroundColor: "var(--green)" }}
        >
          Criar Ordem
        </button>
      </div>
    </Panel>
  );
}
