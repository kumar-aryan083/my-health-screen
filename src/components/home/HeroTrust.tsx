import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Link from "next/link";

export default function HeroTrust() {
  return (
    <Section variant="soft">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT: Message */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-textPrimary">
              Clear answers about your health —
              <span className="text-primary"> without confusion or panic</span>.
            </h1>

            <p className="mt-6 text-lg text-textMuted max-w-xl leading-relaxed">
              Doctor-reviewed private health screening with clear explanations,
              honest guidance, and real next steps — not just test results.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/find-my-health-check"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white font-medium hover:opacity-90 transition"
              >
                Find the right health check
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-primary text-primary px-6 py-3 font-medium hover:bg-white transition"
              >
                Talk to a clinician
              </Link>
            </div>

            {/* Micro reassurance */}
            <p className="mt-6 text-sm text-textMuted">
              UK-registered doctors · Confidential & GDPR secure · No
              unnecessary testing
            </p>
          </div>

          {/* RIGHT: Visual */}
          <div className="hidden lg:block">
            <div className="h-96 rounded-2xl bg-white shadow-card flex items-center justify-center text-textMuted">
              Medical imagery
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
