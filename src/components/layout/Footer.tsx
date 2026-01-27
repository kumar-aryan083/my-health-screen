import Container from "@/components/layout/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-borderSoft bg-white">
      <Container>
        {/* Main footer grid */}
        <div className="py-12 md:py-16 grid gap-10 sm:grid-cols-2 md:grid-cols-4 text-sm text-textMuted">
          {/* Brand */}
          <div>
            <p className="font-semibold text-textPrimary text-base">
              UK Medicare Screening
            </p>
            <p className="mt-3 max-w-xs leading-relaxed">
              Private health screening with clarity, care, and clinical
              integrity.
            </p>
          </div>

          {/* Health Checks */}
          <div>
            <p className="font-semibold text-textPrimary text-sm uppercase tracking-wide">
              Health checks
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/health-checks/well-man"
                  className="hover:text-primary transition"
                >
                  Well-Man Health MOT
                </Link>
              </li>
              <li>
                <Link
                  href="/health-checks/well-woman"
                  className="hover:text-primary transition"
                >
                  Well-Woman Health MOT
                </Link>
              </li>
              <li>
                <Link
                  href="/health-checks/heart-stroke"
                  className="hover:text-primary transition"
                >
                  Heart & Stroke
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-semibold text-textPrimary text-sm uppercase tracking-wide">
              Company
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-primary transition"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/trust-safety"
                  className="hover:text-primary transition"
                >
                  Trust & safety
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="hover:text-primary transition"
                >
                  Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className="font-semibold text-textPrimary text-sm uppercase tracking-wide">
              Support
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/contact" className="hover:text-primary transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-primary transition"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-borderSoft py-6 text-xs text-textMuted flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} UK Medicare Screening. All rights
            reserved.
          </p>
          <p>Confidential · GDPR compliant · UK-based care</p>
        </div>
      </Container>
    </footer>
  );
}
