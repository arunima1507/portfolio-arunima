"use client";

import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";

const EDUCATION = [
  {
    icon: GraduationCap,
    institution: "Maulana Azad National Institute of Technology (MANIT), Bhopal",
    qualification: "Bachelor of Technology (B.Tech) in Computer Science Engineering",
    duration: "2023 – Present",
    score: "7.67 / 10.00",
    scoreLabel: "CGPA",
    description:
      "Pursuing a Bachelor's degree in Computer Science Engineering while actively exploring full-stack development, machine learning, artificial intelligence, leadership, and community building through technical and extracurricular activities.",
  },
  {
    icon: School,
    institution: "Delhi Private School, Dubai",
    qualification: "Senior Secondary Education (Class XII)",
    duration: "Class XII",
    score: "86.7%",
    scoreLabel: "Score",
    description:
      "Completed senior secondary education with a strong academic foundation in science and mathematics, developing analytical and problem-solving skills.",
  },
  {
    icon: BookOpen,
    institution: "South East Asian International School",
    qualification: "Secondary Education (Class X)",
    duration: "Class X",
    score: "97%",
    scoreLabel: "Score",
    description:
      "Graduated with outstanding academic performance, demonstrating consistency, discipline, and a strong foundation across core subjects.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Education() {
  return (
    <section
      id="education"
      className="relative px-6 md:px-12 lg:px-16 py-24 md:py-32 max-w-7xl mx-auto"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[380px] h-[380px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <span className="text-xs md:text-sm tracking-[0.25em] text-cyan-300/80 font-semibold">
          EDUCATION
        </span>
        <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-2xl leading-snug">
          Building a strong academic foundation.
        </h2>
        <p className="mt-5 text-white/60 text-sm md:text-base max-w-2xl leading-relaxed">
          My academic journey has shaped both my technical expertise and my
          passion for innovation, leadership, and continuous learning.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col gap-6 max-w-3xl mx-auto"
      >
        {EDUCATION.map((edu) => {
          const Icon = edu.icon;
          return (
            <motion.div
              key={edu.institution}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col sm:flex-row gap-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 md:p-7 transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.05] hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-400/10 text-cyan-300 flex-shrink-0 group-hover:bg-cyan-400/15 group-hover:scale-105 transition-all duration-300">
                <Icon size={22} />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-white font-semibold text-sm md:text-base leading-snug">
                      {edu.institution}
                    </h3>
                    <p className="text-white/55 text-xs md:text-sm mt-1">
                      {edu.qualification}
                    </p>
                  </div>

                  {/* Score badge */}
                  <span className="inline-flex items-center self-start sm:self-auto gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-200 bg-cyan-400/[0.1] border border-cyan-300/20 whitespace-nowrap">
                    {edu.scoreLabel}: {edu.score}
                  </span>
                </div>

                <span className="text-xs font-medium text-cyan-300/70 tracking-wide">
                  {edu.duration}
                </span>

                <p className="text-white/60 text-xs md:text-sm leading-relaxed mt-1">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}