import Panel from "@/components/ui/Panel";


export default function TimingScore() {
  return (
    <Panel title="Portal Timing Score">
      <div
        className="text-2xl font-bold"
        style={{ color: "var(--green)" }}
      >
        87
      </div>

      <p className="text-sm opacity-70">
        Janela ótima de entrada
      </p>
    </Panel>
  );
}

