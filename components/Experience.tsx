"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const EXPERIENCES = [
  {
    org: "IEEE Student Branch MANIT",
    role: "Social Media Manager",
    period: "2024 - Present",
    responsibilities: [
      "Content strategy",
      "Reports",
      "Email communication",
      "Event management",
    ],
  },
  {
    org: "AARAMBH'24",
    role: "Volunteer",
    period: "2024",
    responsibilities: [],
  },
  {
    org: "SCEECS'25",
    role: "Organizing Committee",
    period: "2025",
    responsibilities: [],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  return (
    <section
      id="experience"
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
          EXPERIENCE
        </span>
        <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-2xl leading-snug">
          Leadership &amp; community involvement.
        </h2>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {EXPERIENCES.map((exp) => (
          <motion.div
            key={exp.org + exp.role}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
          >
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-cyan-400/10 text-cyan-300 mb-4">
              <Briefcase size={20} />
            </div>

            <span className="text-xs font-semibold text-cyan-300/80 tracking-wide mb-1">
              {exp.period}
            </span>
            <h3 className="text-white font-semibold text-base md:text-lg">
              {exp.role}
            </h3>
            <p className="text-white/50 text-sm mb-3">{exp.org}</p>

            {exp.responsibilities.length > 0 && (
              <ul className="flex flex-col gap-1.5 mt-1">
                {exp.responsibilities.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-2 text-white/60 text-xs md:text-sm"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-300 flex-shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}