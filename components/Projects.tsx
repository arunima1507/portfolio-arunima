"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const PROJECTS = [
  {
    title: "AI Travel Planner",
    tech: ["Next.js", "Supabase", "Gemini API"],
    description:
      "AI-powered travel planner generating personalized itineraries.",
    features: [
      "Budget planning",
      "Travel style personalization",
      "Weather-aware suggestions",
    ],
    image: "/projects/travel-planner.png",
    github: "https://github.com/yourusername/ai-travel-planner",
    demo: "https://your-demo-link.com",
  },
  {
    title: "AI Synthetic Identity Studio",
    tech: ["PyTorch", "DCGAN", "Flask"],
    description:
      "Generates synthetic human faces using Deep Convolutional GANs.",
    features: [],
    image: "/projects/synthetic-studio.png",
    github: "https://github.com/yourusername/synthetic-identity-studio",
    demo: "",
  },
  {
    title: "Acadex Dashboard",
    tech: ["React", "Supabase"],
    description:
      "Academic management dashboard for attendance, assignments and analytics.",
    features: [],
    image: "/projects/acadex.png",
    github: "https://github.com/yourusername/acadex-dashboard",
    demo: "",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Projects() {
  return (
    <section
      id="projects"
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
          PROJECTS
        </span>
        <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-2xl leading-snug">
          Things I&apos;ve built and shipped.
        </h2>
      </motion.div>

      {/* Project cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.05] hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]"
          >
            {/* Preview image */}
            <div className="relative w-full h-44 overflow-hidden bg-white/[0.02]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B17] via-transparent to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6 gap-3">
              <h3 className="text-white font-semibold text-base md:text-lg">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-[11px] font-medium text-cyan-200/90 bg-cyan-400/[0.08] border border-cyan-300/15"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-white/60 text-sm leading-relaxed">
                {project.description}
              </p>

              {project.features.length > 0 && (
                <ul className="flex flex-col gap-1.5 mt-1">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-white/50 text-xs"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-300 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              )}

              {/* Buttons */}
              <div className="flex items-center gap-3 mt-auto pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium text-white/80 border border-white/15 hover:border-cyan-300/40 hover:text-cyan-200 transition-all duration-300"
                >
                  <FaGithub size={14} />
                  GitHub
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-[#070B17] bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_18px_rgba(34,211,238,0.3)]"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}