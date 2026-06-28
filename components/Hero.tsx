import SectionHeading from "./ui/SectionHeading";

export default function Hero() {
  return (
    <section id="hero" className="space-y-6 py-20 text-center">
      <SectionHeading title="Hi, I'm Arunima" subtitle="I build beautiful web experiences." />
      <p className="mx-auto max-w-2xl text-base leading-7 text-muted-foreground">
        I design and develop responsive, polished websites using modern web technologies that deliver
        delightful, professional experiences across desktop and mobile.
      </p>
    </section>
  );
}
