"use client";

import { portfolioData } from "@/lib/data";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-5xl flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-foreground hover:text-accent transition-colors"
        >
          {portfolioData.about.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-muted">
          <Link href="#about" className="hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="#skills" className="hover:text-foreground transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
