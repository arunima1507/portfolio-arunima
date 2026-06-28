import SectionHeading from "./ui/SectionHeading";

const milestones = [
  { year: "2021", label: "Started building web apps" },
  { year: "2022", label: "Launched first major portfolio project" },
  { year: "2023", label: "Expanded into design systems and motion" },
];

export default function Journey() {
  return (
    <section id="journey" className="space-y-8 py-20">
      <SectionHeading title="My Journey" subtitle="How I got here." />
      <div className="grid gap-4 md:grid-cols-3">
        {milestones.map((item) => (
          <div key={item.year} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{item.year}</p>
            <p className="mt-4 text-sm leading-6">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
