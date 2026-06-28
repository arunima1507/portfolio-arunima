import SectionHeading from "./ui/SectionHeading";

const experience = [
  { role: "Frontend Developer", company: "Design Studio", period: "2023" },
  { role: "UI Engineer", company: "Tech Startup", period: "2024" },
];

export default function Experience() {
  return (
    <section id="experience" className="space-y-8 py-20">
      <SectionHeading title="Experience" subtitle="Where I've worked." />
      <div className="grid gap-6 sm:grid-cols-2">
        {experience.map((item) => (
          <div key={item.role} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">{item.period}</p>
            <h3 className="mt-4 text-lg font-semibold">{item.role}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
