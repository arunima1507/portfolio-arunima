import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
}

export default function GlassCard({ children }: GlassCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl shadow-black/10 backdrop-blur-xl">
      {children}
    </div>
  );
}
