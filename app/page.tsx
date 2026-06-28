import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import BeyondCode from "@/components/BeyondCode";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#070B17] text-white overflow-x-hidden">
      <Sidebar />
      <Navbar />

      <div className="md:pl-20">
        <Hero />
        <About />
        <Education />
        <Journey />
        <Skills />
        <Projects />
        <Experience />
        <BeyondCode />
        <Contact />
      </div>
    </main>
  );
}