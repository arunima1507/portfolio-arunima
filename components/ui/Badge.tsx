interface BadgeProps {
  label: string;
}

export default function Badge({ label }: BadgeProps) {
  return <span className="inline-flex rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">{label}</span>;
}
