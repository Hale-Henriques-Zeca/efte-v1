import Panel from "@/components/ui/Panel";

export default function MarketOrder() {
  return (
    <Panel title="Market Order">
      <div className="space-y-4">
        <input
          className="w-full rounded-md p-2 border"
          style={{
            backgroundColor: "var(--bg)",
            borderColor: "var(--border)",
            color: "var(--text)",
          }}
          placeholder="Preço"
        />

        <input
          className="w-full rounded-md p-2 border"
          style={{
            backgroundColor: "var(--bg)",
            borderColor: "var(--border)",
            color: "var(--text)",
          }}
          placeholder="Quantidade"
        />

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
