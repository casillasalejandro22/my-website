"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "https://github.com/casillasalejandro22", label: "GitHub", external: true },
    { href: "https://www.linkedin.com/in/casillasalejandro", label: "LinkedIn", external: true },
    { href: "/resume.pdf", label: "Resume", external: true }, // treat as external
  ];

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/30 border-b border-[color-mix(in_oklab,#cbd5e1_70%,var(--color-primary)_30%)]">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href="/" className="text-base sm:text-lg font-semibold tracking-tight">
          Alejandro Casillas
        </Link>
        <div className="flex items-center gap-3">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="navlink text-white hover:bg-white/10 px-3 py-1 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={
                  pathname === link.href
                    ? "btn btn-primary text-white"
                    : "navlink text-white hover:bg-white/10 px-3 py-1 rounded-lg transition-colors"
                }
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </nav>
    </header>
  );
}
