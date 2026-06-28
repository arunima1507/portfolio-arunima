import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="w-full px-6 py-4 bg-transparent backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          Portfolio
        </Link>
        <div className="flex gap-6 text-sm font-medium">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-primary">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
