export default function Eyebrow({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 rounded-full px-4 py-2 mb-5 border ${
        dark ? "bg-white/10 border-white/10" : "bg-red-50 border-red-100"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-red-400" : "bg-red-500"} animate-pulse`} />
      <span
        className={`text-xs font-semibold uppercase tracking-[0.15em] ${
          dark ? "text-red-300" : "text-red-600"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
