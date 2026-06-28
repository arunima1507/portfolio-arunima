import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arunima Pathak | Software Engineer & ML Enthusiast",
  description:
    "Portfolio of Arunima Pathak — Software Engineer, Machine Learning Enthusiast, IEEE Leader and Vocalist. Building experiences through technology, leadership and creativity.",
  keywords: [
    "Arunima Pathak",
    "Software Engineer",
    "Machine Learning",
    "MANIT Bhopal",
    "IEEE",
    "Portfolio",
  ],
  authors: [{ name: "Arunima Pathak" }],
  openGraph: {
    title: "Arunima Pathak | Software Engineer & ML Enthusiast",
    description:
      "Building experiences through technology, leadership and creativity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-[#070B17] text-white antialiased">{children}</body>
    </html>
  );
}