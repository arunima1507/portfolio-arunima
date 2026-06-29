"use client";

import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    title: "Languages",
    skills: ["Python", "C++", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "HTML", "CSS", "Tailwind"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI"],
  },
  {
    title: "AI / ML",
    skills: ["PyTorch", "Scikit-learn", "Pandas", "NumPy", "Tensorflow"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Supabase", "VS Code", "Jupyter Notebook", "Google Colab"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function Skills() {
  return (
    <section
      id="skills"
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
          SKILLS
        </span>
        <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-2xl leading-snug">
          Tools and technologies I work with.
        </h2>
      </motion.div>

      {/* Skill groups */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {SKILL_GROUPS.map((group) => (
          <motion.div
            key={group.title}
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
          >
            <h3 className="text-white font-semibold text-sm md:text-base mb-4 tracking-wide">
              {group.title}
            </h3>

            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-2.5"
            >
              {group.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={badgeVariants}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-medium text-white/70 bg-white/[0.04] border border-white/10 hover:text-cyan-200 hover:border-cyan-300/40 hover:bg-cyan-400/[0.08] transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}