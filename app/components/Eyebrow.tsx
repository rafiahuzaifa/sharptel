export default function Eyebrow({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <div className="inline-flex items-center gap-3 mb-5">
      <span className={`h-px w-8 ${dark ? "bg-red-500" : "bg-red-600"}`} />
      <span
        className={`font-mono text-[11px] font-medium uppercase tracking-[0.25em] ${
          dark ? "text-red-400" : "text-red-600"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
