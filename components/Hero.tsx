"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ArrowRight, Mail, FileText } from "lucide-react";

const ROLES = [
  "Software Engineer",
  "Machine Learning Enthusiast",
  "Community Builder",
  "IEEE Leader",
  "Vocalist",
];

function useTypewriter(words: string[], speed = 70, pause = 1500) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: NodeJS.Timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(ROLES);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-16 pt-24 overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="absolute -top-32 -left-20 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-500/15 rounded-full blur-[130px] animate-pulse-slow" />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <span className="text-cyan-300/90 text-sm md:text-base font-medium tracking-wide">
            Welcome to my world ✨
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-white to-cyan-200 bg-clip-text text-transparent">
              Arunima
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-200 to-purple-300 bg-clip-text text-transparent">
              Pathak
            </span>
          </h1>

          <div className="h-7 flex items-center text-base md:text-lg text-white/70 font-medium">
            <span>{typed}</span>
            <span className="ml-1 w-[2px] h-5 bg-cyan-400 animate-blink" />
          </div>

          <p className="text-white/60 text-sm md:text-base max-w-md leading-relaxed">
            Building experiences through technology, leadership and creativity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full">
            <button
              onClick={() => scrollTo("#about")}
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-white/80 text-sm font-medium hover:bg-cyan-400/10 hover:border-cyan-300/50 hover:text-cyan-200 transition-all duration-300"
            >
              Explore
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo("#contact")}
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-white/80 text-sm font-medium hover:bg-cyan-400/10 hover:border-cyan-300/50 hover:text-cyan-200 transition-all duration-300"
            >   
              <Mail size={16} />
              Contact
            </button>

            {/* Resume */}
            <a
                href="/Arunima_Pathak_29June2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-[#070B17] text-sm font-semibold hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_25px_rgba(34,211,238,0.35)]"
            >
                <FileText size={16} />
                Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative flex justify-center md:justify-end"
        >
        <div className="absolute w-[450px] h-[450px] md:w-[650px] md:h-[650px] bg-gradient-to-br from-cyan-400/20 via-blue-500/15 to-purple-500/20 rounded-full blur-[120px]" />
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareMaxOpacity={0.15}
            glareColor="#22d3ee"
            glarePosition="all"
            className="relative z-10"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[320px] h-[240px] md:w-[500px] md:h-[375px] lg:w-[600px] lg:h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(34,211,238,0.25)]"            >
              <img
                src="arunima2.png"
                alt="Arunima Pathak"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-cyan-300/20" />
            </motion.div>
          </Tilt>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] tracking-[0.2em] text-white/40">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center p-1"
        >
          <div className="w-1 h-1.5 rounded-full bg-cyan-300" />
        </motion.div>
      </motion.div>
    </section>
  );
}