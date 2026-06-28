"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Brain, Users } from "lucide-react";

const CARDS = [
  {
    icon: GraduationCap,
    title: "Final Year CSE",
    subtitle: "MANIT Bhopal",
  },
  {
    icon: Code2,
    title: "130+ Problems",
    subtitle: "LeetCode Solved",
  },
  {
    icon: Brain,
    title: "ML + Full Stack",
    subtitle: "Building intelligent products",
  },
  {
    icon: Users,
    title: "IEEE Leader",
    subtitle: "Community & Event Management",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-12 lg:px-16 py-24 md:py-32 max-w-7xl mx-auto"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <span className="text-xs md:text-sm tracking-[0.25em] text-cyan-300/80 font-semibold">
          ABOUT ME
        </span>
        <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-2xl leading-snug">
          Turning ideas into impactful experiences.
        </h2>
        <p className="mt-5 text-white/60 text-sm md:text-base max-w-2xl leading-relaxed">
          I&apos;m Arunima Pathak, a final year Computer Science student at MANIT
          Bhopal who enjoys blending technology, creativity and leadership. From
          developing full-stack applications to exploring machine learning and
          leading large-scale IEEE events, I love building experiences that
          create meaningful impact.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col items-center justify-center text-center gap-3 h-44 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-5 py-6 transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-400/10 text-cyan-300 group-hover:bg-cyan-400/15 transition-colors duration-300">
                <Icon size={22} />
              </div>
              <h3 className="text-white font-semibold text-sm md:text-base">
                {card.title}
              </h3>
              <p className="text-white/50 text-xs md:text-sm">{card.subtitle}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}