import SectionHeading from "./ui/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="space-y-8 py-20 text-center">
      <SectionHeading title="Contact" subtitle="Let's build something together." />
      <p className="mx-auto max-w-2xl text-sm leading-6 text-muted-foreground">
        Want to talk about a project, collaboration, or new opportunity? Send a message and I'll get back to you shortly.
      </p>
      <a href="mailto:hello@example.com" className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90">
        Email Me
      </a>
    </section>
  );
}
