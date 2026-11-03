export default function Eyebrow({ label, dark = false, field }: { label: string; dark?: boolean; field?: string }) {
  return (
    <div className="inline-flex items-center gap-3 mb-5">
      <span className={`h-px w-8 ${dark ? "bg-red-500" : "bg-red-600"}`} />
      <span
        data-cms-field={field}
        className={`font-mono text-[11px] font-medium uppercase tracking-[0.25em] ${
          dark ? "text-red-400" : "text-red-600"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
