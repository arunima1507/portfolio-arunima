import SectionHeading from "./ui/SectionHeading";

const skills = ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"];

export default function Skills() {
  return (
    <section id="skills" className="space-y-8 py-20">
      <SectionHeading title="Skills" subtitle="Tools I use." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div key={skill} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center text-sm font-medium">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
