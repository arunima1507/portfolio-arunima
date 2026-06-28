import GlassCard from "./ui/GlassCard";
import SectionHeading from "./ui/SectionHeading";

const projects = [
  { name: "Portfolio Website", description: "A modern portfolio built with Next.js and Tailwind CSS." },
  { name: "Interactive Dashboard", description: "A responsive dashboard with charts and custom UI components." },
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-8 py-20">
      <SectionHeading title="Projects" subtitle="Recent work." />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <GlassCard key={project.name}>
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.description}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
