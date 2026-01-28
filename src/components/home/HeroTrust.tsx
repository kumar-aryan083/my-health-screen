import Container from "@/components/layout/Container";
import Link from "next/link";
import Image from "next/image";

export default function HeroTrust() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full">
      {/* Background Image */}
      <Image
        src="/images/hero-clinic.jpg"
        alt="Doctor reviewing patient results"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content */}
      <Container>
        <div className="relative z-10 flex h-[85vh] min-h-[600px] items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Clear answers about your health —
              <span className="text-primarySoft">
                {" "}
                without confusion or panic
              </span>
              .
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
              Doctor-reviewed private health screening with clear explanations,
              honest guidance, and real next steps — not just test results.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/find-my-health-check"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white font-medium hover:opacity-90 transition"
              >
                Find the right health check
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white/70 text-white px-6 py-3 font-medium hover:bg-white/10 transition"
              >
                Talk to a clinician
              </Link>
            </div>

            <p className="mt-6 text-sm text-white/80">
              UK-registered doctors · Confidential & GDPR secure · No
              unnecessary testing
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
