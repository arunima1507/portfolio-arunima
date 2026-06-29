"use client";

import { motion } from "framer-motion";

const TIMELINE = [
{
period: "Aug 2023",
title: "Beginning My Journey at MANIT",
org: "MANIT Bhopal",
description:
"Started my Computer Science journey at MANIT Bhopal, actively exploring academics, technical domains, and opportunities beyond the classroom.",
},
{
period: "Aug 2024",
title: "Joined IEEE Student Branch MANIT",
org: "Social Media Manager",
description:
"Started my journey with IEEE MANIT as a Social Media Manager, contributing to content strategy, digital outreach, formal communications, and community engagement initiatives.",
},

{
period: "Dec 2024",
title: "Python 3 Programming Specialization",
org: "Coursera",
description:
"Completed the Python 3 Programming Specialization, strengthening my programming foundations, problem-solving abilities, and proficiency in Python development.",
},

{
period: "Jan 2025",
title: "First Conference Experience – SCEECS'25",
org: "IEEE MANIT",
description:
"Contributed to organizing SCEECS'25, gaining valuable experience in conference operations, communications, outreach, and large-scale event management.",
},

{
period: "Apr 2025",
title: "IBM Machine Learning Professional Certificate",
org: "IBM",
description:
"Completed IBM's Machine Learning Professional Certificate, gaining hands-on exposure to machine learning concepts, model development, and data-driven problem solving.",
},

{
period: "Sep 2025",
title: "Secretary – Aarambh'25",
org: "IEEE MANIT",
description:
"Led Aarambh'25, IEEE MANIT's flagship volunteering initiative, coordinating teams, managing operations, and driving community outreach activities.",
},

{
period: "Dec 2025",
title: "Deep Learning: Concept to Application",
org: "CEC, NIT Raipur in collaboration with MANIT Bhopal",
description:
"Completed an intensive hands-on deep learning program and developed the initial version of 'Face Generation using GANs', which later evolved into the AI Synthetic Identity Studio project.",
},

{
period: "Apr 2026",
title: "Head Content & Aarambh Coordinator",
org: "IEEE MANIT",
description:
"Promoted to Head Content and Aarambh Coordinator, leading content strategy, managing teams, and overseeing communications for major IEEE initiatives and events.",
},

{
period: "May – Jul 2026",
title: "Summer Internship – Machine Learning & Deep Learning",
org: "NIT Surathkal",
description:
"Completed a summer internship and training program on Machine Learning and Deep Learning using Python, gaining practical experience in implementing intelligent systems and deep learning models.",
}
];


export default function Journey() {
  return (
    <section
      id="journey"
      className="relative px-6 md:px-12 lg:px-16 py-24 md:py-32 max-w-7xl mx-auto"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <span className="text-xs md:text-sm tracking-[0.25em] text-cyan-300/80 font-semibold">
          JOURNEY
        </span>
        <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-2xl leading-snug">
          Growth through learning, leadership &amp; creativity.
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Center line - desktop only */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-white/10 to-transparent -translate-x-1/2" />
        {/* Left line - mobile */}
        <div className="md:hidden absolute left-[14px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-white/10 to-transparent" />

        <div className="flex flex-col gap-10 md:gap-14">
          {TIMELINE.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55 }}
                className={`relative flex items-start md:items-center gap-6 md:gap-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot - mobile */}
                <div className="md:hidden relative z-10 mt-1.5 flex-shrink-0 w-7 h-7 rounded-full bg-[#070B17] border-2 border-cyan-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                {/* Card */}
                <div
                  className={`md:w-[44%] ${
                    isEven ? "md:pr-10 md:text-right" : "md:pl-10"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
                  >
                    <span className="inline-block text-xs font-semibold text-cyan-300/90 tracking-wide mb-2">
                      {item.period}
                    </span>
                    <h3 className="text-white font-semibold text-base md:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm mb-2">{item.org}</p>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Dot - desktop center */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-4 h-4 rounded-full bg-[#070B17] border-2 border-cyan-400 z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[44%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}