"use client";

import { motion } from "framer-motion";
import { Mic2, Music, Palette, Users2, Sparkles } from "lucide-react";

const INTERESTS = [
  {
    icon: Mic2,
    title: "Vocalist",
    description: "Performing and exploring music as a creative outlet.",
  },
  {
    icon: Music,
    title: "Music",
    description: "Deeply passionate about melody, rhythm and performance.",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Exploring visual storytelling and aesthetic expression.",
  },
  {
    icon: Sparkles,
    title: "Leadership",
    description: "Guiding teams and driving initiatives forward.",
  },
  {
    icon: Users2,
    title: "Community Building",
    description: "Bringing people together around shared goals.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
};

export default function BeyondCode() {
  return (
    <section
      id="beyond-code"
      className="relative px-6 md:px-12 lg:px-16 py-24 md:py-32 max-w-7xl mx-auto"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <span className="text-xs md:text-sm tracking-[0.25em] text-cyan-300/80 font-semibold">
          BEYOND CODE
        </span>
        <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-2xl leading-snug">
          What I do when I&apos;m not building software.
        </h2>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
      >
        {INTERESTS.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative flex flex-col items-center text-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] cursor-default"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-400/10 text-cyan-300 group-hover:bg-cyan-400/15 group-hover:scale-110 transition-all duration-300">
                <Icon size={22} />
              </div>
              <h3 className="text-white font-semibold text-sm md:text-base">
                {item.title}
              </h3>
              <p className="text-white/50 text-xs md:text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}