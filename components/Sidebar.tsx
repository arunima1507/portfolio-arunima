import Link from "next/link";

const socialLinks = [
  { href: "https://github.com", label: "GitHub" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://twitter.com", label: "Twitter" },
];

export default function Sidebar() {
  return (
    <aside className="w-full max-w-xs space-y-6 p-6">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/5">
        <h2 className="text-xl font-semibold">Connect</h2>
        <p className="mt-2 text-sm text-muted-foreground">Follow me on social media and get in touch.</p>
        <div className="mt-4 flex flex-col gap-3">
          {socialLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm transition hover:text-primary">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
