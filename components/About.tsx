import GlassCard from "./ui/GlassCard";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="space-y-8 py-20">
      <SectionHeading title="About Me" subtitle="A short introduction." />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4 text-base leading-7 text-muted-foreground">
          <p>
            I am a web developer with a passion for building accessible, user-friendly websites and apps. I care deeply about clean code, strong design systems, and performance.
          </p>
          <p>
            My work blends thoughtful interactions with reliable engineering, whether I am crafting layouts, building components, or scaling an interface for real-world users.
          </p>
        </div>
        <GlassCard>
          <h3 className="text-lg font-semibold">Core strengths</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>Responsive UI design</li>
            <li>Interactive web experiences</li>
            <li>Modern JavaScript + TypeScript</li>
          </ul>
        </GlassCard>
      </div>
    </section>
  );
}
