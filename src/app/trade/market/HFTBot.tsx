import Panel from "@/components/ui/Panel";

export default function HFTBot() {
  return (
    <Panel title="HFT Bot (Premium)">
      <p className="text-sm text-[var(--text-muted)]">
        Automatização algorítmica com Portal Timing Score
      </p>

      <button
        className="mt-4 w-full rounded-md py-2 font-semibold"
        style={{
          backgroundColor: "var(--gold)",
          color: "#000",
        }}
      >
        Ativar Bot
      </button>
    </Panel>
  );
}
