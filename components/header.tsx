"use client";

import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site-data";

export function Header() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = mounted ? resolvedTheme !== "light" : true;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/88 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        {/* Brand link */}
        <Link href="/" className="font-heading text-lg font-semibold text-foreground" aria-label="Mehul Variya home">
          Mehul Variya
        </Link>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 rounded-full border border-border bg-muted/45 p-1 sm:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition hover:bg-card hover:text-foreground"
                aria-label={`Go to ${item.label}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button
            type="button"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:border-primary hover:text-primary"
          >
            {mounted ? (
              isDark ? <Sun aria-hidden="true" size={18} /> : <Moon aria-hidden="true" size={18} />
            ) : (
              <span className="h-[18px] w-[18px]" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
