"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Send } from "lucide-react";

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "youremail@example.com",
    href: "mailto:youremail@example.com",
  },
  {
    icon: FaLinkedin,
    label: "linkedin.com/in/yourusername",
    href: "https://linkedin.com/in/yourusername",
  },
  {
    icon: FaGithub,
    label: "github.com/yourusername",
    href: "https://github.com/yourusername",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // TODO: wire this up to your email service (Resend, Formspree, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section
      id="contact"
      className="relative px-6 md:px-12 lg:px-16 py-24 md:py-32 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center mb-14"
      >
        <span className="text-xs md:text-sm tracking-[0.25em] text-cyan-300/80 font-semibold">
          CONTACT
        </span>
        <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-2xl mx-auto leading-snug">
          Let&apos;s Build Something Meaningful Together.
        </h2>
        <p className="mt-4 text-white/60 text-sm md:text-base max-w-xl mx-auto">
          Have an idea, opportunity, or just want to say hi? My inbox is always open.
        </p>
      </motion.div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Left: contact links */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 justify-center"
        >
          {CONTACT_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.05] hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-cyan-400/10 text-cyan-300 group-hover:bg-cyan-400/15 transition-colors duration-300 flex-shrink-0">
                  <Icon size={19} />
                </div>
                <span className="text-white/70 text-sm md:text-base group-hover:text-cyan-200 transition-colors duration-300 break-all">
                  {link.label}
                </span>
              </a>
            );
          })}
        </motion.div>

        {/* Right: contact form */}
        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-xs text-white/50 font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="rounded-xl bg-white/[0.04] border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-cyan-300/50 focus:bg-white/[0.06] transition-all duration-300"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-xs text-white/50 font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="rounded-xl bg-white/[0.04] border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-cyan-300/50 focus:bg-white/[0.06] transition-all duration-300"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs text-white/50 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your idea..."
              className="resize-none rounded-xl bg-white/[0.04] border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-cyan-300/50 focus:bg-white/[0.06] transition-all duration-300"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-[#070B17] text-sm font-semibold hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_25px_rgba(34,211,238,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? (
              "Sending..."
            ) : status === "sent" ? (
              "Message Sent ✓"
            ) : (
              <>
                Send Message
                <Send size={15} />
              </>
            )}
          </button>
        </motion.form>
      </div>

      <p className="relative z-10 text-center text-white/30 text-xs mt-20">
        © {new Date().getFullYear()} Arunima Pathak. All rights reserved.
      </p>
    </section>
  );
}