type PanelProps = {
  title?: string;
  children: React.ReactNode;
};

export default function Panel({ title, children }: PanelProps) {
  return (
    <section
      className="rounded-xl p-4 border"
      style={{
        backgroundColor: "var(--panel)",
        borderColor: "var(--border)",
      }}
    >
      {title && (
        <h3 className="mb-3 font-semibold text-sm uppercase tracking-wide">
          {title}
        </h3>
      )}

      {children}
    </section>
  );
}
