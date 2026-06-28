import SectionHeading from "./ui/SectionHeading";

export default function BeyondCode() {
  return (
    <section id="beyond-code" className="space-y-8 py-20">
      <SectionHeading title="Beyond Code" subtitle="What I do outside of development." />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold">Learning</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">I stay curious with design and frontend tooling, always improving the experiences I build.</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold">Creativity</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">I enjoy designing polished interfaces and finding elegant solutions to user challenges.</p>
        </div>
      </div>
    </section>
  );
}
