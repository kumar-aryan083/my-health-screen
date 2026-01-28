"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-borderSoft">
      <Container>
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg md:text-xl font-semibold tracking-tight text-primary"
          >
            UK Medicare Screening
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-textPrimary">
            <Link
              href="/health-checks"
              className="hover:text-primary transition"
            >
              Health Checks
            </Link>
            <Link
              href="/find-my-health-check"
              className="hover:text-primary transition"
            >
              Find my health check
            </Link>
            <Link href="/about-us" className="hover:text-primary transition">
              About
            </Link>
            <Link
              href="/trust-safety"
              className="hover:text-primary transition"
            >
              Trust & Safety
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href="/find-my-health-check">
              <Button className="px-5 py-2 text-sm text-textPrimary">
                Find your health check
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden inline-flex items-center justify-center rounded-md border border-borderSoft px-3 py-2 text-textPrimary hover:bg-backgroundSoft transition"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      {open && (
        <div className="lg:hidden border-t border-borderSoft bg-white">
          <Container>
            <nav className="flex flex-col gap-5 py-6 text-sm font-medium text-textPrimary">
              <Link
                href="/health-checks"
                onClick={() => setOpen(false)}
                className="hover:text-primary"
              >
                Health Checks
              </Link>

              <Link
                href="/find-my-health-check"
                onClick={() => setOpen(false)}
                className="hover:text-primary"
              >
                Find my health check
              </Link>

              <Link
                href="/about-us"
                onClick={() => setOpen(false)}
                className="hover:text-primary"
              >
                About
              </Link>

              <Link
                href="/trust-safety"
                onClick={() => setOpen(false)}
                className="hover:text-primary"
              >
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
