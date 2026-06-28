interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="space-y-3 text-center sm:text-left">
      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Section</p>
      <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
      <p className="max-w-xl text-sm leading-6 text-muted-foreground">{subtitle}</p>
    </div>
  );
}
