"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, FileText } from "lucide-react";

const SOCIAL_LINKS = [
  {
    icon: FaGithub,
    href: "https://github.com/arunima1507",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:youremail@example.com",
    label: "Email",
  },
  {
    icon: FileText,
    href: "/resume.pdf",
    label: "Resume",
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-screen w-20 z-40 flex-col items-center justify-center bg-[#070B17] border-r border-white/5">
      <div className="flex flex-col items-center gap-6">
        {SOCIAL_LINKS.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={social.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center justify-center w-11 h-11 rounded-xl text-white/60 hover:text-cyan-300 transition-colors duration-300"
            >
              {/* Glow on hover */}
              <span className="absolute inset-0 rounded-xl bg-cyan-400/0 group-hover:bg-cyan-400/10 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300" />
              <Icon size={19} className="relative z-10" />
            </motion.a>
          );
        })}
      </div>

      {/* Thin vertical line below icons */}
      <div className="absolute bottom-10 w-px h-16 bg-gradient-to-b from-white/20 to-transparent" />
    </aside>
  );
}