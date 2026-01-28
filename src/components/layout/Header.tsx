"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-borderSoft">
      <Container>
        <div className="h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg md:text-xl font-semibold text-primary"
          >
            UK Medicare Screening
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/health-checks">Health Checks</Link>
            <Link href="/find-my-health-check">Find my health check</Link>
            <Link href="/about-us">About</Link>
            <Link href="/trust-safety">Trust & Safety</Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="/find-my-health-check">
              <Button className="text-sm px-5 py-2">
                Find your health check
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-textPrimary"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-borderSoft bg-white">
          <Container>
            <nav className="py-6 flex flex-col gap-4 text-sm font-medium">
              <Link href="/health-checks" onClick={() => setOpen(false)}>
                Health Checks
              </Link>
              <Link href="/how-it-works" onClick={() => setOpen(false)}>
                How It Works
              </Link>
              <Link href="/about-us" onClick={() => setOpen(false)}>
                About
              </Link>
              <Link href="/trust-safety" onClick={() => setOpen(false)}>
                Trust & Safety
              </Link>

              <Link href="/find-my-health-check" onClick={() => setOpen(false)}>
                <Button className="w-full mt-2">Find your health check</Button>
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
